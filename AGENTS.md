# Project Guidelines

## Tech Stack

- Framework: `Angular 22 with zoneless change detection, SSR and incremental hydration`
- Runtime: `NodeJS 24`
- Target: `ES2022`
- Typing: `TypeScript 6`
- Styling: `TailwindCSS 4`
- Testing: `Vitest 5 with jsdom`
- Linter: `Oxlint`
- Formatter: `Oxfmt`

## Development Workflow

The first step of the workflow should be `Plan` mode; because before coding, you must know what to do and _how_ you do it. But for simpler tasks or continuing existing work, user may skip this step and jump straight to implementation by using `Build` mode.

### 1. Plan

In `Plan` mode, you need to have a clear idea of what is meant to be built. Which components are rendered on the server, which are client-only, how the component tree is structured, and where state lives.

To do so, load the `/angular-developer` skill to design the implementation tree and generate a blueprint for the actual implementation.
You're answer must include a tree of the components you plan to implement with details about what is server-rendered, what is client-only, where signals live and where the implementation will live. The user must approve it before you move to the next step.

### 2. Implement

**Before Starting**
Depending on the task that need to be done, you're expected to fetch relevant skills to master the implementation.
Look at the `Skills` section below for a list of skills you can load to improve your performance and code quality.
The rules in these skills are non negotiable, you must load the ones necessary for the tasks at hand.

You must split the implementation into small, meaningful tasks. Then for each of them:

1. Implement it.
2. Run the checks inline:

   ```bash
   pnpm fmt
   pnpm lint:agent # Run the linter and the type checker
   pnpm test:agent <scoped to affected files> # don't break what already exists
   ```

3. **Loop until green.** Running formatter and linter frequently avoids the accumulation of errors. Adapt your way of coding for the next todos so you don't repeat the same mistakes.
4. Make sure the work is clean: no dead code, unused imports, commented-out code.

**3-strikes escalation:** if the same test still fails after 3 fix attempts, **stop**. Report the failure output, what you tried, and ask the user. Do not grind.

### 3. Testing

When all tasks are implemented, it's time to test the feature.
To do so, it's better to spawn an optimized subagent that will focus on testing the feature, instead of you doing it manually. This way, you can focus on fixing the bugs and improving the implementation.

