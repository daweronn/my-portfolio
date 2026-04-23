"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import type { SocialLink } from "../types";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
} as const;

interface SocialLinksProps {
  socials: SocialLink[];
}

export function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-2">
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <motion.a
            key={social.id}
            href={social.url}
            target={social.id === "email" ? undefined : "_blank"}
            rel={social.id === "email" ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12, ease: "easeOut" as const }}
            className="w-9 h-9 rounded-ios-sm glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-100"
          >
            <Icon size={15} strokeWidth={1.8} />
          </motion.a>
        );
      })}
    </div>
  );
}