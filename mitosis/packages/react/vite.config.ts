import { defineConfig } from "vite";
import { resolve } from "node:path";

import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.app.json" }) as any,
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/*",
          dest: "./assets",
        },
      ],
    }),
  ],
  build: {
    lib: {
      formats: ["es", "cjs"],
      entry: resolve(__dirname, "./src/index.ts"),
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
