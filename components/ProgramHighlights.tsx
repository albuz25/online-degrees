"use client";

import { Sparkles, BookOpen, User, FolderKanban } from "lucide-react";
import type { ProgramHighlight, UniversityTheme } from "@/lib/types";

const DEFAULT_HIGHLIGHTS: ProgramHighlight[] = [
  {
    title: "Emerging Specializations",
    description: "New-age specializations shaping tomorrow's business landscape",
  },
  {
    title: "Robust Learning Model",
    description: "550+ hours of video lectures to maximize your learning",
  },
  {
    title: "Personalized Learning",
    description: "Choice-based credit system for a tailored learning path",
  },
  {
    title: "Real World Projects",
    description: "Case studies and projects to succeed in your domain",
  },
];

const icons = [Sparkles, BookOpen, User, FolderKanban];

interface ProgramHighlightsProps {
  title?: string;
  subtitle?: string;
  highlights?: ProgramHighlight[];
  theme: UniversityTheme;
}

export default function ProgramHighlights({
  title = "Program Highlights & Advantages",
  subtitle = "Discover our online degree programs and begin an exciting educational journey",
  highlights = DEFAULT_HIGHLIGHTS,
  theme,
}: ProgramHighlightsProps) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            {title}
          </h2>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
