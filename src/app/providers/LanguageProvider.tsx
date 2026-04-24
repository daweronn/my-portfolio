"use client";

import { createContext, useContext } from "react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import type { LanguageContextValue } from "@/lib/types/language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const value = useLanguage();
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguageContext must be used within LanguageProvider");
  return ctx;
}