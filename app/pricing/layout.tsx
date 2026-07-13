import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Pricing — Simple, Transparent, No Lock-Ins',
  description: 'Flat setup fees and clear monthly rates. No long-term lock-ins, no surprise invoices. See exactly what you get and what it costs.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/pricing',
  },
  openGraph: {
    title: 'SEO Pricing — Simple, Transparent, No Lock-Ins',
    description: 'Flat setup fees and clear monthly rates. No long-term lock-ins, no surprise invoices. See exactly what you get and what it costs.',
    url: 'https://aiogrowthseo.com/pricing',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
