'use client';

import CoreServiceSchema from '@/components/schema/CoreServiceSchema';

import Link from 'next/link';
import { Check } from 'lucide-react';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { geoOffer } from '@/data/pricing';
import { FORMSPREE_CONTACT_ENDPOINT } from '@/data/site';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import AuditForm from '../../../components/brand/AuditForm';
import MarkerNote from '../../../components/brand/MarkerNote';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';
import Reveal from '../../../components/brand/Reveal';
import ServiceTimeline from '../../../components/service/ServiceTimeline';
import AnswerEnginePricing from '../../../components/service/AnswerEnginePricing';
import TestimonialBand from '../../../components/service/TestimonialBand';
import ServiceFaq from '../../../components/service/ServiceFaq';
import ServiceCta from '../../../components/service/ServiceCta';

const brokenItems = [
  <>
    <Link
      href="/blog/how-to-choose-daytona-beach-seo-company"
      className="font-medium text-brand underline hover:text-navy"
    >
      Most agencies
    </Link>{' '}
    charge $3,000/month for basic keyword research and two blog posts
  </>,
  <>They promise &apos;ongoing optimizations&apos; but never fix the real technical issues</>,
  <>You&apos;re paying for busywork, not business growth</>,
  <>SEO has become propaganda - all fluff, no substance</>,
];

const solutionItems = [
  'We focus on what actually moves the needle: technical fixes, psychology-driven content, and scalable systems',
  'One-time fixes that compound over time vs endless retainers',
  'GEO (Generative Engine Optimization) for the AI search era',
  'Psychology-driven content that converts visitors to customers',
];

const traditionalItems = [
  'Keyword research with no strategic context',
  'Random blog posts targeting individual keywords',
  'No understanding of topical relationships',
  'Ignores AI search and answer engines entirely',
];

const processSteps = [
  {
    when: 'Week 1-2',
    title: 'Phase 1: Technical Foundation',
    description: 'We fix what\u2019s broken before building what\u2019s new.',
    points: [
      'Complete technical SEO audit using custom tools',
      'Fix Core Web Vitals and page speed issues',
      'Implement proper schema markup',
      'Resolve crawl errors and indexation problems',
    ],
  },
  {
    when: 'Week 3-4',
    title: 'Phase 2: Psychology-Driven Content',
    description: 'Content that converts, not just ranks.',
    points: [
      'Keyword research based on actual user intent',
      'Content strategy rooted in consumer decision science',
      'Answer Engine Optimization (AEO)',
      'Local SEO optimization for geographic targeting',
    ],
  },
  {
    when: 'Week 5-6',
    title: 'Phase 3: AI Content Engine',
    description: 'AI generates, humans perfect, rankings compound.',
    points: [
      'AI Content Engine setup and automation',
      'Automated content creation using topical map as roadmap',
      '80/20 approach: AI generates, humans perfect',
      'Content strategy tied to topical authority building',
    ],
  },
];

const whyChooseBlocks = [
  {
    title: 'Psychology-Driven Strategy',
    body: 'Content based on consumer psychology principles and understanding how people actually make buying decisions.',
  },
  {
    title: 'AI-First Methodology',
    body: 'Generative Engine Optimization (GEO) for AI search and custom AI tools replacing expensive SaaS solutions.',
  },
  {
    title: 'Transparent Pricing',
    body: 'No monthly retainers or hidden fees. One-time investments with lasting results and clear deliverables.',
  },
  {
    title: 'Rapid Implementation',
    body: 'Results in 30-45 days, not 6 months. Technical fixes that immediately impact performance.',
  },
];

const seoFaqs = [
  {
    question: 'How is this different from other SEO agencies?',
    answer:
      'Most agencies sell you monthly retainers for basic tasks. We fix your fundamental SEO issues once, then give you the systems to scale. No ongoing fees for work that should be done right the first time.',
  },
  {
    question: 'Why one-time pricing instead of monthly?',
    answer:
      'Because real SEO fixes compound over time. Technical optimizations, proper content strategy, and programmatic systems work for months or years without constant tweaking. We build assets, not dependencies.',
  },
  {
    question: 'What if I need ongoing SEO support?',
    answer:
      'Our Growth SEO plan includes automation systems and templates that handle ongoing optimization. For businesses needing custom support, we offer project-based work rather than open-ended retainers.',
  },
  {
    question: 'How quickly will I see results?',
    answer:
      'Technical fixes often show improvements within 2-4 weeks. Content and authority building takes 60-90 days for full impact. Unlike agencies promising "6-month minimum contracts," we deliver measurable results quickly.',
  },
];

