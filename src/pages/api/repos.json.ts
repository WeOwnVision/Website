import type { APIRoute } from 'astro';

// Runs on Vercel at request time so the repo list is always live.
// The CDN caches the response for 10 minutes to stay well inside GitHub's rate limit.
export const prerender = false;

// WeOwnVision is a GitHub user account (not an organization).
const OWNER = 'WeOwnVision';

export interface Repo {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  pushedAt: string | null;
  archived: boolean;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
}

async function fromApi(): Promise<Repo[]> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'weownvision-website',
  };
  // Optional: set GITHUB_TOKEN in Vercel env vars for a higher rate limit.
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com/users/${OWNER}/repos?per_page=100&sort=pushed&type=owner`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return ((await res.json()) as GitHubRepo[])
    .filter((r) => !r.private && !r.fork)
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage || null,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      topics: r.topics ?? [],
      pushedAt: r.pushed_at,
      archived: r.archived,
    }));
}

// Fallback when the API is rate limited: read the public profile's repositories tab.
async function fromProfilePage(): Promise<Repo[]> {
  const res = await fetch(`https://github.com/${OWNER}?tab=repositories&type=source`, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; weownvision-website)' },
  });
  if (!res.ok) throw new Error(`GitHub profile ${res.status}`);
  const html = await res.text();
  const decode = (s: string) =>
    s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();

  return html
    .split('itemprop="owns"')
    .slice(1)
    .map((block) => {
      const name = block.match(/href="\/[^/]+\/([^"]+)" itemprop="name codeRepository"/)?.[1];
      if (!name) return null;
      const count = (path: string) => Number(block.match(new RegExp(`/${name}/${path}"[^>]*>[\\s\\S]*?</svg>\\s*([\\d,]+)`))?.[1]?.replace(/,/g, '') ?? 0);
      const desc = block.match(/itemprop="description">([\s\S]*?)<\/p>/)?.[1];
      return {
        name,
        description: desc ? decode(desc) : null,
        url: `https://github.com/${OWNER}/${name}`,
        homepage: null,
        language: block.match(/itemprop="programmingLanguage">([^<]+)</)?.[1] ?? null,
        stars: count('stargazers'),
        forks: count('forks'),
        topics: [...block.matchAll(/topic-tag[^>]*>\s*([^<\s]+)\s*</g)].map((m) => m[1]),
        pushedAt: block.match(/<relative-time[^>]*datetime="([^"]+)"/)?.[1] ?? null,
        archived: /Label[^>]*>\s*Public archive/.test(block),
      } satisfies Repo;
    })
    .filter((r): r is Repo => r !== null);
}

export const GET: APIRoute = async () => {
  let repos: Repo[];
  try {
    repos = await fromApi();
  } catch {
    try {
      repos = await fromProfilePage();
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err) }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, s-maxage=60' },
      });
    }
  }

  repos.sort((a, b) => Date.parse(b.pushedAt ?? '0') - Date.parse(a.pushedAt ?? '0'));
  return new Response(JSON.stringify({ repos }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=86400',
    },
  });
};
