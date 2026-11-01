export type Locale = 'en' | 'tr';

export const site = {
  name: 'WeOwnVision',
  url: 'https://weownvision.vercel.app',
  github: 'https://github.com/WeOwnVision',
  repo: 'https://github.com/WeOwnVision/Website',
  twitter: 'https://x.com/WeOwnVision',
  email: 'contact@weownvision.dev',
};

const missionEn = 'We are a borderless team building open-source projects and aiming for podiums at global hackathons.';
const missionTr = 'Global hackathonlarda derece hedefleyen, açık kaynak projeler geliştiren, sınır tanımayan bir ekibiz.';

export const dict = {
  en: {
    htmlTitle: 'WeOwnVision — Global Hackathon Team',
    description: missionEn,
    nav: [
      { label: 'Hackathons', href: '#hackathons' },
      { label: 'Updates', href: '#updates' },
      { label: 'Open Source', href: '#open-source' },
      { label: 'Story', href: '#manifesto' },
      { label: 'Contact', href: '#contact' },
    ],
    statusPill: 'Training for the next hackathon season',
    githubCta: 'GitHub',
    langSwitch: { label: 'TR', href: '/tr/' },
    hero: {
      pill: 'From anywhere to the global leaderboards',
      line1: 'We Build. We Try.',
      line2: 'We Learn.',
      tagline: 'We Own Vision',
      body: missionEn,
      primaryCta: 'Explore our builds',
      secondaryCta: 'Open source',
      origin: 'UPLINK_ORIGIN: NO FIXED COORDINATES',
      originLabel: 'ORIGIN: ANYWHERE',
      targetLabel: 'TARGET: GLOBAL PODIUMS',
      target: 'Target: global hackathons',
      targetNote: 'BORDERLESS',
    },
    manifesto: {
      index: '04 //',
      eyebrow: 'Origin protocol',
      quote: '“Geography is no longer an excuse. With an internet connection, obsessive curiosity and raw hunger, you have access to the entire universe.”',
      author: 'WOV Core Assembly',
      authorNote: 'From anywhere to the global judges',
      pillars: [
        { tag: 'PILLAR // ALPHA', icon: 'timer', title: 'Scope Freeze Early', body: 'The user flow, data schema and API contracts are locked in the first hours. After that nothing new enters the repo — everything is polish, error states and deploy.', foot: 'RULE 01: NO FEATURE CREEP' },
        { tag: 'PILLAR // BETA', icon: 'database', title: 'Real Seed Data Fallbacks', body: 'Sprint speed is never an excuse for broken states. Every endpoint has offline seed data ready, so the demo holds up even when venue Wi-Fi does not.', foot: 'RULE 02: ZERO BROKEN DEMOS' },
        { tag: 'PILLAR // GAMMA', icon: 'rocket_launch', title: 'CI/CD from Hour One', body: 'Everyone commits to main with automated builds. A public production URL is live from the first commit, so there is no last-minute merge panic.', foot: 'RULE 03: ALWAYS DEPLOYED' },
      ],
    },
    contact: {
      eyebrow: 'Alliance & sponsor commons',
      title: 'Have a Problem Worth a Hackathon?',
      body: 'We are open to hackathon invitations, team sponsorships and collaborations. Bring us your API, SDK or hard problem and we will turn it into a working showcase.',
      cta: 'Email WOV',
      note: 'We read every message.',
      hubTitle: 'Follow the build',
      hubBody: 'Track our repos, sprints and launches as they happen.',
      links: [
        { icon: 'code', label: 'GitHub', meta: '@WeOwnVision', key: 'github' },
        { icon: 'alternate_email', label: 'X / Twitter', meta: '@WeOwnVision', key: 'twitter' },
      ],
    },
    footer: {
      motto: 'We Build, We Try, We Learn. We Own Vision.',
      about: missionEn,
      commsTitle: 'Comms',
      rights: 'WOV. Source on GitHub.',
    },
  },
  tr: {
    htmlTitle: 'WeOwnVision — Global Hackathon Ekibi',
    description: missionTr,
    nav: [
      { label: 'Hackathonlar', href: '#hackathons' },
      { label: 'Güncellemeler', href: '#updates' },
      { label: 'Açık Kaynak', href: '#open-source' },
      { label: 'Hikaye', href: '#manifesto' },
      { label: 'İletişim', href: '#contact' },
    ],
    statusPill: 'Yeni hackathon sezonuna hazırlanıyoruz',
    githubCta: 'GitHub',
    langSwitch: { label: 'EN', href: '/' },
    hero: {
      pill: 'Her yerden küresel sıralamalara',
      line1: 'Üretiriz. Deneriz.',
      line2: 'Öğreniriz.',
      tagline: 'We Own Vision',
      body: missionTr,
      primaryCta: 'Projelerimizi keşfet',
      secondaryCta: 'Açık kaynak',
      origin: 'UPLINK_ORIGIN: NO FIXED COORDINATES',
      originLabel: 'ORIGIN: ANYWHERE',
      targetLabel: 'HEDEF: GLOBAL DERECELER',
      target: 'Hedef: global hackathonlar',
      targetNote: 'SINIRSIZ',
    },
    manifesto: {
      index: '04 //',
      eyebrow: 'Köken protokolü',
      quote: '“Coğrafya artık bir bahane değil. İnternet bağlantın, takıntılı bir merakın ve açlığın varsa, tüm evrene erişimin var.”',
      author: 'WOV Çekirdek Ekibi',
      authorNote: 'Her yerden küresel jürilere',
      pillars: [
        { tag: 'PILLAR // ALPHA', icon: 'timer', title: 'Erken Kapsam Dondurma', body: 'Kullanıcı akışı, veri şeması ve API sözleşmeleri ilk saatlerde kilitlenir. Sonrasında depoya yeni özellik girmez — gerisi cila, hata durumları ve dağıtım.', foot: 'KURAL 01: KAPSAM KAYMASI YOK' },
        { tag: 'PILLAR // BETA', icon: 'database', title: 'Gerçek Veri ve Yedekler', body: 'Hız, bozuk ekranların mazereti olamaz. Her uç noktanın çevrimdışı yedek verisi hazırdır; salonun Wi-Fi\'ı çökse bile demo ayakta kalır.', foot: 'KURAL 02: BOZUK DEMO YOK' },
        { tag: 'PILLAR // GAMMA', icon: 'rocket_launch', title: 'İlk Saatten CI/CD', body: 'Herkes otomatik derlemeyle main\'e commit atar. İlk commit\'ten itibaren canlı bir adres vardır; son dakika merge paniği yaşanmaz.', foot: 'KURAL 03: HER ZAMAN YAYINDA' },
      ],
    },
    contact: {
      eyebrow: 'İş birliği & sponsorluk',
      title: 'Hackathon\'a Değer Bir Problemin mi Var?',
      body: 'Hackathon davetlerine, takım sponsorluklarına ve iş birliklerine açığız. API\'nı, SDK\'nı ya da zor problemini getir; çalışan bir vitrine dönüştürelim.',
      cta: 'WOV\'a e-posta gönder',
      note: 'Her mesajı okuyoruz.',
      hubTitle: 'Üretimi takip et',
      hubBody: 'Depolarımızı, sprintlerimizi ve lansmanlarımızı anlık takip et.',
      links: [
        { icon: 'code', label: 'GitHub', meta: '@WeOwnVision', key: 'github' },
        { icon: 'alternate_email', label: 'X / Twitter', meta: '@WeOwnVision', key: 'twitter' },
      ],
    },
    footer: {
      motto: 'Üretiriz, Deneriz, Öğreniriz. We Own Vision.',
      about: missionTr,
      commsTitle: 'İletişim',
      rights: 'WOV. Kaynak kodu GitHub\'da.',
    },
  },
} as const;
