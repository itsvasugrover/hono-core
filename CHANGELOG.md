# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-07

### First Release

This is the initial public release of the package, combining all previous features and fixes.

### Added

- `createCoreApp` - Main factory function for creating production-ready Hono apps
- `createApp` - Base app creator with essential middlewares
- `createRouter` - OpenAPI-enabled router factory
- `configureOpenApi` - OpenAPI documentation configuration
- Pre-configured middleware stack:
  - Request ID generation
  - Structured logging with Pino
  - CORS with credentials support
  - Emoji favicon serving
  - Environment-aware error handling
  - 404 handler
- OpenAPI features:
  - Automatic spec generation at `/docs`
  - Interactive Scalar UI at `/reference` (development only)
  - Security schemes support (API Key, Bearer)
  - Customizable documentation
- Type utilities:
  - `AppBindings` - Standard app bindings with logger
  - `AppOpenAPI` - Typed OpenAPI Hono instance
  - `AppRouteHandler` - Typed route handlers
  - `toZodV4SchemaTyped` - Zod v4 schema compatibility
- Constants:
  - `ZOD_ERROR_MESSAGES` - Standard validation error messages
  - `ZOD_ERROR_CODES` - Validation error codes
  - `notFoundSchema` - Reusable 404 schema
- Auto-discovery:
  - Manual route mounting via array
  - Automatic route discovery from directory
- Comprehensive README with usage examples
- Enterprise-level package.json with proper metadata and exports
- MIT LICENSE
- CHANGELOG.md for version tracking
- agents.md maintenance guide for LLM-assisted development
