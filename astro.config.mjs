// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://noureddinedriouech.me/",
  integrations: [
    react(),
    sitemap(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: true,
      SVG: true,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: true,
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (
                id.includes("@react-three") ||
                id.includes("three") ||
                id.includes("maath")
              ) {
                return "three-bundle";
              }
              if (id.includes("react-icons") || id.includes("lucide-react") || id.includes("@tabler/icons-react")) {
                return "icons";
              }
            }
          },
        },
      },
    },
  },
});
