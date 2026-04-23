export type SocialIconId = "github" | "linkedin" | "instagram" | "mail";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: SocialIconId;
}

export interface ProfileData {
  name: string;
  username: string;
  role: string;
  tagline: string;
  bio: string;
  avatarUrl: string | null;
  location: string;
  socials: SocialLink[];
  availableForWork: boolean;
}

export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Linguagem"
  | "Banco de Dados"
  | "DevOps";

export interface Technology {
  label: string;
  category: TechnologyCategory;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export type ProjectStatus = "live" | "wip" | "concept";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  url?: string;
  year: string;
  status: ProjectStatus;
  images?: string[];
}

export interface ContactLink {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: SocialIconId;
  external: boolean;
}

export type NavSection =
  | "sobre"
  | "projetos"
  | "experiencia"
  | "tecnologias"
  | "contato";

export interface NavItem {
  id: NavSection;
  label: string;
}