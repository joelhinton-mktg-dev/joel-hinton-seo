import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce SEO That Drives Sales',
  description: 'Search optimization built around revenue, not rankings. We focus on the pages that convert and build authority where buyers are searching.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services/ecommerce-seo',
  },
  openGraph: {
    title: 'E-commerce SEO That Drives Sales',
    description: 'Search optimization built around revenue, not rankings. We focus on the pages that convert and build authority where buyers are searching.',
    url: 'https://aiogrowthseo.com/services/ecommerce-seo',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
