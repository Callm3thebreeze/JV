// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jesusvillar.dev',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        return ![
          '/components-gallery/',
          '/es/components-gallery/',
          '/projects/task-app/',
          '/es/projects/task-app/',
        ].includes(pathname);
      },
    }),
  ],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
