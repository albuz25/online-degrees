import { GraduationCap, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pb-20 sm:pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-sm sm:text-base">
                  pgdegrees
                </span>
                <span className="text-orange-400 font-bold">.online</span>
              </div>
            </a>
            <p className="text-xs sm:text-sm leading-relaxed">
              Your trusted counseling partner for online degree programs from
              India&apos;s top universities. We help you make the right choice for
              your career.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="/privacy-policy" className="hover:text-orange-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="hover:text-orange-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="hover:text-orange-400 transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
                <a href="tel:+919999999999" className="hover:text-orange-400 transition">
                  +91-9999999999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
                <a href="mailto:info@pgdegrees.online" className="hover:text-orange-400 transition break-all">
                  info@pgdegrees.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-4 sm:pt-6">
          <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed mb-3 sm:mb-4">
            <strong className="text-slate-400">Disclaimer:</strong> pgdegrees.online
            is a counseling and information portal. We are not a university or
            affiliated to any university. We provide guidance and counseling
            services to help students make informed decisions about their
            education. University logos and trademarks belong to their respective owners.
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} pgdegrees.online. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
