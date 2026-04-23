"use client";

import { motion } from "motion/react";
import { useProjectImages } from "../hooks/useProjectImages";

interface ProjectCoverImageProps {
  slug: string;
}

export function ProjectCoverImage({ slug }: ProjectCoverImageProps) {
  const { coverImage, isLoading } = useProjectImages(slug);

  if (isLoading || !coverImage) return null;

  return (
    <motion.div
      className="relative shrink-0 overflow-hidden rounded-ios-sm border border-border/40"
      style={{ width: "160px", height: "90px" }}
    >
      <img
        src={coverImage}
        alt="Preview do projeto"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 rounded-ios-sm ring-1 ring-inset ring-white/5" />
    </motion.div>
  );
}