import type { Metadata } from 'next';

const TITLE = 'GEO Optimization for Local Businesses: Pricing';
const DESCRIPTION =
  'The Answer Engine: $2,500 build + $1,500/mo, 90 days then month-to-month, with a 90-day AI citation guarantee. Get cited in ChatGPT and Google AI.';
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
