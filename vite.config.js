import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: resolve(__dirname, "src/docs/static/js"),
    //outDir: resolve(__dirname, "dist"),
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "Flowbite Mithril",
      fileName: "flowbite-mithril",
    },
    // rollupOptions: {
    //   external: ["mithril"],
    //   output: {
    //     globals: {
    //       mithril: "m",
    //     },
    //   },
    // },
  },
});
