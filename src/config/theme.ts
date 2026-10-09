/**
 * WeOwnVision Color Theme Configuration
 * =====================================
 * This file is the single master source of truth for ALL website colors.
 * Every color, hover state, button style, border, and highlight is defined here.
 * 
 * Changing any value here instantly updates the whole website!
 */

export const themePalette = {
  // ================= 1. PAGE BACKGROUNDS =================
  bgBase: "#110e0dff",            // Main page background (Deep Espresso)
  bgSurface: "#191514ff",         // Card & navigation panel surface
  bgSurfaceElevated: "#231B18",  // Elevated surfaces & card hover background

  // ================= 2. TYPOGRAPHY =================
  textPrimary: "#F8EFE8",        // Headings & primary text (Warm Ivory)
  textSecondary: "#D6C5B8",      // Body paragraphs & descriptions (Warm Beige)
  textMuted: "#9E8C80",          // Micro-labels, dates & subtle tags (Taupe)
  textHover: "#FFFFFF",          // Hover state for titles, links & interactive text

  // ================= 3. BORDERS & DIVIDERS =================
  borderHairline: "rgba(230, 200, 183, 0.12)", // Default borders & separators
  borderStrong: "rgba(230, 200, 183, 0.28)",   // Interactive borders & card hover borders

  // ================= 4. PRIMARY BUTTON (NO GLOW) =================
  btnPrimaryBg: "#d7c3aeff",      // Button background
  btnPrimaryText: "#120E0C",     // Button text color
  btnPrimaryHoverBg: "#ebdcd0",  // Button hover background (smooth subtle tint)
  btnPrimaryHoverText: "#120E0C",// Button hover text color

  // ================= 5. SECONDARY BUTTON =================
  btnSecondaryBg: "rgba(230, 200, 183, 0.05)",          // Secondary button background
  btnSecondaryText: "#F8EFE8",                          // Secondary button text
  btnSecondaryHoverBg: "rgba(230, 200, 183, 0.12)",     // Secondary button hover background
  btnSecondaryHoverText: "#FFFFFF",                     // Secondary button hover text
  btnSecondaryBorder: "rgba(230, 200, 183, 0.12)",      // Secondary button border
  btnSecondaryHoverBorder: "rgba(230, 200, 183, 0.28)", // Secondary button hover border

  // ================= 6. ACCENTS & HIGHLIGHTS =================
  accentAmber: "#d7c3aeff",      // Primary accent (roadmap label, dots, highlights)
  accentCognac: "#b99368ff",     // Sub-accent (member roles, badges)
  accentHover: "#ebdcd0",        // Accent link & icon hover color

  // ================= 7. INTERACTIVE & SYSTEM =================
  selectionBg: "#d7c3aeff",      // Text selection highlight background
  selectionText: "#120E0C",      // Text selection text color
  scrollbarThumb: "#2D221F",     // Scrollbar thumb color
  scrollbarThumbHover: "#3E302B",// Scrollbar thumb hover color
};

export type ThemePalette = typeof themePalette;
