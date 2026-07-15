import type { Metadata } from 'next';

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
