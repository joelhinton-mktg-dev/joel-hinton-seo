import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessBand from '../components/home/ProcessBand';
import CtaBand from '../components/home/CtaBand';
import LocalBusinessSchema from '../components/schema/LocalBusinessSchema';
import MarkerNote from '../components/brand/MarkerNote';
import Reveal from '../components/brand/Reveal';
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: 'Daytona Beach SEO & GEO Company',
  description: 'Daytona Beach SEO company for Volusia and Flagler service businesses. Local SEO, AI search visibility, and lead generation. Month-to-month, no contracts.',
  keywords: ['Daytona Beach SEO company', 'Daytona Beach SEO', 'Central Florida SEO', 'Volusia County digital marketing', 'Flagler County SEO', 'local SEO', 'psychology-driven marketing'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aiogrowthseo.com',
  },
  openGraph: {
    title: 'Daytona Beach SEO Company',
    description: 'Your Daytona Beach SEO company for Volusia and Flagler Counties. Local SEO, GEO optimization, lead generation, and measurable growth.',
    type: 'website',
    url: 'https://aiogrowthseo.com',
  },
};

const industries = [
  {
    title: "Home Services",
    description: "HVAC, plumbing, roofing, landscaping, and contractors serving Central Florida homeowners.",
    href: "/industries/home-services",
  },
  {
    title: "Healthcare",
    description: "Medical practices, dental offices, chiropractors, and wellness providers in Volusia, Flagler & Seminole.",
    href: "/industries/healthcare",
  },
  {
    title: "Legal Services",
    description: "Law firms and attorneys building their practice through local search dominance.",
    href: "/industries/legal-services",
  },
  {
    title: "Real Estate",
    description: "Realtors, property managers, and real estate agencies in Central Florida's growing market.",
    href: "/industries/real-estate",
  },
  {
    title: "Professional Services",
    description: "Accountants, consultants, financial advisors, and B2B service providers.",
    href: "/industries/professional-services",
  },
  {
    title: "Restaurants & Hospitality",
    description: "Restaurants, hotels, and hospitality businesses serving tourists and locals alike.",
    href: "/industries/restaurants-hospitality",
  },
  {
    title: "E-commerce & Retail",
    description: "Online stores and local retailers expanding their digital presence.",
    href: "/industries/ecommerce",
  },
  {
    title: "Automotive Services",
    description: "Auto repair shops, dealerships, and automotive service providers.",
    href: "/industries/automotive-services",
  }
];

/* Map pin positions (percent) on the drawn service-area map */
const localMarkets = [
  { name: "Palm Coast", href: "/areas-we-serve/palm-coast", top: '13%', left: '47%' },
  { name: "Ormond Beach", href: "/areas-we-serve/ormond-beach", top: '27%', left: '40%' },
  { name: "Holly Hill", href: "/areas-we-serve/holly-hill", top: '35%', left: '47%' },
  { name: "Daytona Beach", href: "/areas-we-serve/daytona-beach", top: '43%', left: '28%', highlight: true },
  { name: "Port Orange", href: "/areas-we-serve/port-orange", top: '53%', left: '43%' },
  { name: "New Smyrna Beach", href: "/areas-we-serve/new-smyrna-beach", top: '65%', left: '33%' },
  { name: "DeBary", href: "/areas-we-serve/debary", top: '77%', left: '27%' },
  { name: "Sanford", href: "/areas-we-serve/sanford", top: '88%', left: '21%' },
];

const localPoints = [
  "Deep understanding of local search patterns",
  "Tourism & seasonal optimization expertise",
  "Community-focused content strategies",
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />
      <section id="services">
        <ServicesSection />
      </section>

      <ProcessBand />

      {/* Industries Section: whole block is the link, no icon boxes (design v7) */}
      <section id="industries" className="py-24 bg-paper">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[15px] font-semibold text-pen-text mb-4">Industry Expertise</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-5">
              SEO for Your Industry
            </h2>
            <p className="text-lg text-navy/70 leading-relaxed">
              We understand the unique challenges and opportunities in Central Florida&apos;s key
              industries. Specialized strategies that speak your customers&apos; language.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group bg-paper p-7 transition-colors hover:bg-cream"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="text-lg font-extrabold tracking-tight text-navy">
                    {industry.title}
                  </span>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-[15px] leading-relaxed text-navy/70">
                  {industry.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Markets Section: drawn service-area map replaces the city buttons */}
      <section id="local-markets" className="py-24 bg-band">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[15px] font-semibold text-pen-text mb-4">Local Market Expertise</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-6">
                Serving Volusia, Flagler &amp; Seminole Counties
              </h2>
              <p className="text-lg text-navy/75 mb-6 leading-relaxed">
                From the beaches of Daytona to the historic streets of Sanford, we understand what drives
                local customers in Central Florida. Market-specific strategies that resonate with your community.
              </p>
              <p className="text-lg text-navy/75 mb-8 leading-relaxed">
                Every market here runs on one core service, our{' '}
                <Link href="/services/local-seo" className="font-semibold text-brand underline hover:text-navy">
                  local SEO service in Daytona Beach
                </Link>
                , where AIO Growth is based.
              </p>

              <ul className="space-y-3.5 mb-9">
                {localPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </span>
                    <span className="font-medium text-navy/85">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/areas-we-serve"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy/10 bg-white px-7 py-3.5 font-bold text-navy shadow-sm transition-colors hover:border-brand hover:text-brand"
              >
                View All Service Areas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <Reveal>
              <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-hairline bg-cream shadow-xl">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 600 500"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M430 0 C 415 130, 445 260, 420 500 L600 500 L600 0 Z" fill="#EAF0FF" />
                  <path
                    d="M430 0 C 415 130, 445 260, 420 500"
                    fill="none"
                    stroke="#0055FF"
                    strokeWidth="3"
                  />
                  <path d="M490 120 q 12 -8 24 0 q 12 8 24 0" fill="none" stroke="#0055FF" strokeOpacity="0.35" strokeWidth="2.5" />
                  <path d="M500 165 q 10 -7 20 0 q 10 7 20 0" fill="none" stroke="#0055FF" strokeOpacity="0.35" strokeWidth="2.5" />
                </svg>
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[11px] font-bold tracking-[0.35em] text-brand/50"
                  aria-hidden="true"
                >
                  ATLANTIC
                </span>
                <MarkerNote className="absolute left-5 top-5 text-[24px]">
                  we can meet in person
                </MarkerNote>
                {localMarkets.map((market) => (
                  <Link
                    key={market.name}
                    href={market.href}
                    className="group absolute flex -translate-y-1/2 items-center gap-2"
                    style={{ top: market.top, left: market.left }}
                  >
                    <span
                      className={`font-caveat font-bold leading-none text-navy transition-colors group-hover:text-brand ${
                        market.highlight ? 'text-[32px]' : 'text-[23px]'
                      }`}
                    >
                      {market.name}
                    </span>
                    <span
                      className={`shrink-0 rounded-full ${
                        market.highlight ? 'h-4 w-4 bg-brand' : 'h-2.5 w-2.5 bg-pen'
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="results">
        <TestimonialsSection />
      </section>

      <CtaBand />
    </>
  );
}
