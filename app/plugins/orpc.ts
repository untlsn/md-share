import { RPCLink } from '@orpc/client/fetch';
import type { RouterClient } from '@orpc/server';
import { createORPCClient } from '@orpc/client';
import type { router } from '~~/server/lib/orpc/router';
import { createTanstackQueryUtils } from '@orpc/tanstack-query';

export default defineNuxtPlugin(() => {
  const event = useRequestEvent();

  const link = new RPCLink({
    url: `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/rpc`,
    headers: () => Object.fromEntries(event?.headers ?? []),
  });

  const client: RouterClient<typeof router> = createORPCClient(link);

  return {
    provide: {
      orpc: createTanstackQueryUtils(client),
    },
  };
});
