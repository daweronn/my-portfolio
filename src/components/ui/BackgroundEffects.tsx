"use client";

import { AuroraOrbs } from "./background/AuroraOrbs";
import { CursorTrail } from "./background/CursorTrail";

export function BackgroundEffects() {
  return (
    <>
      <AuroraOrbs />
      <CursorTrail />
    </>
  );
}