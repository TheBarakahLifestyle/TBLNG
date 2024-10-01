import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr:true,
  srcDir: "src",
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@formkit/auto-animate"],
  vite: {
    plugins: [
      nodePolyfills({
        include: ["util"],
        globals: {
          process: false,
        },
      }),
    ],
  },
});
