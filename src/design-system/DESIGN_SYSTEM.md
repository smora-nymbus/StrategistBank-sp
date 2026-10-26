# Strategist Bank Design System

## Overview

This design system defines the visual language and component library for Strategist Bank. All components should follow these guidelines to maintain brand consistency.

---

## Brand Identity

**Tagline:** "A Bank that thinks like a Business."

**Voice:** Professional, trustworthy, community-focused, approachable

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#11224d` | Headers, primary headings, hero text |
| Blue | `#1e3366` | Primary buttons, section backgrounds |
| Blue Dark | `#0f1b2d` | Gradient endpoints |

### Secondary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Green | `#4a934f` | Success states, CTA buttons, highlights |
| Gold | `#ebbc59` | Accent borders, section titles, highlights |
| Orange | `#e0512c` | Secondary CTA, warnings, step indicators |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#faf9f5` | Page backgrounds |
| White | `#ffffff` | Cards, content areas |
| Gray | `#5f666e` | Body text |
| Gray Light | `#7a99c1` | Secondary text, footer links |
| Border | `#e2e8f0` | Card borders, dividers |

---

## Typography

### Font Families
| Type | Font | Usage |
|------|------|-------|
| Heading | Barlow Condensed (700) | All headings (h1-h6), step numbers |
| Body | EB Garamond (400, 400i) | Body text, descriptions, paragraphs |
| UI | Outfit (600) | Buttons, labels, badges |

### Type Scale
| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| 5xl | 72px | 1.05 | Hero headlines |
| 4xl | 52px | 1.05 | Section titles |
| 3xl | 32px | 1.2 | Card titles |
| 2xl | 24px | 1.2 | Step numbers |
| xl | 20px | 1.5 | Large body text |
| lg | 18px | 1.5 | Card descriptions |
| md | 16px | 1.5 | Standard body |
| base | 14px | 1.5 | UI text, labels |
| sm | 12px | 1.5 | Small text, captions |
| xs | 11px | 1.5 | Badges, fine print |

---

## Spacing Scale

Based on 4px grid:
- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px
- `5` = 20px
- `6` = 24px
- `8` = 32px
- `10` = 40px
- `12` = 48px
- `16` = 64px
- `20` = 80px

### Section Padding
- Mobile: `px-5` (20px)
- Tablet: `sm:px-10` (40px), `md:px-16` (64px)
- Desktop: `lg:px-20` (80px)

---

## Border Radius

| Name | Value | Usage |
|------|-------|-------|
| sm | 4px | Small elements |
| md | 6px | Buttons |
| lg | 12px | Cards |
| xl | 24px | Large containers |
| full | 9999px | Pills, avatars |

---

## Shadows

| Name | Value | Usage |
|------|-------|-------|
| sm | `0px 2px 5px rgba(0,0,0,0.04)` | Cards (default) |
| lg | `0px 10px 24px rgba(74,147,79,0.08)` | Highlighted cards |
| button | `0px 6px 8px rgba(74,147,79,0.2)` | Primary buttons |
| buttonOrange | `0px 6px 8px rgba(224,81,44,0.08)` | Secondary buttons |

---

## Components Catalog

### Layout Components
- [Header](#header)
- [Footer](#footer)

### Section Components
- [HowToInvest](#howtoinvest)
- [CommunitySection](#communitysection)

### UI Components
- [Button](#button)
- [StepCard](#stepcard)

---

## Component Specifications

### Header
**Purpose:** Main page header with logo, tagline, and hero text.

**Tokens Used:**
- Background: `neutral.cream`
- Heading: `primary.navy`, `typography.fontFamilies.heading`
- Badge: `secondary.green`, `typography.fontFamilies.ui`

---

### Footer
**Purpose:** Page footer with brand info, contact, legal links, and disclosures.

**Tokens Used:**
- Background: Gradient from `primary.blue` to `primary.blueDark`
- Text: `neutral.white`, `neutral.grayLight`
- Accent: `secondary.gold`

---

### Button
**Variants:**
1. **Primary** - Green background, white text
2. **Secondary** - Navy background, gold bottom border
3. **Outline** - Cream background, orange border and text

**Tokens Used:**
- Primary: `secondary.green`, shadow `button`
- Secondary: `primary.blue`, border `secondary.gold`
- Outline: `neutral.cream`, border `secondary.orange`

---

### StepCard
**Purpose:** Investment step card with number, icon, title, description, and CTA.

**Variants:**
1. **Default** - Gray border
2. **Highlighted** - Green border with enhanced shadow

**Tokens Used:**
- Background: `neutral.white`
- Border: `neutral.border` or `secondary.green`
- Step number: `typography.fontFamilies.heading`
- Title: `primary.blue`, `typography.fontFamilies.heading`
- Description: `neutral.gray`, `typography.fontFamilies.body`

---

## Usage Guidelines

### Do's
- ✅ Use design tokens for all colors, spacing, and typography
- ✅ Follow mobile-first responsive approach
- ✅ Maintain consistent spacing using the 4px grid
- ✅ Use semantic color names (success, warning, error)

### Don'ts
- ❌ Hardcode color values
- ❌ Use arbitrary spacing values
- ❌ Mix font families inappropriately
- ❌ Ignore responsive breakpoints

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-10-26 | Initial design system setup |
