import Link from "next/link";
import { GraduationCap, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="w-8 h-8 text-orange-500" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          University Not Found
        </h1>
        <p className="text-slate-500 mb-6 max-w-md">
          The university page you are looking for doesn&apos;t exist. Please
          check the URL or explore our available universities.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Browse All Universities
        </Link>
      </div>
    </div>
  );
}
