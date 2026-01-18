'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ArrowUp,
  CheckCircle,
  BarChart3,
  Trophy,
  Calendar,
  ArrowRight
} from "lucide-react";
import { businessTypes } from '@/types/contact-forms';

const keyMetrics = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "200%+",
    label: "Average Traffic Growth",
    description: "Across client campaigns"
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "150+",
    label: "Businesses Served",
    description: "Across agency experience"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    value: "$500K+",
    label: "Revenue Impact",
    description: "Client sales growth"
  },
  {
    icon: <Target className="w-8 h-8" />,
    value: "50+",
    label: "Top Rankings",
    description: "Page 1 positions achieved"
  }
];

const caseStudies = [
  {
    client: "Health & Wellness Brand",
    industry: "Clinical Fitness & Pilates",
    challenge: "Low organic visibility, limited local presence in competitive wellness market",
    services: ["Technical SEO", "Content Strategy", "Local SEO"],
    timeline: "6 months",
    results: [
      "150% increase in website sessions",
      "121% organic traffic growth",
      "50%+ keywords ranking Top 3-10",
      "Dominant local map pack presence"
    ],
    keyWin: "Combined technical foundation with local authority building for sustainable growth"
  },
  {
    client: "Professional Services Firm",
    industry: "Legal/Professional Services",
    challenge: "Competing across multiple Florida markets with inconsistent visibility",
    services: ["Programmatic SEO", "Local SEO", "Technical Optimization"],
    timeline: "8 months",
    results: [
      "35+ position improvements across key terms",
      "90% impression growth in target markets",
      "Consistent Top 3 rankings for priority keywords",
      "Expanded reach to new geographic areas"
    ],
    keyWin: "Programmatic approach enabled scalable local content across statewide markets"
  },
  {
    client: "Cybersecurity SaaS",
    industry: "B2B Software/Technology",
    challenge: "Low market share and limited visibility against established competitors",
    services: ["Technical SEO", "Content Strategy", "Link Building"],
    timeline: "12 months",
    results: [
      "Share of Voice grew from 15% to 50%",
      "90+ keywords ranking in Top 3",
      "20+ quality backlinks acquired",
      "Established thought leadership positioning"
    ],
    keyWin: "Strategic content and link building transformed market position in competitive SaaS space"
  },
  {
    client: "E-commerce Retailer",
    industry: "Retail/E-commerce",
    challenge: "Limited organic traffic and poor conversion rates despite quality products",
    services: ["E-commerce SEO", "Technical Optimization", "Conversion Strategy"],
    timeline: "6 months",
    results: [
      "Traffic grew from 5K to 15K monthly visitors",
      "200% increase in sales within 90 days",
      "Improved product page rankings across categories",
      "Optimized site architecture for crawlability"
    ],
    keyWin: "Technical foundation combined with conversion optimization delivered rapid revenue growth"
  }
];

export default function ResultsPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Results Analysis Consultation');

  return (
    <>
      <div className="min-h-screen bg-background">
        <PageBreadcrumb
          items={[
            { label: "Results", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Real Results, Real Clients, <span className="gradient-text">Real Growth</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                See exactly how our SEO, Local SEO, GEO optimization, and marketing services deliver measurable business impact across industries.
              </p>

              <p className="text-lg text-foreground/80 mb-12">
                Don&apos;t take our word for it. Here&apos;s what happens when you combine technical expertise with strategic execution and transparent pricing.
              </p>

              {/* Key Metrics Banner */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {keyMetrics.map((metric, index) => (
                  <Card key={index} className="bg-card/50 border-primary/20">
                    <CardContent className="p-6 text-center">
                      <div className="text-primary mb-3 flex justify-center">
                        {metric.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm font-medium text-foreground mb-1">
                        {metric.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                By the Numbers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <BarChart3 className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Performance Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Businesses Served</span>
                      <span className="font-semibold text-foreground">150+ across agencies</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Average Traffic Growth</span>
                      <span className="font-semibold text-foreground">121-200% increase</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Top 3 Rankings Achieved</span>
                      <span className="font-semibold text-foreground">90+ keywords</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Share of Voice Growth</span>
                      <span className="font-semibold text-foreground">Up to 35% improvement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <Trophy className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Client Outcomes</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Revenue Impact</span>
                      <span className="font-semibold text-foreground">$500K+ documented growth</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Typical Sales Lift</span>
                      <span className="font-semibold text-foreground">200% within 90 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Industries Served</span>
                      <span className="font-semibold text-foreground">15+ verticals</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Services Portfolio</span>
                      <span className="font-semibold text-foreground">6 core offerings</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Real Client Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Case studies showcasing measurable growth across our 6-service portfolio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-primary/5 p-6">
                      <Badge className="mb-3">{study.industry}</Badge>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {study.client}
                      </h3>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    {/* Results */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-foreground flex items-center">
                          <ArrowUp className="w-5 h-5 text-primary mr-2" />
                          Results
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {study.timeline}
                        </Badge>
                      </div>
                      <div className="space-y-2 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{result}</span>
                          </div>
                        ))}
                      </div>

                      {/* Services Used */}
                      <div className="border-t pt-4">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Services Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Win */}
                      <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                        <p className="text-xs font-medium text-primary mb-1">Key Insight:</p>
                        <p className="text-xs text-muted-foreground">{study.keyWin}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See exactly where your marketing is being limited and get a roadmap to systematic growth
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Get Your Results Documentation
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Every project includes our Results Documentation Promise - you&apos;ll see exactly what we accomplished and how it impacts your business.
                </p>

                <Button
                  variant="hero"
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  No spam. No sales pressure. Just proven strategies that deliver measurable results.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Join 150+ businesses across 15+ industries that chose proven results over promises
              </p>
            </div>
          </div>
        </section>
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="See Your Business Results"
        description="Get your free marketing analysis and see how our proven strategies can deliver measurable results for your business."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
