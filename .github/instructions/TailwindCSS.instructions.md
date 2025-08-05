---
applyTo: '**/*.html'
---

If this file use TailwindCSS or if the user want to, here some guidelines to follow:

### Don't Use the removed Utilities in v4
- `text-opacity-*` → Use `text-{color}/{opacity}` instead
- `bg-opacity-*` → Use `bg-{color}/{opacity}` instead
- `border-opacity-*` → Use `border-{color}/{opacity}` instead
- `flex-grow-*` → Use `grow-*`
- `flex-shrink-*` → Use `shrink-*`
- `decoration-slice` → Use `box-decoration-slice`

### Don't Use These Deprecated Patterns
- ❌ `@tailwind base; @tailwind components; @tailwind utilities;`
- ❌ `text-opacity-50` → Use `text-white/50` instead
- ❌ `bg-opacity-25` → Use `bg-blue-500/25` instead
- ❌ `border` without color (now uses currentColor, not gray-200)
- ❌ `ring` without explicit width (now 1px, was 3px)
- ❌ `@layer utilities` → Use `@utility` instead
- ❌ JavaScript config for new projects → Use CSS `@theme`

### Modern v4 Alternatives
- ✅ `@import "tailwindcss";`
- ✅ `text-white/50` for semi-transparent text
- ✅ `bg-blue-500/25` for semi-transparent backgrounds
- ✅ `border border-gray-200` for explicit border color
- ✅ `ring-3` for 3px ring width
- ✅ `@utility` for custom utilities
- ✅ `@theme` for configuration

## Best Practices

### 1. Use CSS Variables for Dynamic Values
```html
<div class="bg-[var(--dynamic-color)] text-[var(--dynamic-size)]">
  Dynamic styling
</div>
```

### 2. Leverage the New Color System
```html
<!-- Better contrast and vibrancy with OKLCH -->
<div class="bg-blue-500 text-white">
  Vivid colors on modern displays
</div>
```

### 3. Container Queries for True Responsive Design
```html
<div class="@container">
  <div class="p-4 @lg:p-8 @xl:p-12">
    Responds to container, not viewport
  </div>
</div>
```

### 4. Modern CSS Features
```html
<!-- Native cascade layers -->
<div class="layer-[utilities]:z-10">
  Proper layer management
</div>

<!-- Color mixing -->
<div class="bg-blue-500/50">
  Uses color-mix() under the hood
</div>
```
### 5. Direct Children Styling
Style all direct children with `*:`. 
Example:

```html
<div class="*:rounded-xl">
    <div class="bg-blue-500 p-4">Child 1</div>
    <div class="bg-red-500 p-4">Child 2</div>
</div>
```

### Container Queries
```css
@container, @container-normal, @container-size, @container-inline-size
```

Design first for desktop and then for smaller devices
```css
@max-w-xs:, @max-w-sm:, @max-w-md:, @max-w-lg:, @max-w-xl:, @max-w-2xl:, @max-w-3xl:, @max-w-4xl:, @max-w-5xl:, @max-w-6xl:, @max-w-7xl:
```

### Efficient Class Usage
```html
<!-- Good: Use size-* for square elements -->
<div class="size-12"></div>

<!-- Instead of: -->
<div class="w-12 h-12"></div>

<!-- Good: Use container queries for component responsiveness -->
<div class="@container">
  <div class="p-4 @lg:p-8">Content</div>
</div>

<!-- Good: Use CSS variables for dynamic values -->
<div class="bg-[var(--theme-primary)] text-[var(--theme-on-primary)]">
  Dynamic theming
</div>
```