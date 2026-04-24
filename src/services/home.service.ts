import * as ptMock from "@/features/home/data/mock";
import * as enMock from "@/features/home/data/mock.en";
import type { Locale } from "@/lib/types/language";
import type {
  ProfileData,
  NavItem,
  Technology,
  Experience,
  Project,
  ContactLink,
} from "@/features/home/types";

function getMock(locale: Locale) {
  return locale === "en" ? enMock : ptMock;
}

export async function getProfile(locale: Locale): Promise<ProfileData> {
  return getMock(locale).profileMock;
}

export async function getNavItems(locale: Locale): Promise<NavItem[]> {
  return getMock(locale).navItemsMock;
}

export async function getAboutParagraphs(locale: Locale): Promise<string[]> {
  return getMock(locale).aboutParagraphsMock;
}

export async function getTechnologies(locale: Locale): Promise<Technology[]> {
  return getMock(locale).technologiesMock;
}

export async function getExperiences(locale: Locale): Promise<Experience[]> {
  return getMock(locale).experiencesMock;
}

export async function getProjects(locale: Locale): Promise<Project[]> {
  return getMock(locale).projectsMock;
}

export async function getContactLinks(locale: Locale): Promise<ContactLink[]> {
  return getMock(locale).contactLinksMock;
}

export async function getProjectImages(slug: string): Promise<string[]> {
  const response = await fetch(`/api/projects/${slug}/images`);
  if (!response.ok) return [];
  const data = (await response.json()) as { images: string[] };
  return data.images;
}