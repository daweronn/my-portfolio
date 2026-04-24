"use client";

import { motion } from "motion/react";
import { useLanguageContext } from "@/app/providers/LanguageProvider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguageContext();

  return (
    <motion.button
      onClick={toggleLocale}
      aria-label="Toggle language"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="w-9 h-9 rounded-ios-sm glass flex items-center justify-center hover:text-accent hover:border-accent/40 transition-colors duration-200"
    >
      <span className="text-[11px] font-mono font-semibold text-text-secondary">
        {locale === "pt" ? "EN" : "PT"}
      </span>
    </motion.button>
  );
}