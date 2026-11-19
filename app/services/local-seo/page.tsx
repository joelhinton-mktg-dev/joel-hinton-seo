'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, Building2, Check, Phone, Star, User } from 'lucide-react';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import CoreServiceSchema from '@/components/schema/CoreServiceSchema';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import AuditForm from '../../../components/brand/AuditForm';
import MarkerNote from '../../../components/brand/MarkerNote';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';
import Reveal from '../../../components/brand/Reveal';
import { openAssistant } from '../../../components/brand/ChatAssistant';
import ServicesTabs, {
  type LocalSeoServiceCard,
} from '../../../components/local-seo/ServicesTabs';
import { testimonials } from '@/data/clientTestimonials';
import { geoOffer } from '@/data/pricing';
import { FORMSPREE_CONTACT_ENDPOINT, SITE_PHONE, SITE_PHONE_TEL } from '@/data/site';

const servingCities: Array<{ name: string; href?: string }> = [
  { name: 'Daytona Beach', href: '/areas-we-serve/daytona-beach' },
  { name: 'Ormond Beach', href: '/areas-we-serve/ormond-beach' },
  { name: 'Port Orange', href: '/areas-we-serve/port-orange' },
  { name: 'New Smyrna Beach', href: '/areas-we-serve/new-smyrna-beach' },
  { name: 'Palm Coast', href: '/areas-we-serve/palm-coast' },
  { name: 'Holly Hill', href: '/areas-we-serve/holly-hill' },
  { name: 'DeBary', href: '/areas-we-serve/debary' },
  { name: 'Sanford', href: '/areas-we-serve/sanford' },
  { name: 'DeLand' },
];

/* Live impact panel figures (the design's uncited 2014-era stats were dropped). */
const impactStats = [
  { value: '76%', caption: "of 'near me' searches result in a business visit within 24 hours" },
  { value: '28%', caption: 'of local searches result in a purchase within 24 hours' },
  { value: '46%', caption: 'of all Google searches have local intent' },
];

const whyBlocks = [
  {
    title: 'Google Map Pack Visibility',
    body: (
      <>
        Appear in the top 3 local results when customers search &quot;near me.&quot; Understanding
        how the{' '}
        <Link href="/blog/how-google-local-pack-works-2026" className="font-medium text-brand underline hover:text-navy">
          Google Local Pack works
        </Link>{' '}
        is the foundation of every campaign we run.
      </>
    ),
  },
  {
    title: (
      <Link href="/blog/google-business-profile-optimization-daytona" className="hover:text-brand">
        Google Business Profile Optimization
      </Link>
    ),
    body: <>Complete profile that converts browsers into customers.</>,
  },
  {
    title: 'Review Management Strategy',
    body: <>Build trust with consistent 5-star reviews and reputation management.</>,
  },
  {
    title: 'Local Citation Building',
    body: <>Consistent NAP across 50+ directories that matter.</>,
  },
];

const timelineSteps = [
  {
    when: 'Week 1',
    title: 'Audit & setup',
    description: 'Free audit, then technical fixes, research, and your roadmap.',
  },
  {
    when: 'Within 2 weeks',
    title: 'Google Business Profile',
    description: 'Profile optimizations can start showing results.',
  },
  {
    when: '30 to 60 days',
    title: 'Initial improvements',
    description: 'Most businesses see rankings and calls start to move.',
  },
  {
    when: '3 to 6 months',
    title: 'Local pack rankings',
    description: 'Full map pack rankings typically improve.',
  },
];

/* FAQ answers mirror the FAQPage schema below exactly (built from this array).
   Item 1 uses the Answer Engine pricing from src/data/pricing.ts; the design's
   retired tier prices never render. */
