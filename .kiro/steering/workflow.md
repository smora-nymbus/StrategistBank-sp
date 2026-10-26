# Development Workflow

## Verification Requirements

**Before committing or pushing any changes, ALWAYS:**

1. Run `npm run build` — ensures TypeScript compiles and production build succeeds
2. Start `npm run dev` and verify the page renders correctly
3. Check browser console for errors

## Change Process

1. **Receive design** — User provides Figma/image/description
2. **Identify components** — Break down the design into reusable components
3. **Install shadcn primitives** — Add any needed shadcn/ui components
4. **Build custom components** — Create feature components that compose shadcn primitives
5. **Apply Tailwind styling** — Match the design using Tailwind classes
6. **Verify** — Run build and dev server, check for errors
7. **Commit** — Only after verification passes

## Styling Approach

- Start with shadcn's default styling
- Override with Tailwind utility classes to match design
- Use CSS variables from `index.css` for theme colors when appropriate
- Keep responsive design in mind (`sm:`, `md:`, `lg:` breakpoints)

## Git Workflow

- Commit frequently with descriptive messages
- Push only after build verification passes
- Use conventional commit format: `feat:`, `fix:`, `style:`, `refactor:`
