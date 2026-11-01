export interface HackathonLink {
  label: string;
  href: string;
  icon: string; // Material Symbols name
}

export interface HackathonEntry {
  id: string;
  hackathon: string; // event name
  date: string; // e.g. "2026-10"
  placement?: string; // e.g. "1st Place — AI Track"
  title: string; // project title
  tagline: string;
  description: string[]; // paragraphs shown in the detail view
  tags: string[];
  youtubeId?: string; // embedded in the detail view
  links: HackathonLink[];
}

// Newest first. The section shows the most recent entries; older ones stay in the archive link.
export const hackathons: HackathonEntry[] = [
  {
    id: 'weownfeed',
    hackathon: 'NVIDIA × Nebius × Tavily',
    date: '2026',
    placement: 'Track: Best Apps & Agents',
    title: 'WeOwnFeed',
    tagline: 'Own your feed. Every story, with receipts. An algorithm-free, demand-driven personal news intelligence platform powered by NVIDIA Nemotron-3, Nebius Token Factory and Tavily.',
    description: [
      'Modern news is broken: social feeds optimize for outrage, RSS readers track blogs instead of the topics you care about, wire syndication creates an illusion of consensus, and LLM summaries invent quotes with zero provenance.',
      'WeOwnFeed lets you build a personal feed from 7 categories, 66 subtopics, custom entity follows, RSS-less websites and a natural-language “why I read news” intent. Every clustered story comes with Receipts: wire duplicates are collapsed into a single origin, claims are probed from three angles via Tavily, and every quote must appear verbatim in the retrieved source — otherwise it is dropped.',
      'A two-tier NVIDIA Nemotron-3 pipeline on Nebius Token Factory handles summaries, taxonomy tagging, multi-source synthesis and daily digests. All five Tavily endpoints (Search, Extract, Map, Crawl, Research) replace a brittle 1,480-line scraper, while 3-way hybrid RRF search over pgvector and EMA vector personalization shape each user’s feed.',
    ],
    tags: ['NVIDIA Nemotron-3', 'Nebius Token Factory', 'Tavily', 'FastAPI', 'PostgreSQL + pgvector', 'Flutter'],
    youtubeId: 'pBR2M1FqAE0',
    links: [
      { label: 'Live demo', href: 'https://weownfeed.vercel.app/', icon: 'open_in_new' },
      { label: 'GitHub', href: 'https://github.com/WeOwnVision/WeOwnFeed', icon: 'code' },
      { label: 'Pitch video', href: 'https://www.youtube.com/watch?v=pBR2M1FqAE0', icon: 'play_circle' },
    ],
  },
];
