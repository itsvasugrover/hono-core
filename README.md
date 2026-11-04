# Hono Core

> [!WARNING]
> **This repository is now archived and read-only.** It is no longer actively maintained — no further commits, issues, or pull requests will be accepted. The code remains available for reference.

Hono Core is a robust TypeScript library designed for building scalable, high-performance web applications and APIs. It leverages Bun as the primary runtime and package manager, ensuring fast execution, efficient dependency management, and modern development workflows.

## Features

- **Bun-Driven Development**: All scripts, builds, and tests are executed using Bun, providing superior speed and reliability.
- **OpenAPI Integration**: Easily configure and expose OpenAPI specifications for your APIs.
- **Type Safety**: Built with TypeScript, offering strong typing and developer tooling.
- **Flexible Configuration**: Modular architecture with customizable constants and utilities.
- **Validation Utilities**: Includes Zod-based utilities for schema validation.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (latest version recommended)
- Node.js (for compatibility, but Bun is required for all scripts)
- TypeScript

### Installation

Clone the repository:

```sh
bun clone https://github.com/itsvasugrover/hono-core.git
cd hono-core
```

Install dependencies:

```sh
bun install
```

### Usage

Import and configure Hono Core in your project:

```ts
import { createApp } from 'hono-core';

const app = createApp({
  // configuration options
});

app.listen({ port: 3000 });
```

#### OpenAPI Configuration

Use the provided utilities to configure OpenAPI endpoints:

```ts
import { configureOpenAPI } from 'hono-core/lib/configure-open-api';

configureOpenAPI(app, {
  // OpenAPI options
});
```

#### Validation

Utilize Zod utilities for schema validation:

```ts
import { zodUtils } from 'hono-core/lib/zod-utils';

const schema = zodUtils.createSchema({
  // schema definition
});
```

## Project Structure

- `src/index.ts`: Entry point for the library
- `src/lib/configure-open-api.ts`: OpenAPI configuration utilities
- `src/lib/constants.ts`: Project constants
- `src/lib/create-app.ts`: Application creation logic
- `src/lib/types.ts`: Type definitions
- `src/lib/zod-utils.ts`: Validation utilities

## Scripts

All scripts are executed using Bun:

- **Build**: `bun run build`
- **Test**: `bun run test`
- **Lint**: `bun run lint`

---

## Versioning

- **Major**: Breaking changes to error structure, function signatures, or exports
- **Minor**: New schemas/helpers, optional parameters, non-breaking error fields
- **Patch**: Bug fixes, documentation, type improvements, internal refactors

---

## Contributing

Contributions are welcome. Please review the [contribution guidelines](CONTRIBUTING.md) before submitting changes. Ensure that:

1. All changes are backward compatible
2. TypeScript types are updated as needed
3. Documentation is kept current
4. All checks pass using Bun (`bun run typecheck`, `bun run lint`, `bun run build`)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Repository

- GitHub: [https://github.com/itsvasugrover/hono-core](https://github.com/itsvasugrover/hono-core)
- Issues: [https://github.com/itsvasugrover/hono-core/issues](https://github.com/itsvasugrover/hono-core/issues)

## Support

For questions or support, please open an issue on the GitHub repository.

---

**Status**: ⚠️ No longer maintained — this repository has been archived and is read-only. The npm package `@vasugrover/hono-core` is deprecated.
