import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO Services — Volusia County, Florida',
  description: 'Get found first in Google Search and Google Maps. We build local authority for contractors, clinics, and professional services in Volusia County.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services/local-seo',
  },
  openGraph: {
    title: 'Local SEO Services — Volusia County, Florida',
    description: 'Get found first in Google Search and Google Maps. We build local authority for contractors, clinics, and professional services in Volusia County.',
    url: 'https://aiogrowthseo.com/services/local-seo',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
