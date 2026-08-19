"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { NoureddineIntro } from "@/components/ui/NoureddineSplash";

export function SplashScreen() {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    // Safety fallback timer so page is never blocked
    const fallbackTimer = setTimeout(() => {
      setIntroVisible(false);
    }, 4500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {introVisible && (
        <NoureddineIntro onComplete={() => setIntroVisible(false)} />
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
