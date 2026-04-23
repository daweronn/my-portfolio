"use client";

import { motion } from "motion/react";

const paragraphs = [
  "Sou um desenvolvedor fullstack apaixonado por construir produtos que unem simplicidade e robustez. Acredito que a melhor interface é aquela que o usuário nem percebe — ela simplesmente funciona.",
  "Trabalho principalmente com React, TypeScript e Python, sempre com foco em arquitetura limpa, performance e experiência do usuário. Gosto de projetos que desafiam e que têm impacto real.",
  "Fora do código, sou movido por design, música e pela ideia de que tecnologia bem feita pode mudar como as pessoas vivem.",
];

export function SobreSection() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6">
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const }}
        className="text-xs font-mono text-text-muted uppercase tracking-widest"
      >
        Sobre
      </motion.h2>

      <div className="flex flex-col gap-4">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
            className="text-sm text-text-secondary leading-relaxed"
          >
            {text}
          </motion.p>
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