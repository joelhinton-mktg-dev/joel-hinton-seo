'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Map,
  FileText,
  PenTool,
  UserCheck,
  Upload,
  Link,
  Globe,
  BarChart3,
  FileEdit,
  Shield,
  Target,
  Award,
  Search,
  Bot,
  MapPin,
  Settings,
  CheckCircle2,
  Zap,
  Users,
  Cog,
  X,
} from 'lucide-react';
import {
  HeroSection,
  MultiStepForm,
  SocialProof,
  BenefitsGrid,
  FAQAccordion,
  StickyFooterCTA,
  CredibilityBar,
  SystemFlow,
  ComparisonTable,
  OfferStack,
  ActivityFeed,
} from '../components';

// ─── Shared State ────────────────────────────────────────────────────────────
const SPOTS_CONFIG = { total: 5, filled: 0 };
const CURRENT_YEAR = 2026;

// ─── Data ────────────────────────────────────────────────────────────────────

const credibilityStats = [
  { value: '11+ Years', label: 'SEO Experience' },
  { value: '+250%', label: 'Traffic Growth Achieved' },
  { value: '40–60% Faster', label: 'Delivery via AI Workflows' },
  { value: 'Local & National', label: 'Clients Served' },
];

const systemNodes = [
  {
    step: 1,
    icon: Map,
    label: 'Keyword Map',
    detail: 'GSC + Semrush data mapped to topical clusters',
  },
  {
    step: 2,
    icon: FileText,
    label: 'AI Brief',
    detail: 'Claude generates briefs from live keyword data',
  },
  {
    step: 3,
    icon: PenTool,
    label: 'Content',
    detail: 'AI-assisted drafts written to search intent',
  },
  {
    step: 4,
    icon: UserCheck,
    label: 'Human QA',
    detail: 'Every piece reviewed for E-E-A-T and accuracy',
  },
  {
    step: 5,
    icon: Upload,
    label: 'Publish',
    detail: 'Optimized metadata, schema, internal links on publish',
  },
  {
    step: 6,
    icon: Link,
    label: 'Internal Links',
    detail: 'Systematic linking to strengthen topical authority',
  },
  {
    step: 7,
    icon: Globe,
    label: 'Backlinks',
    detail: '2-4 quality placements per month',
  },
  {
    step: 8,
    icon: BarChart3,
    label: 'Rankings',
    detail: 'GSC + GA4 tracking, monthly reporting',
  },
];

const comparisonRows = [
  {
    category: 'Setup Cost',
    traditional: '$2,500–5,000',
    aio: '$750 (50% off — limited)',
  },
  {
    category: 'Monthly Retainer',
    traditional: '$1,500–3,000/mo',
    aio: '$500/mo',
  },
  {
    category: 'Time to Results',
    traditional: '6–12 months',
    aio: '90-day content runway',
  },
  {
    category: 'Content Production',
    traditional: 'Manual writers, slow turnaround',
    aio: 'AI-assisted + human QA every piece',
  },
  {
    category: 'Reporting',
    traditional: 'Monthly PDF',
    aio: 'Live GSC + GA4 dashboard',
    neutral: true,
  },
  {
    category: 'Strategy',
    traditional: 'Large team, broad capabilities',
    aio: 'Custom keyword + topical map, senior-level on every account',
    neutral: true,
  },
  {
    category: 'Contract',
    traditional: '12-month lock-in',
    aio: 'Month-to-month after setup',
  },
  {
    category: 'AI Search Visibility',
    traditional: 'Rarely included',
    aio: 'GEO/AEO built in from day one',
  },
];

const benefitsCards = [
  {
    icon: FileEdit,
    title: 'Content Engine',
    description: '6–8 SEO articles/month, AI-assisted + human reviewed',
  },
  {
    icon: Globe,
    title: 'Authority Backlinks',
    description: '2–4 quality placements/month',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile',
    description: 'Full optimization + monthly posts',
  },
  {
    icon: Settings,
    title: 'Technical SEO + Schema',
    description: 'Audit, fixes, and structured data',
  },
  {
    icon: Search,
    title: 'On-Page Optimization',
    description: 'Every page optimized for target keywords',
  },
  {
    icon: BarChart3,
    title: 'Monthly Reporting',
    description: 'GSC + GA4 performance dashboard',
  },
  {
    icon: Bot,
    title: 'AEO/GEO Optimization',
    description: 'AI search visibility built in from day one',
  },
];

