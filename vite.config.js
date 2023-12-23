import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ch-contact-page/' : './',
  server: {
    open: true,
  },
});
