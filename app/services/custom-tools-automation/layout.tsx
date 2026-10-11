import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Marketing Tools for Local Businesses',
  description: 'Most marketing automation tools are built for everyone — which means they fit no one perfectly. We build custom marketing tools and automations specifically for your business. No monthly SaaS fees. No features you\'ll never use.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/services/custom-tools-automation',
  },
  openGraph: {
    title: 'Custom Marketing Tools for Local Businesses',
    description: 'Most marketing automation tools are built for everyone — which means they fit no one perfectly. We build custom marketing tools and automations specifically for your business. No monthly SaaS fees. No features you\'ll never use.',
    url: 'https://aiogrowthseo.com/services/custom-tools-automation',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
