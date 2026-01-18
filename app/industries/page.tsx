'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Target, Award, BarChart3, Brain, Phone, Search, ArrowRight, CheckCircle
} from 'lucide-react';
import { industries, getColorClasses } from '@/data/industries';

export default function IndustriesPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Industry Analysis Consultation');

  return (
    <>
      <PageBreadcrumb
        items={[
          { label: "Industries", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Target className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-blue-700">12 Industry Verticals</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Industry-Specific <span className="gradient-text">Marketing Psychology</span> That Converts
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Deep expertise across 12 verticals with proven results in each sector. Every industry has unique customer psychology,
              buying behaviors, and conversion triggers. Generic marketing fails—specialized strategies dominate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Search className="w-5 h-5 mr-2" />
                Find Your Industry
                <ArrowRight className="w-5 h-5 ml-2" />
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
                <Phone className="w-5 h-5 mr-2" />
                Industry Consultation
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
              <div className="p-4">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">12 Industries Mastered</p>
              </div>
              <div className="p-4">
                <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">300%+ Average Growth</p>
              </div>
              <div className="p-4">
                <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Psychology-Driven Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Industry Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each industry requires specialized knowledge of customer psychology, buying behaviors, and market dynamics.
              We don&apos;t do generic marketing—we master industry-specific strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Card key={industry.id} className="card-professional group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(industry.color)}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{industry.name}</CardTitle>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">{industry.metrics.traffic} Traffic</Badge>
                          <Badge variant="outline" className="text-xs">{industry.metrics.roi} ROI</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{industry.description}</p>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Psychology Triggers</h4>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {industry.psychologyTriggers.map((trigger, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">{trigger}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Challenges We Solve</h4>
                      <ul className="text-xs space-y-1">
                        {industry.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-3 rounded-lg">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{industry.metrics.traffic}</div>
                          <div className="text-xs text-muted-foreground">Traffic Growth</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{industry.metrics.leads}</div>
                          <div className="text-xs text-muted-foreground">Lead Increase</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{industry.metrics.roi}</div>
                          <div className="text-xs text-muted-foreground">ROI Growth</div>
                        </div>
                      </div>
                    </div>

                    <Link href={`/industries/${industry.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Learn More About {industry.shortName}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Industry-Specific Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the psychological triggers and conversion strategies that work specifically for your industry.
              Get a custom analysis of your market and competitive landscape.
            </p>
          </div>

          <Card className="card-professional shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Free Industry Marketing Analysis
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Get a detailed analysis of your industry&apos;s customer psychology and competitive landscape
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Target className="w-5 h-5 mr-2" />
                Get My Industry Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                No spam. No sales pressure. Just expert analysis of your industry&apos;s marketing opportunities.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Serving businesses across all major industries with specialized psychology-driven strategies
            </p>
          </div>
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
    </>
  );
}
