import { Button } from "@/components/ui/button";
import { Brain, Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "SEO Services", href: "/seo-services" },
    { label: "Growth Marketing", href: "/growth-marketing" },
    { label: "Paid Advertising", href: "/paid-advertising" },
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">Joel Hinton</div>
              <div className="text-xs text-muted-foreground -mt-1">Digital Marketing</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Free Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="w-full" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Free Audit
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;