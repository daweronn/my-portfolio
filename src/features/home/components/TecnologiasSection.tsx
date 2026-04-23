"use client";

import { motion } from "motion/react";
import {
  Globe,
  Server,
  Code2,
  Database,
  Container,
  GitBranch,
  Layers,
  Zap,
} from "lucide-react";

interface Tech {
  label: string;
  category: string;
  icon: React.ReactNode;
}

const stacks: Tech[] = [
  { label: "React", category: "Frontend", icon: <Globe size={12} strokeWidth={1.8} /> },
  { label: "Next.js", category: "Frontend", icon: <Layers size={12} strokeWidth={1.8} /> },
  { label: "TypeScript", category: "Linguagem", icon: <Code2 size={12} strokeWidth={1.8} /> },
  { label: "Python", category: "Linguagem", icon: <Code2 size={12} strokeWidth={1.8} /> },
  { label: "Tailwind CSS", category: "Frontend", icon: <Zap size={12} strokeWidth={1.8} /> },
  { label: "FastAPI", category: "Backend", icon: <Server size={12} strokeWidth={1.8} /> },
  { label: "PostgreSQL", category: "Banco de Dados", icon: <Database size={12} strokeWidth={1.8} /> },
  { label: "Supabase", category: "Banco de Dados", icon: <Database size={12} strokeWidth={1.8} /> },
  { label: "Docker", category: "DevOps", icon: <Container size={12} strokeWidth={1.8} /> },
  { label: "Git", category: "DevOps", icon: <GitBranch size={12} strokeWidth={1.8} /> },
  { label: "Framer Motion", category: "Frontend", icon: <Zap size={12} strokeWidth={1.8} /> },
  { label: "Node.js", category: "Backend", icon: <Server size={12} strokeWidth={1.8} /> },
];

const categoryConfig: Record<string, { base: string; hover: string }> = {
  Frontend: {
    base: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    hover: "hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-300",
  },
  Backend: {
    base: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    hover: "hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300",
  },
  Linguagem: {
    base: "text-violet-400 border-violet-400/20 bg-violet-400/5",
    hover: "hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300",
  },
  "Banco de Dados": {
    base: "text-amber-400 border-amber-400/20 bg-amber-400/5",
    hover: "hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300",
  },
  DevOps: {
    base: "text-rose-400 border-rose-400/20 bg-rose-400/5",
    hover: "hover:border-rose-400/50 hover:bg-rose-400/10 hover:text-rose-300",
  },
};

export function TecnologiasSection() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6">
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const }}
        className="text-xs font-mono text-text-muted uppercase tracking-widest"
      >
        Tecnologias
      </motion.h2>

      <div className="flex flex-wrap gap-2">
        {stacks.map((tech, i) => {
          const config = categoryConfig[tech.category];
          return (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03, ease: "easeOut" as const }}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-ios-sm border
                text-xs font-medium tracking-wide
                transition-all duration-150
                ${config.base} ${config.hover}
              `}
            >
              {tech.icon}
              {tech.label}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
        style={{ originX: 0 }}
        className="h-px bg-border mt-4"
      />
    </section>
  );
}