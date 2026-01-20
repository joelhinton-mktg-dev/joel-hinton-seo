import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free SEO Audit | AIO Growth SEO',
  description:
    'Get a free, comprehensive SEO audit that reveals why your competitors are outranking you. No strings attached—actionable insights delivered in 24 hours.',
  keywords: [
    'free SEO audit',
    'SEO analysis',
    'website audit',
    'local SEO audit',
    'competitor analysis',
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Free SEO Audit | AIO Growth SEO',
    description:
      'Discover why your competitors are outranking you with our free, comprehensive SEO audit.',
    type: 'website',
  },
};

export default function FreeSEOAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
