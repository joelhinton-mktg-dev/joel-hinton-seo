'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { ArrowRight, Calendar, Check } from 'lucide-react';
import { customToolsOffer } from '@/data/pricing';
import MarkerNote from '../../../components/brand/MarkerNote';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';
import Reveal from '../../../components/brand/Reveal';
import ServiceTabs, { type ServiceTabItem } from '../../../components/service/ServiceTabs';
import ServiceTimeline from '../../../components/service/ServiceTimeline';
import ServiceFaq, { type ServiceFaqItem } from '../../../components/service/ServiceFaq';

const heroLabels = ['SEO Automation', 'Lead Generation', 'Custom Dashboards', 'Workflow Automation'];

const toolTabs: ServiceTabItem[] = [
  {
    id: 'seo-automation-tools',
    title: 'SEO Automation Tools',
    subtitle: 'Automate the tedious, focus on strategy',
    description:
      'Custom tools that automate rank tracking, content optimization scoring, technical audit checks, and competitor monitoring - all tailored to your specific SEO workflow.',
    features: [
      'Automated rank tracking with custom alerts',
      'Content optimization scoring systems',
      'Technical SEO monitoring dashboards',
      'Competitor change detection',
    ],
  },
  {
    id: 'lead-generation-systems',
    title: 'Lead Generation Systems',
    subtitle: 'Capture and qualify leads automatically',
    description:
      'Complete lead capture systems with smart forms, qualification workflows, and automated follow-up sequences that integrate with your existing CRM and sales process.',
    features: [
      'Smart multi-step lead capture forms',
      'Automated lead scoring and qualification',
      'CRM integration and data sync',
      'Follow-up automation sequences',
    ],
  },
  {
    id: 'reporting-dashboards',
    title: 'Reporting Dashboards',
    subtitle: 'The metrics that matter, at a glance',
    description:
      "Custom dashboards that pull data from all your marketing channels into one view. See exactly what's working, what needs attention, and where to focus your efforts.",
    features: [
      'Multi-channel data aggregation',
      'Custom KPI tracking and alerts',
      'Automated report generation',
      'Client-facing reporting portals',
    ],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    subtitle: 'Eliminate repetitive marketing tasks',
    description:
      "Connect your marketing tools and automate the repetitive tasks that eat up your team's time. From content publishing to social scheduling to client onboarding.",
    features: [
      'Cross-platform tool integration',
      'Automated content publishing',
      'Client onboarding workflows',
      'Task automation and notifications',
    ],
  },
];

const whyBlocks = [
  {
    title: 'Exact Fit',
    body: 'Every feature built for your specific workflow. No bloat, no workarounds, no "we\'ll make it work" compromises.',
  },
  {
    title: 'Your Data, Your Control',
    body: 'Own your marketing data and infrastructure. No vendor lock-in, no surprise price increases, no feature removals.',
  },
  {
    title: 'Grows With You',
    body: "Add features as you need them. Scale without hitting tier limits or paying for seats you don't use.",
  },
];

const useCases = [
  {
    title: 'Marketing Agencies',
    items: [
      'White-label client reporting dashboards',
      'Multi-client campaign management tools',
      'Automated deliverable generation',
      'Scalable lead gen for agency growth',
    ],
  },
  {
    title: 'In-House Marketing Teams',
    items: [
      'Unified marketing performance dashboards',
      'Automated competitive monitoring',
      'Lead routing and assignment automation',
      'Cross-department workflow integration',
    ],
  },
  {
    title: 'E-commerce Businesses',
    items: [
      'Product page SEO automation',
      'Inventory-aware marketing automation',
      'Customer journey tracking dashboards',
      'Abandoned cart recovery systems',
    ],
  },
  {
    title: 'Local & Multi-Location Businesses',
    items: [
      'Multi-location review management',
      'Local rank tracking by location',
      'Appointment booking and lead routing',
      'Location-specific reporting',
    ],
  },
];

const processSteps = [
  {
    when: 'Step 1',
    title: 'Discovery',
    description:
      'We map your current workflow, pain points, and goals to understand exactly what you need.',
  },
  {
    when: 'Step 2',
    title: 'Design',
    description: 'We create a detailed blueprint showing exactly how your custom tool will work.',
  },
  {
    when: 'Step 3',
    title: 'Build',
    description:
      'We develop your tool with regular check-ins to ensure it matches your expectations.',
  },
  {
    when: 'Step 4',
    title: 'Launch & Support',
    description: 'We deploy, train your team, and provide ongoing support as you scale.',
  },
];

