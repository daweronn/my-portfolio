"use client";

import { useEffect, useState } from "react";
import { getContactLinks } from "@/services/home.service";
import type { ContactLink } from "../types";

interface UseContactLinksReturn {
  contactLinks: ContactLink[];
  isLoading: boolean;
}

export function useContactLinks(): UseContactLinksReturn {
  const [contactLinks, setContactLinks] = useState<ContactLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getContactLinks().then((data) => {
      setContactLinks(data);
      setIsLoading(false);
    });
  }, []);

  return { contactLinks, isLoading };
}