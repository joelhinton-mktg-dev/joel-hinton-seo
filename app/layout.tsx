import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import { Providers } from '../components/Providers';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import GoogleTagManager from '../components/GoogleTagManager';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aiogrowthseo.com'),
  title: {
    default: 'AIO Growth SEO — Central Florida Digital Marketing',
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
    title: 'AIO Growth SEO — Central Florida Digital Marketing',
    description: 'Psychology-driven digital marketing for Volusia & Flagler County businesses.',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        { url: 'https://aiogrowthseo.com/feed.xml', title: 'AIO Growth SEO Blog RSS' },
      ],
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIO Growth SEO — Central Florida Digital Marketing',
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
      <head>
        <Script
          src="https://news.google.com/swg/js/v1/publisher.js"
          strategy="beforeInteractive"
          data-preferred-sources-control="manual"
          {...{ 'preferred-sources-control': 'manual' }}
        />
        <Script id="preferred-sources-init" strategy="afterInteractive">
          {`
            (self.PREFERRED_SOURCE = self.PREFERRED_SOURCE
            || []).push(function(preferredSource) {
              preferredSource.init({
                theme: 'light',
                lang: 'en'
              });
              document.querySelectorAll(
                '.aio-preferred-source-btn'
              ).forEach(function(btn) {
                btn.setAttribute('data-aio-ps-bound', '1');
                btn.addEventListener('click', function() {
                  preferredSource.addPreferredSource();
                });
              });
              document.addEventListener('click', function(event) {
                var target = event.target;
                if (!target || !target.closest) return;
                var btn = target.closest('.aio-preferred-source-btn');
                if (btn && btn.getAttribute('data-aio-ps-bound') !== '1') {
                  preferredSource.addPreferredSource();
                }
              });
            });
          `}
        </Script>
      </head>
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
          <GoogleTagManager />
        </Providers>
      </body>
    </html>
  );
}
