"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Transition } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AutoHeight } from "@/components/ui/AutoHeight";
import { ProjectImageGallery } from "./ProjectImageGallery";
import { ProjectCoverImage } from "./ProjectCoverImage";
import { useProjects } from "../hooks/useProjects";
import type { Project, ProjectStatus } from "../types";

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  live: { label: "Live", className: "text-emerald-400 bg-emerald-400/8 border-emerald-400/20" },
  wip: { label: "Em progresso", className: "text-amber-400 bg-amber-400/8 border-amber-400/20" },
  concept: { label: "Conceito", className: "text-text-muted bg-surface border-border" },
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
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
      layout
      transition={springTransition}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-ios border border-border/60 bg-surface/40 backdrop-blur-ios overflow-hidden"
    >
      <motion.button
        layout
        transition={springTransition}
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full text-left p-5 flex flex-row items-center gap-4"
      >
        <motion.div
          layout
          transition={springTransition}
          className="flex flex-col gap-3 flex-1 min-w-0"
        >
          <motion.div
            layout
            transition={springTransition}
            className="flex flex-col gap-1 min-w-0"
          >
            <motion.div
              layout
              transition={springTransition}
              className="flex items-center gap-2.5 flex-wrap"
            >
              <motion.h3
                layout
                transition={springTransition}
                className="text-sm font-semibold text-text-primary tracking-tight"
              >
                {project.title}
              </motion.h3>
              <motion.span
                layout
                transition={springTransition}
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${status.className}`}
              >
                {status.label}
              </motion.span>
            </motion.div>

            <motion.p
              layout
              transition={springTransition}
              className="text-xs text-text-muted font-mono"
            >
              {project.year}
            </motion.p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.p
              key={expanded ? "expanded-desc" : "collapsed-desc"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-sm text-text-secondary leading-relaxed"
            >
              {project.description}
            </motion.p>
          </AnimatePresence>

          <motion.div
            layout
            transition={springTransition}
            className="flex flex-wrap gap-1.5"
          >
            {project.stack.map((tech) => (
              <motion.span
                layout
                transition={springTransition}
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-raised border border-border/60 text-text-muted"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative shrink-0 flex flex-col items-end self-stretch">
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-text-muted mb-2"
          >
            <ChevronDown size={14} />
          </motion.div>

          <AnimatePresence>
            {!expanded && project.slug && (
              <motion.div
                key="thumb"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ProjectCoverImage slug={project.slug} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      <AutoHeight visible={expanded} className="border-t border-border/40">
        <div className="p-5 flex flex-col gap-4">
          <p className="text-sm text-text-secondary leading-relaxed">
            {project.longDescription}
          </p>

          {project.slug && (
            <ProjectImageGallery slug={project.slug} />
          )}

          {project.url && (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5 text-xs font-medium text-accent w-fit group/link"
            >
              Ver projeto ao vivo
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
  const { projects } = useProjects();

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6">
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="h-px bg-border mt-4"
      />
    </section>
  );
}