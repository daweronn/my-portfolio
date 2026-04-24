"use client";

import { useEffect, useState } from "react";
import { getAboutParagraphs } from "@/services/home.service";
import { useLanguageContext } from "@/app/providers/LanguageProvider";

interface UseAboutReturn {
  paragraphs: string[];
  isLoading: boolean;
}

export function useAbout(): UseAboutReturn {
  const { locale } = useLanguageContext();
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAboutParagraphs(locale).then((data) => {
      setParagraphs(data);
      setIsLoading(false);
    });
  }, [locale]);

  return { paragraphs, isLoading };
}