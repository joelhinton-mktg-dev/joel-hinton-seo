import { Brain, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">Joel Hinton Digital Marketing</div>
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
                +1 (386) 555-0123
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                joel@joelhintonmarketing.com
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/seo-services" className="hover:text-background transition-colors">SEO Services</Link></li>
              <li><Link to="/growth-marketing" className="hover:text-background transition-colors">Growth Marketing</Link></li>
              <li><Link to="/paid-advertising" className="hover:text-background transition-colors">Paid Advertising</Link></li>
              <li><Link to="/local-seo" className="hover:text-background transition-colors">Local SEO</Link></li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/daytona-beach-digital-marketing" className="hover:text-background transition-colors">Daytona Beach, FL</Link></li>
              <li><Link to="/orlando-digital-marketing" className="hover:text-background transition-colors">Orlando, FL</Link></li>
              <li><Link to="/tampa-growth-marketing" className="hover:text-background transition-colors">Tampa, FL</Link></li>
              <li><Link to="/jacksonville-seo-consultant" className="hover:text-background transition-colors">Jacksonville, FL</Link></li>
              <li><Link to="/miami-marketing-agency" className="hover:text-background transition-colors">Miami, FL</Link></li>
              <li><Link to="/areas-we-serve" className="hover:text-background transition-colors">Nationwide Remote</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © 2024 Joel Hinton Digital Marketing. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/70">
              <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;