/**
 * Maps approval shortName to accreditation logo path.
 * Logos from /public/images/accreditation/
 */
export const ACCREDITATION_LOGOS: Record<string, string> = {
  "UGC": "/images/accreditation/ugc entitled.png",
  "NAAC A": "/images/accreditation/naac-a.webp",
  "NAAC A+": "/images/accreditation/naac-a+.webp",
  "NAAC A++": "/images/accreditation/naac a++.png",
  "NIRF": "/images/accreditation/nirf.png",
  "AICTE": "/images/accreditation/aicte.png",
  "QS": "/images/accreditation/qs.png",
  "WES": "/images/accreditation/wes.webp",
};

export function getAccreditationLogo(shortName: string): string | undefined {
  return ACCREDITATION_LOGOS[shortName];
}
