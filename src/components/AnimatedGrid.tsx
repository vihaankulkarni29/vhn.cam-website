"use client";

import { motion } from "framer-motion";

export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-zinc-950">
      {/* Radial Gradient overlay for depth */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" 
      />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      >
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
      </div>

      {/* Floating Particles/Dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-500/10"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 100 + "px"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
            }}
          />
        ))}
      </div>
    </div>
  );
};
