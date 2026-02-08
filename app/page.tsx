import Link from "next/link";
import { GraduationCap, CheckCircle, ChevronRight } from "lucide-react";
import { universities } from "@/data/universities";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/20">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-slate-800">pgdegrees</span>
                <span className="text-orange-500 font-bold">.online</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            Trusted by 50,000+ Students
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Online Degrees from India&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Top Universities
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Compare programs, fees, and placements. Get free counseling from our
            expert team to find the perfect program for your career.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" /> UGC Entitled
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" /> NAAC Accredited
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" /> Placement Support
            </span>
          </div>
        </div>
      </section>

      {/* University Grid */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Explore Universities
            </h2>
            <p className="text-slate-500 mt-2">
              Choose a university to view detailed program information
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {universities.map((uni) => (
              <Link
                key={uni.slug}
                href={`/${uni.slug}`}
                className="group block border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-800 group-hover:text-orange-600 transition">
                      {uni.shortName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {uni.displayName}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {uni.approvals.slice(0, 3).map((a) => (
                    <span
                      key={a.shortName}
                      className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                    >
                      {a.shortName}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    Starting at{" "}
                    <span className="font-semibold text-orange-600">
                      {uni.feeStart}
                    </span>
                  </span>
                  <span className="text-xs text-slate-400">
                    {uni.programs.length} programs
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} pgdegrees.online. All rights
              reserved. | Counseling & information portal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
