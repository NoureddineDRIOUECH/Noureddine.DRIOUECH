---
title: 'TypeScript Best Practices for Production Applications'
description: 'Essential TypeScript patterns and practices that will make your code more maintainable, type-safe, and enjoyable to work with — based on real production experience.'
pubDate: 2025-07-10
tags: ['typescript', 'javascript', 'best-practices', 'web-development']
---

TypeScript has become the undisputed standard for building robust web applications. After using it extensively in production — from SaaS platforms to automation systems — I've developed strong opinions about what works and what doesn't.

This isn't a beginner tutorial. It's a collection of patterns I've found genuinely valuable in real projects, along with specific examples and reasoning.

## 1. Prefer Interfaces for Object Shapes, Types for Unions

The classic debate. Here's my rule:

- **Use `interface`** for object shapes that might be extended (especially in public APIs)
- **Use `type`** for unions, intersections, tuples, and utility transformations

```typescript
// Good — interface for public API object
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Good — type for discriminated union
type ApiResponse<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

// Good — type for utility transformation
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```

Why? Interfaces give better error messages in IDE tooltips (TypeScript shows the interface name, not the expanded type), and they're more performant for the compiler when checking structural compatibility. Types are more flexible for the cases where interfaces don't suffice.

## 2. Discriminated Unions for State Management

This pattern is the single biggest quality-of-life improvement in TypeScript. Instead of tracking states with boolean flags, model each state as a variant of a union:

```typescript
// ❌ Bad — boolean flags that don't compose
interface UIState {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  data?: DashboardData;
}

// ✅ Good — each state is explicit and impossible to represent invalid states
type DashboardState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: DashboardData }
  | { status: 'empty' };
```

With the union approach, you can never accidentally access `data` when the state is `'loading'` — TypeScript forces you to narrow the type first. This eliminates an entire category of runtime bugs.

I use this pattern extensively in **Garista**, the restaurant management SaaS I built. Every data-fetching component uses a discriminated union, and it's dramatically reduced edge-case bugs.

## 3. The `satisfies` Operator

Added in TypeScript 4.9, `satisfies` lets you validate that a value matches a type without losing its narrowed type:

```typescript
// Without satisfies — loses the literal types
const colors: Record<string, string> = {
  primary: '#3b82f6',
  success: '#22c55e',
};
// colors.primary is just 'string' — autocomplete is generic

// With satisfies — validates but preserves literal type
const colors = {
  primary: '#3b82f6',
  success: '#22c55e',
} satisfies Record<string, string>;
// colors.primary is the literal '#3b82f6' — autocomplete shows the actual value
```

This is incredibly useful for configuration objects, route definitions, and any case where you want type validation without type widening.

## 4. Leverage `unknown` Instead of `any`

`any` is a type-safe escape hatch. `unknown` is a type-safe container. When you receive data from an external source (API response, user input, localStorage), use `unknown` and validate:

```typescript
// ❌ Bad — loses all type safety
function parseUser(data: any): User {
  return data; // trust me bro
}

// ✅ Good — validate at the boundary
function parseUser(data: unknown): User {
  if (!isUser(data)) {
    throw new Error('Invalid user data');
  }
  return data;
}

function isUser(data: unknown): data is User {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as User).id === 'string' &&
    typeof (data as User).name === 'string'
  );
}
```

This pattern — validating at the boundary, then using the validated type internally — is sometimes called "parse, don't validate" and it makes your code dramatically more robust.

## 5. Generic Constraints and Infer

Generics aren't just for utility libraries. Use them to create type-safe relationships between function parameters:

```typescript
// ❌ Bad — loose typing
function getProperty(obj: any, key: string): any {
  return obj[key];
}

// ✅ Good — preserves the relationship
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Even better — infer return type from builder pattern
function createApiClient<const T extends readonly string[]>(endpoints: T) {
  type Endpoint = T[number];
  return {
    call: (endpoint: Endpoint) => {
      // type-safe endpoint parameter with autocomplete
      return fetch(`/api/${endpoint}`);
    }
  };
}

const api = createApiClient(['users', 'orders', 'products'] as const);
api.call('users'); // ✅ autocompleted and type-safe
api.call('invalid'); // ❌ TypeScript error
```

## 6. Real-World: Strict tsconfig

Start every project with a strict tsconfig. The "strict" flag enables a suite of checks that catch real bugs:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true
  }
}
```

`noUncheckedIndexedAccess` is particularly valuable — it forces you to handle the case where an array or object access might return `undefined`. This one setting has prevented countless runtime errors in my applications.

## 7. Type Tests

As your type definitions grow in complexity, write tests for them. `vitest` or `jest` with `expect-type` let you assert type behavior:

```typescript
import { expectTypeOf } from 'expect-type';

test('DeepPartial should make all properties optional', () => {
  type Input = { a: string; b: { c: number } };
  type Result = DeepPartial<Input>;
  
  expectTypeOf<Result>().toHaveProperty('a').toBeOptional();
  expectTypeOf<Result>().toHaveProperty('b').toBeOptional();
});
```

This is especially important for library code, utility types, and API client generators.

## Putting It All Together

TypeScript is more than a type checker — it's a design tool. Strong types guide better architecture decisions. When your types are hard to express, your architecture is probably overcomplicated.

In **Garista**, I found that every time I struggled to write a type, it was signaling a design problem. Cleaning up the types forced me to clean up the architecture. The reverse was also true: well-designed modules were trivially easy to type.

Start with strict mode. Use discriminated unions for state. Validate at API boundaries. Let TypeScript's type system work for you, not against you.
