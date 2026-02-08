"use client";

import Image from "next/image";
import { useModal } from "@/lib/ModalContext";

interface HeaderProps {
  universityName?: string;
  universityLogo?: string;
}

export default function Header({ universityName, universityLogo }: HeaderProps) {
  const { openModal } = useModal();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* University Logo */}
          <a href="/" className="flex items-center shrink-0 max-w-[55%] sm:max-w-none">
            {universityLogo ? (
              <Image
                src={universityLogo}
                alt={universityName || "University"}
                width={180}
                height={48}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                priority
              />
            ) : (
              <span className="font-bold text-slate-800 text-base sm:text-lg">
                pgdegrees<span className="text-[var(--theme-primary,#f97316)]">.online</span>
              </span>
            )}
          </a>

          {/* CTA Button */}
          <button
            onClick={openModal}
            className="text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-all duration-200 shadow-md shrink-0"
            style={{
              background: `linear-gradient(to right, var(--theme-cta-from, #f97316), var(--theme-cta-to, #ea580c))`,
              boxShadow: `0 4px 14px var(--theme-cta-shadow, rgba(249,115,22,0.25))`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(to right, var(--theme-cta-hover-from, #ea580c), var(--theme-cta-hover-to, #c2410c))`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(to right, var(--theme-cta-from, #f97316), var(--theme-cta-to, #ea580c))`;
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
