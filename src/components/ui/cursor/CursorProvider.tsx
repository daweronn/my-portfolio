"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface CursorContextValue {
  x: number;
  y: number;
  visible: boolean;
}

const CursorContext = createContext<CursorContextValue>({ x: 0, y: 0, visible: false });

export function useCursorContext() {
  return useContext(CursorContext);
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY, visible: true });
    const onLeave = () => setPos((p) => ({ ...p, visible: false }));
    const onEnter = () => setPos((p) => ({ ...p, visible: true }));

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <CursorContext.Provider value={pos}>
      {children}
    </CursorContext.Provider>
  );
}