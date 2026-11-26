'use client';

import CoreServiceSchema from '@/components/schema/CoreServiceSchema';

import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { geoOffer, geoOfferProse } from '@/data/pricing';
import { FORMSPREE_CONTACT_ENDPOINT } from '@/data/site';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import AuditForm from '../../../components/brand/AuditForm';
import MarkerNote from '../../../components/brand/MarkerNote';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';
import Reveal from '../../../components/brand/Reveal';
import ServiceTabs, { type ServiceTabItem } from '../../../components/service/ServiceTabs';
import ServiceTimeline from '../../../components/service/ServiceTimeline';
import AnswerEnginePricing from '../../../components/service/AnswerEnginePricing';
import TestimonialBand from '../../../components/service/TestimonialBand';
import ServiceFaq, { type ServiceFaqItem } from '../../../components/service/ServiceFaq';
import ServiceCta from '../../../components/service/ServiceCta';
import { testimonials } from '@/data/clientTestimonials';

const platforms = ['ChatGPT', 'Claude', 'Perplexity', 'Google AI'];

const whyBlocks = [
  {
    title: '40% of GenZ prefers AI search',
    body: "They're asking ChatGPT instead of Googling",
  },
  {
    title: (
      <>
        Google is integrating{' '}
        <Link
          href="/blog/how-to-show-up-in-ai-overviews-local-business"
          className="font-medium text-brand underline hover:text-navy"
        >
          AI Overviews
        </Link>
      </>
    ),
    body: 'Traditional rankings are being pushed below AI summaries',
  },
  {
    title: 'Early movers win big',
    body: 'Get established in AI recommendations before competitors',
  },
];

/* Tab titles, subtitles, and feature lists are verbatim from the live page
   cards; the short panel paragraphs are new copy written for the tabs. */
const geoServiceTabs: ServiceTabItem[] = [
  {
    id: 'entity-topical-mapping',
    title: 'Entity & Topical Mapping',
    subtitle: 'Build your knowledge graph',
    description:
      'We map the services, places, and topics your business connects to, so AI systems understand what you do, where you do it, and why you are a credible answer.',
    features: [
      'Entity relationship mapping',
      'Topical authority clusters',
      'Semantic SEO foundation',
      'Knowledge panel optimization',
    ],
  },
  {
    id: 'ai-mention-tracking',
    title: 'AI Mention Tracking',
    subtitle: 'Monitor your AI visibility',
    description:
      'We watch how often AI assistants name your business for the questions your customers actually ask, and track how those mentions change month to month.',
    features: [
      'ChatGPT mention monitoring',
      'Perplexity citation tracking',
      'AI search competitor analysis',
      'Prompt research & optimization',
    ],
  },
  {
    id: 'link-building-for-ai',
    title: 'Link Building for AI',
    subtitle: 'Authority signals AI trusts',
    description:
      'AI systems cite sources they already trust. We build the mentions and citations that make your business one of those sources.',
    features: [
      'High-authority link building',
      'Reddit marketing & presence',
      'Wikipedia-style citations',
      'Authority content syndication',
    ],
  },
  {
    id: 'ai-optimized-content',
    title: 'AI-Optimized Content',
    subtitle: 'Content AI wants to cite',
    description:
      'Pages written to be quoted: direct answers up front, clear structure, and the specific facts AI systems pull into their responses.',
    features: [
      'Answer-focused content',
      'Structured data optimization',
      'FAQ schema implementation',
      'Named authorship signals',
    ],
  },
  {
    id: 'technical-geo',
    title: 'Technical GEO',
    subtitle: 'Backend optimization for AI',
    description:
      'The backend work that makes your site easy for AI systems to read, parse, and cite accurately, from schema markup to LLM-friendly formatting.',
    features: [
      'Schema markup for AI',
      'Structured data validation',
      'API accessibility',
      'LLM-friendly formatting',
    ],
  },
  {
    id: 'geo-reporting',
    title: 'GEO Reporting',
    subtitle: 'Measure AI search performance',
    description:
      'A monthly report on where AI assistants mention you, where competitors show up instead, and what we are doing about it.',
    features: [
      'AI citation reports',
      'Entity visibility tracking',
      'Competitor AI presence',
      'Monthly progress reports',
    ],
  },
];

