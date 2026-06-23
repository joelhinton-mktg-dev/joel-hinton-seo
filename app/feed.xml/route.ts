import { blogPosts } from '@/data/blogPosts';

const SITE_URL = 'https://aiogrowthseo.com';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const image = post.seo.ogImage
        ? `${SITE_URL}${post.seo.ogImage.startsWith('/') ? '' : '/'}${post.seo.ogImage}`
        : '';
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <author>leads@aiogrowthseo.com (${escapeXml(post.author)})</author>
      ${image ? `<enclosure url="${image}" type="image/svg+xml" />` : ''}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AIO Growth SEO Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Psychology-driven SEO, GEO, local search, and growth marketing insights from AIO Growth SEO.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
