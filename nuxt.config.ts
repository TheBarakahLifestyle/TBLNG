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
    ghostAdminKey: process.env.VITE_GHOST_ADMIN_KEY,
    public: {
      paystackKey: process.env.VITE_PAYSTACK_KEY,
      ghostClientKey: process.env.VITE_GHOST_CLIENT_KEY,
      flutterwaveKey: process.env.VITE_FLUTTERWAVE_KEY,
      seamailerKey: process.env.VITE_SEAMAILER_PUBKEY,
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://checkout.flutterwave.com/v3.js",
        },
      ],
    },
  },
});
