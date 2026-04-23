import type { ProfileData, NavItem } from "../types";

export const profileMock: ProfileData = {
  name: "David Felicio",
  username: "daweronn",
  role: "Fullstack Developer",
  tagline: "A simplicidade é a forma mais absoluta de sofisticação.",
  bio: "Desenvolvedor fullstack focado em React, TypeScript e Python. Construo interfaces que respeitam o usuário e sistemas que respeitam o time.",
  avatarUrl: null,
  location: "Rio de Janeiro, Brasil",
  availableForWork: true,
  socials: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/daweronn",
      icon: "github",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/davidvicter/",
      icon: "linkedin",
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/davidvicter/",
      icon: "instagram",
    },
  ],
};

export const navItemsMock: NavItem[] = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "contato", label: "Contato" },
];