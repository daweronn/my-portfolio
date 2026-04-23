export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "mail";
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

export type NavSection = "sobre" | "projetos" | "experiencia" | "tecnologias" | "contato";

export interface NavItem {
  id: NavSection;
  label: string;
}