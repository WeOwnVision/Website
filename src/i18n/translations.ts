export type Locale = 'en' | 'tr';

export interface MemberTranslation {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  social: {
    github?: string;
    twitter?: string;
  };
}

export interface ValueTranslation {
  number: string;
  title: string;
  description: string;
}

export const translations = {
  en: {
    locale: 'en',
    campusBadge: 'ATATÜRK UNIVERSITY // HACKATHON COLLECTIVE',
    nav: {
      home: 'Home',
      about: 'About',
      builds: 'Projects',
      github: 'GitHub',
    },
    hero: {
      headline: 'Five engineers.\n36 hours. Shipped.',
      subhead: 'We are WeOwnVision — a collegiate hackathon squad from Atatürk University in Erzurum. We design clean architectures, build sharp interfaces, and ship working software before the buzzer sounds.',
      primaryCta: 'Meet the squad',
      secondaryCta: 'View projects →',
      manifestoTitle: '36-Hour Sprint Rules',
      manifestoRules: [
        {
          num: '01',
          name: 'Hour 6 Scope Freeze',
          desc: 'Core user loop and data schema locked before midnight. Zero feature creep after Hour 6.'
        },
        {
          num: '02',
          name: 'Real Seed Data',
          desc: 'Offline fixtures pre-loaded so presentation demos stay intact if venue Wi-Fi hiccups.'
        },
        {
          num: '03',
          name: 'CI/CD from Hour One',
          desc: 'Continuous deployment straight to public production URLs from the first git commit.'
        }
      ]
    },
    proof: {
      badge: '02 / PROOF OF WORK',
      title: 'Current Sprints & Repositories',
      subhead: 'A transparent look at our upcoming competition targets and active open-source codebase.',
      nextTargetTitle: 'Next: 2026 Collegiate Hackathons',
      nextTargetSub: 'Collegiate & National Competitions',
      nextTargetDescription: 'Our squad is training for upcoming 36-hour sprint competitions. Project repositories, architectural teardowns, and live production URLs will be published here upon competition completion.',
      flagshipTitle: 'This Website — Open Source',
      flagshipSub: 'weownvision.vercel.app',
      flagshipDesc: 'The official collective platform engineered from scratch with Astro 5, TypeScript, and responsive styling. Zero framework bloat.',
      viewRepo: 'View Source on GitHub',
      trackCommits: 'Track commits on GitHub →',
    },
    principles: {
      badge: '03 / SPRINT DISCIPLINE',
      title: 'How We Build',
      subhead: 'Sprint discipline over slide decks. When the timer is ticking, we adhere to 3 uncompromising rules.',
      items: [
        {
          number: '01',
          title: 'Scope freeze by hour 6',
          description: 'The user flow, data schema, and API contracts are locked before midnight. No feature requests enter the repository after the first quarter.'
        },
        {
          number: '02',
          title: 'Real seed data fallbacks',
          description: 'Sprint velocity is never an excuse for broken states. Every endpoint has offline seed data ready so the demo shines under unstable network conditions.'
        },
        {
          number: '03',
          title: 'CI/CD from hour one',
          description: 'Every builder commits to mainline with automated builds. The production preview is live from hour one, eliminating last-minute merge panics.'
        }
      ] as ValueTranslation[],
    },
    squad: {
      badge: '04 / THE COLLECTIVE',
      title: 'The Squad',
      subhead: 'Five builders spanning distributed systems, ML pipelines, creative frontend, and product architecture.',
      members: [
        {
          id: 'can-ahmet-kurt',
          name: 'Can Ahmet Kurt',
          role: 'Lead & Systems Engineer',
          bio: 'Designs distributed backends and database schemas in Go and TypeScript. Manages production deployment pipelines and core API stability under pressure.',
          avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQEqWxc3r4zAew/profile-displayphoto-scale_200_200/B4DZ39b6GXGQAY-/0/1778073449090?e=2147483647&v=beta&t=dX2KfDUTHU1z1LFLCr4coOCseT47SRVS_ylhZYBy1RY',
          skills: ['TypeScript', 'Go', 'Docker', 'PostgreSQL'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        },
        {
          id: 'bircan-tas',
          name: 'Bircan Taş',
          role: 'AI & ML Engineer',
          bio: 'Builds real-time model inference endpoints and asynchronous worker queues in Python and PyTorch. Optimizes token streaming latency for live demos.',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
          skills: ['Python', 'PyTorch', 'FastAPI', 'Redis'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        },
        {
          id: 'talha-topatan',
          name: 'Talha Topatan',
          role: 'Frontend & Creative Engineer',
          bio: 'Develops hardware-accelerated interfaces and fluid interactions in Astro and modern web standards. Focuses on fast load times and zero layout shift.',
          avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQH9Xt6wdIafxw/profile-displayphoto-scale_200_200/B4DZ39.MV0HoAY-/0/1778082434630?e=2147483647&v=beta&t=JaPtJ4DVCi01ZkF_4GzMeUnLsNRQU6JsRUR6tJb2OQs',
          skills: ['WebGL', 'Astro', 'Tailwind', 'TypeScript'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        },
        {
          id: 'emir-cumaogullari',
          name: 'Emir Cumaoğulları',
          role: 'Product & UI Architect',
          bio: 'Transforms hackathon concepts into clean, intuitive user journeys and responsive design systems. Finishes the component library before Hour 6.',
          avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQEpP28uDSWzeA/profile-displayphoto-scale_200_200/B4DZ3YAfs4JAAY-/0/1777445504433?e=2147483647&v=beta&t=NiCXseWM2Mg378B222tICw4Z4aaH3Io16LhUxHjgo60',
          skills: ['Design Systems', 'Figma', 'UI/UX', 'Next.js'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        },
        {
          id: 'abdullah-sayilgan',
          name: 'Abdullah Sayılğan',
          role: 'Security & Cloud Ops Engineer',
          bio: 'Provisions hardened Linux server clusters, configures container networks, and ensures resilient uptime on the presentation floor.',
          avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQG5Gn4cU5DaNg/profile-displayphoto-scale_200_200/B4DaAg5cQFJcAg-/0/1787258327071?e=2147483647&v=beta&t=jLDk06LPzPTnQW3THqey-sUEjkOuN0jrSVqcD_FHDAc',
          skills: ['Linux', 'Kubernetes', 'Rust', 'Cloud Ops'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        }
      ] as MemberTranslation[],
    },
    aboutPage: {
      badge: 'ABOUT / ORIGIN & METHODOLOGY',
      title: 'Built for the Clock.',
      subhead: 'We formed WeOwnVision at Atatürk University in Erzurum to test a hypothesis: that five disciplined engineers can out-ship full software teams under 36-hour sprint constraints.',
      storyTitle: 'Origin & Campus Roots',
      storyP1: 'Most hackathon teams fall apart because of scope creep, broken branches at the 35th hour, or presenting slide decks without a functional backend. We wanted a dedicated squad that treats hackathons like high-stakes engineering races.',
      storyP2: 'Based at Atatürk University in Erzurum, we bring together distributed backend design, applied machine learning, creative web interfaces, design architecture, and cloud security into one cohesive unit.',
      protocolTitle: 'The 36-Hour Sprint Methodology',
      protocolSub: 'Our time-tested phase system engineered to guarantee live production deploys before the clock strikes zero.',
      ctaTitle: 'Want WeOwnVision at your hackathon?',
      ctaSub: 'We actively compete in collegiate and national competitions. Reach out for invitations, sponsorships, or collaborations.',
      ctaButton: 'Contact the Squad',
    },
    footer: {
      brandDesc: 'Hackathon Engineering Collective • Atatürk University, Erzurum',
      allRights: 'All rights reserved.',
    }
  },

  tr: {
    locale: 'tr',
    campusBadge: 'ATATÜRK ÜNİVERSİTESİ // HACKATHON EKİBİ',
    nav: {
      home: 'Anasayfa',
      about: 'Hakkımızda',
      builds: 'Projeler',
      github: 'GitHub',
    },
    hero: {
      headline: 'Beş mühendis.\n36 saat. Yayında.',
      subhead: 'Biz WeOwnVision\'ız — Erzurum Atatürk Üniversitesi\'nden bir hackathon ekibiyiz. Temiz sistemler tasarlar, keskin arayüzler kurar ve süre dolmadan çalışan yazılımları canlıya alırız.',
      primaryCta: 'Ekiple tanışın',
      secondaryCta: 'Projeleri inceleyin →',
      manifestoTitle: '36 Saatlik Sprint Kuralları',
      manifestoRules: [
        {
          num: '01',
          name: '6. Saatte Kapsam Dondurma',
          desc: 'Ana kullanıcı akışı ve veri şeması gece yarısından önce kilitlenir. 6. saatten sonra yeni fikir eklenmez.'
        },
        {
          num: '02',
          name: 'Gerçek Test Verisi',
          desc: 'Etkinlik internetinin yavaşlaması ihtimaline karşı çevrimdışı yedek veriler önceden yüklenir.'
        },
        {
          num: '03',
          name: 'İlk Saatten İtibaren CI/CD',
          desc: 'İlk commit\'ten itibaren otomatik derlemelerle canlı bağlantıya kesintisiz dağıtım yapılır.'
        }
      ]
    },
    proof: {
      badge: '02 / GELİŞTİRME KANITI',
      title: 'Mevcut Sprintler & Depolar',
      subhead: 'Yarışma hedeflerimiz ve açık kaynaklı kod tabanımıza şeffaf bir bakış.',
      nextTargetTitle: 'Sıradaki: 2026 Üniversite Hackathonları',
      nextTargetSub: 'Ulusal ve Üniversite Yarışmaları',
      nextTargetDescription: 'Ekibimiz yaklaşan 36 saatlik hackathonlar için hazırlanıyor. Proje depoları, mimari analizler ve canlı bağlantılar süre biter bitmez burada yayınlanacaktır.',
      flagshipTitle: 'Bu Web Sitesi — Açık Kaynak',
      flagshipSub: 'weownvision.vercel.app',
      flagshipDesc: 'Astro 5, TypeScript ve duyarlı tasarımla sıfırdan inşa edilmiş resmi platformumuz. Gereksiz kütüphane yükü barındırmaz.',
      viewRepo: 'Kaynak Kodu GitHub\'da İncele',
      trackCommits: 'Commitleri GitHub\'da takip et →',
    },
    principles: {
      badge: '03 / SPRİNT DİSİPLİNİ',
      title: 'Nasıl İnşa Ediyoruz?',
      subhead: 'Slaytlar yerine sprint disiplini. Zaman işlerken ödün vermediğimiz 3 kural.',
      items: [
        {
          number: '01',
          title: '6. saatte kapsam dondurma',
          description: 'Kullanıcı akışı, veri şeması ve API sözleşmeleri gece yarısından önce kilitlenir. İlk çeyrekten sonra depoya yeni özellik alınmaz.'
        },
        {
          number: '02',
          title: 'Gerçek veri ve yedek planlar',
          description: 'Hız, eksik hata yakalamanın mazereti olamaz. Her uç nokta çevrimdışı verilerle test edilir; sunum anında ağ kesilse bile demo parlar.'
        },
        {
          number: '03',
          title: 'İlk saatten itibaren CI/CD',
          description: 'Tüm ekip otomatik derlemelerle ana dala commit atar. Canlı önizleme ilk saatten itibaren aktiftir, son dakika sürprizleri yaşanmaz.'
        }
      ] as ValueTranslation[],
    },
    squad: {
      badge: '04 / KADRO',
      title: 'Kadro',
      subhead: 'Dağıtık sistemler, yapay zeka hatları, yaratıcı ön yüz ve ürün mimarisinde uzman 5 mühendis.',
      members: [
        {
          id: 'can-ahmet-kurt',
          name: 'Can Ahmet Kurt',
          role: 'Lider & Sistem Mühendisi',
          bio: 'Go ve TypeScript ile dağıtık arka uç servisleri ve veritabanı şemaları tasarlar. Baskı altında canlıya alma süreçlerini ve API kararlılığını yönetir.',
          avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQEqWxc3r4zAew/profile-displayphoto-scale_200_200/B4DZ39b6GXGQAY-/0/1778073449090?e=2147483647&v=beta&t=dX2KfDUTHU1z1LFLCr4coOCseT47SRVS_ylhZYBy1RY',
          skills: ['TypeScript', 'Go', 'Docker', 'PostgreSQL'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        },
        {
          id: 'bircan-tas',
          name: 'Bircan Taş',
          role: 'Yapay Zeka & ML Mühendisi',
          bio: 'Python ve PyTorch ile gerçek zamanlı model çıkarım uç noktaları ve asenkron veri kuyrukları kurar. Canlı sunumlar için gecikmeyi en aza indirir.',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
          skills: ['Python', 'PyTorch', 'FastAPI', 'Redis'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        },
        {
          id: 'talha-topatan',
          name: 'Talha Topatan',
          role: 'Ön Yüz & Yaratıcı Web Mühendisi',
          bio: 'Astro ve modern web standartlarıyla donanım hızlandırmalı arayüzler ve akıcı etkileşimler üretir. Hızlı açılış ve sıfır görsel kaymaya odaklanır.',
          avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQH9Xt6wdIafxw/profile-displayphoto-scale_200_200/B4DZ39.MV0HoAY-/0/1778082434630?e=2147483647&v=beta&t=JaPtJ4DVCi01ZkF_4GzMeUnLsNRQU6JsRUR6tJb2OQs',
          skills: ['WebGL', 'Astro', 'Tailwind', 'TypeScript'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        },
        {
          id: 'emir-cumaogullari',
          name: 'Emir Cumaoğulları',
          role: 'Ürün & UI/UX Mimarı',
          bio: 'Hackathon fikirlerini net kullanıcı deneyimlerine ve esnek tasarım sistemlerine dönüştürür. Bileşen kütüphanesini 6. saatten önce kilitler.',
          avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQEpP28uDSWzeA/profile-displayphoto-scale_200_200/B4DZ3YAfs4JAAY-/0/1777445504433?e=2147483647&v=beta&t=NiCXseWM2Mg378B222tICw4Z4aaH3Io16LhUxHjgo60',
          skills: ['Tasarım Sistemleri', 'Figma', 'UI Mimarisi', 'Next.js'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        },
        {
          id: 'abdullah-sayilgan',
          name: 'Abdullah Sayılğan',
          role: 'Güvenlik & Bulut Operasyonları',
          bio: 'Güçlendirilmiş Linux sunucu kümeleri kurar, konteyner ağlarını yönetir ve sunum anında kesintisiz çalışma için altyapıyı izler.',
          avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQG5Gn4cU5DaNg/profile-displayphoto-scale_200_200/B4DaAg5cQFJcAg-/0/1787258327071?e=2147483647&v=beta&t=jLDk06LPzPTnQW3THqey-sUEjkOuN0jrSVqcD_FHDAc',
          skills: ['Linux', 'Kubernetes', 'Rust', 'Bulut Ops'],
          social: {
            github: 'https://github.com/WeOwnVision',
            twitter: 'https://x.com',
          }
        }
      ] as MemberTranslation[],
    },
    aboutPage: {
      badge: 'HAKKIMIZDA / KÖKEN & YÖNTEM',
      title: 'Zamana Karşı İnşa Edildi.',
      subhead: 'WeOwnVision\'ı Erzurum Atatürk Üniversitesi\'nde kurduk: 36 saatlik sprint kısıtında disiplinli beş mühendisin eksiksiz çalışan yazılımlar çıkarabileceğini göstermek için.',
      storyTitle: 'Köken & Üniversite Kökleri',
      storyP1: 'Çoğu hackathon ekibi kontrolsüz kapsam büyümesi, 35. saatte çakışan git dalları veya arkasında çalışan kod olmayan slaytlar yüzünden dağılır. Biz hackathonları yüksek tempolu mühendislik yarışları olarak görüyoruz.',
      storyP2: 'Erzurum Atatürk Üniversitesi merkezli ekibimiz; dağıtık arka uç, uygulamalı makine öğrenimi, yaratıcı ön yüz, ürün tasarımı ve bulut güvenliğini tek bir hedef etrafında birleştirir.',
      protocolTitle: '36 Saatlik Sprint Metodolojisi',
      protocolSub: 'Süre bitmeden önce çalışan canlı sürümleri garanti altına almak için tasarlanmış kurallarımız.',
      ctaTitle: 'WeOwnVision\'ı hackathonunuza davet etmek ister misiniz?',
      ctaSub: 'Ulusal ve üniversite yarışmalarına aktif olarak katılıyoruz. Davetler, sponsorluklar veya işbirlikleri için bize ulaşın.',
      ctaButton: 'Ekiple İletişime Geçin',
    },
    footer: {
      brandDesc: 'Hackathon Mühendislik Ekibi • Atatürk Üniversitesi, Erzurum',
      allRights: 'Tüm hakları saklıdır.',
    }
  }
};
