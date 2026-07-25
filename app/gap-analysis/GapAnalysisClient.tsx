'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Layers3,
  ShieldCheck,
  Search,
  MapPinned,
  Bot,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { StickyFooterCTA } from '../lp/components/StickyFooterCTA';
import { GapAnalysisForm } from './GapAnalysisForm';
import Link from 'next/link';

const streams = [
  {
    title: 'Google Organic',
    body: 'Rankings for the searches that bring you customers. On-page work, technical foundation, content that answers real questions.',
    icon: Search,
  },
  {
    title: 'Local + Map Pack',
    body: 'Your Google Business Profile, reviews, and local signals, tuned so you show up when someone nearby needs you today.',
    icon: MapPinned,
  },
  {
    title: 'AI Citations',
    body: 'The new stream. Schema, entity signals, and content structured so AI tools name your business when customers ask for a recommendation.',
    icon: Bot,
  },
];

const steps = [
  {
    n: '01',
    title: 'Gap analysis (week 1)',
    body: 'We pull your top 3 competitors and show you exactly where they beat you across all three streams.',
  },
  {
    n: '02',
    title: 'The plan',
    body: 'A prioritized 90-day roadmap. What gets fixed, in what order, and why.',
  },
  {
    n: '03',
    title: 'The work',
    body: 'We execute the foundation, then build from what the data shows.',
  },
];

const offerItems = [
  'Competitive gap analysis against your top 3 competitors (Google + local + AI)',
  'On-page and technical SEO foundation for your site',
  'Google Business Profile optimization',
  'AI visibility work: schema, entity signals, citation structure',
  'Your 90-day action plan, prioritized and in plain English',
];

const faqs = [
  {
    q: 'I already have an SEO agency.',
    a: 'Good. Ask them what they are doing about AI citations. If the answer is a blank look, that is the gap we fill. The analysis is free and specific, so you will know either way.',
  },
  {
    q: 'Does AI search really matter yet?',
    a: 'It is growing every month, and early positions are cheaper to win than crowded ones. The businesses showing up in AI answers now are the ones AI keeps recommending later. Waiting is a bet that your competitors also wait.',
  },
  {
    q: 'How long until I see results?',
    a: 'The gap analysis takes about a week. Foundation work lands in the first month. Ranking movement typically shows inside 90 days, which is why the plan is built on that window. Anyone promising page one in a week is selling you something.',
  },
  {
    q: 'What if my keywords are unwinnable?',
    a: 'Then we say so. It has happened, and when it does, we tell the business owner what we found and what we would do instead. No charge, no pitch. We would rather lose a sale than sell you a dead end.',
  },
  {
    q: 'What exactly do I get for $1,500?',
    a: 'Everything in the list above, delivered, not promised: the gap analysis document, the on-site fixes, the optimized profile, the AI visibility work, and the 90-day plan. You keep all of it either way.',
  },
];

export default function GapAnalysisClient() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(249,115,22,0.16), transparent 40%)',
          }}
        />
        <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 text-sm font-semibold tracking-wide text-blue-700"
            >
              AIO Growth SEO
            </motion.p>
            {/* PLACEHOLDER SLOT — swap with Test #1 winning pain/hook once Gold Coins land */}
            <motion.h1
              data-headline-slot="test-1-baseline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-slate-900 tracking-tight"
            >
              Your competitors are showing up in Google AND AI search. Are you?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
            >
              We find exactly where they beat you, then we fix it. Google organic, the local map
              pack, and AI answers like ChatGPT. Three traffic streams, one system.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-600/20"
              >
                Get My Free Competitive Gap Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-3 text-sm text-slate-500 max-w-md">
                Free and specific to your business. Review it on a 15-minute call, or we send a
                video breakdown. Your choice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Trust bar */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-8">
          <ul className="grid gap-6 md:grid-cols-3">
            <li className="flex gap-3 text-sm text-slate-700">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>
                <strong className="text-slate-900">Daytona Beach, FL</strong>
                {': '}serving Volusia County and businesses nationwide
              </span>
            </li>
            <li className="flex gap-3 text-sm text-slate-700">
              <Layers3 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>
                <strong className="text-slate-900">Three traffic streams on every project</strong>
                {': '}organic, local, and AI visibility
              </span>
            </li>
            <li className="flex gap-3 text-sm text-slate-700">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>
                <strong className="text-slate-900">Honest scoping</strong>
                {': '}if there is no realistic path to page one for your keywords, we tell you. No
                charge, no pitch.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3 — Problem */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Your customers changed where they search. Most SEO didn&apos;t.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              A growing share of your future customers are not typing into Google at all. They are
              asking ChatGPT, Perplexity, and Google&apos;s AI answers who to hire. Those answers pull
              from a different set of signals than the ten blue links.
            </p>
            <p>
              Most agencies still optimize for one traffic stream. That leaves two wide open for
              whichever competitor gets there first.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — How it works */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Three streams. One plan.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {streams.map((stream, i) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={stream.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border-t-2 border-blue-600 pt-6"
                >
                  <Icon className="h-7 w-7 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{stream.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{stream.body}</p>
                </motion.div>
              );
            })}
          </div>

          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} className="relative">
                <span className="text-sm font-bold tracking-widest text-orange-500">{step.n}</span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 5 — Offer */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Local SEO Setup: $1,500
          </h2>
          <ul className="mt-8 space-y-4">
            {offerItems.map((item) => (
              <li key={item} className="flex gap-3 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-slate-300 leading-relaxed border-t border-white/10 pt-8">
            When you are ready for the next step: the{' '}
            <Link
              href="/services/agentic-seo"
              className="text-white underline underline-offset-4 hover:text-orange-300"
            >
              Agentic Site
            </Link>
            , $2,500. A site built to improve itself based on what is ranking. Start with the
            foundation, upgrade when the numbers say so.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-8 py-6 text-base font-semibold"
            >
              Get My Free Competitive Gap Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6 — FAQ */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-8">
            Common questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="border border-slate-200 rounded-xl bg-white px-5"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Section 7 — Final CTA + Form */}
      <section ref={formRef} id="gap-form" className="bg-white py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Start with the gap analysis. It is free, and it is specific.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Fifteen minutes to review together, or a video breakdown if you would rather skip the
              call. Either way, you will see exactly where your competitors are beating you and what
              it takes to close the gap.
            </p>
          </div>
          <GapAnalysisForm />
        </div>
      </section>

      <StickyFooterCTA
        text="Free Competitive Gap Analysis"
        buttonText="Get started"
        onCtaClick={scrollToForm}
        scrollThreshold={400}
      />
    </>
  );
}
