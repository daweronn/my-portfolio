import { profileMock, navItemsMock } from "@/features/home/data/mock";
import type { ProfileData, NavItem } from "@/features/home/types";

export async function getProfile(): Promise<ProfileData> {
  return profileMock;
}

export async function getNavItems(): Promise<NavItem[]> {
  return navItemsMock;
}