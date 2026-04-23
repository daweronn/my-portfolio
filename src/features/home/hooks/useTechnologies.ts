"use client";

import { useEffect, useState } from "react";
import { getTechnologies } from "@/services/home.service";
import type { Technology } from "../types";

interface UseTechnologiesReturn {
  technologies: Technology[];
  isLoading: boolean;
}

export function useTechnologies(): UseTechnologiesReturn {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTechnologies().then((data) => {
      setTechnologies(data);
      setIsLoading(false);
    });
  }, []);

  return { technologies, isLoading };
}