const timelineSteps = [
  {
    when: 'Weeks 1-2',
    title: 'Foundation',
    description:
      'Schema, entity mapping, and AI-prompt research set the base AI systems read about your business.',
  },
  {
    when: '30 to 60 days',
    title: 'Initial improvements',
    description: 'You can see initial improvements in AI mentions within 30-60 days.',
  },
  {
    when: '3 to 6 months',
    title: 'Consistent AI citations',
    description:
      'Building strong entity recognition and consistent AI citations typically takes 3-6 months of sustained effort.',
  },
];

const costGuideLink = (
  <Link
    href="/blog/what-generative-engine-optimization-costs-local-business"
    className="font-medium text-brand underline hover:text-navy"
  >
    GEO cost guide
  </Link>
);

const loopSteps = [
  {
    title: 'Agree the questions',
    body: 'At the start we agree the exact set of buyer questions your visibility gets measured on, the same questions your customers ask ChatGPT, Perplexity, and Google AI Overviews. Think "who installs pavers in Ormond Beach" or "which clinic in DeLand takes walk-ins." The set stays fixed, so the numbers mean the same thing every week.',
  },
  {
    title: 'Scan weekly',
    body: 'We run that fixed set across all three engines and log whether your business is mentioned, recommended, or cited, and who gets named instead. A mention is your name in the answer. A citation is your page linked as a source. We track both, separately.',
  },
  {
    title: 'Read what wins',
    body: "We open the pages the engines cite and diff their coverage against yours: covered, missing, or thin. If the answer for your service keeps pulling from a competitor's service page or a directory listing, we can see exactly what that page says that yours does not.",
  },
  {
    title: 'Ship the fix',
    body: 'Pages, profile work, and citation building, in a ranked order. Some weeks that is a new service page, some weeks it is a fix to your Google Business Profile categories or a listing on a directory the engines already trust. The gaps closest to a buyer question go first. You see what is shipping and why, in plain language, before it goes live.',
  },
  {
    title: 'Measure per change',
    body: 'The next scans show whether each change moved a mention or a citation, not just a ranking. Changes that move an answer get repeated across your other services. Changes that do not get dropped.',
  },
];

const guaranteeConditions = [
  'The exact question and the check method are agreed up front, before launch. No moving the goalposts later, in either direction.',
  'We need access to your Google Business Profile and about 20 minutes a month from you to answer questions and approve direction.',
  'The clock pauses if you go dark on us. If we cannot reach you for a few weeks, those weeks do not count against the 90.',
  'Rankings, revenue, and setup-fee refunds are not guaranteed, and we will not pretend otherwise.',
];

const proofItems = [
  {
    label: 'Volusia Christmas Lights',
    title: 'A site built with this exact system',
    body: 'We built VolusiaChristmasLights.com with the same loop this page describes: 72 pages published from a topical map. In November 2026 data, its permanent-lighting and palm-tree pages hold top-10 Google positions, roughly 7 to 9. It has the same shape as most service businesses: a handful of core services, one county, and buyers who search with a city name attached.',
  },
  {
    label: 'AIO Growth SEO',
    title: 'Our own site runs the same loop',
    body: 'In our November 26, 2026 baseline scan of 34 buyer questions across ChatGPT, Perplexity, and Google AI Overviews, AI assistants already name AIO Growth on the Daytona Beach AI visibility questions and cite our pages on the map-pack and Google Business Profile questions. The broader statewide GEO questions are still on our own weekly list, and we work them with the same loop.',
  },
  {
    label: 'One of our GEO guides',
    title: 'Zero to page one after a refresh',
    body: 'One of our own GEO guides went from zero impressions to positions 3 to 8 on its core searches within days of Google recrawling the refreshed page. Same content, rebuilt to answer the question directly. That is step five of the loop, measuring per change, applied to our own page.',
  },
];

