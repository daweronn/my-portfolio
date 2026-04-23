"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

interface AutoHeightProps {
  children: React.ReactNode;
  visible: boolean;
  className?: string;
}

export function AutoHeight({ children, visible, className }: AutoHeightProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const measure = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [children]);

  return (
    <motion.div
      animate={{ height: visible ? height : 0, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" as const }}
      className={`overflow-hidden ${className ?? ""}`}
    >
      <div ref={contentRef}>
        {children}
      </div>
    </motion.div>
  );
}