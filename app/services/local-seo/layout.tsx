import type { Metadata } from 'next';

const TITLE = 'Local SEO Services in Daytona Beach, FL | AIO Growth SEO';
const DESCRIPTION =
  'Local SEO for Daytona Beach and Volusia County businesses. Map pack rankings, GBP optimization, and content that gets you found. Month-to-month, no contracts.';
const CANONICAL = 'https://aiogrowthseo.com/services/local-seo';
const DATE_MODIFIED = '2026-11-07T10:00:00Z';

export const metadata: Metadata = {
  // TITLE already carries the brand suffix, so skip the root '%s | AIO Growth SEO' template.
  title: { absolute: TITLE },
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
