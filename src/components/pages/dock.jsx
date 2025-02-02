import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
} from "@tabler/icons-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      blank: false,
      mail: false
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/NoureddineDRIOUECH",
      blank: true,
      mail: false
    },
    {
      title: "EMail",
      icon: (
        <CiMail className="h-full w-full text-neutral-900 dark:text-neutral-100" />
      ),

      href: "nourddinedriouech@gmail.com",
      blank: false,
      mail: true
    },


    {
      title: "Linkedin",
      icon: (
        <FaLinkedinIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/noureddinedriouech/",

      blank: true,
      mail: false
    },

  ];
  return (
    <div className="flex items-center md:justify-center justify-end fixed bottom-8 z-40  w-[98%] md:w-full">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
