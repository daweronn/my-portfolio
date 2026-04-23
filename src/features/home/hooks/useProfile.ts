"use client";

import { useEffect, useState } from "react";
import { getProfile, getNavItems } from "@/services/home.service";
import type { ProfileData, NavItem, NavSection } from "../types";

interface UseProfileReturn {
  profile: ProfileData | null;
  navItems: NavItem[];
  activeSection: NavSection;
  setActiveSection: (section: NavSection) => void;
  isLoading: boolean;
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [activeSection, setActiveSection] = useState<NavSection>("sobre");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [profileData, navData] = await Promise.all([
        getProfile(),
        getNavItems(),
      ]);
      setProfile(profileData);
      setNavItems(navData);
      setIsLoading(false);
    }

    load();
  }, []);

  return { profile, navItems, activeSection, setActiveSection, isLoading };
}