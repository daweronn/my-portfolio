"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/services/home.service";
import { useLanguageContext } from "@/app/providers/LanguageProvider";
import type { ProfileData } from "../types";

interface UseProfileReturn {
  profile: ProfileData | null;
  isLoading: boolean;
}

export function useProfile(): UseProfileReturn {
  const { locale } = useLanguageContext();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfile(locale).then((data) => {
      setProfile(data);
      setIsLoading(false);
    });
  }, [locale]);

  return { profile, isLoading };
}