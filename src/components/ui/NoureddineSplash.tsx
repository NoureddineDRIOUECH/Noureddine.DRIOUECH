"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const initialPath = { pathLength: 0, opacity: 0 };
const animatePath = { pathLength: 1, opacity: 1 };

type EffectProps = {
  className?: string;
  speed?: number;
  strokeColor?: string;
  accentColor?: string;
  strokeWidth?: number;
  onComplete?: () => void;
};

export function NoureddineEffect({
  className = "",
  speed = 0.55,
  strokeColor = "currentColor",
  accentColor = "#10b981", // Emerald accent matching portfolio branding (or #7c15fa)
  strokeWidth = 8,
  onComplete,
}: EffectProps) {
  const calc = (value: number) => value * speed;

  return (
    <motion.svg
      className={className}
      fill="none"
      initial={{ opacity: 1 }}
      preserveAspectRatio="xMidYMid meet"
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      style={{ overflow: "visible" }}
      viewBox="0 30 960 240"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Noureddine Signature Animation"
    >
      <title>Noureddine</title>

      {/* ── N: Capital Cursive Flourish ───────────────────────────────── */}
      {/* N: Entry bottom swoosh */}
      <motion.path
        animate={animatePath}
        d="M 35 150 C 45 140 60 120 70 85"
        initial={initialPath}
        transition={{ duration: calc(0.25), ease: "easeInOut", opacity: { duration: 0.12 } }}
      />
      {/* N: Left crest up & curve */}
      <motion.path
        animate={animatePath}
        d="M 70 85 C 80 60 95 45 110 50 C 125 55 120 80 115 110"
        initial={initialPath}
        transition={{ duration: calc(0.3), ease: "easeInOut", delay: calc(0.25), opacity: { duration: 0.15, delay: calc(0.25) } }}
      />
      {/* N: Main diagonal descent */}
      <motion.path
        animate={animatePath}
        d="M 115 110 C 105 145 95 180 90 205"
        initial={initialPath}
        transition={{ duration: calc(0.3), ease: "easeInOut", delay: calc(0.55), opacity: { duration: 0.15, delay: calc(0.55) } }}
      />
      {/* N: Upward right crest */}
      <motion.path
        animate={animatePath}
        d="M 90 205 C 100 200 125 150 145 105 C 155 80 168 65 180 70 C 190 75 190 95 185 125"
        initial={initialPath}
        transition={{ duration: calc(0.35), ease: "easeInOut", delay: calc(0.85), opacity: { duration: 0.15, delay: calc(0.85) } }}
      />
      {/* N: Right stem down to 'o' connector */}
      <motion.path
        animate={animatePath}
        d="M 185 125 C 180 155 175 185 178 200 C 180 210 190 212 205 200"
        initial={initialPath}
        transition={{ duration: calc(0.3), ease: "easeInOut", delay: calc(1.2), opacity: { duration: 0.15, delay: calc(1.2) } }}
      />

      {/* ── o: Cursive Loop ───────────────────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 205 200 C 220 185 230 150 250 145 C 265 142 278 152 275 172"
        initial={initialPath}
        transition={{ duration: calc(0.3), ease: "easeOut", delay: calc(1.5), opacity: { duration: 0.15, delay: calc(1.5) } }}
      />
      <motion.path
        animate={animatePath}
        d="M 275 172 C 272 192 255 204 238 202 C 222 200 220 180 232 165 C 242 152 262 148 276 150 C 285 152 292 148 300 158"
        initial={initialPath}
        transition={{ duration: calc(0.35), ease: "easeOut", delay: calc(1.8), opacity: { duration: 0.15, delay: calc(1.8) } }}
      />

      {/* ── u: Double Valleys ─────────────────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 300 158 C 302 172 304 190 312 198 C 322 206 335 202 342 188 C 348 175 352 162 355 152"
        initial={initialPath}
        transition={{ duration: calc(0.3), ease: "easeInOut", delay: calc(2.15), opacity: { duration: 0.15, delay: calc(2.15) } }}
      />
      <motion.path
        animate={animatePath}
        d="M 355 152 C 356 168 358 188 366 198 C 374 206 386 204 394 192 C 400 182 405 170 412 156"
        initial={initialPath}
        transition={{ duration: calc(0.3), ease: "easeInOut", delay: calc(2.45), opacity: { duration: 0.15, delay: calc(2.45) } }}
      />

      {/* ── r: Cursive Step & Shoulder ────────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 412 156 C 416 148 424 144 430 148 C 436 152 432 160 435 162 C 440 162 448 155 456 154"
        initial={initialPath}
        transition={{ duration: calc(0.25), ease: "easeOut", delay: calc(2.75), opacity: { duration: 0.12, delay: calc(2.75) } }}
      />
      <motion.path
        animate={animatePath}
        d="M 456 154 C 460 168 460 188 468 198 C 474 204 484 204 492 194"
        initial={initialPath}
        transition={{ duration: calc(0.25), ease: "easeOut", delay: calc(3.0), opacity: { duration: 0.12, delay: calc(3.0) } }}
      />

      {/* ── e: Cursive Loop ───────────────────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 492 194 C 502 182 514 158 528 150 C 538 144 546 150 544 164 C 540 180 522 196 506 200 C 496 202 494 192 506 180 C 518 168 534 165 548 174 C 556 180 562 192 570 196"
        initial={initialPath}
        transition={{ duration: calc(0.4), ease: "easeOut", delay: calc(3.25), opacity: { duration: 0.2, delay: calc(3.25) } }}
      />

      {/* ── d (1): Oval & Tall Ascender ───────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 570 196 C 564 180 570 156 588 150 C 602 146 612 156 610 174 C 608 192 594 204 578 202 C 566 200 566 182 578 168 C 588 154 602 150 614 152"
        initial={initialPath}
        transition={{ duration: calc(0.35), ease: "easeOut", delay: calc(3.65), opacity: { duration: 0.15, delay: calc(3.65) } }}
      />
      <motion.path
        animate={animatePath}
        d="M 614 152 C 616 120 622 75 628 58 C 632 48 638 52 638 64 C 638 88 632 145 630 185 C 628 200 634 206 646 196"
        initial={initialPath}
        transition={{ duration: calc(0.4), ease: "easeInOut", delay: calc(4.0), opacity: { duration: 0.2, delay: calc(4.0) } }}
      />

      {/* ── d (2): Second Tall Ascender ───────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 646 196 C 642 180 648 156 664 150 C 678 146 688 156 686 174 C 684 192 670 204 656 202 C 646 200 646 182 656 168 C 666 154 678 150 690 152"
        initial={initialPath}
        transition={{ duration: calc(0.35), ease: "easeOut", delay: calc(4.4), opacity: { duration: 0.15, delay: calc(4.4) } }}
      />
      <motion.path
        animate={animatePath}
        d="M 690 152 C 692 120 698 75 704 58 C 708 48 714 52 714 64 C 714 88 708 145 706 185 C 704 200 710 206 722 196"
        initial={initialPath}
        transition={{ duration: calc(0.4), ease: "easeInOut", delay: calc(4.75), opacity: { duration: 0.2, delay: calc(4.75) } }}
      />

      {/* ── i: Stem ───────────────────────────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 722 196 C 726 178 732 160 740 152 C 748 146 754 152 754 165 C 752 180 748 195 754 200 C 758 204 766 202 774 194"
        initial={initialPath}
        transition={{ duration: calc(0.3), ease: "easeOut", delay: calc(5.15), opacity: { duration: 0.15, delay: calc(5.15) } }}
      />

      {/* ── n: Double Arch ────────────────────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 774 194 C 778 178 784 158 792 152 C 800 146 806 152 806 165 C 804 178 800 192 804 198"
        initial={initialPath}
        transition={{ duration: calc(0.25), ease: "easeOut", delay: calc(5.45), opacity: { duration: 0.12, delay: calc(5.45) } }}
      />
      <motion.path
        animate={animatePath}
        d="M 804 198 C 808 184 816 158 826 152 C 834 146 840 152 840 166 C 838 180 834 194 840 200 C 844 204 852 202 860 194"
        initial={initialPath}
        transition={{ duration: calc(0.3), ease: "easeOut", delay: calc(5.7), opacity: { duration: 0.15, delay: calc(5.7) } }}
      />

      {/* ── e: Final Exit Flourish ─────────────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 860 194 C 868 182 878 158 890 150 C 898 144 904 150 902 164 C 898 180 882 198 868 202 C 860 204 860 194 870 182 C 880 170 894 168 906 176 C 914 182 922 188 935 186"
        initial={initialPath}
        transition={{ duration: calc(0.35), ease: "easeOut", delay: calc(6.0), opacity: { duration: 0.15, delay: calc(6.0) } }}
      />

      {/* ── Dot on 'i' Accent ─────────────────────────────────────────── */}
      <motion.circle
        animate={{ opacity: 1, scale: 1 }}
        cx="753"
        cy="128"
        fill={accentColor}
        initial={{ opacity: 0, scale: 0 }}
        r="4.5"
        stroke="none"
        transition={{ duration: calc(0.25), ease: "easeOut", delay: calc(6.4) }}
      />

      {/* ── Signature Underline Swoosh ─────────────────────────────────── */}
      <motion.path
        animate={animatePath}
        d="M 60 240 C 220 252 500 256 750 242 C 840 236 900 226 935 212"
        initial={initialPath}
        stroke={accentColor}
        strokeWidth={Math.max(4, strokeWidth - 2)}
        transition={{ duration: calc(0.55), ease: "easeInOut", delay: calc(6.65), opacity: { duration: 0.25, delay: calc(6.65) } }}
        onAnimationComplete={onComplete}
      />
    </motion.svg>
  );
}

