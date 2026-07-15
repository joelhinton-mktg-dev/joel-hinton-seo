const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const HOST = 'aiogrowthseo.com';

export type IndexNowResult = {
  ok: boolean;
  status: number;
  body: string;
  submitted: number;
};

/**
 * Submit one or more URLs to the IndexNow API.
 * Requires INDEXNOW_KEY in the environment.
 */
export async function submitToIndexNow(urlList: string[]): Promise<IndexNowResult> {
  const key = process.env.INDEXNOW_KEY;

  if (!key) {
    throw new Error('INDEXNOW_KEY is not set');
  }

  const urls = [...new Set(urlList.filter(Boolean))];

  if (urls.length === 0) {
    throw new Error('urlList must include at least one URL');
  }

  // IndexNow accepts up to 10,000 URLs per request; chunk defensively.
  const chunk = urls.slice(0, 10000);

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `https://${HOST}/${key}.txt`,
      urlList: chunk,
    }),
  });

  const body = await response.text();

  return {
    ok: response.ok,
    status: response.status,
    body,
    submitted: chunk.length,
  };
}
