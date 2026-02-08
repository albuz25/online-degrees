import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getUniversityBySlug,
  getAllUniversitySlugs,
} from "@/data/universities";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroWithForm from "@/components/HeroWithForm";
import TrustStrip from "@/components/TrustStrip";
import StatsStrip from "@/components/StatsStrip";
import FeaturesSection from "@/components/FeaturesSection";
import AccreditationCarousel from "@/components/AccreditationCarousel";
import ProgramHighlights from "@/components/ProgramHighlights";
import CourseCards from "@/components/CourseCards";
import WhyChoose from "@/components/WhyChoose";
import TestimonialsSection from "@/components/TestimonialsSection";
import TabbedDetails from "@/components/TabbedDetails";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LeadFormModal from "@/components/LeadFormModal";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";

// ── Static Generation ─────────────────────────────────────────────
export function generateStaticParams() {
  return getAllUniversitySlugs().map((slug) => ({ university: slug }));
}

// ── Dynamic Metadata ──────────────────────────────────────────────
export function generateMetadata({
  params,
}: {
  params: { university: string };
}): Metadata {
  const uni = getUniversityBySlug(params.university);
  if (!uni) {
    return {
      title: "University Not Found | pgdegrees.online",
    };
  }
  return {
    title: uni.metaTitle,
    description: uni.metaDescription,
    openGraph: {
      title: uni.metaTitle,
      description: uni.metaDescription,
      type: "website",
      siteName: "pgdegrees.online",
    },
  };
}

// ── Page Component ────────────────────────────────────────────────
export default function UniversityPage({
  params,
}: {
  params: { university: string };
}) {
  const university = getUniversityBySlug(params.university);

  if (!university) {
    notFound();
  }

  const t = university.theme;

  return (
    <ThemeProvider theme={t}>
      <Header
        universityName={university.shortName}
        universityLogo={university.logo}
      />

      <main>
        <HeroWithForm university={university} />
        <TrustStrip approvals={university.approvals} theme={t} />
        <StatsStrip highlights={university.highlights} theme={t} />

        <FeaturesSection features={university.features} theme={t} />
        <AccreditationCarousel approvals={university.approvals} theme={t} />
        <ProgramHighlights highlights={university.programHighlights} theme={t} />
        <CourseCards programs={university.programs} theme={t} />

        {/* CTA Banner */}
        <section
          className="py-8 sm:py-10 md:py-14"
          style={{
            background: `linear-gradient(to right, ${t.heroFrom}, ${t.heroTo})`,
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
              Ready to advance your career with{" "}
              <span style={{ color: t.accentText }}>{university.shortName}</span>?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 max-w-lg mx-auto">
              Get personalized guidance from our expert counselors. We&apos;ll help
              you choose the right program and navigate the admission process.
            </p>
            <CTAButton theme={t} />
          </div>
        </section>

        <WhyChoose
          shortName={university.shortName}
          items={university.whyChoose}
          theme={t}
        />
        <TestimonialsSection testimonials={university.testimonials} theme={t} />
        <TabbedDetails university={university} />
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <StickyMobileCTA
        whatsappNumber={university.whatsappNumber}
        universityName={university.displayName}
        theme={t}
      />

      {/* Lead Form Modal */}
      <LeadFormModal
        programs={university.programs}
        universitySlug={university.slug}
        universityName={university.displayName}
        theme={t}
      />
    </ThemeProvider>
  );
}
