import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  preview: {
    host: "127.0.0.1",
    port: 3002,
    allowedHosts: ["takriim.com", "www.takriim.com"],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          i18n: [
            "i18next",
            "i18next-browser-languagedetector",
            "react-i18next",
          ],
          motion: ["framer-motion"],
          ui: ["aos", "lucide-react"],
        },
      },
    },
  },
});
