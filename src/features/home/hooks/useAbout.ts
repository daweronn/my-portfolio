"use client";

import { useEffect, useState } from "react";
import { getAboutParagraphs } from "@/services/home.service";

interface UseAboutReturn {
  paragraphs: string[];
  isLoading: boolean;
}

export function useAbout(): UseAboutReturn {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAboutParagraphs().then((data) => {
      setParagraphs(data);
      setIsLoading(false);
    });
  }, []);

  return { paragraphs, isLoading };
}