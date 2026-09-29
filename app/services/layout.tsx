import type { Metadata } from 'next';

const SERVICES_DATE_MODIFIED = '2026-09-29T10:00:00Z';

export const metadata: Metadata = {
  title: {
    default: 'Digital Marketing Services for Local Businesses',
    template: '%s | AIO Growth SEO',
  },
  description: 'SEO, local search, GEO optimization, and lead generation for service businesses in Volusia County. Real work, real results, no fluff.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services',
  },
  openGraph: {
    title: 'Digital Marketing Services for Local Businesses',
    description: 'SEO, local search, GEO optimization, and lead generation for service businesses in Volusia County. Real work, real results, no fluff.',
    url: 'https://aiogrowthseo.com/services',
    type: 'website',
  },
};

const servicesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Local SEO & Digital Marketing Services for Volusia County Businesses',
  url: 'https://aiogrowthseo.com/services',
  dateModified: SERVICES_DATE_MODIFIED,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      {children}
    </>
  );
}
