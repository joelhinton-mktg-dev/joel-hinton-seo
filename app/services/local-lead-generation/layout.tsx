import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Lead Generation — Validated in 6–8 Weeks',
  description: 'A tested ad and landing page that brings in real local leads — fast. We validate the funnel before you scale a dollar of ad spend.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services/local-lead-generation',
  },
  openGraph: {
    title: 'Local Lead Generation — Validated in 6–8 Weeks',
    description: 'A tested ad and landing page that brings in real local leads — fast. We validate the funnel before you scale a dollar of ad spend.',
    url: 'https://aiogrowthseo.com/services/local-lead-generation',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
