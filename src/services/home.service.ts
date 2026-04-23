import {
  profileMock,
  navItemsMock,
  aboutParagraphsMock,
  technologiesMock,
  experiencesMock,
  projectsMock,
  contactLinksMock,
} from "@/features/home/data/mock";
import type {
  ProfileData,
  NavItem,
  Technology,
  Experience,
  Project,
  ContactLink,
} from "@/features/home/types";

export async function getProfile(): Promise<ProfileData> {
  return profileMock;
}

export async function getNavItems(): Promise<NavItem[]> {
  return navItemsMock;
}

export async function getAboutParagraphs(): Promise<string[]> {
  return aboutParagraphsMock;
}

export async function getTechnologies(): Promise<Technology[]> {
  return technologiesMock;
}

export async function getExperiences(): Promise<Experience[]> {
  return experiencesMock;
}

export async function getProjects(): Promise<Project[]> {
  return projectsMock;
}

export async function getContactLinks(): Promise<ContactLink[]> {
  return contactLinksMock;
}

export async function getProjectImages(slug: string): Promise<string[]> {
  const response = await fetch(`/api/projects/${slug}/images`);
  if (!response.ok) return [];
  const data = (await response.json()) as { images: string[] };
  return data.images;
}