import type {
  ProfileData,
  NavItem,
  Technology,
  Experience,
  Project,
  ContactLink,
} from "../types";

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
    { id: "github", label: "GitHub", url: "https://github.com/daweronn", icon: "github" },
    { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/davidvicter/", icon: "linkedin" },
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/davidvicter/", icon: "instagram" },
  ],
};

export const navItemsMock: NavItem[] = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "contato", label: "Contato" },
];

export const aboutParagraphsMock: string[] = [
  "Sou um desenvolvedor fullstack apaixonado por construir produtos que unem simplicidade e robustez. Acredito que a melhor interface é aquela que o usuário nem percebe — ela simplesmente funciona.",
  "Trabalho principalmente com React, TypeScript e Python, sempre com foco em arquitetura limpa, performance e experiência do usuário. Gosto de projetos que desafiam e que têm impacto real.",
  "Fora do código, sou movido por design, música e pela ideia de que tecnologia bem feita pode mudar como as pessoas vivem.",
];

export const technologiesMock: Technology[] = [
  { label: "React", category: "Frontend" },
  { label: "Next.js", category: "Frontend" },
  { label: "TypeScript", category: "Linguagem" },
  { label: "Python", category: "Linguagem" },
  { label: "Tailwind CSS", category: "Frontend" },
  { label: "FastAPI", category: "Backend" },
  { label: "PostgreSQL", category: "Banco de Dados" },
  { label: "Supabase", category: "Banco de Dados" },
  { label: "Docker", category: "DevOps" },
  { label: "Git", category: "DevOps" },
  { label: "Framer Motion", category: "Frontend" },
  { label: "Node.js", category: "Backend" },
];

export const experiencesMock: Experience[] = [
  {
    id: "exp-1",
    role: "Fullstack Developer",
    company: "Freelance",
    period: "2023 — Presente",
    description:
      "Desenvolvimento de aplicações web completas para clientes de diferentes segmentos, com foco em React, Next.js e Python. Arquitetura de sistemas, design de interfaces e integrações com APIs externas.",
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Projeto Pessoal",
    period: "2022 — 2023",
    description:
      "Construção de produtos digitais próprios, explorando design systems, performance e acessibilidade. Aprofundamento em TypeScript e arquitetura de componentes.",
  },
];

export const projectsMock: Project[] = [
  {
    id: "proj-skorpion",
    slug: "skorpion",
    title: "Skorpion Gamer — Plataforma de Membros",
    description:
      "Automações dentro da plataforma de membros do canal do youtube Skorpion Gamer.",
    longDescription:
      "O sistema centraliza o acesso dos membros a um ecossistema de dados e analytics gerado por automações em Python — coleta, processamento e entrega em dashboard interativo, tudo em um único ambiente autenticado.",
    stack: ["React", "TypeScript", "Python", "Supabase"],
    url: "https://skorpiongamer.com.br",
    year: "2026",
    status: "live",
  },
  {
    id: "proj-2",
    slug: "em-breve",
    title: "Em breve",
    description: "Novos projetos chegando em breve.",
    longDescription:
      "Estou trabalhando em novos projetos que serão adicionados aqui em breve. Fique de olho no meu GitHub para novidades.",
    stack: ["Em desenvolvimento"],
    year: "2025",
    status: "wip",
  },
];

export const contactLinksMock: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    description: "davidvicter@gmail.com",
    href: "mailto:davidvicter@gmail.com",
    icon: "mail",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    description: "@daweronn",
    href: "https://github.com/daweronn",
    icon: "github",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "davidvicter",
    href: "https://www.linkedin.com/in/davidvicter/",
    icon: "linkedin",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    description: "@davidvicter",
    href: "https://www.instagram.com/davidvicter/",
    icon: "instagram",
    external: true,
  },
];