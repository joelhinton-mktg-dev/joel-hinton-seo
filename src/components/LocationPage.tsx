'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  MapPin, CheckCircle, ArrowRight, Phone, Star, Target, Search, Globe, Sparkles,
} from 'lucide-react';
import { Location, locations } from '@/data/locations';
import LocationAreaSchema from '@/components/schema/LocationAreaSchema';
import { testimonials } from '@/data/clientTestimonials';
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
      <Link key={key} href={match[2]} className="text-primary hover:underline">
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

const OFFICE_MAP_EMBED =
  'https://maps.google.com/maps?q=Daytona+Beach,+FL+32114&z=14&output=embed';

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

  return (
    <>
      <LocationAreaSchema
        city={location.city}
        description={location.seo.metaDescription}
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            {location.isHomeBase && (
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Home Base Location
              </Badge>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {location.heroHeadline ? (
                <>
                  {location.heroHeadline}{' '}
                  {location.heroTagline && (
                    <span className="gradient-text">{location.heroTagline}</span>
                  )}
                </>
              ) : (
                <>
                  {location.city} <span className="gradient-text">{location.tagline}</span>
                </>
              )}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              {location.description}
            </p>

            {location.supplementalCopy && (
              <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
                {location.slug === 'holly-hill' ? (
                  <>
                    Holly Hill digital marketing should speak to families and retirees in a close-knit community, not copy a metro-wide Daytona playbook. When you need broader search coverage across the beach market, work with our{' '}
                    <Link href="/" className="text-primary underline hover:text-primary/80">
                      Daytona Beach SEO company
                    </Link>{' '}
                    on the homepage for Volusia-wide visibility.
                  </>
                ) : (
                  location.supplementalCopy
                )}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Target className="w-5 h-5 mr-2" />
                Get {location.city} Marketing Audit
                <ArrowRight className="w-5 h-5 ml-2" />
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
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              {location.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="p-4">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-6 px-4 border-y border-slate-200 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex items-center justify-center gap-1 shrink-0" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
            ))}
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 min-w-0">
            {socialProofQuotes.map((quote) => (
              <blockquote key={quote.name} className="text-sm text-muted-foreground leading-snug">
                <p className="line-clamp-2">&ldquo;{quote.content}&rdquo;</p>
                <footer className="mt-1 text-xs font-medium text-foreground">
                  {quote.name}
                  <span className="text-muted-foreground font-normal"> — {quote.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <Link
            href="/results"
            className="shrink-0 text-sm font-semibold text-primary hover:underline inline-flex items-center justify-center"
          >
            View case studies
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {location.localContent && location.localContent.length > 0 && (
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl space-y-12">
            {location.localContent.map((section) => (
              <div key={section.heading}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.heading}</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
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
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {location.city} <span className="gradient-text">Marketing Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.name} href={service.href} className="block h-full group">
                  <Card className="card-professional h-full transition-shadow group-hover:shadow-md">
                    <CardContent className="p-6 text-center">
                      <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2 text-primary group-hover:underline">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Serving from Daytona Beach */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving {location.city} from <span className="gradient-text">Daytona Beach</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 aspect-[16/9]">
              <iframe
                title="AIO Growth SEO office in Daytona Beach, Florida"
                src={OFFICE_MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Based in Daytona Beach, serving {location.city} and all of Volusia &amp; Flagler Counties.
            </p>
          </div>

          {nearbyPages.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-center mb-6">Also serving nearby</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyPages.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas-we-serve/${area.slug}`}
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {area.city}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {location.city} Marketing FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left font-semibold">
                Do you specialize in {location.city} marketing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We have deep expertise in {location.city} and {location.region}. We understand the local market,
                demographics, and what drives business success in this area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left font-semibold">
                What industries do you serve in {location.city}?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We work with all types of local businesses in {location.city} including home services, healthcare,
                real estate, restaurants, retail, and professional services. Our strategies are customized for each industry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left font-semibold">
                How quickly can I see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For{' '}
                <Link href="/services/local-seo" className="text-primary hover:underline">local SEO</Link>{' '}
                in {location.city}, most clients see improvements within 30-90 days. Paid advertising
                can generate leads within days. We provide clear timelines based on your specific goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-professional shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Ready to Grow Your {location.city} Business?
              </CardTitle>
              <CardDescription className="text-lg">
                Get a free marketing audit tailored for {location.city}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Target className="w-5 h-5 mr-2" />
                Get My Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
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
    </>
  );
}
