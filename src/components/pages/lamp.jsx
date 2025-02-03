"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { useMediaQuery } from "@/hooks/use-media-query"; // Import useMediaQuery
import WordPullUp from "@/components/ui/word-pull-up";

export function Lamp() {
  // Use useMediaQuery to detect screen size
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 480px)");

  // Set the y value based on screen size
  const yValue = isDesktop ? 10 : isTablet ? 20 : 30;

  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.2, y: 120 }}
          whileInView={{ opacity: 1, y: yValue }} // Use dynamic yValue
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Noureddine DRIOUECH
          <p className="text-2xl mt-5 text-muted-foreground tracking-normal">Software Engineer</p>
        </motion.h1>
      </LampContainer>
    </>
  );
}