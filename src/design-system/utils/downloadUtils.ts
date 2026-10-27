import { tokens } from "../tokens";

/**
 * Generate tokens as a downloadable JSON file
 */
export function generateTokensJSON(): string {
  return JSON.stringify(tokens, null, 2);
}

/**
 * Generate tokens as CSS custom properties
 */
export function generateTokensCSS(): string {
  const lines: string[] = [
    "/* Strategist Bank Design Tokens */",
    "/* Generated from tokens.ts */",
    "",
    ":root {",
  ];

  // Colors
  lines.push("  /* Primary Colors */");
  Object.entries(tokens.colors.primary).forEach(([key, value]) => {
    lines.push(`  --color-primary-${kebabCase(key)}: ${value};`);
  });

  lines.push("");
  lines.push("  /* Secondary Colors */");
  Object.entries(tokens.colors.secondary).forEach(([key, value]) => {
    lines.push(`  --color-secondary-${kebabCase(key)}: ${value};`);
  });

  lines.push("");
  lines.push("  /* Neutral Colors */");
  Object.entries(tokens.colors.neutral).forEach(([key, value]) => {
    lines.push(`  --color-neutral-${kebabCase(key)}: ${value};`);
  });

  lines.push("");
  lines.push("  /* Semantic Colors */");
  Object.entries(tokens.colors.semantic).forEach(([key, value]) => {
    lines.push(`  --color-${key}: ${value};`);
  });

  // Typography
  lines.push("");
  lines.push("  /* Font Families */");
  Object.entries(tokens.typography.fontFamilies).forEach(([key, value]) => {
    lines.push(`  --font-${key}: ${value};`);
  });

  lines.push("");
  lines.push("  /* Font Sizes */");
  Object.entries(tokens.typography.fontSizes).forEach(([key, value]) => {
    lines.push(`  --font-size-${key}: ${value};`);
  });

  lines.push("");
  lines.push("  /* Font Weights */");
  Object.entries(tokens.typography.fontWeights).forEach(([key, value]) => {
    lines.push(`  --font-weight-${key}: ${value};`);
  });

  lines.push("");
  lines.push("  /* Line Heights */");
  Object.entries(tokens.typography.lineHeights).forEach(([key, value]) => {
    lines.push(`  --line-height-${key}: ${value};`);
  });

  // Spacing
  lines.push("");
  lines.push("  /* Spacing */");
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    lines.push(`  --spacing-${key}: ${value};`);
  });

  // Border Radius
  lines.push("");
  lines.push("  /* Border Radius */");
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    lines.push(`  --radius-${key}: ${value};`);
  });

  // Shadows
  lines.push("");
  lines.push("  /* Shadows */");
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    lines.push(`  --shadow-${key}: ${value};`);
  });

  // Breakpoints
  lines.push("");
  lines.push("  /* Breakpoints */");
  Object.entries(tokens.breakpoints).forEach(([key, value]) => {
    lines.push(`  --breakpoint-${key}: ${value};`);
  });

  // Z-Index
  lines.push("");
  lines.push("  /* Z-Index */");
  Object.entries(tokens.zIndex).forEach(([key, value]) => {
    lines.push(`  --z-${key}: ${value};`);
  });

  // Animation Durations
  lines.push("");
  lines.push("  /* Animation Durations */");
  Object.entries(tokens.animations.duration).forEach(([key, value]) => {
    lines.push(`  --duration-${key}: ${value};`);
  });

  // Transitions
  lines.push("");
  lines.push("  /* Transitions */");
  Object.entries(tokens.transitions).forEach(([key, value]) => {
    lines.push(`  --transition-${key}: ${value};`);
  });

  // Backgrounds
  lines.push("");
  lines.push("  /* Page Backgrounds */");
  Object.entries(tokens.backgrounds.pages).forEach(([key, value]) => {
    lines.push(`  --bg-page-${kebabCase(key)}: ${value};`);
  });

  lines.push("");
  lines.push("  /* Section Backgrounds */");
  Object.entries(tokens.backgrounds.sections).forEach(([key, value]) => {
    lines.push(`  --bg-section-${kebabCase(key)}: ${value};`);
  });

  // Gradients
  lines.push("");
  lines.push("  /* Gradients */");
  Object.entries(tokens.gradients).forEach(([key, value]) => {
    lines.push(`  --gradient-${kebabCase(key)}: ${value};`);
  });

  lines.push("}");

  return lines.join("\n");
}

