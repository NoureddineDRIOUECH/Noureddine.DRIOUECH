"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { NoureddineIntro } from "@/components/ui/NoureddineSplash";

const SPLASH_STORAGE_KEY = "has_seen_splash_screen";

export function SplashScreen() {
  const [introVisible, setIntroVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const isRoot = window.location.pathname === "/" || window.location.pathname === "";
    if (!isRoot) return false;
    try {
      return !sessionStorage.getItem(SPLASH_STORAGE_KEY);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!introVisible) return;

    try {
      sessionStorage.setItem(SPLASH_STORAGE_KEY, "true");
    } catch {
      // Ignore storage access errors in private/incognito mode
    }

    // Safety fallback timer so page is never blocked
    const fallbackTimer = setTimeout(() => {
      setIntroVisible(false);
    }, 4500);

    return () => clearTimeout(fallbackTimer);
  }, [introVisible]);

  if (!introVisible) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {introVisible && (
        <NoureddineIntro onComplete={() => setIntroVisible(false)} />
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
