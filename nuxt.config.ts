import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "src",
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt", // "nuxt-security",
    "@formkit/auto-animate",
    "nuxt-vuefire",
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
  vuefire: {
    config: {
      apiKey: "AIzaSyAh5oZYIiWDVUHrvgIqGl9gr2wV_p4q0tQ",
      authDomain: "tblt-e31f8.firebaseapp.com",
      projectId: "tblt-e31f8",
      appId: "1:134173484559:web:f84d3af5a255256de7657a",
      storageBucket: "tblt-e31f8.appspot.com",
      messagingSenderId: "134173484559",
      // there could be other properties depending on the project
    },
  },
  // routeRules: {
  //   "/ghost/api/**": {
  //     proxy: { to: "https://the-barakah-lifestyle-ng.ghost.io/ghost/api/**" },
  //   },
  // },
  // security: {
  //   corsHandler: {
  //     origin: "*",
  //     preflight: {
  //       statusCode: 204,
  //     },
  //     allowHeaders: "*",
  //     exposeHeaders: "*"
  //   },
  //   headers: {
  //     contentSecurityPolicy: false,
  //     crossOriginResourcePolicy: "cross-origin",
  //     xXSSProtection: false
  //   },
  // },
});

// ghost/api/admin/members/
