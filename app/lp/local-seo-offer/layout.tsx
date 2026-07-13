import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO System — 50% Off Setup',
  description:
    'AI-powered local SEO system with human QA on every piece. Limited to 5 clients at 50% off setup. Month-to-month, no lock-in.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://aiogrowthseo.com/lp/local-seo-offer',
  },
  openGraph: {
    title: 'Local SEO System — 50% Off Setup',
    description:
      'AI-powered local SEO system with human QA on every piece. Limited to 5 clients at 50% off setup. Month-to-month, no lock-in.',
    images: ['/og/local-seo-offer.png'],
  },
};

export default function LocalSEOOfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
