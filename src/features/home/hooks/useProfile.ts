"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/services/home.service";
import type { ProfileData } from "../types";

interface UseProfileReturn {
  profile: ProfileData | null;
  isLoading: boolean;
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfile().then((data) => {
      setProfile(data);
      setIsLoading(false);
    });
  }, []);

  return { profile, isLoading };
}