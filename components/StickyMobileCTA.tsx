"use client";

import { FileDown, MessageCircle } from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import type { UniversityTheme } from "@/lib/types";

interface StickyMobileCTAProps {
  whatsappNumber: string;
  universityName: string;
  theme: UniversityTheme;
}

export default function StickyMobileCTA({
  whatsappNumber,
  universityName,
  theme,
}: StickyMobileCTAProps) {
  const { openModal } = useModal();

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I am interested in online programs from ${universityName}. Please share more details.`
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom">
      <div className="flex">
        {/* Download Brochure */}
        <button
          onClick={openModal}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 sm:py-3.5 text-white font-semibold text-xs sm:text-sm active:opacity-90 transition"
          style={{
            background: `linear-gradient(to right, ${theme.ctaFrom}, ${theme.ctaTo})`,
          }}
        >
          <FileDown className="w-4 h-4 shrink-0" />
          <span>Get Brochure</span>
        </button>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 sm:py-3.5 bg-[#25D366] text-white font-semibold text-xs sm:text-sm active:bg-[#1da851] transition"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
