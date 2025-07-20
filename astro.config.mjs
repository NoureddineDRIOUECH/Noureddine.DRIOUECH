// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://noureddinedriouech.vercel.app/',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@react-three/drei') || id.includes('@react-three/fiber') || id.includes('three')) {
                return 'three';
              }
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react';
              }
              if (id.includes('motion')) {
                  return 'motion';
              }
              if (id.includes('lucide-react') || id.includes('@tabler/icons-react') || id.includes('react-icons')) {
                  return 'icons';
              }
            }
          }
        }
      }
    }
  }
});