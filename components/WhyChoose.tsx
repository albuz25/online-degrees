"use client";

import { CheckCircle2 } from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import type { WhyChooseItem, UniversityTheme } from "@/lib/types";

const DEFAULT_ITEMS: WhyChooseItem[] = [
  {
    title: "Globally Recognized Degree",
    description: "UGC-entitled degrees recognized for higher studies and global career mobility",
  },
  {
    title: "Industry-Relevant Curriculum",
    description: "Courseware designed with industry experts for real-world applicability",
  },
  {
    title: "Placement Assistance",
    description: "Dedicated career services team and placement drives with top companies",
  },
  {
    title: "Easy Financing Options",
    description: "EMI options, scholarships, and flexible payment plans available",
  },
  {
    title: "Flexible Schedule",
    description: "Learn at your own pace while balancing work and personal commitments",
  },
  {
    title: "Experienced Faculty",
    description: "Learn from faculty and mentors with real-world industry insights",
  },
  {
    title: "Alumni Network",
    description: "Access a large alumni network for career guidance and networking",
  },
  {
    title: "Live & Recorded Sessions",
    description: "Attend live lectures or watch recordings at your convenience",
  },
];

interface WhyChooseProps {
  shortName: string;
  title?: string;
  items?: WhyChooseItem[];
  theme: UniversityTheme;
}

export default function WhyChoose({
  shortName,
  title,
  items = DEFAULT_ITEMS,
  theme,
}: WhyChooseProps) {
  const { openModal } = useModal();

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            {title || `Why Choose ${shortName} Online`}
          </h2>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
            Globally recognised | Digitally advanced | Deeply personalised
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="w-6 h-6 shrink-0 mt-0.5"
                  style={{ color: theme.primary }}
                />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={openModal}
            className="text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg"
            style={{
              background: `linear-gradient(to right, ${theme.ctaFrom}, ${theme.ctaTo})`,
              boxShadow: `0 8px 20px ${theme.ctaShadow}`,
            }}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
