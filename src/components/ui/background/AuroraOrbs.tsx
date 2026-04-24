"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useThemeContext } from "@/app/providers/ThemeProvider";

interface OrbProps {
  animate: Record<string, number[]>;
  duration: number;
  delay?: number;
  style: React.CSSProperties;
  parallaxFactor: number;
}

function Orb({ animate, duration, delay = 0, style, parallaxFactor }: OrbProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, parallaxFactor * 3000]);

  return (
    <motion.div
      animate={animate}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className="absolute rounded-full"
      style={{ ...style, y }}
    />
  );
}

export function AuroraOrbs() {
  const { resolvedTheme } = useThemeContext();
  const isDark = resolvedTheme === "dark";

  const light = "0 0% 85%";
  const mid   = "0 0% 50%";
  const dark  = "0 0% 20%";

  const nearOpacity  = isDark ? "0.10" : "0.06";
  const nearOpacity2 = isDark ? "0.14" : "0.07";
  const farOpacity   = isDark ? "0.04" : "0.02";
  const farOpacity2  = isDark ? "0.03" : "0.01";

  return (
    <div className="absolute inset-0 pointer-events-none z-[0] overflow-hidden">
      <Orb
        animate={{ x: [0, 50, -30, 0], scale: [1, 1.12, 0.96, 1] }}
        duration={20}
        parallaxFactor={-0.15}
        style={{
          top: "-15%",
          left: "15%",
          width: "800px",
          height: "800px",
          background: `radial-gradient(circle at 40% 40%,
            hsl(${light} / ${nearOpacity}) 0%,
            hsl(${light} / ${farOpacity}) 45%,
            transparent 70%
          )`,
          filter: "blur(30px)",
        }}
      />

      <Orb
        animate={{ x: [0, 20, -10, 0], scale: [1, 1.05, 0.98, 1] }}
        duration={12}
        delay={1}
        parallaxFactor={-0.08}
        style={{
          top: "-8%",
          left: "22%",
          width: "450px",
          height: "450px",
          background: `radial-gradient(circle at 50% 50%,
            hsl(${light} / ${nearOpacity2}) 0%,
            hsl(${light} / ${farOpacity}) 55%,
            transparent 75%
          )`,
          filter: "blur(20px)",
        }}
      />

      <Orb
        animate={{ x: [0, -60, 35, 0], scale: [1, 0.88, 1.10, 1] }}
        duration={26}
        delay={5}
        parallaxFactor={-0.22}
        style={{
          top: "25%",
          right: "5%",
          width: "700px",
          height: "700px",
          background: `radial-gradient(circle at 60% 40%,
            hsl(${mid} / ${nearOpacity}) 0%,
            hsl(${mid} / ${farOpacity}) 45%,
            transparent 70%
          )`,
          filter: "blur(35px)",
        }}
      />

      <Orb
        animate={{ x: [0, -25, 15, 0], scale: [1, 0.95, 1.06, 1] }}
        duration={14}
        delay={6}
        parallaxFactor={-0.12}
        style={{
          top: "30%",
          right: "12%",
          width: "380px",
          height: "380px",
          background: `radial-gradient(circle at 50% 50%,
            hsl(${mid} / ${nearOpacity2}) 0%,
            hsl(${mid} / ${farOpacity2}) 55%,
            transparent 75%
          )`,
          filter: "blur(18px)",
        }}
      />

      <Orb
        animate={{ x: [0, 35, -45, 0], scale: [1, 1.08, 0.94, 1] }}
        duration={22}
        delay={10}
        parallaxFactor={-0.30}
        style={{
          bottom: "5%",
          left: "25%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle at 45% 55%,
            hsl(${dark} / ${nearOpacity}) 0%,
            hsl(${dark} / ${farOpacity}) 45%,
            transparent 70%
          )`,
          filter: "blur(30px)",
        }}
      />

      <Orb
        animate={{ x: [0, 15, -20, 0], scale: [1, 1.04, 0.97, 1] }}
        duration={10}
        delay={11}
        parallaxFactor={-0.18}
        style={{
          bottom: "8%",
          left: "30%",
          width: "320px",
          height: "320px",
          background: `radial-gradient(circle at 50% 50%,
            hsl(${dark} / ${nearOpacity2}) 0%,
            hsl(${dark} / ${farOpacity2}) 55%,
            transparent 75%
          )`,
          filter: "blur(16px)",
        }}
      />
    </div>
  );
}