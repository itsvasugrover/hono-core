// Custom defaultHook compatible with AppBindings
import type { Hook } from '@hono/zod-openapi';
import { OpenAPIHono } from '@hono/zod-openapi';
import type { BaseEnv } from '@vasugrover/bun-env';
import { createHonoLogger } from '@vasugrover/bun-logger';
import { createOnError, notFound, serveEmojiFavicon } from '@vasugrover/hono-middlewares';
import { cors } from 'hono/cors';
import { requestId } from 'hono/request-id';
import type { AppBindings } from './types';

const defaultHook: Hook<unknown, AppBindings, string, Response | undefined> = (result, c) => {
  const logger = c.get('logger');
  if (result.success) return;
  // result is narrowed to { success: false; error: ZodError }
  const error = (result as { success: false; error: import('zod').ZodError }).error;
  logger?.warn(error, 'Validation error');
  return c.json({ error: 'Validation error', details: error.issues }, 400);
};

export type CreateAppOptions = {
  env: Pick<BaseEnv, 'NODE_ENV' | 'LOG_LEVEL'>;
  faviconEmoji?: string;
};

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp(options: CreateAppOptions) {
  const { env, faviconEmoji = '🌐' } = options;

  const app = createRouter();

  app.use(requestId());
  app.use(createHonoLogger(env));
  app.use(serveEmojiFavicon(faviconEmoji));
  app.use(
    cors({
      origin: (origin) => origin,
      credentials: true,
    }),
  );

  app.notFound(notFound);
  app.onError(createOnError(env));

  return app;
}
