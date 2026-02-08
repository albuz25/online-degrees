"use client";

import { useState } from "react";
import {
  Info,
  IndianRupee,
  BookOpen,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Clock,
  GraduationCap,
} from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import type { University } from "@/lib/types";

interface TabbedDetailsProps {
  university: University;
}

const tabs = [
  { id: "about", label: "About", icon: Info },
  { id: "fees", label: "Fees", icon: IndianRupee },
  { id: "syllabus", label: "Syllabus", icon: BookOpen },
  { id: "placement", label: "Placement", icon: Briefcase },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function TabbedDetails({ university }: TabbedDetailsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [expandedSemester, setExpandedSemester] = useState<string | null>(
    university.syllabus[0]?.semester ?? null
  );
  const { openModal } = useModal();
  const t = university.theme;

  const ctaBtnStyle: React.CSSProperties = {
    background: `linear-gradient(to right, ${t.ctaFrom}, ${t.ctaTo})`,
    boxShadow: `0 4px 14px ${t.ctaShadow}`,
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
            Explore{" "}
            <span style={{ color: t.primary }}>{university.shortName}</span>{" "}
            Online Programs
          </h2>
          <p className="text-slate-500 mt-1.5 sm:mt-2 text-sm sm:text-base">
            Everything you need to know before enrolling
          </p>
        </div>

        {/* Tab Navigation - full-width scrollable on mobile */}
        <div className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto no-scrollbar border-b border-slate-200 mb-6 sm:mb-8">
          <div className="flex min-w-max sm:min-w-0 sm:justify-center gap-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200"
                  style={
                    isActive
                      ? { borderColor: t.primary, color: t.primary, backgroundColor: `${t.primaryLight}80` }
                      : { borderColor: "transparent", color: "#64748b" }
                  }
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* ── About Tab ──────────────────────────────────────── */}
          {activeTab === "about" && (
            <div className="animate-fadeIn">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {university.description}
                </p>
              </div>

              {/* Programs Grid */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">
                  Programs Offered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {university.programs.map((program) => (
                    <div
                      key={program.name}
                      className="border border-slate-200 rounded-xl p-3.5 sm:p-4 hover:shadow-md transition-all duration-200 group"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = t.primaryLight;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "";
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition"
                          style={{ backgroundColor: t.primaryLight, color: t.primary }}
                        >
                          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-slate-800 text-sm">
                            {program.name}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5 sm:mt-1">
                            <Clock className="w-3 h-3 shrink-0" />
                            {program.duration}
                          </div>
                          {program.eligibility && (
                            <p className="text-xs text-slate-400 mt-0.5 sm:mt-1 truncate">
                              {program.eligibility}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {university.faqs.length > 0 && (
                <div className="mt-8 sm:mt-10">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-2.5 sm:space-y-3">
                    {university.faqs.map((faq, i) => (
                      <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Fees Tab ───────────────────────────────────────── */}
          {activeTab === "fees" && (
            <div className="animate-fadeIn">
              {/* Mobile: Card layout. Desktop: Table layout */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: t.primaryLight }}>
                      <th className="text-left px-5 py-3.5 text-sm font-semibold text-slate-700 rounded-tl-xl">
                        Program
                      </th>
                      <th className="text-left px-5 py-3.5 text-sm font-semibold text-slate-700">
                        Duration
                      </th>
                      <th className="text-left px-5 py-3.5 text-sm font-semibold text-slate-700 rounded-tr-xl">
                        Fee Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {university.programs.map((program, i) => (
                      <tr
                        key={program.name}
                        className={`border-b border-slate-100 ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        }`}
                      >
                        <td className="px-5 py-4">
                          <div className="font-medium text-slate-800 text-sm">
                            {program.name}
                          </div>
                          {program.specializations && program.specializations.length > 0 && (
                            <div className="text-xs text-slate-400 mt-1">
                              {program.specializations.length} specializations
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-600">
                          {program.duration}
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-sm font-semibold" style={{ color: t.primary }}>
                            {program.fee}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile: Fee cards */}
              <div className="sm:hidden space-y-3">
                {university.programs.map((program) => (
                  <div
                    key={program.name}
                    className="border border-slate-200 rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-800 text-sm">
                          {program.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {program.duration}
                          {program.specializations && program.specializations.length > 0 && (
                            <> &middot; {program.specializations.length} specializations</>
                          )}
                        </p>
                      </div>
                      <span className="text-sm font-bold shrink-0" style={{ color: t.primary }}>
                        {program.fee}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-5 sm:mt-6 border rounded-xl p-4 sm:p-5 text-center"
                style={{ background: t.stripBg, borderColor: t.stripBorder }}
              >
                <p className="text-sm text-slate-600 mb-3">
                  Want detailed fee breakdown with EMI options?
                </p>
                <button
                  onClick={openModal}
                  className="text-white text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-xl transition w-full sm:w-auto"
                  style={ctaBtnStyle}
                >
                  Download Fee Structure
                </button>
              </div>
            </div>
          )}

          {/* ── Syllabus Tab ──────────────────────────────────── */}
          {activeTab === "syllabus" && (
            <div className="animate-fadeIn">
              {university.syllabus.length > 0 ? (
                <div className="space-y-2.5 sm:space-y-3">
                  {university.syllabus.map((item) => (
                    <div
                      key={item.semester}
                      className="border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedSemester(
                            expandedSemester === item.semester ? null : item.semester
                          )
                        }
                        className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 text-left hover:bg-slate-50 transition"
                      >
                        <span className="font-semibold text-slate-800 text-sm">
                          {item.semester}
                        </span>
                        {expandedSemester === item.semester ? (
                          <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {expandedSemester === item.semester && (
                        <div className="px-4 sm:px-5 pb-3.5 sm:pb-4 border-t border-slate-100">
                          <ul className="space-y-2 mt-3">
                            {item.subjects.map((subject) => (
                              <li
                                key={subject}
                                className="flex items-start gap-2 text-sm text-slate-600"
                              >
                                <BookOpen className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: t.ctaFrom }} />
                                <span>{subject}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 sm:py-10">
                  <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-500 mb-4 text-sm sm:text-base">
                    Detailed syllabus available on request
                  </p>
                  <button
                    onClick={openModal}
                    className="text-white text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-xl transition w-full sm:w-auto"
                    style={ctaBtnStyle}
                  >
                    Download Syllabus
                  </button>
                </div>
              )}

              {university.syllabus.length > 0 && (
                <div
                  className="mt-5 sm:mt-6 border rounded-xl p-4 sm:p-5 text-center"
                  style={{ background: t.stripBg, borderColor: t.stripBorder }}
                >
                  <p className="text-sm text-slate-600 mb-3">
                    Get complete semester-wise syllabus with elective details
                  </p>
                  <button
                    onClick={openModal}
                    className="text-white text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-xl transition w-full sm:w-auto"
                    style={ctaBtnStyle}
                  >
                    Download Full Syllabus
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── Placement Tab ─────────────────────────────────── */}
          {activeTab === "placement" && (
            <div className="animate-fadeIn">
              {/* Placement Partners */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">
                  Top Recruiting Partners
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
                  {university.placements.map((partner) => (
                    <div
                      key={partner.name}
                      className="border border-slate-200 rounded-xl p-3 sm:p-4 flex items-center justify-center h-16 sm:h-20 hover:shadow-sm transition"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = t.primaryLight;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "";
                      }}
                    >
                      <span className="text-xs font-semibold text-slate-600 text-center">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              {university.testimonials.length > 0 && (
                <div className="mt-8 sm:mt-10">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">
                    What Our Students Say
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                    {university.testimonials.map((testimonial, i) => (
                      <div
                        key={i}
                        className="border border-slate-200 rounded-xl p-4 sm:p-5 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-1 mb-2.5 sm:mb-3">
                          {Array.from({ length: testimonial.rating || 5 }).map((_, j) => (
                            <svg
                              key={j}
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-slate-500">{testimonial.program}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Placement CTA */}
              <div
                className="mt-6 sm:mt-8 border rounded-xl p-4 sm:p-5 text-center"
                style={{ background: t.stripBg, borderColor: t.stripBorder }}
              >
                <p className="text-sm text-slate-600 mb-3">
                  Get complete placement report and recruiter list
                </p>
                <button
                  onClick={openModal}
                  className="text-white text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-xl transition w-full sm:w-auto"
                  style={ctaBtnStyle}
                >
                  Download Placement Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── FAQ Accordion Item ─────────────────────────────────────────────
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 text-left hover:bg-slate-50 transition gap-3"
      >
        <span className="font-medium text-slate-800 text-xs sm:text-sm leading-snug">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-5 pb-3.5 sm:pb-4 border-t border-slate-100">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
