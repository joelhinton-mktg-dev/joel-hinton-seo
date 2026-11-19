'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Bot,
  CheckCircle,
  ArrowRight,
  Cpu,
  FileText,
  GitBranch,
  Layers,
  RefreshCw,
  Shield,
  Workflow,
  XCircle,
} from 'lucide-react';
import { agenticEngineTiers, agenticFaqs, agenticOffer } from '@/data/pricing';
import { trackPrimaryCtaClick } from '@/lib/analytics';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';

const CTA_LABEL = 'Get a Custom Quote';

const whoThisIsFor = [
  "You're a local or regional business that needs your website producing leads, not sitting there looking nice",
  "You've paid for SEO retainers before and couldn't tell what you got each month",
  'You want visibility in AI answers — because your customers already ask ChatGPT who to hire',
  "You'd rather own an appreciating asset than rent someone's dashboard",
];

const faqAnswerNodes: Record<string, ReactNode> = {
  'Does AI SEO replace traditional SEO?': (
    <>
      No. It runs on top of it. Title tags, site speed, internal links, and content quality still decide rankings — AI
      changes how fast you can find problems and fix them, and adds a second battleground: AI-generated answers. Our{' '}
      <Link href="/services/local-seo" className="text-primary hover:underline">
        local SEO
      </Link>{' '}
      and{' '}
      <Link href="/services/search-engine-optimization" className="text-primary hover:underline">
        core SEO plans
      </Link>{' '}
      handle the foundations if that&apos;s where you need to start.
    </>
  ),
  'How much do AI SEO services cost?': (
    <>
      With us: {agenticOffer.setup} plus {agenticEngineTiers[0].price} to {agenticEngineTiers[2].price}, scoped by cycle frequency. Full breakdown on our{' '}
      <Link href="/pricing" className="text-primary hover:underline">
        pricing page
      </Link>
      . Industry-wide, agencies charge anywhere from $1,000 to $10,000+ monthly — usually without telling you until the
      sales call.
    </>
  ),
};

