'use client';

import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';

import Link from 'next/link';
import {
  Search,
  MapPin,
  Sparkles,
  MessageSquare,
  ShoppingCart,
  Phone,
  TrendingUp,
  Users,
  Cog,
  Bot,
  ArrowRight,
  Check,
  DollarSign,
  type LucideIcon,
} from 'lucide-react';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { customToolsOffer, funnelSprintOffer, geoOffer } from '@/data/pricing';
import { agenticServiceCard, serviceCards, type ServiceCardId } from '@/data/serviceCards';
import MarkerNote from '../../components/brand/MarkerNote';
import Reveal from '../../components/brand/Reveal';

const serviceIcons: Record<ServiceCardId, LucideIcon> = {
  'seo-services': Search,
  'local-seo': MapPin,
  'geo-optimization': MessageSquare,
  'ecommerce-seo': ShoppingCart,
  'local-lead-generation': Phone,
  'custom-tools-automation': TrendingUp,
};

/* Same override as the homepage rows: the GEO data subtitle names the
   Answer Engine price, and no prices render in these rows. */
const subtitleOverrides: Partial<Record<ServiceCardId, string>> = {
  'geo-optimization': 'AI-search visibility, built into every SEO plan.',
};

const heroLinks = [
  { label: 'SEO Services', href: '/services/search-engine-optimization', icon: Search },
  { label: 'Local SEO', href: '/services/local-seo', icon: MapPin },
  { label: 'GEO Optimization', href: '/services/geo-optimization', icon: Sparkles },
  { label: 'E-commerce SEO', href: '/services/ecommerce-seo', icon: ShoppingCart },
  { label: 'Lead Generation', href: '/services/local-lead-generation', icon: Users },
  { label: 'Custom Tools', href: '/services/custom-tools-automation', icon: Cog },
];

const whyBlocks = [
  {
    title: 'Consumer Psychology First',
    body: 'We study how your customers think, what motivates them, and what psychological triggers drive their decisions. Every strategy is built on behavioral insights, not guesswork.',
  },
  {
    title: 'Data-Driven Optimization',
    body: 'Psychology provides the foundation, data provides the proof. We continuously test, measure, and optimize based on real performance metrics and user behavior.',
  },
  {
    title: 'Results-Focused Strategy',
    body: "We don't just drive traffic or increase impressions. We focus on the metrics that matter: qualified leads, conversions, and revenue growth that impacts your bottom line.",
  },
  {
    title: 'Deep Audience Understanding',
    body: "We don't just know your audience demographics. We understand their fears, desires, objections, and decision-making processes to create messaging that truly resonates.",
  },
];

const goalRows = [
  {
    heading: 'Increase Organic Traffic & Rankings',
    description: 'Need more qualified visitors from search engines',
    label: 'SEO Services',
    href: '/services/search-engine-optimization',
    icon: Search,
  },
  {
    heading: 'Get Found by Local Customers',
    description: 'Need to dominate local search in your area',
    label: 'Local SEO',
    href: '/services/local-seo',
    icon: MapPin,
  },
  {
    heading: 'Generate Leads Fast',
    description: 'Need immediate leads from Google & Facebook ads',
    label: 'Local Lead Generation',
    href: '/services/local-lead-generation',
    icon: Users,
  },
  {
    heading: 'Automate Marketing Tasks',
    description: 'Want custom tools that fit your business perfectly',
    label: 'Custom Tools & Automation',
    href: '/services/custom-tools-automation',
    icon: Cog,
  },
];

