'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
  agenticEngineTiers,
  agenticOffer,
  customToolsOffer,
  dominationGeoNoteCta,
  dominationGeoNoteLead,
  ecommerceMonthlyTiers,
  formatUsd,
  funnelSprintOffer,
  geoOffer,
  monthlyTiers,
  multiLocationMonthlyNote,
  pricingBundles,
  roiComparison,
  seoFoundation,
  seoMonthlyTiers,
  setupTiers,
} from '@/data/pricing';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import {
  ArrowRight,
  Bot,
  Calculator,
  Check,
  Cog,
  DollarSign,
  MapPin,
  Rocket,
  Search,
  Shield,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import OrangeUnderline from '../../components/brand/OrangeUnderline';

/** pricing.ts strings keep their source punctuation; visible copy is hyphenated at render. */
const hyph = (s: string) => s.replace(/—/g, '-').replace(/–/g, '-');

/**
 * The retired ladder combination from phases 1-2. pricingBundles still
 * carries it as the Local Business Starter total (Single-Location
 * Foundation $1,500 + Growth $500/mo); the combined figure is not
 * rendered - the bundle card lists both components with their prices.
 */
const RETIRED_COMBINED_TOTAL = '$1,500 setup + $500/mo';

type ServiceCardShellProps = {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  flagship?: boolean;
  children: ReactNode;
};

function ServiceCardShell({
  icon: Icon,
  name,
  description,
  href,
  flagship = false,
  children,
}: ServiceCardShellProps) {
  return (
    <div className={`rounded-3xl border bg-cream p-8 shadow-sm ${flagship ? 'border-2 border-navy' : 'border-hairline'}`}>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Icon className="h-10 w-10 shrink-0 text-brand" />
          <div>
            {flagship && (
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-pen-text">Flagship Offer</p>
            )}
            <h3 className="text-2xl font-extrabold tracking-tight text-navy">{name}</h3>
            <p className="mt-1 text-base text-navy/70">{hyph(description)}</p>
          </div>
        </div>
        <Link href={href}>
          <Button variant="outline" size="sm">
            Learn More<span className="sr-only"> about {name}</span> <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

function FeatureList({ features, size = 'sm' }: { features: readonly string[]; size?: 'sm' | 'xs' }) {
  const iconClass = size === 'xs' ? 'w-3 h-3' : 'w-4 h-4';
  const textClass = size === 'xs' ? 'text-xs text-navy/70' : 'text-sm text-navy/80';
  return (
    <ul className="space-y-2">
      {features.map((feature) => (
        <li key={feature} className={`flex items-start gap-2 ${textClass}`}>
          <Check className={`${iconClass} mt-0.5 shrink-0 text-brand`} />
          <span>{hyph(feature)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PricingPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Get Started');

  const pick = (label: string) => {
    selectService(label);
    openDialog();
  };

  return (
    <div className="bg-paper">
      <PageBreadcrumb items={[{ label: 'Pricing', href: '/pricing', current: true }]} />

      {/* Hero Section */}
      <section className="bg-paper bg-waves px-6 pb-16 pt-24">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[15px] font-semibold text-pen-text">Transparent Pricing</p>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-6xl">
            <OrangeUnderline>No Retainers. No Fluff.</OrangeUnderline>
            <br />
            <span>Just Plans That Work.</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-navy/70">
            Build a solid foundation with one-time setup, then maintain momentum with affordable monthly optimization.
            You own everything we build.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-navy">
              <Shield className="mr-2 h-4 w-4 text-brand" />
              No Long-Term Contracts
            </span>
            <span className="inline-flex items-center rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-navy">
              <Target className="mr-2 h-4 w-4 text-brand" />
              No Percentage Fees
            </span>
            <span className="inline-flex items-center rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-navy">
              <Zap className="mr-2 h-4 w-4 text-brand" />
              Own Everything We Build
            </span>
          </div>

          <Button size="lg" onClick={() => openDialog()}>
            Get Your Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Setup + Monthly Model Explanation */}
      <section className="bg-cream px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">The Setup + Monthly Model</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
              Why pay $3,000+/month for a retainer when you can build a foundation once and maintain it for less?
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-pen/30 bg-pen-tint/40 p-6">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-extrabold tracking-tight text-pen-text">
                <DollarSign className="h-5 w-5" />
                Traditional Agency Model
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pen" />
                  <p className="text-navy/70">
                    $3,000-5,000/month retainers for ongoing &quot;optimization&quot;
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pen" />
                  <p className="text-navy/70">
                    6-12 month{' '}
                    <Link href="/blog/how-to-choose-daytona-beach-seo-company" className="text-brand hover:underline">
                      minimum contracts lock you in
                    </Link>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pen" />
                  <p className="text-navy/70">20% of ad spend just to manage campaigns</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pen" />
                  <p className="text-navy/70">You lose everything when you leave</p>
                </div>
                <div className="border-t border-pen/20 pt-4">
                  <p className="font-semibold text-pen-text">
                    Year 1 Cost: {formatUsd(roiComparison.traditionalTotal)}+
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-brand/25 bg-brand-tint/50 p-6">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-extrabold tracking-tight text-navy">
                <TrendingUp className="h-5 w-5 text-brand" />
                Our Setup + Monthly Model
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-medium text-navy">One-time foundation setup</p>
                    <p className="text-sm text-navy/70">Build it right once, own it forever</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-medium text-navy">Affordable monthly maintenance</p>
                    <p className="text-sm text-navy/70">Keep momentum without breaking the bank</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-medium text-navy">Month-to-month flexibility</p>
                    <p className="text-sm text-navy/70">Cancel anytime, keep everything</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-medium text-navy">You own all assets</p>
                    <p className="text-sm text-navy/70">Accounts, content, systems - it&apos;s all yours</p>
                  </div>
                </div>
                <div className="border-t border-brand/20 pt-4">
                  <p className="font-semibold text-navy">Year 1 Cost: {formatUsd(roiComparison.ourTotal)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Pricing */}
      <section className="bg-paper px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">All Services</p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">Transparent Pricing for Every Service</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
              Choose the services that fit your business. Mix and match setup + monthly options.
            </p>
          </div>

          <div className="space-y-8">
            {/* Agentic SEO Site - flagship */}
            <ServiceCardShell
              icon={Bot}
              name={agenticOffer.cardTitle}
              description={`${agenticOffer.cardSubtitle}. ${agenticOffer.cardDescription}`}
              href={agenticOffer.canonicalPath}
              flagship
            >
              <p className="mb-6 text-lg font-semibold text-navy">{hyph(agenticOffer.cardPrice)}</p>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-hairline bg-brand-tint/50 p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold uppercase tracking-wide text-navy/60">
                      Site Rebuild
                    </span>
                    <span className="text-lg font-bold text-navy">{hyph(agenticOffer.setup)}</span>
                  </div>
                  <p className="mb-4 text-sm text-navy/70">{hyph(agenticOffer.smbEntry)}</p>
                  <FeatureList features={agenticOffer.setupDeliverables} />
                  <Button className="mt-4 w-full" onClick={() => pick(agenticOffer.serviceLabel)}>
                    Get Agentic Site Quote
                  </Button>
                </div>
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-wide text-navy/60">
                    Agentic Engine (monthly)
                  </p>
                  <div className="space-y-3">
                    {agenticEngineTiers.map((tier) => (
                      <div
                        key={tier.name}
                        className={`rounded-lg border bg-white p-4 ${tier.highlighted ? 'border-brand bg-brand-tint/50' : 'border-hairline'}`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-semibold text-navy">{tier.name}</span>
                          <span className="text-lg font-bold text-navy">{tier.price}</span>
                        </div>
                        <p className="mb-3 text-xs text-navy/60">{hyph(tier.cadence)}</p>
                        <Button variant="outline" size="sm" className="w-full" onClick={() => pick(tier.serviceLabel)}>
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-navy/70">{hyph(agenticOffer.ownership)}</p>
                </div>
              </div>
            </ServiceCardShell>

            {/* SEO Services */}
            <ServiceCardShell
              icon={Search}
              name="SEO Services"
              description="Technical foundation + topical authority for sustainable organic growth"
              href="/services/search-engine-optimization"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-2xl bg-band p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-wide text-navy/60">
                      SEO Foundation
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-navy">{seoFoundation.price}</span>
                      <span className="ml-1 text-navy/60">one-time</span>
                    </div>
                  </div>
                  <FeatureList features={seoFoundation.features} />
                  <Button className="mt-4 w-full" onClick={() => pick(seoFoundation.serviceLabel)}>
                    Get SEO Foundation
                  </Button>
                </div>
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-wide text-navy/60">
                    Monthly Plans
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {seoMonthlyTiers.map((tier) => (
                      <div
                        key={tier.name}
                        className={`rounded-lg border bg-white p-4 transition-colors ${tier.highlighted ? 'border-brand bg-brand-tint/50' : 'border-hairline'}`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-semibold text-navy">{tier.name}</span>
                          <span className="text-lg font-bold text-navy">{tier.price}</span>
                        </div>
                        <FeatureList features={tier.features} size="xs" />
                        {tier.name === 'Domination' && (
                          <p className="mt-2 text-xs text-navy/60">
                            {dominationGeoNoteLead}{' '}
                            <Link href={geoOffer.href} className="text-brand hover:underline">
                              {dominationGeoNoteCta} {geoOffer.offerName}
                            </Link>
                            .
                          </p>
                        )}
                        <Button variant="outline" size="sm" className="mt-3 w-full" onClick={() => pick(`SEO ${tier.serviceLabel}`)}>
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ServiceCardShell>

            {/* Local SEO */}
            <ServiceCardShell
              icon={MapPin}
              name="Local SEO"
              description="Location-tiered foundation plus monthly plans for map pack and GBP dominance"
              href="/services/local-seo"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="mb-4 font-semibold text-navy">Foundation Setup</h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {setupTiers.map((tier) => (
                      <div key={tier.name} className="flex flex-col rounded-2xl border border-hairline bg-band p-5">
                        <div className="mb-2 flex items-start justify-between">
                          <span className="font-semibold text-navy">{tier.name}</span>
                          <span className="text-xl font-extrabold text-navy">{tier.price}</span>
                        </div>
                        <p className="mb-4 flex-1 text-xs leading-relaxed text-navy/70">{hyph(tier.description)}</p>
                        <Button
                          size="sm"
                          className="w-full"
                          onClick={() => pick(tier.serviceLabel)}
                        >
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 font-semibold text-navy">Monthly Plans</h4>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {monthlyTiers.map((tier) => (
                      <div
                        key={tier.name}
                        className={`rounded-lg border bg-white p-4 ${tier.highlighted ? 'border-brand bg-brand-tint/50' : 'border-hairline'}`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-semibold text-navy">{tier.name}</span>
                          <span className="text-lg font-bold text-navy">{tier.price}</span>
                        </div>
                        <FeatureList features={tier.features} size="xs" />
                        {tier.name === 'Domination' && (
                          <p className="mt-2 text-xs text-navy/60">
                            {dominationGeoNoteLead}{' '}
                            <Link href={geoOffer.href} className="text-brand hover:underline">
                              {dominationGeoNoteCta} {geoOffer.offerName}
                            </Link>
                            .
                          </p>
                        )}
                        <Button variant="outline" size="sm" className="mt-3 w-full" onClick={() => pick(`Local SEO ${tier.serviceLabel}`)}>
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-center text-sm text-navy/70">{multiLocationMonthlyNote}</p>
                </div>
              </div>
            </ServiceCardShell>

            {/* GEO: The Answer Engine is the single current public offer */}
            <ServiceCardShell
              icon={Sparkles}
              name={geoOffer.name}
              description={geoOffer.description}
              href={geoOffer.href}
            >
              <div className="space-y-6">
                <p className="text-navy/70">{hyph(geoOffer.subhead)}</p>
                <div className="rounded-2xl border border-brand/25 bg-brand-tint/50 p-6">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand">{geoOffer.offerName}</p>
                  <p className="mb-1 text-2xl font-extrabold text-navy">{geoOffer.price}</p>
                  <p className="mb-4 text-sm text-navy/70">
                    {geoOffer.term}, with a {geoOffer.guarantee}
                  </p>
                  <div className="mb-4 overflow-x-auto">
                    <table className="min-w-full border-collapse border border-hairline text-left text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="border border-hairline px-3 py-2 font-semibold text-navy">Offer</th>
                          <th className="border border-hairline px-3 py-2 font-semibold text-navy">Build</th>
                          <th className="border border-hairline px-3 py-2 font-semibold text-navy">Monthly</th>
                          <th className="border border-hairline px-3 py-2 font-semibold text-navy">Term</th>
                          <th className="border border-hairline px-3 py-2 font-semibold text-navy">Guarantee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-hairline px-3 py-2">{geoOffer.offerName}</td>
                          <td className="border border-hairline px-3 py-2">{geoOffer.build}</td>
                          <td className="border border-hairline px-3 py-2">{geoOffer.monthly}</td>
                          <td className="border border-hairline px-3 py-2">{geoOffer.term}</td>
                          <td className="border border-hairline px-3 py-2">{geoOffer.guarantee}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <FeatureList features={geoOffer.features} />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={geoOffer.costPageHref}>
                    <Button variant="outline">See what GEO costs</Button>
                  </Link>
                  <Button onClick={() => pick(geoOffer.serviceLabel)}>Book a free audit</Button>
                </div>
              </div>
            </ServiceCardShell>

            {/* E-commerce */}
            <ServiceCardShell
              icon={ShoppingCart}
              name="E-commerce SEO"
              description="Product optimization, technical SEO, and conversion strategies for online stores"
              href="/services/ecommerce-seo"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ecommerceMonthlyTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-lg border bg-white p-4 ${tier.highlighted ? 'border-brand bg-brand-tint/50' : 'border-hairline'}`}
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-pen-text">{tier.badge}</p>
                    <p className="font-semibold text-navy">{tier.subtitle}</p>
                    <p className="my-2 text-2xl font-extrabold text-navy">{tier.price}</p>
                    <p className="mb-3 text-xs text-navy/60">{tier.description}</p>
                    <FeatureList features={tier.features} size="xs" />
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 w-full"
                      onClick={() => pick(tier.serviceLabel)}
                    >
                      Select
                    </Button>
                  </div>
                ))}
              </div>
            </ServiceCardShell>

            {/* MintCRO Funnel Sprint */}
            <ServiceCardShell
              icon={Rocket}
              name={funnelSprintOffer.name}
              description="Conversion-focused funnel build with managed testing - then ongoing ad management tiers"
              href={funnelSprintOffer.href}
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-pen/25 bg-pen-tint/50 p-6">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wide text-navy/60">
                    Sprint
                  </p>
                  <p className="mb-2 text-3xl font-extrabold text-pen-text">{funnelSprintOffer.sprintPrice}</p>
                  <p className="mb-4 text-sm text-navy/70">{hyph(funnelSprintOffer.sprintIncludes)}</p>
                  <p className="text-sm font-medium text-navy">{hyph(funnelSprintOffer.guarantee)}</p>
                  <Button className="mt-4 w-full" onClick={() => pick(funnelSprintOffer.serviceLabel)}>
                    Start Funnel Sprint
                  </Button>
                </div>
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-wide text-navy/60">
                    Ongoing Management
                  </p>
                  <div className="space-y-3">
                    {funnelSprintOffer.ongoingTiers.map((tier) => (
                      <div key={tier.price} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-hairline bg-white p-4">
                        <span className="font-semibold text-navy">{tier.price}</span>
                        <span className="text-sm text-navy/60">{tier.adSpend}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto"
                          onClick={() => pick(`Funnel Management - ${tier.price} (${tier.adSpend})`)}
                        >
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ServiceCardShell>

            {/* Custom Tools */}
            <ServiceCardShell
              icon={Cog}
              name={customToolsOffer.name}
              description={customToolsOffer.description}
              href={customToolsOffer.href}
            >
              <div className="max-w-3xl rounded-2xl bg-band p-6">
                <p className="mb-4 text-navy/75">{hyph(customToolsOffer.projectRange)}</p>
                <p className="mb-4 text-sm text-navy/70">{hyph(customToolsOffer.comparisonNote)}</p>
                <p className="mb-6 text-sm text-navy/70">{hyph(customToolsOffer.maintenanceNote)}</p>
                <Button className="w-full sm:w-auto" onClick={() => pick(customToolsOffer.serviceLabel)}>
                  Book Discovery Call
                </Button>
              </div>
            </ServiceCardShell>
          </div>
        </div>
      </section>

      {/* Package Combinations */}
      <section className="bg-cream px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Recommended</p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">Popular Package Combinations</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
              Strategic bundles designed for maximum impact
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingBundles.map((combo) => (
              <div
                key={combo.name}
                className={`flex flex-col rounded-3xl border bg-white p-6 shadow-sm ${'popular' in combo && combo.popular ? 'border-2 border-navy' : 'border-hairline'}`}
              >
                {'popular' in combo && combo.popular && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-wide text-pen-text">Most Popular</p>
                )}
                <h3 className="mb-2 text-xl font-extrabold tracking-tight text-navy">{combo.name}</h3>
                {combo.total !== RETIRED_COMBINED_TOTAL && (
                  <div className="mb-2 text-2xl font-extrabold text-navy">{hyph(combo.total)}</div>
                )}
                <p className="mb-4 text-sm text-navy/70">{hyph(combo.description)}</p>
                <div className="mb-4 space-y-2">
                  {combo.services.map((service) => (
                    <div key={service} className="flex items-start gap-2 text-sm text-navy/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{hyph(service)}</span>
                    </div>
                  ))}
                </div>
                <p className="mb-4 text-sm font-medium text-pen-text">{hyph(combo.savings)}</p>
                <Button
                  className="mt-auto w-full"
                  variant={'popular' in combo && combo.popular ? 'default' : 'outline'}
                  onClick={() => pick(combo.serviceLabel)}
                >
                  Get This Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="bg-band px-6 py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 inline-flex items-center text-[15px] font-semibold text-pen-text">
              <Calculator className="mr-2 h-4 w-4" />
              ROI Comparison
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">See the Difference</h2>
            <p className="text-xl leading-relaxed text-navy/70">
              Compare our setup + monthly model to traditional agency retainers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-pen/25 bg-white p-6">
              <h3 className="mb-5 text-xl font-extrabold tracking-tight text-pen-text">Traditional Agency (Year 1)</h3>
              <div className="space-y-3">
                {roiComparison.traditionalLines.map((line) => (
                  <div key={line.label} className="flex justify-between gap-4">
                    <span className="text-navy/80">{line.label}</span>
                    <span className="font-medium text-navy">{formatUsd(line.amount)}</span>
                  </div>
                ))}
                <hr className="my-4 border-hairline" />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-navy">Total Year 1:</span>
                  <span className="text-pen-text">{formatUsd(roiComparison.traditionalTotal)}</span>
                </div>
                <p className="text-sm text-navy/60">{roiComparison.traditionalFootnote}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-brand/25 bg-brand-tint/50 p-6">
              <h3 className="mb-5 text-xl font-extrabold tracking-tight text-navy">Our Model (Year 1)</h3>
              <div className="space-y-3">
                {roiComparison.ourLines.map((line) => (
                  <div key={line.label} className="flex justify-between gap-4">
                    <span className="text-navy/80">{line.label}</span>
                    <span className="font-medium text-navy">{formatUsd(line.amount)}</span>
                  </div>
                ))}
                <hr className="my-4 border-brand/20" />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-navy">Total Year 1:</span>
                  <span className="text-navy">{formatUsd(roiComparison.ourTotal)}</span>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-white/70 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-brand" />
                  <span className="font-bold text-navy">
                    You Save: {formatUsd(roiComparison.savings)} in Year 1
                  </span>
                </div>
                <p className="text-sm text-navy/70">{roiComparison.ourTagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-paper px-6 py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-12 text-xl text-navy/70">Three ways to move forward</p>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-hairline bg-cream p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint">
                <span className="text-xl font-extrabold text-brand">1</span>
              </div>
              <h3 className="mb-2 text-xl font-extrabold tracking-tight text-navy">Free Consultation</h3>
              <p className="mb-6 text-sm leading-relaxed text-navy/70">
                Not sure where to start? Let&apos;s talk about your goals and create a custom plan.
              </p>
              <Button variant="outline" className="w-full" onClick={() => pick('Free Consultation')}>
                Schedule Call
              </Button>
            </div>

            <div className="rounded-3xl border-2 border-navy bg-cream p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                <span className="text-xl font-extrabold text-white">2</span>
              </div>
              <h3 className="mb-2 text-xl font-extrabold tracking-tight text-navy">Get a Custom Quote</h3>
              <p className="mb-6 text-sm leading-relaxed text-navy/70">
                Tell us about your business and get a tailored pricing recommendation.
              </p>
              <Button className="w-full" onClick={() => openDialog()}>
                Get Custom Quote
              </Button>
            </div>

            <div className="rounded-3xl border border-hairline bg-cream p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint">
                <span className="text-xl font-extrabold text-brand">3</span>
              </div>
              <h3 className="mb-2 text-xl font-extrabold tracking-tight text-navy">Choose a Service</h3>
              <p className="mb-6 text-sm leading-relaxed text-navy/70">Know what you need? Select any service above to get started.</p>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-brand-tint/60 p-8">
            <h3 className="mb-2 text-xl font-extrabold tracking-tight text-navy">Our Guarantee</h3>
            <p className="mx-auto max-w-2xl leading-relaxed text-navy/70">
              Every service includes strategic consultation to ensure you&apos;re investing in the right solutions. If
              you don&apos;t see measurable improvement within 90 days, we&apos;ll work for free until you do.
            </p>
          </div>
        </div>
      </section>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Custom Quote"
        description="Tell us about your business and goals, and we'll recommend the right combination of services."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </div>
  );
}
