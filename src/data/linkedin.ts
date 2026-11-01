// LinkedIn does not offer a public feed for company pages, so posts are added by hand.
// For each post: open it on LinkedIn → "..." → "Embed this post" and copy the URL from the
// iframe's src (https://www.linkedin.com/embed/feed/update/urn:li:share:...), or paste the
// post URL and let `toEmbedUrl` convert it. Newest first; the section shows the first 3.
export const linkedinPosts: string[] = [];

export const linkedinPage = 'https://www.linkedin.com/company/weownvision/';

export function toEmbedUrl(url: string): string | null {
  if (url.includes('/embed/feed/update/')) return url;
  const urn = url.match(/urn:li:(?:share|activity|ugcPost):\d+/)?.[0] ?? url.match(/activity-(\d+)/)?.[1];
  if (!urn) return null;
  return `https://www.linkedin.com/embed/feed/update/${urn.startsWith('urn:') ? urn : `urn:li:activity:${urn}`}`;
}
