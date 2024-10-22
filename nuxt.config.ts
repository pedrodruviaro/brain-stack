import { AppPreset } from "./assets/presets/nora"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  primevue: {
    options: {
      theme: {
        preset: AppPreset,
        options: {
          darkModeSelector: false || "none",
        },
      },
    },
  },
  css: ["primeicons/primeicons.css"],
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
})
