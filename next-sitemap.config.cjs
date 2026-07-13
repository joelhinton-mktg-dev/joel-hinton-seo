/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aiogrowthseo.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  // Non-indexable / non-page assets and routes must stay out of the sitemap
  exclude: [
    '/404',
    '/feed.xml',
    '/icon.png',
    '/icon',
    '/apple-icon.png',
    '/apple-icon',
    '/opengraph-image',
    '/twitter-image',
    '/lp/free-seo-audit', // robots: noindex
    '/lp/local-seo-offer', // robots: noindex,nofollow
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
  },
};
