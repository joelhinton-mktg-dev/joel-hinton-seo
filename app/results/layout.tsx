import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Real SEO Results from Real Local Clients',
    template: '%s | AIO Growth SEO',
  },
  description: 'See how local service businesses in Volusia County grew their search visibility, calls, and booked jobs with AIO Growth SEO.',
  alternates: {
    canonical: 'https://aiogrowthseo.com/results',
  },
  openGraph: {
    title: 'Real SEO Results from Real Local Clients',
    description: 'See how local service businesses in Volusia County grew their search visibility, calls, and booked jobs with AIO Growth SEO.',
    url: 'https://aiogrowthseo.com/results',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