export default function ServicesPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } =
    useContactDialog('Marketing Services Consultation');

  return (
    <div className="min-h-screen bg-paper">
      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Marketing Services Consultation"
        description="Discover the psychology-driven marketing services that will transform your business growth and customer acquisition."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      {/* Hero */}
      <section className="bg-paper bg-waves">
        <div className="container mx-auto px-6 pt-10 pb-24">
          <PageBreadcrumb
            items={[{ label: 'Services', href: '/services', current: true }]}
            className="mb-10 text-navy/60 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
          />
          <div className="max-w-3xl">
            <p className="mb-5 text-[15px] font-semibold text-pen-text">
              Psychology-Driven Approach
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-[54px]">
              Local SEO &amp; Digital Marketing Services for Volusia County Businesses
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-navy/75">
              We offer a focused set of services built for local businesses in Daytona Beach,
              Volusia County, and the surrounding area. No bloated retainers, no services you
              don&apos;t need. Every service we offer is built around one outcome: more
              customers finding you in local search and AI-generated answers.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-bold text-white transition hover:bg-brand/90"
              >
                <MessageSquare className="h-4 w-4" />
                Schedule Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-white px-7 py-3.5 font-bold text-navy transition hover:border-brand hover:text-brand"
              >
                <DollarSign className="h-4 w-4" />
                View Pricing
              </Link>
            </div>
          </div>

          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-6">
            {heroLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy/70 transition hover:text-brand"
                >
                  <item.icon className="h-4 w-4 text-navy/50" strokeWidth={1.8} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core services: homepage services-rows pattern, hub copy, no prices */}
      <section className="bg-paper pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What we do</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Our Core Marketing Services
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Each service is built on deep understanding of consumer psychology, backed by
              data, and optimized for measurable results.
            </p>
          </div>

          <div className="mt-12 border-t border-hairline">
            {/* Flagship row */}
            <Reveal>
              <article className="grid grid-cols-1 gap-x-8 gap-y-4 border-b border-hairline py-9 md:grid-cols-[56px_1.05fr_1.7fr_0.65fr] md:gap-y-0">
                <div className="relative hidden w-10 md:block" aria-hidden="true">
                  <Bot className="h-8 w-8 text-navy" strokeWidth={1.8} />
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
                    <Bot className="h-6 w-6 text-navy md:hidden" strokeWidth={1.8} />
                    {agenticServiceCard.title}
                  </h3>
                  <p className="mt-1 text-[15px] font-semibold text-brand">
                    {agenticServiceCard.subtitle}
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed text-navy/75">
                    {agenticServiceCard.hubDescription.replace(' — ', ' - ')}
                  </p>
                </div>
                <div>
                  <Link
                    href={agenticServiceCard.href}
                    className="group inline-flex items-center gap-1.5 font-bold text-brand hover:underline"
                  >
                    {agenticServiceCard.title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span className="sr-only">: learn more</span>
                  </Link>
                </div>
              </article>
            </Reveal>

            {serviceCards.map((service) => {
              const IconComponent = serviceIcons[service.id];
              const isGeo = service.id === 'geo-optimization';
              return (
                <Reveal key={service.id}>
                  <article
                    className={`relative grid grid-cols-1 gap-x-8 gap-y-4 border-b border-hairline py-9 md:grid-cols-[56px_1.05fr_1.7fr_0.65fr] md:gap-y-0 ${
                      isGeo
                        ? 'bg-brand-tint px-5 md:-mx-5 md:rounded-3xl md:border-b-0 md:px-10'
                        : ''
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
                        {subtitleOverrides[service.id] ?? service.hubSubtitle}
                      </p>
                    </div>

                    <div>
                      <p className="leading-relaxed text-navy/75">
                        {('hubDescription' in service
                          ? service.hubDescription
                          : service.description
                        ).replace(' — ', ' - ')}
                      </p>
                      <ul
                        className="mt-4 flex flex-wrap gap-2"
                        aria-label={`${service.title} includes`}
                      >
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

                    <div>
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

      {/* Why choose our approach */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Why us</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Why Choose Our Psychology-Driven Approach?
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Most marketing focuses on tactics and tools. We focus on the human psychology
              behind every click, search, and purchase decision.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              {whyBlocks.map((block) => (
                <div key={block.title} className="mt-10 border-t-2 border-hairline pt-5 first:mt-0">
                  <h3 className="text-xl font-extrabold tracking-tight text-navy">
                    {block.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-navy/70">{block.body}</p>
                </div>
              ))}
            </div>

            <Reveal className="relative">
              <div className="rounded-[1.75rem] border border-hairline bg-white p-8 shadow-sm">
                <h3 className="text-center text-2xl font-extrabold tracking-tight text-navy">
                  The Psychology-Driven Difference
                </h3>
                <div className="mt-6 rounded-2xl bg-paper p-5">
                  <h4 className="font-bold text-navy/60">Traditional Marketing</h4>
                  <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-navy/70">
                    <li>Focuses on tactics and tools</li>
                    <li>Generic messaging for everyone</li>
                    <li>Vanity metrics (clicks, impressions)</li>
                    <li>One-size-fits-all approach</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-2xl bg-brand-tint p-5">
                  <h4 className="font-bold text-brand">Psychology-Driven Marketing</h4>
                  <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-navy/70">
                    <li>Focuses on human behavior and motivation</li>
                    <li>Personalized messaging for each audience</li>
                    <li>Revenue and ROI metrics</li>
                    <li>Customized for your specific market</li>
                  </ul>
                </div>
                <div className="mt-6 rounded-2xl bg-navy p-5 text-center">
                  <p className="text-3xl font-extrabold tracking-tight text-white">
                    3.2x Average
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/70">
                    Improvement in conversion rates vs traditional approaches
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Which service is right for you */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Start here</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Which Service is Right for You?
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Not sure where to start? Use this guide to find the best service for your current
              business goals and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-white p-8 shadow-sm">
              <h3 className="text-center text-2xl font-extrabold tracking-tight text-navy">
                Start Here: What&apos;s Your Primary Goal?
              </h3>
              <div className="mt-8 space-y-4">
                {goalRows.map((row) => (
                  <Link
                    key={row.href}
                    href={row.href}
                    className="group block rounded-2xl border border-hairline p-5 transition hover:border-brand"
                  >
                    <span className="flex items-start gap-3">
                      <row.icon className="mt-0.5 h-6 w-6 shrink-0 text-navy" strokeWidth={1.8} />
                      <span>
                        <span className="block font-bold text-navy">{row.heading}</span>
                        <span className="mt-0.5 block text-sm text-navy/60">
                          {row.description}
                        </span>
                        <span className="mt-2 block font-bold text-brand group-hover:underline">
                          → {row.label}
                        </span>
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Investment guide: retired ladder figures removed. Remaining
                figures come from pricing.ts (geoOffer, Funnel Sprint,
                customToolsOffer); other rows point at the service pages. */}
            <div className="rounded-3xl border border-hairline bg-white p-8 shadow-sm">
              <h3 className="text-center text-2xl font-extrabold tracking-tight text-navy">
                Timeline &amp; Investment Guide
              </h3>

              <div className="mt-8">
                <h4 className="font-bold text-navy">Quick Results (1-4 weeks)</h4>
                <dl className="mt-3 space-y-2.5 text-[15px]">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-navy/75">Local Lead Generation:</dt>
                    <dd className="text-right font-semibold text-navy">
                      Funnel Sprint {funnelSprintOffer.sprintPrice} + ad spend
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-navy/75">Local SEO:</dt>
                    <dd className="text-right">
                      <Link href="/services/local-seo" className="font-semibold text-brand hover:underline">
                        See the Local SEO page
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 border-t border-hairline pt-8">
                <h4 className="font-bold text-navy">Medium-term Results (3-6 months)</h4>
                <dl className="mt-3 space-y-2.5 text-[15px]">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-navy/75">SEO Services:</dt>
                    <dd className="text-right">
                      <Link href="/services/search-engine-optimization" className="font-semibold text-brand hover:underline">
                        See the SEO Services page
                      </Link>
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-navy/75">GEO Optimization:</dt>
                    <dd className="text-right font-semibold text-navy">{geoOffer.price}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 border-t border-hairline pt-8">
                <h4 className="font-bold text-navy">Long-term Assets (one-time)</h4>
                <dl className="mt-3 space-y-2.5 text-[15px]">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-navy/75">Custom Tools (Simple):</dt>
                    <dd className="text-right font-semibold text-navy">
                      Scoped on the discovery call
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-navy/75">Full Automation Systems:</dt>
                    <dd className="text-right font-semibold text-navy">
                      {customToolsOffer.projectRange.replace(' — ', ' - ')}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 rounded-2xl bg-brand-tint p-5 text-center">
                <p className="text-[15px] leading-relaxed text-navy/80">
                  <strong>Not sure?</strong> Schedule a free consultation to discuss your
                  specific situation and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand bg-waves-light py-24 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-[40px]">
            Ready to Transform Your Marketing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Stop wasting money on tactics that don&apos;t work. Get marketing strategies based
            on proven psychology that turn prospects into loyal customers.
          </p>
          <p className="mt-6 flex items-center justify-center gap-2 font-medium text-white/85">
            <Check className="h-5 w-5 shrink-0" strokeWidth={3} />
            Join 200+ businesses that chose psychology-driven marketing over generic tactics
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-navy transition hover:bg-paper"
            >
              <MessageSquare className="h-4 w-4" />
              Schedule Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 font-bold text-white transition hover:border-white"
            >
              <DollarSign className="h-4 w-4" />
              View All Pricing
            </Link>
          </div>
          <p className="mt-8 text-white/70">
            Free consultations • No sales pressure • Results-focused approach
          </p>
        </div>
      </section>
    </div>
  );
}
