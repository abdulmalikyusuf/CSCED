import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const _plugins = [react()];
// _plugins.unshift(MillionLint.vite());

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
});
