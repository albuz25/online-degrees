"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { getAccreditationLogo } from "@/lib/accreditation";
import type { Approval, UniversityTheme } from "@/lib/types";

interface AccreditationCarouselProps {
  approvals: Approval[];
  theme: UniversityTheme;
}

export default function AccreditationCarousel({ approvals, theme }: AccreditationCarouselProps) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Rankings & Accreditations
          </h2>
          <p className="text-slate-500 mt-2">
            Endorsements of academic quality & excellence
          </p>
        </div>
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-4 sm:gap-6 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
            {approvals.map((approval) => {
              const logoPath = getAccreditationLogo(approval.shortName);
              return (
                <div
                  key={approval.shortName}
                  className="flex-shrink-0 w-[140px] sm:w-[160px] p-5 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col items-center text-center"
                >
                  {logoPath ? (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 shrink-0">
                      <Image
                        src={logoPath}
                        alt={approval.shortName}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center mb-3 shrink-0"
                      style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                    >
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                  )}
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                    {approval.shortName}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {approval.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
