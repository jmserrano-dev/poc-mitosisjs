// vite.config.ts
import { defineConfig } from "file:///C:/dev/source/pocs/poc-components-library/mitosis/packages/react/node_modules/vite/dist/node/index.js";
import { resolve } from "node:path";
import dts from "file:///C:/dev/source/pocs/poc-components-library/node_modules/vite-plugin-dts/dist/index.mjs";
import react from "file:///C:/dev/source/pocs/poc-components-library/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/dev/source/pocs/poc-components-library/mitosis/packages/react/node_modules/vite-plugin-static-copy/dist/index.js";
var __vite_injected_original_dirname = "C:\\dev\\source\\pocs\\poc-components-library\\mitosis\\packages\\react";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.app.json" }),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/*",
          dest: "./assets"
        }
      ]
    })
  ],
  build: {
    lib: {
      formats: ["es", "cjs"],
      entry: resolve(__vite_injected_original_dirname, "./src/index.ts"),
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxkZXZcXFxcc291cmNlXFxcXHBvY3NcXFxccG9jLWNvbXBvbmVudHMtbGlicmFyeVxcXFxtaXRvc2lzXFxcXHBhY2thZ2VzXFxcXHJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxkZXZcXFxcc291cmNlXFxcXHBvY3NcXFxccG9jLWNvbXBvbmVudHMtbGlicmFyeVxcXFxtaXRvc2lzXFxcXHBhY2thZ2VzXFxcXHJlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9kZXYvc291cmNlL3BvY3MvcG9jLWNvbXBvbmVudHMtbGlicmFyeS9taXRvc2lzL3BhY2thZ2VzL3JlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XG5cbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tIFwidml0ZS1wbHVnaW4tc3RhdGljLWNvcHlcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGR0cyh7IHRzY29uZmlnUGF0aDogXCIuL3RzY29uZmlnLmFwcC5qc29uXCIgfSkgYXMgYW55LFxuICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCJzcmMvYXNzZXRzLypcIixcbiAgICAgICAgICBkZXN0OiBcIi4vYXNzZXRzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIl0sXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvaW5kZXgudHNcIiksXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0ID09PSBcImVzXCIgPyBcIm1qc1wiIDogXCJjanNcIn0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrWSxTQUFTLG9CQUFvQjtBQUMvWixTQUFTLGVBQWU7QUFFeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixTQUFTLHNCQUFzQjtBQUwvQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJLEVBQUUsY0FBYyxzQkFBc0IsQ0FBQztBQUFBLElBQzNDLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsT0FBTyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQzFDLFVBQVUsQ0FBQyxXQUFXLFNBQVMsV0FBVyxPQUFPLFFBQVEsS0FBSztBQUFBLElBQ2hFO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
