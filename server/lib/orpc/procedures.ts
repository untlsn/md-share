import { os } from '@orpc/server';
import type { drizzle } from 'drizzle-orm/libsql';

export type BaseContext = { db: ReturnType<typeof drizzle> };
export const base = os.$context<BaseContext>();
