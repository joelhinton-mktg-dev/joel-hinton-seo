'use client';

import CoreServiceSchema from '@/components/schema/CoreServiceSchema';

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
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { geoOffer, geoOfferProse } from '@/data/pricing';

const loopSteps = [
  {
    title: 'Agree the questions',
    body: 'At the start we agree the exact set of buyer questions your visibility gets measured on, the same questions your customers ask ChatGPT, Perplexity, and Google AI Overviews. Think "who installs pavers in Ormond Beach" or "which clinic in DeLand takes walk-ins." The set stays fixed, so the numbers mean the same thing every week.',
  },
  {
    title: 'Scan weekly',
    body: 'We run that fixed set across all three engines and log whether your business is mentioned, recommended, or cited, and who gets named instead. A mention is your name in the answer. A citation is your page linked as a source. We track both, separately.',
  },
  {
    title: 'Read what wins',
    body: "We open the pages the engines cite and diff their coverage against yours: covered, missing, or thin. If the answer for your service keeps pulling from a competitor's service page or a directory listing, we can see exactly what that page says that yours does not.",
  },
  {
    title: 'Ship the fix',
    body: 'Pages, profile work, and citation building, in a ranked order. Some weeks that is a new service page, some weeks it is a fix to your Google Business Profile categories or a listing on a directory the engines already trust. The gaps closest to a buyer question go first. You see what is shipping and why, in plain language, before it goes live.',
  },
  {
    title: 'Measure per change',
    body: 'The next scans show whether each change moved a mention or a citation, not just a ranking. Changes that move an answer get repeated across your other services. Changes that do not get dropped.',
  },
];

const guaranteeConditions = [
  'The exact question and the check method are agreed up front, before launch. No moving the goalposts later, in either direction.',
  'We need access to your Google Business Profile and about 20 minutes a month from you to answer questions and approve direction.',
  'The clock pauses if you go dark on us. If we cannot reach you for a few weeks, those weeks do not count against the 90.',
  'Rankings, revenue, and setup-fee refunds are not guaranteed, and we will not pretend otherwise.',
];

const proofItems = [
  {
    label: 'Volusia Christmas Lights',
    title: 'A site built with this exact system',
    body: 'We built VolusiaChristmasLights.com with the same loop this page describes: 72 pages published from a topical map. In November 2026 data, its permanent-lighting and palm-tree pages hold top-10 Google positions, roughly 7 to 9. It has the same shape as most service businesses: a handful of core services, one county, and buyers who search with a city name attached.',
  },
  {
    label: 'AIO Growth SEO',
    title: 'Our own site runs the same loop',
    body: 'In our November 26, 2026 baseline scan of 34 buyer questions across ChatGPT, Perplexity, and Google AI Overviews, AI assistants already name AIO Growth on the Daytona Beach AI visibility questions and cite our pages on the map-pack and Google Business Profile questions. The broader statewide GEO questions are still on our own weekly list, and we work them with the same loop.',
  },
  {
    label: 'One of our GEO guides',
    title: 'Zero to page one after a refresh',
    body: 'One of our own GEO guides went from zero impressions to positions 3 to 8 on its core searches within days of Google recrawling the refreshed page. Same content, rebuilt to answer the question directly. That is step five of the loop, measuring per change, applied to our own page.',
  },
];

