/** Shared service card copy — homepage ServicesSection and /services hub. */
export const serviceCards = [
  {
    id: 'seo-services',
    title: 'SEO Services',
    subtitle: 'Technical SEO + Content Strategy',
    hubSubtitle: 'Technical & content optimization',
    description:
      'Comprehensive SEO that combines technical excellence with content strategy. Site audits, keyword research, and ongoing optimization for sustainable organic growth.',
    features: ['Technical SEO audits', 'Keyword research', 'Content optimization', 'Backlink strategy'],
    price: 'From $1,500 setup + $500/mo.',
    href: '/seo-services',
    accent: 'blue',
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    subtitle: 'Dominate Your Local Market',
    hubSubtitle: 'Dominate local search',
    description:
      'Get found by customers in Volusia & Flagler Counties. Google Business Profile optimization, local citations, and review management for local businesses.',
    features: ['Google Business Profile', 'Local citations', 'Review management', 'Map pack rankings'],
    price: 'From $1,500 setup + $500/mo.',
    href: '/local-seo',
    accent: 'green',
  },
  {
    id: 'geo-optimization',
    title: 'GEO Optimization',
    subtitle: 'AI-search visibility — built into every SEO plan.',
    hubSubtitle: 'AI search ready',
    description:
      'Prepare for the future of search. Optimize your content for AI assistants, ChatGPT, and generative search engines that are changing how people find businesses.',
    features: ['AI search optimization', 'Answer Engine Optimization', 'Structured data', 'Entity optimization'],
    price: '',
    href: '/geo-optimization',
    accent: 'purple',
  },
  {
    id: 'ecommerce-seo',
    title: 'E-commerce SEO',
    subtitle: 'Grow Your Online Store',
    hubSubtitle: 'Grow your online store',
    description:
      'Drive organic traffic and sales for Shopify, WooCommerce, and marketplace stores. Product optimization, technical SEO, and conversion strategies.',
    features: ['Product page optimization', 'Technical e-commerce SEO', 'Marketplace optimization', 'Conversion optimization'],
    price: '$1,500 - $3,000',
    href: '/ecommerce-seo',
    accent: 'fuchsia',
  },
  {
    id: 'local-lead-generation',
    title: 'Local Lead Generation',
    subtitle: 'Ads That Deliver Leads',
    hubSubtitle: 'Ads that deliver leads',
    description:
      'Google Local Service Ads, Search Ads, and Facebook campaigns for home services and professional services. Pay for leads, not clicks.',
    features: ['Google Local Service Ads', 'Search campaigns', 'Facebook lead ads', 'Call tracking'],
    price: '$500/month',
    href: '/local-lead-generation',
    accent: 'orange',
  },
  {
    id: 'custom-tools-automation',
    title: 'Custom Tools & Automation',
    subtitle: 'Marketing Technology Built for You',
    hubSubtitle: 'Built for your business',
    description:
      'Custom SEO tools, reporting dashboards, lead generation systems, and workflow automation designed specifically for your business needs.',
    features: ['SEO automation tools', 'Custom dashboards', 'Lead systems', 'Workflow automation'],
    price: 'From $2,500 setup + $750/mo.',
    href: '/custom-tools-automation',
    accent: 'teal',
  },
] as const;

export type ServiceCardId = (typeof serviceCards)[number]['id'];
