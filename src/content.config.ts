import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional().default([]),
  draft: z.boolean().optional().default(false),
});

const blog = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const notes = defineCollection({
  type: 'content',
  schema: articleSchema,
});

export const collections = { blog, notes };
