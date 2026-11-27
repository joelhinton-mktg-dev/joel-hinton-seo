'use client';

import CoreServiceSchema from '@/components/schema/CoreServiceSchema';

import Link from 'next/link';
import {
  MapPin, Search, Star, TrendingUp, Calendar, CheckCircle, ArrowRight,
  Globe, Target, Zap, Users, Award, Building2, FileText, Phone, Clock,
  Home, Check, X
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
import {
  dominationGeoNoteCta,
  dominationGeoNoteLead,
  geoOffer,
  localSeoLadderSummary,
  monthlyTiers,
  multiLocationMonthlyNote,
  setupTiers,
} from '@/data/pricing';
import { SITE_PHONE, SITE_PHONE_TEL } from '@/data/site';

const localCities = [
  "Daytona Beach", "Ormond Beach", "Port Orange", "New Smyrna Beach", "Palm Coast",
  "Holly Hill", "DeBary", "Sanford", "DeLand", "Flagler Beach"
];

const localCityHrefs: Record<string, string> = {
  "Holly Hill": "/areas-we-serve/holly-hill",
  "Sanford": "/areas-we-serve/sanford",
};

const peopleAlsoAskFaqs = [
  {
    question: 'Is it worth it to pay for SEO services?',
    answer: 'For a local service business, yes, when the work targets the searches that produce calls. One booked job a month from Google usually covers the cost of the service. The test is reporting: you should see rankings, calls, and the pages behind them, every month.',
  },
  {
    question: 'How can I do local SEO?',
    answer: 'Start with a claimed and verified Google Business Profile, one service page per service you sell, reviews asked for after every finished job, and your name, address, and phone number identical everywhere they appear online. That foundation is what rankings are built on.',
  },
  {
    question: 'Can ChatGPT do SEO?',
    answer: 'ChatGPT can draft content and speed up research, but it cannot verify your listings, earn reviews, or know your market. We use AI tools inside a human-run process: the strategy, the local judgment, and the accountability stay with people.',
  },
  {
    question: 'How do AI assistants decide which Daytona Beach SEO company to name?',
    answer: 'They read what they can verify. That means your Google Business Profile, your reviews and what customers say in them, consistent listings on directories like Clutch, and service pages deep enough to quote. In our November 2026 scan of 34 buyer questions, the Daytona pages ChatGPT and Perplexity cited ran 2,432 to 4,010 words, with real local detail on services, towns, pricing, and process. A thin page gives the engine nothing to work with, so it names someone else. The fix is not a trick. It is giving the engine more true, specific things to say about you than it can find about anyone else.',
  },
  {
    question: 'Do you track whether AI recommends my business?',
    answer: 'Yes. We run a fixed set of buyer questions across ChatGPT, Perplexity, and Google AI Overviews on a weekly cycle. The questions are the ones your customers actually ask, written in your town and your service terms. For each one we log whether your business is mentioned, recommended, or cited as a source, and which competitors and pages show up instead. That goes in your report next to your rankings and calls, so you can see AI visibility move alongside the numbers you already watch.',
  },
  {
    question: 'How is AI search visibility different from map pack rankings?',
    answer: 'The map pack is Google\'s local list of three businesses under a search, with the map and the call buttons. AI visibility is whether an assistant like ChatGPT or Perplexity names your business inside a written answer. They read many of the same signals: your profile, your reviews, your listings, and the depth of your pages. So the same work feeds both. But they are measured separately, because a business can hold a map pack spot and still go unnamed in AI answers, or the other way around.',
  },
];

/* November 2026 buyer-question scan (34 questions, 723 citations). These are the
   only proof figures the AI visibility sections may use. */
const scanStats = [
  { value: '34', caption: 'buyer questions asked across ChatGPT, Perplexity, and Google AI Overviews' },
  { value: '723', caption: 'citations logged across every answer' },
  { value: '68.6%', caption: 'of citations went to rival and publisher sites' },
  { value: '3.0%', caption: 'went to directories' },
];

const measuredLoop = [
  {
    title: 'Scan the questions',
    description: 'We ask the engines the questions your buyers ask, in your town and your terms.',
  },
  {
    title: 'Read what gets cited',
    description: 'We log which businesses get named and which pages the engines quote to name them.',
  },
  {
    title: 'Plan the fix',
    description: 'We compare your profile, listings, and pages to what got cited and pick the gaps that matter.',
  },
  {
    title: 'Ship it',
    description: 'Profile updates, listing cleanup, review requests, and deeper pages go live.',
  },
  {
    title: 'Measure again',
    description: 'Next week the same questions run again, so you can see what moved and what did not.',
  },
];

const citedVsSkipped = [
  {
    topic: 'Depth',
    cited: 'Thousands of words, with each service explained on its own terms',
    skipped: 'A few hundred words and a bulleted list of services',
  },
  {
    topic: 'AI visibility',
    cited: 'A named section on how the business shows up in AI answers',
    skipped: 'No mention of ChatGPT, Perplexity, or AI Overviews at all',
  },
  {
    topic: 'Pricing',
    cited: 'Published pricing, so the engine can answer "what does it cost"',
    skipped: '"Call for a quote" and nothing else',
  },
  {
    topic: 'Industries',
    cited: 'Industries named one by one, with how each one buys',
    skipped: '"We work with businesses of all sizes"',
  },
  {
    topic: 'FAQs',
    cited: 'Owner-level questions answered in the city\'s own terms',
    skipped: 'Generic questions that could sit on any site in any state',
  },
  {
    topic: 'Proof',
    cited: 'Reviews and results from local owners, attributed by name',
    skipped: 'Unsourced claims and stock testimonials',
  },
  {
    topic: 'Process',
    cited: 'A simple numbered process a buyer can follow',
    skipped: 'A vague promise to "grow your business"',
  },
  {
    topic: 'Local detail',
    cited: 'Real neighborhoods, towns, roads, and seasons',
    skipped: 'The city name dropped into a template',
  },
];

const nearbyTowns: Array<{ name: string; href?: string; character: string }> = [
  {
    name: 'Ormond Beach',
    href: '/areas-we-serve/ormond-beach',
    character: 'Established neighborhoods and long-time residents who read reviews closely and stay loyal once they pick.',
  },
  {
    name: 'Port Orange',
    href: '/areas-we-serve/port-orange',
    character: 'Family suburb with steady demand for home services, dental, and kids\' activities.',
  },
  {
    name: 'New Smyrna Beach',
    href: '/areas-we-serve/new-smyrna-beach',
    character: 'Beach town with a visitor season on Flagler Avenue and a year-round residential base behind it.',
  },
  {
    name: 'Palm Coast',
    href: '/areas-we-serve/palm-coast',
    character: 'Fast-growing Flagler County city full of newer residents who have not picked their providers yet.',
  },
  {
    name: 'DeLand',
    character: 'County seat and college town with a historic downtown where word of mouth still drives choices.',
  },
  {
    name: 'DeBary',
    href: '/areas-we-serve/debary',
    character: 'Quiet residential town on the I-4 and SunRail line, where buyers compare Volusia and Seminole providers.',
  },
  {
    name: 'Sanford',
    href: '/areas-we-serve/sanford',
    character: 'Seminole County riverfront city on the edge of the Orlando metro, with a busy restaurant scene downtown.',
  },
  {
    name: 'Holly Hill',
    href: '/areas-we-serve/holly-hill',
    character: 'Small mainland city between Daytona and Ormond, full of owner-run trades and shops.',
  },
];

const industriesServed = [
  {
    name: 'Home services (HVAC, plumbing, roofing)',
    searches: 'Urgent, phone-first searches with "near me" and "open now," spiking after storms and in the summer heat.',
  },
  {
    name: 'Healthcare and dental',
    searches: 'Patients check insurance, "accepting new patients," and reviews before they ever call.',
  },
  {
    name: 'Legal',
    searches: 'Long research cycles, and more and more of it happens as questions typed into AI assistants.',
  },
  {
    name: 'Restaurants and hospitality',
    searches: 'Visitor-driven, shaped by the event calendar, and decided by photos, menus, and hours.',
  },
  {
    name: 'Real estate',
    searches: 'Neighborhood-level searches, often from relocating buyers researching from out of state.',
  },
  {
    name: 'Professional services',
    searches: 'Accountants, consultants, and advisors are compared on trust, so reviews and detail carry the decision.',
  },
];

// Plain-text mirror of every visible FAQ on this page, for FAQPage JSON-LD.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      question: 'How long does it take to see results from Local SEO?',
      answer: 'Most businesses see initial improvements in 30-60 days. Google Business Profile optimizations can show results within 2 weeks. Full local pack rankings typically improve within 3-6 months depending on competition in your area.',
    },
    {
      question: 'Do I need both Local SEO and regular SEO?',
      answer: "If you're a local business serving Volusia or Flagler County, Local SEO should be your priority. It's often the fastest path to new customers. Traditional SEO can complement local efforts but isn't always necessary for service-area businesses.",
    },
    {
      question: 'Can you help with multiple locations?',
      answer: 'Yes. Our Enterprise plan is designed for businesses with 10+ locations. We use programmatic local SEO strategies to efficiently manage multiple Google Business Profiles, local pages, and citations across all your service areas.',
    },
    {
      question: 'What if I get a negative review?',
      answer: 'Our review management strategy includes response templates for negative reviews and a process to turn unhappy customers into advocates. We also help you proactively generate positive reviews to maintain a strong reputation.',
    },
    {
      question: 'What is the best local SEO company in Daytona Beach?',
      answer: 'The best local SEO company for your Daytona Beach business is one that focuses on your specific market, not a national agency applying a generic playbook. Look for a company that can show you local rankings they have moved for similar businesses, explains what they are doing in plain language, and does not require a long-term contract before you have seen results. We are based in Daytona Beach and work exclusively in Volusia and Flagler Counties.',
    },
    {
      question: 'How much does local SEO cost in Volusia County?',
      answer: `For most Volusia County service businesses, published monthly plans are ${localSeoLadderSummary} depending on how many cities you are targeting and how competitive your category is. Holly Hill and DeLand are less expensive to rank in than Daytona Beach proper. We have a full breakdown of what drives the cost on our pricing page and a detailed guide to local SEO cost in Daytona Beach.`,
    },
    ...peopleAlsoAskFaqs,
  ].map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function LocalSEOPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Local SEO Strategy Consultation');

  return (
    <>
      <CoreServiceSchema
        name="Local SEO Services in Daytona Beach, Florida — Volusia County"
        description="Local SEO for Daytona Beach and Volusia County businesses. Map pack rankings, GBP optimization, and content that gets you found. Month-to-month, no contracts."
        url="https://aiogrowthseo.com/services/local-seo"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-background">
        <PageBreadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Local SEO", href: "/services/local-seo", current: true }
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
                Local SEO Services for <span className="gradient-text">Daytona Beach</span> and Volusia County Businesses
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                AIO Growth provides local SEO services in Daytona Beach and across Volusia County, built to turn map pack and organic rankings into booked calls. When someone searches &quot;[your service] near me&quot; in{' '}
                <Link href="/areas-we-serve/daytona-beach" className="text-primary hover:underline">Daytona Beach</Link>,{' '}
                <Link href="/areas-we-serve/ormond-beach" className="text-primary hover:underline">Ormond Beach</Link>,{' '}
                <Link href="/areas-we-serve/port-orange" className="text-primary hover:underline">Port Orange</Link>, or Palm Coast, <Link href="/blog/why-volusia-hvac-businesses-buried-google" className="text-primary hover:underline">are you showing up</Link>? Our Local SEO services put your business in front of customers actively looking for what you offer.
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

              <p className="text-lg text-muted-foreground mb-8">
                Call{' '}
                <a href={`tel:${SITE_PHONE_TEL}`} className="text-primary font-semibold hover:underline">
                  {SITE_PHONE}
                </a>
              </p>

              {/* Service Area Tags */}
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                {localCities.slice(0, 9).map((city) => (
                  <Badge key={city} variant="outline" className="text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    {localCityHrefs[city] ? (
                      <Link href={localCityHrefs[city]} className="hover:underline">
                        {city}
                      </Link>
                    ) : (
                      city
                    )}
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
                  Most Daytona Beach businesses that struggle with local search have the same problem — their website and Google Business Profile are either incomplete or optimized for the wrong signals. When potential customers search for services in Volusia or Flagler County — including{' '}
                  <Link href="/blog/local-seo-hvac-plumbing-volusia-county" className="text-primary hover:underline">local SEO for contractors in Volusia County</Link> — Local SEO determines whether they find you or your competitors.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Google Map Pack Visibility</h4>
                      <p className="text-muted-foreground text-sm">
                        Appear in the top 3 local results when customers search &quot;near me&quot; — understanding{' '}
                        <Link href="/blog/how-google-local-pack-works-2026" className="text-primary hover:underline">how the Google Local Pack works</Link>{' '}
                        is the foundation of every campaign we run.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        <Link href="/blog/google-business-profile-optimization-daytona" className="text-primary hover:underline">Google Business Profile optimization</Link>
                      </h4>
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

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Foundation Setup</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {setupTiers.map((tier) => (
                  <Card key={tier.name} className="card-professional border-green-200 flex flex-col h-full">
                    <CardHeader className="text-center">
                      <Badge variant="secondary" className="w-fit mx-auto mb-4">One-Time Setup</Badge>
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <div className="text-4xl font-bold text-green-600 mt-2">{tier.price}</div>
                      <CardDescription>One-time investment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex flex-col flex-1">
                      <p className="text-sm text-muted-foreground flex-1">{tier.description}</p>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 mt-auto"
                        onClick={() => {
                          selectService(tier.serviceLabel);
                          openDialog();
                        }}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">Monthly Plans</h3>
              <div className="space-y-4">
                {monthlyTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`p-4 border rounded-lg ${tier.highlighted ? 'border-green-200 bg-green-50' : ''}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{tier.name}</span>
                      <span className="text-xl font-bold text-green-600">{tier.price}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tier.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                    {tier.name === 'Domination' && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {dominationGeoNoteLead}{' '}
                        <Link href={geoOffer.href} className="text-primary hover:underline">
                          {dominationGeoNoteCta} {geoOffer.offerName}
                        </Link>
                        .
                      </p>
                    )}
                    <Button
                      size="sm"
                      className={`mt-3 ${tier.highlighted ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600/90 hover:bg-green-700 text-white'}`}
                      onClick={() => {
                        selectService(tier.serviceLabel);
                        openDialog();
                      }}
                    >
                      Choose {tier.name}
                    </Button>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6">{multiLocationMonthlyNote}</p>
            </div>
          </div>
        </section>

        {/* AI search visibility: scan figures limited to the November 2026 buyer-question scan */}
        <section className="py-24 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
              <div>
                <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                  <Search className="w-4 h-4 mr-2" />
                  AI search
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Local SEO Now Includes <span className="gradient-text">AI Search Visibility</span>
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground">
                  <p>
                    Your next customer may never scroll a page of links. More buyers in Daytona Beach
                    now type a full question into ChatGPT, Perplexity, or Google and read the answer:
                    &quot;who is the best SEO company in Daytona Beach,&quot; &quot;who provides AI
                    visibility services in Daytona Beach Florida,&quot; &quot;which roofer in Port
                    Orange answers the phone on a Saturday.&quot; The engines answer with names. They
                    do not pull those names out of thin air. They pull them from what they can read
                    and check.
                  </p>
                  <p>
                    That reading list is short and predictable. Your Google Business Profile. Your
                    reviews: how many, how recent, and what customers say in them. Directory listings
                    that match each other, with Clutch the directory the engines cite most often in
                    this market. And service pages deep enough to quote, with real local detail about
                    what you do, who you do it for, and where.
                  </p>
                  <p>
                    Thin pages give the engines nothing to quote. A short service page that says
                    &quot;we serve Daytona Beach&quot; three times is not evidence of anything. That
                    is the whole problem this page is built to solve, for us and for the businesses
                    we work with. Our{' '}
                    <Link href="/services/geo-optimization" className="text-primary hover:underline">
                      AI search optimization (GEO) service
                    </Link>{' '}
                    goes deeper on the AI side; here is how it fits into local SEO.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-12 mb-3">The weekly loop</h3>
                <p className="text-lg text-muted-foreground">
                  Local SEO is no longer a set-and-forget retainer task. It is a measured loop, and
                  it runs every week:
                </p>
                <ol className="mt-6 space-y-5">
                  {measuredLoop.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="text-lg text-muted-foreground mt-8">
                  Your report shows the loop in plain English. For each buyer question, you see
                  whether ChatGPT, Perplexity, and Google AI Overviews named your business, which
                  competitors they named instead, and which pages they quoted to do it. Next to that
                  sit the numbers you already know: map pack rankings, calls, and direction requests.
                  When a fix ships, you can watch the same question the following week and see
                  whether the answer changed.
                </p>
                <p className="text-lg text-muted-foreground mt-5">
                  Every result is measured, never promised. We&apos;re seeing page one in 45 to 60
                  days, many in the top 30.
                </p>
              </div>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 lg:sticky lg:top-24">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold uppercase tracking-widest text-center text-muted-foreground">
                    What we measured · November 2026
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {scanStats.map((stat, index) => (
                    <div key={stat.value}>
                      {index > 0 && <Separator className="mb-6" />}
                      <div className="text-center">
                        <div className="text-5xl font-bold text-green-600 mb-2">{stat.value}</div>
                        <p className="text-muted-foreground">{stat.caption}</p>
                      </div>
                    </div>
                  ))}
                  <Separator />
                  <p className="text-sm text-muted-foreground text-center">
                    The Daytona provider pages the engines cited ran 2,432 to 4,010 words. We publish
                    our scan method and rerun it weekly; clients see the same numbers we see.
                  </p>
                  <div className="text-center">
                    <Badge variant="outline" className="border-green-300 text-green-700">
                      <Calendar className="w-3 h-3 mr-1" />
                      rerun every week
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cited vs skipped: the page standard the scan surfaced */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Target className="w-4 h-4 mr-2" />
                The cited standard
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What the Pages <span className="gradient-text">AI Cites</span> Have in Common
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When we read the Daytona provider pages the engines chose to quote, the same pattern
                showed up again and again. So did the pattern on the pages they passed over.
              </p>
            </div>

            <Card className="card-professional overflow-hidden">
              <div className="hidden md:grid grid-cols-[0.6fr_1fr_1fr] gap-6 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-sm font-semibold uppercase tracking-wide text-white">
                <span>What they read</span>
                <span>Pages the engines cite</span>
                <span className="text-green-100">Pages they skip</span>
              </div>
              <ul>
                {citedVsSkipped.map((row) => (
                  <li
                    key={row.topic}
                    className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr_1fr] gap-3 md:gap-6 px-6 py-5 border-b border-border last:border-b-0"
                  >
                    <span className="font-semibold text-foreground">{row.topic}</span>
                    <span className="flex items-start gap-2 text-foreground">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      {row.cited}
                    </span>
                    <span className="flex items-start gap-2 text-muted-foreground">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      {row.skipped}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="max-w-4xl mx-auto mt-12 space-y-5 text-lg text-muted-foreground">
              <p>
                None of this is decoration. Each row is a question a buyer asks before they call, and
                an engine can only repeat an answer it found somewhere. If your page says what you
                charge, the engine can answer &quot;what does it cost.&quot; If it names the
                industries you serve, the engine can match you to a dentist or a roofer. If it names
                Seabreeze, Port Orange, or the beachside, it can match you to someone who lives
                there.
              </p>
              <p>
                The pages they skip are not bad businesses. Many of them belong to good companies
                with happy customers. They just never wrote down enough for a machine to quote, so
                the machine quoted someone else.
              </p>
              <p className="font-semibold text-foreground">
                This page is built to the cited standard, and the scan that proved the standard is the
                same scan we run for clients.
              </p>
            </div>
          </div>
        </section>

        {/* Daytona and Volusia specifics */}
        <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Our market
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Daytona Beach</span> and Volusia County, Specifically
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Daytona Beach runs on two economies at once, and they search in different ways. A
                local SEO plan that treats them as one market misses half the calls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle>The visitor economy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    It runs on the event calendar. Speedweeks and the Daytona 500 in February, Bike
                    Week in March, spring break, summer families, and Biketoberfest in October. Each
                    one brings a wave of searches from people who do not know the area and decide fast:
                    restaurants, rentals, repairs, towing, urgent care. Profiles and pages that are
                    ready before the wave catch it.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Home className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle>The resident economy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    It runs along the International Speedway Boulevard and Beville Road corridors,
                    through Midtown, and out to the growing LPGA area. New households there search
                    &quot;near me&quot; for everything, from a dentist to an AC repair, with no
                    established favorites. Whoever shows up first with good reviews becomes the
                    favorite.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-12">
              Search also splits by neighborhood. The Main Street District and Seabreeze on the
              beachside draw a different crowd than Downtown along Beach Street or Midtown on the
              mainland, and the bridges between the beachside and the mainland matter more to a
              &quot;near me&quot; search than most owners expect. We build pages and profiles that
              name the parts of town you actually serve.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl">Towns we serve</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {nearbyTowns.map((town) => (
                      <li key={town.name} className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {town.href ? (
                              <Link href={town.href} className="text-primary hover:underline">
                                {town.name}
                              </Link>
                            ) : (
                              town.name
                            )}
                          </h4>
                          <p className="text-muted-foreground text-sm">{town.character}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl">Industries we work with</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {industriesServed.map((industry) => (
                      <li key={industry.name} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">{industry.name}</h4>
                          <p className="text-muted-foreground text-sm">{industry.searches}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="max-w-4xl mx-auto mt-12 bg-white border-green-200">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2 border-green-300 text-green-700">
                  <Users className="w-3 h-3 mr-1" />
                  we live here
                </Badge>
                <CardTitle className="text-xl">
                  Why owners here pick a Daytona team over an Orlando agency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Volusia is its own search market, with its own competitors and its own calendar. We
                  know Bike Week will move your calls before it shows up in a report, we know which
                  side of the bridge your customers live on, and you work directly with the people
                  doing the work, here in Daytona Beach. You get a team that drives the same roads
                  your customers do, not an
                  account manager who learned your town from a map.
                </p>
              </CardContent>
            </Card>
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

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What is the best local SEO company in Daytona Beach?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The best local SEO company for your Daytona Beach business is one that focuses on your specific market, not a national agency applying a generic playbook. Look for a company that can show you local rankings they have moved for similar businesses, explains what they are doing in plain language, and does not require a long-term contract before you have seen results. We are based in Daytona Beach and work exclusively in Volusia and Flagler Counties.{' '}
                  <Link href="/about" className="text-primary hover:underline">See how we work</Link>
                  {' '}or{' '}
                  <Link href="/contact" className="text-primary hover:underline">get a free audit</Link>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How much does local SEO cost in Volusia County?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For most Volusia County service businesses, published monthly plans are {localSeoLadderSummary} depending on how many cities you are targeting and how competitive your category is. Holly Hill and DeLand are less expensive to rank in than Daytona Beach proper. We have a full breakdown of what drives the cost on our{' '}
                  <Link href="/pricing" className="text-primary hover:underline">pricing page</Link>
                  {' '}and a detailed guide to{' '}
                  <Link href="/blog/how-much-does-local-seo-cost-daytona-beach" className="text-primary hover:underline">
                    local SEO cost in Daytona Beach
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>

              {peopleAlsoAskFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index + 7}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
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
              Get your free Local SEO audit and see exactly what&apos;s preventing you from{' '}
              <Link href="/blog/how-to-rank-daytona-beach-map-pack" className="text-white underline hover:text-green-50">
                ranking in the local map pack
              </Link>
              .
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
