/**
 * Runs after production builds on Vercel so IndexNow is notified of updated URLs.
 * Skips preview / local builds unless INDEXNOW_FORCE=1.
 */
import { readFile } from 'fs/promises';
import path from 'path';

const HOST = 'aiogrowthseo.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  const key = process.env.INDEXNOW_KEY;
  const isProd = process.env.VERCEL_ENV === 'production' || process.env.INDEXNOW_FORCE === '1';

  if (!isProd) {
    console.log('[indexnow] Skipping (not a production deploy)');
    return;
  }

  if (!key) {
    console.warn('[indexnow] INDEXNOW_KEY missing — skip');
    return;
  }

  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const xml = await readFile(sitemapPath, 'utf8');
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).filter(Boolean);

  if (urlList.length === 0) {
    console.warn('[indexnow] No URLs found in sitemap — skip');
    return;
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `https://${HOST}/${key}.txt`,
      urlList,
    }),
  });

  const body = await response.text();
  console.log(`[indexnow] status=${response.status} submitted=${urlList.length} body=${body || '(empty)'}`);

  if (!response.ok && response.status !== 202) {
    // Don't fail the Vercel build on IndexNow errors (key may still be propagating).
    console.warn('[indexnow] Non-success response — continuing deploy');
  }
}

main().catch((err) => {
  console.warn('[indexnow] Error (non-fatal):', err);
});
