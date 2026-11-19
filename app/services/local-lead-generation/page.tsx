'use client';

import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import Link from 'next/link';
import { ArrowRight, Check, MapPin, Phone } from 'lucide-react';
import { funnelSprintOffer } from '@/data/pricing';
import { trackPrimaryCtaClick } from '@/lib/analytics';
import MarkerNote from '../../../components/brand/MarkerNote';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';
import Reveal from '../../../components/brand/Reveal';
import ServiceTabs, { type ServiceTabItem } from '../../../components/service/ServiceTabs';
import ServiceTimeline from '../../../components/service/ServiceTimeline';
import TestimonialBand from '../../../components/service/TestimonialBand';
import ServiceFaq, { type ServiceFaqItem } from '../../../components/service/ServiceFaq';
import { testimonials } from '@/data/clientTestimonials';

const CTA_LABEL = 'Get a Custom Quote';

const homeServiceTypes = [
  'HVAC',
  'Plumbing',
  'Roofing',
  'Electrical',
  'Landscaping',
  'Pest Control',
  'Cleaning',
  'Pool Service',
];

const professionalServiceTypes = [
  'Legal',
  'Medical',
  'Dental',
  'Accounting',
  'Insurance',
  'Financial',
  'Real Estate',
  'Veterinary',
];

const methodSteps = [
  {
    when: 'Phase 1',
    title: 'Rapid Ad Sprints',
    description:
      'Test angles, hooks, and offers across small-budget ad sprints. Kill losers fast. Double down on what gets clicks and leads at the lowest cost.',
  },
  {
    when: 'Phase 2',
    title: 'Build the Funnel',
    description:
      'Once the message wins, we build the landing page and funnel around it - then keep optimizing until conversion hits your target.',
  },
];

const platformTabs: ServiceTabItem[] = [
  {
    id: 'google-local-service-ads',
    title: 'Google Local Service Ads',
    subtitle: 'Google Guaranteed & Google Screened',
    description:
      'Appear at the very top of Google when locals search for your services. Pay per lead, not per click. Google verifies your business.',
    features: [
      'Pay only for actual leads',
      'Top position above regular ads',
      'Google badge builds trust',
      'Dispute bad leads for refunds',
    ],
    note: (
      <>
        <strong>Highest Intent.</strong> <strong>Best for:</strong> HVAC, Plumbing, Electrical,
        Roofing, Legal, Financial.{' '}
        <Link href="/blog/cost-per-lead-hvac-plumbing-electrical-2026" className="font-medium text-brand underline hover:text-navy">
          cost per lead
        </Link>{' '}
        benchmarks for contractors.
      </>
    ),
  },
  {
    id: 'google-search-ads',
    title: 'Google Search Ads',
    subtitle: 'Targeted local keyword campaigns',
    description:
      'Show up when people search for your services in your area. Full control over keywords, ads, and landing pages.',
    features: [
      'Target specific service areas',
      'Call extensions for direct leads',
      'Schedule ads for business hours',
      'Retarget website visitors',
    ],
    note: (
      <>
        <strong>Most Control.</strong> <strong>Best for:</strong> All local services, especially
        those with specific niches
      </>
    ),
  },
  {
    id: 'facebook-instagram-ads',
    title: 'Facebook & Instagram Ads',
    subtitle: 'Local audience lead generation',
    description:
      'Reach local homeowners and decision-makers where they spend time. Great for building awareness and capturing leads before they search.',
    features: [
      'Target by zip code & radius',
      'Homeowner targeting options',
      'Lead forms without leaving app',
      'Lookalike audiences from customers',
    ],
    note: (
      <>
        <strong>Best Reach.</strong> <strong>Best for:</strong> Seasonal services, new patient
        acquisition, brand building
      </>
    ),
  },
];

const serviceAreas: { name: string; href?: string }[] = [
  { name: 'Daytona Beach', href: '/areas-we-serve/daytona-beach' },
  { name: 'Port Orange', href: '/areas-we-serve/port-orange' },
  { name: 'Ormond Beach' },
  { name: 'DeLand', href: '/areas-we-serve/deland' },
  { name: 'New Smyrna Beach' },
  { name: 'Palm Coast' },
  { name: 'DeBary', href: '/areas-we-serve/debary' },
  { name: 'Deltona' },
  { name: 'Sanford', href: '/areas-we-serve/sanford' },
  { name: 'Holly Hill', href: '/areas-we-serve/holly-hill' },
  { name: 'Edgewater' },
  { name: 'Orange City' },
];

