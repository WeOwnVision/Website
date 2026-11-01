import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [tailwind({ applyBaseStyles: false })],
  redirects: {
    "/about": "/#manifesto",
    "/projects": "/#hackathons",
    "/posts": "/",
    "/tr/about": "/tr/#manifesto",
    "/tr/projects": "/tr/#hackathons",
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  server: {
    port: 4321,
    host: true
  },
  devToolbar: {
    enabled: false
  }
});
