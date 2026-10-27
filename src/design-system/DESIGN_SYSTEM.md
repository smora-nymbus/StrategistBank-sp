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

| Name      | Hex       | Usage                                |
| --------- | --------- | ------------------------------------ |
| Navy      | `#11224d` | Headers, primary headings, hero text |
| Blue      | `#1e3366` | Primary buttons, section backgrounds |
| Blue Dark | `#0f1b2d` | Gradient endpoints                   |

### Secondary Colors

| Name   | Hex       | Usage                                      |
| ------ | --------- | ------------------------------------------ |
| Green  | `#4a934f` | Success states, CTA buttons, highlights    |
| Gold   | `#ebbc59` | Accent borders, section titles, highlights |
| Orange | `#e0512c` | Secondary CTA, warnings, step indicators   |

### Neutral Colors

| Name       | Hex       | Usage                        |
| ---------- | --------- | ---------------------------- |
| Cream      | `#faf9f5` | Page backgrounds             |
| White      | `#ffffff` | Cards, content areas         |
| Gray       | `#5f666e` | Body text                    |
| Gray Light | `#7a99c1` | Secondary text, footer links |
| Border     | `#e2e8f0` | Card borders, dividers       |

### Extended Colors

| Name          | Hex       | Usage                     |
| ------------- | --------- | ------------------------- |
| Blue Alt      | `#2c4a92` | Thank you heading         |
| Blue Divider  | `#2C4A92` | Footer section divider    |
| Text Dark     | `#1a1d20` | Dark body text            |
| Hover Light   | `#f0f4f8` | Dropdown hover background |
| Success Light | `#ebf4ec` | Success badge background  |

---

## Typography

### Font Families

| Type    | Font                    | Usage                               |
| ------- | ----------------------- | ----------------------------------- |
| Heading | Barlow Condensed (700)  | All headings (h1-h6), step numbers  |
| Body    | EB Garamond (400, 400i) | Body text, descriptions, paragraphs |
| UI      | Outfit (600)            | Buttons, labels, badges             |

### Type Scale

| Name | Size | Line Height | Usage                |
| ---- | ---- | ----------- | -------------------- |
| 5xl  | 72px | 1.05        | Hero headlines       |
| 4xl  | 52px | 1.05        | Section titles       |
| 3xl  | 32px | 1.2         | Card titles          |
| 2xl  | 24px | 1.2         | Step numbers         |
| xl   | 20px | 1.5         | Large body text      |
| lg   | 18px | 1.5         | Card descriptions    |
| md   | 16px | 1.5         | Standard body        |
| base | 14px | 1.5         | UI text, labels      |
| sm   | 12px | 1.5         | Small text, captions |
| xs   | 11px | 1.5         | Badges, fine print   |

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

| Name | Value  | Usage            |
| ---- | ------ | ---------------- |
| sm   | 4px    | Small elements   |
| md   | 6px    | Buttons          |
| lg   | 12px   | Cards            |
| xl   | 24px   | Large containers |
| full | 9999px | Pills, avatars   |

---

## Shadows

| Name         | Value                                                          | Usage             |
| ------------ | -------------------------------------------------------------- | ----------------- |
| sm           | `0px 2px 5px rgba(0,0,0,0.04)`                                 | Cards (default)   |
| md           | `0px 4px 24px rgba(0,0,0,0.03)`                                | Medium elements   |
| lg           | `0px 10px 24px rgba(74,147,79,0.08)`                           | Highlighted cards |
| xl           | `0px 18px 24px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.06)` | Success card      |
| button       | `0px 6px 8px rgba(74,147,79,0.2)`                              | Primary buttons   |
| buttonOrange | `0px 6px 8px rgba(224,81,44,0.08)`                             | Secondary buttons |
| cardHover    | `0px 12px 28px rgba(0,0,0,0.12)`                               | Card hover state  |
| dropdown     | `0px 4px 16px rgba(0,0,0,0.12)`                                | Dropdown menus    |

---

## Components Catalog

### Layout Components

