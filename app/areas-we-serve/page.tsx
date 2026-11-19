'use client';

import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';

import Link from 'next/link';
import { MapPin, Clock, Phone, Mail, CheckCircle, ArrowRight, Home, Users, Waves, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import OrangeUnderline from '../../components/brand/OrangeUnderline';

interface CommunityCard {
  name: string;
  county: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  homeBase?: boolean;
  bullets?: string[];
}

const coastalCommunities: CommunityCard[] = [
  {
    name: 'Daytona Beach',
    county: 'Volusia County',
    description: 'Motorsports capital with NASCAR culture, beach tourism, and vibrant local business community.',
    tags: ['NASCAR Events', 'Beach Tourism', 'Bike Week'],
    href: '/areas-we-serve/daytona-beach',
    linkLabel: 'Daytona Beach Services',
    homeBase: true,
  },
  {
    name: 'Ormond Beach',
    county: 'Volusia County',
    description: 'Upscale coastal community with historic downtown, golf courses, and affluent professionals.',
    tags: ['Historic Downtown', 'Golf & Leisure', 'Upscale Dining'],
    href: '/areas-we-serve/ormond-beach',
    linkLabel: 'Ormond Beach Services',
  },
  {
    name: 'New Smyrna Beach',
    county: 'Volusia County',
    description: 'Premier surf town with arts district, tourism businesses, and authentic beach lifestyle.',
    tags: ['Surf Culture', 'Flagler Avenue', 'Art Galleries'],
    href: '/areas-we-serve/new-smyrna-beach',
    linkLabel: 'New Smyrna Beach Services',
  },
  {
    name: 'Palm Coast',
    county: 'Flagler County',
    description: "Florida's fastest-growing city with young families, excellent schools, and booming local economy.",
    tags: ['Family Community', 'Top Schools', 'Rapid Growth'],
    href: '/areas-we-serve/palm-coast',
    linkLabel: 'Palm Coast Services',
  },
  {
    name: 'Flagler Beach',
    county: 'Flagler County',
    description: 'Old Florida on A1A - independent restaurants, surf shops, and service businesses with a walkable downtown.',
    tags: ['A1A Oceanfront', 'Independent', 'Palm Coast Spillover'],
    href: '/areas-we-serve/flagler-beach',
    linkLabel: 'Flagler Beach Services',
  },
  {
    name: 'Port Orange',
    county: 'Volusia County',
    description: 'Established residential community with loyal families, Dunlawton corridor, and strong local businesses.',
    tags: ['Family Loyalty', 'Dunlawton Corridor', 'Established'],
    href: '/areas-we-serve/port-orange',
    linkLabel: 'Port Orange Services',
  },
  {
    name: 'Holly Hill',
    county: 'Volusia County',
    description: 'Tight-knit small town community with family businesses, retirees, and strong neighborhood loyalty.',
    tags: ['Small Town', 'Family Business', 'Community Trust'],
    href: '/areas-we-serve/holly-hill',
    linkLabel: 'Holly Hill Services',
  },
];

const inlandCommunities: CommunityCard[] = [
  {
    name: 'DeLand / West Volusia',
    county: 'Volusia County',
    description: 'Historic downtown charm with Stetson University, antique shops, and growing professional services.',
    tags: ['Historic Downtown', 'Stetson University', 'Antiques'],
    href: '/areas-we-serve/deland',
    linkLabel: 'DeLand Services',
    bullets: [
      'Downtown retail & restaurants',
      'Professional services',
      'University community',
      'Historic preservation businesses',
    ],
  },
  {
    name: 'DeBary',
    county: 'Volusia County',
    description: 'Suburban family community near the St. Johns River with local restaurants, medical offices, and services.',
    tags: ['Family Community', 'Local Services', 'Suburban'],
    href: '/areas-we-serve/debary',
    linkLabel: 'DeBary Services',
  },
  {
    name: 'Sanford',
    county: 'Seminole County',
    description: 'Historic downtown revival with antique shops, professional services, and growing family community.',
    tags: ['Historic Revival', 'Antique District', 'Professional'],
    href: '/areas-we-serve/sanford',
    linkLabel: 'Sanford Services',
  },
  {
    name: 'Central Florida',
    county: 'I-4 Corridor',
    description: 'Hub for the Central Florida expansion - Volusia and Flagler out to Seminole, Orange, and Lake Counties.',
    tags: ['I-4 Corridor', 'Sanford Live', 'Orlando Next'],
    href: '/areas-we-serve/central-florida',
    linkLabel: 'Central Florida Hub',
  },
];

function CommunityCardBlock({ community }: { community: CommunityCard }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-hairline bg-cream p-6 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-wide text-pen-text">{community.county}</p>
        {community.homeBase && (
          <span className="rounded-full bg-pen px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Home Base
          </span>
        )}
      </div>
      <h3 className="mb-3 text-xl font-extrabold tracking-tight text-navy">{community.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-navy/70">{community.description}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {community.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-hairline bg-white px-2.5 py-1 text-xs text-navy/70">
            {tag}
          </span>
        ))}
      </div>
      {community.bullets && (
        <div className="mb-4 space-y-2 text-xs text-navy/70">
          {community.bullets.map((bullet) => (
            <p key={bullet}>• {bullet}</p>
          ))}
        </div>
      )}
      <div className="mt-auto border-t border-hairline pt-4">
        <Button variant="outline" size="sm" asChild className="w-full">
          <Link href={community.href}>
            {community.linkLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function AreasWeServePage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Local Consultation');

  return (
    <div className="bg-paper">
      <PageBreadcrumb
        items={[
          { label: "Areas We Serve", href: "/areas-we-serve", current: true }
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-paper bg-waves px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 inline-flex items-center text-[15px] font-semibold text-pen-text">
                <Home className="mr-2 h-4 w-4" />
                Volusia &amp; Flagler Counties
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-6xl">
                Hyper-Local Marketing for <OrangeUnderline>Central Florida&apos;s</OrangeUnderline> Coastal Communities
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-navy/70">
                I don&apos;t just serve Central Florida-I live here, work here, and know every neighborhood.
                From Ormond Beach&apos;s upscale charm to New Smyrna&apos;s surf culture, from Palm Coast&apos;s growing families
                to DeLand&apos;s historic downtown, I understand what makes each community unique.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="hero"
                  onClick={() => openDialog()}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Local Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    selectService('Community Marketing Strategy');
                    openDialog();
                  }}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Your Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise Overview */}
        <section className="bg-cream px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                  True Hyper-Local Expertise
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-navy/70">
                  Generic marketing agencies treat all Florida markets the same. I know that Ormond Beach families
                  shop differently than Port Orange residents, and Palm Coast newcomers have different needs than
                  established DeLand business owners. This hyper-local knowledge drives real results.
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                    <div>
                      <h4 className="font-semibold text-navy">Born &amp; Raised in Volusia County</h4>
                      <p className="text-sm text-navy/70">Deep roots and genuine understanding of our coastal communities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                    <div>
                      <h4 className="font-semibold text-navy">200+ Local Business Success Stories</h4>
                      <p className="text-sm text-navy/70">Proven track record with restaurants, medical practices, retail, and services</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                    <div>
                      <h4 className="font-semibold text-navy">Community-First Approach</h4>
                      <p className="text-sm text-navy/70">Marketing that builds trust and reflects local values</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                    <div>
                      <h4 className="font-semibold text-navy">Neighborhood-Level Targeting</h4>
                      <p className="text-sm text-navy/70">Precision marketing that reaches the right customers in the right communities</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" variant="outline" onClick={() => openDialog()}>
                  <Mail className="mr-2 h-5 w-5" />
                  Get Local Market Analysis
                </Button>
              </div>

              <div className="relative">
                <div className="rounded-3xl border border-hairline bg-band p-8">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 h-12 w-12 text-brand" />
                    <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-navy">Daytona Beach Home Base</h3>
                    <p className="mb-6 text-navy/70">
                      Centrally located to serve all of Volusia and Flagler Counties with
                      in-person meetings, local insights, and rapid response times.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <Clock className="mx-auto mb-1 h-6 w-6 text-brand" />
                        <p className="font-semibold text-navy">10 min to Ormond</p>
                      </div>
                      <div className="text-center">
                        <Clock className="mx-auto mb-1 h-6 w-6 text-brand" />
                        <p className="font-semibold text-navy">15 min to Port Orange</p>
                      </div>
                      <div className="text-center">
                        <Clock className="mx-auto mb-1 h-6 w-6 text-brand" />
                        <p className="font-semibold text-navy">25 min to NSB</p>
                      </div>
                      <div className="text-center">
                        <Clock className="mx-auto mb-1 h-6 w-6 text-brand" />
                        <p className="font-semibold text-navy">30 min to Palm Coast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Service Areas - Coastal Communities */}
        <section className="bg-paper px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Waves className="h-6 w-6 text-brand" />
                <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                  Coastal Communities
                </h2>
              </div>
              <p className="mx-auto max-w-3xl text-lg text-navy/70">
                Beach towns and waterfront communities with unique tourism, lifestyle, and local business dynamics.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coastalCommunities.map((community) => (
                <CommunityCardBlock key={community.name} community={community} />
              ))}
            </div>
          </div>
        </section>

        {/* Inland Communities */}
        <section className="bg-cream px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <TreePine className="h-6 w-6 text-brand" />
                <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                  Inland &amp; West Volusia Communities
                </h2>
              </div>
              <p className="mx-auto max-w-3xl text-lg text-navy/70">
                Historic downtowns, suburban growth, and family-oriented communities in West Volusia and Seminole County.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {inlandCommunities.map((community) => (
                <CommunityCardBlock key={community.name} community={community} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Hyper-Local Matters */}
        <section className="bg-band px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                Why Hyper-Local Marketing Works
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-navy/70">
                Generic statewide marketing wastes your budget on people who&apos;ll never become customers.
                Hyper-local expertise means every dollar targets the neighbors, families, and businesses in your community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-hairline bg-cream p-6 text-center shadow-sm">
                <MapPin className="mx-auto mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-3 text-xl font-extrabold tracking-tight text-navy">Neighborhood-Level Targeting</h3>
                <p className="mb-4 text-navy/70">
                  I know which neighborhoods shop locally, which areas are growing, and where your ideal customers live.
                </p>
                <ul className="space-y-2 text-sm text-navy/70">
                  <li>• ZIP code precision targeting</li>
                  <li>• Community-specific messaging</li>
                  <li>• Local search domination</li>
                  <li>• Neighborhood reputation building</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-hairline bg-cream p-6 text-center shadow-sm">
                <Users className="mx-auto mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-3 text-xl font-extrabold tracking-tight text-navy">Community Psychology</h3>
                <p className="mb-4 text-navy/70">
                  Understanding local values, seasonal patterns, and community events that drive purchasing decisions.
                </p>
                <ul className="space-y-2 text-sm text-navy/70">
                  <li>• Seasonal tourism patterns</li>
                  <li>• Local event tie-ins</li>
                  <li>• Community value alignment</li>
                  <li>• Trust-building strategies</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-hairline bg-cream p-6 text-center shadow-sm">
                <CheckCircle className="mx-auto mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-3 text-xl font-extrabold tracking-tight text-navy">Proven Local Results</h3>
                <p className="mb-4 text-navy/70">
                  200+ local businesses have grown with strategies built specifically for their community.
                </p>
                <ul className="space-y-2 text-sm text-navy/70">
                  <li>• Local business case studies</li>
                  <li>• Community referral networks</li>
                  <li>• Repeat customer focus</li>
                  <li>• Long-term partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand bg-waves-light px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Ready to Dominate Your Local Market?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/85">
              Get a free marketing audit tailored to your specific community. I&apos;ll show you exactly how to
              reach more local customers and build lasting relationships in your neighborhood.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => openDialog()}
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Local Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-brand"
                onClick={() => {
                  selectService('Community Marketing Analysis');
                  openDialog();
                }}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Community Analysis
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/75">
              Serving Volusia County, Flagler County, and Seminole County communities
            </p>
          </div>
        </section>
      </main>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Schedule Your Local Consultation"
        description="Let's discuss your local market opportunities and create a personalized marketing strategy for your community."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </div>
  );
}
