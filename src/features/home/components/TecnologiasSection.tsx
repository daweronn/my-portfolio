"use client";

import { motion } from "motion/react";
import { Globe, Server, Code2, Database, Container, GitBranch, Layers, Zap } from "lucide-react";
import { useTechnologies } from "../hooks/useTechnologies";
import type { TechnologyCategory } from "../types";

const categoryIcons: Record<TechnologyCategory, Record<string, React.ReactNode>> = {
  Frontend: {
    React: <Globe size={12} strokeWidth={1.8} />,
    "Next.js": <Layers size={12} strokeWidth={1.8} />,
    "Tailwind CSS": <Zap size={12} strokeWidth={1.8} />,
    "Framer Motion": <Zap size={12} strokeWidth={1.8} />,
  },
  Backend: {
    FastAPI: <Server size={12} strokeWidth={1.8} />,
    "Node.js": <Server size={12} strokeWidth={1.8} />,
  },
  Linguagem: {
    TypeScript: <Code2 size={12} strokeWidth={1.8} />,
    Python: <Code2 size={12} strokeWidth={1.8} />,
  },
  "Banco de Dados": {
    PostgreSQL: <Database size={12} strokeWidth={1.8} />,
    Supabase: <Database size={12} strokeWidth={1.8} />,
  },
  DevOps: {
    Docker: <Container size={12} strokeWidth={1.8} />,
    Git: <GitBranch size={12} strokeWidth={1.8} />,
  },
};

const categoryStyles: Record<TechnologyCategory, { base: string; hover: string }> = {
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
  const { technologies } = useTechnologies();

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
        {technologies.map((tech, i) => {
          const styles = categoryStyles[tech.category];
          const icon = categoryIcons[tech.category]?.[tech.label];
          return (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03, ease: "easeOut" as const }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-ios-sm border text-xs font-medium tracking-wide transition-all duration-150 ${styles.base} ${styles.hover}`}
            >
              {icon}
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