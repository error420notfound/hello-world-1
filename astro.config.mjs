// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://error420notfound.github.io', // Replace 'username' with your GitHub username
  base: '/hello-world-1', // Replace 'midnight-pulse' with your repository name
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: 'lightningcss'
    }
  }
});