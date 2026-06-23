'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Bot,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  FileText,
  GitBranch,
  Layers,
  RefreshCw,
  Search,
  Shield,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { agenticEngineTiers, agenticOffer } from '@/data/pricing';
import { trackPrimaryCtaClick } from '@/lib/analytics';

const CTA_LABEL = 'Get a Custom Quote';

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
    <>
      <PageBreadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Agentic SEO Site', current: true },
        ]}
      />

      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Bot className="w-4 h-4 mr-2" />
              Flagship Offer
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              The Agentic SEO Site —{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                a website that improves itself.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              We build an AI-ready site that reads your search, funnel, and AI-visibility data and gets better every
              cycle — not a site that goes stale the day it launches.
            </p>

            <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openQuoteDialog('hero')}>
              {CTA_LABEL}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What It <span className="gradient-text">Is</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two layers: a full AI-ready rebuild, then a self-improving engine running on your live data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-professional border-indigo-200">
              <CardHeader>
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Full AI-Ready Rebuild</CardTitle>
                <CardDescription>The foundation everything else runs on</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {agenticOffer.setupDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional border-violet-200 bg-violet-50/30">
              <CardHeader>
                <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <RefreshCw className="w-7 h-7 text-violet-600" />
                </div>
                <CardTitle className="text-2xl">Self-Improving Engine</CardTitle>
                <CardDescription>Runs on your live data after launch</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
                    <span>Reads search performance, funnel behavior, and AI-visibility signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
                    <span>Identifies gaps and opportunities each cycle — not once at launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
                    <span>Feeds improvements back into content, structure, and entity signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
                    <span>Compounds over time instead of decaying like a static build</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why static sites fail */}
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Most Sites <span className="gradient-text">Go Stale</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A traditional website is a snapshot. Search algorithms shift, AI crawlers evolve, competitors publish,
              and your funnel data tells a story no one reads. The Agentic SEO Site closes that loop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-professional text-center">
              <CardHeader>
                <Search className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Search Data In, Actions Out</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rankings, impressions, and click patterns feed the next cycle of on-page and content decisions —
                  not a quarterly report that sits in a folder.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <Database className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Funnel Data Drives Priorities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Where visitors drop, which pages convert, and which paths stall — the engine uses real funnel
                  behavior to decide what to fix next.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">AI Visibility Tracked</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  How often you appear in AI-generated answers matters now. The engine monitors AI-visibility data
                  alongside traditional search metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How the cycle works */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Improvement Cycle</span>
            </h2>
          </div>

          <div className="space-y-6">
            {agenticOffer.engineCycle.map((step, index) => {
              const icons = [FileText, Cpu, Workflow, GitBranch, RefreshCw];
              const Icon = icons[index] ?? RefreshCw;
              return (
                <div key={step.step} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {index + 1}. {step.step}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-violet-50 to-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Pricing</span>
            </h2>
          </div>

          <p className="text-center text-lg font-medium text-indigo-700 mb-8">{agenticOffer.smbEntry}</p>

          <Card className="card-professional border-indigo-200 mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Site Rebuild</CardTitle>
              <CardDescription className="text-base mt-4">
                <p className="text-2xl font-bold text-indigo-600">{agenticOffer.setup}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" onClick={() => openQuoteDialog('setup', agenticOffer.serviceLabel)}>
                {CTA_LABEL}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Agentic Engine</h3>
            <p className="text-muted-foreground">Monthly tiers for the self-improving engine after launch</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {agenticEngineTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-4 border rounded-lg ${tier.highlighted ? 'border-indigo-200 bg-indigo-50' : ''}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{tier.name}</span>
                  <span className="text-xl font-bold text-indigo-600">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{tier.cadence}</p>
                <Button
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => openQuoteDialog('engine', tier.serviceLabel)}
                >
                  Choose {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-professional border-indigo-200 bg-indigo-50/20">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">You Own the Site</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{agenticOffer.ownership}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for a Site That Improves Itself?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Tell us about your current site and goals. We will scope the rebuild and engine to fit.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openQuoteDialog('final')}>
            {CTA_LABEL}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-indigo-200 mt-6 text-sm">
            Or explore our{' '}
            <Link href="/seo-services" className="underline hover:text-white">
              SEO Foundation and monthly plans
            </Link>{' '}
            if you are not ready for a full agentic rebuild.
          </p>
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
        serviceName="Agentic SEO Site"
        serviceDescription="An AI-ready website rebuild with a self-improving engine that reads search, funnel, and AI-visibility data and gets better every cycle."
        serviceUrl={`https://aiogrowthseo.com${agenticOffer.canonicalPath}`}
        price="2500-5000"
        serviceType="Agentic SEO Site"
      />
    </>
  );
}
