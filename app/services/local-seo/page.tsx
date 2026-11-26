'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, Building2, Check, Phone, Star, User, X } from 'lucide-react';
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
  {
    question: 'How do AI assistants decide which Daytona Beach SEO company to name?',
    answer:
      'They read what they can verify. That means your Google Business Profile, your reviews and what customers say in them, consistent listings on directories like Clutch, and service pages deep enough to quote. In our November 2026 scan of 34 buyer questions, the Daytona pages ChatGPT and Perplexity cited ran 2,432 to 4,010 words, with real local detail on services, towns, pricing, and process. A thin page gives the engine nothing to work with, so it names someone else. The fix is not a trick. It is giving the engine more true, specific things to say about you than it can find about anyone else.',
  },
  {
    question: 'Do you track whether AI recommends my business?',
    answer:
      'Yes. We run a fixed set of buyer questions across ChatGPT, Perplexity, and Google AI Overviews on a weekly cycle. The questions are the ones your customers actually ask, written in your town and your service terms. For each one we log whether your business is mentioned, recommended, or cited as a source, and which competitors and pages show up instead. That goes in your report next to your rankings and calls, so you can see AI visibility move alongside the numbers you already watch.',
  },
  {
    question: 'How is AI search visibility different from map pack rankings?',
    answer:
      'The map pack is Google\'s local list of three businesses under a search, with the map and the call buttons. AI visibility is whether an assistant like ChatGPT or Perplexity names your business inside a written answer. They read many of the same signals: your profile, your reviews, your listings, and the depth of your pages. So the same work feeds both. But they are measured separately, because a business can hold a map pack spot and still go unnamed in AI answers, or the other way around.',
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

/* November 2026 buyer-question scan (34 questions, 723 citations). These are the
   only proof figures the AI visibility sections may use. */
const scanStats = [
  { value: '34', caption: 'buyer questions asked across ChatGPT, Perplexity, and Google AI Overviews' },
  { value: '723', caption: 'citations logged across every answer' },
  { value: '68.6%', caption: 'of citations went to rival and publisher sites' },
  { value: '3.0%', caption: 'went to directories' },
];

const measuredLoop = [
  {
    title: 'Scan the questions',
    description: 'We ask the engines the questions your buyers ask, in your town and your terms.',
  },
  {
    title: 'Read what gets cited',
    description: 'We log which businesses get named and which pages the engines quote to name them.',
  },
  {
    title: 'Plan the fix',
    description: 'We compare your profile, listings, and pages to what got cited and pick the gaps that matter.',
  },
  {
    title: 'Ship it',
    description: 'Profile updates, listing cleanup, review requests, and deeper pages go live.',
  },
  {
    title: 'Measure again',
    description: 'Next week the same questions run again, so you can see what moved and what did not.',
  },
];

const citedVsSkipped = [
  {
    topic: 'Depth',
    cited: 'Thousands of words, with each service explained on its own terms',
    skipped: 'A few hundred words and a bulleted list of services',
  },
  {
    topic: 'AI visibility',
    cited: 'A named section on how the business shows up in AI answers',
    skipped: 'No mention of ChatGPT, Perplexity, or AI Overviews at all',
  },
  {
    topic: 'Pricing',
    cited: 'Published pricing, so the engine can answer "what does it cost"',
    skipped: '"Call for a quote" and nothing else',
  },
  {
    topic: 'Industries',
    cited: 'Industries named one by one, with how each one buys',
    skipped: '"We work with businesses of all sizes"',
  },
  {
    topic: 'FAQs',
    cited: 'Owner-level questions answered in the city\'s own terms',
    skipped: 'Generic questions that could sit on any site in any state',
  },
  {
    topic: 'Proof',
    cited: 'Reviews and results from local owners, attributed by name',
    skipped: 'Unsourced claims and stock testimonials',
  },
  {
    topic: 'Process',
    cited: 'A simple numbered process a buyer can follow',
    skipped: 'A vague promise to "grow your business"',
  },
  {
    topic: 'Local detail',
    cited: 'Real neighborhoods, towns, roads, and seasons',
    skipped: 'The city name dropped into a template',
  },
];

const nearbyTowns: Array<{ name: string; href?: string; character: string }> = [
  {
    name: 'Ormond Beach',
    href: '/areas-we-serve/ormond-beach',
    character: 'Established neighborhoods and long-time residents who read reviews closely and stay loyal once they pick.',
  },
  {
    name: 'Port Orange',
    href: '/areas-we-serve/port-orange',
    character: 'Family suburb with steady demand for home services, dental, and kids\' activities.',
  },
  {
    name: 'New Smyrna Beach',
    href: '/areas-we-serve/new-smyrna-beach',
    character: 'Beach town with a visitor season on Flagler Avenue and a year-round residential base behind it.',
  },
  {
    name: 'Palm Coast',
    href: '/areas-we-serve/palm-coast',
    character: 'Fast-growing Flagler County city full of newer residents who have not picked their providers yet.',
  },
  {
    name: 'DeLand',
    character: 'County seat and college town with a historic downtown where word of mouth still drives choices.',
  },
  {
    name: 'DeBary',
    href: '/areas-we-serve/debary',
    character: 'Quiet residential town on the I-4 and SunRail line, where buyers compare Volusia and Seminole providers.',
  },
  {
    name: 'Sanford',
    href: '/areas-we-serve/sanford',
    character: 'Seminole County riverfront city on the edge of the Orlando metro, with a busy restaurant scene downtown.',
  },
  {
    name: 'Holly Hill',
    href: '/areas-we-serve/holly-hill',
    character: 'Small mainland city between Daytona and Ormond, full of owner-run trades and shops.',
  },
];

const industriesServed = [
  {
    name: 'Home services (HVAC, plumbing, roofing)',
    searches: 'Urgent, phone-first searches with "near me" and "open now," spiking after storms and in the summer heat.',
  },
  {
    name: 'Healthcare and dental',
    searches: 'Patients check insurance, "accepting new patients," and reviews before they ever call.',
  },
  {
    name: 'Legal',
    searches: 'Long research cycles, and more and more of it happens as questions typed into AI assistants.',
  },
  {
    name: 'Restaurants and hospitality',
    searches: 'Visitor-driven, shaped by the event calendar, and decided by photos, menus, and hours.',
  },
  {
    name: 'Real estate',
    searches: 'Neighborhood-level searches, often from relocating buyers researching from out of state.',
  },
  {
    name: 'Professional services',
    searches: 'Accountants, consultants, and advisors are compared on trust, so reviews and detail carry the decision.',
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

      {/* AI search visibility: scan figures limited to the November 2026 buyer-question scan */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">AI search</p>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                Local SEO Now Includes AI Search Visibility
              </h2>
              <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-navy/75">
                <p>
                  Your next customer may never scroll a page of links. More buyers in Daytona Beach
                  now type a full question into ChatGPT, Perplexity, or Google and read the answer:
                  &quot;who is the best SEO company in Daytona Beach,&quot; &quot;who provides AI
                  visibility services in Daytona Beach Florida,&quot; &quot;which roofer in Port
                  Orange answers the phone on a Saturday.&quot; The engines answer with names. They
                  do not pull those names out of thin air. They pull them from what they can read
                  and check.
                </p>
                <p>
                  That reading list is short and predictable. Your Google Business Profile. Your
                  reviews: how many, how recent, and what customers say in them. Directory listings
                  that match each other, with Clutch the directory the engines cite most often in
                  this market. And service pages deep enough to quote, with real local detail about
                  what you do, who you do it for, and where.
                </p>
                <p>
                  Thin pages give the engines nothing to quote. A short service page that says
                  &quot;we serve Daytona Beach&quot; three times is not evidence of anything. That
                  is the whole problem this page is built to solve, for us and for the businesses
                  we work with. Our{' '}
                  <Link href="/services/geo-optimization" className="font-medium text-brand underline hover:text-navy">
                    AI search optimization (GEO) service
                  </Link>{' '}
                  goes deeper on the AI side; here is how it fits into local SEO.
                </p>
              </div>

              <h3 className="mt-12 text-2xl font-extrabold tracking-tight text-navy">
                The weekly loop
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy/75">
                Local SEO is no longer a set-and-forget retainer task. It is a measured loop, and
                it runs every week:
              </p>
              <ol className="mt-6 space-y-5">
                {measuredLoop.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[3px] border-brand bg-paper font-extrabold text-brand">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-lg font-extrabold tracking-tight text-navy">{step.title}</p>
                      <p className="mt-0.5 leading-relaxed text-navy/70">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/75">
                Your report shows the loop in plain English. For each buyer question, you see
                whether ChatGPT, Perplexity, and Google AI Overviews named your business, which
                competitors they named instead, and which pages they quoted to do it. Next to that
                sit the numbers you already know: map pack rankings, calls, and direction requests.
                When a fix ships, you can watch the same question the following week and see
                whether the answer changed.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/75">
                Every result is measured, never promised. We&apos;re seeing page one in 45 to 60
                days, many in the top 30.
              </p>
            </div>

            <Reveal className="relative">
              <div className="relative rounded-[1.75rem] bg-navy p-8 pb-12">
                <h3 className="text-sm font-bold tracking-[0.2em] text-white/60">
                  WHAT WE MEASURED · NOVEMBER 2026
                </h3>
                {scanStats.map((stat) => (
                  <div key={stat.value} className="mt-8">
                    <p className="text-5xl font-extrabold tracking-tight text-white">
                      {stat.value.endsWith('%') ? (
                        <>
                          {stat.value.replace('%', '')}
                          <span className="text-pen">%</span>
                        </>
                      ) : (
                        stat.value
                      )}
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">
                      {stat.caption}
                    </p>
                  </div>
                ))}
                <p className="mt-8 text-[15px] leading-relaxed text-white/70">
                  The Daytona provider pages the engines cited ran 2,432 to 4,010 words. We publish
                  our scan method and rerun it weekly; clients see the same numbers we see.
                </p>
                <div className="absolute -bottom-5 right-6 rotate-3 rounded-md bg-sun px-4 py-2 shadow-lg">
                  <MarkerNote tone="navy" rotate={false} className="text-[22px] leading-tight">
                    rerun every week
                  </MarkerNote>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cited vs skipped: the page standard the scan surfaced */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">The cited standard</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              What the Pages AI Cites Have in Common
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              When we read the Daytona provider pages the engines chose to quote, the same pattern
              showed up again and again. So did the pattern on the pages they passed over.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-hairline bg-white shadow-sm">
            <div className="hidden grid-cols-[0.6fr_1fr_1fr] gap-6 border-b border-hairline bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-white md:grid">
              <span>What they read</span>
              <span>Pages the engines cite</span>
              <span className="text-white/60">Pages they skip</span>
            </div>
            <ul>
              {citedVsSkipped.map((row) => (
                <li
                  key={row.topic}
                  className="grid grid-cols-1 gap-3 border-b border-hairline px-8 py-5 last:border-b-0 md:grid-cols-[0.6fr_1fr_1fr] md:gap-6"
                >
                  <span className="font-extrabold tracking-tight text-navy">{row.topic}</span>
                  <span className="flex items-start gap-2.5 text-navy/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                    {row.cited}
                  </span>
                  <span className="flex items-start gap-2.5 text-navy/55">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/10">
                      <X className="h-3.5 w-3.5 text-navy/50" strokeWidth={3} />
                    </span>
                    {row.skipped}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-navy/75">
            <p>
              None of this is decoration. Each row is a question a buyer asks before they call, and
              an engine can only repeat an answer it found somewhere. If your page says what you
              charge, the engine can answer &quot;what does it cost.&quot; If it names the
              industries you serve, the engine can match you to a dentist or a roofer. If it names
              Seabreeze, Port Orange, or the beachside, it can match you to someone who lives
              there.
            </p>
            <p>
              The pages they skip are not bad businesses. Many of them belong to good companies
              with happy customers. They just never wrote down enough for a machine to quote, so
              the machine quoted someone else.
            </p>
          </div>

          <p className="mt-8 max-w-3xl text-lg font-semibold leading-relaxed text-navy">
            This page is built to the cited standard, and the scan that proved the standard is the
            same scan we run for clients.
          </p>
        </div>
      </section>

      {/* Daytona and Volusia specifics */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Our market</p>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Daytona Beach and Volusia County, Specifically
            </h2>
            <p className="text-lg leading-relaxed text-navy/75">
              Daytona Beach runs on two economies at once, and they search in different ways. A
              local SEO plan that treats them as one market misses half the calls.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-paper p-8">
              <h3 className="text-xl font-extrabold tracking-tight text-navy">
                The visitor economy
              </h3>
              <p className="mt-3 leading-relaxed text-navy/75">
                It runs on the event calendar. Speedweeks and the Daytona 500 in February, Bike
                Week in March, spring break, summer families, and Biketoberfest in October. Each
                one brings a wave of searches from people who do not know the area and decide fast:
                restaurants, rentals, repairs, towing, urgent care. Profiles and pages that are
                ready before the wave catch it.
              </p>
            </div>
            <div className="rounded-3xl border border-hairline bg-paper p-8">
              <h3 className="text-xl font-extrabold tracking-tight text-navy">
                The resident economy
              </h3>
              <p className="mt-3 leading-relaxed text-navy/75">
                It runs along the International Speedway Boulevard and Beville Road corridors,
                through Midtown, and out to the growing LPGA area. New households there search
                &quot;near me&quot; for everything, from a dentist to an AC repair, with no
                established favorites. Whoever shows up first with good reviews becomes the
                favorite.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-navy/75">
            Search also splits by neighborhood. The Main Street District and Seabreeze on the
            beachside draw a different crowd than Downtown along Beach Street or Midtown on the
            mainland, and the bridges between the beachside and the mainland matter more to a
            &quot;near me&quot; search than most owners expect. We build pages and profiles that
            name the parts of town you actually serve.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">Towns we serve</h3>
              <ul className="mt-6 space-y-4">
                {nearbyTowns.map((town) => (
                  <li key={town.name} className="border-t-2 border-hairline pt-4">
                    <p className="font-extrabold tracking-tight text-navy">
                      {town.href ? (
                        <Link href={town.href} className="text-brand underline hover:text-navy">
                          {town.name}
                        </Link>
                      ) : (
                        town.name
                      )}
                    </p>
                    <p className="mt-1 leading-relaxed text-navy/70">{town.character}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                Industries we work with
              </h3>
              <ul className="mt-6 space-y-4">
                {industriesServed.map((industry) => (
                  <li key={industry.name} className="border-t-2 border-hairline pt-4">
                    <p className="font-extrabold tracking-tight text-navy">{industry.name}</p>
                    <p className="mt-1 leading-relaxed text-navy/70">{industry.searches}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-16 max-w-3xl rounded-3xl bg-brand-tint/60 p-8">
            <MarkerNote className="absolute -top-5 right-6 text-[24px]">we live here</MarkerNote>
            <h3 className="text-xl font-extrabold tracking-tight text-navy">
              Why owners here pick a Daytona team over an Orlando agency
            </h3>
            <p className="mt-3 leading-relaxed text-navy/75">
              Volusia is its own search market, with its own competitors and its own calendar. We
              know Bike Week will move your calls before it shows up in a report, we know which
              side of the bridge your customers live on, and we can meet you in person in the same
              week you ask. You get a team that drives the same roads your customers do, not an
              account manager who learned your town from a map.
            </p>
          </div>
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
