'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  agenticEngineTiers,
  agenticOffer,
  customToolsOffer,
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

type ServiceCardShellProps = {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  color: string;
  flagship?: boolean;
  children: ReactNode;
};

function ServiceCardShell({
  icon: Icon,
  name,
  description,
  href,
  color,
  flagship = false,
  children,
}: ServiceCardShellProps) {
  return (
    <Card className={`overflow-hidden ${flagship ? 'border-indigo-300 shadow-lg ring-1 ring-indigo-200' : ''}`}>
      <div className={`h-2 bg-gradient-to-r ${color}`} />
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shrink-0`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              {flagship && (
                <Badge className="mb-2 bg-indigo-600 text-white hover:bg-indigo-600">Flagship Offer</Badge>
              )}
              <CardTitle className="text-2xl">{name}</CardTitle>
              <CardDescription className="text-base mt-1">{description}</CardDescription>
            </div>
          </div>
          <Link href={href}>
            <Button variant="outline" size="sm">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function FeatureList({ features, size = 'sm' }: { features: readonly string[]; size?: 'sm' | 'xs' }) {
  const iconClass = size === 'xs' ? 'w-3 h-3' : 'w-4 h-4';
  const textClass = size === 'xs' ? 'text-xs text-muted-foreground' : 'text-sm';
  return (
    <ul className="space-y-2">
      {features.map((feature) => (
        <li key={feature} className={`flex items-start gap-2 ${textClass}`}>
          <Check className={`${iconClass} text-primary mt-0.5 shrink-0`} />
          <span>{feature}</span>
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
    <>
      <PageBreadcrumb items={[{ label: 'Pricing', current: true }]} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Transparent Pricing</Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">No Retainers. No Fluff.</span>
            <br />
            <span className="text-foreground">Just Plans That Work.</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Build a solid foundation with one-time setup, then maintain momentum with affordable monthly optimization.
            You own everything we build.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              No Long-Term Contracts
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Target className="w-4 h-4 mr-2" />
              No Percentage Fees
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Own Everything We Build
            </Badge>
          </div>

          <Button size="lg" onClick={() => openDialog()}>
            Get Your Custom Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Setup + Monthly Model Explanation */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Setup + Monthly Model</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why pay $3,000+/month for a retainer when you can build a foundation once and maintain it for less?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-xl text-destructive flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Traditional Agency Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <p className="text-muted-foreground">
                    $3,000-5,000/month retainers for ongoing &quot;optimization&quot;
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <p className="text-muted-foreground">6-12 month minimum contracts lock you in</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <p className="text-muted-foreground">20% of ad spend just to manage campaigns</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <p className="text-muted-foreground">You lose everything when you leave</p>
                </div>
                <div className="pt-4 border-t border-destructive/20">
                  <p className="font-semibold text-destructive">
                    Year 1 Cost: {formatUsd(roiComparison.traditionalTotal)}+
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Our Setup + Monthly Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">One-time foundation setup</p>
                    <p className="text-sm text-muted-foreground">Build it right once, own it forever</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Affordable monthly maintenance</p>
                    <p className="text-sm text-muted-foreground">Keep momentum without breaking the bank</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Month-to-month flexibility</p>
                    <p className="text-sm text-muted-foreground">Cancel anytime, keep everything</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">You own all assets</p>
                    <p className="text-sm text-muted-foreground">Accounts, content, systems — it&apos;s all yours</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-primary/20">
                  <p className="font-semibold text-primary">Year 1 Cost: {formatUsd(roiComparison.ourTotal)}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Services Pricing */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">All Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing for Every Service</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the services that fit your business. Mix and match setup + monthly options.
            </p>
          </div>

          <div className="space-y-8">
            {/* Agentic SEO Site — flagship */}
            <ServiceCardShell
              icon={Bot}
              name={agenticOffer.cardTitle}
              description={`${agenticOffer.cardSubtitle}. ${agenticOffer.cardDescription}`}
              href={agenticOffer.canonicalPath}
              color="from-indigo-500 to-violet-600"
              flagship
            >
              <p className="text-lg font-semibold text-indigo-700 mb-6">{agenticOffer.cardPrice}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-indigo-50/80 rounded-xl p-6 border border-indigo-100">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm">
                      Site Rebuild
                    </Badge>
                    <span className="text-lg font-bold text-indigo-600">{agenticOffer.setup}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{agenticOffer.smbEntry}</p>
                  <FeatureList features={agenticOffer.setupDeliverables} />
                  <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700" onClick={() => pick(agenticOffer.serviceLabel)}>
                    Get Agentic Site Quote
                  </Button>
                </div>
                <div>
                  <Badge variant="secondary" className="text-sm mb-4">
                    Agentic Engine (monthly)
                  </Badge>
                  <div className="space-y-3">
                    {agenticEngineTiers.map((tier) => (
                      <div
                        key={tier.name}
                        className={`bg-white border rounded-lg p-4 ${tier.highlighted ? 'border-indigo-200 bg-indigo-50/50' : ''}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{tier.name}</span>
                          <span className="text-lg font-bold text-indigo-600">{tier.price}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">{tier.cadence}</p>
                        <Button variant="outline" size="sm" className="w-full" onClick={() => pick(tier.serviceLabel)}>
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{agenticOffer.ownership}</p>
                </div>
              </div>
            </ServiceCardShell>

            {/* SEO Services */}
            <ServiceCardShell
              icon={Search}
              name="SEO Services"
              description="Technical foundation + topical authority for sustainable organic growth"
              href="/seo-services"
              color="from-blue-500 to-blue-600"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-sm">
                      SEO Foundation
                    </Badge>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{seoFoundation.price}</span>
                      <span className="text-muted-foreground ml-1">one-time</span>
                    </div>
                  </div>
                  <FeatureList features={seoFoundation.features} />
                  <Button className="w-full mt-4" onClick={() => pick(seoFoundation.serviceLabel)}>
                    Get SEO Foundation
                  </Button>
                </div>
                <div>
                  <Badge variant="secondary" className="text-sm mb-4">
                    Monthly Plans
                  </Badge>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {seoMonthlyTiers.map((tier) => (
                      <div
                        key={tier.name}
                        className={`bg-white border rounded-lg p-4 hover:border-primary/50 transition-colors ${tier.highlighted ? 'border-primary/40 bg-primary/5' : ''}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{tier.name}</span>
                          <span className="text-lg font-bold text-primary">{tier.price}</span>
                        </div>
                        <FeatureList features={tier.features} size="xs" />
                        <Button variant="outline" size="sm" className="w-full mt-3" onClick={() => pick(`SEO ${tier.serviceLabel}`)}>
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
              href="/local-seo"
              color="from-green-500 to-green-600"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-4">Foundation Setup</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {setupTiers.map((tier) => (
                      <div key={tier.name} className="bg-slate-50 rounded-xl p-5 border border-green-100 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold">{tier.name}</span>
                          <span className="text-xl font-bold text-green-600">{tier.price}</span>
                        </div>
                        <p className="text-xs text-muted-foreground flex-1 mb-4">{tier.description}</p>
                        <Button
                          size="sm"
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => pick(tier.serviceLabel)}
                        >
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Monthly Plans</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {monthlyTiers.map((tier) => (
                      <div
                        key={tier.name}
                        className={`bg-white border rounded-lg p-4 ${tier.highlighted ? 'border-green-200 bg-green-50' : ''}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{tier.name}</span>
                          <span className="text-lg font-bold text-green-600">{tier.price}</span>
                        </div>
                        <FeatureList features={tier.features} size="xs" />
                        <Button variant="outline" size="sm" className="w-full mt-3" onClick={() => pick(`Local SEO ${tier.serviceLabel}`)}>
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-4">{multiLocationMonthlyNote}</p>
                </div>
              </div>
            </ServiceCardShell>

            {/* GEO — informational */}
            <ServiceCardShell
              icon={Sparkles}
              name={geoOffer.name}
              description={geoOffer.description}
              href={geoOffer.href}
              color="from-purple-500 to-purple-600"
            >
              <div className="space-y-6">
                <p className="text-muted-foreground">{geoOffer.subhead}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-100">
                    <h3 className="font-semibold mb-1">{geoOffer.baselineTitle}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{geoOffer.baselineSubtitle}</p>
                    <FeatureList features={geoOffer.baselineFeatures} />
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-purple-200">
                    <Badge className="mb-3 bg-purple-600">{geoOffer.dominationTitle}</Badge>
                    <p className="text-sm text-muted-foreground mb-4">{geoOffer.dominationSubtitle}</p>
                    <FeatureList features={geoOffer.dominationFeatures} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={geoOffer.seoPlansHref}>
                    <Button variant="outline">View SEO Plans</Button>
                  </Link>
                  <Button onClick={() => pick(geoOffer.serviceLabel)}>Ask About GEO + SEO</Button>
                </div>
              </div>
            </ServiceCardShell>

            {/* E-commerce */}
            <ServiceCardShell
              icon={ShoppingCart}
              name="E-commerce SEO"
              description="Product optimization, technical SEO, and conversion strategies for online stores"
              href="/ecommerce-seo"
              color="from-fuchsia-500 to-pink-600"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ecommerceMonthlyTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`bg-white border rounded-lg p-4 ${tier.highlighted ? 'border-fuchsia-300 bg-fuchsia-50' : ''}`}
                  >
                    <Badge variant={tier.highlighted ? 'default' : 'secondary'} className={`mb-2 ${tier.highlighted ? 'bg-fuchsia-600' : ''}`}>
                      {tier.badge}
                    </Badge>
                    <p className="font-semibold">{tier.subtitle}</p>
                    <p className="text-2xl font-bold text-fuchsia-600 my-2">{tier.price}</p>
                    <p className="text-xs text-muted-foreground mb-3">{tier.description}</p>
                    <FeatureList features={tier.features} size="xs" />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-3 border-fuchsia-200 hover:bg-fuchsia-50"
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
              description="Conversion-focused funnel build with managed testing — then ongoing ad management tiers"
              href={funnelSprintOffer.href}
              color="from-orange-500 to-amber-600"
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <Badge variant="secondary" className="mb-3">
                    Sprint
                  </Badge>
                  <p className="text-3xl font-bold text-orange-600 mb-2">{funnelSprintOffer.sprintPrice}</p>
                  <p className="text-sm text-muted-foreground mb-4">{funnelSprintOffer.sprintIncludes}</p>
                  <p className="text-sm font-medium text-amber-900">{funnelSprintOffer.guarantee}</p>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700" onClick={() => pick(funnelSprintOffer.serviceLabel)}>
                    Start Funnel Sprint
                  </Button>
                </div>
                <div>
                  <Badge variant="secondary" className="text-sm mb-4">
                    Ongoing Management
                  </Badge>
                  <div className="space-y-3">
                    {funnelSprintOffer.ongoingTiers.map((tier) => (
                      <div key={tier.price} className="bg-white border rounded-lg p-4 flex justify-between items-center flex-wrap gap-2">
                        <span className="font-semibold">{tier.price}</span>
                        <span className="text-sm text-muted-foreground">{tier.adSpend}</span>
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
              color="from-slate-600 to-slate-700"
            >
              <div className="bg-slate-50 rounded-xl p-6 max-w-3xl">
                <p className="text-muted-foreground mb-4">{customToolsOffer.projectRange}</p>
                <p className="text-sm text-muted-foreground mb-4">{customToolsOffer.comparisonNote}</p>
                <p className="text-sm text-muted-foreground mb-6">{customToolsOffer.maintenanceNote}</p>
                <Button className="w-full sm:w-auto" onClick={() => pick(customToolsOffer.serviceLabel)}>
                  Book Discovery Call
                </Button>
              </div>
            </ServiceCardShell>
          </div>
        </div>
      </section>

      {/* Package Combinations */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Recommended</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Package Combinations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic bundles designed for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingBundles.map((combo) => (
              <Card
                key={combo.name}
                className={`relative ${combo.popular ? 'border-primary shadow-lg md:scale-105' : ''}`}
              >
                {'popular' in combo && combo.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className={'popular' in combo && combo.popular ? 'pt-8' : ''}>
                  <CardTitle className="text-xl">{combo.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{combo.total}</div>
                  <CardDescription>{combo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {combo.services.map((service) => (
                      <div key={service} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-secondary mb-4">{combo.savings}</p>
                  <Button
                    className="w-full"
                    variant={'popular' in combo && combo.popular ? 'default' : 'outline'}
                    onClick={() => pick(combo.serviceLabel)}
                  >
                    Get This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Calculator className="w-4 h-4 mr-2" />
              ROI Comparison
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See the Difference</h2>
            <p className="text-xl text-muted-foreground">
              Compare our setup + monthly model to traditional agency retainers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-xl text-destructive">Traditional Agency (Year 1)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {roiComparison.traditionalLines.map((line) => (
                    <div key={line.label} className="flex justify-between gap-4">
                      <span>{line.label}</span>
                      <span className="font-medium">{formatUsd(line.amount)}</span>
                    </div>
                  ))}
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Year 1:</span>
                    <span className="text-destructive">{formatUsd(roiComparison.traditionalTotal)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{roiComparison.traditionalFootnote}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Model (Year 1)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {roiComparison.ourLines.map((line) => (
                    <div key={line.label} className="flex justify-between gap-4">
                      <span>{line.label}</span>
                      <span className="font-medium">{formatUsd(line.amount)}</span>
                    </div>
                  ))}
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Year 1:</span>
                    <span className="text-primary">{formatUsd(roiComparison.ourTotal)}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">
                      You Save: {formatUsd(roiComparison.savings)} in Year 1
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{roiComparison.ourTagline}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-12">Three ways to move forward</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Free Consultation</CardTitle>
                <CardDescription>
                  Not sure where to start? Let&apos;s talk about your goals and create a custom plan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => pick('Free Consultation')}>
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="card-professional border-primary shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">2</span>
                </div>
                <CardTitle>Get a Custom Quote</CardTitle>
                <CardDescription>
                  Tell us about your business and get a tailored pricing recommendation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => openDialog()}>
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Choose a Service</CardTitle>
                <CardDescription>Know what you need? Select any service above to get started.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    View All Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Our Guarantee</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
    </>
  );
}
