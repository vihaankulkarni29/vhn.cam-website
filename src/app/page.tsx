import { AnimatedGrid } from "@/components/AnimatedGrid";
import { Typewriter } from "@/components/Typewriter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Effect */}
      <AnimatedGrid />

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl w-full text-center space-y-8">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-cyan-500 pb-2">
            Architecting Systems at the Intersection of Biology and Business.
          </h1>
          
          {/* Sub-Headline with Typewriter Effect */}
          <div className="flex justify-center items-center gap-2">
            <Typewriter 
              text="> Executing: High-Throughput Genomics | B2B OSINT | HPC Optimization" 
              delay={0.5} 
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-8">
          <button className="group relative px-8 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-100 font-medium transition-all duration-300 hover:scale-105 active:scale-95">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <div className="absolute inset-px rounded-full bg-zinc-950" />
            
            <span className="relative flex items-center gap-2">
              Initialize System Build
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            
            {/* Border Glow */}
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </button>
        </div>
      </main>

      {/* Footer Info (Subtle) */}
      <footer className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase">
          [ Vihaan Inc. | System v1.0.42 ]
        </p>
      </footer>
    </div>
  );
}
