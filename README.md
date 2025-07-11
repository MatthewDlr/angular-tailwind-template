> [!TIP]
> Replace every instance of `{{app-name}}` with the name of the project.

# Presentation

## Stack

- Node : `v24.0.0 lts`
- Package Manager: `pnpm@10.13.1`
- Framework: `Angular@20.1.0 with zoneless, ssr, and hmr enabled`
- Styling: `TailwindCSS@4.1.11`
- Linter: `eslint@9.30.0`
- Formatter: `prettier@3.6.2`

## Features

- [x] Angular Core v20
- [x] Angular [Zoneless enabled](https://angular.dev/guide/experimental/zoneless), with `OnPush` detection strategy by default
- [x] Angular [SSR enabled](https://angular.dev/guide/ssr)
- [x] Angular [HMR enabled](https://angular.dev/tools/cli/build-system-migration#hot-module-replacement)
- [x] Angular [Icons](https://ng-icons.github.io/ng-icons/#/browse-icons) with `Lucide` pre-installed and global config (see `app.config.ts`)
- [x] TailwindCSS 4.1 with pre-configured styles (typography, colors, motions)
- [x] Eslint & Prettier with pre-configured rules
- [x] Satoshi variable font as default font
- [x] VSCode recommended extensions

# Dev

## Installation

> [!IMPORTANT]
> Node version must be `v24.0.0`. <br>
> Learn more at https://angular.dev/reference/versions

If pnpm is not installed, simply run:

```bash
npm install -g pnpm@10.13.1
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

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

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
