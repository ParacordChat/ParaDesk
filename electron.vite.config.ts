import { defineConfig } from "electron-vite";
import preact from "@preact/preset-vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

export default defineConfig({
    publicDir: false,
    main: {},
    preload: {},
    renderer: {
        plugins: [
            preact(),
            wasm(),
            topLevelAwait(),
        ]
    }
});