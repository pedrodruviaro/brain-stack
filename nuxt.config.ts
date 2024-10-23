import { AppPreset } from "./assets/presets/nora"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  imports: {
    dirs: ["./composables/auth", "./composables/idea"],
  },
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
  ],
  supabase: {
    redirectOptions: {
      login: "/auth/login",
      callback: "/auth/redirect",
      exclude: ["/", "/idea/*"],
    },
  },
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
      Poppins: [400, 600, 700, 900],
    },
  },
  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      siteUrl: process.env.SITE_URL,
    },
  },
})
