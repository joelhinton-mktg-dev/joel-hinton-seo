import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO Optimization — Get Found in AI Search',
  description: 'Generative Engine Optimization helps your business show up in AI-generated answers. Built for the way search actually works in 2026.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services/geo-optimization',
  },
  openGraph: {
    title: 'GEO Optimization — Get Found in AI Search',
    description: 'Generative Engine Optimization helps your business show up in AI-generated answers. Built for the way search actually works in 2026.',
    url: 'https://aiogrowthseo.com/services/geo-optimization',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
