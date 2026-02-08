"use client";

import { GraduationCap, Clock, Users, Star } from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import type { Program, UniversityTheme } from "@/lib/types";

interface CourseCardsProps {
  programs: Program[];
  theme: UniversityTheme;
}

export default function CourseCards({ programs, theme }: CourseCardsProps) {
  const { openModal } = useModal();

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Explore Our Top Online Degree Courses
          </h2>
          <p className="text-slate-500 mt-2">
            Industry-aligned programs for career advancement
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.name}
              className="rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className="h-32 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryLight} 0%, ${theme.primary}20 100%)`,
                }}
              >
                <GraduationCap
                  className="w-16 h-16"
                  style={{ color: theme.primary }}
                />
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-bold text-slate-800 text-base mb-2">
                  {program.name}
                </h3>
                <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    4.5 Rating
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    Enrolled
                  </span>
                </div>
                <button
                  onClick={openModal}
                  className="w-full py-2.5 rounded-xl text-white font-semibold text-sm transition"
                  style={{
                    background: `linear-gradient(to right, ${theme.ctaFrom}, ${theme.ctaTo})`,
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
