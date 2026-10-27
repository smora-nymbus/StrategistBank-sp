/**
 * Strategist Bank Design Tokens
 *
 * This file contains all design tokens for the Strategist Bank brand.
 * Use these tokens consistently across all components.
 */

export const tokens = {
  // ===================
  // COLORS
  // ===================
  colors: {
    // Primary Brand Colors
    primary: {
      navy: "#11224d", // Primary dark navy - headers, primary text
      blue: "#1e3366", // Primary blue - buttons, backgrounds
      blueDark: "#0f1b2d", // Dark blue - gradients
    },

    // Secondary Brand Colors
    secondary: {
      green: "#4a934f", // Success, highlights, step 2
      gold: "#ebbc59", // Accent, borders, highlights
      orange: "#e0512c", // CTA, step 3, warnings
    },

    // Neutral Colors
    neutral: {
      cream: "#faf9f5", // Background
      white: "#ffffff", // Cards, content areas
      gray: "#5f666e", // Body text
      grayLight: "#7a99c1", // Secondary text, footer links
      border: "#e2e8f0", // Card borders
    },

    // Semantic Colors
    semantic: {
      success: "#4a934f",
      successLight: "#ebf4ec",
      warning: "#ebbc59",
      error: "#e0512c",
      info: "#1e3366",
    },

    // Extended colors (discovered in components)
    extended: {
      blueAlt: "#2c4a92", // Thank you heading
      blueDivider: "#2C4A92", // Footer divider
      textDark: "#1a1d20", // Dark body text
      hoverLight: "#f0f4f8", // Dropdown hover state
    },
  },

  // ===================
  // TYPOGRAPHY
  // ===================
  typography: {
    fontFamilies: {
      heading: '"Barlow Condensed", sans-serif',
      body: '"EB Garamond", serif',
      ui: '"Outfit", sans-serif',
    },

    fontWeights: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },

    fontSizes: {
      xs: "11px",
      sm: "12px",
      base: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "52px",
      "5xl": "72px",
    },

    lineHeights: {
      tight: 1.05,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // ===================
  // SPACING
  // ===================
  spacing: {
    px: "1px",
    0: "0",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
  },

  // ===================
  // BORDER RADIUS
  // ===================
  borderRadius: {
    none: "0",
    sm: "4px",
    md: "6px",
    lg: "12px",
    xl: "24px",
    full: "9999px",
  },

  // ===================
  // SHADOWS
  // ===================
  shadows: {
    sm: "0px 2px 5px rgba(0, 0, 0, 0.04)",
    md: "0px 4px 24px rgba(0, 0, 0, 0.03)",
    lg: "0px 10px 24px rgba(74, 147, 79, 0.08), 0px 4px 24px rgba(0, 0, 0, 0.03)",
    xl: "0px 18px 24px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.06)",
    button: "0px 6px 8px rgba(74, 147, 79, 0.2)",
    buttonOrange: "0px 6px 8px rgba(224, 81, 44, 0.08)",
    cardHover: "0px 12px 28px rgba(0, 0, 0, 0.12)",
    dropdown: "0px 4px 16px rgba(0, 0, 0, 0.12)",
  },

  // ===================
  // BREAKPOINTS
  // ===================
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // ===================
  // Z-INDEX
  // ===================
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modal: 40,
    tooltip: 50,
  },

  // ===================
  // ANIMATIONS
  // ===================
  animations: {
    // Durations
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "600ms",
      slower: "700ms",
    },

    // Easing functions
    easing: {
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },

    // Scroll reveal defaults
    scrollReveal: {
      threshold: 0.1,
      translateDistance: "30px",
      duration: "600ms",
      staggerDelay: 150, // ms between staggered items
    },

    // Entrance animations
    entrance: {
      fadeUp: {
        from: { opacity: 0, transform: "translateY(30px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      fadeDown: {
        from: { opacity: 0, transform: "translateY(-30px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      fadeLeft: {
        from: { opacity: 0, transform: "translateX(30px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      fadeRight: {
        from: { opacity: 0, transform: "translateX(-30px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      scaleUp: {
        from: { opacity: 0, transform: "scale(0.98)" },
        to: { opacity: 1, transform: "scale(1)" },
      },
    },

    // Hover transitions
    hover: {
      lift: {
        transform: "translateY(-8px)",
        shadow: "0px 12px 28px rgba(0, 0, 0, 0.12)",
      },
      colorTransition: "background-color 0.2s ease, color 0.2s ease",
    },
  },

  // ===================
  // TRANSITIONS
  // ===================
  transitions: {
    default: "all 0.3s ease-out",
    colors:
      "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
    transform: "transform 0.3s ease-out",
    opacity: "opacity 0.3s ease-out",
  },

  // ===================
  // BACKGROUNDS & ASSETS
  // ===================
  backgrounds: {
    // Page backgrounds
    pages: {
      splash: "#faf9f5",
      thankYou: "url('/images/SuccessMessage-bg.svg')",
      logoDownload: "#faf9f5",
    },

    // Section backgrounds
    sections: {
      header: "#faf9f5",
      howToInvest: "linear-gradient(to right, #1e3366 55.29%, #0f1b2d)",
      howToInvestCard: "#11224d",
      community: "#faf9f5",
      footer: "linear-gradient(to right, #1e3366 55%, #0f1b2d)",
    },

    // Decorative SVG assets
    decorations: {
      headerBg: "/images/header-bg.svg",
      headerDecoration: "/images/header-decoration.svg",
      stepsBg: "/images/steps-bg.svg",
      chevronDecoration: "/images/chevron-decoration.svg",
      footerLine: "/images/footer-line.svg",
      successMessageBg: "/images/SuccessMessage-bg.svg",
    },
  },

  // ===================
  // ICONS
  // ===================
  icons: {
    stepIcons: {
      file: "/images/icon-file.svg",
      creditCard: "/images/icon-credit-card.svg",
      phone: "/images/icon-phone.svg",
    },
    ui: {
      check: "/images/check-icon.svg",
    },
    brand: {
      logo: "/images/logo.svg",
      logoFooter: "/images/logo-footer.svg",
    },
  },

  // ===================
  // GRADIENTS
  // ===================
  gradients: {
    footer: "linear-gradient(to right, #1e3366, #1e3366 55%, #0f1b2d)",
    howToInvest: "linear-gradient(to right, #1e3366 55.29%, #0f1b2d)",
  },
} as const;

// Type exports for TypeScript support
export type Colors = typeof tokens.colors;
export type Typography = typeof tokens.typography;
export type Spacing = typeof tokens.spacing;
export type BorderRadius = typeof tokens.borderRadius;
export type Shadows = typeof tokens.shadows;
export type Breakpoints = typeof tokens.breakpoints;
export type ZIndex = typeof tokens.zIndex;
export type Animations = typeof tokens.animations;
export type Transitions = typeof tokens.transitions;
export type Backgrounds = typeof tokens.backgrounds;
export type Icons = typeof tokens.icons;
export type Gradients = typeof tokens.gradients;
export type Tokens = typeof tokens;

export default tokens;
