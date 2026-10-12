import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../lib/search-index';

export const prerender = true;

export const GET: APIRoute = async () => {
  const docs = await buildSearchIndex();
  return new Response(JSON.stringify(docs), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
