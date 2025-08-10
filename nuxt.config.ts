import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],
  ssr: false,
  imports: {
    presets: [
      {
        from: '@tanstack/vue-query',
        imports: ['useQuery', 'useMutation', 'useInfiniteQuery'],
      },
    ],
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Md Share',
    },
  },
  css: ['~/assets/main.css'],
  colorMode: { classSuffix: '' },
  runtimeConfig: {
    db: {
      url: 'file:local.db', // NUXT_DB_URL
      token: '', // NUXT_DB_TOKEN
      dialect: 'sqlite', // NUXT_DB_DIALECT
    },
    passkey: '',
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    prerender: {
      routes: ['/'],
    },
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
  icon: {
    componentName: 'NuxtIcon',
  },
  shadcn: {
    prefix: 'ui',
    componentDir: './components/ui',
  },
});
