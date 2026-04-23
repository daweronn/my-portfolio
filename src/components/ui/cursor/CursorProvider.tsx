"use client";

import { useEffect, useState } from "react";

export function CursorProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const onMove = () => {};
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <>{children}</>;
}