1. Dispatch a focused testing subagent (for example `general`), passing:
   - the scope (the feature's diff),
   - the plan (the todos are its intent reference),
   - its objective of writing meaningful and useful tests,
2. It returns its report: tests written / suspected implementation bugs (expected vs. actual) / deliberately excluded / questions.

3. Then you get the result and fix the reported implementation bugs, if any. You may fix _mechanical_ test issues (imports, fixtures, queries).
4. Run `pnpm test:agent` and loop until green. **3-strikes applies** (3 failed attempts on the same test → stop and ask).
5. Run full gate, once:

   ```bash
   pnpm fmt && pnpm lint:agent && pnpm test:agent
   ```

Then, if user explicitly asks for browser testing, load the `/agent-browser` skill.
It covers two dimensions:

- **behavior verification:** the listed flows and their expected outcomes
- **layout pass:** overlaps, invisible/uncovered elements, misaligned controls, inconsistent spacing, clipped content

Pass it the behaviors, flows, app access, and test data it asks for in its input contract.

## Rules

Set of rules that all agents must follow at all times.

### Global

**Only well-maintained packages**: If a third party lib is needed, use only well-tested, actively maintained packages with decent download counts to avoid maintenance burdens and supply chain security risks. Always ask user confirmation before using a package, along with the ones you considered.

**Error handling**: Handle errors immediately and gracefully. Fail early, fail hard, and return clear, useful error messages to clients.

**Naming**: Names should explain _what_ it does without never saying _how_ it does it ; you should not need comments to understand what something does.

- Components: `UserCard`, `OrderSummary`, `LoginForm` instead of `WrapperOrder`, `Container1` or `SubLoginForm`.
- Functions: `formatCurrency`, `validateEmail`, `getUserById` instead of `handleStuff`, `getUserFromDb`, `validateEmailRegex`.
- Inputs: `isPaid`, `hasAccess`, `canEdit` for booleans; avoid ambiguous names like `flag`, `status` when they encode multiple meanings.

**Implementation should be at the leaves (Open/Closed):** For any requirement, identify what is likely to change, the _how we do it_ and push that decision as far down the call graph as possible, behind a single seam. Everything above that seam must be able to survive the change untouched. If the implementation change but keep behavior intact, the tests should still pass.

**Agent File:** This is a living document that should be updated when you, the agent, makes mistakes.
If the user corrects you, spot an issue in your process, you're allowed to edit the `Failure Log` section of this file to document the event (not the global `Agent.md`, the one in the project).

### TypeScript

The `tsconfig.json` has been tailored for this project and should not be changed without user approval.

When importing files, always use the `@/` prefix alias when relevant instead of long relative paths. The following aliases are available:

- `@/*`: `./src/*`
- `@app/*`: `./src/app/*`
- `@environments/*`: `./src/environments/*`

NEVER use `any`; it defeats the purpose of TypeScript. Use `unknown` when the type is uncertain.
NEVER use type assertions with `as`, except for `as const`.
NEVER use the non-null assertion operator (`!`); prefer optional chaining (`?.`) or explicit checks.
Use `===` instead of `==`.
Define return types explicitly for functions.
Use type narrowing to check for `null` or `undefined`, such as `if (value !== null && value !== undefined)`.
When working with union types, use `never` to ensure that if new cases are added, TypeScript throws an error.
Avoid type checking with `instanceof`. Prefer typing variables, parameters and return values to leverage TypeScript.
Prefer immutability with `readonly`.

For writing advanced types, gather all best practices and coding guidelines, load the `/typescript` skill.

### Angular

- Always use standalone components over NgModules.
- Do NOT set `standalone: true` inside Angular decorators; it is the default in Angular v20+.
- Use signals for state management. Use `computed()` for derived state. Do NOT use `mutate` on signals, use `update` or `set`.
- Use `input()` and `output()` functions instead of decorators.
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in the `@Component` decorator. The CLI schematics already do it.
- Use `inject()` instead of constructor injection.
- Use the `host` object of `@Component` / `@Directive` instead of `@HostBinding` and `@HostListener`.
- Design services around a single responsibility with `providedIn: 'root'`.
- Implement lazy loading for feature routes.
- Use `NgOptimizedImage` for all static images. It does not work for inline base64 images.

### Templates

- Keep templates simple and avoid complex logic.
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`.
- Use the async pipe to handle observables.
- Do not assume globals like `new Date()` are available.
- Do not write arrow functions in templates (they are not supported).
- Do NOT use `ngClass`, use `class` bindings instead.
- Do NOT use `ngStyle`, use `style` bindings instead.
- When using external templates/styles, use paths relative to the component TS file.

### TailwindCSS V4

- `text-opacity-*` → Use `text-{color}/{opacity}` instead
- `bg-opacity-*` → Use `bg-{color}/{opacity}` instead
- `border-opacity-*` → Use `border-{color}/{opacity}` instead
- `flex-grow-*` → Use `grow-*`
- `flex-shrink-*` → Use `shrink-*`
- `decoration-slice` → Use `box-decoration-slice`

## Skills

Here's some high quality skills that you can load to improve your performance and code quality. You can load them at any time, but it's recommended to load them before starting the implementation.

- `/angular-developer` To correctly understand Angular, reactivity, routing, forms, DI and testing best practices.
- `/tailwindcss` for correctly using tailwindcss.
- `/impeccable` for implementing UI patterns and animations that does not suck.
- `/typescript` for writing advanced types, get guidelines and best practices.
- `/vitest` for writing and auditing integration tests.
- `/agent-browser` for verifying flows and layouts in a real browser.

## Project structure

The project follows the Angular style guide: feature-first folders, shared code only when it is used by more than one feature.

```md
angular-tailwind-template/
├── public/ # Static assets (images, fonts, favicons)
├── src/
│ ├── app/
│ │ ├── app.ts # Root component
│ │ ├── app.html # Root template
│ │ ├── app.css # Root styles
│ │ ├── app.config.ts # Client providers (router, hydration, ...)
│ │ ├── app.config.server.ts # Server-only providers
│ │ ├── app.routes.ts # Client routes
│ │ ├── app.routes.server.ts # Server render modes
│ │ ├── features/ # Feature modules (domain-driven)
│ │ │ └── user-profile/
│ │ │ ├── user-profile.ts
│ │ │ ├── user-profile.html
│ │ │ ├── user-profile.css
│ │ │ ├── user-profile.service.ts
│ │ │ └── user-profile.spec.ts
│ │ ├── components/ # Shared presentational components
│ │ ├── services/ # Global singleton services
│ │ ├── types/ # Global TypeScript declarations
│ │ └── utils/ # Pure utility helper functions
│ ├── environments/ # Build-time environment files
│ ├── index.html
│ ├── main.ts # Browser bootstrap
│ ├── main.server.ts # Server bootstrap
│ ├── server.ts # Express SSR server
│ └── styles.css # Global styles and Tailwind entry
├── angular.json
├── package.json
└── tsconfig.json
```

## Failure Log
