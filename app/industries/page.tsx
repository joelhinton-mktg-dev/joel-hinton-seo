'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { Button } from '@/components/ui/button';
import {
  Target, Award, BarChart3, Brain, Phone, Search, ArrowRight, CheckCircle
} from 'lucide-react';
import { industries } from '@/data/industries';
import OrangeUnderline from '../../components/brand/OrangeUnderline';

export default function IndustriesPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Industry Analysis Consultation');

  return (
    <div className="bg-paper">
      <PageBreadcrumb
        items={[
          { label: "Industries", href: "/industries", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-paper bg-waves px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-brand" />
              <span className="text-lg font-semibold text-navy">12 Industry Verticals</span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-6xl">
              Industry-Specific <OrangeUnderline>Marketing Psychology</OrangeUnderline> That Converts
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-navy/70">
              Deep experience across 12 verticals with proven results in each sector. Every industry has unique customer psychology,
              buying behaviors, and conversion triggers. Generic marketing fails-specialized strategies dominate.
            </p>

            <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Search className="mr-2 h-5 w-5" />
                Find Your Industry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('Industry Consultation');
                  openDialog();
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Industry Consultation
              </Button>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 text-center md:grid-cols-3">
              <div className="p-4">
                <Award className="mx-auto mb-2 h-8 w-8 text-brand" />
                <p className="text-sm font-medium text-navy">12 Industries Mastered</p>
              </div>
              <div className="p-4">
                <BarChart3 className="mx-auto mb-2 h-8 w-8 text-brand" />
                <p className="text-sm font-medium text-navy">300%+ Average Growth</p>
              </div>
              <div className="p-4">
                <Brain className="mx-auto mb-2 h-8 w-8 text-brand" />
                <p className="text-sm font-medium text-navy">Psychology-Driven Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-paper px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Our <OrangeUnderline>Industry Expertise</OrangeUnderline>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
              Each industry requires specialized knowledge of customer psychology, buying behaviors, and market dynamics.
              We don&apos;t do generic marketing-we master industry-specific strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <div key={industry.id} className="flex h-full flex-col rounded-3xl border border-hairline bg-cream p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                      <IconComponent className="h-7 w-7" />
                    </span>
                    <div className="flex-1">
                      <h3 className="mb-1 text-xl font-extrabold tracking-tight text-navy">{industry.name}</h3>
                      <p className="text-xs font-semibold text-navy/60">
                        {industry.metrics.traffic} Traffic · {industry.metrics.roi} ROI
                      </p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-navy/70">{industry.description}</p>

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-navy">Psychology Triggers</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.psychologyTriggers.map((trigger, index) => (
                        <span key={index} className="rounded-full border border-hairline bg-white px-2.5 py-1 text-xs text-navy/70">{trigger}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-navy">Key Challenges We Solve</h4>
                    <ul className="space-y-1 text-xs text-navy/70">
                      {industry.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-brand" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-5 rounded-2xl bg-brand-tint p-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-navy">{industry.metrics.traffic}</div>
                        <div className="text-xs text-navy/60">Traffic Growth</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-navy">{industry.metrics.leads}</div>
                        <div className="text-xs text-navy/60">Lead Increase</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-navy">{industry.metrics.roi}</div>
                        <div className="text-xs text-navy/60">ROI Growth</div>
                      </div>
                    </div>
                  </div>

                  <Link href={`/industries/${industry.slug}`} className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Learn More About {industry.shortName}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-brand bg-waves-light px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Get Your Industry-Specific Analysis
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/85">
            Discover the psychological triggers and conversion strategies that work specifically for your industry.
            Get a custom analysis of your market and competitive landscape.
          </p>

          <div className="rounded-3xl bg-cream p-8 shadow-sm">
            <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
              Free Industry Marketing Analysis
            </h3>
            <p className="mb-8 text-lg text-navy/70">
              Get a detailed analysis of your industry&apos;s customer psychology and competitive landscape
            </p>
            <Button
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={() => openDialog()}
            >
              <Target className="mr-2 h-5 w-5" />
              Get My Industry Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="mt-4 text-sm text-navy/60">
              No spam. No sales pressure. Just a detailed analysis of your industry&apos;s marketing opportunities.
            </p>
          </div>

          <p className="mt-8 text-white/75">
            Serving businesses across all major industries with specialized psychology-driven strategies
          </p>
        </div>
      </section>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Find Your Industry-Specific Strategy"
        description="Get a custom marketing analysis designed specifically for your industry's unique customer psychology and buying behaviors."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="Industry Marketing Services"
        serviceDescription="Specialized marketing strategies tailored to specific industries including healthcare, real estate, home services, and more"
        serviceUrl="https://aiogrowthseo.com/industries"
        serviceType="Industry Marketing"
      />
    </div>
  );
}
