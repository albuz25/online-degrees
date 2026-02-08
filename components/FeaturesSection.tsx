"use client";

import { Laptop, Headphones, Award, Briefcase } from "lucide-react";
import type { FeatureItem, UniversityTheme } from "@/lib/types";

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    icon: "laptop",
    title: "100% Online Learning",
    description: "Study from anywhere, anytime at your own pace",
  },
  {
    icon: "headphones",
    title: "24x7 Student Support",
    description: "Get help whenever you need it",
  },
  {
    icon: "award",
    title: "UGC Approved",
    description: "Globally recognized degrees",
  },
  {
    icon: "briefcase",
    title: "Job Assistance",
    description: "Career support and placement",
  },
];

const iconMap = {
  laptop: Laptop,
  headphones: Headphones,
  award: Award,
  briefcase: Briefcase,
};

interface FeaturesSectionProps {
  features?: FeatureItem[];
  theme: UniversityTheme;
}

export default function FeaturesSection({ features = DEFAULT_FEATURES, theme }: FeaturesSectionProps) {
  return (
    <section className="py-10 sm:py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Laptop;
            return (
              <div
                key={i}
                className="text-center p-5 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