const resultStats = [
  {
    value: '$25-75',
    label: 'Per Qualified Lead',
    body: 'Home services leads through Google LSA and Search Ads',
  },
  {
    value: '40-60%',
    label: 'Call Answer Rate',
    body: 'With call tracking and instant notifications',
  },
  {
    value: '3-5x',
    label: 'ROI Target',
    body: 'Revenue generated vs. ad spend investment',
  },
];

const leadGenFaqs: ServiceFaqItem[] = [
  {
    question: 'What is the Funnel Sprint?',
    answer:
      'The Funnel Sprint is our local lead generation program for service businesses. In 6-8 weeks we build and test a validated Google Ads funnel - the ad, the landing page, and the conversion path - before you commit to scaling your spend. Most agencies ask you to spend first and optimize later. We validate first.',
  },
  {
    question: 'How much does local lead generation cost?',
    answer: (
      <>
        The Funnel Sprint setup fee covers the build and validation phase. After that, you pay
        for the ongoing management of a funnel that&apos;s already proven to convert. See our{' '}
        <Link href="/pricing" className="font-medium text-brand underline hover:text-navy">
          pricing page
        </Link>{' '}
        for current rates.
      </>
    ),
  },
  {
    question: 'What types of businesses do you work with?',
    answer:
      'HVAC, plumbing, electrical, roofing, landscaping, dental, legal, and other service businesses in Volusia and Flagler Counties. If you book jobs by phone or form and serve customers locally, the Funnel Sprint was built for you.',
  },
  {
    question: 'How is this different from just running Google Ads?',
    answer:
      'Most local businesses that run Google Ads on their own send traffic to their homepage and wonder why nobody calls. The Funnel Sprint builds a dedicated landing page matched to the ad, with a conversion path designed around your specific service area, your offer, and your buyer. The difference is a page that converts at 8-12% instead of 2-3%.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'Our core market is Volusia and Flagler Counties - Daytona Beach, Port Orange, Ormond Beach, Palm Coast, New Smyrna Beach, and surrounding areas. We are also expanding into Central Florida including Sanford and Orlando.',
  },
  {
    question: "What's the difference between Local Service Ads and regular Google Ads?",
    answer:
      'Local Service Ads appear at the very top of Google (above regular ads) and you pay per lead, not per click. Google also verifies your business with background checks and license verification, giving you a "Google Guaranteed" or "Google Screened" badge that builds trust with potential customers. Regular Google Ads give you more control over messaging and targeting but charge per click regardless of lead quality.',
  },
  {
    question: 'How much should I budget for ad spend?',
    answer:
      'For local service businesses, we recommend starting with $1,000-2,000/month in ad spend to generate meaningful data and a consistent flow of leads. This typically generates 15-40 leads per month depending on your industry. As you see ROI, you can scale up. The key is having enough budget to test and optimize.',
  },
  {
    question: 'How quickly will I start getting leads?',
    answer:
      "For Google Search Ads and Facebook, leads can start within 24-48 hours of campaign launch. For Local Service Ads, there's a verification process that takes 2-4 weeks before your ads go live. Once approved, leads typically come in the same day. We recommend running Search Ads while waiting for LSA approval.",
  },
  {
    question: 'What if I get bad leads?',
    answer: (
      <>
        With Local Service Ads, you can dispute invalid leads (wrong service, wrong area, spam)
        and get refunds from Google. For Search Ads and Facebook, we use negative keywords,
        quality targeting, and lead form questions to filter out bad leads before they cost you
        money. We also track{' '}
        <Link href="/blog/book-rate-vs-cost-per-lead" className="font-medium text-brand underline hover:text-navy">
          book rate vs cost per lead
        </Link>{' '}
        and optimize campaigns to attract better leads over time.
      </>
    ),
  },
  {
    question: 'Do I own my ad accounts?',
    answer:
      'Yes, 100%. We set up campaigns in your accounts or get access to your existing accounts. You own all the data, audiences, and campaign history. If you ever want to part ways, everything stays with you and we provide transition documentation. No lock-in, no hostage accounts.',
  },
];

const leadGenTestimonial = testimonials[1];

