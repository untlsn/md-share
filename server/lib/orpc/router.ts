import { linksTable } from '../db/schemas';
import { type } from 'arktype';
import * as s from 'drizzle-orm';
import { base } from './procedures';

export const router = {
  sendText: base
    .input(type('string'))
    .output(type('number'))
    .handler(async (o) => {
      try {
        const [{ id }] = await o.context.db
          .insert(linksTable)
          .values({ text: o.input })
          .returning({
            id: linksTable.id,
          });

        return id;
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    }),
  getText: base
    .input(type('number'))
    .handler(async (o) => {
      try {
        const [data] = await o.context.db
          .select()
          .from(linksTable)
          .where(s.eq(linksTable.id, o.input))
          .limit(1);

        return data;
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    }),
};
