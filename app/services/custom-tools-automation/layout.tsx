import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Marketing Tools for Local Businesses',
  description: 'We build lightweight automation and custom tools that save time and give your marketing an edge competitors can\'t copy off the shelf.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services/custom-tools-automation',
  },
  openGraph: {
    title: 'Custom Marketing Tools for Local Businesses',
    description: 'We build lightweight automation and custom tools that save time and give your marketing an edge competitors can\'t copy off the shelf.',
    url: 'https://aiogrowthseo.com/services/custom-tools-automation',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
