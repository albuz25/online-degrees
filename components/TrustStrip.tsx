import { CheckCircle } from "lucide-react";
import type { Approval, UniversityTheme } from "@/lib/types";

interface TrustStripProps {
  approvals: Approval[];
  theme: UniversityTheme;
}

export default function TrustStrip({ approvals, theme }: TrustStripProps) {
  return (
    <section
      className="border-y"
      style={{
        background: theme.stripBg,
        borderColor: theme.stripBorder,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:gap-x-6 md:gap-x-10 sm:gap-y-2">
          {approvals.map((approval, index) => (
            <div key={approval.shortName} className="flex items-center gap-1.5 sm:gap-2">
              {index > 0 && (
                <span
                  className="hidden md:block w-px h-5 -ml-3 md:-ml-5 mr-3 md:mr-5"
                  style={{ backgroundColor: theme.stripBorder }}
                />
              )}
              <CheckCircle
                className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                style={{ color: theme.stripIcon }}
              />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                {approval.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
