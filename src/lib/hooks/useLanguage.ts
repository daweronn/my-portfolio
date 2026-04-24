"use client";

import { useState, useCallback } from "react";
import type { Locale } from "@/lib/types/language";

const STORAGE_KEY = "portfolio-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  return (localStorage.getItem(STORAGE_KEY) as Locale) ?? "pt";
}

export function useLanguage() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next: Locale = prev === "pt" ? "en" : "pt";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { locale, toggleLocale };
}