export default function SEOServicesPage() {
  const { isOpen, selectedService, openDialog, closeDialog } = useContactDialog('Free SEO Audit');

  const openPricingDialog = () => openDialog(geoOffer.serviceLabel);

  return (
    <div className="min-h-screen bg-paper">
      <CoreServiceSchema
        name="SEO Services That Drive Real Organic Growth"
        description="Technical SEO combined with content strategy built for service businesses. No bloated retainers — just the work that actually moves rankings."
        url="https://aiogrowthseo.com/services/search-engine-optimization"
      />
      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free SEO Audit"
        description="Let's discuss your SEO goals and see exactly what's holding your website back."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      {/* Hero */}
      <section className="bg-paper bg-waves">
        <div className="container mx-auto px-6 pt-10 pb-24">
          <PageBreadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'SEO Services' },
            ]}
            className="mb-10 text-navy/60 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
          />
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="mb-5 text-[15px] font-semibold text-pen-text">
                SEO Rewired: Technical SEO + Local Signals
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-[54px]">
                Stop paying $3K/month for two blogs. Get <OrangeUnderline>real SEO</OrangeUnderline>{' '}
                that combines technical optimization with consumer psychology.
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-navy/75">
                Traditional SEO agencies sell you retainers. We sell you results. Our proven
                strategies help{' '}
                <Link href="/industries/professional-services" className="font-medium text-brand underline hover:text-navy">
                  professional services
                </Link>{' '}
                and{' '}
                <Link href="/industries/legal-services" className="font-medium text-brand underline hover:text-navy">
                  legal services
                </Link>{' '}
                dominate their markets with real SEO that drives business growth.
              </p>

              <AuditForm
                endpoint={FORMSPREE_CONTACT_ENDPOINT}
                serviceLabel="Free SEO Audit"
                buttonLabel="Get Your Free SEO Audit"
                formType="services_form"
                className="max-w-xl"
              />
            </div>

            {/* Case study card: the page's own Privada Cigar Club numbers */}
            <Reveal className="relative mx-auto w-full max-w-md">
              <MarkerNote className="absolute -top-3 left-0 z-10 text-[24px] sm:-left-4">
                real client numbers
              </MarkerNote>
              <div className="rounded-[1.75rem] border border-hairline bg-white p-6 shadow-2xl">
                <p className="text-sm font-bold tracking-[0.18em] text-navy/50">
                  ORGANIC TRAFFIC · PRIVADA CIGAR CLUB
                </p>
                <p className="mt-4 text-5xl font-extrabold tracking-tight text-navy">
                  +200% <span className="text-2xl text-pen-text">in 45 days</span>
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-paper p-4 text-center">
                    <p className="text-2xl font-extrabold text-navy/60">2,000</p>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      Before (monthly visits)
                    </p>
                  </div>
                  <div className="rounded-2xl bg-brand-tint p-4 text-center">
                    <p className="text-2xl font-extrabold text-brand">6,000+</p>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      After (monthly visits)
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-navy/75">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                    Key wins: Technical fixes + content optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                    ROI: $15,000 in additional revenue from organic traffic
                  </li>
                </ul>
              </div>
              <MarkerNote className="absolute -bottom-5 left-8 z-10 text-[24px]">
                45 days, not 6 months
              </MarkerNote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why traditional SEO is broken / our solution */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">The problem</p>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                Why Traditional SEO is Broken
              </h2>
              <div className="grid gap-x-10">
                {brokenItems.map((item, index) => (
                  <div key={index} className="mt-8 border-t-2 border-hairline pt-5">
                    <p className="leading-relaxed text-navy/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">Our SEO solution</p>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                Our SEO Solution
              </h2>
              <div className="grid gap-x-10">
                {solutionItems.map((item) => (
                  <div key={item} className="mt-8 border-t-2 border-hairline pt-5">
                    <p className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                      </span>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO vs GEO comparison */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">The system</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Traditional SEO vs Our SEO/GEO System
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              We create a strategic roadmap to topical authority using semantic SEO and AI-powered
              content systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-white p-8">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                Traditional SEO Approach
              </h3>
              <p className="mt-1.5 font-semibold text-navy/50">
                Keywords → Content → Hope for Rankings
              </p>
              <ul className="mt-6 space-y-3">
                {traditionalItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 leading-relaxed text-navy/70">
                    <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-navy/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-hairline bg-brand-tint/60 p-8">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">Our SEO/GEO System</h3>
              <p className="mt-1.5 font-semibold text-brand">
                Technical Audit → Topical Mapping → Semantic SEO → Content Automation
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong>Topical authority mapping</strong> - understand your entire topic cluster
                  </span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span>
                    <Link
                      href="/guides/2026-seo-predictions-ai-automation-entity-optimization"
                      className="font-medium text-brand underline hover:text-navy"
                    >
                      <strong>Entity-based SEO</strong>
                    </Link>{' '}
                    - optimize for concepts, not just keywords
                  </span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong>Answer Engine Optimization (AEO)</strong> - rank in AI &amp; voice search
                  </span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed text-navy/75">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span>
                    <strong>AI content automation</strong> - scale with 80/20 human oversight
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-tint/60 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What to expect</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Our SEO Process
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Three phases that transform your website from invisible to irresistible.
            </p>
          </div>
          <ServiceTimeline steps={processSteps} />
        </div>
      </section>

      {/* Pricing: the page's own ladder prices are the retired set, so the
          section carries the Answer Engine from pricing.ts (phase 1 pattern). */}
      <AnswerEnginePricing
        heading="Transparent Pricing"
        intro={
          <>
            No retainers. No hidden fees. Just results-driven SEO with clear deliverables. Our
            SEO work runs through one flagship program, the Answer Engine.
          </>
        }
        foundationNote="Technical audit, gap analysis, keyword and AI-prompt research, topical map and roadmap, on-page optimization, and schema implementation."
        onStart={openPricingDialog}
      />

      {/* Case studies */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Results</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Proven Results
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Real businesses. Real growth. Real ROI. We track{' '}
              <Link href="/blog/cost-per-lead-hvac-plumbing-electrical-2026" className="font-medium text-brand underline hover:text-navy">
                cost per lead benchmarks
              </Link>{' '}
              and{' '}
              <Link href="/blog/book-rate-vs-cost-per-lead" className="font-medium text-brand underline hover:text-navy">
                book rate vs cost per lead
              </Link>{' '}
              so traffic gains turn into booked jobs - not vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                Privada Cigar Club
              </h3>
              <p className="mt-1.5 font-semibold text-brand">
                200% organic traffic increase in 45 days
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-paper p-4 text-center">
                  <p className="text-2xl font-extrabold text-navy/60">2,000</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Before (monthly visits)
                  </p>
                </div>
                <div className="rounded-2xl bg-brand-tint p-4 text-center">
                  <p className="text-2xl font-extrabold text-brand">6,000+</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    After (monthly visits)
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-navy/75">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                  Key wins: Technical fixes + content optimization
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                  ROI: $15,000 in additional revenue from organic traffic
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-hairline bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                Super Cash For Houses
              </h3>
              <p className="mt-1.5 font-semibold text-brand">100+ qualified leads per month</p>
              <dl className="mt-6 space-y-4 text-[15px] leading-relaxed">
                <div className="flex items-start justify-between gap-6 border-t border-hairline pt-4">
                  <dt className="shrink-0 font-semibold text-navy/50">Challenge:</dt>
                  <dd className="text-right font-medium text-navy/80">
                    Competing in saturated real estate market
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-hairline pt-4">
                  <dt className="shrink-0 font-semibold text-navy/50">Solution:</dt>
                  <dd className="text-right font-medium text-navy/80">
                    Local SEO + programmatic content strategy
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-hairline pt-4">
                  <dt className="shrink-0 font-semibold text-navy/50">Result:</dt>
                  <dd className="text-right font-medium text-brand">
                    Consistent lead flow without paid advertising
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <TestimonialBand
        quote="In just 45 days, AIO Growth's SEO strategy drove a 200% increase in traffic for Privada Cigar Club - proof that real SEO works faster and smarter."
        name="Brian Descind"
        role="Privada Cigar Club"
      />

      {/* Why choose us */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Why us</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Why Choose Our SEO Approach
            </h2>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseBlocks.map((block) => (
              <div key={block.title} className="mt-10 border-t-2 border-hairline pt-5">
                <h3 className="text-xl font-extrabold tracking-tight text-navy">{block.title}</h3>
                <p className="mt-2 leading-relaxed text-navy/70">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFaq
        faqs={seoFaqs.map((faq) => ({ ...faq, schemaText: faq.answer }))}
        withSchema
      />

      <ServiceCta
        heading="Ready to Get Started?"
        copy={
          <>
            <p>
              Get your free SEO audit and see exactly what&apos;s holding your website back.
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-base text-white/75">
              <Check className="h-5 w-5 shrink-0" strokeWidth={3} />
              No obligation. Join 100+ businesses that chose results over retainers
            </p>
          </>
        }
        endpoint={FORMSPREE_CONTACT_ENDPOINT}
        serviceLabel="Free SEO Audit"
        buttonLabel="Get Your Free SEO Audit"
      />
    </div>
  );
}
