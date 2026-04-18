"use client";

import { motion } from "framer-motion";
import { Dna, Target, Cpu, Activity, LucideIcon } from "lucide-react";

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const BentoCard = ({ icon: Icon, title, description, delay }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors duration-300"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-4">
        <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-zinc-100">{title}</h3>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
        
        {/* Subtle Bottom 'System' Accent */}
        <div className="pt-4 flex items-center gap-2">
          <div className="h-[2px] w-8 bg-emerald-500/20 group-hover:w-full transition-all duration-500" />
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">
            Process Verified
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const BentoGrid = () => {
  const projects = [
    {
      icon: Dna,
      title: "High-Throughput Genomic Analysis",
      description: "Automated mutation identification pipelines turning 3-week manual processes into 10-minute scripts.",
    },
    {
      icon: Target,
      title: "Parallel-OSINT Lead Generation",
      description: "Bypassing standard databases to extract and verify C-level intelligence at scale with 100% ID rates.",
    },
    {
      icon: Cpu,
      title: "Memory-Safe Biophysics",
      description: "Refactoring legacy trajectory pipelines using chunk-based processing to bypass RAM bottlenecks.",
    },
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em]">
          Current Executions
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-zinc-100 italic">
          Proof of Work
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <BentoCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
};
