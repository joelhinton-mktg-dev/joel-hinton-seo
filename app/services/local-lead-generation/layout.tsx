import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Lead Generation — Validated in 6–8 Weeks',
  description: 'A validated ad funnel and landing page for local service businesses in Volusia County. We test before you spend. Setup in 6–8 weeks. No long-term contract.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services/local-lead-generation',
  },
  openGraph: {
    title: 'Local Lead Generation — Validated in 6–8 Weeks',
    description: 'A validated ad funnel and landing page for local service businesses in Volusia County. We test before you spend. Setup in 6–8 weeks. No long-term contract.',
    url: 'https://aiogrowthseo.com/services/local-lead-generation',
    type: 'website',
    modifiedTime: '2026-10-03T10:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Lead Generation — Validated in 6–8 Weeks',
    description: 'A validated ad funnel and landing page for local service businesses in Volusia County. We test before you spend. Setup in 6–8 weeks. No long-term contract.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
