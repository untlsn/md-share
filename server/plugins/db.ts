import { drizzle } from 'drizzle-orm/libsql';

export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig();

  const db = drizzle({
    connection: {
      url: config.db.url,
      authToken: config.db.token,
    },
  });

  nitroApp.hooks.hook('request', (event) => {
    event.context.db = db;
  });
});
