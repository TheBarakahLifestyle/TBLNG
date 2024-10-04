import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
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
  runtimeConfig: {
    ghostAdminKey: process.env.GHOST_ADMIN_KEY,
    public: {
      paystackKey: process.env.PAYSTACK_KEY,
      ghostClientKey: process.env.GHOST_CLIENT_KEY,
    },
  },
});
