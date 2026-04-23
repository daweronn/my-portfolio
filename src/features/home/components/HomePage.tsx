"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoadingScreen } from "@/features/loading/components/LoadingScreen";
import { ProfileCard } from "./ProfileCard";
import { SobreSection } from "./SobreSection";
import { TecnologiasSection } from "./TecnologiasSection";
import { ExperienciaSection } from "./ExperienciaSection";
import { ProjetosSection } from "./ProjetosSection";
import { ContatoSection } from "./ContatoSection";
import { useProfile } from "../hooks/useProfile";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { profile } = useProfile();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && profile && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="min-h-screen bg-background"
          >
            <ProfileCard profile={profile} />
            <SobreSection />
            <TecnologiasSection />
            <ExperienciaSection />
            <ProjetosSection />
            <ContatoSection />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}