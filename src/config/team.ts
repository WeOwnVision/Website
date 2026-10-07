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
        title: "Feature Freeze by Hour 6",
        description: "The core loop and data schema are locked before midnight. Everything after is polish, error states, and live deployment."
      },
      {
        title: "Zero Broken Fallbacks",
        description: "Sprint speed is never an excuse for broken states or unhandled API errors. Every user interaction must resolve cleanly."
      },
      {
        title: "Full-Stack Ownership",
        description: "From database migrations and backend endpoints to typography and CSS polish, every engineer commits across the stack."
      }
    ]
  },

  members: [
    {
      id: "member-1",
      name: "Can Ahmet Kurt",
      role: "Lead",
      speciality: "Full-Stack & Systems",
      bio: "Focusing on distributed backends, clean API contracts, and scalable infrastructure under pressure.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEqWxc3r4zAew/profile-displayphoto-scale_200_200/B4DZ39b6GXGQAY-/0/1778073449090?e=2147483647&v=beta&t=dX2KfDUTHU1z1LFLCr4coOCseT47SRVS_ylhZYBy1RY",
      skills: ["TypeScript", "Go", "Docker", "PostgreSQL"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
        discord: "#",
      }
    },
    {
      id: "member-2",
      name: "Bircan Taş",
      role: "AI/ML",
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
      name: "Talha Topatan",
      role: "Frontend",
      speciality: "Creative Web & Shaders",
      bio: "Crafting hardware-accelerated WebGL visuals, keyboard-first interfaces, and kinetic typography.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQH9Xt6wdIafxw/profile-displayphoto-scale_200_200/B4DZ39.MV0HoAY-/0/1778082434630?e=2147483647&v=beta&t=JaPtJ4DVCi01ZkF_4GzMeUnLsNRQU6JsRUR6tJb2OQs",
      skills: ["WebGL", "Three.js", "Astro", "Tailwind"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
        discord: "#",
      }
    },
    {
      id: "member-4",
      name: "Emir Cumaoğulları",
      role: "Design",
      speciality: "Product & UI Architecture",
      bio: "Transforming raw hackathon ideas into razor-sharp, intuitive product flows and design systems.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEpP28uDSWzeA/profile-displayphoto-scale_200_200/B4DZ3YAfs4JAAY-/0/1777445504433?e=2147483647&v=beta&t=NiCXseWM2Mg378B222tICw4Z4aaH3Io16LhUxHjgo60",
      skills: ["Design Systems", "Figma", "Next.js", "CSS"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
        discord: "#",
      }
    },
    {
      id: "member-5",
      name: "Abdullah Sayılğan",
      role: "Systems",
      speciality: "Security & Cloud Ops",
      bio: "Hardening production deploys, zero-trust network boundaries, and container security for fast-shipping teams.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQG5Gn4cU5DaNg/profile-displayphoto-scale_200_200/B4DaAg5cQFJcAg-/0/1787258327071?e=2147483647&v=beta&t=jLDk06LPzPTnQW3THqey-sUEjkOuN0jrSVqcD_FHDAc",
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
