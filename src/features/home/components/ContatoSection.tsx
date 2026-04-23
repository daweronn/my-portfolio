"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

interface ContactLink {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  external: boolean;
}

const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    description: "davidvicter@gmail.com",
    href: "mailto:davidvicter@gmail.com",
    icon: <Mail size={15} strokeWidth={1.8} />,
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    description: "@daweronn",
    href: "https://github.com/daweronn",
    icon: <Github size={15} strokeWidth={1.8} />,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "davidvicter",
    href: "https://www.linkedin.com/in/davidvicter/",
    icon: <Linkedin size={15} strokeWidth={1.8} />,
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    description: "@davidvicter",
    href: "https://www.instagram.com/davidvicter/",
    icon: <Instagram size={15} strokeWidth={1.8} />,
    external: true,
  },
];

export function ContatoSection() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12 pb-24 flex flex-col gap-6">
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const }}
        className="text-xs font-mono text-text-muted uppercase tracking-widest"
      >
        Contato
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" as const }}
        className="text-sm text-text-secondary leading-relaxed"
      >
        Aberto a conversas sobre projetos, oportunidades ou só trocar uma ideia.
      </motion.p>

      <div className="flex flex-col gap-2">
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.id}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
            className="group flex items-center justify-between gap-4 p-4 rounded-ios border border-border/50 bg-surface/40 backdrop-blur-ios hover:border-border hover:bg-surface/70 transition-all duration-150"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-ios-sm bg-surface-raised border border-border/60 flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/30 transition-colors duration-150 shrink-0">
                {link.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-text-primary leading-none">
                  {link.label}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  {link.description}
                </span>
              </div>
            </div>

            <ArrowUpRight
              size={13}
              className="text-text-muted group-hover:text-accent transition-colors duration-150 shrink-0"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}