- [Header](#header)
- [Footer](#footer)

### Section Components

- [HowToInvest](#howtoinvest)
- [CommunitySection](#communitysection)

### Page Components

- [ThankYouPage](#thankyoupage)
- [LogoDownloadPage](#logodownloadpage)

### UI Components

- [Button](#button)
- [StepCard](#stepcard)
- [AnimatedSection](#animatedsection)

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

### AnimatedSection

**Purpose:** Wrapper component for scroll-triggered reveal animations.

**Props:**

| Prop        | Type                                          | Default | Description                          |
| ----------- | --------------------------------------------- | ------- | ------------------------------------ |
| direction   | "up" \| "down" \| "left" \| "right" \| "none" | "up"    | Animation direction                  |
| delay       | number                                        | 0       | Animation delay in ms                |
| mobileDelay | number                                        | delay   | Separate delay for mobile (< 1024px) |

**Tokens Used:**

- Duration: `animations.scrollReveal.duration` (600ms)
- Translate: `animations.scrollReveal.translateDistance` (30px)
- Easing: `animations.easing.easeOut`

---

### ThankYouPage

**Purpose:** Success/confirmation page after form submission.

**Features:**

- Centered card with staggered entrance animations
- Brand accent bar with scaleX animation
- Logo and "Received" badge
- Call-to-action button to return home

**Tokens Used:**

- Background: `neutral.cream` with SVG pattern
- Card: `neutral.white` with enhanced shadow
- Accent bar: `secondary.green`
- Badge background: `#ebf4ec` (light green)
- Heading: `#2c4a92` (blue variant)
- Button: `secondary.green`

---

### LogoDownloadPage

**Purpose:** Page for downloading brand logo in multiple formats.

**Features:**

- Centered logo display
- Dropdown menu with format options (SVG, PNG, JPG, GIF, BMP)
- Client-side SVG to raster conversion
- Loading state during conversion

**Tokens Used:**

- Background: `neutral.cream`
- Button: `primary.blue`
- Dropdown: `neutral.white` with `neutral.border`

---

### Footer

**Purpose:** Page footer with brand info, contact, legal links, and disclosures.

**Sections:**

1. Brand column with logo, tagline, and description
2. Contact column with address, email, phone
3. Legal column with links
4. Divider line
5. Disclosures and copyright

**Tokens Used:**

- Background: Gradient from `primary.blue` to `primary.blueDark`
- Text: `neutral.white`, `neutral.grayLight`
- Accent: `secondary.gold` (tagline)
- Divider: `#2C4A92`

---

### CommunitySection

**Purpose:** Community-focused messaging section with title and description.

**Layout:**

- Full-width cream background
- Centered heading and paragraph
- Uses AnimatedSection for entrance animations

**Tokens Used:**

- Background: `neutral.cream`
- Heading: `extended.blueAlt`, `typography.fontFamilies.heading`
- Body: `neutral.gray`, `typography.fontFamilies.body`

---

### Dropdown

**Purpose:** Reusable dropdown menu component with options.

**Features:**

- Click to toggle open/close
- Click outside to close
- Escape key to close
- Hover states on options
- Icon rotation animation on open

**Tokens Used:**

- Background: `neutral.white`
- Border: `neutral.border`
- Shadow: `shadows.dropdown`
- Hover: `extended.hoverLight`
- Text: `primary.blue`

---

## Backgrounds & Decorations

### Page Backgrounds

| Page          | Background                             | Notes                           |
| ------------- | -------------------------------------- | ------------------------------- |
| Splash        | `#faf9f5`                              | Solid cream                     |
| Thank You     | `url('/images/SuccessMessage-bg.svg')` | SVG pattern with cream fallback |
| Logo Download | `#faf9f5`                              | Solid cream                     |

### Section Backgrounds

| Section            | Background    | Gradient                                             |
| ------------------ | ------------- | ---------------------------------------------------- |
| Header             | `#faf9f5`     | None                                                 |
| How To Invest      | Navy gradient | `linear-gradient(to right, #1e3366 55.29%, #0f1b2d)` |
| How To Invest Card | `#11224d`     | None                                                 |
| Community          | `#faf9f5`     | None                                                 |
| Footer             | Navy gradient | `linear-gradient(to right, #1e3366 55%, #0f1b2d)`    |

### Decorative SVG Assets

| Asset              | Path                             | Usage                              |
| ------------------ | -------------------------------- | ---------------------------------- |
| Header BG          | `/images/header-bg.svg`          | Background pattern for header      |
| Header Decoration  | `/images/header-decoration.svg`  | Right-side decorative element      |
| Steps BG           | `/images/steps-bg.svg`           | Background for HowToInvest section |
| Chevron Decoration | `/images/chevron-decoration.svg` | Corner decoration on step cards    |
| Footer Line        | `/images/footer-line.svg`        | Decorative line in footer          |
| Success Message BG | `/images/SuccessMessage-bg.svg`  | Full-page background for ThankYou  |

### Icons

| Icon        | Path                           | Usage                     |
| ----------- | ------------------------------ | ------------------------- |
| File        | `/images/icon-file.svg`        | Step 1 - Review documents |
| Credit Card | `/images/icon-credit-card.svg` | Step 2 - Complete & Fund  |
| Phone       | `/images/icon-phone.svg`       | Step 3 - Schedule a call  |
| Check       | `/images/check-icon.svg`       | Success badge             |

### Brand Assets

| Asset       | Path                      | Usage                     |
| ----------- | ------------------------- | ------------------------- |
| Logo        | `/images/logo.svg`        | Main logo (header, pages) |
| Logo Footer | `/images/logo-footer.svg` | Smaller footer logo       |

---

## Animations & Transitions

### Animation Durations

| Name   | Value | Usage                            |
| ------ | ----- | -------------------------------- |
| fast   | 150ms | Hover states, micro-interactions |
| normal | 300ms | Default transitions              |
| slow   | 600ms | Scroll reveal animations         |
| slower | 700ms | Page entrance animations         |

### Easing Functions

| Name      | Value                                   | Usage                 |
| --------- | --------------------------------------- | --------------------- |
| easeOut   | ease-out                                | Standard animations   |
| easeInOut | ease-in-out                             | Reversible animations |
| spring    | cubic-bezier(0.175, 0.885, 0.32, 1.275) | Bouncy effects        |

### Scroll Reveal

Default settings for scroll-triggered animations:

- **Threshold:** 0.1 (10% visibility triggers animation)
- **Translate distance:** 30px
- **Duration:** 600ms
- **Stagger delay:** 150ms between items

### Entrance Animations

| Name      | Description                        |
| --------- | ---------------------------------- |
| fadeUp    | Fade in while moving up            |
| fadeDown  | Fade in while moving down          |
| fadeLeft  | Fade in while moving from right    |
| fadeRight | Fade in while moving from left     |
| scaleUp   | Fade in with slight scale increase |

### Hover Effects

| Name            | Effect                                |
| --------------- | ------------------------------------- |
| lift            | translateY(-8px) with enhanced shadow |
| colorTransition | Smooth color changes over 200ms       |

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

| Version | Date       | Changes                                                                        |
| ------- | ---------- | ------------------------------------------------------------------------------ |
| 1.1.0   | 2026-10-27 | Added animations, transitions, AnimatedSection, ThankYouPage, LogoDownloadPage |
| 1.0.0   | 2026-10-26 | Initial design system setup                                                    |
