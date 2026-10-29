import type { Metadata } from 'next';

const TITLE = 'GEO Optimization for Local Businesses: Pricing';
const DESCRIPTION =
  'GEO for Daytona Beach: $500/mo baseline inside SEO, or $1,500-$2,500/mo for the full GEO plan. Get cited in ChatGPT, Google AI, and Perplexity.';
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
