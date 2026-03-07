import { Scalar } from '@scalar/hono-api-reference';
import type { BaseEnv } from '@vasugrover/bun-env';
import type { AppOpenAPI } from './types';

export type ConfigureOpenApiOptions = {
  env: Pick<BaseEnv, 'NODE_ENV'>;
  title: string;
  version: string;
  pageTitle?: string;
  securitySchemes?: Array<{
    name: string;
    type: 'apiKey' | 'http';
    scheme?: 'bearer' | 'basic';
    in?: 'header' | 'query' | 'cookie';
    value?: string;
  }>;
  getApiKey?: () => Promise<string | null>;
  logger?: { warn: (error: unknown, message: string) => void };
};

export default async function configureOpenApi(app: AppOpenAPI, options: ConfigureOpenApiOptions) {
  const {
    env,
    title,
    version,
    pageTitle = `${title} Docs`,
    securitySchemes = [],
    getApiKey,
    logger,
  } = options;

  if (env.NODE_ENV === 'development') {
    const security =
      securitySchemes.length > 0 ? [{ [securitySchemes.map((s) => s.name).join('Auth')]: [] }] : [];

    app.doc('/docs', {
      openapi: '3.1.0',
      info: {
        title,
        version,
      },
      security,
    });

    for (const scheme of securitySchemes) {
      if (scheme.type === 'apiKey') {
        app.openAPIRegistry.registerComponent('securitySchemes', `${scheme.name}Auth`, {
          type: 'apiKey',
          name: scheme.name,
          in: scheme.in || 'header',
        });
      } else if (scheme.type === 'http') {
        app.openAPIRegistry.registerComponent('securitySchemes', `${scheme.name}Auth`, {
          type: 'http',
          scheme: scheme.scheme || 'bearer',
        });
      }
    }

    let currentApiKey = 'YOUR_API_KEY_HERE';
    if (getApiKey) {
      try {
        const apiKeyFromSource = await getApiKey();
        if (apiKeyFromSource) {
          currentApiKey = apiKeyFromSource;
        }
      } catch (error) {
        if (logger) {
          logger.warn(error, 'Could not fetch API key for documentation:');
        }
      }
    }

    type AuthSchemeEntry =
      | { type: 'apiKey'; name: string; in: 'query' | 'header' | 'cookie'; value: string }
      | { type: 'http'; scheme: 'bearer' | 'basic' };
    const authSchemes: Record<string, AuthSchemeEntry> = {};
    for (const scheme of securitySchemes) {
      if (scheme.type === 'apiKey') {
        authSchemes[`${scheme.name}Auth`] = {
          type: 'apiKey',
          name: scheme.name,
          in: scheme.in || 'header',
          value: scheme.value || (scheme.name === 'X-API-Key' ? currentApiKey : ''),
        };
      } else if (scheme.type === 'http') {
        authSchemes[`${scheme.name}Auth`] = {
          type: 'http',
          scheme: scheme.scheme || 'bearer',
        };
      }
    }

    app.get(
      '/reference',
      Scalar({
        pageTitle,
        title: 'API',
        url: '/docs',
        defaultHttpClient: {
          targetKey: 'js',
          clientKey: 'axios',
        },
        authentication: {
          preferredSecurityScheme: Object.keys(authSchemes),
          securitySchemes: authSchemes,
        },
        hiddenClients: [
          'clj_http',
          'httpclient',
          'restsharp',
          'native',
          'http1.1',
          'asynchttp',
          'nethttp',
          'okhttp',
          'unirest',
          'xhr',
          'jquery',
          'okhttp',
          'native',
          'request',
          'unirest',
          'nsurlsession',
          'cohttp',
          'guzzle',
          'http1',
          'http2',
          'webrequest',
          'restmethod',
          'python3',
          'requests',
          'httr',
          'native',
          'httpie',
          'wget',
          'nsurlsession',
          'undici',
        ],
      }),
    );
  }
}
