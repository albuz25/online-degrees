"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import LeadForm from "./LeadForm";
import type { Program, UniversityTheme } from "@/lib/types";

interface LeadFormModalProps {
  programs: Program[];
  universitySlug: string;
  universityName: string;
  theme: UniversityTheme;
}

export default function LeadFormModal({
  programs,
  universitySlug,
  universityName,
  theme,
}: LeadFormModalProps) {
  const { isModalOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full sm:max-w-md animate-slideUp max-h-[92vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 sm:-top-3 sm:-right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 transition"
          aria-label="Close"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
        </button>

        {/* Modal Header */}
        <div
          className="text-white text-center py-2.5 sm:py-3 px-4 rounded-t-2xl"
          style={{
            background: `linear-gradient(to right, ${theme.ctaFrom}, ${theme.ctaTo})`,
          }}
        >
          <p className="text-xs sm:text-sm font-medium opacity-90 pr-6 sm:pr-0">
            {universityName}
          </p>
          <p className="text-[10px] sm:text-xs opacity-75 mt-0.5">
            Get complete details on fees, syllabus & admission process
          </p>
        </div>

        {/* Form */}
        <div className="rounded-b-2xl overflow-hidden">
          <LeadForm
            programs={programs}
            universitySlug={universitySlug}
            heading="Enquire Now"
            subheading="Our counselor will call you within 30 minutes"
            compact
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}
