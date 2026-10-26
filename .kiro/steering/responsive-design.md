# Responsive Design Guidelines

## Breakpoint System

Use Tailwind's default breakpoints consistently across all components:

| Prefix | Min Width | Target Devices                           |
| ------ | --------- | ---------------------------------------- |
| (none) | 0px       | Mobile phones (portrait)                 |
| `sm:`  | 640px     | Mobile phones (landscape), small tablets |
| `md:`  | 768px     | Tablets                                  |
| `lg:`  | 1024px    | Laptops, small desktops                  |
| `xl:`  | 1280px    | Desktops                                 |
| `2xl:` | 1536px    | Large desktops                           |

## Mobile-First Approach

Always write mobile styles first, then add breakpoint prefixes for larger screens:

```
// Correct - mobile-first
px-5 sm:px-10 md:px-16 lg:px-20

// Wrong - desktop-first requires overrides
px-20 md:px-16 sm:px-10 (don't do this)
```

## Consistent Spacing Pattern

Use this horizontal padding pattern across all sections for consistency:

```tsx
// Standard section padding
className = "px-5 sm:px-10 md:px-16 lg:px-20";
```

## Typography Scaling

Scale text sizes progressively across breakpoints:

```tsx
// Headings (h1)
className = "text-4xl sm:text-5xl md:text-6xl lg:text-[72px]";

// Headings (h2)
className = "text-3xl sm:text-4xl md:text-5xl lg:text-[52px]";

// Body text
className = "text-base md:text-lg lg:text-[20px]";

// Small text
className = "text-[11px] md:text-[12px]";
```

## Layout Patterns

### Flex Direction Changes

Stack elements vertically on mobile, horizontally on larger screens:

```tsx
className = "flex flex-col md:flex-row";
```

### Gap Scaling

Reduce gaps on mobile:

```tsx
className = "gap-4 md:gap-6 lg:gap-8";
```

### Card Grids

Stack cards on mobile, display in row on desktop:

```tsx
<div className="flex flex-col md:flex-row gap-4 md:gap-6">
  <Card className="w-full md:flex-1 md:min-w-0" />
</div>
```

## Visibility Utilities

Hide decorative elements on mobile to reduce visual clutter:

```tsx
// Show only on md and up
className = "hidden md:block";

// Show only on lg and up
className = "hidden lg:block";
```

## Button Sizing

Ensure touch-friendly sizes on mobile:

```tsx
className = "px-4 md:px-5 py-3 text-[12px] md:text-[13px]";
```

## Testing Checklist

Before committing, verify layouts at these widths:

- [ ] 375px (iPhone SE)
- [ ] 428px (iPhone 14 Pro Max)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape / small laptop)
- [ ] 1280px (Desktop)
- [ ] 1440px+ (Large desktop / design reference)
