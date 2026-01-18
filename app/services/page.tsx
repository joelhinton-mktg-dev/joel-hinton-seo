'use client';

import Link from 'next/link';
import { Search, MapPin, Sparkles, Users, Cog, Brain, CheckCircle, ArrowRight, Zap, Star, BarChart3, DollarSign, MessageSquare, Shield, Clock, Award, HelpCircle, Target, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

export default function ServicesPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Marketing Services Consultation');

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Brain className="w-4 h-4 mr-2" />
                Psychology-Driven Approach
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary">Digital Marketing</span> Services That <span className="gradient-text">Deliver Results</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Full-service digital marketing for local businesses in Volusia & Flagler Counties.
                SEO, lead generation, and custom tools that grow your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" asChild>
                  <Link href="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
                  <Link href="/pricing">
                    <DollarSign className="w-5 h-5 mr-2" />
                    View Pricing
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto text-center">
                <div className="p-4">
                  <Search className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">SEO Services</p>
                </div>
                <div className="p-4">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Local SEO</p>
                </div>
                <div className="p-4">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">GEO Optimization</p>
                </div>
                <div className="p-4">
                  <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">E-commerce SEO</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Lead Generation</p>
                </div>
                <div className="p-4">
                  <Cog className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Custom Tools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Core <span className="gradient-text">Marketing Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each service is built on deep understanding of consumer psychology, backed by data, and optimized for measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* SEO Services */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Search className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">SEO Services</CardTitle>
                      <CardDescription>Technical & content optimization</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Comprehensive SEO combining technical excellence with content strategy for sustainable organic growth.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Technical SEO audits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Keyword research & strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Content optimization</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-lg font-bold text-blue-600">$500 - $1,000/mo</p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/seo-services">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Local SEO */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Local SEO</CardTitle>
                      <CardDescription>Dominate local search</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Get found by customers in your area. Google Business Profile optimization and local search dominance.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Google Business Profile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Local citations & directories</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Review management</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-lg font-bold text-green-600">$400 - $800/mo</p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/local-seo">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* GEO Optimization */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-purple-500/20 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">GEO Optimization</CardTitle>
                      <CardDescription>AI search ready</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Prepare for the future. Optimize for AI assistants and generative search engines.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">AI search optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Structured data & entities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Answer Engine Optimization</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-lg font-bold text-purple-600">$600 - $1,200/mo</p>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/geo-optimization">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Local Lead Generation */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-orange-500/20 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Local Lead Generation</CardTitle>
                      <CardDescription>Ads that deliver leads</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Google Local Service Ads, Search Ads, and Facebook campaigns for home services and professionals.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Google Local Service Ads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Search & Facebook campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Call tracking & reporting</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-lg font-bold text-orange-600">$500/mo + ad spend</p>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                    <Link href="/local-lead-generation">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* E-commerce SEO */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-fuchsia-500/20 text-fuchsia-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">E-commerce SEO</CardTitle>
                      <CardDescription>Grow your online store</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Drive more organic traffic and sales with e-commerce SEO for Shopify, WooCommerce, and marketplaces.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-fuchsia-600" />
                      <span className="text-sm">Product page optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-fuchsia-600" />
                      <span className="text-sm">Technical e-commerce SEO</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-fuchsia-600" />
                      <span className="text-sm">Marketplace optimization</span>
                    </div>
                  </div>
                  <div className="bg-fuchsia-50 p-3 rounded-lg">
                    <p className="text-lg font-bold text-fuchsia-600">$1,500 - $3,000+/mo</p>
                  </div>
                  <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700" asChild>
                    <Link href="/ecommerce-seo">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Custom Tools & Automation */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-teal-500/20 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cog className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Custom Tools & Automation</CardTitle>
                      <CardDescription>Built for your business</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Custom SEO tools, dashboards, lead systems, and workflow automation designed for your needs.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">SEO automation tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">Custom reporting dashboards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">Lead generation systems</span>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <p className="text-lg font-bold text-teal-600">$5K - $25K+ project</p>
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="/custom-tools-automation">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Our Approach */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our <span className="gradient-text">Psychology-Driven</span> Approach?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most marketing focuses on tactics and tools. We focus on the human psychology behind every click, search, and purchase decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consumer Psychology First</h3>
                    <p className="text-muted-foreground">
                      We study how your customers think, what motivates them, and what psychological triggers drive their decisions.
                      Every strategy is built on behavioral insights, not guesswork.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Optimization</h3>
                    <p className="text-muted-foreground">
                      Psychology provides the foundation, data provides the proof. We continuously test, measure, and optimize
                      based on real performance metrics and user behavior.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results-Focused Strategy</h3>
                    <p className="text-muted-foreground">
                      We don&apos;t just drive traffic or increase impressions. We focus on the metrics that matter:
                      qualified leads, conversions, and revenue growth that impacts your bottom line.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Deep Audience Understanding</h3>
                    <p className="text-muted-foreground">
                      We don&apos;t just know your audience demographics. We understand their fears, desires, objections,
                      and decision-making processes to create messaging that truly resonates.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">The Psychology-Driven Difference</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                        <h4 className="font-semibold text-destructive mb-2">Traditional Marketing</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Focuses on tactics and tools</li>
                          <li>• Generic messaging for everyone</li>
                          <li>• Vanity metrics (clicks, impressions)</li>
                          <li>• One-size-fits-all approach</li>
                        </ul>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2">Psychology-Driven Marketing</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Focuses on human behavior and motivation</li>
                          <li>• Personalized messaging for each audience</li>
                          <li>• Revenue and ROI metrics</li>
                          <li>• Customized for your specific market</li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600 mb-1">3.2x Average</p>
                      <p className="text-sm text-green-700">Improvement in conversion rates vs traditional approaches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Which Service is Right for You */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Which Service is <span className="gradient-text">Right for You?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Not sure where to start? Use this guide to find the best service for your current business goals and challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-center">Start Here: What&apos;s Your Primary Goal?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <Link href="/seo-services">
                      <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Search className="w-6 h-6 text-blue-600" />
                          <div>
                            <h4 className="font-semibold">Increase Organic Traffic & Rankings</h4>
                            <p className="text-sm text-muted-foreground">Need more qualified visitors from search engines</p>
                          </div>
                        </div>
                        <div className="mt-3 pl-9">
                          <Badge variant="outline" className="text-blue-600">→ SEO Services</Badge>
                        </div>
                      </div>
                    </Link>

                    <Link href="/local-seo">
                      <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-6 h-6 text-green-600" />
                          <div>
                            <h4 className="font-semibold">Get Found by Local Customers</h4>
                            <p className="text-sm text-muted-foreground">Need to dominate local search in your area</p>
                          </div>
                        </div>
                        <div className="mt-3 pl-9">
                          <Badge variant="outline" className="text-green-600">→ Local SEO</Badge>
                        </div>
                      </div>
                    </Link>

                    <Link href="/local-lead-generation">
                      <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Users className="w-6 h-6 text-orange-600" />
                          <div>
                            <h4 className="font-semibold">Generate Leads Fast</h4>
                            <p className="text-sm text-muted-foreground">Need immediate leads from Google & Facebook ads</p>
                          </div>
                        </div>
                        <div className="mt-3 pl-9">
                          <Badge variant="outline" className="text-orange-600">→ Local Lead Generation</Badge>
                        </div>
                      </div>
                    </Link>

                    <Link href="/custom-tools-automation">
                      <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Cog className="w-6 h-6 text-teal-600" />
                          <div>
                            <h4 className="font-semibold">Automate Marketing Tasks</h4>
                            <p className="text-sm text-muted-foreground">Want custom tools that fit your business perfectly</p>
                          </div>
                        </div>
                        <div className="mt-3 pl-9">
                          <Badge variant="outline" className="text-teal-600">→ Custom Tools & Automation</Badge>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-center">Timeline & Investment Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Quick Results (1-4 weeks)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Local Lead Generation:</span>
                        <span className="text-orange-600">$500/mo + ad spend</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Local SEO:</span>
                        <span className="text-green-600">$400-800/mo</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">Medium-term Results (3-6 months)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>SEO Services:</span>
                        <span className="text-blue-600">$500-1,000/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GEO Optimization:</span>
                        <span className="text-purple-600">$600-1,200/mo</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">Long-term Assets (one-time)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Custom Tools (Simple):</span>
                        <span className="text-teal-600">$5K-15K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Full Automation Systems:</span>
                        <span className="text-teal-600">$15K-25K+</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-center">
                      <strong>Not sure?</strong> Schedule a free consultation to discuss your specific situation and goals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop wasting money on tactics that don&apos;t work. Get marketing strategies based on proven psychology
                that turn prospects into loyal customers.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-200 mb-8">
                <CheckCircle className="w-5 h-5" />
                <span>Join 200+ businesses that chose psychology-driven marketing over generic tactics</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" asChild>
                <Link href="/contact">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent" asChild>
                <Link href="/pricing">
                  <DollarSign className="w-5 h-5 mr-2" />
                  View All Pricing
                </Link>
              </Button>
            </div>

            <p className="text-blue-200 mt-6 text-center">
              Free consultations • No sales pressure • Results-focused approach
            </p>
          </div>
        </section>
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Marketing Services Consultation"
        description="Discover the psychology-driven marketing services that will transform your business growth and customer acquisition."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
