export interface Approval {
  name: string;
  shortName: string;
  description: string;
  icon?: string; // path to badge image
}

export interface Highlight {
  label: string;
  value: string;
  icon?: string;
}

export interface Program {
  name: string;
  duration: string;
  fee: string;
  specializations?: string[];
  eligibility?: string;
}

export interface PlacementPartner {
  name: string;
  logo?: string;
}

export interface Testimonial {
  name: string;
  program: string;
  quote: string;
  image?: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SyllabusItem {
  semester: string;
  subjects: string[];
}

export interface UniversityTheme {
  /** Main brand color hex (e.g. "#1A325D") */
  primary: string;
  /** Lighter tint for subtle backgrounds */
  primaryLight: string;
  /** Darker shade for hover states */
  primaryDark: string;
  /** Hero section gradient start */
  heroFrom: string;
  /** Hero section gradient end */
  heroTo: string;
  /** CTA button gradient start */
  ctaFrom: string;
  /** CTA button gradient end */
  ctaTo: string;
  /** CTA button hover gradient start */
  ctaHoverFrom: string;
  /** CTA button hover gradient end */
  ctaHoverTo: string;
  /** CTA shadow color with alpha */
  ctaShadow: string;
  /** Accent color for highlights text (gradient or solid) */
  accentText: string;
  /** Secondary accent (for the gradient end if needed) */
  accentTextEnd: string;
  /** Trust strip / light bar background */
  stripBg: string;
  /** Trust strip border */
  stripBorder: string;
  /** Trust strip icon color */
  stripIcon: string;
}

export interface University {
  slug: string;
  displayName: string;
  shortName: string;
  heroImage: string;
  logo: string;
  feeStart: string;
  approvals: Approval[];
  description: string;
  highlights: Highlight[];
  programs: Program[];
  placements: PlacementPartner[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  syllabus: SyllabusItem[];
  brochureLink: string;
  whatsappNumber: string;
  phoneNumber: string;
  metaTitle: string;
  metaDescription: string;
  theme: UniversityTheme;
}

export interface LeadFormData {
  name: string;
  email: string;
  mobile: string;
  course: string;
  state: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Chandigarh",
  "Puducherry",
] as const;
