---
applyTo: "**/*.ts, **/*.tsx}"
---

This guidelines is for writing TypeScript code in a consistent and maintainable way. You must follow them at all times.

## To absolutely follow at all times
- Never use type assertions. Eg: `const x = value as Type` is forbidden. The only exception is `as const`
- Never use `any` type.
- Never use the not null assertion operator (`!`). Prefers the optional chaining operator (`?.`) or explicit checks.
- Use type narrowing to check for not null or undefined values, such as `if (value !== null && value !== undefined)`.
- Use `===`instead of `==`
- Define return types explicitly for functions.

## General Guidelines
- Use `const` for variables that are not reassigned, and `let` for those that are.
- When working with union types, use `never` to ensure that if new cases are added, TypeScript will throw an error if they are not handled.
- Avoid type checking with `instanceof`. Always prefer to specify types of variables, parameters and return values to leverage the full power of TypeScript features.
- Prefer immutability with `readonly`.
- Use an `interface` when you want extends or implements, `type` otherwise.