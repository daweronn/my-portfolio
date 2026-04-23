"use client";

import { motion } from "motion/react";
import { useThemeContext } from "@/lib/providers/ThemeProvider";

export function AvatarImage() {
  const { resolvedTheme } = useThemeContext();
  const src = resolvedTheme === "dark" ? "/logo/noite.png" : "/logo/dia.png";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative w-28 h-28 md:w-36 md:h-36"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.35, ease: "easeOut" as const }}
        className="w-full h-full rounded-full overflow-hidden shadow-ios-lg"
      >
        <motion.img
          key={src}
          src={src}
          alt="David Felicio"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10 ring-inset" />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background border border-green-500/20 shadow-ios-sm"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
        </span>
        <span className="text-[10px] font-medium text-green-500">Disponível</span>
      </motion.div>
    </motion.div>
  );
}