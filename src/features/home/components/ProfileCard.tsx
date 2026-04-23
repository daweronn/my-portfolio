"use client";

import { motion } from "motion/react";
import { AvatarImage } from "./AvatarImage";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";
import type { ProfileData } from "../types";

interface ProfileCardProps {
  profile: ProfileData;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 pt-14 pb-10 flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <AvatarImage />
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" as const }}
        >
          <ThemeToggle />
        </motion.div>
      </div>

      <div className="flex flex-col gap-3">
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-text-primary tracking-tight">
            {profile.name}
          </h1>
          <p className="text-sm font-mono text-accent">@{profile.username}</p>
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="flex flex-col gap-1">
          <p className="text-sm text-text-secondary">{profile.role}</p>
          <p className="text-sm text-text-muted">{profile.location}</p>
        </motion.div>

        <motion.blockquote
          {...fadeUp(0.2)}
          className="border-l-2 border-accent/40 pl-3 mt-1"
        >
          <p className="text-sm text-text-secondary italic leading-relaxed">
            "{profile.tagline}"
          </p>
        </motion.blockquote>

        <motion.p
          {...fadeUp(0.22)}
          className="text-sm text-text-secondary leading-relaxed"
        >
          {profile.bio}
        </motion.p>

        <motion.div {...fadeUp(0.27)}>
          <SocialLinks socials={profile.socials} />
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" as const }}
        style={{ originX: 0 }}
        className="h-px bg-border"
      />
    </div>
  );
}