export default function AgenticSeoPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog(
    agenticOffer.serviceLabel,
  );

  const openQuoteDialog = (ctaLocation: string, serviceLabel?: string) => {
    trackPrimaryCtaClick({
      pagePath: '/services/agentic-seo',
      ctaLabel: CTA_LABEL,
      ctaLocation,
      serviceName: serviceLabel ?? agenticOffer.serviceLabel,
    });
    if (serviceLabel) {
      selectService(serviceLabel);
    }
    openDialog();
  };

  return (
    <div className="min-h-screen bg-paper">
      <PageBreadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'AI SEO Services', href: '/services/agentic-seo', current: true },
        ]}
        className="text-navy/60 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
      />

      {/* Hero */}
      <section className="py-24 px-4 bg-paper bg-waves">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="mb-6 flex items-center justify-center gap-2 text-[15px] font-semibold text-pen-text">
              <Bot className="w-4 h-4" />
              Flagship Offer
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-navy mb-6">
              AI SEO Services —{' '}
              <OrangeUnderline>Built on a Website That Improves Itself</OrangeUnderline>
            </h1>

            <p className="text-xl text-navy/70 max-w-4xl mx-auto mb-6">
              Most AI SEO services are a subscription to someone else&apos;s dashboard. Ours is a website that does the
              work.
            </p>

            <p className="text-lg text-navy/70 max-w-4xl mx-auto mb-8">
              We build you an AI-ready site on a headless CMS, connect it to your search, funnel, and AI-visibility
              data, and run an agentic engine that reads that data every cycle and ships improvements. You get a weekly
              intelligence brief showing what changed and why. The site gets better while your competitors&apos; sites
              go stale.
            </p>

            <Button size="lg" className="px-8 py-4 text-lg rounded-full" onClick={() => openQuoteDialog('hero')}>
              {CTA_LABEL}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-sm text-navy/70 max-w-3xl mx-auto mt-8">
              You&apos;re reading a page produced by this exact system right now — aiogrowthseo.com runs on the same
              engine we sell.
            </p>
          </div>
        </div>
      </section>

      {/* What Are AI SEO Services? */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-6 text-center">
            What Are <span className="text-brand">AI SEO Services?</span>
          </h2>
          <div className="space-y-6 text-lg text-navy/70">
            <p>
              AI SEO services use artificial intelligence to improve how a website ranks in Google and how often it
              appears in AI-generated answers on ChatGPT, Perplexity, and Google&apos;s AI Overviews. That covers two
              jobs: using AI to do SEO work faster and smarter, and optimizing your site so AI systems cite it as a
              source.
            </p>
            <p>
              Most agencies pick one. The big national firms sell you AI-assisted keyword research and call it AI SEO.
              The GEO specialists optimize for AI answers and ignore the site itself.
            </p>
            <p>
              We don&apos;t think you can separate the two. An AI system deciding whether to cite you reads the same
              site Google crawls. Fix the site, feed it data, keep improving it — both problems get solved by the same
              machine.
            </p>
          </div>
        </div>
      </section>

      {/* How we deliver it */}
      <section className="py-24 px-4 bg-paper">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-6">
              The Agentic SEO Site: <span className="text-brand">How We Deliver It</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Our flagship is not a retainer. It&apos;s a product with two layers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="card-professional border-hairline">
              <CardHeader>
                <div className="w-14 h-14 bg-brand-tint rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-7 h-7 text-brand" />
                </div>
                <CardTitle className="text-2xl">Layer 1: The AI-Ready Rebuild</CardTitle>
                <CardDescription>The foundation everything else runs on</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-navy/70 mb-6">
                  {agenticOffer.setupDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-navy/70">
                  {agenticOffer.setup}. Compare that to what a static agency rebuild costs,
                  then ask what happens to that site in month six. (The answer: nothing. That&apos;s the problem.)
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional border-hairline">
              <CardHeader>
                <div className="w-14 h-14 bg-brand-tint rounded-xl flex items-center justify-center mb-4">
                  <RefreshCw className="w-7 h-7 text-brand" />
                </div>
                <CardTitle className="text-2xl">Layer 2: The Agentic Engine</CardTitle>
                <CardDescription>Runs on your live data after launch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-navy/70 mb-4">
                  After launch, the engine connects to your data sources — Search Console, analytics, funnel events,
                  AI-visibility tracking — and runs a continuous cycle:
                </p>
                <ul className="space-y-3 text-sm text-navy/70">
                  {agenticOffer.engineDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {agenticOffer.engineCycle.map((step, index) => {
                const icons = [FileText, Cpu, Workflow, GitBranch, RefreshCw];
                const Icon = icons[index] ?? RefreshCw;
                return (
                  <div key={step.step} className="flex items-start gap-4 p-4 border border-hairline rounded-2xl bg-white">
                    <div className="w-10 h-10 rounded-full bg-brand-tint flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {index + 1}. {step.step}
                      </p>
                      <p className="text-sm text-navy/70 mt-1">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-navy/70 mt-8">
              Each week you get an intelligence brief: what the data showed, what the engine proposed, what shipped,
              what it did. Not a quarterly PDF nobody opens. A short document you can read in five minutes that tells
              you what your website did for you this week.
            </p>
          </div>
        </div>
      </section>

      {/* Why static sites lose */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-6 text-center">
            Why Static Sites <span className="text-brand">Lose Now</span>
          </h2>
          <div className="space-y-6 text-lg text-navy/70">
            <p>A traditional website is a snapshot. It&apos;s the most accurate it will ever be on launch day.</p>
            <p>
              Meanwhile: Google ships algorithm updates. AI crawlers change how they read pages. A competitor publishes
              something better than your best page. Your funnel data quietly shows that your highest-traffic page
              converts nobody — and nobody&apos;s looking at it.
            </p>
            <p>
              Three months pass. You click your own site one night, notice the copy still mentions a service you
              dropped, and make a mental note. The note dies there. That&apos;s the maintenance model AI SEO replaces.
            </p>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-24 px-4 bg-brand-tint/60">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-12 text-center">
            Who This <span className="text-brand">Is For</span>
          </h2>
          <ul className="space-y-4 mb-10">
            {whoThisIsFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                <span className="text-lg text-navy/70">{item}</span>
              </li>
            ))}
          </ul>
          <Card className="card-professional border-hairline bg-pen-tint">
            <CardContent className="pt-6 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-pen-text mt-0.5 shrink-0" />
              <p className="text-navy/70">
                It&apos;s not for you if you want a $99 AI tool to bulk-generate 400 blog posts. That&apos;s not AI SEO,
                that&apos;s spam with better branding — and Google&apos;s been burning those sites down since 2024.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 bg-paper">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-6">
              What AI SEO Services <span className="text-brand">Cost</span>
            </h2>
            <p className="text-lg text-navy/70 max-w-3xl mx-auto">
              Competitors ranking for this exact search hide their pricing behind a quote form. Here&apos;s ours:
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse bg-white border border-hairline rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b bg-brand-tint">
                  <th className="p-4 font-semibold">Offer</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Cadence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Site Rebuild (one-time)</td>
                  <td className="p-4">{agenticOffer.setup}</td>
                  <td className="p-4 text-navy/70">Scoped by site size</td>
                </tr>
                {agenticEngineTiers.map((tier) => (
                  <tr key={tier.name} className={`border-b ${tier.highlighted ? 'bg-brand-tint/60' : ''}`}>
                    <td className="p-4 font-medium">{tier.name} engine</td>
                    <td className="p-4">{tier.price}</td>
                    <td className="p-4 text-navy/70">{tier.cadence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-lg font-medium text-brand mb-8">{agenticOffer.smbEntry}</p>

          <Card className="card-professional border-hairline bg-brand-tint/60 mb-8">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-brand mx-auto mb-4" />
              <CardTitle className="text-2xl">And you own the site.</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-navy/70 max-w-2xl mx-auto">{agenticOffer.ownership}</p>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Leave anytime and we hand over everything. You keep the website; you only lose the engine layer. No
                hostage situations, no proprietary platform you can&apos;t migrate off.
              </p>
              <Button size="lg" onClick={() => openQuoteDialog('setup', agenticOffer.serviceLabel)}>
                {CTA_LABEL}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4 max-w-3xl mx-auto">
            {agenticEngineTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-4 border border-hairline rounded-2xl bg-white ${tier.highlighted ? 'border-brand/40 bg-brand-tint/60' : ''}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{tier.name}</span>
                  <span className="text-xl font-bold text-brand">{tier.price}</span>
                </div>
                <p className="text-sm text-navy/70 mb-3">{tier.cadence}</p>
                <Button
                  size="sm"
                  className="bg-brand hover:bg-brand/90 text-white"
                  onClick={() => openQuoteDialog('engine', tier.serviceLabel)}
                >
                  Choose {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live examples */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-6 text-center">
            Live <span className="text-brand">Examples</span>
          </h2>
          <p className="text-lg text-navy/70">
            Three sites currently run as agentic builds: certcheck.mostlovedworkplace.com, visipage.ai, and this one. We
            won&apos;t quote you inflated growth percentages — this site entered Google&apos;s rankings for
            &quot;Daytona Beach SEO&quot; within its first weeks live, and every improvement since has come out of the
            same read-propose-deploy cycle we&apos;re describing. Watch our{' '}
            <Link href="/results" className="text-primary hover:underline">
              results page
            </Link>{' '}
            as the numbers compound; we publish what we can verify.
          </p>
        </div>
      </section>

      {/* GEO / AEO */}
      <section className="py-24 px-4 bg-paper">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-6 text-center">
            AI SEO, GEO, and AEO — <span className="text-brand">What&apos;s the Difference?</span>
          </h2>
          <div className="space-y-6 text-lg text-navy/70">
            <p>
              Short version:{' '}
              <Link
                href="/guides/what-is-geo-generative-engine-optimization"
                className="text-primary hover:underline"
              >
                GEO (generative engine optimization)
              </Link>{' '}
              is optimizing to be cited in AI-generated answers. AEO (answer engine optimization) is the near-identical
              older cousin focused on answer boxes and assistants. AI SEO is the umbrella — using AI in the SEO work
              itself and optimizing for AI visibility.
            </p>
            <p>
              Every Agentic SEO Site includes{' '}
              <Link href="/services/geo-optimization" className="text-primary hover:underline">
                GEO optimization
              </Link>{' '}
              by default. If you just want the AI-visibility layer on an existing site, that page covers the standalone
              version. If you&apos;re the DIY type, our{' '}
              <Link href="/guides/ai-search-optimization-implementation-guide" className="text-primary hover:underline">
                AI search optimization implementation guide
              </Link>{' '}
              walks through the whole playbook free.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-6">
              Frequently Asked <span className="text-brand">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {agenticFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index + 1}`} className="border border-hairline rounded-2xl bg-white px-6">
                <AccordionTrigger className="text-left font-bold text-navy">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-navy/70">
                  {faqAnswerNodes[faq.question] ?? faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-brand bg-waves-light">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Ready for a Website That Works on Itself?</h2>
          <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">
            Tell us about your current site and your goals. We&apos;ll scope the rebuild and engine to fit — and show
            you a sample intelligence brief so you know exactly what you&apos;re buying.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openQuoteDialog('final')}>
            {CTA_LABEL}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get a Custom Quote"
        description="Tell us about your current site and goals. We will scope the Agentic SEO Site rebuild and engine to fit."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="AI SEO Services"
        serviceDescription="AI SEO services with transparent pricing: an agentic website that reads your search, funnel, and AI-visibility data, then improves itself every cycle."
        serviceUrl={`https://aiogrowthseo.com${agenticOffer.canonicalPath}`}
        price="2500-5000"
        serviceType="AI SEO Services"
      />
    </div>
  );
}
