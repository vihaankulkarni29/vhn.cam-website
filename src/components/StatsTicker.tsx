"use client";

import { motion } from "framer-motion";

export const StatsTicker = () => {
  const stats = [
    "9.1 GPA",
    "100% Verification Rate",
    "TIFR & IISER Endorsed",
    "Zero-Bounce Architecture",
  ];

  // Repeat the stats to ensure seamless scrolling
  const listItems = [...stats, ...stats, ...stats, ...stats];

  return (
    <div className="relative w-full py-12 overflow-hidden border-y border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
      {/* Gradient Mask for Fade Effect at edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {listItems.map((stat, index) => (
          <div
            key={index}
            className="flex items-center px-8"
          >
            <span className="text-cyan-500 font-mono text-sm md:text-base tracking-[0.2em] uppercase">
              {stat}
            </span>
            <span className="ml-16 h-1 w-1 rounded-full bg-zinc-800" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
