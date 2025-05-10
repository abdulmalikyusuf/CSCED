import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
const _plugins = [
  TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
  react(),
];
// _plugins.unshift(MillionLint.vite());

// https://vitejs.dev/config/

export default defineConfig({
  plugins: _plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./"),
    },
  },
  build: {
    minify: false,
    terserOptions: {
      compress: false,
      mangle: false,
    },
  },
  server: {
    watch: {
      ignored: ["**/.history/**"],
    },
  },
});
