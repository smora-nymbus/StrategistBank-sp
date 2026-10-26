# Project Architecture

## Component Structure

All UI is built using a component-based architecture:

```
src/
├── components/
│   ├── ui/           # shadcn/ui primitives (Button, Card, Input, etc.)
│   ├── layout/       # Layout components (Header, Footer, Container, etc.)
│   └── features/     # Feature-specific components (Hero, CTA, etc.)
├── lib/
│   └── utils.ts      # Utilities including cn() for class merging
└── App.tsx           # Main app entry, composes pages/sections
```

## Component Guidelines

1. **Use shadcn/ui as the foundation** — Install primitives via `npx shadcn@latest add <component>`
2. **Style with Tailwind** — Apply design-specific styles using Tailwind classes on top of shadcn components
3. **Compose, don't modify** — Wrap shadcn components in custom components rather than editing `components/ui/` directly
4. **Use the path alias** — Import from `@/components/...` and `@/lib/...`

## Adding shadcn Components

```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add card input label
```

Note: On this machine, shadcn commands may need `NODE_TLS_REJECT_UNAUTHORIZED=0` prefix if certificate issues occur.
