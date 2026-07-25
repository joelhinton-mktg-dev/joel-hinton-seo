import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { COPYRIGHT_YEAR } from '@/data/site';

export const metadata: Metadata = {
  title: 'Free Competitive Gap Analysis',
  description:
    'See where competitors beat you in Google organic, the local map pack, and AI answers like ChatGPT. Free Competitive Gap Analysis from AIO Growth SEO.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aiogrowthseo.com/gap-analysis',
  },
  openGraph: {
    title: 'Free Competitive Gap Analysis',
    description:
      'See where competitors beat you in Google organic, the local map pack, and AI answers. Free and specific to your business.',
    url: 'https://aiogrowthseo.com/gap-analysis',
    type: 'website',
  },
};

export default function GapAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lp-layout">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AIO</span>
            </div>
            <span className="font-semibold text-slate-900">Growth SEO</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Main site
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">AIO</span>
              </div>
              <span className="text-sm text-slate-400">
                &copy; {COPYRIGHT_YEAR} AIO Growth SEO
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Main Site
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
