import { getPublishedPosts } from "@/lib/blog";

const BASE = "https://www.acupunctuurzaandam.nl";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * /feed.xml — RSS 2.0 feed of published blog posts. Helps AI content
 * aggregators (and feed readers) discover new posts without crawling.
 */
export function GET() {
  const posts = getPublishedPosts();
  const lastBuildDate = new Date().toUTCString();
  const items = posts
    .map((post) => {
      const url = `${BASE}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <author>info@leadexpertise.nl (Sam de Vries)</author>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Acupunctuur Zaandam — Blog</title>
    <link>${BASE}/blog</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Inzichten over acupunctuur, Traditionele Chinese Geneeskunde en gezondheid van Acupunctuur Zaandam.</description>
    <language>nl-NL</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
