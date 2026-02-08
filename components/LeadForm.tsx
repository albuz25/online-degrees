"use client";

import { useState, FormEvent, useEffect } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import { INDIAN_STATES, type Program, type LeadFormData, type UniversityTheme } from "@/lib/types";

interface LeadFormProps {
  programs: Program[];
  universitySlug: string;
  heading?: string;
  subheading?: string;
  compact?: boolean;
  theme?: UniversityTheme;
}

export default function LeadForm({
  programs,
  universitySlug,
  heading = "Get Free Counseling",
  subheading = "Talk to our expert counselors today",
  compact = false,
  theme,
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    mobile: "",
    course: "",
    state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});

  // Capture UTM params from URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setFormData((prev) => ({
        ...prev,
        utm_source: params.get("utm_source") || undefined,
        utm_medium: params.get("utm_medium") || undefined,
        utm_campaign: params.get("utm_campaign") || undefined,
        utm_term: params.get("utm_term") || undefined,
        utm_content: params.get("utm_content") || undefined,
      }));
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }
    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.state) newErrors.state = "Please select your state";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          course: formData.course,
          state: formData.state,
          university_slug: universitySlug,
          utm_source: formData.utm_source || undefined,
          utm_medium: formData.utm_medium || undefined,
          utm_campaign: formData.utm_campaign || undefined,
          utm_term: formData.utm_term || undefined,
          utm_content: formData.utm_content || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit");
      }
      setIsSubmitted(true);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileInput = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, mobile: cleaned }));
  };

  const focusRing = theme ? theme.primary : "#f97316";
  const focusRingStyle = `0 0 0 2px ${focusRing}40`;

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-2xl shadow-xl ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6 md:p-8"}`}>
        <div className="text-center py-4 sm:py-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
            Thank You!
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            Our counselor will contact you within 24 hours with complete
            program details and fee information.
          </p>
        </div>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full h-12 sm:h-13 px-3.5 sm:px-4 border rounded-xl text-sm focus:outline-none transition ${
      hasError ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"
    }`;

  return (
    <div className={`bg-white rounded-2xl shadow-xl ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6 md:p-8"}`}>
      {heading && (
        <div className="text-center mb-4 sm:mb-5">
          <h3 className={`font-bold text-slate-800 ${compact ? "text-base sm:text-lg" : "text-lg sm:text-xl md:text-2xl"}`}>
            {heading}
          </h3>
          {subheading && (
            <p className="text-slate-500 text-xs sm:text-sm mt-1">{subheading}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className={inputClass(!!errors.name)}
            onFocus={(e) => { e.currentTarget.style.boxShadow = focusRingStyle; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          />
          {errors.name && <p className="text-red-500 text-[11px] sm:text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className={inputClass(!!errors.email)}
            onFocus={(e) => { e.currentTarget.style.boxShadow = focusRingStyle; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          />
          {errors.email && <p className="text-red-500 text-[11px] sm:text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div>
          <div className="flex">
            <span className="inline-flex items-center px-2.5 sm:px-3 h-12 sm:h-13 border border-r-0 border-slate-200 rounded-l-xl bg-slate-100 text-xs sm:text-sm text-slate-500 shrink-0">
              +91
            </span>
            <input
              type="tel"
              placeholder="Mobile Number *"
              value={formData.mobile}
              onChange={(e) => handleMobileInput(e.target.value)}
              className={`w-full h-12 sm:h-13 px-3.5 sm:px-4 border rounded-r-xl text-sm focus:outline-none transition ${
                errors.mobile ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"
              }`}
              onFocus={(e) => { e.currentTarget.style.boxShadow = focusRingStyle; }}
              onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            />
          </div>
          {errors.mobile && <p className="text-red-500 text-[11px] sm:text-xs mt-1">{errors.mobile}</p>}
        </div>

        {/* Course */}
        <div>
          <select
            value={formData.course}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, course: e.target.value }))
            }
            className={`${inputClass(!!errors.course)} appearance-none bg-no-repeat bg-[right_0.75rem_center] sm:bg-[right_1rem_center] bg-[length:14px] sm:bg-[length:16px] ${
              !formData.course ? "text-slate-400" : "text-slate-800"
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            }}
            onFocus={(e) => { e.currentTarget.style.boxShadow = focusRingStyle; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            <option value="" disabled>Select Course *</option>
            {programs.map((p) => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
          {errors.course && <p className="text-red-500 text-[11px] sm:text-xs mt-1">{errors.course}</p>}
        </div>

        {/* State */}
        <div>
          <select
            value={formData.state}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, state: e.target.value }))
            }
            className={`${inputClass(!!errors.state)} appearance-none bg-no-repeat bg-[right_0.75rem_center] sm:bg-[right_1rem_center] bg-[length:14px] sm:bg-[length:16px] ${
              !formData.state ? "text-slate-400" : "text-slate-800"
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            }}
            onFocus={(e) => { e.currentTarget.style.boxShadow = focusRingStyle; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            <option value="" disabled>Select State *</option>
            {INDIAN_STATES.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-[11px] sm:text-xs mt-1">{errors.state}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 sm:h-13 text-white text-sm font-semibold rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{
            background: `linear-gradient(to right, ${theme?.ctaFrom || "#f97316"}, ${theme?.ctaTo || "#ea580c"})`,
            boxShadow: `0 8px 20px ${theme?.ctaShadow || "rgba(249,115,22,0.25)"}`,
          }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span>Please wait...</span>
            </>
          ) : (
            "Get Free Counseling"
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-[10px] sm:text-xs text-center text-slate-400 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          Your personal information is secure with us
        </p>
      </form>
    </div>
  );
}
