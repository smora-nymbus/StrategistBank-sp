# Project Architecture

## Directory Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui primitives (Button, Card, Input, etc.)
│   ├── layout/       # Layout components (Header, Footer, Container, etc.)
│   └── sections/     # Page sections (HowToInvest, CommunitySection, etc.)
├── pages/            # Page components that compose layouts and sections
│   ├── index.ts      # Barrel export for all pages
│   └── SplashPage.tsx
├── lib/
│   └── utils.ts      # Utilities including cn() for class merging
└── App.tsx           # Main app entry - imports pages only, not components directly
```

## Page Architecture Rules

1. **App.tsx imports pages only** — Never import components directly into App.tsx. Import from `@/pages` instead.
2. **Pages compose components** — Each page file imports and composes its own layout and section components.
3. **Pages are self-contained** — A page includes its Header, Footer, sections, and any page-specific logic.
4. **Use barrel exports** — Export pages from `pages/index.ts` for clean imports.

### Example

```tsx
// ✅ Correct - App.tsx imports page
import { SplashPage } from "@/pages";

function App() {
  return <SplashPage />;
}

// ❌ Wrong - App.tsx imports components directly
import { Header, Footer } from "@/components/layout";
import { HowToInvest } from "@/components/sections";

function App() {
  return (
    <>
      <Header />
      <HowToInvest />
      <Footer />
    </>
  );
}
```

This pattern ensures:

- Easy addition of new pages (just create a new page component)
- Clear separation of concerns
- Simpler routing integration when needed
- Each page controls its own layout and structure

## Component Guidelines

1. **Use shadcn/ui as the foundation** — Install primitives via `npx shadcn@latest add <component>`
2. **Style with Tailwind** — Apply design-specific styles using Tailwind classes on top of shadcn components
3. **Compose, don't modify** — Wrap shadcn components in custom components rather than editing `components/ui/` directly
4. **Use the path alias** — Import from `@/components/...`, `@/pages/...`, and `@/lib/...`

## Adding shadcn Components

```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add card input label
```

Note: On this machine, shadcn commands may need `NODE_TLS_REJECT_UNAUTHORIZED=0` prefix if certificate issues occur.
