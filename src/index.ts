import type { Hono } from 'hono';

import type { ConfigureOpenApiOptions } from './lib/configure-open-api';
import configureOpenApi from './lib/configure-open-api';
import type { CreateAppOptions } from './lib/create-app';
import createApp from './lib/create-app';
import type { AppBindings } from './lib/types';

export { configureOpenApi, createApp };
export * from './lib/constants';
export { createRouter } from './lib/create-app';
export * from './lib/types';

export type CreateCoreAppOptions = {
  routes?: Hono<AppBindings>[];
  routesDir?: string;
  openApi?: ConfigureOpenApiOptions;
} & CreateAppOptions;

export default async function createCoreApp(options: CreateCoreAppOptions) {
  const { routes = [], routesDir, openApi, ...appOptions } = options;

  const app = createApp(appOptions);

  if (openApi) {
    configureOpenApi(app, openApi);
  }

  // Add manual routes
  routes.forEach((route) => {
    app.route('/', route);
  });

  // Auto-discover routes from directory
  if (routesDir) {
    const { readdirSync } = await import('fs');
    const { join } = await import('path');
    const files = readdirSync(routesDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
    for (const file of files) {
      const module = await import(join(process.cwd(), routesDir, file));
      if (module.default) {
        app.route('/', module.default);
      }
    }
  }

  return app;
}
