import type { APIRoute } from 'astro';
import { fetchLatestPostUrns } from '../../data/linkedin';

// Runs on Vercel at request time; cached for an hour so new posts show up without a redeploy.
export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const urns = await fetchLatestPostUrns();
    return new Response(JSON.stringify({ urns }), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, s-maxage=300' },
    });
  }
};
