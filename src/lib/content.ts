import type { CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'blog'> | CollectionEntry<'notes'>;

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

export function isPublished(entry: ArticleEntry) {
  return !entry.data.draft;
}
