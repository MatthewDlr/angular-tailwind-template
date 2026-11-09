> [!TIP]
> Replace every instance of `app-name` with the name of the project.

# Presentation

## Stack

- Node: `24.x`
- Package Manager: `pnpm@11`
- Framework: `Angular@22 with zoneless, SSR, and HMR enabled`
- Styling: `TailwindCSS@4`
- Testing: `Vitest@5`
- Linter: `Oxlint`
- Formatter: `Oxfmt`

## Features

- [x] Angular Core v22
- [x] Angular [Zoneless enabled](https://angular.dev/guide/zoneless), with `OnPush` detection strategy by default
- [x] Angular [SSR enabled](https://angular.dev/guide/ssr) with [Incremental Hydration](https://angular.dev/guide/incremental-hydration)
- [x] Angular [HMR enabled](https://angular.dev/tools/cli/build-system-migration#hot-module-replacement)
- [x] TailwindCSS 4 with pre-configured styles (typography, colors, motions)
- [x] [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) with [Type-Aware Linting](https://oxc.rs/docs/guide/usage/linter/type-aware.html)
- [x] [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) with import sorting, package.json sorting and Tailwind class sorting
- [x] [Vitest 5](https://vitest.dev/) as the unit test runner
- [x] Satoshi variable font as default font
- [x] VSCode recommended extensions and debug configuration
- [x] GenAI ready with an `AGENTS.md` file and machine-friendly scripts

# Dev

## Installation

> [!IMPORTANT]
> Node version must be `v24.x` <br>
> Learn more at <https://angular.dev/reference/versions>

If pnpm is not installed, simply run:

```bash
npm install -g pnpm@11
```

Then, install the dependencies:

```bash
pnpm install
```

## Development server

To start a local development server, run:

```bash
pnpm dev
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
pnpm ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
pnpm ng generate --help
```

## Linting

To lint your code using Oxlint, run:

```bash
pnpm lint
```

To fix the issues Oxlint can fix automatically, run:

```bash
pnpm lint:fix
```

> [!WARNING]
> Angular `ng lint` command will not work in this project

## Formatting

To format your code using Oxfmt, run:

```bash
pnpm fmt
```

To check formatting without rewriting files (useful in CI), run:

```bash
pnpm fmt:check
```

## Building

To build the project run:

```bash
pnpm build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
pnpm test
```

To run the suite once and get machine-readable output, run:

```bash
pnpm test:agent
```

To run the suite with coverage, run:

```bash
pnpm test:coverage
```

## Agentic Development

Every check has a non-interactive, machine-friendly entry point, so an agent does not have to parse a watch UI or a human report:

- **`AGENTS.md`** defines the loop: plan the component tree and decide what renders on the server, implement in small steps while running the checks, then test the finished feature. It also lists the conventions the linter enforces and where each kind of file belongs.
- **`pnpm lint:agent`** runs Oxlint with the `agent` reporter and fails on warnings. Oxlint runs with type checking.
- **`pnpm test:agent`** runs Vitest once with the `agent` reporter, built for machine consumption rather than the interactive UI.
- **`pnpm fmt:check`** is the non-interactive formatting check for agents that should not rewrite files.

## Continuous integration

`.github/workflows/ci.yml` runs on every pull request targeting `main` and every push to `main`:

1. `pnpm install --frozen-lockfile`
2. `pnpm fmt:check`
3. `pnpm lint:ci`
4. `pnpm test:agent`
5. `pnpm build`

The job is named `Format, lint, test and build`. Make it required in Settings → Branches (or Rulesets) so a pull request cannot merge while it is red.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For Tailwind CSS, visit the [Tailwind CSS documentation](https://tailwindcss.com/docs).

## License

MIT. See [LICENSE](LICENSE).
