import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow } from '@/lib/indexnow';
import { readFile } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function urlsFromSitemap(): Promise<string[]> {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const xml = await readFile(sitemapPath, 'utf8');
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1].trim()).filter(Boolean);
}

/**
 * POST /api/indexnow
 *
 * Body (optional):
 *   { "urlList": ["https://aiogrowthseo.com/..."] }
 *
 * If urlList is omitted, submits every URL from public/sitemap.xml.
 *
 * Auth: Authorization: Bearer <INDEXNOW_KEY>
 * Also accepts Vercel Deploy Notification webhooks (production success).
 */
export async function POST(request: NextRequest) {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return NextResponse.json({ error: 'INDEXNOW_KEY is not configured' }, { status: 500 });
  }

  const auth = request.headers.get('authorization');
  const bearer = auth?.startsWith('Bearer ') ? auth.slice(7) : null;
  const headerKey = request.headers.get('x-indexnow-key');

  let payload: Record<string, unknown> = {};
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    payload = {};
  }

  // Vercel Deploy Notifications can POST here with Authorization: Bearer <INDEXNOW_KEY>
  // (configure in Vercel → Project → Settings → Deploy Hooks / Notifications webhook URL)
  const authorized = bearer === key || headerKey === key;

  if (!authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const fromBody = Array.isArray(payload.urlList)
      ? (payload.urlList as unknown[]).filter((u): u is string => typeof u === 'string')
      : null;

    const urlList = fromBody && fromBody.length > 0 ? fromBody : await urlsFromSitemap();
    const result = await submitToIndexNow(urlList);

    return NextResponse.json(
      {
        ok: result.ok,
        status: result.status,
        submitted: result.submitted,
        body: result.body || null,
      },
      { status: result.ok ? 200 : result.status || 502 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'IndexNow submit failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
