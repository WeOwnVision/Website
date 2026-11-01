import type { APIRoute } from 'astro';

// Runs on Vercel at request time so the repo list is always live.
// The CDN caches the response for 10 minutes to stay well inside GitHub's rate limit.
export const prerender = false;

const ORG = 'WeOwnVision';

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

export const GET: APIRoute = async () => {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'weownvision-website',
  };
  // Optional: set GITHUB_TOKEN in Vercel env vars for a higher rate limit.
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com/orgs/${ORG}/repos?per_page=100&sort=pushed&type=public`, { headers });
  if (!res.ok) {
    return new Response(JSON.stringify({ error: `GitHub responded ${res.status}` }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, s-maxage=60' },
    });
  }

  const repos = ((await res.json()) as GitHubRepo[])
    .filter((r) => !r.private && !r.fork)
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
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

  return new Response(JSON.stringify({ repos }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=86400',
    },
  });
};
