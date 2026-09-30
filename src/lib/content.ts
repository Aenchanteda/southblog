import type { CollectionEntry } from 'astro:content';

export type ArticleEntry =
  | CollectionEntry<'blog'>
  | CollectionEntry<'notes'>
  | CollectionEntry<'aiPharma'>
  | CollectionEntry<'genomics'>;
export type ArticleSection = 'blog' | 'notes' | 'ai-pharma' | 'genomics';

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getEntrySlug(entry: ArticleEntry) {
  const maybeSlug = 'slug' in entry ? entry.slug : undefined;
  return maybeSlug ?? entry.id.replace(/\.(md|mdx)$/i, '');
}

export function byNewest(a: ArticleEntry, b: ArticleEntry) {
  return b.data.pubDate.getTime() - a.data.pubDate.getTime();
}

export function byOldest(a: ArticleEntry, b: ArticleEntry) {
  return a.data.pubDate.getTime() - b.data.pubDate.getTime();
}

export function isPublished(entry: ArticleEntry) {
  return !entry.data.draft;
}

export function isBciEntry(entry: ArticleEntry) {
  const slug = getEntrySlug(entry).toLowerCase();
  const title = entry.data.title.toLowerCase();
  const tags = entry.data.tags.map((tag) => tag.toLowerCase());
  return (
    slug.includes('bci') ||
    title.includes('bci') ||
    entry.data.title.includes('脑机接口') ||
    tags.includes('bci') ||
    tags.includes('脑机接口')
  );
}

export function getOrderLabel(entry: ArticleEntry, index: number) {
  const order = entry.data.order ?? index + 1;
  return String(order).padStart(2, '0');
}