const toolsFaqs: ServiceFaqItem[] = [
  {
    question: 'What kinds of custom tools do you build?',
    answer:
      "Lead capture forms with automated follow-up sequences, Google Business Profile post schedulers, review request automations triggered by completed jobs, local ranking dashboards, and custom reporting for agencies managing multiple clients. If it's a marketing workflow you do manually more than once a week, it's worth automating.",
    schemaText:
      "Lead capture forms with automated follow-up sequences, Google Business Profile post schedulers, review request automations triggered by completed jobs, local ranking dashboards, and custom reporting for agencies managing multiple clients. If it's a marketing workflow you do manually more than once a week, it's worth automating.",
  },
  {
    question: 'How is this different from using HubSpot or Zapier?',
    answer:
      "HubSpot and Zapier are platforms - you subscribe, configure, and maintain them indefinitely. What we build is a purpose-built tool for your specific workflow. You own it, there's no monthly SaaS cost, and it does exactly what you need without features you'll never touch.",
    schemaText:
      "HubSpot and Zapier are platforms - you subscribe, configure, and maintain them indefinitely. What we build is a purpose-built tool for your specific workflow. You own it, there's no monthly SaaS cost, and it does exactly what you need without features you'll never touch.",
  },
  {
    /* The live answer quoted $500-$2,500 build prices, which contradicts
       pricing.ts (the live source of truth). Rewritten from pricing.ts
       language, keeping the live answer's "no recurring fee" point. */
    question: 'What does a custom marketing tool cost?',
    answer:
      'Projects typically range from $5,000 for focused single-purpose tools to $25,000+ for comprehensive systems, scoped on the discovery call. No recurring fee after build. Optional ongoing maintenance is available if you want it.',
    schemaText:
      'Projects typically range from $5,000 for focused single-purpose tools to $25,000+ for comprehensive systems, scoped on the discovery call. No recurring fee after build. Optional ongoing maintenance is available if you want it.',
  },
  {
    question: 'What businesses do you build tools for?',
    answer: (
      <>
        HVAC companies, dental practices, law firms, plumbing contractors, and any local service
        business that has a repetitive marketing task eating up staff time. We&apos;re based in{' '}
        <Link href="/areas-we-serve/daytona-beach" className="font-medium text-brand underline hover:text-navy">
          Daytona Beach
        </Link>{' '}
        and primarily serve Volusia and Flagler County businesses, though we take remote projects
        too.
      </>
    ),
    schemaText:
      "HVAC companies, dental practices, law firms, plumbing contractors, and any local service business that has a repetitive marketing task eating up staff time. We're based in Daytona Beach and primarily serve Volusia and Flagler County businesses, though we take remote projects too.",
  },
  {
    question: 'How long does it take to build a custom tool?',
    answer:
      'Simple automation tools and dashboards can be ready in 2-4 weeks. More complex lead generation systems or multi-integration platforms typically take 6-10 weeks. We provide a detailed timeline during the proposal phase so you know exactly what to expect.',
    schemaText:
      'Simple automation tools and dashboards can be ready in 2-4 weeks. More complex lead generation systems or multi-integration platforms typically take 6-10 weeks. We provide a detailed timeline during the proposal phase so you know exactly what to expect.',
  },
  {
    question: "Do I own the tool after it's built?",
    answer:
      "Yes, completely. You own 100% of the code and can host it wherever you choose. There are no licensing fees, no monthly charges, and no restrictions on how you use it. We can provide ongoing maintenance and updates if you want, but it's entirely optional.",
    schemaText:
      "Yes, completely. You own 100% of the code and can host it wherever you choose. There are no licensing fees, no monthly charges, and no restrictions on how you use it. We can provide ongoing maintenance and updates if you want, but it's entirely optional.",
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer:
      'Absolutely. We build tools that connect with your existing CRM (HubSpot, Salesforce, Pipedrive, etc.), email platforms, analytics tools, and any other systems you use. Integration is often a key benefit - bringing data together that was previously siloed.',
    schemaText:
      'Absolutely. We build tools that connect with your existing CRM (HubSpot, Salesforce, Pipedrive, etc.), email platforms, analytics tools, and any other systems you use. Integration is often a key benefit - bringing data together that was previously siloed.',
  },
  {
    question: 'What if I need changes after the tool is built?',
    answer:
      'We offer flexible maintenance packages for ongoing updates and feature additions. Small tweaks are often included in our standard support. For larger feature additions, we provide clear scoping and pricing upfront. Since you own the code, you can also have any developer make changes if you prefer.',
    schemaText:
      'We offer flexible maintenance packages for ongoing updates and feature additions. Small tweaks are often included in our standard support. For larger feature additions, we provide clear scoping and pricing upfront. Since you own the code, you can also have any developer make changes if you prefer.',
  },
];

