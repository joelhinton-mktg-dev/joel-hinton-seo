import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { COPYRIGHT_YEAR, SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/data/site";
import SunriseMark from "./brand/SunriseMark";

const linkClasses = "text-white/70 hover:text-white transition-colors";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand + NAP */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5" aria-label="AIO Growth SEO home">
              <SunriseMark size={42} variant="blue" />
              {/* Wordmark (design C) on navy: aio in blue, growth in white, orange dot */}
              <span className="relative pb-1 text-[26px] font-extrabold lowercase leading-none tracking-tight">
                <span className="text-[#6EA8FF]">aio</span> <span className="text-white">growth</span>
                <span className="text-pen">.</span>
                <svg
                  viewBox="0 0 220 14"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute left-0 bottom-0 h-[6px] w-full"
                >
                  <path
                    d="M4 10 C 60 3, 160 3, 216 7"
                    fill="none"
                    stroke="#F97415"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Psychology-Driven SEO &amp; Growth Marketing. Serving Daytona Beach, FL and
              businesses nationwide with no-retainer, results-driven services.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 shrink-0" />
                Daytona Beach, FL 32114
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-white transition-colors">
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white transition-colors">
                  {SITE_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-bold mb-4 text-base text-white">Services</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/search-engine-optimization" className={linkClasses}>SEO Services</Link></li>
              <li><Link href="/services/local-seo" className={linkClasses}>Local SEO</Link></li>
              <li><Link href="/services/geo-optimization" className={linkClasses}>GEO Optimization</Link></li>
              <li><Link href="/services/local-lead-generation" className={linkClasses}>Local Lead Generation</Link></li>
              <li><Link href="/services/custom-tools-automation" className={linkClasses}>Custom Tools &amp; Automation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-bold mb-4 text-base text-white">Company</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className={linkClasses}>About</Link></li>
              <li><Link href="/results" className={linkClasses}>Case Studies</Link></li>
              <li><Link href="/industries" className={linkClasses}>Industries</Link></li>
              <li><Link href="/blog" className={linkClasses}>Blog</Link></li>
              <li><Link href="/guides" className={linkClasses}>SEO &amp; GEO Guides</Link></li>
              <li><Link href="/tools" className={linkClasses}>Tools</Link></li>
              <li><Link href="/pricing" className={linkClasses}>Pricing</Link></li>
              <li><Link href="/contact" className={linkClasses}>Contact</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h2 className="font-bold mb-4 text-base text-white">Service Areas</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/areas-we-serve/daytona-beach" className={linkClasses}>Daytona Beach</Link></li>
              <li><Link href="/areas-we-serve/port-orange" className={linkClasses}>Port Orange</Link></li>
              <li><Link href="/areas-we-serve/ormond-beach" className={linkClasses}>Ormond Beach</Link></li>
              <li><Link href="/areas-we-serve/palm-coast" className={linkClasses}>Palm Coast</Link></li>
              <li><Link href="/areas-we-serve/new-smyrna-beach" className={linkClasses}>New Smyrna Beach</Link></li>
              <li><Link href="/areas-we-serve" className={linkClasses}>All Areas We Serve</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {COPYRIGHT_YEAR} AIO Growth SEO. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className={linkClasses}>Privacy Policy</Link>
              <Link href="/terms" className={linkClasses}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
