"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

type CursorState = "default" | "hover" | "click";

const CURSOR_SIZE = 38;

const cursorSrc: Record<CursorState, string> = {
  default: "/cursor/Normal.png",
  hover: "/cursor/Hover.png",
  click: "/cursor/Click.png",
};

export function Cursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<CursorState>("default");

  useEffect(() => {
    const isClickable = (target: Element): boolean =>
      !!target.closest(
        'a, button, [role="button"], input, textarea, select, label, [tabindex]'
      );

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      if (state !== "click") {
        setState(isClickable(e.target as Element) ? "hover" : "default");
      }
    };

    const onDown = (e: MouseEvent) => {
      if (isClickable(e.target as Element)) setState("click");
    };

    const onUp = (e: MouseEvent) => {
      setState(isClickable(e.target as Element) ? "hover" : "default");
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [visible, state, x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.1 }}
    >
      <img
        src={cursorSrc[state]}
        alt=""
        width={CURSOR_SIZE}
        height={CURSOR_SIZE}
        draggable={false}
        className="select-none"
      />
    </motion.div>
  );
}