---
title: 'Building a Scalable SaaS Platform: Architecture Lessons Learned'
description: 'Key architectural decisions and lessons from building Garista, a restaurant management SaaS platform that served thousands of users — from database design to deployment.'
pubDate: 2025-09-15
tags: ['saas', 'architecture', 'nextjs', 'laravel', 'database']
---

Building a SaaS platform from the ground up is both exhilarating and humbling. Over the past year, I've been working on **Garista**, a cloud-based restaurant management platform. What started as a simple idea — help restaurants digitize their operations — turned into a complex distributed system that taught me more about software architecture than any book ever could.

This post covers the key architectural decisions I made, what went right, what went wrong, and what I'd do differently.

## Why Garista?

Restaurants in Morocco (and much of Africa) still run on paper. Orders are written on notepads, inventory is tracked in Excel, and reporting is done manually. The gap between what's available and what's needed is enormous.

Garista aims to bridge that gap with:
- **Order management** — Real-time order tracking from table to kitchen
- **Menu management** — Digital menus with instant updates
- **Staff management** — Shift scheduling and performance tracking
- **Reporting & analytics** — Sales trends, popular items, peak hours
- **Multi-location support** — For restaurant chains

## The Stack

I chose a hybrid architecture: **Next.js** for the frontend and **Laravel** for the backend API.

### Why Not Monolithic?

A monolithic app would have been faster to build initially, but I knew the requirements would diverge. The frontend needs to be highly interactive (real-time order updates, drag-and-drop menu builders), while the backend needs to handle complex data processing, reporting queries, and third-party integrations.

Separating them from day one — even though it added initial complexity — paid off enormously when I needed to:
- Add a mobile app without touching the backend
- Scale the API independently from the frontend
- Integrate with third-party delivery platforms (each requiring API changes)

### Frontend: Next.js + TypeScript

```typescript
// Tech stack
- Next.js (App Router) with TypeScript
- Tailwind CSS for UI
- Zustand for client-state management
- React Query (TanStack Query) for server-state caching
- WebSocket client for real-time updates
```

React Query was the standout choice. It eliminated entire categories of bugs around data fetching — stale data, race conditions, and loading states. Combined with Zustand for truly client-side state (UI state, form state), the state management was clean and predictable.

### Backend: Laravel + MySQL + Redis

```typescript
// Tech stack
- Laravel with API resources
- MySQL 8 with proper indexing
- Redis for caching, queues, and sessions
- Laravel WebSockets (reverb) for real-time features
- Laravel Horizon for queue monitoring
```

Laravel was chosen for its mature ecosystem (authentication, queue management, caching abstraction) and its excellent support for WebSockets. The API resources pattern made it straightforward to return consistent, paginated JSON responses.

## Key Architectural Decisions

### 1. Multi-Tenancy Strategy

Restaurants are naturally isolated — one restaurant's data should never leak into another's. I chose the **single database, shared schema** approach:

```sql
-- Every table has a tenant_id column
CREATE TABLE orders (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tenant_id BIGINT UNSIGNED NOT NULL,
    table_number VARCHAR(10),
    status ENUM('pending', 'preparing', 'ready', 'served', 'paid'),
    total DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id),
    INDEX idx_tenant_status (tenant_id, status)
);
```

**Why not a separate database per tenant?** For the scale we're at (hundreds, not thousands of restaurants), shared schema is simpler to manage and query across tenants. If Garista grows to thousands of tenants, I'd migrate to a hybrid model with database sharding.

The key is **strict tenant isolation at the query level** — every single query includes `WHERE tenant_id = ?`. I implemented this as a global scope in Laravel:

```php
// App\Scopes\TenantScope.php
public function apply(Builder $builder, Model $model)
{
    if (auth()->check()) {
        $builder->where('tenant_id', auth()->user()->tenant_id);
    }
}
```

This makes it impossible to accidentally leak data between tenants.

### 2. Database Design — The Most Important Decision

I spent three weeks on database schema design before writing any API code. That investment saved months of refactoring later.

**The Menu system** was the most complex part. A restaurant's menu has:
- Categories (Appetizers, Mains, Desserts)
- Items (each with name, description, price, image)
- Modifiers (size options, add-ons, special instructions)
- Availability (time-based, seasonal)

```sql
CREATE TABLE menu_categories (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tenant_id BIGINT UNSIGNED NOT NULL,
    name VARCHAR(100) NOT NULL,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id)
);

CREATE TABLE menu_items (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tenant_id BIGINT UNSIGNED NOT NULL,
    category_id BIGINT UNSIGNED NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (category_id) REFERENCES menu_categories(id),
    FOREIGN KEY (tenant_id) REFERENCES tenants(id),
    INDEX idx_category (category_id),
    INDEX idx_active (tenant_id, is_active)
);
```

**The lesson:** Normalize until it hurts, then denormalize only when performance measurements prove you need to. Premature denormalization creates data consistency nightmares.

### 3. Caching Strategy

Redis is not a magic wand. You need to know what to cache, for how long, and when to invalidate.

