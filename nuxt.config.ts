import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Md Share',
    },
  },
  css: ['~/assets/main.css'],
  runtimeConfig: {
    turso: {
      databaseUrl: '',
      authToken: '',
    },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    static: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,

      },
    },
  },
  shadcn: {
    prefix: 'ui',
    componentDir: './components/ui',
  },
});
