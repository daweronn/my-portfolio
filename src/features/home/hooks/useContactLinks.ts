"use client";

import { useEffect, useState } from "react";
import { getContactLinks } from "@/services/home.service";
import { useLanguageContext } from "@/app/providers/LanguageProvider";
import type { ContactLink } from "../types";

interface UseContactLinksReturn {
  contactLinks: ContactLink[];
  isLoading: boolean;
}

export function useContactLinks(): UseContactLinksReturn {
  const { locale } = useLanguageContext();
  const [contactLinks, setContactLinks] = useState<ContactLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getContactLinks(locale).then((data) => {
      setContactLinks(data);
      setIsLoading(false);
    });
  }, [locale]);

  return { contactLinks, isLoading };
}