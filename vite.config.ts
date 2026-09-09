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
      preset: "cloudflare-module",
      output: {
        dir: "dist",
        publicDir: "dist/client",
        serverDir: "dist/server",
      },
      cloudflare: {
        nodeCompat: true,
        deployConfig: true,
      },
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
