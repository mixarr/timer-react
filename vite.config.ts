import react from "@vitejs/plugin-react";
import { resolve } from "path";
import sass from "sass";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
        sassOptions: {
          fiber: false,
        },
      },
    },
  },
  resolve: {
    alias: {
      app: resolve("src/app"),
      processes: resolve("src/processes"),
      pages: resolve("src/pages"),
      widgets: resolve("src/widgets"),
      features: resolve("src/features"),
      entities: resolve("src/entities"),
      shared: resolve("src/shared"),
    },
  },
  //@ts-ignore next line
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
});
