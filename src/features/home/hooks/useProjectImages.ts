"use client";

import { useEffect, useState } from "react";
import { getProjectImages } from "@/services/home.service";

interface UseProjectImagesReturn {
  images: string[];
  coverImage: string | null;
  isLoading: boolean;
}

export function useProjectImages(slug: string): UseProjectImagesReturn {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    getProjectImages(slug).then((data) => {
      setImages(data);
      setIsLoading(false);
    });
  }, [slug]);

  return {
    images,
    coverImage: images[0] ?? null,
    isLoading,
  };
}