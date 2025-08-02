import { useState, useEffect, lazy, Suspense } from "react";
// Lazy load the FloatingDock component
const FloatingDock = lazy(() => import("@/components/ui/floating-dock").then(mod => ({ default: mod.FloatingDock })));

// Import icons dynamically to reduce initial bundle size
import { IconHome } from "@tabler/icons-react";

// Create a component for the theme icon to avoid unnecessary re-renders
const ThemeIcon = ({ theme }: { theme: string }) => {
  if (theme === "light") {
    // Dynamic import for IconSun
    const IconSun = lazy(() => import("@tabler/icons-react").then(mod => ({ default: mod.IconSun })));
    return (
      <Suspense fallback={<div className="h-full w-full bg-neutral-300 rounded-full animate-pulse" />}>
        <IconSun className="h-full w-full text-neutral-900 dark:text-neutral-100" />
      </Suspense>
    );
  } else {
    // Dynamic import for IconMoon
    const IconMoon = lazy(() => import("@tabler/icons-react").then(mod => ({ default: mod.IconMoon })));
    return (
      <Suspense fallback={<div className="h-full w-full bg-neutral-300 rounded-full animate-pulse" />}>
        <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      </Suspense>
    );
  }
};

export function DockBar() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [isLoaded, setIsLoaded] = useState(false);
    const [icons, setIcons] = useState<any>({});

    // Load icons asynchronously
    useEffect(() => {
        const loadIcons = async () => {
            const [
                { IconBrandGithub },
                { IconMail },
                { FiLinkedin }
            ] = await Promise.all([
                import("@tabler/icons-react").then(mod => ({ IconBrandGithub: mod.IconBrandGithub })),
                import("@tabler/icons-react").then(mod => ({ IconMail: mod.IconMail })),
                import("react-icons/fi").then(mod => ({ FiLinkedin: mod.FiLinkedin }))
            ]);
            
            setIcons({
                IconBrandGithub,
                IconMail,
                IconBrandLinkedin: FiLinkedin
            });
            
            setIsLoaded(true);
        };
        
        loadIcons();
    }, []);

    // Initialize theme from localStorage
    useEffect(() => {
        // Get theme from localStorage or system preference
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light" || storedTheme === "dark") {
            setTheme(storedTheme);
        } else {
            // Use system preference as fallback
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(isDarkMode ? "dark" : "light");
        }
    }, []);

    // Apply theme changes
    useEffect(() => {
        const isDark = theme === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", theme);
        
        // Dispatch a custom event for other components to listen for theme changes
        document.dispatchEvent(new CustomEvent("themeChange"));
    }, [theme]);

    const cycleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    // Don't render until icons are loaded
    if (!isLoaded) {
        return (
            <div className="flex items-center md:justify-center pr-3 md:pr-0 justify-end fixed bottom-8 z-40 w-[98%] md:w-full">
                <div className="h-16 w-64 bg-gray-100 dark:bg-neutral-800 rounded-2xl animate-pulse"></div>
            </div>
        );
    }

    const { IconBrandGithub, IconMail, IconBrandLinkedin } = icons;

    const items = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#home",
        },
        {
            title: "Email",
            icon: <IconMail className="h-full w-full text-neutral-900 dark:text-neutral-100" />,
            href: "mailto:nourddinedriouech@gmail.com",
        },
        {
            title: theme === "light" ? "Switch to dark mode" : "Switch to light mode",
            icon: <ThemeIcon theme={theme} />,
            onClick: cycleTheme,
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.linkedin.com/in/noureddinedriouech/",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://github.com/NoureddineDRIOUECH",
        },
    ];

    return (
        <div className="flex items-center md:justify-center pr-3 md:pr-0 justify-end fixed bottom-8 z-40 w-[98%] md:w-full">
            <Suspense fallback={<div className="h-16 w-64 bg-gray-100 dark:bg-neutral-800 rounded-2xl animate-pulse"></div>}>
                <FloatingDock items={items} />
            </Suspense>
        </div>
    );
}