const geoFaqs: ServiceFaqItem[] = [
  {
    question: 'What is GEO and how is it different from SEO?',
    answer:
      'GEO (Generative Engine Optimization) focuses on getting your business cited and recommended by AI assistants like ChatGPT, Claude, and Perplexity. While SEO optimizes for Google rankings, GEO optimizes for AI-generated answers. Both are complementary strategies.',
    schemaText:
      'GEO (Generative Engine Optimization) focuses on getting your business cited and recommended by AI assistants like ChatGPT, Claude, and Perplexity. While SEO optimizes for Google rankings, GEO optimizes for AI-generated answers. Both are complementary strategies.',
  },
  {
    question: 'How do you track AI mentions?',
    answer:
      "We use custom tracking tools that monitor how often your business is mentioned in AI search results for relevant queries. We track mentions across ChatGPT, Claude, Perplexity, and Google's AI Overviews.",
    schemaText:
      "We use custom tracking tools that monitor how often your business is mentioned in AI search results for relevant queries. We track mentions across ChatGPT, Claude, Perplexity, and Google's AI Overviews.",
  },
  {
    question: 'Should I do GEO instead of SEO?',
    answer:
      "For most businesses, you need both. Traditional SEO still drives significant traffic, but GEO prepares you for the future. Our GEO Foundation complements your existing SEO efforts and ensures you're visible across all search interfaces.",
    schemaText:
      "For most businesses, you need both. Traditional SEO still drives significant traffic, but GEO prepares you for the future. Our GEO Foundation complements your existing SEO efforts and ensures you're visible across all search interfaces.",
  },
  {
    question: 'How long until I see results from GEO?',
    answer:
      'AI systems update their knowledge bases regularly. You can see initial improvements in AI mentions within 30-60 days. Building strong entity recognition and consistent AI citations typically takes 3-6 months of sustained effort.',
    schemaText:
      'AI systems update their knowledge bases regularly. You can see initial improvements in AI mentions within 30-60 days. Building strong entity recognition and consistent AI citations typically takes 3-6 months of sustained effort.',
  },
  {
    question: 'Do I need extra budget for GEO?',
    answer: (
      <>
        If you want GEO done, the budget is {geoOffer.offerName}: {geoOfferProse.buildMonthly}.
        It is not a $500 add-on and it is not a second national GEO contract. Details in our{' '}
        {costGuideLink}.
      </>
    ),
    schemaText: `If you want GEO done, the budget is ${geoOffer.offerName}: ${geoOfferProse.buildMonthly}. It is not a $500 add-on and it is not a second national GEO contract. Details in our GEO cost guide.`,
  },
  {
    question: 'How much does AI search optimization cost?',
    answer: (
      <>
        How much does GEO cost? {geoOffer.offerName} is {geoOfferProse.buildMonthly},{' '}
        {geoOffer.term}, with a {geoOffer.guarantee}. That is the only public GEO price.
        National agency rates run much higher because they price for large competitive markets.
        Full breakdown on our {costGuideLink}.
      </>
    ),
    schemaText: `How much does GEO cost? ${geoOffer.offerName} is ${geoOfferProse.buildMonthly}, ${geoOffer.term}, with a ${geoOffer.guarantee}. That is the only public GEO price. National agency rates run much higher because they price for large competitive markets. Full breakdown on our GEO cost guide.`,
  },
  {
    question: 'How is GEO different from SEO for a local business?',
    answer:
      "Traditional local SEO gets you into Google Maps and blue-link results. GEO gets you cited by name when someone asks ChatGPT, Google's AI Overviews, or Perplexity a question about businesses in your category and location. For a Daytona Beach contractor or clinic, GEO is not a replacement for local SEO, it is a layer on top of it. The businesses winning AI citations in Volusia County today are the ones with complete Google Business Profiles, real reviews, and clear location-specific content. That is GEO and local SEO working together.",
    schemaText:
      "Traditional local SEO gets you into Google Maps and blue-link results. GEO gets you cited by name when someone asks ChatGPT, Google's AI Overviews, or Perplexity a question about businesses in your category and location. For a Daytona Beach contractor or clinic, GEO is not a replacement for local SEO, it is a layer on top of it. The businesses winning AI citations in Volusia County today are the ones with complete Google Business Profiles, real reviews, and clear location-specific content. That is GEO and local SEO working together.",
  },
  {
    question: 'What does the 90-day guarantee actually promise?',
    answer:
      'Within 90 days of launch, ChatGPT, Perplexity, or Google AI Overviews will name your business when someone asks who provides your main service in your city. If that has not happened by day 90, we keep working at no additional charge until it does. The exact question and the check method are agreed up front, before launch. The guarantee needs access to your Google Business Profile and about 20 minutes a month from you, and the clock pauses if you go dark on us. Rankings, revenue, and setup-fee refunds are not guaranteed.',
    schemaText:
      'Within 90 days of launch, ChatGPT, Perplexity, or Google AI Overviews will name your business when someone asks who provides your main service in your city. If that has not happened by day 90, we keep working at no additional charge until it does. The exact question and the check method are agreed up front, before launch. The guarantee needs access to your Google Business Profile and about 20 minutes a month from you, and the clock pauses if you go dark on us. Rankings, revenue, and setup-fee refunds are not guaranteed.',
  },
  {
    question: 'What do you need from me each month?',
    answer:
      'Three things. Access to your Google Business Profile. About 20 minutes a month to answer our questions and approve direction, usually one short call or a few replies by email. And a heads-up when your services or service area change, so the pages and profile stay accurate. The scanning, writing, and shipping are ours. You do not need to learn GEO or manage anyone.',
    schemaText:
      'Three things. Access to your Google Business Profile. About 20 minutes a month to answer our questions and approve direction, usually one short call or a few replies by email. And a heads-up when your services or service area change, so the pages and profile stay accurate. The scanning, writing, and shipping are ours. You do not need to learn GEO or manage anyone.',
  },
];

