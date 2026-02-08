"use client";

import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";
import type { Highlight, UniversityTheme } from "@/lib/types";

interface StatsStripProps {
  highlights: Highlight[];
  theme: UniversityTheme;
}

const icons = [
  <Trophy key="trophy" className="w-5 h-5 sm:w-7 sm:h-7" />,
  <Users key="users" className="w-5 h-5 sm:w-7 sm:h-7" />,
  <BookOpen key="book" className="w-5 h-5 sm:w-7 sm:h-7" />,
  <GraduationCap key="grad" className="w-5 h-5 sm:w-7 sm:h-7" />,
];

export default function StatsStrip({ highlights, theme }: StatsStripProps) {
  return (
    <section className="py-6 sm:py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.label}
              className="text-center p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300 group"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = theme.primaryLight;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundColor: theme.primaryLight,
                  color: theme.primary,
                }}
              >
                {icons[index % icons.length]}
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-800">
                {highlight.value}
              </div>
              <div className="text-[11px] sm:text-sm text-slate-500 mt-0.5 sm:mt-1">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
