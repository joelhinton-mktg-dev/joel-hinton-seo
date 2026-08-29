import { Brain, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { COPYRIGHT_YEAR, SITE_EMAIL, SITE_PHONE_DISPLAY } from "@/data/site";
import PreferredSourceButton from "./PreferredSourceButton";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex justify-center md:justify-start">
          <PreferredSourceButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">AIO Growth SEO</div>
                <div className="text-sm text-background/70">Psychology-Driven SEO & Growth Marketing</div>
              </div>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              AI-powered digital marketing strategies that understand consumer psychology.
              Serving Daytona Beach, FL and businesses nationwide with no-retainer, results-driven services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                Daytona Beach, FL 32114
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                {SITE_PHONE_DISPLAY}
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                {SITE_EMAIL}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-semibold mb-4 text-base">Services</h2>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/services/search-engine-optimization" className="hover:text-background transition-colors">SEO Services</Link></li>
              <li><Link href="/services/local-seo" className="hover:text-background transition-colors">Local SEO</Link></li>
              <li><Link href="/services/geo-optimization" className="hover:text-background transition-colors">GEO Optimization</Link></li>
              <li><Link href="/services/local-lead-generation" className="hover:text-background transition-colors">Local Lead Generation</Link></li>
              <li><Link href="/services/custom-tools-automation" className="hover:text-background transition-colors">Custom Tools & Automation</Link></li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h2 className="font-semibold mb-4 text-base">Areas Served</h2>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/areas-we-serve/daytona-beach" className="hover:text-background transition-colors">Daytona Beach</Link></li>
              <li><Link href="/areas-we-serve/port-orange" className="hover:text-background transition-colors">Port Orange</Link></li>
              <li><Link href="/areas-we-serve/ormond-beach" className="hover:text-background transition-colors">Ormond Beach</Link></li>
              <li><Link href="/areas-we-serve/palm-coast" className="hover:text-background transition-colors">Palm Coast</Link></li>
              <li><Link href="/areas-we-serve/new-smyrna-beach" className="hover:text-background transition-colors">New Smyrna Beach</Link></li>
              <li><Link href="/areas-we-serve" className="hover:text-background transition-colors">All Areas We Serve</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-semibold mb-4 text-base">Resources</h2>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/guides" className="hover:text-background transition-colors">SEO & GEO Guides</Link></li>
              <li><Link href="/blog" className="hover:text-background transition-colors">Blog</Link></li>
              <li><Link href="/results" className="hover:text-background transition-colors">Case Studies</Link></li>
              <li><Link href="/pricing" className="hover:text-background transition-colors">Pricing</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {COPYRIGHT_YEAR} AIO Growth SEO. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/70">
              <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
