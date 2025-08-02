import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import React, {  useState, useEffect, memo } from "react";

// Types
interface DockItem {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

interface FloatingDockProps {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}

// Optimized component with memo to prevent unnecessary re-renders
export const FloatingDock = memo(({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) => {
  // Check if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener with debounce
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  
  // Conditionally render based on screen size
  return isMobile ? (
    <FloatingDockMobile items={items} className={mobileClassName} />
  ) : (
    <FloatingDockDesktop items={items} className={desktopClassName} />
  );
});

FloatingDock.displayName = "FloatingDock";

// Mobile version with simplified animations
const FloatingDockMobile = memo(({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={cn("relative block", className)}>
      {open && (
        <div className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2 transition-all">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="transform transition-all duration-200"
              style={{
                opacity: open ? 1 : 0,
                transform: `translateY(${open ? 0 : 10}px)`,
                transitionDelay: `${(items.length - 1 - idx) * 50}ms`,
              }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  aria-label={item.title}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-6 w-6">{item.icon}</div>
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  aria-label="change theme"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-6 w-6">{item.icon}</div>
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
        aria-label="toggle menu"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
});

FloatingDockMobile.displayName = "FloatingDockMobile";

// Desktop version with optimized hover effects
const FloatingDockDesktop = memo(({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto justify-center h-16 items-center gap-4 rounded-2xl bg-gray-50 px-4 flex dark:bg-neutral-900",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} {...item} />
      ))}
    </div>
  );
});

FloatingDockDesktop.displayName = "FloatingDockDesktop";

// Optimized icon container with CSS-based hover effects instead of physics simulations
const IconContainer = memo(({
  title,
  icon,
  href,
  onClick,
}: Omit<DockItem, 'icon'> & { icon: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState(50); // Default size
  
  // Use CSS transitions instead of physics simulations
  const handleMouseEnter = () => {
    setHovered(true);
    setSize(100);
  };
  
  const handleMouseLeave = () => {
    setHovered(false);
    setSize(50);
  };
  
  // Calculate icon size proportionally
  const iconSize = size * 0.48; // 48% of container size
  
  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 transition-all duration-300 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {hovered && (
          <div
            className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white transition-opacity duration-200"
            style={{
              transform: 'translateX(-50%)',
              opacity: hovered ? 1 : 0,
            }}
          >
            {title}
          </div>
        )}
        {href ? (
          <a 
            href={href} 
            target={title === 'LinkedIn' || title === 'GitHub' ? '_blank' : '_self'} 
            aria-label={title}
          >
            <div
              className="flex items-center justify-center transition-all duration-300 ease-out"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            >
              {icon}
            </div>
          </a>
        ) : (
          <button onClick={onClick} aria-label="change theme">
            <div
              className="flex items-center justify-center transition-all duration-300 ease-out"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            >
              {icon}
            </div>
          </button>
        )}
      </div>
    </div>
  );
});

IconContainer.displayName = "IconContainer";