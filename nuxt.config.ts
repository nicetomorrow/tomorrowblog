import { mergeProps } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {},
  //runtimeConfig
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "/api",
    },
  },
  vite: {
    vue: { customElement: true },
    vueJsx: {
      mergeProps: true,
    },
  },
  modules:['@nuxt/image','nuxt-icons']
});