export default function GEOOptimizationPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('GEO Optimization Consultation');

  return (
    <>
      <CoreServiceSchema
        name="GEO Optimization for Daytona Beach and Volusia County Businesses"
        description="Get your Daytona Beach or Volusia County business cited in ChatGPT, Google AI Overviews, and Perplexity. GEO optimization built for local service businesses, not enterprise brands."
        url="https://aiogrowthseo.com/services/geo-optimization"
      />

      <div className="min-h-screen bg-background">
        <PageBreadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "GEO Optimization", href: "/services/geo-optimization", current: true }
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
                GEO Optimization for Daytona Beach and Volusia County Businesses
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                {geoOffer.offerName} is {geoOfferProse.buildMonthly}, {geoOffer.term}, with a {geoOffer.guarantee}.
                When 40% of GenZ uses TikTok and AI assistants instead of Google, traditional SEO isn&apos;t enough.
                GEO ensures you know{' '}
                <Link href="/blog/how-to-get-cited-by-ai-search-2026" className="text-primary hover:underline">how to get cited by AI search</Link>{' '}
                and get recommended by ChatGPT, Claude, Perplexity, and other AI search tools.
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
                  will your business be mentioned?{' '}
                  <Link href="/areas-we-serve/daytona-beach" className="text-primary hover:underline">Daytona Beach businesses</Link>{' '}
                  that invest in GEO show up in those AI-generated recommendations.
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
                      <h4 className="font-semibold">
                        Google is integrating{' '}
                        <Link href="/blog/how-to-show-up-in-ai-overviews-local-business" className="text-primary hover:underline">
                          AI Overviews
                        </Link>
                      </h4>
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
                  <CardTitle className="text-2xl text-center">
                    <Link href="/guides/geo-vs-seo-whats-the-difference" className="hover:underline">
                      GEO vs Traditional SEO
                    </Link>
                  </CardTitle>
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
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Authority content syndication</li>
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
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Named authorship signals</li>
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

        {/* How the loop runs */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How the <span className="gradient-text">Answer Engine</span> Works, Week to Week
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                AI assistants change who they name as they read new pages, so GEO is not a
                one-time setup. The work runs as a weekly loop against a fixed scoreboard. Here is
                what happens, in order.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loopSteps.map((step, index) => (
                <li key={step.title}>
                  <Card className="card-professional h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 font-bold text-purple-600">
                        {index + 1}
                      </div>
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{step.body}</p>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-12 text-center">
              The parts you can start on yourself are in our guide on{' '}
              <Link href="/blog/how-to-get-recommended-by-ai" className="text-primary hover:underline">
                how to get recommended by AI
              </Link>
              . The loop is what turns those parts into a measured result.
            </p>
          </div>
        </section>

        {/* GEO + SEO */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How Much Does <span className="gradient-text">GEO</span> Cost?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The current offer is {geoOffer.offerName}: {geoOfferProse.buildMonthly}.
                {geoOffer.term}, with a {geoOffer.guarantee}. One flagship. No pricing ladder.
              </p>
            </div>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-slate-200 text-sm text-left">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-2 font-semibold">Offer</th>
                    <th className="border border-slate-200 px-4 py-2 font-semibold">Build</th>
                    <th className="border border-slate-200 px-4 py-2 font-semibold">Monthly</th>
                    <th className="border border-slate-200 px-4 py-2 font-semibold">Term</th>
                    <th className="border border-slate-200 px-4 py-2 font-semibold">Guarantee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2">{geoOffer.offerName}</td>
                    <td className="border border-slate-200 px-4 py-2">{geoOffer.build}</td>
                    <td className="border border-slate-200 px-4 py-2">{geoOffer.monthly}</td>
                    <td className="border border-slate-200 px-4 py-2">{geoOffer.term}</td>
                    <td className="border border-slate-200 px-4 py-2">{geoOffer.guarantee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Full breakdown in the{' '}
              <Link href="/blog/what-generative-engine-optimization-costs-local-business" className="text-primary hover:underline">
                GEO cost guide
              </Link>
              .
            </p>

            <Card className="card-professional border-purple-200 bg-purple-50">
              <CardHeader>
                <Badge className="w-fit mb-4 bg-purple-600">{geoOffer.offerName}</Badge>
                <CardTitle className="text-2xl">{geoOffer.price}</CardTitle>
                <CardDescription>
                  {geoOffer.term}, with a {geoOffer.guarantee}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {geoOffer.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  asChild
                >
                  <Link href="/blog/what-generative-engine-optimization-costs-local-business">
                    See what GEO costs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-24 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The <span className="gradient-text">90-Day Guarantee</span>, Stated Plainly
                </h2>
                <p className="text-lg text-muted-foreground">
                  {geoOffer.offerName} is {geoOfferProse.buildMonthly}, {geoOffer.term}. Here is
                  what that buys you:
                </p>
                <blockquote className="mt-6 border-l-4 border-purple-600 pl-5 text-xl font-semibold text-foreground">
                  Within 90 days of launch, ChatGPT, Perplexity, or Google AI Overviews will name
                  your business when someone asks who provides your main service in your city. If
                  that has not happened by day 90, we keep working at no additional charge until it
                  does.
                </blockquote>
                <p className="mt-6 text-lg text-muted-foreground">
                  A guarantee measured on a question nobody agreed to is just marketing. So before
                  launch we write down the question, for example &quot;who does roof repair in Port
                  Orange,&quot; and the check: which engines, asked how, logged where. You see the
                  same scan results we do, every week, so neither side has to take the other&apos;s
                  word for it.
                </p>
                <p className="mt-6 text-lg text-muted-foreground">
                  We can make that promise because we measure it the same way every week, on
                  questions we agree with you before anything ships. The conditions on the right
                  are not fine print. They exist because the measurement has to be honest to mean
                  anything, and because a result you cannot check is not a result.
                </p>
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-2xl">The conditions, all of them</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {guaranteeConditions.map((condition) => (
                      <li key={condition} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proof, From Our <span className="gradient-text">Own Market</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We run this system on our own sites in Volusia County before we sell it to anyone
                else. That matters more on a GEO page than anywhere: if we could not get named in
                our own market, we would have no business promising it in yours. These are the
                numbers we can show you, from our own work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {proofItems.map((item) => (
                <Card key={item.title} className="card-professional">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">{item.label}</Badge>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-12 text-center">
              How we talk about results: we&apos;re seeing first measurable movement in AI
              mentions within 30 to 60 days, and the guarantee window is 90. We do not promise a
              specific ranking, because nobody honest can. What we can do is show you the scans,
              every week, on the questions we agreed.
            </p>
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

              <AccordionItem value="item-5b" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do I need extra budget for GEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If you want GEO done, the budget is {geoOffer.offerName}: {geoOfferProse.buildMonthly}.
                  It is not a $500 add-on and it is not a second national GEO contract. Details in our{' '}
                  <Link href="/blog/what-generative-engine-optimization-costs-local-business" className="text-primary hover:underline">
                    GEO cost guide
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How much does AI search optimization cost?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  How much does GEO cost? {geoOffer.offerName} is {geoOfferProse.buildMonthly}, {geoOffer.term}, with a {geoOffer.guarantee}. That is the only public GEO price. National agency rates run much higher because they price for large competitive markets. Full breakdown on our{' '}
                  <Link href="/blog/what-generative-engine-optimization-costs-local-business" className="text-primary hover:underline">
                    GEO cost guide
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How is GEO different from SEO for a local business?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Traditional local SEO gets you into Google Maps and blue-link results. GEO gets you cited by name when someone asks ChatGPT, Google&apos;s AI Overviews, or Perplexity a question about businesses in your category and location. For a Daytona Beach contractor or clinic, GEO is not a replacement for local SEO, it is a layer on top of it. The businesses winning AI citations in Volusia County today are the ones with complete Google Business Profiles, real reviews, and clear location-specific content. That is GEO and local SEO working together.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What does the 90-day guarantee actually promise?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Within 90 days of launch, ChatGPT, Perplexity, or Google AI Overviews will name your business when someone asks who provides your main service in your city. If that has not happened by day 90, we keep working at no additional charge until it does. The exact question and the check method are agreed up front, before launch. The guarantee needs access to your Google Business Profile and about 20 minutes a month from you, and the clock pauses if you go dark on us. Rankings, revenue, and setup-fee refunds are not guaranteed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What do you need from me each month?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Three things. Access to your Google Business Profile. About 20 minutes a month to answer our questions and approve direction, usually one short call or a few replies by email. And a heads-up when your services or service area change, so the pages and profile stay accurate. The scanning, writing, and shipping are ours. You do not need to learn GEO or manage anyone.
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
              asChild
            >
              <Link href="/contact">
                <Sparkles className="w-5 h-5 mr-2" />
                Book a free audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
