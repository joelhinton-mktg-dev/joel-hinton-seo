import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for React
  reactStrictMode: true,

  // Skip TypeScript errors during migration (to be enabled later)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Skip ESLint errors during migration (to be enabled later)
  eslint: {
    ignoreDuringBuilds: true,
  },


  // Trailing slashes (match current URL structure - no trailing slashes)
  trailingSlash: false,

  // Compress responses
  compress: true,

  // Output standalone for optimal deployment
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aiogrowthseo.com',
      },
    ],
  },

  // Webpack configuration to resolve src/ imports
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },

  async redirects() {
    return [
      // --- Service page migrations (flat → /services/[slug]) ---
      { source: '/seo-services', destination: '/services/search-engine-optimization', permanent: true },
      { source: '/seo-services/', destination: '/services/search-engine-optimization', permanent: true },
      { source: '/local-seo', destination: '/services/local-seo', permanent: true },
      { source: '/local-seo/', destination: '/services/local-seo', permanent: true },
      { source: '/geo-optimization', destination: '/services/geo-optimization', permanent: true },
      { source: '/geo-optimization/', destination: '/services/geo-optimization', permanent: true },
      { source: '/local-lead-generation', destination: '/services/local-lead-generation', permanent: true },
      { source: '/local-lead-generation/', destination: '/services/local-lead-generation', permanent: true },
      { source: '/ecommerce-seo', destination: '/services/ecommerce-seo', permanent: true },
      { source: '/ecommerce-seo/', destination: '/services/ecommerce-seo', permanent: true },
      { source: '/custom-tools-automation', destination: '/services/custom-tools-automation', permanent: true },
      { source: '/custom-tools-automation/', destination: '/services/custom-tools-automation', permanent: true },
      { source: '/florida-seo-services', destination: '/areas-we-serve', permanent: true },
      { source: '/florida-seo-services/', destination: '/areas-we-serve', permanent: true },

      // --- Location page migrations (flat → /areas-we-serve/[slug]) ---
      { source: '/daytona-beach-digital-marketing', destination: '/areas-we-serve/daytona-beach', permanent: true },
      { source: '/daytona-beach-digital-marketing/', destination: '/areas-we-serve/daytona-beach', permanent: true },
      { source: '/port-orange-marketing', destination: '/areas-we-serve/port-orange', permanent: true },
      { source: '/port-orange-marketing/', destination: '/areas-we-serve/port-orange', permanent: true },
      { source: '/ormond-beach-seo', destination: '/areas-we-serve/ormond-beach', permanent: true },
      { source: '/ormond-beach-seo/', destination: '/areas-we-serve/ormond-beach', permanent: true },
      { source: '/palm-coast-marketing', destination: '/areas-we-serve/palm-coast', permanent: true },
      { source: '/palm-coast-marketing/', destination: '/areas-we-serve/palm-coast', permanent: true },
      { source: '/new-smyrna-beach-marketing', destination: '/areas-we-serve/new-smyrna-beach', permanent: true },
      { source: '/new-smyrna-beach-marketing/', destination: '/areas-we-serve/new-smyrna-beach', permanent: true },
      { source: '/holly-hill-digital-marketing', destination: '/areas-we-serve/holly-hill', permanent: true },
      { source: '/holly-hill-digital-marketing/', destination: '/areas-we-serve/holly-hill', permanent: true },
      { source: '/debary-digital-marketing', destination: '/areas-we-serve/debary', permanent: true },
      { source: '/debary-digital-marketing/', destination: '/areas-we-serve/debary', permanent: true },
      { source: '/sanford-seo-services', destination: '/areas-we-serve/sanford', permanent: true },
      { source: '/sanford-seo-services/', destination: '/areas-we-serve/sanford', permanent: true },

      // --- Alias / variant redirects (single hop) ---
      { source: '/agentic-seo', destination: '/services/agentic-seo', permanent: true },
      { source: '/agentic-seo/', destination: '/services/agentic-seo', permanent: true },
      { source: '/services/seo', destination: '/services/search-engine-optimization', permanent: true },
      { source: '/services/seo-services', destination: '/services/search-engine-optimization', permanent: true },
      { source: '/services/geo', destination: '/services/geo-optimization', permanent: true },
      { source: '/geo', destination: '/services/geo-optimization', permanent: true },
      { source: '/locations/:slug', destination: '/areas-we-serve/:slug', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-of-service', destination: '/terms', permanent: true },
      { source: '/free-seo-audit', destination: '/lp/free-seo-audit', permanent: true },
      { source: '/free-audit', destination: '/lp/free-seo-audit', permanent: true },
      { source: '/feed', destination: '/feed.xml', permanent: true },
      { source: '/rss', destination: '/feed.xml', permanent: true },
      { source: '/rss.xml', destination: '/feed.xml', permanent: true },
    ];
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
