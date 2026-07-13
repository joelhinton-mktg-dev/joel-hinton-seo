import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services That Drive Real Organic Growth',
  description: 'Technical SEO combined with content strategy built for service businesses. No bloated retainers — just the work that actually moves rankings.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services/search-engine-optimization',
  },
  openGraph: {
    title: 'SEO Services That Drive Real Organic Growth',
    description: 'Technical SEO combined with content strategy built for service businesses. No bloated retainers — just the work that actually moves rankings.',
    url: 'https://aiogrowthseo.com/services/search-engine-optimization',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
