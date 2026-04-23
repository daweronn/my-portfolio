"use client";

import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useThemeContext } from "@/lib/providers/ThemeProvider";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useThemeContext();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="w-9 h-9 rounded-ios-sm glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-200"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
      </motion.div>
    </motion.button>
  );
}