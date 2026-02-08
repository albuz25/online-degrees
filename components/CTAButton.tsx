"use client";

import { useModal } from "@/lib/ModalContext";
import type { UniversityTheme } from "@/lib/types";

interface CTAButtonProps {
  theme: UniversityTheme;
  label?: string;
}

export default function CTAButton({ theme, label = "Get Free Counseling" }: CTAButtonProps) {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-200"
      style={{
        background: `linear-gradient(to right, ${theme.ctaFrom}, ${theme.ctaTo})`,
        boxShadow: `0 8px 20px ${theme.ctaShadow}`,
      }}
    >
      {label}
    </button>
  );
}
