import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { getAccreditationLogo } from "@/lib/accreditation";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-4">
          {approvals.map((approval) => {
            const logoPath = getAccreditationLogo(approval.shortName);
            return (
              <div
                key={approval.shortName}
                className="flex flex-col items-center gap-2 min-w-[64px]"
              >
                {logoPath ? (
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                    <Image
                      src={logoPath}
                      alt={approval.shortName}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: theme.primaryLight, color: theme.stripIcon }}
                  >
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                )}
                <span className="text-[10px] sm:text-xs font-semibold text-slate-700 text-center leading-tight">
                  {approval.shortName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
