import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import React, { useState, useEffect, memo } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  
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
        <div className="absolute inset-x-0 bottom-full mb-3 flex flex-col gap-2 transition-all">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="transform transition-all duration-200"
              style={{
                opacity: open ? 1 : 0,
                transform: `translateY(${open ? 0 : 10}px)`,
                transitionDelay: `${(items.length - 1 - idx) * 40}ms`,
              }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  aria-label={item.title}
                  className="flex h-11 w-11 items-center justify-center rounded-full glass-panel shadow-lg active:scale-95 transition-all text-foreground"
                >
                  <div className="h-5 w-5">{item.icon}</div>
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  aria-label="change theme"
                  className="flex h-11 w-11 items-center justify-center rounded-full glass-panel shadow-lg active:scale-95 transition-all text-foreground"
                >
                  <div className="h-5 w-5">{item.icon}</div>
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-full glass-panel shadow-xl text-foreground active:scale-95 transition-all border border-border"
        aria-label="toggle menu"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5" />
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
    <nav
      aria-label="Navigation dock"
      className={cn(
        "mx-auto justify-center h-16 items-center gap-3 rounded-2xl glass-panel px-3.5 flex shadow-2xl border border-white/10 dark:border-white/[0.08]",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} {...item} />
      ))}
    </nav>
  );
});

FloatingDockDesktop.displayName = "FloatingDockDesktop";

const IconContainer = memo(({
  title,
  icon,
  href,
  onClick,
}: Omit<DockItem, 'icon'> & { icon: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState(44);
  
  const handleMouseEnter = () => {
    setHovered(true);
    setSize(52);
  };
  
  const handleMouseLeave = () => {
    setHovered(false);
    setSize(44);
  };
  
  const iconSize = size * 0.46;
  
  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center justify-center rounded-xl bg-foreground/[0.05] hover:bg-foreground/[0.1] border border-border/40 hover:border-foreground/20 transition-all duration-300 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {hovered && (
          <div
            className="absolute -top-9 left-1/2 -translate-x-1/2 w-fit rounded-lg border border-border bg-background/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-lg transition-opacity duration-200 pointer-events-none"
          >
            {title}
          </div>
        )}
        {href ? (
          <a 
            href={href} 
            target={title === 'LinkedIn' || title === 'GitHub' ? '_blank' : '_self'} 
            aria-label={title}
            className="flex items-center justify-center w-full h-full text-foreground"
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
          <button 
            onClick={onClick} 
            aria-label="change theme"
            className="flex items-center justify-center w-full h-full text-foreground"
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
          </button>
        )}
      </div>
    </div>
  );
});

IconContainer.displayName = "IconContainer";