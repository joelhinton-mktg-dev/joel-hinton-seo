'use client';

import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SunriseMark from "./brand/SunriseMark";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isSEOSubmenuOpen, setIsSEOSubmenuOpen] = useState(false);
  const [isMobileSEOOpen, setIsMobileSEOOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileSEOOpen(false);
  }, [pathname]);

  // Close dropdowns when clicking outside
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
    {
      label: "View All Services",
      href: "/services",
      description: "Complete overview of all marketing services",
      isMainLink: true
    },
    {
      label: "SEO Services",
      href: "/services/search-engine-optimization",
      description: "Psychology-driven search optimization",
      subItems: [
        { label: "Local SEO", href: "/services/local-seo", description: "Florida market domination" },
        { label: "GEO Optimization", href: "/services/geo-optimization", description: "AI search optimization" },
        { label: "Agentic SEO", href: "/services/agentic-seo", description: "A website that improves itself" },
      ]
    },
    { label: "E-commerce SEO", href: "/services/ecommerce-seo", description: "Online store optimization" },
    { label: "Local Lead Generation", href: "/services/local-lead-generation", description: "Google Ads & Facebook leads for local businesses" },
    { label: "Custom Tools & Automation", href: "/services/custom-tools-automation", description: "Custom marketing tools & workflow automation" },
  ];

  const mainNavItems = [
    { label: "Services", href: "/services", dropdown: "services" as const },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/results" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isServicesActive = pathname.startsWith('/services');
  const isActiveRoute = (href: string) => pathname.startsWith(href);

  const navLinkClasses = (active: boolean) =>
    `px-4 py-2 rounded-full text-[15px] font-semibold transition-colors duration-200 hover:bg-brand-tint ${
      active ? "text-brand" : "text-navy hover:text-brand"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-hairline">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - sunrise mark + wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="AIO Growth SEO home">
            <SunriseMark size={38} variant="navy" className="transition-transform duration-300 group-hover:scale-105" />
            <span className="font-extrabold text-xl tracking-tight text-navy group-hover:text-brand transition-colors duration-300">
              AIO Growth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => {
              if (item.dropdown === 'services') {
                return (
                  <div key={item.label} className="relative" ref={servicesRef}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      className={`${navLinkClasses(isServicesOpen || isServicesActive)} flex items-center gap-1`}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                      aria-label="Services menu"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isServicesOpen && (
                      <div
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="absolute top-full left-0 mt-2 w-80 bg-white border border-hairline rounded-2xl shadow-xl animate-in fade-in-0 slide-in-from-top-2 duration-200"
                      >
                        <div className="p-2">
                          {servicesItems.map((service, index) => (
                            <div key={service.label}>
                              {service.isMainLink ? (
                                <>
                                  <Link
                                    href={service.href}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-tint transition-colors duration-200 group"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0" />
                                    <div className="flex-1">
                                      <div className="font-bold text-brand">
                                        {service.label}
                                      </div>
                                      <div className="text-sm text-muted-foreground mt-0.5">
                                        {service.description}
                                      </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-brand" />
                                  </Link>
                                  {index < servicesItems.length - 1 && (
                                    <div className="mx-3 my-2 border-t border-hairline" />
                                  )}
                                </>
                              ) : service.subItems ? (
                                <div
                                  className="relative"
                                  onMouseEnter={() => setIsSEOSubmenuOpen(true)}
                                  onMouseLeave={() => setIsSEOSubmenuOpen(false)}
                                >
                                  <Link
                                    href={service.href}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-tint transition-colors duration-200 group"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0" />
                                    <div className="flex-1">
                                      <div className="font-semibold text-navy group-hover:text-brand transition-colors duration-200">
                                        {service.label}
                                      </div>
                                      <div className="text-sm text-muted-foreground mt-0.5">
                                        {service.description}
                                      </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-brand transition-colors duration-200" />
                                  </Link>

                                  {isSEOSubmenuOpen && (
                                    <div className="absolute left-full top-0 ml-2 w-64 bg-white border border-hairline rounded-2xl shadow-xl">
                                      <div className="p-2">
                                        {service.subItems.map((subItem) => (
                                          <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-tint transition-colors duration-200 group"
                                          >
                                            <div className="w-2 h-2 rounded-full bg-pen mt-2 shrink-0" />
                                            <div className="flex-1">
                                              <div className="font-semibold text-navy group-hover:text-brand transition-colors duration-200">
                                                {subItem.label}
                                              </div>
                                              <div className="text-sm text-muted-foreground mt-0.5">
                                                {subItem.description}
                                              </div>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  href={service.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-tint transition-colors duration-200 group"
                                >
                                  <div className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0" />
                                  <div className="flex-1">
                                    <div className="font-semibold text-navy group-hover:text-brand transition-colors duration-200">
                                      {service.label}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-0.5">
                                      {service.description}
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-brand transition-colors duration-200" />
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={navLinkClasses(isActiveRoute(item.href))}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-pen px-5 py-2.5 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-navy"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-brand-tint transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-hairline animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              <div className="px-2 py-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left font-semibold text-navy"
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-90' : ''}`} />
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-3 ml-4 space-y-1 animate-in fade-in-0 slide-in-from-left-2 duration-200">
                    {servicesItems.map((service) => (
                      <div key={service.label}>
                        {service.subItems ? (
                          <div>
                            <Link
                              href={service.href}
                              className="block px-3 py-2 rounded-lg text-sm text-navy hover:bg-brand-tint"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="font-semibold">{service.label}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {service.description}
                              </div>
                            </Link>
                            <button
                              onClick={() => setIsMobileSEOOpen(!isMobileSEOOpen)}
                              className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-brand"
                              aria-expanded={isMobileSEOOpen}
                            >
                              More SEO services
                              <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isMobileSEOOpen ? 'rotate-90' : ''}`} />
                            </button>
                            {isMobileSEOOpen && (
                              <div className="mt-1 ml-4 space-y-1">
                                {service.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="block px-3 py-2 rounded-lg text-sm text-navy hover:bg-brand-tint"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <div className="font-semibold">{subItem.label}</div>
                                    <div className="text-xs text-muted-foreground mt-0.5">
                                      {subItem.description}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={service.href}
                            className={`block px-3 py-2 rounded-lg text-sm hover:bg-brand-tint ${
                              service.isMainLink ? 'text-brand' : 'text-navy'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="font-semibold">{service.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {service.description}
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {mainNavItems
                .filter((item) => !item.dropdown)
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-2 py-2.5 rounded-lg font-semibold transition-colors ${
                      isActiveRoute(item.href) ? "text-brand" : "text-navy hover:text-brand"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

              <div className="px-2 pt-3">
                <Link
                  href="/contact"
                  className="block rounded-full bg-pen px-5 py-3 text-center font-bold text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
