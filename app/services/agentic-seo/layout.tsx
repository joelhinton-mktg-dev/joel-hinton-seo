import type { Metadata } from 'next';
import { agenticOffer } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Agentic SEO Site',
  description:
    'An AI-ready website rebuild with a self-improving engine that reads search, funnel, and AI-visibility data and gets better every cycle.',
  alternates: {
    canonical: `https://aiogrowthseo.com${agenticOffer.canonicalPath}`,
  },
};

export default function AgenticSeoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
