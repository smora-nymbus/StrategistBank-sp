---
inclusion: fileMatch
fileMatchPattern: "src/components/**/*"
---

# Component Development Guide

## Creating New Components

### Layout Components (`src/components/layout/`)

Used for structural elements that appear across pages:

```tsx
// Example: Container.tsx
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
```

### Feature Components (`src/components/features/`)

Used for specific UI sections built from shadcn primitives:

```tsx
// Example: Hero.tsx
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-5xl font-bold">Welcome</h1>
      <Button size="lg" className="mt-8">Get Started</Button>
    </Container>
  );
}
```

## Props Pattern

- Always type props with TypeScript interfaces
- Use `className?: string` prop for style overrides
- Use `cn()` from `@/lib/utils` to merge classes

## Naming Conventions

- PascalCase for component files and exports
- Component file name matches the export: `Hero.tsx` exports `Hero`
- Group related components in folders when they share logic
