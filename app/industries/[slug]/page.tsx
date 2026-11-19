import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  TrendingUp, Users, CheckCircle, Target, Award,
  BarChart3, Zap, DollarSign, MapPin,
  Shield, Heart, Eye, Brain, Sparkles, Star
} from 'lucide-react';
import { industries, getIndustryBySlug } from '@/data/industries';
import { monthlyTiers } from '@/data/pricing';
import IndustryContactSection from './IndustryContactSection';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';
import ServiceFaq from '../../../components/service/ServiceFaq';

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
      title: 'Industry Not Found',
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${industry.name} Marketing Services`,
    "description": industry.description,
    "url": `https://aiogrowthseo.com/industries/${industry.slug}`,
    ...(industry.dateModified && { dateModified: industry.dateModified }),
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aiogrowthseo.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://aiogrowthseo.com/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": industry.name,
        "item": `https://aiogrowthseo.com/industries/${industry.slug}`
      }
    ]
  };

  const serviceCards = [
    {
      href: '/services/search-engine-optimization',
      icon: BarChart3,
      title: 'SEO Services',
      description: `Technical SEO and content strategy optimized for ${industry.name.toLowerCase()} search patterns.`,
    },
    {
      href: '/services/local-seo',
      icon: MapPin,
      title: 'Local SEO',
      description: `Dominate local search results and Google Business Profile for your ${industry.name.toLowerCase()} business.`,
    },
    {
      href: '/services/geo-optimization',
      icon: Sparkles,
      title: 'GEO Optimization',
      description: `Get featured in AI search results when prospects ask about ${industry.name.toLowerCase()} services.`,
    },
    {
      href: '/services/local-lead-generation',
      icon: Target,
      title: 'Lead Generation',
      description: `Google Ads and Facebook campaigns designed for ${industry.name.toLowerCase()} lead acquisition.`,
    },
    {
      href: '/services/ecommerce-seo',
      icon: TrendingUp,
      title: 'E-commerce SEO',
      description: `Product optimization and conversion strategies for ${industry.name.toLowerCase()} online sales.`,
    },
    {
      href: '/services/custom-tools-automation',
      icon: Zap,
      title: 'Custom Automation',
      description: `Marketing automation tools built for ${industry.name.toLowerCase()} workflows.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-paper">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-6">
          <nav className="flex items-center gap-2 text-sm text-navy/60">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-brand">Industries</Link>
            <span>/</span>
            <span className="text-navy">{industry.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="bg-waves px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <p className="mb-6 inline-flex items-center text-[15px] font-semibold text-pen-text">
                <IconComponent className="mr-2 h-4 w-4" />
                {industry.name} Marketing Specialist
              </p>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
                {industry.name} <OrangeUnderline>Marketing Psychology</OrangeUnderline> That Converts
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-navy/70">
                {industry.details.psychology}
              </p>

              <IndustryContactSection industryName={industry.name} industryShortName={industry.shortName} />

              <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 text-center md:grid-cols-3">
                <div className="p-4">
                  <TrendingUp className="mx-auto mb-2 h-8 w-8 text-brand" />
                  <p className="text-sm font-medium text-navy">{industry.metrics.traffic} Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="mx-auto mb-2 h-8 w-8 text-brand" />
                  <p className="text-sm font-medium text-navy">{industry.metrics.leads} More Qualified Leads</p>
                </div>
                <div className="p-4">
                  <DollarSign className="mx-auto mb-2 h-8 w-8 text-brand" />
                  <p className="text-sm font-medium text-navy">{industry.metrics.roi} ROI Increase</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychology Triggers */}
        <section className="bg-band px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                {industry.shortName} <OrangeUnderline>Psychology Triggers</OrangeUnderline>
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
                We use these psychological triggers to create marketing that resonates and converts.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {industry.psychologyTriggers.map((trigger, index) => {
                const icons = [Zap, Heart, Eye];
                const TriggerIcon = icons[index % icons.length];
                return (
                  <div key={index} className="rounded-3xl border border-hairline bg-cream p-6 text-center shadow-sm">
                    <TriggerIcon className="mx-auto mb-4 h-10 w-10 text-brand" />
                    <h3 className="mb-3 text-xl font-extrabold tracking-tight text-navy">{trigger}</h3>
                    <p className="leading-relaxed text-navy/70">
                      We use {trigger.toLowerCase()} to create compelling marketing that drives action and builds lasting connections with your audience.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges We Solve */}
        <section className="bg-paper px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                {industry.shortName} <OrangeUnderline>Challenges We Solve</OrangeUnderline>
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
                Every industry has unique obstacles. Here&apos;s how we address the specific challenges in {industry.name.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="rounded-3xl border border-hairline bg-cream p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-brand" />
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-navy">{challenge}</h3>
                      <p className="leading-relaxed text-navy/70">
                        Our specialized approach addresses {challenge.toLowerCase()} with proven strategies tailored for the {industry.name.toLowerCase()} industry.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-band px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                Our <OrangeUnderline>{industry.shortName} Marketing</OrangeUnderline> Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(industry.details).map(([key, value], index) => {
                if (key === 'psychology') return null;
                const icons = [Brain, Target, Shield, Sparkles, Star, Award];
                const DetailIcon = icons[index % icons.length];
                return (
                  <div key={key} className="rounded-3xl border border-hairline bg-cream p-6 shadow-sm">
                    <DetailIcon className="mb-4 h-8 w-8 text-brand" />
                    <h3 className="mb-3 text-lg font-extrabold capitalize tracking-tight text-navy">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <p className="leading-relaxed text-navy/70">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-paper px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                {industry.shortName} Marketing <OrangeUnderline>Results</OrangeUnderline>
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
                Real results from our {industry.name.toLowerCase()} clients
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-3xl bg-navy p-8 text-center text-white">
                <TrendingUp className="mx-auto mb-4 h-12 w-12 opacity-80" />
                <div className="mb-2 text-5xl font-extrabold">{industry.metrics.traffic}</div>
                <p className="text-lg opacity-90">Traffic Growth</p>
                <p className="mt-2 text-sm opacity-75">Average increase in organic search traffic</p>
              </div>

              <div className="rounded-3xl bg-navy p-8 text-center text-white">
                <Users className="mx-auto mb-4 h-12 w-12 opacity-80" />
                <div className="mb-2 text-5xl font-extrabold">{industry.metrics.leads}</div>
                <p className="text-lg opacity-90">Lead Increase</p>
                <p className="mt-2 text-sm opacity-75">More qualified leads per month</p>
              </div>

              <div className="rounded-3xl bg-navy p-8 text-center text-white">
                <DollarSign className="mx-auto mb-4 h-12 w-12 opacity-80" />
                <div className="mb-2 text-5xl font-extrabold">{industry.metrics.roi}</div>
                <p className="text-lg opacity-90">ROI Growth</p>
                <p className="mt-2 text-sm opacity-75">Return on marketing investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for this Industry */}
        <section className="bg-band px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                Services for <OrangeUnderline>{industry.name}</OrangeUnderline>
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
                Comprehensive marketing services tailored for {industry.name.toLowerCase()} businesses
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card) => {
                const CardIcon = card.icon;
                return (
                  <Link key={card.href} href={card.href} className="group block h-full rounded-3xl border border-hairline bg-cream p-6 shadow-sm transition-shadow hover:shadow-md">
                    <CardIcon className="mb-4 h-10 w-10 text-brand" />
                    <h3 className="mb-2 text-lg font-bold text-navy group-hover:text-brand group-hover:underline">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-navy/70">
                      {card.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {industry.bodyClose && (
          <section className="bg-paper px-4 py-20">
            <div className="container mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-navy/75">
                {industry.bodyClose}
              </p>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <ServiceFaq
          heading={`${industry.shortName} Marketing FAQs`}
          note={`Questions about ${industry.name.toLowerCase()} marketing? The assistant in the corner can answer anything else.`}
          faqs={[
            {
              question: `What makes ${industry.name.toLowerCase()} marketing different?`,
              answer: `${industry.name} customers have unique psychology and buying behaviors. They respond to specific triggers like ${industry.psychologyTriggers.join(', ').toLowerCase()}. Generic marketing misses these nuances - we build strategies around them.`,
            },
            {
              question: 'How long before I see results?',
              answer: `For ${industry.name.toLowerCase()} businesses, we typically see initial improvements within 30-60 days for paid campaigns and 90-120 days for SEO. Full results with ${industry.metrics.traffic} traffic growth usually manifest within 6-12 months of consistent effort.`,
            },
            {
              question: `Do you work with ${industry.name.toLowerCase()} businesses in my area?`,
              answer: `We specialize in Central Florida (Volusia & Flagler Counties) but work with ${industry.name.toLowerCase()} businesses throughout Florida and beyond. Our strategies are adaptable to different markets while maintaining an industry-specific focus.`,
            },
            {
              question: `What's the investment for ${industry.name.toLowerCase()} marketing?`,
              answer: `Our ${industry.name.toLowerCase()} marketing packages start at ${monthlyTiers[0].price} for local SEO (${monthlyTiers[0].name}) and go up to comprehensive programs including SEO, paid ads, and automation. We'll recommend the right investment based on your goals and competitive landscape.`,
            },
          ]}
        />

        {/* CTA Section */}
        <section className="bg-brand bg-waves-light px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl bg-cream p-8 text-center shadow-sm">
              <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-tint text-brand">
                <IconComponent className="h-8 w-8" />
              </span>
              <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
                Get Your {industry.shortName} Marketing Analysis
              </h2>
              <p className="mb-8 text-lg text-navy/70">
                Free competitive analysis and custom strategy recommendations for your {industry.name.toLowerCase()} business
              </p>
              <IndustryContactSection industryName={industry.name} industryShortName={industry.shortName} variant="cta" />

              <p className="mt-4 text-sm text-navy/60">
                No obligation. Just a detailed analysis of your {industry.name.toLowerCase()} marketing opportunities.
              </p>
            </div>

            {/* Other Industries */}
            <div className="mt-12">
              <h3 className="mb-6 text-center text-lg font-bold text-white">Explore Other Industries</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {industries
                  .filter(ind => ind.slug !== industry.slug)
                  .slice(0, 6)
                  .map(ind => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                      <span className="inline-flex cursor-pointer items-center rounded-full border border-white/40 px-3 py-1 text-sm text-white transition-colors hover:bg-white hover:text-brand">
                        {ind.shortName}
                      </span>
                    </Link>
                  ))}
                <Link href="/industries">
                  <span className="inline-flex cursor-pointer items-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand">
                    View All
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
