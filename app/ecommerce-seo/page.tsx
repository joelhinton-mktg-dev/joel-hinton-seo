'use client';

import Link from 'next/link';
import {
  ShoppingCart, Search, TrendingUp, Package, Store, BarChart3, ArrowRight,
  CheckCircle, Star, Zap, Globe, Target, DollarSign, Users, ShoppingBag,
  Smartphone, CreditCard, Truck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

const services = [
  {
    icon: Package,
    title: 'Product Page Optimization',
    description: 'Transform your product pages into conversion machines with optimized titles, descriptions, images, and schema markup that ranks and sells.',
    features: ['Product schema markup', 'Keyword-rich descriptions', 'Image optimization', 'Review integration']
  },
  {
    icon: Search,
    title: 'Technical E-commerce SEO',
    description: 'Solve complex technical challenges unique to online stores—crawl budget, faceted navigation, duplicate content, and site speed.',
    features: ['Crawl optimization', 'URL structure', 'Canonical tags', 'Core Web Vitals']
  },
  {
    icon: TrendingUp,
    title: 'Conversion Rate Optimization',
    description: 'Turn traffic into customers with data-driven CRO that improves your checkout flow, product presentation, and user experience.',
    features: ['A/B testing', 'Cart abandonment', 'UX improvements', 'Trust signals']
  },
  {
    icon: Store,
    title: 'Platform-Specific SEO',
    description: 'Expert optimization for Shopify, WooCommerce, BigCommerce, and Magento with platform-native solutions.',
    features: ['Shopify SEO', 'WooCommerce optimization', 'Theme optimization', 'App integration']
  },
  {
    icon: Globe,
    title: 'Marketplace Optimization',
    description: 'Expand your reach on Amazon, Etsy, and eBay with marketplace SEO that improves product visibility and drives sales.',
    features: ['Amazon A9 algorithm', 'Etsy search ranking', 'Listing optimization', 'Review strategy']
  },
  {
    icon: BarChart3,
    title: 'E-commerce Content Strategy',
    description: 'Build authority and drive organic traffic with buying guides, product comparisons, and category content that converts.',
    features: ['Buying guides', 'Category pages', 'Blog strategy', 'Link building']
  }
];

const results = [
  { metric: '340%', label: 'Average organic traffic increase', icon: TrendingUp },
  { metric: '127%', label: 'Revenue growth from organic', icon: DollarSign },
  { metric: '89%', label: 'Improvement in product rankings', icon: Search },
  { metric: '45%', label: 'Increase in conversion rate', icon: ShoppingCart }
];

const platforms = [
  { name: 'Shopify', description: 'Theme optimization, app integration, speed improvements' },
  { name: 'WooCommerce', description: 'WordPress SEO, plugin optimization, server performance' },
  { name: 'BigCommerce', description: 'Built-in SEO features, custom development' },
  { name: 'Magento', description: 'Enterprise solutions, complex catalog optimization' },
  { name: 'Amazon', description: 'A9 algorithm, listing optimization, brand registry' },
  { name: 'Custom Platforms', description: 'Headless commerce, custom solutions' }
];

export default function EcommerceSEOPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('E-commerce SEO Audit');

  return (
    <>
      <div className="min-h-screen bg-background">
        <PageBreadcrumb
          items={[
            { label: "E-commerce SEO", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                E-commerce Growth Specialist
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">E-commerce SEO</span> That Drives Sales
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Stop losing sales to competitors who rank higher. Our e-commerce SEO strategies help Shopify, WooCommerce,
                and marketplace sellers dominate organic search and convert browsers into buyers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
                  onClick={() => openDialog()}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Get Your Free E-commerce Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Product Page Optimization');
                    openDialog();
                  }}
                >
                  <Package className="w-5 h-5 mr-2" />
                  Optimize My Products
                </Button>
              </div>

              {/* Results Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {results.map((result, index) => {
                  const IconComponent = result.icon;
                  return (
                    <Card key={index} className="bg-white/80 border-fuchsia-200">
                      <CardContent className="p-6 text-center">
                        <IconComponent className="w-8 h-8 text-fuchsia-600 mx-auto mb-2" />
                        <div className="text-3xl font-bold text-fuchsia-600">{result.metric}</div>
                        <p className="text-sm text-muted-foreground">{result.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                E-commerce SEO <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive optimization designed specifically for online stores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="card-professional">
                    <CardHeader>
                      <div className="w-14 h-14 bg-fuchsia-100 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-fuchsia-600" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-fuchsia-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-24 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Platforms We <span className="gradient-text">Optimize</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert SEO for every major e-commerce platform and marketplace
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                E-commerce SEO <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Scalable packages for stores of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="w-fit mx-auto mb-4">Starter</Badge>
                  <CardTitle className="text-2xl">Small Store</CardTitle>
                  <div className="text-4xl font-bold text-fuchsia-600 mt-2">$1,500<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                  <CardDescription>Up to 100 products</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Technical SEO audit & fixes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Product page optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">2 blog articles/month</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Monthly reporting</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-fuchsia-600 hover:bg-fuchsia-700"
                    onClick={() => selectService("E-commerce Starter - $1,500/mo")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-fuchsia-300 bg-fuchsia-50">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-fuchsia-600">Most Popular</Badge>
                  <CardTitle className="text-2xl">Growth Store</CardTitle>
                  <div className="text-4xl font-bold text-fuchsia-600 mt-2">$3,000<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                  <CardDescription>Up to 500 products</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm font-medium">Everything in Starter</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Conversion rate optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">8 articles/month</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Link building campaign</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">A/B testing support</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-fuchsia-600 hover:bg-fuchsia-700"
                    onClick={() => selectService("E-commerce Growth - $3,000/mo")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="w-fit mx-auto mb-4">Enterprise</Badge>
                  <CardTitle className="text-2xl">Large Store</CardTitle>
                  <div className="text-4xl font-bold text-fuchsia-600 mt-2">Custom</div>
                  <CardDescription>500+ products</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Unlimited products</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Multi-marketplace optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Dedicated SEO specialist</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Custom reporting dashboard</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-fuchsia-600" />
                      <span className="text-sm">Priority support</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-fuchsia-600 hover:bg-fuchsia-700"
                    onClick={() => selectService("E-commerce Enterprise")}
                  >
                    Contact Us
                  </Button>
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
                  How is e-commerce SEO different from regular SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  E-commerce SEO involves unique challenges like product page optimization, category structure, faceted navigation, duplicate content from variants, and product schema. We specialize in solving these platform-specific issues that general SEO agencies often miss.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Which platforms do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We work with all major e-commerce platforms including Shopify, WooCommerce, BigCommerce, Magento, and custom solutions. We also optimize for marketplaces like Amazon, Etsy, and eBay.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How long until I see sales increase?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Technical fixes and product page optimizations can show results within 30-60 days. Category rankings and significant traffic increases typically take 3-6 months. Most clients see meaningful revenue growth within the first 90 days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you help with Amazon SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Amazon SEO (A9 algorithm optimization) is part of our marketplace optimization service. We help with listing optimization, keyword research, backend keywords, and review strategies specific to Amazon&apos;s ranking factors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-fuchsia-600 to-pink-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Online Store?
            </h2>
            <p className="text-xl text-fuchsia-100 mb-8 max-w-2xl mx-auto">
              Get your free e-commerce SEO audit and discover exactly what&apos;s preventing your products from ranking.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg"
              onClick={() => openDialog()}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Get Your Free E-commerce Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free E-commerce SEO Audit"
        description="Let's analyze your online store and create a strategy to increase organic traffic and sales."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