const geoTestimonial = testimonials[2];

export default function GEOOptimizationPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } =
    useContactDialog('GEO Optimization Consultation');

  const openPricingDialog = () => openDialog(geoOffer.serviceLabel);

  return (
    <div className="min-h-screen bg-paper">
      <CoreServiceSchema
        name="GEO Optimization for Daytona Beach and Volusia County Businesses"
        description="Get your Daytona Beach or Volusia County business cited in ChatGPT, Google AI Overviews, and Perplexity. GEO optimization built for local service businesses, not enterprise brands."
        url="https://aiogrowthseo.com/services/geo-optimization"
      />
      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your GEO Strategy"
        description="Let's discuss how to optimize your business for AI search engines and answer engines."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      {/* Hero */}
      <section className="bg-paper bg-waves">
        <div className="container mx-auto px-6 pt-10 pb-24">
          <PageBreadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'GEO Optimization' },
            ]}
            className="mb-10 text-navy/60 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
          />
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="mb-5 text-[15px] font-semibold text-pen-text">The Future of Search</p>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-[54px]">
                <OrangeUnderline>GEO Optimization</OrangeUnderline> for Daytona Beach and
                Volusia County Businesses
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-navy/75">
                {geoOffer.offerName} is {geoOfferProse.buildMonthly}, {geoOffer.term}, with a{' '}
                {geoOffer.guarantee}. When 40% of GenZ uses TikTok and AI assistants instead of
                Google, traditional SEO isn&apos;t enough. GEO ensures you know{' '}
                <Link href="/blog/how-to-get-cited-by-ai-search-2026" className="font-medium text-brand underline hover:text-navy">
                  how to get cited by AI search
                </Link>{' '}
                and get recommended by ChatGPT, Claude, Perplexity, and other AI search tools.
              </p>

              <AuditForm
                endpoint={FORMSPREE_CONTACT_ENDPOINT}
                serviceLabel="GEO Optimization Consultation"
                buttonLabel="Get Your GEO Strategy"
                formType="services_form"
                className="max-w-xl"
              />

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <button
                  type="button"
                  onClick={() => {
                    selectService('AI Search Visibility Audit');
                    openDialog();
                  }}
                  className="group inline-flex items-center gap-1.5 font-bold text-brand hover:underline"
                >
                  Check My AI Visibility
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <ul className="mt-9 flex flex-wrap gap-2" aria-label="AI platforms we optimize for">
                {platforms.map((platform) => (
                  <li
                    key={platform}
                    className="rounded-full border border-hairline bg-white px-3.5 py-1.5 text-sm font-medium text-navy/80"
                  >
                    {platform}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI answer mock (illustrative) */}
            <Reveal className="relative mx-auto w-full max-w-md">
              <MarkerNote className="absolute -top-3 left-0 z-10 text-[24px] sm:-left-4">
                cited, not just ranked
              </MarkerNote>
              <div className="rounded-[1.75rem] border border-hairline bg-white p-6 shadow-2xl">
                <p className="text-sm font-bold tracking-[0.18em] text-navy/50">
                  ILLUSTRATIVE AI ANSWER
                </p>
                <div className="mt-5 rounded-2xl bg-paper p-4">
                  <p className="text-[15px] font-semibold text-navy">
                    Who&apos;s the best plumber in Daytona Beach?
                  </p>
                </div>
                <div className="mt-3 rounded-2xl border border-hairline p-4">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-navy">
                    <span className="flex gap-0.5" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-sun text-sun" />
                      ))}
                    </span>
                    Top recommendation
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy/80">
                    <span className="font-bold text-brand">Your Business</span> - named first,
                    with your services, service area, and reviews cited as the reasons.
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy/60">
                    Two competitors are mentioned below it.
                  </p>
                </div>
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  Mock answer for illustration. The question is the one local customers
                  actually ask AI assistants.
                </p>
              </div>
              <MarkerNote className="absolute -bottom-5 left-8 z-10 text-[24px]">
                the new front page
              </MarkerNote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why GEO matters */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">Why it matters</p>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                Why GEO is Critical for Your Business
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-navy/75">
                AI assistants are becoming the new search interface. When someone asks ChatGPT
                &quot;Who&apos;s the best plumber in Daytona Beach?&quot; will your business be
                mentioned?{' '}
                <Link href="/areas-we-serve/daytona-beach" className="font-medium text-brand underline hover:text-navy">
                  Daytona Beach businesses
                </Link>{' '}
                that invest in GEO show up in those AI-generated recommendations.
              </p>

              <div className="grid gap-x-10 sm:grid-cols-2">
                {whyBlocks.map((block, index) => (
                  <div key={index} className="mt-10 border-t-2 border-hairline pt-5">
                    <h3 className="text-xl font-extrabold tracking-tight text-navy">
                      {block.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-navy/70">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <Reveal className="relative">
              <div className="rounded-[1.75rem] border border-hairline bg-paper p-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                  <Link href="/guides/geo-vs-seo-whats-the-difference" className="hover:text-brand">
                    GEO vs Traditional SEO
                  </Link>
                </h3>
                <div className="mt-6">
                  <h4 className="font-bold text-brand">Traditional SEO</h4>
                  <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-navy/70">
                    <li>Optimize for keyword rankings</li>
                    <li>Focus on Google&apos;s algorithm</li>
                    <li>Build backlinks for authority</li>
                    <li>Target search result pages (SERPs)</li>
                  </ul>
                </div>
                <div className="mt-6 border-t border-hairline pt-6">
                  <h4 className="font-bold text-brand">GEO Optimization</h4>
                  <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-navy/70">
                    <li>Optimize for AI citations</li>
                    <li>Focus on entity recognition</li>
                    <li>Build topical authority</li>
                    <li>Target AI-generated answers</li>
                  </ul>
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
              Our GEO Services
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Comprehensive optimization for AI search engines and answer engines.
            </p>
          </div>
          <ServiceTabs services={geoServiceTabs} ariaLabel="GEO services" idPrefix="geo" />
        </div>
      </section>

      {/* How the loop runs */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">The weekly loop</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              How the Answer Engine Works, Week to Week
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              AI assistants change who they name as they read new pages, so GEO is not a
              one-time setup. The work runs as a weekly loop against a fixed scoreboard. Here is
              what happens, in order.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {loopSteps.map((step, index) => (
              <li key={step.title} className="mt-8 border-t-2 border-hairline pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-brand bg-paper font-extrabold text-brand">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy/70">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-navy/75">
            The parts you can start on yourself are in our guide on{' '}
            <Link
              href="/blog/how-to-get-recommended-by-ai"
              className="font-medium text-brand underline hover:text-navy"
            >
              how to get recommended by AI
            </Link>
            . The loop is what turns those parts into a measured result.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-tint/60 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What to expect</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              How long until I see results from GEO?
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              AI systems update their knowledge bases regularly.
            </p>
          </div>
          <ServiceTimeline steps={timelineSteps} finalNote="the goal" />
        </div>
      </section>

      {/* Pricing: the Answer Engine from pricing.ts in the two-step layout.
          The old offer table folds into the same figures. */}
      <AnswerEnginePricing
        heading="How Much Does GEO Cost?"
        intro={
          <>
            The current offer is {geoOffer.offerName}: {geoOfferProse.buildMonthly}.{' '}
            {geoOffer.term}, with a {geoOffer.guarantee}. One flagship. No pricing ladder. Full
            breakdown in the {costGuideLink}.
          </>
        }
        foundationNote="Schema, entity mapping, and AI-prompt research, answer-focused content, and Google Business Profile work."
        onStart={openPricingDialog}
      />

      {/* Guarantee */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">The guarantee</p>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                The 90-Day Guarantee, Stated Plainly
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-navy/75">
                {geoOffer.offerName} is {geoOfferProse.buildMonthly}, {geoOffer.term}. Here is
                what that buys you:
              </p>
              <p className="mt-6 max-w-2xl border-l-4 border-pen pl-5 text-xl font-bold leading-snug text-navy">
                Within 90 days of launch, ChatGPT, Perplexity, or Google AI Overviews will name
                your business when someone asks who provides your main service in your city. If
                that has not happened by day 90, we keep working at no additional charge until it
                does.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75">
                A guarantee measured on a question nobody agreed to is just marketing. So before
                launch we write down the question, for example &quot;who does roof repair in Port
                Orange,&quot; and the check: which engines, asked how, logged where. You see the
                same scan results we do, every week, so neither side has to take the other&apos;s
                word for it.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75">
                We can make that promise because we measure it the same way every week, on
                questions we agree with you before anything ships. The conditions on the right
                are not fine print. They exist because the measurement has to be honest to mean
                anything, and because a result you cannot check is not a result.
              </p>
            </div>

            <Reveal className="relative">
              <div className="rounded-[1.75rem] border border-hairline bg-paper p-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                  The conditions, all of them
                </h3>
                <ul className="mt-6 space-y-4">
                  {guaranteeConditions.map((condition) => (
                    <li key={condition} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                        <Check className="h-3 w-3 text-white" aria-hidden="true" />
                      </span>
                      <span className="text-[15px] leading-relaxed text-navy/75">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TestimonialBand
        quote={geoTestimonial.content}
        name={geoTestimonial.name}
        role={geoTestimonial.role}
      />

      {/* Proof */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Proof</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Proof, From Our Own Market
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              We run this system on our own sites in Volusia County before we sell it to anyone
              else. That matters more on a GEO page than anywhere: if we could not get named in
              our own market, we would have no business promising it in yours. These are the
              numbers we can show you, from our own work.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {proofItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-hairline bg-paper p-8"
              >
                <p className="text-sm font-bold text-pen-text">{item.label}</p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/70">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-navy/75">
            How we talk about results: we&apos;re seeing first measurable movement in AI
            mentions within 30 to 60 days, and the guarantee window is 90. We do not promise a
            specific ranking, because nobody honest can. What we can do is show you the scans,
            every week, on the questions we agreed.
          </p>
        </div>
      </section>

      <ServiceFaq faqs={geoFaqs} withSchema />

      <ServiceCta
        heading="Ready for AI-Powered Search?"
        copy="Don't wait for AI to replace traditional search. Position your business now for the future of discovery."
        endpoint={FORMSPREE_CONTACT_ENDPOINT}
        serviceLabel="GEO Optimization Consultation"
        buttonLabel="Get Your GEO Strategy"
      />
    </div>
  );
}
