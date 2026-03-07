import type { OpenAPIHono, RouteConfig, RouteHandler } from '@hono/zod-openapi';
import type { Schema } from 'hono';
import type { Logger } from 'pino';

export type AppBindings = {
  Variables: {
    logger: Logger;
  };
};

// eslint-disable-next-line ts/no-empty-object-type
export type AppOpenAPI<S extends Schema = Schema> = OpenAPIHono<AppBindings, S>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>;
