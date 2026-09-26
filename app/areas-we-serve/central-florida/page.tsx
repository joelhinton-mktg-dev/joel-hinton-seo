'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Target } from 'lucide-react';
import LocationAreaSchema from '@/components/schema/LocationAreaSchema';
import LocationMap from '@/components/LocationMap';

const services = [
  {
    name: 'Local SEO',
    href: '/services/local-seo',
    description: 'map pack rankings and organic search for your city and service area',
  },
  {
    name: 'GEO Optimization',
    href: '/services/geo-optimization',
    description: 'getting cited in ChatGPT, Google AI Overviews, and voice search',
  },
  {
    name: 'Local Lead Generation',
    href: '/services/local-lead-generation',
    description: 'validated ad funnels for service area businesses',
  },
  {
    name: 'Agentic SEO',
    href: '/services/agentic-seo',
    description: 'websites that improve themselves',
  },
];

export default function CentralFloridaHubPage() {
  const { isOpen, selectedService, openDialog, closeDialog } = useContactDialog(
    'Central Florida Marketing Audit',
  );

  return (
    <>
      <LocationAreaSchema
        city="Central Florida"
        description="Local SEO and GEO optimization for Central Florida businesses — from Volusia and Flagler Counties into Orlando, Seminole, and Lake Counties. We help local businesses rank where their customers are searching."
        pageUrl="https://aiogrowthseo.com/areas-we-serve/central-florida"
        datePublished="2026-09-26T10:00:00Z"
        dateModified="2026-09-26T10:00:00Z"
      />
      <PageBreadcrumb
        items={[
          { label: 'Areas We Serve', href: '/areas-we-serve' },
          {
            label: 'Central Florida',
            href: '/areas-we-serve/central-florida',
            current: true,
          },
        ]}
      />

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Local SEO for Central Florida
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Local SEO and GEO optimization for Central Florida businesses — from Volusia and
              Flagler Counties into Orlando, Seminole, and Lake Counties. We help local
              businesses rank where their customers are searching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                <Target className="w-5 h-5 mr-2" />
                Get Central Florida Marketing Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Volusia and Flagler Are Our Core — Central Florida Is Where We&apos;re Growing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;re based in Daytona Beach and have built deep expertise in Volusia and Flagler
              Counties — Ormond Beach, Port Orange, Palm Coast, New Smyrna Beach, and the markets
              between them. That foundation is what makes the expansion into Central Florida work:
              we don&apos;t arrive cold. We arrive with seven months of ranking data, a content
              system that produces real local pages, and a methodology that&apos;s already moving
              positions for local service businesses on the coast.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Central Florida Is the Right Next Market
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The I-4 corridor from Daytona to Orlando connects two of the fastest-growing metros
              in Florida. Businesses in Sanford, Longwood, Altamonte Springs, and the greater
              Orlando market face a different competitive environment than Volusia — more agencies,
              more noise, and a local search landscape where the difference between position 3 and
              position 12 on the map pack is measurable in revenue. That&apos;s exactly the
              environment our approach was built for: technical foundations, real local content,
              and GEO optimization that gets businesses cited in AI-generated answers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services Available Across Central Florida
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The same services we run in Volusia and Flagler are available across Central Florida:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.name} href={service.href} className="block h-full group">
                <Card className="card-professional h-full transition-shadow group-hover:shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-primary group-hover:underline">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Markets We&apos;re Targeting</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We&apos;re expanding city by city, with real content for each market — not templated
            city-swaps. If your business is in one of the markets below and you want to be ahead of
            the expansion curve, reach out now.
          </p>
          <p className="text-lg font-semibold mb-4">Current and planned coverage:</p>
          <ul className="space-y-3 text-lg text-muted-foreground">
            <li>
              <Link href="/areas-we-serve/sanford" className="text-primary hover:underline">
                Sanford, FL
              </Link>{' '}
              — already serving
            </li>
            <li>Orlando — coming soon</li>
            <li>Winter Park — coming soon</li>
            <li>Altamonte Springs — coming soon</li>
            <li>Kissimmee — coming soon</li>
            <li>Lake Mary — coming soon</li>
          </ul>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Central Florida from <span className="gradient-text">Daytona Beach</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <LocationMap city="Central Florida" state="FL" zoom={8} />
            <p className="text-center text-muted-foreground mt-4">
              Based in Daytona Beach on the I-4 corridor. 45 minutes to Sanford, 60 minutes to
              Orlando.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-professional shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Ready to Grow Your Central Florida Business?
              </CardTitle>
              <CardDescription className="text-lg">
                Get a free marketing audit tailored for Central Florida
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
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
        title="Central Florida Marketing Consultation"
        description="Let's discuss how to grow your Central Florida business with local marketing expertise."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
