"use client";

import { motion } from "motion/react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useExperiences } from "../hooks/useExperiences";
import { useLanguageContext } from "@/app/providers/LanguageProvider";

export function ExperienciaSection() {
  const { experiences } = useExperiences();
  const { locale } = useLanguageContext();

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6">
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const }}
        className="text-xs font-mono text-text-muted uppercase tracking-widest"
      >
        {locale === "pt" ? "Experiência" : "Experience"}
      </motion.h2>

      <div className="flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" as const }}
            className="relative flex gap-4 pb-10 last:pb-0"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.12 + 0.1, ease: "easeOut" as const }}
                className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0 ring-2 ring-accent/20"
              />
              {i < experiences.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 + 0.2, ease: "easeOut" as const }}
                  style={{ originY: 0 }}
                  className="w-px flex-1 bg-border mt-2"
                />
              )}
            </div>

            <div className="flex flex-col gap-1.5 pt-0.5 pb-2">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-semibold text-text-primary">
                  <AnimatedText text={exp.role} />
                </h3>
                <div className="flex items-center gap-2">
                  <AnimatedText text={exp.company} className="text-xs text-accent font-mono" />
                  <span className="text-xs text-text-muted">·</span>
                  <AnimatedText text={exp.period} className="text-xs text-text-muted font-mono" />
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                <AnimatedText text={exp.description} />
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
        style={{ originX: 0 }}
        className="h-px bg-border"
      />
    </section>
  );
}