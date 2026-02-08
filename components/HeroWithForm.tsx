"use client";

import { GraduationCap, CheckCircle, Users, Award } from "lucide-react";
import LeadForm from "./LeadForm";
import type { University } from "@/lib/types";

interface HeroWithFormProps {
  university: University;
}

export default function HeroWithForm({ university }: HeroWithFormProps) {
  const t = university.theme;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${t.heroFrom} 0%, ${t.heroTo} 50%, ${t.heroFrom} 100%)`,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.15) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs - hidden on small mobile to save paint */}
      <div
        className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 hidden sm:block"
        style={{ backgroundColor: `${t.ctaFrom}15` }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 hidden sm:block"
        style={{ backgroundColor: `${t.primary}20` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ── Left Side: Content ─────────────────────────────── */}
          <div className="text-white">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5 border"
              style={{
                backgroundColor: `${t.ctaFrom}20`,
                borderColor: `${t.ctaFrom}40`,
                color: t.accentText,
              }}
            >
              <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Admissions Open 2025-26
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
              Online Degree from{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to right, ${t.accentText}, ${t.accentTextEnd})`,
                }}
              >
                {university.shortName}
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 max-w-xl">
              {university.description.length > 160
                ? university.description.slice(0, 160) + "..."
                : university.description}
            </p>

            {/* Approval Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              {university.approvals.slice(0, 4).map((approval) => (
                <div
                  key={approval.shortName}
                  className="flex items-center gap-1 sm:gap-1.5 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 shrink-0" />
                  <span className="text-white/90 font-medium">
                    {approval.shortName}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Stats - hidden on mobile to reduce clutter above form */}
            <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-4">
              {university.highlights.map((highlight) => (
                <div key={highlight.label} className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {highlight.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Side: Form ───────────────────────────────── */}
          <div className="lg:pl-4">
            <div className="relative">
              {/* Social proof badge */}
              <div className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3">
                <div
                  className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border"
                  style={{
                    backgroundColor: "rgba(34,197,94,0.15)",
                    borderColor: "rgba(34,197,94,0.3)",
                    color: "#86efac",
                  }}
                >
                  <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Join {university.highlights[1]?.value || "50,000+"} Learners
                </div>
              </div>

              <LeadForm
                programs={university.programs}
                universitySlug={university.slug}
                heading="Get Free Counseling"
                subheading={`Expert guidance for ${university.shortName} admissions`}
                theme={university.theme}
              />

              {/* Below form nudge */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2.5 sm:mt-3 text-slate-400 text-[11px] sm:text-xs">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>
                  Fees starting at {university.feeStart} | EMI Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
