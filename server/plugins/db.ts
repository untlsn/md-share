import { drizzle } from 'drizzle-orm/libsql';

export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig();

  const db = drizzle({
    connection: {
      url: config.turso.databaseUrl,
      authToken: config.turso.authToken,
    },
  });

  nitroApp.hooks.hook('request', (event) => {
    event.context.db = db;
  });
});
