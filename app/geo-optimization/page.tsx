'use client';

import Link from 'next/link';
import {
  Brain, Search, Star, TrendingUp, CheckCircle, ArrowRight, Zap, Users,
  Award, Target, Globe, Bot, Cpu, Database, FileText, Code, Eye,
  Phone, Calendar, AlertTriangle, Lightbulb, Sparkles
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

export default function GEOOptimizationPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('GEO Optimization Consultation');

  return (
    <>
      <div className="min-h-screen bg-background">
        <PageBreadcrumb
          items={[
            { label: "GEO Optimization", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                The Future of Search
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">GEO</span>: Generative Engine Optimization
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                When 40% of GenZ uses TikTok and AI assistants instead of Google, traditional SEO isn&apos;t enough.
                GEO ensures your business is cited and recommended by ChatGPT, Claude, Perplexity, and other AI search tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                  onClick={() => openDialog()}
                >
                  <Bot className="w-5 h-5 mr-2" />
                  Get Your GEO Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('AI Search Visibility Audit');
                    openDialog();
                  }}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Check My AI Visibility
                </Button>
              </div>

              {/* AI Platform Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="p-4 rounded-lg bg-white/50 border">
                  <Bot className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">ChatGPT</p>
                </div>
                <div className="p-4 rounded-lg bg-white/50 border">
                  <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Claude</p>
                </div>
                <div className="p-4 rounded-lg bg-white/50 border">
                  <Search className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Perplexity</p>
                </div>
                <div className="p-4 rounded-lg bg-white/50 border">
                  <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Google AI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why GEO Matters */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  The Shift is Happening
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why <span className="gradient-text">GEO</span> is Critical for Your Business
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AI assistants are becoming the new search interface. When someone asks ChatGPT &quot;Who&apos;s the best plumber in Daytona Beach?&quot;
                  will your business be mentioned? GEO ensures you&apos;re part of AI-generated recommendations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">40% of GenZ prefers AI search</h4>
                      <p className="text-sm text-muted-foreground">They&apos;re asking ChatGPT instead of Googling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Google is integrating AI Overviews</h4>
                      <p className="text-sm text-muted-foreground">Traditional rankings are being pushed below AI summaries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Early movers win big</h4>
                      <p className="text-sm text-muted-foreground">Get established in AI recommendations before competitors</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">GEO vs Traditional SEO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Traditional SEO</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Optimize for keyword rankings</li>
                      <li>• Focus on Google&apos;s algorithm</li>
                      <li>• Build backlinks for authority</li>
                      <li>• Target search result pages (SERPs)</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">GEO Optimization</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Optimize for AI citations</li>
                      <li>• Focus on entity recognition</li>
                      <li>• Build topical authority</li>
                      <li>• Target AI-generated answers</li>
                    </ul>
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
                Our <span className="gradient-text">GEO</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive optimization for AI search engines and answer engines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Database className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle>Entity & Topical Mapping</CardTitle>
                  <CardDescription>Build your knowledge graph</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Entity relationship mapping</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Topical authority clusters</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Semantic SEO foundation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Knowledge panel optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Bot className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle>AI Mention Tracking</CardTitle>
                  <CardDescription>Monitor your AI visibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> ChatGPT mention monitoring</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Perplexity citation tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> AI search competitor analysis</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Prompt research & optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle>Link Building for AI</CardTitle>
                  <CardDescription>Authority signals AI trusts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> High-authority link building</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Reddit marketing & presence</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Wikipedia-style citations</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Expert content syndication</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle>AI-Optimized Content</CardTitle>
                  <CardDescription>Content AI wants to cite</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Answer-focused content</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Structured data optimization</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> FAQ schema implementation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Expert authorship signals</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle>Technical GEO</CardTitle>
                  <CardDescription>Backend optimization for AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Schema markup for AI</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Structured data validation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> API accessibility</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> LLM-friendly formatting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle>GEO Reporting</CardTitle>
                  <CardDescription>Measure AI search performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> AI citation reports</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Entity visibility tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Competitor AI presence</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Monthly progress reports</li>
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
                GEO <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get ahead of the AI search revolution with transparent, results-focused pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-professional border-purple-200">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="w-fit mx-auto mb-4">One-Time Setup</Badge>
                  <CardTitle className="text-2xl">GEO Foundation</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mt-2">$1,750</div>
                  <CardDescription>One-time investment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">Topical/entity mapping & strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">AI prompt research & competitor analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">GEO/AI mentions app setup</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">Initial link building campaign</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">Reddit marketing foundation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">AI mention tracking setup</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => selectService("GEO Foundation - $1,750")}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="space-y-6">
                <CardHeader className="text-center">
                  <Badge variant="outline" className="w-fit mx-auto mb-4">Monthly Options</Badge>
                  <CardTitle className="text-2xl">Ongoing GEO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Growth</span>
                      <span className="text-xl font-bold text-purple-600">$750/mo</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI monitoring & optimization</li>
                      <li>• Entity building</li>
                      <li>• $500 link budget included</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg border-purple-200 bg-purple-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Authority</span>
                      <span className="text-xl font-bold text-purple-600">$1,500/mo</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Everything in Growth</li>
                      <li>• Reddit campaigns</li>
                      <li>• Advanced link building</li>
                      <li>• Weekly optimization</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Enterprise</span>
                      <span className="text-xl font-bold text-purple-600">$2,500/mo</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 20 content pieces/month</li>
                      <li>• 10 backlinks/month</li>
                      <li>• Full ecosystem management</li>
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
                  What is GEO and how is it different from SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  GEO (Generative Engine Optimization) focuses on getting your business cited and recommended by AI assistants like ChatGPT, Claude, and Perplexity. While SEO optimizes for Google rankings, GEO optimizes for AI-generated answers. Both are complementary strategies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you track AI mentions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We use custom tracking tools that monitor how often your business is mentioned in AI search results for relevant queries. We track mentions across ChatGPT, Claude, Perplexity, and Google&apos;s AI Overviews.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Should I do GEO instead of SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For most businesses, you need both. Traditional SEO still drives significant traffic, but GEO prepares you for the future. Our GEO Foundation complements your existing SEO efforts and ensures you&apos;re visible across all search interfaces.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How long until I see results from GEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI systems update their knowledge bases regularly. You can see initial improvements in AI mentions within 30-60 days. Building strong entity recognition and consistent AI citations typically takes 3-6 months of sustained effort.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-violet-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for AI-Powered Search?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait for AI to replace traditional search. Position your business now for the future of discovery.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg"
              onClick={() => openDialog()}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your GEO Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your GEO Strategy"
        description="Let's discuss how to optimize your business for AI search engines and answer engines."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
