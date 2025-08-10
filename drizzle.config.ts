import { defineConfig } from 'drizzle-kit';
import { type } from 'arktype';

const DrizzleConfigFactory = type({
  'NUXT_DB_URL': 'string = "file:local.db"',
  'NUXT_DB_TOKEN?': 'string',
  'NUXT_DB_DIALECT': '"turso" | "sqlite" = "sqlite"',
}).pipe((env) => {
  return defineConfig({
    schema: './server/lib/db/schemas/*',
    out: './drizzle',
    dialect: env.NUXT_DB_DIALECT,
    dbCredentials: {
      url: env.NUXT_DB_URL,
      authToken: env.NUXT_DB_TOKEN,
    },
  });
});

export default DrizzleConfigFactory(process.env);
