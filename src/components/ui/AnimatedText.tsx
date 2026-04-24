"use client";

import React from "react";
import { useAnimatedText } from "@/lib/hooks/useAnimatedText";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export function AnimatedText({ text, className, as: Tag = "span" }: AnimatedTextProps) {
  const displayed = useAnimatedText(text);

  return (
    <Tag className={className}>
      {displayed}
    </Tag>
  );
}