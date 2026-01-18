'use client';

import Link from 'next/link';
import {
  MapPin, Search, Star, TrendingUp, Calendar, CheckCircle, ArrowRight,
  Globe, Target, Zap, Users, Award, Building2, FileText, Phone, Clock,
  Home
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

const localCities = [
  "Daytona Beach", "Ormond Beach", "Port Orange", "New Smyrna Beach", "Palm Coast", "DeLand",
  "Holly Hill", "DeBary", "Sanford", "Deltona", "Orange City", "Edgewater", "South Daytona",
  "Flagler Beach", "Bunnell", "Lake Mary", "Longwood", "Altamonte Springs"
];

export default function LocalSEOPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Local SEO Strategy Consultation');

  return (
    <>
      <div className="min-h-screen bg-background">
        <PageBreadcrumb
          items={[
            { label: "Local SEO", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Volusia & Flagler County Experts
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Dominate <span className="gradient-text">Local Search</span> in Central Florida
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                When someone searches &quot;[your service] near me&quot; in Daytona Beach, Ormond Beach, Port Orange, or Palm Coast - are you showing up? Our Local SEO services put your business in front of customers actively looking for what you offer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => openDialog()}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Your Free Local SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Google Business Profile Optimization');
                    openDialog();
                  }}
                >
                  <Star className="w-5 h-5 mr-2" />
                  Optimize My Google Profile
                </Button>
              </div>

              {/* Service Area Tags */}
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                {localCities.slice(0, 8).map((city) => (
                  <Badge key={city} variant="outline" className="text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    {city}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What is Local SEO */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why <span className="gradient-text">Local SEO</span> Matters for Central Florida Businesses
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  46% of all Google searches have local intent. When potential customers search for services in Volusia or Flagler County, Local SEO determines whether they find you or your competitors.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Google Map Pack Visibility</h4>
                      <p className="text-muted-foreground text-sm">Appear in the top 3 local results when customers search &quot;near me&quot;</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Google Business Profile Optimization</h4>
                      <p className="text-muted-foreground text-sm">Complete profile that converts browsers into customers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Review Management Strategy</h4>
                      <p className="text-muted-foreground text-sm">Build trust with consistent 5-star reviews and reputation management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Local Citation Building</h4>
                      <p className="text-muted-foreground text-sm">Consistent NAP across 50+ directories that matter</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Local SEO Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">76%</div>
                    <p className="text-muted-foreground">of people who search locally visit a business within 24 hours</p>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">28%</div>
                    <p className="text-muted-foreground">of local searches result in a purchase</p>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">46%</div>
                    <p className="text-muted-foreground">of all Google searches have local intent</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Local SEO</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive local search optimization designed specifically for Central Florida businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Star className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle>Google Business Profile</CardTitle>
                  <CardDescription>Complete optimization for maximum visibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Profile completion & verification</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Photo & video optimization</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Service area configuration</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Q&A management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle>Citation Building</CardTitle>
                  <CardDescription>Consistent presence across directories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 50+ core directory submissions</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> NAP consistency audit</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Industry-specific directories</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Duplicate cleanup</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle>Review Management</CardTitle>
                  <CardDescription>Build trust and social proof</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Review generation strategy</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Response templates</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Negative review handling</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Reputation monitoring</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle>Local Content Strategy</CardTitle>
                  <CardDescription>Location-specific content that ranks</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Location pages for each area</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Local keyword optimization</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Community content creation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Local schema markup</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle>Local Link Building</CardTitle>
                  <CardDescription>Authority through local connections</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Local business partnerships</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Community sponsorships</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Local news mentions</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Chamber of Commerce listings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle>Tracking & Reporting</CardTitle>
                  <CardDescription>Measure what matters</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Ranking tracking by location</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Call & direction tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Monthly performance reports</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Competitor monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Local SEO <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transparent pricing with no hidden fees. Build your local presence once, then maintain momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-professional border-green-200">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="w-fit mx-auto mb-4">One-Time Setup</Badge>
                  <CardTitle className="text-2xl">Local SEO Foundation</CardTitle>
                  <div className="text-4xl font-bold text-green-600 mt-2">$1,500</div>
                  <CardDescription>One-time investment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Complete local SEO audit & fixes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Google Business Profile optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">25-30 core citations built</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Local schema implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Review management setup</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Geographic authority roadmap</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => selectService("Local SEO Foundation - $1,500")}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="space-y-6">
                <CardHeader className="text-center">
                  <Badge variant="outline" className="w-fit mx-auto mb-4">Monthly Options</Badge>
                  <CardTitle className="text-2xl">Ongoing Maintenance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Growth</span>
                      <span className="text-xl font-bold text-green-600">$500/mo</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Monthly monitoring & optimization</li>
                      <li>• GMB posts & updates</li>
                      <li>• Citation maintenance</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg border-green-200 bg-green-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Domination</span>
                      <span className="text-xl font-bold text-green-600">$750/mo</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Everything in Growth</li>
                      <li>• Weekly content updates</li>
                      <li>• Review campaign management</li>
                      <li>• Competitor monitoring</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Enterprise (10+ locations)</span>
                      <span className="text-xl font-bold text-green-600">$2,500/mo</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multi-location management</li>
                      <li>• Programmatic local SEO</li>
                      <li>• Local link building</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How long does it take to see results from Local SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most businesses see initial improvements in 30-60 days. Google Business Profile optimizations can show results within 2 weeks. Full local pack rankings typically improve within 3-6 months depending on competition in your area.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do I need both Local SEO and regular SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If you&apos;re a local business serving Volusia or Flagler County, Local SEO should be your priority. It&apos;s often the fastest path to new customers. Traditional SEO can complement local efforts but isn&apos;t always necessary for service-area businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Can you help with multiple locations?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Our Enterprise plan is designed for businesses with 10+ locations. We use programmatic local SEO strategies to efficiently manage multiple Google Business Profiles, local pages, and citations across all your service areas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What if I get a negative review?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our review management strategy includes response templates for negative reviews and a process to turn unhappy customers into advocates. We also help you proactively generate positive reviews to maintain a strong reputation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate Local Search?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get your free Local SEO audit and see exactly what&apos;s preventing you from ranking in the local map pack.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg"
              onClick={() => openDialog()}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Your Free Local SEO Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free Local SEO Audit"
        description="Let's analyze your local search presence and create a strategy to dominate your market."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