```php
// Cache menu data aggressively (frequently accessed, rarely changes)
$menu = Cache::remember("tenant.{$tenantId}.menu", 3600, function () {
    return MenuResource::collection(
        MenuCategory::with('items')
            ->where('tenant_id', $tenantId)
            ->orderBy('sort_order')
            ->get()
    );
});

// Don't cache order data (changes every second)
// Use Redis as a fast data store instead
```

My caching strategy:
- **Menu data** — Cache for 1 hour, invalidate when menu is updated
- **User sessions** — Redis (Ephemeral, fast access)
- **Reporting aggregates** — Cache for 5-30 minutes (depending on report type), recompute on demand
- **Order data** — Never cached. Real-time read from database with WebSocket push

### 4. Real-Time Order Updates

Real-time functionality was non-negotiable. When a waiter places an order, the kitchen needs to see it instantly.

I used **Laravel Reverb** (WebSocket server) on the backend and a custom React hook on the frontend:

```typescript
// Frontend WebSocket hook
function useOrderStream(tenantId: string) {
  return useQuery({
    queryKey: ['orders', 'live', tenantId],
    queryFn: () => fetchOrders(tenantId),
    // Refetch every 2 seconds as fallback
    refetchInterval: 2000,
  });
}

// WebSocket integration
useEffect(() => {
  const channel = window.Echo.private(`tenant.${tenantId}`);
  
  channel.listen('OrderPlaced', (event: any) => {
    queryClient.setQueryData(['orders', 'live', tenantId], (old: any) => {
      return { ...old, data: [...old.data, event.order] };
    });
  });
  
  channel.listen('OrderUpdated', (event: any) => {
    queryClient.setQueryData(['orders', 'live', tenantId], (old: any) => {
      return {
        ...old,
        data: old.data.map((o: any) =>
          o.id === event.order.id ? event.order : o
        ),
      };
    });
  });
  
  return () => channel.unsubscribe();
}, [tenantId]);
```

The combination of WebSocket push (instant updates) + polling fallback (recovery from missed messages) gives both speed and reliability.

### 5. Performance Lessons Learned the Hard Way

**Lesson 1: Indexing matters more than you think.**

After a few months of production, a simple "get today's orders" query started taking **12 seconds**. The orders table had grown to 100,000+ rows.

The fix was a composite index:

```sql
ALTER TABLE orders ADD INDEX idx_tenant_date_status (tenant_id, created_at, status);
```

Query time dropped from 12 seconds to **8 milliseconds**. A 1500x improvement with a single line of SQL.

**Lesson 2: N+1 queries are silent killers.**

Laravel's Eloquent ORM makes it easy to write N+1 queries without realizing it:

```php
// ❌ Bad — N+1: 1 query for orders + N queries for items
$orders = Order::where('tenant_id', $tenantId)->get();
foreach ($orders as $order) {
    echo $order->items->count(); // Triggers a query for each order
}

// ✅ Good — Eager load relationships
$orders = Order::with('items')->where('tenant_id', $tenantId)->get();
```

**Lesson 3: Queue everything that isn't immediate.**

Report generation, email notifications, image processing — none of these need to happen synchronously. Using Laravel's queue system with Redis, I moved all non-critical work to background jobs.

```php
// Instead of generating a report inline
dispatch(new GenerateDailyReport($tenantId));

// The user gets a notification when it's ready
// No one waits for the page to load
```

## Deployment and DevOps

I deployed Garista on a **VPS** (DigitalOcean) with the following setup:

- **Nginx** as reverse proxy
- **PHP-FPM** for Laravel
- **Node.js** (PM2) for Next.js
- **MySQL 8** with daily automated backups
- **Redis** for caching and queues
- **GitHub Actions** for CI/CD

The deployment pipeline:

1. Push to `main` branch
2. GitHub Actions runs tests and TypeScript checks
3. On success, builds the Next.js frontend
4. Deploys via SSH to the VPS
5. Runs migrations and restarts queue workers

Total deployment time: ~3 minutes. I can ship fixes multiple times per day with confidence.

## What I'd Do Differently

- **Start with a monitoring system** — I added Sentry and Grafana after launch, not before. That was a mistake. You need observability from day one.
- **More aggressive caching earlier** — I was conservative with caching, which meant the database worked harder than necessary for the first few months.
- **Write integration tests sooner** — Unit tests catch logic errors. Integration tests catch architecture errors. The latter are more valuable for a system like this.
- **Better error boundaries in React** — One uncaught error in a component can take down the entire UI. Error boundaries should be in place before launch.

## Conclusion

Building Garista taught me that good architecture isn't about using the trendiest tools — it's about making the right tradeoffs for your specific use case. Next.js and Laravel are not the "hottest" stack in 2025, but they are the right stack for this product.

The most important lesson: **start simple, measure everything, and only add complexity when the data proves you need it.** My first database schema had 8 tables. It grew to 40+ tables over time, but each one was added because a real feature required it, not because I was trying to build a "scalable" system from the start.

If you're building a SaaS platform, focus on solving real customer problems first. Architecture is important, but it's a means to an end. The end is delivering value to users.