export function NoureddineIntro({ onComplete }: { onComplete: () => void }) {
  const [dismissing, setDismissing] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const finishIntro = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setDismissing(true);
    window.setTimeout(onComplete, 700);
  };

  return (
    <motion.div
      aria-label="Noureddine signature intro"
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black text-white selection:bg-emerald-400 selection:text-black"
      initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      animate={{
        opacity: dismissing ? 0 : 1,
        scale: dismissing ? 1.05 : 1,
        filter: dismissing ? "blur(10px)" : "blur(0px)",
      }}
      transition={{
        duration: dismissing ? 0.65 : 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Ambient center radial backlight */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),rgba(0,0,0,0)_50%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: dismissing ? 1 : 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      <motion.div
        className="relative flex w-full max-w-[min(82vw,860px)] items-center justify-center px-6"
        animate={{
          opacity: dismissing ? 0 : 1,
          scale: dismissing ? 1.02 : 1,
          y: dismissing ? -8 : 0,
        }}
        transition={{ duration: 0.42, ease: "easeOut" }}
      >
        <NoureddineEffect
          accentColor="#10b981"
          className="h-auto w-full drop-shadow-[0_0_34px_rgba(16,185,129,0.35)]"
          speed={0.5}
          strokeColor="currentColor"
          strokeWidth={8}
          onComplete={finishIntro}
        />
      </motion.div>
    </motion.div>
  );
}

export default NoureddineIntro;
