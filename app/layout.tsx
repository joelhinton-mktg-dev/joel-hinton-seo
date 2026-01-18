import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Providers } from '../components/Providers';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aiogrowthseo.com'),
  title: {
    default: 'AIO Growth SEO | Central Florida Digital Marketing',
    template: '%s | AIO Growth SEO',
  },
  description: 'Psychology-driven digital marketing for Volusia & Flagler County businesses. Local SEO, lead generation, and custom automation tools that drive real results.',
  keywords: ['Central Florida SEO', 'Volusia County digital marketing', 'Flagler County SEO', 'local SEO', 'Daytona Beach marketing'],
  authors: [{ name: 'AIO Growth SEO' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiogrowthseo.com',
    siteName: 'AIO Growth SEO',
    title: 'AIO Growth SEO | Central Florida Digital Marketing',
    description: 'Psychology-driven digital marketing for Volusia & Flagler County businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIO Growth SEO | Central Florida Digital Marketing',
    description: 'Psychology-driven digital marketing for Volusia & Flagler County businesses.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased">
        <Providers>
          <Toaster />
          <Sonner />
          <Navigation />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
