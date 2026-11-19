'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target } from 'lucide-react';
import LocationAreaSchema from '@/components/schema/LocationAreaSchema';
import LocationMap from '@/components/LocationMap';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';

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
    <div className="bg-paper">
      <LocationAreaSchema
        city="Central Florida"
        description="Local SEO and GEO optimization for Central Florida businesses — from Volusia and Flagler Counties into Orlando, Seminole, and Lake Counties. We help local businesses rank where their customers are searching."
        pageUrl="https://aiogrowthseo.com/areas-we-serve/central-florida"
        datePublished="2026-09-26T10:00:00Z"
        dateModified="2026-11-07T10:00:00Z"
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

      <section className="bg-paper bg-waves px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
              Local SEO for Central Florida
            </h1>
            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-navy/70">
              Local SEO and GEO optimization for Central Florida businesses - from Volusia and
              Flagler Counties into Orlando, Seminole, and Lake Counties. We help local
              businesses rank where their customers are searching.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                <Target className="mr-2 h-5 w-5" />
                Get Central Florida Marketing Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-20">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Volusia and Flagler Are Our Core - Central Florida Is Where We&apos;re Growing
            </h2>
            <p className="text-lg leading-relaxed text-navy/75">
              We&apos;re based in Daytona Beach and have built deep expertise in Volusia and Flagler
              Counties - Ormond Beach, Port Orange, Palm Coast, New Smyrna Beach, and the markets
              between them. That foundation is what makes the expansion into Central Florida work:
              we don&apos;t arrive cold. We arrive with seven months of ranking data, a content
              system that produces real local pages, and a methodology that&apos;s already moving
              positions for local service businesses on the coast.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Why Central Florida Is the Right Next Market
            </h2>
            <p className="text-lg leading-relaxed text-navy/75">
              The I-4 corridor from Daytona to Orlando connects two of the fastest-growing metros
              in Florida. Businesses in Sanford, Longwood, Altamonte Springs, and the greater
              Orlando market face a different competitive environment than Volusia - more agencies,
              more noise, and a local search landscape where the difference between position 3 and
              position 12 on the map pack is measurable in revenue. That&apos;s exactly the
              environment our approach was built for: technical foundations, real local content,
              and{' '}
              <Link href="/services/geo-optimization" className="text-brand hover:underline">
                GEO optimization
              </Link>{' '}
              that gets businesses cited in AI-generated answers.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-navy/75">
              <Link href="/areas-we-serve/altamonte-springs" className="text-brand hover:underline">
                Altamonte Springs
              </Link>{' '}
              sits at the midpoint of the Sanford-to-Orlando corridor. It has high search volume,
              strong residential density, and a commercial strip that generates steady near-me
              searches across home services, medical, and professional categories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-band px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Services Available Across Central Florida
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-navy/70">
              The same services we run in Volusia and Flagler are available across Central Florida:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.name} href={service.href} className="group block border-t-2 border-hairline pt-5">
                <h3 className="mb-2 font-bold text-navy group-hover:text-brand group-hover:underline">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-navy/70">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">Markets We&apos;re Targeting</h2>
          <p className="mb-8 text-lg leading-relaxed text-navy/75">
            We&apos;re expanding city by city, with real content for each market - not templated
            city-swaps. If your business is in one of the markets below and you want to be ahead of
            the expansion curve, reach out now.
          </p>
          <p className="mb-4 text-lg font-semibold text-navy">Current and planned coverage:</p>
          <ul className="space-y-3 text-lg text-navy/75">
            <li>
              <Link href="/areas-we-serve/sanford" className="text-brand hover:underline">
                Sanford, FL
              </Link>{' '}
              - already serving
            </li>
            <li>Orlando - coming soon</li>
            <li>Winter Park - coming soon</li>
            <li>
              <Link href="/areas-we-serve/altamonte-springs" className="text-brand hover:underline">
                Altamonte Springs
              </Link>
              : now serving. A SunRail node and one of the I-4 corridor&apos;s most searched
              suburban markets, between Sanford and Orlando.
            </li>
            <li>Kissimmee - coming soon</li>
            <li>Lake Mary - coming soon</li>
          </ul>
        </div>
      </section>

      <section className="bg-paper px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Serving Central Florida from <OrangeUnderline>Daytona Beach</OrangeUnderline>
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <LocationMap city="Central Florida" state="FL" zoom={8} />
            <p className="mt-4 text-center text-navy/70">
              Based in Daytona Beach on the I-4 corridor. 45 minutes to Sanford, 60 minutes to
              Orlando.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand bg-waves-light px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ready to Grow Your Central Florida Business?
          </h2>
          <p className="mb-10 text-lg text-white/85">
            Get a free marketing audit tailored for Central Florida
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
            <Target className="mr-2 h-5 w-5" />
            Get My Free Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
    </div>
  );
}
