import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO Services — Volusia & Flagler County',
  description: 'Hyper-local SEO for Daytona Beach, Ormond Beach, Port Orange, Palm Coast, and surrounding communities. We know this market.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/areas-we-serve',
  },
  openGraph: {
    title: 'Local SEO Services — Volusia & Flagler County',
    description: 'Hyper-local SEO for Daytona Beach, Ormond Beach, Port Orange, Palm Coast, and surrounding communities. We know this market.',
    url: 'https://aiogrowthseo.com/areas-we-serve',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
