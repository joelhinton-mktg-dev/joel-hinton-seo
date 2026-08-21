import type { Metadata } from 'next';
import { agenticFaqs, agenticOffer } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'AI SEO Services — Sites That Improve Themselves',
  description:
    'AI SEO services with transparent pricing: an agentic website that reads your search, funnel, and AI-visibility data, then improves itself every cycle. From $2,500.',
  alternates: {
    canonical: `https://aiogrowthseo.com${agenticOffer.canonicalPath}`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: agenticFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function AgenticSeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
