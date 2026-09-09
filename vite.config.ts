import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      // The production site is hosted on Vercel. Using the matching Nitro
      // preset emits the Vercel Build Output API structure instead of a
      // Cloudflare worker bundle that Vercel cannot route.
      preset: "vercel",
    }),
    react(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: ["react", "react-dom", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
