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
      navy: "#11224d",        // Primary dark navy - headers, primary text
      blue: "#1e3366",        // Primary blue - buttons, backgrounds
      blueDark: "#0f1b2d",    // Dark blue - gradients
    },
    
    // Secondary Brand Colors
    secondary: {
      green: "#4a934f",       // Success, highlights, step 2
      gold: "#ebbc59",        // Accent, borders, highlights
      orange: "#e0512c",      // CTA, step 3, warnings
    },
    
    // Neutral Colors
    neutral: {
      cream: "#faf9f5",       // Background
      white: "#ffffff",       // Cards, content areas
      gray: "#5f666e",        // Body text
      grayLight: "#7a99c1",   // Secondary text, footer links
      border: "#e2e8f0",      // Card borders
    },
    
    // Semantic Colors
    semantic: {
      success: "#4a934f",
      warning: "#ebbc59",
      error: "#e0512c",
      info: "#1e3366",
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
    button: "0px 6px 8px rgba(74, 147, 79, 0.2)",
    buttonOrange: "0px 6px 8px rgba(224, 81, 44, 0.08)",
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
} as const;

// Type exports for TypeScript support
export type Colors = typeof tokens.colors;
export type Typography = typeof tokens.typography;
export type Spacing = typeof tokens.spacing;
export type BorderRadius = typeof tokens.borderRadius;
export type Shadows = typeof tokens.shadows;
export type Breakpoints = typeof tokens.breakpoints;
export type ZIndex = typeof tokens.zIndex;
export type Tokens = typeof tokens;

export default tokens;
