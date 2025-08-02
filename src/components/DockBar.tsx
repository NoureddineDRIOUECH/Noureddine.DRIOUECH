import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconMail,
    IconHome,
    IconSun,
    IconMoon,
} from "@tabler/icons-react";

import { FiLinkedin as IconBrandLinkedin } from "react-icons/fi";

export function DockBar() {
    const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");

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
        return <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
    };

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
            title: theme === "light"
                ? "Switch to dark mode"
                :  "Switch to light mode",
            icon: getThemeIcon(),
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
        // {
        //     title: "Resume",
        //     icon: <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        //     href: "/resume",
        // },
        // {
        //     title: "Blog",
        //     icon: <IconRss className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        //     href: "/blog",
        // },

    ];

    return (
        <div className="flex items-center md:justify-center pr-3 md:pr-0 justify-end fixed bottom-8 z-40 w-[98%] md:w-full">
            <FloatingDock
                // mobileClassName="translate-y-20"
                items={items}
            />
        </div>
    );
}