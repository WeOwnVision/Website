export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleTr: string;
  speciality: string;
  bio: string;
  bioTr: string;
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
    badge: "// SPRINT RULES",
    headline: "How We Build",
    tagline: "Building functional software under 36-hour sprint constraints.",
    description: "We are WeOwnVision — a dedicated 5-person hackathon squad. When the clock starts, we architect clean backends, design sharp interfaces, and ship working code before the buzzer.",
    values: [
      {
        title: "Feature Freeze by H-06",
        titleTr: "H-06\x27da Özellik Kilidi",
        description: "The core loop and data schema are locked before midnight. Everything after is polish, error states, and live deployment.",
        descriptionTr: "Çekirdek döngü ve veri şeması gece yarısından önce kilitlenir. Kalan süre cila, hata durumları ve canlı dağıtıma ayrılır."
      },
      {
        title: "Zero Broken Fallbacks",
        titleTr: "Sıfır Bozuk Durum",
        description: "Sprint speed is never an excuse for broken states or unhandled API errors. Every user interaction must resolve cleanly.",
        descriptionTr: "Sprint hızı; bozuk arayüzler veya yakalanmayan API hataları için bahane olamaz. Her etkileşim eksiksiz çalışmalıdır."
      },
      {
        title: "Full-Stack Ownership",
        titleTr: "Uçtan Uca Sahiplik",
        description: "From database migrations and backend endpoints to typography and CSS polish, every engineer commits across the stack.",
        descriptionTr: "Veritabanı şemalarından API uç noktalarına, tipografiden CSS detaylarına kadar her mühendis tüm katmanda kod yazar."
      }
    ]
  },
  
  members: [
    {
      id: "member-1",
      name: "Alex Rivera",
      role: "Lead",
      roleTr: "Lider",
      speciality: "Full-Stack & Systems",
      bio: "Distributed backends, API contracts, and scalable infrastructure.",
      bioTr: "Dağıtık arka yüzler, API sözleşmeleri ve ölçeklenebilir altyapı.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      skills: ["TypeScript", "Go"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
      }
    },
    {
      id: "member-2",
      name: "Sarah Chen",
      role: "ML / Backend",
      roleTr: "ML / Arka Yüz",
      speciality: "ML Systems",
      bio: "Data pipelines, model inference, and concurrent event loops.",
      bioTr: "Veri boru hatları, model çıkarımı ve eşzamanlı olay döngüleri.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      skills: ["Python", "PyTorch"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
      }
    },
    {
      id: "member-3",
      name: "Marcus Vance",
      role: "Creative",
      roleTr: "Yaratıcı Ön Yüz",
      speciality: "Creative Web",
      bio: "Hardware WebGL graphics, keyboard-first UI, and kinetic web.",
      bioTr: "Donanım hızlandırmalı WebGL grafikleri ve kinetik arayüzler.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      skills: ["WebGL", "Three.js"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
      }
    },
    {
      id: "member-4",
      name: "Elena Rostova",
      role: "Design",
      roleTr: "Tasarım",
      speciality: "Product Architecture",
      bio: "Product architecture, interface flows, and design systems.",
      bioTr: "Ürün mimarisi, sezgisel arayüz akışları ve tasarım sistemleri.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      skills: ["Figma", "CSS"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
      }
    },
    {
      id: "member-5",
      name: "Liam Zhang",
      role: "Systems",
      roleTr: "Sistemler",
      speciality: "Cloud Ops",
      bio: "Production deploys, zero-trust security, and cloud ops.",
      bioTr: "Canlı dağıtımlar, sıfır güven güvenliği ve bulut operasyonları.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      skills: ["Linux", "Rust"],
      social: {
        github: "https://github.com/WeOwnVision",
        twitter: "https://x.com",
      }
    }
  ] as TeamMember[],

  projects: [] as HackathonProject[]
};
