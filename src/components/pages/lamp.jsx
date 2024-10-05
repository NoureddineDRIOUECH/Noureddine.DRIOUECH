"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

import WordPullUp from "@/components/ui/word-pull-up";
export function Lamp() {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.2, y: 120 }}
          whileInView={{ opacity: 1, y: -30 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Noureddine DRIOUECH
          <p className="text-2xl mt-5 text-muted-foreground tracking-normal">Software Enginner</p>

        </motion.h1>
      </LampContainer>
    </>
  );
}
