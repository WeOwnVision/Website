export interface TranslationStrings {
  navHome: string;
  navAbout: string;
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  heroMeetCta: string;
  heroGithubCta: string;
  protocolTitle: string;
  protocolRuntime: string;
  protocolLive: string;
  step00: string;
  step00Desc: string;
  step06: string;
  step06Desc: string;
  step24: string;
  step24Desc: string;
  step36: string;
  step36Desc: string;
  principlesEyebrow: string;
  principlesTitle: string;
  principlesDesc: string;
  rule1Title: string;
  rule1Desc: string;
  rule2Title: string;
  rule2Desc: string;
  rule3Title: string;
  rule3Desc: string;
  squadEyebrow: string;
  squadTitle: string;
  squadDesc: string;
  squadCta: string;
  buildsEyebrow: string;
  buildsTitle: string;
  buildsEmpty: string;
  buildsCommitCta: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutLead: string;
  aboutArchTitle: string;
  aboutArchP1: string;
  aboutArchP2: string;
  aboutSquadEyebrow: string;
  aboutSquadTitle: string;
}

export const translations: Record<"en" | "tr", TranslationStrings> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    heroBadge: "WeOwnVision — Hackathon Collective",
    heroTitle: "Five engineers.\n36 hours. Shipped.",
    heroDesc: "We build and deploy functional software prototypes under hackathon constraints. Every project is engineered from scratch and shipped before the buzzer.",
    heroMeetCta: "Meet the squad ↓",
    heroGithubCta: "GitHub",
    protocolTitle: "// SPRINT PROTOCOL",
    protocolRuntime: "36:00:00 RUNTIME",
    protocolLive: "LIVE RUN",
    step00: "H-00 Kickoff",
    step00Desc: "Arch & Data Schema",
    step06: "H-06 Freeze",
    step06Desc: "Feature Lock & Scope Seal",
    step24: "H-24 Dry Run",
    step24Desc: "End-to-End Integration",
    step36: "H-36 Buzzer",
    step36Desc: "Live Production Release",
    principlesEyebrow: "H-06 // PRINCIPLES",
    principlesTitle: "How We Build",
    principlesDesc: "Sprint discipline over slide decks. When the clock is ticking, we focus entirely on the core loop and shipping working software.",
    rule1Title: "Feature Freeze by H-06",
    rule1Desc: "The core loop and data schema are locked before midnight. Everything after is polish, error states, and live deployment.",
    rule2Title: "Zero Broken Fallbacks",
    rule2Desc: "Sprint speed is never an excuse for broken states or unhandled API errors. Every user interaction must resolve cleanly.",
    rule3Title: "Full-Stack Ownership",
    rule3Desc: "From database migrations and backend endpoints to typography and CSS polish, every engineer commits across the stack.",
    squadEyebrow: "H-24 // THE SQUAD",
    squadTitle: "The Collective",
    squadDesc: "Five builders spanning distributed systems, ML pipelines, creative frontend, and product architecture.",
    squadCta: "Meet the full squad & dossier →",
    buildsEyebrow: "H-36 // BUILDS",
    buildsTitle: "Hackathon Drops",
    buildsEmpty: "First project write-ups and public repositories will be deployed here following our upcoming hackathons.",
    buildsCommitCta: "Track real-time commits on GitHub",
    aboutEyebrow: "// ABOUT THE COLLECTIVE",
    aboutTitle: "Built for the Clock.",
    aboutLead: "We are WeOwnVision — five engineers who compete in hackathon sprints. When the clock starts, we turn blank repositories into functional products.",
    aboutArchTitle: "The 36-Hour Runtime Architecture",
    aboutArchP1: "Under 36-hour constraints, there is no time for corporate hierarchy or unnecessary layers. Everyone writes code, everyone tests, and everyone owns their component from the first commit to the demo floor.",
    aboutArchP2: "We built this collective around complementary engineering disciplines: distributed infrastructure, machine learning pipelines, creative WebGL graphics, product systems, and cloud security.",
    aboutSquadEyebrow: "// SQUAD DOSSIER",
    aboutSquadTitle: "Five Engineers"
  },
  tr: {
    navHome: "Ana Sayfa",
    navAbout: "Hakkımızda",
    heroBadge: "WeOwnVision — Hackathon Kolektifi",
    heroTitle: "Beş mühendis.\n36 saat. Yayında.",
    heroDesc: "Hackathon kısıtları altında çalışan yazılım prototipleri geliştiriyor ve devreye alıyoruz. Her proje sıfırdan mimarilendirilir ve süre bitmeden canlıya alınır.",
    heroMeetCta: "Ekiple tanış ↓",
    heroGithubCta: "GitHub",
    protocolTitle: "// SPRINT PROTOKOLÜ",
    protocolRuntime: "36:00:00 SÜRE",
    protocolLive: "CANLI ÇALIŞMA",
    step00: "H-00 Başlangıç",
    step00Desc: "Mimari & Veri Şeması",
    step06: "H-06 Kilit",
    step06Desc: "Özellik Dondurma & Kapsam Kilidi",
    step24: "H-24 Genel Prova",
    step24Desc: "Uçtan Uca Entegrasyon",
    step36: "H-36 Bitiş",
    step36Desc: "Canlı Üretim & Dağıtım",
    principlesEyebrow: "H-06 // İLKELER",
    principlesTitle: "Nasıl Geliştiriyoruz",
    principlesDesc: "Sunum slaytları yerine sprint disiplini. Zaman daralırken yalnızca çekirdek döngüye ve çalışan yazılım üretmeye odaklanıyoruz.",
    rule1Title: "H-06\x27da Özellik Kilidi",
    rule1Desc: "Çekirdek döngü ve veri şeması gece yarısından önce kilitlenir. Kalan süre cila, hata durumları ve canlı dağıtıma ayrılır.",
    rule2Title: "Sıfır Bozuk Durum",
    rule2Desc: "Sprint hızı; bozuk arayüzler veya yakalanmayan API hataları için bahane olamaz. Her etkileşim eksiksiz çalışmalıdır.",
    rule3Title: "Uçtan Uca Sahiplik",
    rule3Desc: "Veritabanı şemalarından API uç noktalarına, tipografiden CSS detaylarına kadar her mühendis tüm katmanda kod yazar.",
    squadEyebrow: "H-24 // EKİP",
    squadTitle: "Kolektif",
    squadDesc: "Dağıtık sistemler, makine öğrenimi boru hatları, yaratıcı ön yüz ve ürün mimarisinde uzmanlaşmış beş geliştirici.",
    squadCta: "Tüm ekibi ve detaylı dosyayı gör →",
    buildsEyebrow: "H-36 // ÇIKTILAR",
    buildsTitle: "Hackathon Çıktıları",
    buildsEmpty: "İlk proje incelemeleri ve açık kaynak depolarımız, yaklaşan hackathonlarımızın ardından burada yayımlanacaktır.",
    buildsCommitCta: "GitHub\x27da gerçek zamanlı commit\x27leri takip et",
    aboutEyebrow: "// KOLEKTİF HAKKINDA",
    aboutTitle: "Zaman İçin İnşa Edildi.",
    aboutLead: "Biz WeOwnVision\x27ız — hackathon sprintlerinde yarışan beş mühendis. Süre başladığında boş depoları işlevsel ürünlere dönüştürürüz.",
    aboutArchTitle: "36 Saatlik Çalışma Zamanı Mimarisi",
    aboutArchP1: "36 saatlik kısıtlar altında kurumsal hiyerarşiye veya gereksiz katmanlara yer yoktur. Herkes kod yazar, herkes test eder ve ilk commit\x27ten sunum sahnesine kadar bileşenine bizzat sahip çıkar.",
    aboutArchP2: "Bu kolektifi tamamlayıcı mühendislik disiplinleri üzerine kurduk: dağıtık altyapı, makine öğrenimi boru hatları, yaratıcı WebGL grafikleri, ürün sistemleri ve bulut güvenliği.",
    aboutSquadEyebrow: "// EKİP DOSYASI",
    aboutSquadTitle: "Beş Mühendis"
  }
};
