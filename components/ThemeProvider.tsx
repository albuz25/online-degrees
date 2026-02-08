"use client";

import { ReactNode } from "react";
import type { UniversityTheme } from "@/lib/types";

interface ThemeProviderProps {
  theme: UniversityTheme;
  children: ReactNode;
}

/**
 * Sets CSS custom properties on a wrapper div so all children
 * can reference the university's brand colors via var(--theme-*).
 */
export default function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <div
      style={{
        "--theme-primary": theme.primary,
        "--theme-primary-light": theme.primaryLight,
        "--theme-primary-dark": theme.primaryDark,
        "--theme-hero-from": theme.heroFrom,
        "--theme-hero-to": theme.heroTo,
        "--theme-cta-from": theme.ctaFrom,
        "--theme-cta-to": theme.ctaTo,
        "--theme-cta-hover-from": theme.ctaHoverFrom,
        "--theme-cta-hover-to": theme.ctaHoverTo,
        "--theme-cta-shadow": theme.ctaShadow,
        "--theme-accent-text": theme.accentText,
        "--theme-accent-text-end": theme.accentTextEnd,
        "--theme-strip-icon": theme.stripIcon,
        "--theme-strip-border": theme.stripBorder,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
