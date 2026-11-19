'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { Button } from '@/components/ui/button';
import {
  MapPin, CheckCircle, ArrowRight, Phone, Star, Target, Search, Globe, Sparkles,
} from 'lucide-react';
import { Location, locations } from '@/data/locations';
import LocationAreaSchema from '@/components/schema/LocationAreaSchema';
import LocationMap from '@/components/LocationMap';
import { testimonials } from '@/data/clientTestimonials';
import OrangeUnderline from '../../components/brand/OrangeUnderline';
import ServiceFaq from '../../components/service/ServiceFaq';
import type { ReactNode } from 'react';

interface LocationPageProps {
  location: Location;
}

function LinkedProse({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <Link key={key} href={match[2]} className="text-brand hover:underline">
        {match[1]}
      </Link>,
    );
    key += 1;
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}

const socialProofQuotes = testimonials.slice(0, 2);

export default function LocationPage({ location }: LocationPageProps) {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog(`${location.city} Marketing Audit`);

  const services = [
    { name: 'Local SEO', description: `Dominate ${location.city} search results`, icon: Search, href: '/services/local-seo' },
    { name: 'Google Business Profile', description: 'Optimize your local presence', icon: MapPin, href: '/services/local-seo' },
    { name: 'Content Marketing', description: 'Local-focused content strategy', icon: Globe, href: '/services/search-engine-optimization' },
    { name: 'Lead Generation', description: 'Targeted local campaigns', icon: Target, href: '/services/local-lead-generation' },
    { name: 'GEO Optimization', description: 'Get cited in AI search answers', icon: Sparkles, href: '/services/geo-optimization' },
  ];

  const nearbyPages = location.nearbyAreas.flatMap((name) => {
    const match = locations.find((entry) => entry.city === name);
    return match ? [match] : [];
  });

  const faqItems = (location.faqs ?? [
    {
      question: `Do you specialize in ${location.city} marketing?`,
      answer: `Yes! We have deep local knowledge of ${location.city} and ${location.region}. We understand the local market, demographics, and what drives business success in this area.`,
    },
    {
      question: `What industries do you serve in ${location.city}?`,
      answer: `We work with all types of local businesses in ${location.city} including home services, healthcare, real estate, restaurants, retail, and professional services. Our strategies are customized for each industry.`,
    },
    {
      question: 'How quickly can I see results?',
      answer: `For local SEO in ${location.city}, most clients see improvements within 30-90 days. Paid advertising can generate leads within days. We provide clear timelines based on your specific goals.`,
    },
  ]).map((faq, index) => ({
    question: faq.question,
    answer:
      index === 2 && !location.faqs ? (
        <>
          For{' '}
          <Link href="/services/local-seo" className="text-brand hover:underline">local SEO</Link>{' '}
          in {location.city}, most clients see improvements within 30-90 days. Paid advertising
          can generate leads within days. We provide clear timelines based on your specific goals.
        </>
      ) : (
        <LinkedProse text={faq.answer} />
      ),
  }));

  return (
    <div className="bg-paper">
      <LocationAreaSchema
        city={location.city}
        description={location.seo.metaDescription}
        pageUrl={`https://aiogrowthseo.com/areas-we-serve/${location.slug}`}
        datePublished={location.datePublished}
        dateModified={location.dateModified}
      />
      <PageBreadcrumb
        items={[
          { label: "Areas We Serve", href: "/areas-we-serve" },
          {
            label: location.seo.metaTitle.split('|')[0].trim(),
            href: `/areas-we-serve/${location.slug}`,
            current: true,
          },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-paper bg-waves px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            {location.isHomeBase && (
              <p className="mb-6 inline-flex items-center text-[15px] font-semibold text-pen-text">
                <MapPin className="mr-2 h-4 w-4" />
                Home Base Location
              </p>
            )}

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
              {location.heroHeadline ? (
                <>
                  {location.heroHeadline}{' '}
                  {location.heroTagline && (
                    <OrangeUnderline>{location.heroTagline}</OrangeUnderline>
                  )}
                </>
              ) : (
                <>
                  {location.city} <OrangeUnderline>{location.tagline}</OrangeUnderline>
                </>
              )}
            </h1>

            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-navy/70">
              {location.description}
            </p>

            {location.supplementalCopy && (
              <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-navy/70">
                {location.slug === 'holly-hill' ? (
                  <>
                    Holly Hill digital marketing should speak to families and retirees in a close-knit community, not copy a metro-wide Daytona playbook. When you need broader search coverage across the beach market, work with our{' '}
                    <Link href="/" className="text-brand underline hover:text-brand/80">
                      Daytona Beach SEO company
                    </Link>{' '}
                    on the homepage for Volusia-wide visibility.
                  </>
                ) : (
                  location.supplementalCopy
                )}
              </p>
            )}

            <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Target className="mr-2 h-5 w-5" />
                Get {location.city} Marketing Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService(`${location.city} Consultation`);
                  openDialog();
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 text-center md:grid-cols-4">
              {location.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="p-4">
                  <CheckCircle className="mx-auto mb-2 h-8 w-8 text-brand" />
                  <p className="text-sm font-medium text-navy">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-hairline bg-cream px-4 py-6">
        <div className="container mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex shrink-0 items-center justify-center gap-1" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-sun text-sun" />
            ))}
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {socialProofQuotes.map((quote) => (
              <blockquote key={quote.name} className="text-sm leading-snug text-navy/70">
                <p className="line-clamp-2">&ldquo;{quote.content}&rdquo;</p>
                <footer className="mt-1 text-xs font-medium text-navy">
                  {quote.name}
                  <span className="font-normal text-navy/60"> - {quote.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <Link
            href="/results"
            className="inline-flex shrink-0 items-center justify-center text-sm font-semibold text-brand hover:underline"
          >
            View case studies
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {location.localContent && location.localContent.length > 0 && (
        <section className="bg-paper px-4 py-20">
          <div className="container mx-auto max-w-4xl space-y-12">
            {location.localContent.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{section.heading}</h2>
                <div className="space-y-4 text-lg leading-relaxed text-navy/75">
                  {section.body.split(/\n\n+/).map((paragraph, index) => (
                    <p key={index}>
                      <LinkedProse text={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services */}
      <section className="bg-band px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              {location.city} <OrangeUnderline>Marketing Services</OrangeUnderline>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.name} href={service.href} className="group block border-t-2 border-hairline pt-5">
                  <IconComponent className="mb-3 h-8 w-8 text-brand" />
                  <h3 className="mb-2 font-bold text-navy group-hover:text-brand group-hover:underline">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy/70">{service.description}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Serving from Daytona Beach */}
      <section className="bg-paper px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Serving {location.city} from <OrangeUnderline>Daytona Beach</OrangeUnderline>
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            {location.slug !== 'debary' && (
              <LocationMap city={location.city} />
            )}
            <p className={`text-center text-navy/70 ${location.slug !== 'debary' ? 'mt-4' : ''}`}>
              Based in Daytona Beach, serving {location.city} and all of Volusia &amp; Flagler Counties.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <h3 className="mb-6 text-center text-xl font-bold text-navy">Local SEO resources</h3>
            <ul className="space-y-3 text-center">
              <li>
                <Link href="/blog/how-to-rank-daytona-beach-map-pack" className="text-brand hover:underline">
                  how to rank in the local map pack
                </Link>
              </li>
              <li>
                <Link href="/blog/why-volusia-hvac-businesses-buried-google" className="text-brand hover:underline">
                  why local businesses get buried on Google
                </Link>
              </li>
              <li>
                <Link href="/blog/local-seo-hvac-plumbing-volusia-county" className="text-brand hover:underline">
                  local SEO for home-service businesses
                </Link>
              </li>
            </ul>
          </div>

          {nearbyPages.length > 0 && (
            <div className="mt-12">
              <h3 className="mb-6 text-center text-xl font-bold text-navy">Also serving nearby</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyPages.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas-we-serve/${area.slug}`}
                    className="inline-flex items-center rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-brand hover:text-brand"
                  >
                    {area.city}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {location.preFaqSection && (
        <section className="bg-paper px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{location.preFaqSection.heading}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-navy/75">
              {location.preFaqSection.body.split(/\n\n+/).map((paragraph, index) => (
                <p key={index}>
                  <LinkedProse text={paragraph} />
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <ServiceFaq
        faqs={faqItems}
        heading={`${location.city} Marketing FAQs`}
        note={`Questions about marketing in ${location.city}? The assistant in the corner can answer anything else.`}
      />

      {/* CTA */}
      <section className="bg-brand bg-waves-light px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ready to Grow Your {location.city} Business?
          </h2>
          <p className="mb-10 text-lg text-white/85">
            Get a free marketing audit tailored for {location.city}
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="px-8 py-4 text-lg"
            onClick={() => openDialog()}
          >
            <Target className="mr-2 h-5 w-5" />
            Get My Free Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={`${location.city} Marketing Consultation`}
        description={`Let's discuss how to grow your ${location.city} business with local marketing expertise.`}
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </div>
  );
}
