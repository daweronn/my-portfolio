"use client";

import { useEffect, useState } from "react";
import { getExperiences } from "@/services/home.service";
import { useLanguageContext } from "@/app/providers/LanguageProvider";
import type { Experience } from "../types";

interface UseExperiencesReturn {
  experiences: Experience[];
  isLoading: boolean;
}

export function useExperiences(): UseExperiencesReturn {
  const { locale } = useLanguageContext();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getExperiences(locale).then((data) => {
      setExperiences(data);
      setIsLoading(false);
    });
  }, [locale]);

  return { experiences, isLoading };
}