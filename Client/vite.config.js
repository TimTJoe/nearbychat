import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils"),
      },
      {
        find: "@helpers",
        replacement: path.resolve(__dirname, "src/utils/helpers"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
      {
        find: "@icons",
        replacement: path.resolve(__dirname, "src/assets/icons"),
      },
      {
        find: "@pictures",
        replacement: path.resolve(__dirname, "src/assets/pictures"),
      },
      {
        find: "@css",
        replacement: path.resolve(__dirname, "src/assets/css"),
      },
      {
        find: "@js",
        replacement: path.resolve(__dirname, "js"),
      },
      {
        find: "@contexts",
        replacement: path.resolve(__dirname, "src/contexts"),
      },
      {
        find: "@src",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    port: 8030,
    open: true,
  },
});