const setupSteps = [
  {
    title: 'Full technical SEO audit + priority fixes',
    description: 'Comprehensive crawl, speed, and indexability analysis',
  },
  {
    title: 'Keyword research + topical map',
    description: 'Data-driven keyword clusters aligned to your services',
  },
  {
    title: 'Content system installation',
    description: 'AI-assisted workflow configured for your brand voice',
  },
  {
    title: '10 foundational backlinks',
    description: 'High-authority placements to kickstart domain strength',
  },
  {
    title: 'Schema markup implementation',
    description: 'LocalBusiness, FAQ, and service schema added site-wide',
  },
  {
    title: 'GSC + GA4 + tracking setup',
    description: 'Full analytics and conversion tracking configured',
  },
  {
    title: 'Google Business Profile audit + optimization',
    description: 'Complete GBP overhaul with category and post strategy',
  },
  {
    title: '90-day content roadmap delivered',
    description: 'Prioritized publishing calendar with target keywords',
  },
];

const faqItems = [
  {
    question: 'How is this different from hiring an SEO agency?',
    answer:
      'Traditional agencies rely on manual processes and large teams, which means high overhead passed to you. We use AI-assisted workflows with senior-level strategy on every account — so you get faster delivery, consistent quality, and a fraction of the cost.',
  },
  {
    question: 'Do you use AI to write all the content?',
    answer:
      'AI assists with research, briefs, and first drafts — but every piece goes through human editorial review before publishing. Google penalizes low-quality content, not AI content. Our human QA process ensures everything meets E-E-A-T standards.',
  },
  {
    question: 'How long before I see results from local SEO?',
    answer:
      "Most clients see measurable movement within 60–90 days. You'll have a full content runway built in your first 30 days, with ongoing link building and optimization compounding results month over month.",
  },
  {
    question: 'What happens after all 5 spots are filled?',
    answer:
      'The 50% setup discount closes permanently. New clients after that pay the standard $1,500 setup fee. Monthly pricing stays at $500/mo regardless.',
  },
  {
    question: 'Is there a long-term contract or commitment?',
    answer:
      'No. After the one-time setup fee, the monthly retainer is month-to-month. You can cancel anytime with no penalties or fees.',
  },
  {
    question: 'What size local businesses do you work with?',
    answer:
      'We work with local service businesses of all sizes — from solo operators to multi-location companies. The system scales to your needs, whether you serve one city or an entire region.',
  },
  {
    question: 'What does the onboarding and setup process look like?',
    answer:
      "After you apply, we schedule a strategy call to understand your business. From there, we complete your technical audit, keyword research, and content system setup within 30 days. You'll receive a 90-day content roadmap and your first pieces will be live within weeks.",
  },
];

const activityItems = [
  { text: 'Article published for local client — Daytona Beach, FL' },
  { text: 'Backlink secured on DA 45 domain' },
  { text: 'GBP post created and scheduled' },
  { text: 'Keyword rankings updated in GSC' },
  { text: 'Technical audit completed — 14 fixes implemented' },
  { text: 'Topical map delivered to new client' },
];

const trustPoints = [
  'Human QA review on every piece of content',
  'Search intent-first writing process',
  'Topical authority strategy, not one-off articles',
  'E-E-A-T signals built into every page',
  'AEO/GEO optimized for ChatGPT, Perplexity, Google AI Overviews',
];

// ─── FAQ JSON-LD ─────────────────────────────────────────────────────────────

function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Inline Sections ─────────────────────────────────────────────────────────

