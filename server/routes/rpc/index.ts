import { RPCHandler } from '@orpc/server/node';
import type { BaseContext } from '~~/server/lib/orpc/procedures';
import { router } from '~~/server/lib/orpc/router';

const handler = new RPCHandler(router);

export default defineEventHandler(async (event) => {
  const { matched } = await handler.handle(
    event.node.req,
    event.node.res,
    {
      prefix: '/rpc',
      context: {
        db: event.context.db,
      } satisfies BaseContext,
    },
  );

  if (matched) {
    return;
  }

  setResponseStatus(event, 404, 'Not Found');
  return 'Not found';
});