export default function LocalLeadGenerationPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog(
    funnelSprintOffer.serviceLabel,
  );

  const openQuoteDialog = (ctaLocation: string, serviceLabel?: string) => {
    trackPrimaryCtaClick({
      pagePath: '/services/local-lead-generation',
      ctaLabel: CTA_LABEL,
      ctaLocation,
      serviceName: serviceLabel ?? funnelSprintOffer.serviceLabel,
    });
    if (serviceLabel) {
      selectService(serviceLabel);
    }
    openDialog();
  };

  return (
    <div className="min-h-screen bg-paper">
      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get a Custom Quote"
        description="Tell us about your business and service area, and we'll scope a Funnel Sprint for your market."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      {/* Hero */}
      <section className="bg-paper bg-waves">
        <div className="container mx-auto px-6 pt-10 pb-24">
          <PageBreadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Local Lead Generation', href: '/services/local-lead-generation', current: true },
            ]}
            className="mb-10 text-navy/60 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
          />
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="mb-5 text-[15px] font-semibold text-pen-text">Funnel Sprint</p>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-[54px]">
                Funnel Sprint - <OrangeUnderline>a validated winning ad + landing page</OrangeUnderline>{' '}
                in 6-8 weeks.
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-navy/75">
                Google Local Service Ads, Search Ads, and Facebook campaigns built specifically
                for home services and professional services businesses in Central Florida. Pay
                for leads, not clicks.
              </p>

              <button
                type="button"
                onClick={() => openQuoteDialog('hero')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pen px-8 py-4 text-lg font-bold text-white transition hover:bg-pen/90"
              >
                {CTA_LABEL}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Lead dashboard mock (illustrative) */}
            <Reveal className="relative mx-auto w-full max-w-md">
              <MarkerNote className="absolute -top-3 left-0 z-10 text-[24px] sm:-left-4">
                pay for leads, not clicks
              </MarkerNote>
              <div className="rounded-[1.75rem] border border-hairline bg-white p-6 shadow-2xl">
                <p className="text-sm font-bold tracking-[0.18em] text-navy/50">
                  ILLUSTRATIVE LEAD DASHBOARD
                </p>
                <div className="mt-5 rounded-2xl border border-hairline p-4">
                  <p className="flex items-center justify-between gap-3">
                    <span className="font-bold text-navy">New lead - HVAC</span>
                    <span className="text-sm font-bold text-brand">Google Guaranteed</span>
                  </p>
                  <p className="mt-1 text-[15px] text-navy/70">
                    Daytona Beach - Local Service Ads
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-paper p-3">
                    <p className="text-lg font-extrabold text-navy">$25-75</p>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                      Per qualified lead
                    </p>
                  </div>
                  <div className="rounded-2xl bg-paper p-3">
                    <p className="text-lg font-extrabold text-navy">40-60%</p>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                      Call answer rate
                    </p>
                  </div>
                  <div className="rounded-2xl bg-brand-tint p-3">
                    <p className="text-lg font-extrabold text-brand">3-5x</p>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                      ROI target
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  Mock dashboard for illustration. Figures are the targets this page describes.
                </p>
              </div>
              <MarkerNote className="absolute -bottom-5 left-8 z-10 text-[24px]">
                validated first
              </MarkerNote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-brand-tint/60 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">The method</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              The Method
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Find the winning message cheaply first - rapid ad sprints - then build and
              optimize the funnel around the proven winner.
            </p>
          </div>
          <ServiceTimeline steps={methodSteps} />
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Who we help</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Local Lead Generation for Your Industry
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              We specialize in generating qualified leads for home services and professional
              services businesses throughout{' '}
              <Link href="/areas-we-serve" className="font-medium text-brand underline hover:text-navy">
                Volusia County
              </Link>{' '}
              and Flagler Counties.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">Home Services</h3>
              <p className="mt-1.5 font-semibold text-navy/50">
                Emergency &amp; scheduled service leads
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {homeServiceTypes.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-sm font-medium text-navy/80"
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 space-y-2.5 border-t border-hairline pt-6">
                {[
                  'Google Local Service Ads (Google Guaranteed)',
                  'Emergency service keyword targeting',
                  'Call-only campaigns for immediate leads',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[15px] leading-relaxed text-navy/75"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-hairline bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                Professional Services
              </h3>
              <p className="mt-1.5 font-semibold text-navy/50">
                Consultation &amp; appointment leads
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {professionalServiceTypes.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-sm font-medium text-navy/80"
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 space-y-2.5 border-t border-hairline pt-6">
                {[
                  'Google Screened verification support',
                  'High-intent consultation searches',
                  'Facebook lead forms for appointments',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[15px] leading-relaxed text-navy/75"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ad platforms: tabs */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Ad platforms</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Three Ways to Generate Local Leads
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              We use the right platform for your business type and goals
            </p>
          </div>
          <ServiceTabs services={platformTabs} ariaLabel="Ad platforms" idPrefix="platforms" />
        </div>
      </section>

      {/* Why local focus */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Why local</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Why Local Focus Matters
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              National agencies don&apos;t understand the Volusia and Flagler market. We live
              here in{' '}
              <Link href="/areas-we-serve/daytona-beach" className="font-medium text-brand underline hover:text-navy">
                Daytona Beach
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-paper p-8">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                The National Agency Problem
              </h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-pen" />
                  Generic campaigns that ignore local competition
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-pen" />
                  Don&apos;t understand seasonal patterns (snowbirds, hurricanes)
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-pen" />
                  <span>
                    Don&apos;t know{' '}
                    <Link href="/blog/daytona-google-ads-wasted-budget" className="font-medium text-brand underline hover:text-navy">
                      why most local ad spend gets wasted
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-pen" />
                  No knowledge of local neighborhoods and demographics
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-pen" />
                  Can&apos;t help with Google Business Profile optimization
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-hairline bg-brand-tint/60 p-8">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                Our Local Approach
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  { title: 'Hyper-local targeting', body: 'By city, zip code, and neighborhood' },
                  {
                    title: 'Seasonal strategy',
                    body: 'Ramp up for snowbird season, prepare for hurricane prep',
                  },
                  {
                    title: 'Local competitor analysis',
                    body: "We know who's advertising what in your area",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                    <span className="leading-relaxed text-navy/75">
                      <span className="font-semibold text-navy">{item.title}</span>
                      <span className="block text-[15px] text-navy/60">{item.body}</span>
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-2.5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                  <span className="leading-relaxed text-navy/75">
                    <span className="font-semibold text-navy">GBP integration</span>
                    <span className="block text-[15px] text-navy/60">
                      Ads +{' '}
                      <Link href="/services/local-seo" className="font-medium text-brand underline hover:text-navy">
                        local SEO
                      </Link>{' '}
                      working together
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Service areas</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Generating Leads Across Central Florida
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {serviceAreas.map((city) => (
              <li
                key={city.name}
                className="flex items-center gap-2 rounded-2xl border border-hairline bg-white px-4 py-3"
              >
                <MapPin className="h-4 w-4 shrink-0 text-pen-text" />
                {city.href ? (
                  <Link href={city.href} className="font-medium text-brand hover:underline">
                    {city.name}
                  </Link>
                ) : (
                  <span className="font-medium text-navy/80">{city.name}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-navy/70">
            We target the exact service areas where your customers live and work
          </p>
        </div>
      </section>

      {/* Results: figures from the live page's own copy */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Results</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              What Local Lead Gen Delivers
            </h2>
          </div>
          <Reveal className="relative">
            <div className="grid gap-10 rounded-[1.75rem] bg-navy p-8 md:grid-cols-3 md:p-10">
              {resultStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-5xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-lg font-bold text-white">{stat.label}</p>
                  <p className="mt-1 text-[15px] font-medium leading-snug text-white/60">
                    {stat.body}
                  </p>
                </div>
              ))}
            </div>
            <MarkerNote className="absolute -bottom-4 right-8 z-10 text-[24px] text-sun">
              the numbers we aim at
            </MarkerNote>
          </Reveal>
        </div>
      </section>

      <TestimonialBand
        quote={leadGenTestimonial.content}
        name={leadGenTestimonial.name}
        role={leadGenTestimonial.role}
      />

      {/* Pricing: Funnel Sprint from pricing.ts in the two-step layout */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Pricing</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Funnel Sprint Pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-3xl border border-hairline bg-white p-8 shadow-sm">
              <p className="text-sm font-bold tracking-[0.14em] text-pen-text">STEP 1</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-navy">
                6-8 Week Funnel Sprint
              </h3>
              <p className="mt-4 text-5xl font-extrabold tracking-tight text-navy">
                {funnelSprintOffer.sprintPrice}
              </p>
              <p className="mt-2 leading-relaxed text-navy/70">
                - {funnelSprintOffer.sprintIncludes}
              </p>
              <div className="mt-6 rounded-2xl bg-pen-tint p-4">
                <p className="font-bold text-pen-text">Guarantee</p>
                <p className="mt-1 text-[15px] leading-relaxed text-navy/80">
                  {funnelSprintOffer.guarantee}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openQuoteDialog('pricing', funnelSprintOffer.serviceLabel)}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-bold text-white transition hover:bg-brand/90"
              >
                {CTA_LABEL}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col rounded-3xl bg-navy p-8 text-white shadow-xl">
              <p className="text-sm font-bold tracking-[0.14em] text-sun">STEP 2</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
                Ongoing management
              </h3>
              <ul className="mt-6 flex-1 space-y-3">
                {funnelSprintOffer.ongoingTiers.map((tier) => (
                  <li
                    key={tier.price}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3"
                  >
                    <span className="font-bold">{tier.price}</span>
                    <span className="text-white/70">({tier.adSpend})</span>
                  </li>
                ))}
              </ul>
              {funnelSprintOffer.diyVideoHref.startsWith('http') && (
                <div className="mt-6 border-t border-white/15 pt-6 text-center">
                  <p className="font-bold">DIY path</p>
                  <p className="mt-1 text-[15px] text-white/70">
                    Prefer to run it yourself? Watch our free long-form walkthrough.
                  </p>
                  <a
                    href={funnelSprintOffer.diyVideoHref}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 font-bold text-white transition hover:border-white"
                  >
                    Free Long-Form Walkthrough
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ accordion. The page's FAQPage schema is the inline script
          below, preserved verbatim, so ServiceFaq renders no schema here. */}
      <ServiceFaq faqs={leadGenFaqs} />

      {/* Final CTA: keeps the page's quote-dialog flow and copy */}
      <section className="bg-brand bg-waves-light py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-[40px]">
              Ready for a Validated Winning Funnel?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Tell us about your service area and target customers. We will scope a Funnel
              Sprint for your market.
            </p>
            <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] bg-white p-8 text-left shadow-2xl">
              <h3 className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-navy">
                <Phone className="h-6 w-6 text-brand" />
                Get a Custom Quote
              </h3>
              <p className="mt-1.5 text-navy/70">
                Tell us about your business and service area - no obligation
              </p>
              <button
                type="button"
                onClick={() => openQuoteDialog('final')}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-bold text-white transition hover:bg-brand/90"
              >
                {CTA_LABEL}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-8 text-white/70">
              Serving home services and professional services businesses across Volusia &amp;
              Flagler Counties
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the Funnel Sprint?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Funnel Sprint is our local lead generation program for service businesses. In 6–8 weeks we build and test a validated Google Ads funnel — the ad, the landing page, and the conversion path — before you commit to scaling your spend. Most agencies ask you to spend first and optimize later. We validate first.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does local lead generation cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Funnel Sprint setup fee covers the build and validation phase. After that, you pay for the ongoing management of a funnel that\'s already proven to convert. See our pricing page for current rates.',
                },
              },
              {
                '@type': 'Question',
                name: 'What types of businesses do you work with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HVAC, plumbing, electrical, roofing, landscaping, dental, legal, and other service businesses in Volusia and Flagler Counties. If you book jobs by phone or form and serve customers locally, the Funnel Sprint was built for you.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is this different from just running Google Ads?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most local businesses that run Google Ads on their own send traffic to their homepage and wonder why nobody calls. The Funnel Sprint builds a dedicated landing page matched to the ad, with a conversion path designed around your specific service area, your offer, and your buyer. The difference is a page that converts at 8–12% instead of 2–3%.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which areas do you serve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our core market is Volusia and Flagler Counties — Daytona Beach, Port Orange, Ormond Beach, Palm Coast, New Smyrna Beach, and surrounding areas. We are also expanding into Central Florida including Sanford and Orlando.',
                },
              },
            ],
          }),
        }}
      />

      <ProfessionalServiceSchema
        serviceName="Local Lead Generation Ads"
        serviceDescription="Google Local Service Ads, Search Ads, and Facebook lead generation campaigns for home services and professional services businesses in Volusia and Flagler Counties"
        serviceUrl="https://aiogrowthseo.com/services/local-lead-generation"
        serviceType="Local Advertising Services"
        dateModified="2026-10-03T10:00:00Z"
        areaServed={[
          {
            '@type': 'County',
            name: 'Volusia County',
            containedInPlace: { '@type': 'State', name: 'Florida' },
          },
          {
            '@type': 'County',
            name: 'Flagler County',
            containedInPlace: { '@type': 'State', name: 'Florida' },
          },
        ]}
        offers={{
          '@type': 'Offer',
          name: 'Funnel Sprint',
          description: 'Validated local ad funnel built and tested in 6-8 weeks',
        }}
      />
    </div>
  );
}
