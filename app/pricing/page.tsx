'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calculator, Zap, Shield, Target, TrendingUp, ArrowRight, Search, MapPin, Sparkles, ShoppingCart, Users, Cog, DollarSign } from "lucide-react";
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';

const services = [
  {
    id: 'seo',
    icon: Search,
    name: "SEO Services",
    description: "Technical foundation + topical authority mapping for sustainable organic growth",
    href: "/seo-services",
    color: "from-blue-500 to-blue-600",
    setup: {
      price: "$1,000",
      label: "one-time",
      features: [
        "Complete technical SEO audit & fixes",
        "Topical authority mapping",
        "Keyword research & strategy",
        "On-page optimization",
        "Schema markup implementation",
        "90-day roadmap"
      ]
    },
    monthly: [
      { name: "Maintenance", price: "$500/mo", features: ["10 hours optimization", "Technical monitoring", "Content updates"] },
      { name: "Advanced", price: "$1,000/mo", features: ["20 hours optimization", "Link building campaigns", "AI content management"] }
    ]
  },
  {
    id: 'local-seo',
    icon: MapPin,
    name: "Local SEO",
    description: "Complete local foundation for Google Business Profile and map pack dominance",
    href: "/local-seo",
    color: "from-green-500 to-green-600",
    setup: {
      price: "$1,500",
      label: "one-time",
      features: [
        "Complete local SEO audit & fixes",
        "Google Business Profile optimization",
        "25-30 core citations built",
        "Local schema implementation",
        "Review management system setup",
        "Geographic authority roadmap"
      ]
    },
    monthly: [
      { name: "Growth", price: "$500/mo", features: ["Monthly monitoring", "GMB posts", "Citation maintenance"] },
      { name: "Domination", price: "$750/mo", features: ["Weekly content", "Review campaigns", "Competitor monitoring"] },
      { name: "Enterprise", price: "$2,500/mo", features: ["10+ locations", "Programmatic SEO", "Link building"] }
    ]
  },
  {
    id: 'geo',
    icon: Sparkles,
    name: "GEO Optimization",
    description: "AI search foundation + entity mapping for ChatGPT and AI assistant visibility",
    href: "/geo-optimization",
    color: "from-purple-500 to-purple-600",
    setup: {
      price: "$1,750",
      label: "one-time",
      features: [
        "Topical/entity mapping & strategy",
        "AI prompt research & competitor analysis",
        "GEO/AI mentions app setup",
        "Initial link building campaign",
        "Reddit marketing foundation",
        "AI mention tracking"
      ]
    },
    monthly: [
      { name: "Growth", price: "$750/mo", features: ["AI monitoring", "Entity building", "$500 link budget"] },
      { name: "Authority", price: "$1,500/mo", features: ["Reddit campaigns", "Advanced links", "Weekly optimization"] },
      { name: "Enterprise", price: "$2,500/mo", features: ["20 content pieces", "10 backlinks", "Full ecosystem"] }
    ]
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    name: "E-commerce SEO",
    description: "Product optimization, technical SEO, and conversion strategies for online stores",
    href: "/ecommerce-seo",
    color: "from-fuchsia-500 to-pink-600",
    setup: null,
    monthly: [
      { name: "Starter", price: "$1,500/mo", features: ["100 products", "Technical SEO", "2 articles/month"] },
      { name: "Growth", price: "$3,000/mo", features: ["500 products", "CRO", "8 articles/month"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited products", "Multi-marketplace", "Dedicated specialist"] }
    ]
  },
  {
    id: 'lead-gen',
    icon: Users,
    name: "Local Lead Generation",
    description: "Complete funnel setup with Google LSA, landing pages, and email automation",
    href: "/local-lead-generation",
    color: "from-orange-500 to-amber-600",
    setup: {
      price: "$1,000",
      label: "one-time",
      features: [
        "Google Local Service Ads setup",
        "Custom landing page creation",
        "Email automation sequences",
        "Call tracking & CRM integration",
        "Lead scoring system",
        "30 days optimization included"
      ]
    },
    monthly: [
      { name: "Management", price: "$500/mo", features: ["Campaign management", "Lead monitoring", "Performance reports"], note: "Recommend $1,000 ad spend - 3-4X ROAS" }
    ]
  },
  {
    id: 'automation',
    icon: Cog,
    name: "Custom Tools & Automation",
    description: "Custom marketing tools, dashboards, and workflow automation for your business",
    href: "/custom-tools-automation",
    color: "from-slate-600 to-slate-700",
    setup: {
      price: "$2,500",
      label: "starting at",
      features: [
        "Custom SEO automation tools",
        "Reporting dashboards",
        "Lead generation systems",
        "Workflow automation",
        "API integrations",
        "Training & documentation"
      ]
    },
    monthly: [
      { name: "Maintenance", price: "$750/mo", features: ["System monitoring", "Updates & fixes", "Support"] },
      { name: "Advanced", price: "$1,500/mo", features: ["New feature development", "Priority support", "Custom requests"] }
    ]
  }
];

const popularCombinations = [
  {
    name: "Local Business Starter",
    total: "$1,500 setup + $500/mo",
    services: ["Local SEO Setup ($1,500)", "Local Growth ($500/mo)"],
    description: "Perfect for local service businesses ready to dominate their market",
    savings: "Complete local foundation"
  },
  {
    name: "Growth Marketing System",
    total: "$2,750 setup + $1,250/mo",
    services: ["SEO Foundation ($1,000)", "GEO Foundation ($1,750)", "SEO Maintenance ($500/mo)", "GEO Growth ($750/mo)"],
    description: "Dominate both traditional and AI search results",
    savings: "Most comprehensive coverage",
    popular: true
  },
  {
    name: "E-commerce Accelerator",
    total: "$2,500 setup + $1,500/mo",
    services: ["Custom Tools Setup ($2,500)", "E-commerce Starter ($1,500/mo)"],
    description: "Scale your online store with custom automation tools",
    savings: "Automation-powered growth"
  }
];

export default function PricingPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Get Started');

  return (
    <>
      <PageBreadcrumb
        items={[
          { label: "Pricing", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Transparent Pricing
          </Badge>

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
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">$3,000-5,000/month retainers for ongoing &quot;optimization&quot;</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">6-12 month minimum contracts lock you in</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">20% of ad spend just to manage campaigns</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">You lose everything when you leave</p>
                </div>
                <div className="pt-4 border-t border-destructive/20">
                  <p className="font-semibold text-destructive">Year 1 Cost: $36,000 - $60,000+</p>
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
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">One-time foundation setup</p>
                    <p className="text-sm text-muted-foreground">Build it right once, own it forever</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Affordable monthly maintenance</p>
                    <p className="text-sm text-muted-foreground">Keep momentum without breaking the bank</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Month-to-month flexibility</p>
                    <p className="text-sm text-muted-foreground">Cancel anytime, keep everything</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">You own all assets</p>
                    <p className="text-sm text-muted-foreground">Accounts, content, systems - it&apos;s all yours</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-primary/20">
                  <p className="font-semibold text-primary">Year 1 Cost: $7,000 - $15,000</p>
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              All Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing for Every Service</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the services that fit your business. Mix and match setup + monthly options.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.name}</CardTitle>
                          <CardDescription className="text-base mt-1">{service.description}</CardDescription>
                        </div>
                      </div>
                      <Link href={service.href}>
                        <Button variant="outline" size="sm">
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Setup Package */}
                      {service.setup && (
                        <div className="bg-slate-50 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="secondary" className="text-sm">Setup Package</Badge>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-primary">{service.setup.price}</span>
                              <span className="text-muted-foreground ml-1">{service.setup.label}</span>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {service.setup.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            className="w-full mt-4"
                            onClick={() => selectService(`${service.name} Setup - ${service.setup.price}`)}
                          >
                            Get {service.name} Setup
                          </Button>
                        </div>
                      )}

                      {/* Monthly Options */}
                      <div className={service.setup ? "" : "lg:col-span-2"}>
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="text-sm">Monthly Options</Badge>
                        </div>
                        <div className={`grid ${service.monthly.length > 2 ? 'grid-cols-1 sm:grid-cols-3' : service.monthly.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
                          {service.monthly.map((option, idx) => (
                            <div key={idx} className="bg-white border rounded-lg p-4 hover:border-primary/50 transition-colors">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold">{option.name}</span>
                                <span className="text-lg font-bold text-primary">{option.price}</span>
                              </div>
                              <ul className="space-y-1 mb-3">
                                {option.features.map((feature, fidx) => (
                                  <li key={fidx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                    <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              {option.note && (
                                <p className="text-xs text-secondary font-medium mb-2">{option.note}</p>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                onClick={() => selectService(`${service.name} ${option.name} - ${option.price}`)}
                              >
                                Select
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Combinations */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Recommended
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Package Combinations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic bundles designed for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularCombinations.map((combo, index) => (
              <Card
                key={index}
                className={`relative ${combo.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {combo.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className={combo.popular ? 'pt-8' : ''}>
                  <CardTitle className="text-xl">{combo.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{combo.total}</div>
                  <CardDescription>{combo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {combo.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-secondary mb-4">{combo.savings}</p>
                  <Button
                    className="w-full"
                    variant={combo.popular ? 'default' : 'outline'}
                    onClick={() => selectService(combo.name)}
                  >
                    Get This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
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
                  <div className="flex justify-between">
                    <span>SEO Retainer (12 months):</span>
                    <span className="font-medium">$36,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PPC Management (20% of $2K/mo):</span>
                    <span className="font-medium">$4,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Local SEO Add-on:</span>
                    <span className="font-medium">$6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Setup/Onboarding Fees:</span>
                    <span className="font-medium">$2,500</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Year 1:</span>
                    <span className="text-destructive">$49,300</span>
                  </div>
                  <p className="text-sm text-muted-foreground">*And you lose it all when you leave</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Model (Year 1)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>SEO Foundation Setup:</span>
                    <span className="font-medium">$1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Local SEO Setup:</span>
                    <span className="font-medium">$1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lead Gen Funnel Setup:</span>
                    <span className="font-medium">$1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Maintenance (12 mo):</span>
                    <span className="font-medium">$6,000</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Year 1:</span>
                    <span className="text-primary">$9,500</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">You Save: $39,800 in Year 1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plus: You own everything. Forever.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clear Next Steps */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Three ways to move forward
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Free Consultation</CardTitle>
                <CardDescription>Not sure where to start? Let&apos;s talk about your goals and create a custom plan.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => selectService("Free Consultation")}>
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
                <CardDescription>Tell us about your business and get a tailored pricing recommendation.</CardDescription>
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
              Every service includes strategic consultation to ensure you&apos;re investing in the right solutions.
              If you don&apos;t see measurable improvement within 90 days, we&apos;ll work for free until you do.
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
