import type { Metadata } from 'next';
import { geoOffer } from '@/data/pricing';

const TITLE = 'GEO Optimization for Local Businesses: Pricing';
const DESCRIPTION = `${geoOffer.offerName}: ${geoOffer.price}, ${geoOffer.term}, with a ${geoOffer.guarantee}. Get cited in ChatGPT and Google AI.`;
const CANONICAL = 'https://aiogrowthseo.com/services/geo-optimization';
const DATE_MODIFIED = '2026-10-28T10:00:00Z';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: 'website',
  },
};

const geoPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  url: CANONICAL,
  dateModified: DATE_MODIFIED,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoPageSchema) }}
      />
      {children}
    </>
  );
}
