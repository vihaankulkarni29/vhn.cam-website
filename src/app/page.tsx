import { Typewriter } from "@/components/Typewriter";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { BentoGrid } from "@/components/BentoGrid";
import { StatsTicker } from "@/components/StatsTicker";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden">
        <AnimatedGrid />
        
        <div className="relative z-10 max-w-5xl w-full">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-center">
            Architecting Systems at the <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Intersection of Biology and Business
            </span>
          </h1>

          <div className="mt-8 flex justify-center">
            <Typewriter 
              text="> Executing: High-Throughput Genomics | B2B OSINT | HPC Optimization" 
              delay={0.05}
            />
          </div>

          <div className="mt-12 flex justify-center">
            <button className="group relative px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative font-mono text-sm tracking-[0.2em] uppercase">
                Initialize System Build
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Scroll to Explore</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent" />
        </div>
      </section>

      {/* Proof of Work - Bento Grid */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-500">01 // Flagship Architectures</h2>
            <p className="mt-4 text-3xl font-bold tracking-tight">Proof of Work</p>
          </div>
          <BentoGrid />
        </div>
      </section>

      {/* Authority Ticker */}
      <section className="py-12 bg-zinc-950 border-t border-zinc-900">
        <StatsTicker />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
