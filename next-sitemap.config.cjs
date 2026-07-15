/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aiogrowthseo.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/404',
    '/feed.xml',
    '/icon.png',
    '/icon',
    '/apple-icon.png',
    '/apple-icon',
    '/opengraph-image',
    '/twitter-image',
    '/lp/free-seo-audit',
    '/lp/local-seo-offer',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    transformRobotsTxt: async (_, robotsTxt) => {
      const lines = robotsTxt.split('\n').filter((line) => {
        const trimmed = line.trim();
        if (/^Host:/i.test(trimmed)) return false;
        if (trimmed === '# Host') return false;
        return true;
      });
      return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
    },
  },
};
