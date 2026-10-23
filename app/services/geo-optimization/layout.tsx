import type { Metadata } from 'next';

const TITLE = 'GEO Optimization for Local Businesses — AI Search Visibility';
const DESCRIPTION =
  'Get your Daytona Beach or Volusia County business cited in ChatGPT, Google AI Overviews, and Perplexity. GEO optimization built for local service businesses, not enterprise brands.';
const CANONICAL = 'https://aiogrowthseo.com/services/geo-optimization';
const DATE_MODIFIED = '2026-10-23T10:00:00Z';

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
