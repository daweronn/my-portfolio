"use client";

import { useEffect, useState } from "react";
import { getExperiences } from "@/services/home.service";
import type { Experience } from "../types";

interface UseExperiencesReturn {
  experiences: Experience[];
  isLoading: boolean;
}

export function useExperiences(): UseExperiencesReturn {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getExperiences().then((data) => {
      setExperiences(data);
      setIsLoading(false);
    });
  }, []);

  return { experiences, isLoading };
}