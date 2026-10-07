export interface TeamMember {
  id: string;
  name: string;
  role: string;
  speciality: string;
  bio: string;
  avatar: string;
  skills: string[];
  social: {
    github?: string;
    twitter?: string;
    discord?: string;
  };
}

export interface HackathonProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  award?: string;
  category: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const teamData = {
  manifesto: {
    badge: "// MANIFESTO",
    headline: "What We Do & Why We're Here",
    tagline: "Building functional software under 36-hour sprint constraints.",
    description: "We are WeOwnVision — a dedicated 5-person hackathon squad. When the clock starts, we don't waste time on slide decks or endless deliberations. We architect clean backends, design razor-sharp interfaces, and ship working code that solves actual problems before the buzzer sounds.",
    values: [
      {
        title: "Sprint Discipline",
        description: "Zero bloat. We prioritize working core loops, robust APIs, and measurable user value."
      },
      {
        title: "Craft & Detail",
        description: "Speed is never an excuse for broken UI or unpolished interactions. Every detail matters."
      },
      {
        title: "Full-Stack Ownership",
        description: "From low-level systems and database schemas to the final frontend polish, we own the whole stack."
      }
    ]
  },
  
  members: [
    {
      id: "member-1",
      name: "Alex Rivera",
      role: "Lead",
      speciality: "Full-Stack & Systems",
      bio: "Focusing on distributed backends, clean API contracts, and scalable infrastructure under pressure.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      skills: ["TypeScript", "Go", "Docker", "PostgreSQL"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
        discord: "#",
      }
    },
    {
      id: "member-2",
      name: "Sarah Chen",
      role: "Engineering",
      speciality: "Backend & ML Systems",
      bio: "Building robust data pipelines, model inference endpoints, and high-concurrency event loops.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      skills: ["Python", "PyTorch", "FastAPI", "Redis"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
        discord: "#",
      }
    },
    {
      id: "member-3",
      name: "Marcus Vance",
      role: "Frontend",
      speciality: "Creative Web & Shaders",
      bio: "Crafting hardware-accelerated WebGL visuals, keyboard-first interfaces, and kinetic typography.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      skills: ["WebGL", "Three.js", "Astro", "Tailwind"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
        discord: "#",
      }
    },
    {
      id: "member-4",
      name: "Elena Rostova",
      role: "Design",
      speciality: "Product & UI Architecture",
      bio: "Transforming raw hackathon ideas into razor-sharp, intuitive product flows and design systems.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      skills: ["Design Systems", "Figma", "Next.js", "CSS"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
        discord: "#",
      }
    },
    {
      id: "member-5",
      name: "Liam Zhang",
      role: "Systems",
      speciality: "Security & Cloud Ops",
      bio: "Hardening production deploys, zero-trust network boundaries, and container security for fast-shipping teams.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      skills: ["Linux", "Kubernetes", "Rust", "Networks"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
        discord: "#",
      }
    }
  ] as TeamMember[],

  projects: [] as HackathonProject[]
};
