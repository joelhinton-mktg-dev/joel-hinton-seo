import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Psychology-Driven SEO & Marketing Insights',
  description:
    'Expert insights on SEO psychology, conversion optimization, AI search visibility, and growth marketing from AIO Growth SEO.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://aiogrowthseo.com/blog',
    types: {
      'application/rss+xml': [
        { url: 'https://aiogrowthseo.com/feed.xml', title: 'AIO Growth SEO Blog RSS' },
      ],
    },
  },
  openGraph: {
    title: 'Blog',
    description:
      'Expert insights on SEO psychology, conversion optimization, AI search visibility, and growth marketing.',
    url: 'https://aiogrowthseo.com/blog',
    type: 'website',
    siteName: 'AIO Growth SEO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog',
    description:
      'Expert insights on SEO psychology, conversion optimization, AI search visibility, and growth marketing.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
