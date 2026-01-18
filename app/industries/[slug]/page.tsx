import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  TrendingUp, Users, CheckCircle, ArrowRight, Target, Award,
  BarChart3, Phone, Calendar, Star, Zap, DollarSign, MapPin,
  Clock, Shield, Heart, Eye, Brain, Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { industries, getIndustryBySlug, getColorClasses, getGradientClasses } from '@/data/industries';
import IndustryContactSection from './IndustryContactSection';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Industry Not Found | AIO Growth SEO',
    };
  }

  const canonicalUrl = `https://aiogrowthseo.com/industries/${industry.slug}`;

  return {
    title: industry.seo.metaTitle,
    description: industry.seo.metaDescription,
    keywords: industry.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: industry.seo.metaTitle,
      description: industry.seo.metaDescription,
      type: 'website',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.seo.metaTitle,
      description: industry.seo.metaDescription,
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const IconComponent = industry.icon;
  const colorClasses = getColorClasses(industry.color);
  const gradientClasses = getGradientClasses(industry.color);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${industry.name} Marketing Services`,
    "description": industry.description,
    "url": `https://aiogrowthseo.com/industries/${industry.slug}`,
    "provider": {
      "@type": "Organization",
      "name": "AIO Growth SEO",
      "url": "https://aiogrowthseo.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "serviceType": `${industry.name} Marketing`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <span className="text-foreground">{industry.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <IconComponent className="w-4 h-4 mr-2" />
                {industry.name} Marketing Specialist
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {industry.name} <span className="text-primary">Marketing Psychology</span> That Converts
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {industry.details.psychology}
              </p>

              <IndustryContactSection industryName={industry.name} industryShortName={industry.shortName} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center mt-8">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{industry.metrics.traffic} Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{industry.metrics.leads} More Qualified Leads</p>
                </div>
                <div className="p-4">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{industry.metrics.roi} ROI Increase</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychology Triggers */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {industry.shortName} <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We leverage these psychological triggers to create marketing that resonates and converts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.psychologyTriggers.map((trigger, index) => {
                const icons = [Zap, Heart, Eye];
                const TriggerIcon = icons[index % icons.length];
                return (
                  <Card key={index} className="card-professional text-center">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClasses}`}>
                        <TriggerIcon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl">{trigger}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We use {trigger.toLowerCase()} to create compelling marketing that drives action and builds lasting connections with your audience.
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges We Solve */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {industry.shortName} <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every industry has unique obstacles. Here&apos;s how we address the specific challenges in {industry.name.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.challenges.map((challenge, index) => (
                <Card key={index} className="card-professional">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses}`}>
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{challenge}</h3>
                        <p className="text-muted-foreground">
                          Our specialized approach addresses {challenge.toLowerCase()} with proven strategies tailored for the {industry.name.toLowerCase()} industry.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">{industry.shortName} Marketing</span> Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(industry.details).map(([key, value], index) => {
                if (key === 'psychology') return null;
                const icons = [Brain, Target, Shield, Sparkles, Star, Award];
                const DetailIcon = icons[index % icons.length];
                return (
                  <Card key={key} className="card-professional">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses}`}>
                        <DetailIcon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {industry.shortName} Marketing <span className="gradient-text">Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from our {industry.name.toLowerCase()} clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className={`card-professional text-center bg-gradient-to-br ${gradientClasses} text-white`}>
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">{industry.metrics.traffic}</div>
                  <p className="text-lg opacity-90">Traffic Growth</p>
                  <p className="text-sm opacity-75 mt-2">Average increase in organic search traffic</p>
                </CardContent>
              </Card>

              <Card className={`card-professional text-center bg-gradient-to-br ${gradientClasses} text-white`}>
                <CardContent className="p-8">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">{industry.metrics.leads}</div>
                  <p className="text-lg opacity-90">Lead Increase</p>
                  <p className="text-sm opacity-75 mt-2">More qualified leads per month</p>
                </CardContent>
              </Card>

              <Card className={`card-professional text-center bg-gradient-to-br ${gradientClasses} text-white`}>
                <CardContent className="p-8">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">{industry.metrics.roi}</div>
                  <p className="text-lg opacity-90">ROI Growth</p>
                  <p className="text-sm opacity-75 mt-2">Return on marketing investment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for this Industry */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Services for <span className="gradient-text">{industry.name}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive marketing solutions tailored for {industry.name.toLowerCase()} businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/seo-services">
                <Card className="card-professional hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <BarChart3 className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">SEO Services</h3>
                    <p className="text-muted-foreground text-sm">
                      Technical SEO and content strategy optimized for {industry.name.toLowerCase()} search patterns.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/local-seo">
                <Card className="card-professional hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <MapPin className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Local SEO</h3>
                    <p className="text-muted-foreground text-sm">
                      Dominate local search results and Google Business Profile for your {industry.name.toLowerCase()} business.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/geo-optimization">
                <Card className="card-professional hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <Sparkles className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">GEO Optimization</h3>
                    <p className="text-muted-foreground text-sm">
                      Get featured in AI search results when prospects ask about {industry.name.toLowerCase()} services.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/local-lead-generation">
                <Card className="card-professional hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <Target className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Lead Generation</h3>
                    <p className="text-muted-foreground text-sm">
                      Google Ads and Facebook campaigns designed for {industry.name.toLowerCase()} lead acquisition.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/ecommerce-seo">
                <Card className="card-professional hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <TrendingUp className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">E-commerce SEO</h3>
                    <p className="text-muted-foreground text-sm">
                      Product optimization and conversion strategies for {industry.name.toLowerCase()} online sales.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/custom-tools-automation">
                <Card className="card-professional hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <Zap className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Custom Automation</h3>
                    <p className="text-muted-foreground text-sm">
                      Marketing automation tools built for {industry.name.toLowerCase()} workflows.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {industry.shortName} Marketing FAQs
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes {industry.name.toLowerCase()} marketing different?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {industry.name} customers have unique psychology and buying behaviors. They respond to specific triggers
                  like {industry.psychologyTriggers.join(', ').toLowerCase()}. Generic marketing misses these nuances—we build
                  strategies around them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How long before I see results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For {industry.name.toLowerCase()} businesses, we typically see initial improvements within 30-60 days for paid
                  campaigns and 90-120 days for SEO. Full results with {industry.metrics.traffic} traffic growth usually manifest
                  within 6-12 months of consistent effort.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you work with {industry.name.toLowerCase()} businesses in my area?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We specialize in Central Florida (Volusia & Flagler Counties) but work with {industry.name.toLowerCase()} businesses
                  throughout Florida and beyond. Our strategies are adaptable to different markets while maintaining industry-specific expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What&apos;s the investment for {industry.name.toLowerCase()} marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our {industry.name.toLowerCase()} marketing packages start at $500/month for local SEO and go up to comprehensive
                  programs including SEO, paid ads, and automation. We&apos;ll recommend the right investment based on your goals
                  and competitive landscape.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${gradientClasses} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Get Your {industry.shortName} Marketing Analysis
                </CardTitle>
                <CardDescription className="text-lg">
                  Free competitive analysis and custom strategy recommendations for your {industry.name.toLowerCase()} business
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <IndustryContactSection industryName={industry.name} industryShortName={industry.shortName} variant="cta" />

                <p className="text-sm text-muted-foreground mt-4">
                  No obligation. Just expert analysis of your {industry.name.toLowerCase()} marketing opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Other Industries */}
            <div className="mt-12">
              <h3 className="text-center text-lg font-semibold mb-6">Explore Other Industries</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {industries
                  .filter(ind => ind.slug !== industry.slug)
                  .slice(0, 6)
                  .map(ind => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        {ind.shortName}
                      </Badge>
                    </Link>
                  ))}
                <Link href="/industries">
                  <Badge variant="secondary" className="cursor-pointer">
                    View All
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