/**
 * Generate tokens as SCSS variables
 */
export function generateTokensSCSS(): string {
  const lines: string[] = [
    "// Strategist Bank Design Tokens",
    "// Generated from tokens.ts",
    "",
  ];

  // Colors
  lines.push("// Primary Colors");
  Object.entries(tokens.colors.primary).forEach(([key, value]) => {
    lines.push(`$color-primary-${kebabCase(key)}: ${value};`);
  });

  lines.push("");
  lines.push("// Secondary Colors");
  Object.entries(tokens.colors.secondary).forEach(([key, value]) => {
    lines.push(`$color-secondary-${kebabCase(key)}: ${value};`);
  });

  lines.push("");
  lines.push("// Neutral Colors");
  Object.entries(tokens.colors.neutral).forEach(([key, value]) => {
    lines.push(`$color-neutral-${kebabCase(key)}: ${value};`);
  });

  lines.push("");
  lines.push("// Semantic Colors");
  Object.entries(tokens.colors.semantic).forEach(([key, value]) => {
    lines.push(`$color-${key}: ${value};`);
  });

  // Typography
  lines.push("");
  lines.push("// Font Families");
  Object.entries(tokens.typography.fontFamilies).forEach(([key, value]) => {
    lines.push(`$font-${key}: ${value};`);
  });

  lines.push("");
  lines.push("// Font Sizes");
  Object.entries(tokens.typography.fontSizes).forEach(([key, value]) => {
    lines.push(`$font-size-${key}: ${value};`);
  });

  lines.push("");
  lines.push("// Font Weights");
  Object.entries(tokens.typography.fontWeights).forEach(([key, value]) => {
    lines.push(`$font-weight-${key}: ${value};`);
  });

  // Spacing
  lines.push("");
  lines.push("// Spacing");
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    lines.push(`$spacing-${key}: ${value};`);
  });

  // Border Radius
  lines.push("");
  lines.push("// Border Radius");
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    lines.push(`$radius-${key}: ${value};`);
  });

  // Shadows
  lines.push("");
  lines.push("// Shadows");
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    lines.push(`$shadow-${key}: ${value};`);
  });

  // Breakpoints
  lines.push("");
  lines.push("// Breakpoints");
  Object.entries(tokens.breakpoints).forEach(([key, value]) => {
    lines.push(`$breakpoint-${key}: ${value};`);
  });

  // Animation Durations
  lines.push("");
  lines.push("// Animation Durations");
  Object.entries(tokens.animations.duration).forEach(([key, value]) => {
    lines.push(`$duration-${key}: ${value};`);
  });

  return lines.join("\n");
}

/**
 * Trigger file download in browser
 */
export function downloadFile(
  content: string,
  filename: string,
  mimeType: string,
): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download all design system files as a zip
 * Note: Requires JSZip library for full implementation
 * For now, downloads files individually
 */
export async function downloadDesignSystemBundle(): Promise<void> {
  // Download tokens in various formats
  downloadFile(
    generateTokensJSON(),
    "strategist-bank-tokens.json",
    "application/json",
  );

  // Small delay between downloads to prevent browser blocking
  await new Promise((resolve) => setTimeout(resolve, 500));
  downloadFile(generateTokensCSS(), "strategist-bank-tokens.css", "text/css");

  await new Promise((resolve) => setTimeout(resolve, 500));
  downloadFile(
    generateTokensSCSS(),
    "strategist-bank-tokens.scss",
    "text/plain",
  );
}

// Helper function to convert camelCase to kebab-case
function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
