export const linkedinPage = 'https://www.linkedin.com/company/weownvision/';

// How many recent posts the Updates section embeds.
export const linkedinPostCount = 3;

// Pulls the newest post IDs from the public company page (newest first).
// Used at build time and by /api/linkedin.json at request time.
export async function fetchLatestPostUrns(limit = linkedinPostCount): Promise<string[]> {
  const res = await fetch(linkedinPage, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });
  if (!res.ok) throw new Error(`LinkedIn ${res.status}`);
  const html = await res.text();
  const urns = [...new Set(html.match(/urn:li:activity:\d+/g) ?? [])];
  if (urns.length === 0) throw new Error('No posts found (LinkedIn may have served a login wall)');
  return urns.slice(0, limit);
}

export const embedUrl = (urn: string) => `https://www.linkedin.com/embed/feed/update/${urn}`;
