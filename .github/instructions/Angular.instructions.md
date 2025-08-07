---
description: "Angular-specific coding standards and best practices"
applyTo: "**/*.ts, **/*.html, **/*.scss, **/*.css"
---

# Angular Development Instructions

Instructions for generating high-quality Angular applications with TypeScript, using Angular Signals for state management, adhering to Angular best practices as outlined at https://angular.dev.

## Development Standards

### Architecture

- Always use standalone components over NgModules unless modules are explicitly required
- Organize code by feature modules or domains for scalability
- Implement lazy loading for feature modules to optimize performance
- Structure components with a clear separation of concerns (smart vs. presentational components)
- Use the `inject()` function instead of constructor injection in standalone components
- Always follow the single responsibility principle (SRP) for components and services

### Component Design

- Follow Angular's component lifecycle hooks best practices
- When using Angular >= 19, Use `input()` `output()`, `viewChild()`, `viewChildren()`, `contentChild()` and `viewChildren()` functions instead of decorators; otherwise use decorators
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator if not already set
- Keep templates clean and logic in component classes or services
- Prefer Reactive forms instead of Template-driven ones

### Templates

- Prefer inline templates for small components
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- You can define template variables with `@let`
- Use the async pipe to handle observables
- Do NOT use `ngClass`, use `[class]` bindings instead
- DO NOT use `ngStyle`, use `[style]` bindings instead
- Use `NgOptimizedImage` for all static images.
- Use Angular directives and pipes for reusable functionality

### Styling

- Use Angular's component-level CSS encapsulation (default: ViewEncapsulation.Emulated) unless we need to style classes that are dynamically added to the DOM
- Use TailwindCSS for styling components
- Use CSS for complex styles, variables and animations
- Implement responsive design using Grid, Flexbox, or Angular CDK Layout utilities
- Maintain accessibility (a11y) with ARIA attributes and semantic HTML

### State Management

- Use Angular Signals for reactive state management in components and services
- Leverage `signal()`, `computed()`, and `effect()` for reactive state updates
- Keep state transformations pure and predictable
- Use writable signals for mutable state and computed signals for derived state
- Handle loading and error states with signals and proper UI feedback
- Use Angular's `AsyncPipe` to handle observables in templates when combining signals with RxJS
- Do NOT use `mutate` on signals, use `update` or `set` instead

### Data Fetching

- If Angular >= 19 use the new `resource()` function to fetch data, otherwise use `HttpClient` with observables
- Always rely on `async/await` for handling asynchronous operations
- Implement caching strategies (e.g., `shareReplay` for observables)
- Store API response data in signals for reactive updates
- Handle API errors with global interceptors for consistent error handling

### Security

- Sanitize user inputs using Angular's built-in sanitization
- Implement route guards for authentication and authorization
- Use Angular's `HttpInterceptor` for CSRF protection and API authentication headers
- Validate form inputs with Angular's reactive forms and custom validators
- Follow Angular's security best practices (e.g., avoid direct DOM manipulation)

### Performance

- Use lazy loading for routes to reduce initial bundle size
- This project DOES NOT use `zone.js`, meaning you have to use signals for reactive updates
- Use trackBy in `@For` loops to improve rendering performance

### Testing

- Write tests only if the user asked for it, otherwise skip this section
- Write unit tests for components, services, and pipes using Jasmine and Karma
- Use Angular's `TestBed` for component testing with mocked dependencies
- Test signal-based state updates using Angular's testing utilities
- Mock HTTP requests using `HttpClientTestingModule`
- Ensure high test coverage for critical functionality

## Implementation Process

1. Plan project structure and feature modules
2. Define TypeScript interfaces and models
3. Scaffold components, services, and pipes using Angular CLI
4. Implement data services and API integrations with signal-based state
5. Build reusable components with clear inputs and outputs
6. Add reactive forms and validation
7. Apply styling with SCSS and responsive design
8. Implement lazy-loaded routes and guards
9. Add error handling and loading states using signals
10. Write unit and end-to-end tests
11. Optimize performance and bundle size

## Additional Guidelines

- Follow Angular's naming conventions (e.g., `feature.component.ts`, `feature.service.ts`)
- Use Angular CLI commands for generating boilerplate code. You may use the Angular CLI MCP Server
- Document components and services with clear JSDoc comments
- Ensure accessibility compliance (WCAG 2.1) where applicable
- Use Angular's built-in i18n for internationalization (if specified)
- Keep code DRY by creating reusable utilities and shared modules
