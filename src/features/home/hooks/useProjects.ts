"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/home.service";
import type { Project } from "../types";

interface UseProjectsReturn {
  projects: Project[];
  isLoading: boolean;
}

export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
  }, []);

  return { projects, isLoading };
}