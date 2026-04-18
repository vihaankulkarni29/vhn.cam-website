"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 40);

    return () => clearTimeout(timeout);
  }, [currentIndex, text]);

  return (
    <div className="font-mono text-zinc-400 text-sm md:text-lg">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
      >
        {displayText}
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-1 inline-block h-4 w-1 bg-emerald-500"
      />
    </div>
  );
};
