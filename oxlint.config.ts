import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "promise", "import", "vitest"],
  options: {
    typeAware: true,
    typeCheck: true,
  },
  categories: {
    correctness: "error",
    suspicious: "warn",
    perf: "warn",
    pedantic: "off",
    style: "off",
  },
  env: {
    browser: true, // Enables web API globals (window, document, fetch)
    builtin: true, // Enables standard JavaScript core globals (Promise, Map, etc.)
    node: true, // Enables Node environment globals (process)
  },
  globals: {},
  rules: {
    /* Module boundaries */
    "import/no-cycle": ["error", { maxDepth: 3 }],
    "oxc/no-async-endpoint-handlers": "off", // Express 5 forwards rejected promises to next()

    /* Auto remove unused imports */
    "eslint/no-unused-vars": [
      "error",
      {
        fix: {
          imports: "fix",
        },
      },
    ],

    /* Error handling */
    "no-throw-literal": "error", // Only Error instances may be thrown
    "typescript/only-throw-error": "error",

    /* Vitest */
    "vitest/require-mock-type-parameters": "off", // vi.fn() infers from usage/typing; pure friction
    "vitest/valid-title": "off", // `describe(component)` is an idiomatic component-suite convention
    "vitest/no-conditional-expect": "off", // Conditional expect is the point of type-narrowing tests
    "eslint/no-await-in-loop": "off", // Sequential awaits are intended in ordered test assertions

    /* TypeScript */
    "typescript/no-explicit-any": "error", // Ban `any` that defeats the purpose of TypeScript
    "typescript/no-non-null-assertion": "error", // Prefer optional chaining or explicit checks over `!`
    "typescript/consistent-type-assertions": ["error", { assertionStyle: "never" }], // Bans `as` (but allows `as const`)
    "typescript/switch-exhaustiveness-check": "error", // Force every union member to be handled
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-floating-promises": "warn",
    "typescript/no-misused-spread": "off", // Disable spread-of-string is intentional in numeric counters
    "typescript/consistent-return": "off", // False positives on lifecycle cleanup patterns

    /* Noise rules (conflict with modern module practices) */
    "import/no-named-export": "off", // Named exports are idiomatic for tree-shaking
    "import/prefer-default-export": "off",
    "import/exports-last": "off",
    "import/group-exports": "off",
    "import/no-unassigned-import": "off", // CSS side-effect imports are valid
    "eslint/sort-imports": "off", // Conflicts with Oxfmt's sortImports feature (oxfmt is canonical)
  },
  ignorePatterns: [
    "dist/**",
    "out-tsc/**",
    ".angular/**",
    "coverage/**",
    "node_modules/**",
    ".vscode/**",
    ".github/**",
  ],
  settings: {
    vitest: {
      typecheck: false,
    },
  },
});
