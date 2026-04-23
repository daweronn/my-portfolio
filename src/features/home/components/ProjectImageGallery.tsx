"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useProjectImages } from "../hooks/useProjectImages";

interface ProjectImageGalleryProps {
  slug: string;
}

export function ProjectImageGallery({ slug }: ProjectImageGalleryProps) {
  const { images, isLoading } = useProjectImages(slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (isLoading || images.length === 0) return null;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );

  const goToNext = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {images.map((src, index) => (
          <motion.button
            key={src}
            onClick={() => openLightbox(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="relative aspect-video rounded-ios-sm overflow-hidden border border-border/60 bg-surface-raised"
          >
            <img
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex]}
                alt={`Screenshot ${lightboxIndex + 1}`}
                className="w-full rounded-ios border border-border/60 shadow-ios-lg"
              />

              <button
                onClick={closeLightbox}
                className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
              >
                <X size={13} />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm border border-border flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm border border-border flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                  >
                    <ChevronRight size={15} />
                  </button>
                </>
              )}

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-text-muted">
                {lightboxIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}