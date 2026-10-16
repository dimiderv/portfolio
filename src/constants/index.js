import {
  webisoft, addad, seal, market, duth, circuits_integrated,
  reactjs, nextjs, typescript, javascript, tailwind, redux,
  nodejs, postgres, mongodb, supabase, authjs, git, docker, python, go, hyperledger,
} from "../tech";

export const projects = [
  {
    id: "security-alliance",
    title: "Security Alliance",
    category: "Contract work · Cybersecurity",
    description: "A website and content platform for an organization protecting the crypto ecosystem.",
    contribution: "I worked on the public interface and the CMS behind it: responsive pages, content workflows, and authentication with Auth.js.",
    image: "/images/projects/security-alliance.png",
    logo: seal,
    technologies: ["Next.js", "MongoDB", "Auth.js", "Tailwind CSS"],
    previewUrl: "https://securityalliance.org/",
  },
];

export const internalWork = {
  company: "AddAd Media",
  logo: addad,
  title: "The tools behind the campaigns.",
  description: "As a contract developer at AddAd Media, I worked on internal tools for campaign management and content updates across locations, using Next.js and Supabase.",
  technologies: ["Next.js", "React", "Supabase", "PostgreSQL"],
  url: "https://www.addad.media/",
};

export const experiences = [
  {
    id: "webisoft",
    title: "Full-stack Developer",
    employmentType: "Full-time",
    company: "Webisoft",
    logo: webisoft,
    technologies: ["Next.js", "React", "Django", "PostgreSQL", "Wagmi"],
    date: "Feb 2025 — Present",
    points: [
      "Built full-stack applications using Next.js, React, Django, and PostgreSQL.",
      "Implemented payment workflows and integrations for web and crypto applications.",
    ],
  },
  {
    id: "addad",
    title: "Full-stack Developer",
    employmentType: "Contract",
    company: "AddAd Media",
    logo: addad,
    technologies: ["Next.js", "React", "Supabase"],
    date: "Nov 2024 — Jan 2025",
    points: [
      "Developed internal campaign management tools with Next.js and Supabase.",
      "Built workflows for updating content and managing campaigns across locations.",
    ],
  },
  {
    id: "seal",
    title: "Software Developer",
    employmentType: "Contract",
    company: "Security Alliance",
    logo: seal,
    technologies: ["Next.js", "TanStack Query", "MongoDB", "Auth.js"],
    date: "Jun 2024 — Jan 2025",
    points: [
      "Built a Next.js and React CMS backed by MongoDB for the organization’s web platform.",
      "Developed responsive interfaces and implemented authentication and authorization with Auth.js.",
    ],
  },
  {
    id: "quatre-coins",
    title: "Full-stack Developer",
    company: "Quatre Coins",
    logo: market,
    technologies: ["React", "Node.js", "MongoDB"],
    date: "Jan 2023 — Dec 2023",
    points: [
      "Developed an order management application with React, Node.js, Express, and MongoDB.",
      "Added automated reminders and searchable order history to simplify daily operations.",
    ],
  },
];

export const technologyIcons = {
  "React": reactjs, "Next.js": nextjs, "TypeScript": typescript,
  "JavaScript": javascript, "Tailwind CSS": tailwind, "Redux": redux,
  "Node.js": nodejs, "PostgreSQL": postgres, "MongoDB": mongodb,
  "Supabase": supabase, "Auth.js": authjs, "Git": git, "Docker": docker,
  "Python": python, "Go": go, "Hyperledger Fabric": hyperledger,
  "Django": "/icons/django.svg", "TanStack Query": "/icons/tanstack-query.svg",
  "Wagmi": "/icons/wagmi.svg", "Figma": "/icons/figma.svg",
  "Express": "/icons/express.svg", "Claude": "/icons/claude.svg", "Codex": "/icons/codex.svg",
};

export const educationLogo = duth;
export const internshipLogo = circuits_integrated;

export const skillGroups = [
  { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "TanStack Query"] },
  { name: "Backend & data", skills: ["Django", "Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase", "Auth.js"] },
  { name: "Web3 & other experience", skills: ["Wagmi", "Hyperledger Fabric", "Python", "Go"] },
  { name: "Development workflow", skills: ["Git", "Docker", "Figma", "Claude", "Codex"] },
];