export default function CustomToolsAutomationPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } =
    useContactDialog('Marketing Automation Consultation');

  const openService = (service: string) => {
    selectService(service);
    openDialog();
  };

  return (
    <div className="min-h-screen bg-paper">
      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Custom Marketing Tools & Automation"
        description="Tell us about your marketing workflow challenges and we'll show you how custom tools can help."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      {/* Hero. This page converts on a discovery call, not an audit form,
          so the hero keeps its two dialog buttons in the brand system. */}
      <section className="bg-paper bg-waves">
        <div className="container mx-auto px-6 pt-10 pb-24">
          <PageBreadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Custom Tools & Automation', href: '/services/custom-tools-automation', current: true },
            ]}
            className="mb-10 text-navy/60 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
          />
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="mb-5 text-[15px] font-semibold text-pen-text">
                Marketing Automation Solutions
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-[54px]">
                Custom <OrangeUnderline>Marketing Tools</OrangeUnderline> Built for Your
                Business
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-navy/75">
                Stop wrestling with generic marketing software. We build SEO automation tools,
                lead generation systems, and reporting dashboards designed specifically for how
                your business operates.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openService('Custom Marketing Tools')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-bold text-white transition hover:bg-brand/90"
                >
                  Discuss Your Needs
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openService('Automation Discovery Call')}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-white px-7 py-3.5 font-bold text-navy transition hover:border-brand hover:text-brand"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule Discovery Call
                </button>
              </div>

              <ul className="mt-9 flex flex-wrap gap-2" aria-label="Tool categories">
                {heroLabels.map((label) => (
                  <li
                    key={label}
                    className="rounded-full border border-hairline bg-white px-3.5 py-1.5 text-sm font-medium text-navy/80"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboard mock (illustrative) */}
            <Reveal className="relative mx-auto w-full max-w-md">
              <MarkerNote className="absolute -top-3 left-0 z-10 text-[24px] sm:-left-4">
                one job, done well
              </MarkerNote>
              <div className="rounded-[1.75rem] border border-hairline bg-white p-6 shadow-2xl">
                <p className="text-sm font-bold tracking-[0.18em] text-navy/50">
                  ILLUSTRATIVE DASHBOARD
                </p>
                <p className="mt-3 text-xl font-extrabold tracking-tight text-navy">
                  Your marketing, one view
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    { label: 'Automated rank tracking', status: 'Alerts on' },
                    { label: 'Review requests', status: 'Sent after each job' },
                    { label: 'Lead follow-up sequence', status: 'Running' },
                    { label: 'Monthly report', status: 'Ready to send' },
                  ].map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-paper px-4 py-3"
                    >
                      <span className="text-[15px] font-medium text-navy/80">{row.label}</span>
                      <span className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-brand">
                        <Check className="h-4 w-4" strokeWidth={3} />
                        {row.status}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  Mock dashboard for illustration, built from the tools described on this page.
                </p>
              </div>
              <MarkerNote className="absolute -bottom-5 left-8 z-10 text-[24px]">
                yours to keep
              </MarkerNote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why custom */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Why custom</p>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Why Custom Beats Off-the-Shelf for Local Businesses
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-navy/75">
              <p>
                HubSpot, Zapier, and Monday.com are built for companies with marketing teams to
                manage them. A local HVAC company, dental practice, or law firm doesn&apos;t
                need a 200-feature platform - they need one tool that does exactly one job,
                reliably, without requiring a consultant to maintain it.
              </p>
              <p>
                We build lightweight custom tools: lead capture automations,{' '}
                <Link href="/blog/google-business-profile-optimization-daytona" className="font-medium text-brand underline hover:text-navy">
                  review request
                </Link>{' '}
                sequences, appointment reminder flows, and reporting dashboards built around how
                your business actually runs. No subscription. No learning curve. One build,
                yours to keep. They sit next to your{' '}
                <Link href="/services/local-seo" className="font-medium text-brand underline hover:text-navy">
                  local SEO
                </Link>{' '}
                program - not instead of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we build: tabs */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What we build</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Marketing Technology Built for Results
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Every tool we build is designed to save you time, capture more leads, and give
              you the insights you need to grow.
            </p>
          </div>
          <ServiceTabs services={toolTabs} ariaLabel="Custom tool categories" idPrefix="tools" />
        </div>
      </section>

      {/* Why custom beats generic */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Why custom</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Why Custom Beats Generic
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Off-the-shelf marketing tools force you to work their way. Custom tools work the
              way you do.
            </p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-3">
            {whyBlocks.map((block) => (
              <div key={block.title} className="mt-10 border-t-2 border-hairline pt-5">
                <h3 className="text-xl font-extrabold tracking-tight text-navy">{block.title}</h3>
                <p className="mt-2 leading-relaxed text-navy/70">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Use cases</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Who Benefits Most from Custom Marketing Tools
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-3xl border border-hairline bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-extrabold tracking-tight text-navy">
                  {useCase.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {useCase.items.map((item) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-tint/60 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What to expect</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              How We Build Your Custom Solution
            </h2>
          </div>
          <ServiceTimeline steps={processSteps} />
        </div>
      </section>

      {/* Pricing: figures from pricing.ts customToolsOffer. The live page had
          no pricing section, only a cost FAQ that contradicted pricing.ts. */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Pricing</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Custom Tool Pricing
            </h2>
            <p className="text-lg leading-relaxed text-navy/75">
              {customToolsOffer.projectRange.replace(' — ', ' - ')}
            </p>
            <p className="mt-4 leading-relaxed text-navy/70">
              {customToolsOffer.comparisonNote.replace('–', '-')}
            </p>
            <p className="mt-2 leading-relaxed text-navy/70">
              {customToolsOffer.maintenanceNote.replace(' — ', ' - ')}
            </p>
            <button
              type="button"
              onClick={() => openService('Automation Discovery Call')}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-bold text-white transition hover:bg-brand/90"
            >
              <Calendar className="h-4 w-4" />
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </section>

      <ServiceFaq faqs={toolsFaqs} withSchema note="Still wondering? The assistant in the corner can answer anything else." />

      {/* Closing CTA: keeps the page's discovery-call flow and copy */}
      <section className="bg-brand bg-waves-light py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-[40px]">
              Ready to Build Your Custom Marketing Tools?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Let&apos;s discuss your workflow, your challenges, and how custom tools can
              transform your marketing efficiency.
            </p>
            <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] bg-white p-8 text-left shadow-2xl">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                Schedule a Discovery Call
              </h3>
              <p className="mt-1.5 text-navy/70">
                Get a detailed project proposal within 48 hours of our call
              </p>
              <button
                type="button"
                onClick={() => openService('Custom Tools Discovery Call')}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-bold text-white transition hover:bg-brand/90"
              >
                <Calendar className="h-4 w-4" />
                Schedule Discovery Call
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-center text-sm text-navy/60">
                We&apos;ll discuss your needs, show relevant examples, and provide a clear
                project outline.
              </p>
            </div>
            <p className="mt-8 text-white/70">
              Custom solutions for agencies, in-house teams, and growing businesses across
              Florida
            </p>
          </div>
        </div>
      </section>

      <ProfessionalServiceSchema
        serviceName="Custom Digital Marketing Tools & Automation"
        serviceDescription="Custom SEO automation tools, lead generation systems, reporting dashboards, and workflow automation built for your specific business needs"
        serviceUrl="https://aiogrowthseo.com/services/custom-tools-automation"
        serviceType="Marketing Automation Services"
        dateModified="2026-10-11T10:00:00Z"
      />
    </div>
  );
}
