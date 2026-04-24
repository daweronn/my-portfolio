"use client";

import { useEffect, useRef, useState } from "react";

const ERASE_INTERVAL_MS = 18;
const TYPE_INTERVAL_MS = 22;

type AnimationPhase = "idle" | "erasing" | "typing";

export function useAnimatedText(target: string): string {
  const [displayed, setDisplayed] = useState(target);
  const phaseRef = useRef<AnimationPhase>("idle");
  const targetRef = useRef(target);
  const displayedRef = useRef(target);
  const eraseTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const typeTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimers = () => {
    if (eraseTimer.current) {
      clearInterval(eraseTimer.current);
      eraseTimer.current = null;
    }
    if (typeTimer.current) {
      clearInterval(typeTimer.current);
      typeTimer.current = null;
    }
  };

  const startTyping = () => {
    phaseRef.current = "typing";
    const finalTarget = targetRef.current;
    let index = 0;

    typeTimer.current = setInterval(() => {
      index++;
      const next = finalTarget.slice(0, index);
      displayedRef.current = next;
      setDisplayed(next);

      if (index >= finalTarget.length) {
        clearInterval(typeTimer.current!);
        typeTimer.current = null;
        phaseRef.current = "idle";
      }
    }, TYPE_INTERVAL_MS);
  };

  const startErasing = () => {
    phaseRef.current = "erasing";

    eraseTimer.current = setInterval(() => {
      const current = displayedRef.current;

      if (current.length === 0) {
        clearInterval(eraseTimer.current!);
        eraseTimer.current = null;
        startTyping();
        return;
      }

      const next = current.slice(0, -1);
      displayedRef.current = next;
      setDisplayed(next);
    }, ERASE_INTERVAL_MS);
  };

  useEffect(() => {
    if (target === targetRef.current && phaseRef.current === "idle") return;

    targetRef.current = target;

    clearTimers();
    startErasing();

    return clearTimers;
  }, [target]);

  return displayed;
}