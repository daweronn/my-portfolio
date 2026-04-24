"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/home.service";
import { useLanguageContext } from "@/app/providers/LanguageProvider";
import type { Project } from "../types";

interface UseProjectsReturn {
  projects: Project[];
  isLoading: boolean;
}

export function useProjects(): UseProjectsReturn {
  const { locale } = useLanguageContext();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProjects(locale).then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
  }, [locale]);

  return { projects, isLoading };
}