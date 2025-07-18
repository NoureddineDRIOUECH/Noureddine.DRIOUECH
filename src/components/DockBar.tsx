import React, { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconMail,
    IconBrandLinkedin,
    IconHome,
    IconSun,
    IconMoon,
    IconDeviceLaptop,
} from "@tabler/icons-react";

export function DockBar() {
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

    useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const cycleTheme = () => {
        setTheme(prev =>
            prev === "light" ? "dark" : "light"
        );
    };

    const getThemeIcon = () => {
        if (theme === "light") return <IconSun className="h-full w-full text-neutral-900 dark:text-neutral-100" />;
        if (theme === "dark") return <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
        return <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
    };

    const items = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#home",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://github.com/NoureddineDRIOUECH",
        },
        {
            title: theme === "light"
                ? "Switch to dark mode"
                :  "Switch to light mode",
            icon: getThemeIcon(),
            onClick: cycleTheme,
        },
        {
                title: "Email",
            icon: <IconMail className="h-full w-full text-neutral-900 dark:text-neutral-100" />,
            href: "mailto:nourddinedriouech@gmail.com",
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.linkedin.com/in/noureddinedriouech/",
        },

    ];

    return (
        <div className="flex items-center md:justify-center justify-end fixed bottom-8 z-40 w-[98%] md:w-full">
            <FloatingDock
                // mobileClassName="translate-y-20"
                items={items}
            />
        </div>
    );
}