function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built to Survive Google&apos;s Updates — Not Game Them
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-slate-600 leading-relaxed text-lg">
              Google doesn&apos;t penalize AI content. It penalizes low-quality
              content. Every piece we publish goes through human editorial review
              before it goes live — because rankings built on quality compound
              over time.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Shield
                  size={20}
                  strokeWidth={1.5}
                  className="text-emerald-500 mt-0.5 shrink-0"
                />
                <span className="text-slate-700">{point}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function SetupBreakdown() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Happens in Your First 30 Days
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {setupSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{step.title}</p>
                <p className="text-sm text-slate-500 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransparencyCards() {
  const cards = [
    {
      icon: Zap,
      title: 'AI Efficiency',
      description:
        'AI workflows replace 40–60% of manual production time. Those savings go directly to you.',
    },
    {
      icon: Users,
      title: 'No Overhead',
      description:
        'No bloated agency team. Senior-level strategy on every account, lean execution.',
    },
    {
      icon: Cog,
      title: 'Systemized Delivery',
      description:
        'Consistent output every month — not billable hours padding your invoice.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Our Monthly Retainer Is Lower Than You&apos;d Expect
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20"
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-emerald-400 mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Hero Visual Placeholder ─────────────────────────────────────────────────

function HeroVisualPlaceholder() {
  return (
    <div className="max-w-2xl mx-auto border border-slate-700/60 rounded-xl p-8 bg-slate-800/30 relative overflow-hidden">
      {/* Faint emerald grid dots */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(16 185 129) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <p className="text-slate-500 text-sm font-medium text-center relative z-10">
        System Overview
      </p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LocalSEOOfferPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <FAQJsonLd faqs={faqItems} />

      {/* 1. Hero */}
      <HeroSection
        headline="Get More Local Leads from Google (Without Paying for Ads)"
        subheadline="An AI-powered Local SEO system that generates consistent visibility, content, and backlinks — built by an 11-year SEO veteran who&apos;s scaled local business traffic by 250%+"
        ctaText="Apply for a Spot"
        onCtaClick={openModal}
        badgeText="Limited — 5 Spots at 50% Off"
        secondaryCtaText="Book a Free Strategy Call"
        secondaryCtaHref="https://calendly.com/placeholder"
        spotsConfig={SPOTS_CONFIG}
        heroVisual={<HeroVisualPlaceholder />}
        showDefaultTrustIndicators={false}
      />

      {/* 2. Credibility Bar */}
      <CredibilityBar stats={credibilityStats} />

      {/* 3. System Flow */}
      <SystemFlow
        title="The AIO Growth SEO System"
        subtitle="Every client gets the same proven 8-step process — no guesswork, no one-off strategies"
        nodes={systemNodes}
      />

      {/* 4. Comparison Table */}
      <ComparisonTable
        title="Why Switch from a Traditional Agency?"
        rows={comparisonRows}
      />

      {/* 5. Trust Section */}
      <TrustSection />

      {/* 6. What's Included */}
      <BenefitsGrid
        headline="What's Included"
        subheadline="Everything you need to dominate local search"
        benefits={benefitsCards}
        columns={3}
      />

      {/* 7. Setup Breakdown */}
      <SetupBreakdown />

      {/* 8. Transparency */}
      <TransparencyCards />

      {/* 9. Social Proof */}
      <SocialProof
        headline="Trusted by Local Businesses"
        subheadline="See what our clients have to say about their results"
      />

      {/* 10. Offer Stack */}
      <OfferStack
        title="The Local SEO System Launch Offer"
        subtitle="First 5 clients only — offer closes when the 5th spot is filled"
        spotsConfig={SPOTS_CONFIG}
        onApplyClick={openModal}
      />

      {/* 11. Activity Feed */}
      <ActivityFeed items={activityItems} />

      {/* 12. FAQ */}
      <FAQAccordion
        headline="Frequently Asked Questions"
        subheadline="Everything you need to know about the Local SEO System"
        faqs={faqItems}
      />

      {/* 13. Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Only {SPOTS_CONFIG.total} Spots at This Price
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Month-to-month after setup. No lock-in. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={openModal}
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Apply for a Spot
              </Button>
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white border border-white/40 rounded-md hover:bg-white/10 transition-colors"
              >
                Book a Free Strategy Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 14. Sticky Footer */}
      <StickyFooterCTA
        text={`Only ${SPOTS_CONFIG.total} Spots Left at 50% Off`}
        buttonText="Apply Now"
        onCtaClick={openModal}
      />

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-600 bg-white rounded-full p-1 shadow"
                aria-label="Close form"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
              <MultiStepForm
                page="local-seo-offer"
                source="local-seo-offer"
                formspreeEndpoint="https://formspree.io/f/mjggakgp"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
