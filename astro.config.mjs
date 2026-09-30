import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Math: $...$ inline and $$...$$ display, rendered to KaTeX HTML at build time.
// remark/rehype plugins only run on the unified processor (Astro 7's default,
// Sätteri, ignores them). @astrojs/mdx inherits markdown.processor, so .mdx
// files get the same plugins.
export default defineConfig({
  markdown: {
    processor: unified({
      // Sätteri left punctuation alone; smartypants would flip the CJK curly quotes
      // already in the posts (“ → ”), so keep it off to match the previous output.
      smartypants: false,
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [mdx()],
});
