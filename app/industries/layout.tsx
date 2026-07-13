import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO by Industry — Volusia County',
  description: 'Industry-specific SEO built around how your customers actually search. We work with HVAC, dental, legal, home services, and more.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/industries',
  },
  openGraph: {
    title: 'Local SEO by Industry — Volusia County',
    description: 'Industry-specific SEO built around how your customers actually search. We work with HVAC, dental, legal, home services, and more.',
    url: 'https://aiogrowthseo.com/industries',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
