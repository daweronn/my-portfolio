"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AutoHeight } from "@/components/ui/AutoHeight";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  url?: string;
  year: string;
  status: "live" | "wip" | "concept";
}

const projects: Project[] = [
  {
    id: "proj-1",
    title: "Portfolio Pessoal",
    description: "Este site. Construído com Next.js, Tailwind e Framer Motion.",
    longDescription: "Projeto desenvolvido do zero com foco em animações fluidas, arquitetura limpa e design system próprio. Utiliza Tailwind v4, Framer Motion 12 e arquitetura feature-based com separação rígida de responsabilidades.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://github.com/daweronn",
    year: "2025",
    status: "live",
  },
  {
    id: "proj-2",
    title: "Em breve",
    description: "Novos projetos chegando em breve.",
    longDescription: "Estou trabalhando em novos projetos que serão adicionados aqui em breve. Fique de olho no meu GitHub para novidades.",
    stack: ["Em desenvolvimento"],
    year: "2025",
    status: "wip",
  },
];

const statusConfig = {
  live: { label: "Live", className: "text-emerald-400 bg-emerald-400/8 border-emerald-400/20" },
  wip: { label: "Em progresso", className: "text-amber-400 bg-amber-400/8 border-amber-400/20" },
  concept: { label: "Conceito", className: "text-text-muted bg-surface border-border" },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
      className="relative rounded-ios border border-border/60 bg-surface/40 backdrop-blur-ios overflow-hidden"
    >
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full text-left p-5 flex flex-col gap-3"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              <h3 className="text-sm font-semibold text-text-primary tracking-tight">
                {project.title}
              </h3>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${status.className}`}>
                {status.label}
              </span>
            </div>
            <p className="text-xs text-text-muted font-mono">{project.year}</p>
          </div>

          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="shrink-0 mt-0.5 text-text-muted"
          >
            <ChevronDown size={14} />
          </motion.div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-raised border border-border/60 text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </button>

      <AutoHeight visible={expanded} className="border-t border-border/40">
        <div className="p-5 flex flex-col gap-4">
          <p className="text-sm text-text-secondary leading-relaxed">
            {project.longDescription}
          </p>

          {project.url && (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5 text-xs font-medium text-accent w-fit group/link"
            >
              Ver no GitHub
              <ArrowUpRight
                size={12}
                className="transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </motion.a>
          )}
        </div>
      </AutoHeight>
    </motion.div>
  );
}

export function ProjetosSection() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6">
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const }}
        className="text-xs font-mono text-text-muted uppercase tracking-widest"
      >
        Projetos
      </motion.h2>

      <div className="flex flex-col gap-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
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