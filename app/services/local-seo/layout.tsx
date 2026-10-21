import type { Metadata } from 'next';

const TITLE = 'Local SEO Services in Daytona Beach, Florida — Volusia County';
const DESCRIPTION =
  'Local SEO for Daytona Beach and Volusia County businesses. Map pack rankings, GBP optimization, and content that gets you found. Month-to-month, no contracts.';
const CANONICAL = 'https://aiogrowthseo.com/services/local-seo';
const DATE_MODIFIED = '2026-10-21T10:00:00Z';

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

const localSeoPageSchema = {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoPageSchema) }}
      />
      {children}
    </>
  );
}
