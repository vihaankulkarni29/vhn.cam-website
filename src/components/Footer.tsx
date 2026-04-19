"use client";

import { Code, Network } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 py-12 border-t border-zinc-900 mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-zinc-500 font-mono text-xs md:text-sm tracking-tight text-center md:text-left">
          <p>Engineered by <span className="text-zinc-300">Vihaan Kulkarni</span></p>
          <p className="mt-1">Mumbai {"->"} Global</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/vihaankulkarni29"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors duration-300"
          >
            <Code className="w-5 h-5" />
            <span className="text-xs font-mono uppercase tracking-widest hidden md:inline">Source</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vihaan-kulkarni-442220311/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors duration-300"
          >
            <Network className="w-5 h-5" />
            <span className="text-xs font-mono uppercase tracking-widest hidden md:inline">Network</span>
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <span className="text-[10px] text-zinc-700 font-mono uppercase tracking-[0.5em]">
          &copy; 2026 Vihaan Inc. All Systems Terminal.
        </span>
      </div>
    </footer>
  );
};

