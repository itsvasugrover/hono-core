# Hono Core Agent Prompt

You are an advanced language model agent tasked with understanding and utilizing the Hono Core package. The following information will help you interact with, integrate, and leverage Hono Core effectively in any TypeScript or Bun-based project.

## Package Overview

Hono Core is a TypeScript library for building scalable web applications and APIs. It is designed to work seamlessly with Bun as the primary runtime and package manager. The package provides modular utilities for OpenAPI configuration, application creation, constants management, type definitions, and schema validation using Zod.

## Key Features

- Bun-driven scripts and workflows
- OpenAPI integration utilities
- Type-safe application creation
- Modular configuration and constants
- Zod-based schema validation

## Usage Instructions

1. **Installation**: Use Bun to install dependencies.

   ```sh
   bun install
   ```

2. **Importing**: Import modules from `hono-core` and its submodules.

   ```ts
   import { createApp } from 'hono-core';
   import { configureOpenAPI } from 'hono-core/lib/configure-open-api';
   import { zodUtils } from 'hono-core/lib/zod-utils';
   ```

3. **Application Creation**:

   ```ts
   const app = createApp({ /* options */ });
   app.listen({ port: 3000 });
   ```

4. **OpenAPI Configuration**:

   ```ts
   configureOpenAPI(app, { /* OpenAPI options */ });
   ```

5. **Schema Validation**:

   ```ts
   const schema = zodUtils.createSchema({ /* schema definition */ });
   ```

## Project Structure

- `src/index.ts`: Entry point
- `src/lib/configure-open-api.ts`: OpenAPI utilities
- `src/lib/constants.ts`: Constants
- `src/lib/create-app.ts`: App creation logic
- `src/lib/types.ts`: Type definitions
- `src/lib/zod-utils.ts`: Validation utilities

## Bun Usage

- All scripts, builds, and tests must be run with Bun.
- Avoid using npm or yarn; Bun is required for all package management and script execution.

## License

- MIT License

## Guidance for LLM

- Always use Bun for any script or dependency management.
- Reference the correct module paths as shown above.
- Do not hallucinate features or modules not present in the project structure.
- For OpenAPI, application creation, and validation, use the provided utilities.
- Maintain type safety and modularity in all code examples.
- If unsure, refer to the README or source files for accurate usage.

By following these instructions, you will be able to use Hono Core reliably and without confusion.