"use client";

import { useEffect, useState } from "react";
import { getTechnologies } from "@/services/home.service";
import { useLanguageContext } from "@/app/providers/LanguageProvider";
import type { Technology } from "../types";

interface UseTechnologiesReturn {
  technologies: Technology[];
  isLoading: boolean;
}

export function useTechnologies(): UseTechnologiesReturn {
  const { locale } = useLanguageContext();
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTechnologies(locale).then((data) => {
      setTechnologies(data);
      setIsLoading(false);
    });
  }, [locale]);

  return { technologies, isLoading };
}