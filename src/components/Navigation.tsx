import { Button } from "@/components/ui/button";
import { Brain, Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesItems = [
    { label: "SEO Services", href: "/seo-services", description: "Psychology-driven search optimization" },
    { label: "Growth Marketing", href: "/growth-marketing", description: "Data-driven growth strategies" },
    { label: "Paid Advertising", href: "/paid-advertising", description: "Performance-based ad campaigns" },
  ];

  const mainNavItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Results", href: "/results" },
    { label: "About", href: "/about" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clickable */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground group-hover:bg-primary/90 transition-all duration-300 group-hover:scale-105">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                Joel Hinton
              </div>
              <div className="text-xs text-muted-foreground -mt-1 group-hover:text-muted-foreground/80 transition-colors duration-300">
                Digital Marketing
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground ${
                  isActiveRoute(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground flex items-center gap-1 ${
                  isServicesOpen || location.pathname.startsWith('/seo-services') || 
                  location.pathname.startsWith('/growth-marketing') || 
                  location.pathname.startsWith('/paid-advertising')
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-lg backdrop-blur-xl animate-in fade-in-0 slide-in-from-top-2 duration-200"
                >
                  <div className="p-2">
                    {servicesItems.map((service) => (
                      <Link
                        key={service.label}
                        to={service.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-all duration-200 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-200" />
                        <div className="flex-1">
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                            {service.label}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {service.description}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="hero" 
              size="sm"
              className="group hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Free Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 font-medium ${
                    isActiveRoute(item.href) ? "text-primary bg-primary/10" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div className="px-4 py-3">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-muted-foreground hover:text-foreground font-medium"
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="mt-3 ml-4 space-y-2 animate-in fade-in-0 slide-in-from-left-2 duration-200">
                    {servicesItems.map((service) => (
                      <Link
                        key={service.label}
                        to={service.href}
                        className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium">{service.label}</div>
                        <div className="text-xs text-muted-foreground/70 mt-1">
                          {service.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-4 pt-2">
                <Button 
                  variant="hero" 
                  className="w-full group hover:scale-105 transition-transform duration-300"
                  size="sm"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Free Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;