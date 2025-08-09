import { defineConfig } from 'drizzle-kit';

console.log(process.env.NUXT_TURSO_DATABASE_URL);

export default defineConfig({
  schema: './server/lib/db/schemas/*',
  out: './drizzle',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.NUXT_TURSO_DATABASE_URL!,
    authToken: process.env.NUXT_TURSO_AUTH_TOKEN!,
  },
});
