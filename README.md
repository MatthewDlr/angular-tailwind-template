> [!TIP]
> Replace every instance of `app-name` with the name of the project.

# Presentation

## Stack

- Node : `24.x`
- Package Manager: `pnpm@10.24.0`
- Framework: `Angular@21.0.3 with zoneless, ssr, and hmr enabled`
- Styling: `TailwindCSS@4.1`
- Linter: `Oxlint`
- Formatter: `Oxfmt`,

## Features

- [x] Angular Core v21
- [x] Angular [Zoneless enabled](https://angular.dev/guide/experimental/zoneless), with `OnPush` detection strategy by default
- [x] Angular [SSR enabled](https://angular.dev/guide/ssr)
- [x] Angular [HMR enabled](https://angular.dev/tools/cli/build-system-migration#hot-module-replacement)
- [x] TailwindCSS 4.1 with pre-configured styles (typography, colors, motions)
- [x] Oxlint to lint code almost 100x faster than Eslint with [Type-Aware Linting](https://oxc.rs/docs/guide/usage/linter/type-aware.html)
- [x] Oxfmt to format code 30× faster than Prettier (Prettier extension might be needed to format .html files)
- [x] Satoshi variable font as default font
- [x] VSCode recommended extensions
- [x] GenAI ready with `Agent.md` file along with `.claude`, `.cursor` and `.gemini` folders for prompt storage

# Dev

## Installation

> [!IMPORTANT]
> Node version must be `v24.x` <br>
> Learn more at <https://angular.dev/reference/versions>

If pnpm is not installed, simply run:

```bash
npm install -g pnpm@10.24.0
```

Then, install the dependencies:

```bash
pnpm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

or

```bash
pnpm dev
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
