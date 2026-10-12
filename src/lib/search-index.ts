import { getCollection } from 'astro:content';
import { getEntrySlug, isBciEntry, isPublished, type ArticleEntry } from './content';

export interface SearchDoc {
  id: string;
  title: string;
  description: string;
  tags: string[];
  body: string;
  href: string;
  section: string;
  pubDate: string;
}

const SECTION_META: Record<
  string,
  { label: string; href: (slug: string) => string }
> = {
  blog: { label: '博客', href: (slug) => `/blog/${slug}` },
  notes: { label: '学习心得', href: (slug) => `/notes/${slug}` },
  aiPharma: { label: 'AI制药', href: (slug) => `/ai-pharma/${slug}` },
  genomics: { label: '基因组学', href: (slug) => `/genomics/${slug}` },
  misc: { label: '杂谈', href: (slug) => `/misc/${slug}` },
  immunology: { label: '基础免疫学', href: (slug) => `/immunology/${slug}` },
};

/** Strip markdown noise so Fuse can match readable Chinese/Latin text. */
export function stripMarkdown(source: string): string {
  return source
    .replace(/^---[\s\S]*?---\r?\n?/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s{0,3}>\s?/gm, '')
    .replace(/^\|.*\|$/gm, ' ')
    .replace(/^[-*_]{3,}\s*$/gm, ' ')
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/~~(.*?)~~/g, '$1')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$\n]+\$/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function entryBody(entry: ArticleEntry): string {
  const raw = typeof entry.body === 'string' ? entry.body : '';
  const stripped = stripMarkdown(raw);
  // Cap body size so the homepage index stays lean.
  return stripped.length > 6000 ? stripped.slice(0, 6000) : stripped;
}

function toDoc(entry: ArticleEntry, collection: keyof typeof SECTION_META): SearchDoc {
  const meta = SECTION_META[collection];
  const slug = getEntrySlug(entry);
  const section =
    collection === 'blog' && isBciEntry(entry) ? '脑机接口' : meta.label;

  return {
    id: `${collection}:${entry.id}`,
    title: entry.data.title,
    description: entry.data.description,
    tags: entry.data.tags ?? [],
    body: entryBody(entry),
    href: meta.href(slug),
    section,
    pubDate: entry.data.pubDate.toISOString().slice(0, 10),
  };
}

export async function buildSearchIndex(): Promise<SearchDoc[]> {
  const [blog, notes, aiPharma, genomics, misc, immunology] = await Promise.all([
    getCollection('blog'),
    getCollection('notes'),
    getCollection('aiPharma'),
    getCollection('genomics'),
    getCollection('misc'),
    getCollection('immunology'),
  ]);

  const docs: SearchDoc[] = [
    ...blog.filter(isPublished).map((entry) => toDoc(entry, 'blog')),
    ...notes.filter(isPublished).map((entry) => toDoc(entry, 'notes')),
    ...aiPharma.filter(isPublished).map((entry) => toDoc(entry, 'aiPharma')),
    ...genomics.filter(isPublished).map((entry) => toDoc(entry, 'genomics')),
    ...misc.filter(isPublished).map((entry) => toDoc(entry, 'misc')),
    ...immunology.filter(isPublished).map((entry) => toDoc(entry, 'immunology')),
  ];

  docs.sort((a, b) => b.pubDate.localeCompare(a.pubDate));
  return docs;
}
