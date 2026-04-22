import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.md',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.enum(['design', 'development'])),
      date: z.coerce.date(),
      dateLabel: z.string().optional(),
      thumbnail: z.object({
        src: image(),
        alt: z.string(),
      }),
      logo: z
        .object({
          src: image().optional(),
          alt: z.string(),
        })
        .optional(),
      featured: z.boolean().default(false),
      lang: z.enum(['en', 'es']),
      translationId: z.string(),
      role: z.string().optional(),
      intro: z.string().optional(),
      overview: z.string().optional(),
      sections: z
        .array(
          z.object({
            title: z.string(),
            text: z.string(),
            imagePosition: z.preprocess(
              (value) => (value === '' || value == null ? 'right' : value),
              z.enum(['left', 'right', 'full']),
            ),
            image: z
              .object({
                src: image().optional(),
                alt: z.string().default(''),
              })
              .optional(),
          }),
        )
        .default([]),
      techStack: z.array(z.string()).default([]),
      links: z
        .object({
          live: z.string().url().optional(),
          repo: z.string().url().optional(),
          figma: z.string().url().optional(),
        })
        .default({}),
    }),
});

export const collections = { projects };
