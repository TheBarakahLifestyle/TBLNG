import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "src",
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@formkit/auto-animate",
    "nuxt-security",
  ],
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
  // routeRules: {
  //   "/ghost/api/**": {
  //     proxy: { to: "https://the-barakah-lifestyle-ng.ghost.io/ghost/api/**" },
  //   },
  // },
  security: {
    corsHandler: {
      origin: [
        "https://the-barakah-lifestyle-ng.ghost.io",
        "https://blog.tblt.com.ng",
      ],
      preflight: {
        statusCode: 204,
      },
      allowHeaders: "*",
    },
    headers: {
      contentSecurityPolicy: false,
      crossOriginResourcePolicy: "cross-origin"
    },
  },
});

// ghost/api/admin/members/
