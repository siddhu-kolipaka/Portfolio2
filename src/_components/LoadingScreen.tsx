"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"growing" | "drawing" | "shrinking" | "completed">("growing");

  useEffect(() => {
    // 1. Growing from top to bottom
    const timerGrow = setTimeout(() => {
      setPhase("drawing");
    }, 800); // Matches transition duration for the enter scale animation

    return () => clearTimeout(timerGrow);
  }, []);

  useEffect(() => {
    // 2. SVG path drawing animation
    if (phase === "drawing") {
      const timerDraw = setTimeout(() => {
        setPhase("shrinking");
      }, 2400); // 1.8s drawing animation + 0.6s hover/peak pause
      return () => clearTimeout(timerDraw);
    }
  }, [phase]);

  useEffect(() => {
    // 3. Shrinking to the bottom
    if (phase === "shrinking") {
      const timerShrink = setTimeout(() => {
        setPhase("completed");
      }, 800); // Matches transition duration for the exit scale animation
      return () => clearTimeout(timerShrink);
    }
  }, [phase]);

  // Lock body scroll during the loading process
  useEffect(() => {
    if (phase !== "completed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "completed") return null;

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={phase === "shrinking" ? { scaleY: 0 } : { scaleY: 1 }}
      style={{
        transformOrigin: phase === "shrinking" ? "bottom" : "top",
      }}
      transition={{
        duration: 0.8,
        ease: [0.85, 0, 0.15, 1], // Premium custom cubic-bezier
      }}
      className="fixed inset-0 bg-[#0c0c0c] z-[9999] flex flex-col items-center justify-center p-4 overflow-hidden select-none"
    >
      {/* Background radial accent glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#e6b422]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* SVG Container */}
      <div className="w-full max-w-[260px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[500px] relative z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 913 393"
          fill="none"
          className="w-full h-auto drop-shadow-[0_0_25px_rgba(230,180,34,0.15)]"
        >
          <defs>
            {/* Elegant metallic gold gradient */}
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="30%" stopColor="#f3c63f" />
              <stop offset="70%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#aa7c11" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Faint background track path for guidelines */}
          <path
            d="
            M42 339
            H286
            C342 339 378 306 378 258
            C378 210 342 177 286 177
            H118
            C79 177 54 152 54 120
            C54 88 79 60 118 60
            H412
            C435 60 446 72 446 94
            V300
            C446 327 459 339 486 339
            H709
            C807 339 861 284 861 195
            C861 106 807 47 709 47
            H554
            V279
            "
            stroke="rgba(230, 180, 34, 0.08)"
            strokeWidth="23"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Animated path */}
          <motion.path
            d="
            M42 339
            H286
            C342 339 378 306 378 258
            C378 210 342 177 286 177
            H118
            C79 177 54 152 54 120
            C54 88 79 60 118 60
            H412
            C435 60 446 72 446 94
            V300
            C446 327 459 339 486 339
            H709
            C807 339 861 284 861 195
            C861 106 807 47 709 47
            H554
            V279
            "
            stroke="url(#goldGradient)"
            strokeWidth="23"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#goldGlow)"
            initial={{ pathLength: 0 }}
            animate={phase !== "growing" ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