const localFaqs = [
  {
    question: 'How much does Local SEO cost in Daytona Beach?',
    answer:
      'Local SEO runs through our Answer Engine program: a $2,500 one-time build, then $1,500/mo, month to month after a 90-day start. That covers your Google Business Profile, citations, reviews, local content, and AI search visibility, with monthly reporting. See the pricing section above for everything included.',
  },
  {
    question: 'How long does it take to see Local SEO results?',
    answer:
      'Most Daytona Beach businesses see initial improvements within 30 to 60 days, with stronger map pack rankings in 3 to 6 months. Timelines depend on your current online presence, competition level, and how complete your Google Business Profile is when we start.',
  },
  {
    question: 'Can you help with multiple locations?',
    answer:
      'Yes, we manage Local SEO for multi-location businesses across Central Florida. Each location gets its own optimized Google Business Profile, consistent listings, and location-specific content, with one report covering every location.',
  },
  {
    question: "What's included in Local SEO services?",
    answer:
      'Our Local SEO includes Google Business Profile optimization, local citation building across 50+ directories, review management, location-specific content, local link building, and monthly reporting that tracks rankings, calls, and direction requests by location.',
  },
  {
    question: 'Do you work with businesses outside Daytona Beach?',
    answer:
      'Yes. While we are based in Daytona Beach, we work across Volusia, Flagler, and Seminole Counties, including Port Orange, Ormond Beach, New Smyrna Beach, Palm Coast, DeLand, DeBary, and Sanford. We also take on clients elsewhere in Florida and nationwide.',
  },
  {
    question: 'What makes AIO Growth different from other Local SEO companies?',
    answer:
      'We combine local SEO with GEO (Generative Engine Optimization), so your business shows up in Google and in AI answers from ChatGPT, Perplexity, and Google AI Overviews. We report in plain English, work month to month, and you keep everything we build.',
  },
  {
    question: 'Do I need a website for Local SEO to work?',
    answer:
      'A website helps, but a fully optimized Google Business Profile can drive calls and direction requests on its own. We will audit what you have and tell you honestly whether a website should come first.',
  },
  {
    question: 'How do you measure Local SEO success?',
    answer:
      'We track map pack rankings by location, Google Business Profile calls, direction requests, website visits, and review growth, then send a monthly plain-English report showing what moved and what we are doing next.',
  },
  {
    question: 'Can Local SEO help my business appear in AI search results?',
    answer:
      'Yes. AI assistants pull heavily from Google Business Profiles, reviews, and consistent business listings. Our Local SEO work includes the structured data, entity signals, and review profile that help AI tools name your business when customers ask for recommendations.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const localSeoTestimonial = testimonials[1];

/* The six services from the live page cards (titles, subtitles, and feature
   lists verbatim), with a short panel paragraph written for the tab design. */
const localSeoServiceCards: LocalSeoServiceCard[] = [
  {
    id: 'google-business-profile',
    title: 'Google Business Profile',
    subtitle: 'Complete optimization for maximum visibility',
    description:
      'Your Google Business Profile is the first thing local customers see. We complete every field, verify the listing, and keep photos, services, and hours current so the profile turns searches into calls.',
    features: [
      'Profile completion & verification',
      'Photo & video optimization',
      'Service area configuration',
      'Q&A management',
    ],
  },
  {
    id: 'citation-building',
    title: 'Citation Building',
    subtitle: 'Consistent presence across directories',
    description:
      'We submit your business to the directories that matter and clean up duplicates, so your name, address, and phone number read the same everywhere Google checks.',
    features: [
      '50+ core directory submissions',
      'NAP consistency audit',
      'Industry-specific directories',
      'Duplicate cleanup',
    ],
  },
  {
    id: 'review-management',
    title: 'Review Management',
    subtitle: 'Build trust and social proof',
    description:
      'We build a steady flow of real reviews, respond to every one, and handle the negatives calmly, so your rating earns trust before the first call.',
    features: [
      'Review generation strategy',
      'Response templates',
      'Negative review handling',
      'Reputation monitoring',
    ],
  },
  {
    id: 'local-content-strategy',
    title: 'Local Content Strategy',
    subtitle: 'Location-specific content that ranks',
    description:
      'Pages and posts written for each town you serve, tuned to the words local customers actually type, so you rank where you work.',
    features: [
      'Location pages for each area',
      'Local keyword optimization',
      'Community content creation',
      'Local schema markup',
    ],
  },
  {
    id: 'local-link-building',
    title: 'Local Link Building',
    subtitle: 'Authority through local connections',
    description:
      'Links from the businesses, sponsors, and news outlets your customers already trust, earned through real local relationships.',
    features: [
      'Local business partnerships',
      'Community sponsorships',
      'Local news mentions',
      'Chamber of Commerce listings',
    ],
  },
  {
    id: 'tracking-reporting',
    title: 'Tracking & Reporting',
    subtitle: 'Measure what matters',
    description:
      'You see rankings by location, calls, and direction requests in one plain-English report each month, with what we are doing next.',
    features: [
      'Ranking tracking by location',
      'Call & direction tracking',
      'Monthly performance reports',
      'Competitor monitoring',
    ],
  },
];

export default function LocalSEOPage() {
  const { isOpen, selectedService, openDialog, closeDialog } = useContactDialog(
    'Local SEO Strategy Consultation',
  );

  const openPricingDialog = () => openDialog(geoOffer.serviceLabel);

  return (
    <div className="min-h-screen bg-paper">
      <CoreServiceSchema
        name="Local SEO Services in Daytona Beach, Florida — Volusia County"
        description="Local SEO for Daytona Beach and Volusia County businesses. Map pack rankings, GBP optimization, and content that gets you found. Month-to-month, no contracts."
        url="https://aiogrowthseo.com/services/local-seo"
      />
      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free Local SEO Audit"
        description="Let's analyze your local search presence and create a strategy to dominate your market."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      {/* Hero */}
      <section className="bg-paper bg-waves">
        <div className="container mx-auto px-6 pt-10 pb-24">
          <PageBreadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Local SEO' },
            ]}
            className="mb-10 text-navy/60 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
          />
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="mb-5 text-[15px] font-semibold text-pen-text">
                Local SEO · Volusia, Flagler &amp; Seminole Counties
              </p>
              {/* Live H1 kept for rankings; the design's H1 would drop the keyword phrase */}
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-[54px]">
                Local SEO Services for <OrangeUnderline>Daytona Beach</OrangeUnderline> and
                Volusia County Businesses
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-navy/75">
                Most Volusia County businesses are invisible where it matters most: the map pack
                and AI answers. If your competitors in{' '}
                <Link href="/areas-we-serve/daytona-beach" className="font-medium text-brand underline hover:text-navy">
                  Daytona Beach
                </Link>
                ,{' '}
                <Link href="/areas-we-serve/ormond-beach" className="font-medium text-brand underline hover:text-navy">
                  Ormond Beach
                </Link>
                , or{' '}
                <Link href="/areas-we-serve/port-orange" className="font-medium text-brand underline hover:text-navy">
                  Port Orange
                </Link>{' '}
                show up and you do not, that is lost revenue walking past your door. If you are
                not sure{' '}
                <Link href="/blog/why-volusia-hvac-businesses-buried-google" className="font-medium text-brand underline hover:text-navy">
                  are you showing up
                </Link>{' '}
                when customers search, the audit below will tell you.
              </p>

              <AuditForm
                endpoint={FORMSPREE_CONTACT_ENDPOINT}
                serviceLabel="Local SEO Strategy Consultation"
                buttonLabel="Get Your Free Local SEO Audit"
                formType="services_form"
                className="max-w-xl"
              />

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <button
                  type="button"
                  onClick={openAssistant}
                  className="group inline-flex items-center gap-1.5 font-bold text-brand hover:underline"
                >
                  Optimize My Google Profile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-sm text-navy/60">
                  Call{' '}
                  <a href={`tel:${SITE_PHONE_TEL}`} className="font-semibold text-navy hover:text-brand">
                    {SITE_PHONE}
                  </a>
                </p>
              </div>

              <ul className="mt-9 flex flex-wrap gap-2" aria-label="Areas we serve">
                {servingCities.map((city) =>
                  city.href ? (
                    <li key={city.name}>
                      <Link
                        href={city.href}
                        className="inline-block rounded-full border border-hairline bg-white px-3.5 py-1.5 text-sm font-medium text-navy/80 transition-colors hover:border-brand hover:text-brand"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ) : (
                    <li
                      key={city.name}
                      className="rounded-full border border-hairline bg-white px-3.5 py-1.5 text-sm font-medium text-navy/80"
                    >
                      {city.name}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Google Business Profile mock (illustrative, per design) */}
            <Reveal className="relative mx-auto w-full max-w-md">
              <MarkerNote className="absolute -top-3 left-0 z-10 text-[24px] sm:-left-4">
                real photos
              </MarkerNote>
              <div className="rounded-[1.75rem] border border-hairline bg-white p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-tint">
                    <Building2 className="h-7 w-7 text-brand" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xl font-extrabold tracking-tight text-navy">Your Business</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-navy/80">
                      <span className="flex gap-0.5" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-sun text-sun" />
                        ))}
                      </span>
                      <span className="font-semibold">4.9</span> (127)
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">HVAC contractor</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      <span className="font-medium text-emerald-600">Open</span> · Closes 6 PM ·
                      Daytona Beach, FL
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white">
                    <Phone className="h-4 w-4" /> Call
                  </span>
                  <span className="inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm font-bold text-navy">
                    Directions
                  </span>
                  <span className="inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm font-bold text-navy">
                    Website
                  </span>
                </div>

                <div className="mt-5 rounded-2xl bg-paper p-4">
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/10">
                      <User className="h-5 w-5 text-navy/60" />
                    </span>
                    <div>
                      <span className="flex gap-0.5" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-sun text-sun" />
                        ))}
                      </span>
                      <p className="mt-1 text-[15px] leading-relaxed text-navy/85">
                        Showed up same day and fixed it fast. Fair price.
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Local Guide · 1 week ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <MarkerNote className="absolute right-0 top-[46%] z-10 rotate-2 text-[24px] sm:-right-3">
                one-tap calls
              </MarkerNote>
              <MarkerNote className="absolute -bottom-5 left-8 z-10 text-[24px]">
                fresh reviews
              </MarkerNote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Local SEO Matters */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">Why it matters</p>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                Why Local SEO Matters for Central Florida Businesses
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-navy/75">
                46% of all Google searches have local intent. When potential customers search for
                services in Volusia, Flagler, or Seminole County, including{' '}
                <Link href="/blog/local-seo-for-contractors-volusia-county" className="font-medium text-brand underline hover:text-navy">
                  local SEO for contractors in Volusia County
                </Link>
                , Local SEO determines whether they find you or your competitors.
              </p>

              <div className="grid gap-x-10 sm:grid-cols-2">
                {whyBlocks.map((block, index) => (
                  <div key={index} className="mt-10 border-t-2 border-hairline pt-5">
                    <h3 className="text-xl font-extrabold tracking-tight text-navy">{block.title}</h3>
                    <p className="mt-2 leading-relaxed text-navy/70">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <Reveal className="relative">
              <div className="relative rounded-[1.75rem] bg-navy p-8 pb-12">
                <h3 className="text-sm font-bold tracking-[0.2em] text-white/60">
                  LOCAL SEO IMPACT
                </h3>
                {impactStats.map((stat) => (
                  <div key={stat.value + stat.caption} className="mt-8">
                    <p className="text-5xl font-extrabold tracking-tight text-white">
                      {stat.value.replace('%', '')}
                      <span className="text-pen">%</span>
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">
                      {stat.caption}
                    </p>
                  </div>
                ))}
                <div className="absolute -bottom-5 right-6 rotate-3 rounded-md bg-sun px-4 py-2 shadow-lg">
                  <MarkerNote tone="navy" rotate={false} className="text-[22px] leading-tight">
                    that&apos;s your phone ringing
                  </MarkerNote>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services tabs */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What&apos;s included</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Our Local SEO Services
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Comprehensive local search optimization designed specifically for Central Florida
              businesses.
            </p>
          </div>
          <ServicesTabs services={localSeoServiceCards} />
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-tint/60 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What to expect</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              How long does Local SEO take?
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Every market is different. Here&apos;s the typical path, depending on competition
              in your area.
            </p>
          </div>

          <div className="relative mt-16">
            <div
              className="absolute left-[12%] right-[12%] top-7 hidden h-1 rounded-full bg-gradient-to-r from-brand via-brand to-pen md:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
              {timelineSteps.map((step, index) => (
                <div key={step.title} className="relative md:text-center">
                  {index === timelineSteps.length - 1 && (
                    <MarkerNote className="absolute -top-10 left-0 text-[24px] md:left-auto md:right-2">
                      the goal
                    </MarkerNote>
                  )}
                  <span
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-lg font-extrabold md:mx-auto ${
                      index === timelineSteps.length - 1
                        ? 'border-[3px] border-pen bg-pen text-white'
                        : 'border-[3px] border-brand bg-paper text-brand'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <p className="mt-5 text-sm font-bold text-pen-text">{step.when}</p>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing: Answer Engine offer from pricing.ts in the design's two-step layout.
          The design's retired tier cards never render. */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Pricing</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Local SEO Pricing
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Local SEO at AIO Growth runs through one program, the Answer Engine. One setup,
              one monthly plan, everything included.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
            <div className="relative rounded-3xl border border-hairline bg-white p-8 shadow-sm">
              <span className="absolute -top-4 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-navy font-extrabold text-white">
                1
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Step 1 · One-time
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy">
                Foundation setup
              </h3>
              <p className="mt-5">
                <span className="text-5xl font-extrabold tracking-tight text-navy">
                  {geoOffer.build}
                </span>{' '}
                <span className="text-muted-foreground">one-time investment</span>
              </p>
              <p className="mt-2 text-[15px] font-medium text-navy/60">You own all of it.</p>
              <p className="mt-5 leading-relaxed text-navy/75">{geoOffer.subhead}</p>
              <p className="mt-3 leading-relaxed text-navy/75">
                Technical fixes, Google Business Profile optimization, citation cleanup, and the
                location pages your services and towns need.
              </p>
              <Button
                variant="outline"
                onClick={openPricingDialog}
                className="mt-8 h-12 w-full rounded-full border-2 border-navy font-bold text-navy hover:bg-navy hover:text-white"
              >
                Start With the Foundation
              </Button>
            </div>

            <div className="relative rounded-3xl bg-navy p-8 shadow-xl">
              <span className="absolute -top-4 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-pen font-extrabold text-white">
                2
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-white/60">
                Step 2 · Monthly
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white">
                Monthly growth
              </h3>
              <p className="mt-5">
                <span className="text-5xl font-extrabold tracking-tight text-white">
                  {geoOffer.monthly.replace('/mo', '')}
                </span>{' '}
                <span className="text-white/60">/mo · cancel anytime</span>
              </p>
              <p className="mt-2 text-[15px] font-medium text-white/60">
                Month to month. Cancel anytime.
              </p>
              <ul className="mt-6 space-y-3">
                {geoOffer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-white/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-white/70">
                {geoOffer.term}. Backed by the {geoOffer.guarantee}: if ChatGPT, Perplexity, or
                Google AI Overviews does not name your business for your main service in your
                city within 90 days of launch, we keep working at no additional charge until it
                does.
              </p>
              <Button
                onClick={openPricingDialog}
                className="mt-8 h-12 w-full rounded-full bg-brand font-bold text-white hover:bg-brand/90"
              >
                Start Monthly Growth
              </Button>
            </div>
          </div>

          <p className="mt-10 text-center text-navy/70">
            Want the full breakdown? See{' '}
            <Link href="/pricing" className="font-semibold text-brand underline hover:text-navy">
              full pricing
            </Link>{' '}
            or the{' '}
            <Link href={geoOffer.href} className="font-semibold text-brand underline hover:text-navy">
              Answer Engine service page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Testimonial: named live testimonial (the design's placeholder never ships) */}
      <section className="bg-navy py-20">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <div className="mb-7 flex justify-center gap-1" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-sun text-sun" />
            ))}
          </div>
          <blockquote className="text-2xl font-bold leading-snug text-white md:text-[28px]">
            &ldquo;From 20 leads per month to 100+ qualified leads. The local SEO and paid media
            strategies completely transformed our lead generation.&rdquo;
          </blockquote>
          <p className="mt-7 font-bold text-white">
            {localSeoTestimonial.name}
            <span className="font-medium text-white/60"> · {localSeoTestimonial.role}</span>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">Questions</p>
              <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                Frequently Asked Questions
              </h2>
              <p className="text-lg leading-relaxed text-navy/70">
                Still wondering? The assistant in the corner can answer anything else.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {localFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index + 1}`}
                  className="border-b border-hairline"
                >
                  <AccordionTrigger className="py-5 text-left text-lg font-bold text-navy hover:text-brand hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-navy/75">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand bg-waves-light py-24">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Ready to Dominate Local Search?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/85">
            Get your free Local SEO audit and see exactly what&apos;s preventing you from{' '}
            <Link
              href="/blog/how-to-rank-daytona-beach-map-pack"
              className="font-semibold text-white underline hover:text-sun"
            >
              ranking in the local map pack
            </Link>
            .
          </p>
          <AuditForm
            endpoint={FORMSPREE_CONTACT_ENDPOINT}
            serviceLabel="Local SEO Strategy Consultation"
            buttonLabel="Get Your Free Local SEO Audit"
            formType="custom_form"
            buttonVariant="navy"
            className="mx-auto max-w-xl text-left"
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
