import Link from 'next/link';
import {
  Search,
  MapPin,
  MessageSquare,
  ShoppingCart,
  Phone,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { serviceCards, type ServiceCardId } from '@/data/serviceCards';
import MarkerNote from './brand/MarkerNote';
import Reveal from './brand/Reveal';

const serviceIcons: Record<ServiceCardId, LucideIcon> = {
  'seo-services': Search,
  'local-seo': MapPin,
  'geo-optimization': MessageSquare,
  'ecommerce-seo': ShoppingCart,
  'local-lead-generation': Phone,
  'custom-tools-automation': TrendingUp,
};

/* The GEO row carries the design subtitle instead of the data subtitle,
   which names the Answer Engine price; no prices render in these rows. */
const subtitleOverrides: Partial<Record<ServiceCardId, string>> = {
  'geo-optimization': 'AI-search visibility, built into every SEO plan.',
};

const ServicesSection = () => {
  return (
    <section className="bg-paper py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[15px] font-semibold text-pen-text mb-4">What we do</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-5">
              Psychology-Driven Marketing Services
            </h2>
            <p className="text-lg text-navy/70 leading-relaxed">
              No retainers. No long-term contracts. Just results-driven marketing that
              understands consumer psychology and uses AI optimization.
            </p>
          </div>
          <Link
            href="/pricing"
            className="hidden shrink-0 rounded-full border-2 border-navy/15 bg-white px-6 py-3 font-bold text-navy transition-colors hover:border-brand hover:text-brand sm:inline-flex"
          >
            See Pricing
          </Link>
        </div>

        <div className="mt-12 border-t border-hairline">
          {serviceCards.map((service) => {
            const IconComponent = serviceIcons[service.id];
            const isGeo = service.id === 'geo-optimization';
            return (
              <Reveal key={service.id}>
                <article
                  className={`relative grid grid-cols-1 gap-x-8 gap-y-4 border-b border-hairline py-9 md:grid-cols-[56px_1.05fr_1.7fr_0.65fr] md:gap-y-0 ${
                    isGeo ? 'bg-brand-tint px-5 md:-mx-5 md:rounded-3xl md:border-b-0 md:px-10' : ''
                  }`}
                >
                  {isGeo && (
                    <MarkerNote className="absolute -top-3 right-6 z-10 text-[24px] md:right-10">
                      included in every plan
                    </MarkerNote>
                  )}

                  <div className="relative hidden w-10 md:block" aria-hidden="true">
                    <IconComponent className="h-8 w-8 text-navy" strokeWidth={1.8} />
                    <svg viewBox="0 0 40 8" preserveAspectRatio="none" className="mt-1 h-[6px] w-9">
                      <path
                        d="M2 6 C 14 2, 28 2, 38 4"
                        fill="none"
                        stroke="#F97415"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2.5 text-[22px] font-extrabold tracking-tight text-navy">
                      <IconComponent className="h-6 w-6 text-navy md:hidden" strokeWidth={1.8} />
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[15px] font-semibold text-brand">
                      {subtitleOverrides[service.id] ?? service.subtitle}
                    </p>
                  </div>

                  <div>
                    <p className="leading-relaxed text-navy/75">{service.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${service.title} includes`}>
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full border border-hairline bg-white px-3 py-1 text-[13px] font-medium text-navy/80"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:text-left">
                    {isGeo && (
                      <p className="mb-2 text-[15px] leading-snug text-navy/70">
                        Included with
                        <span className="block font-extrabold text-navy">every SEO plan</span>
                      </p>
                    )}
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-1.5 font-bold text-brand hover:underline"
                    >
                      {service.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      <span className="sr-only">: learn more</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
