import { agenticOffer } from './pricing';

/** Flagship card for /services hub only — not shown on homepage. */
export const agenticServiceCard = {
  id: 'agentic-seo',
  title: agenticOffer.cardTitle,
  subtitle: agenticOffer.cardSubtitle,
  description: agenticOffer.cardDescription,
  hubDescription:
    'A website that improves itself. Automated SEO workflows that monitor, diagnose, and act — built for businesses that want to grow without adding headcount.',
  price: agenticOffer.cardPrice,
  href: agenticOffer.canonicalPath,
} as const;

/** Shared service card copy — homepage ServicesSection and /services hub. */
export const serviceCards = [
  {
    id: 'seo-services',
    title: 'SEO Services',
    subtitle: 'Technical SEO + Content Strategy',
    hubSubtitle: 'Technical & content optimization',
    description:
      'Comprehensive SEO that combines technical excellence with content strategy. Site audits, keyword research, and ongoing optimization for sustainable organic growth.',
    hubDescription:
      'Technical SEO, content strategy, and on-page optimization for businesses that want sustainable organic growth beyond just local search.',
    features: ['Technical SEO audits', 'Keyword research', 'Content optimization', 'Backlink strategy'],
    price: 'From $1,500 setup + $500/mo.',
    href: '/services/search-engine-optimization',
    accent: 'blue',
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    subtitle: 'Dominate Your Local Market',
    hubSubtitle: 'Dominate local search',
    description:
      'Get found by customers in Volusia & Flagler Counties. Google Business Profile optimization, local citations, and review management for local businesses.',
    hubDescription:
      'Get found in Google Search and Google Maps when local buyers are looking for what you offer. We handle the technical foundation, Google Business Profile, citations, and content that moves map pack rankings.',
    features: ['Google Business Profile', 'Local citations', 'Review management', 'Map pack rankings'],
    price: 'From $1,500 setup + $500/mo.',
    href: '/services/local-seo',
    accent: 'green',
  },
  {
    id: 'geo-optimization',
    title: 'GEO Optimization',
    subtitle: 'AI-search visibility — built into every SEO plan.',
    hubSubtitle: 'AI search ready',
    description:
      'Prepare for the future of search. Optimize your content for AI assistants, ChatGPT, and generative search engines that are changing how people find businesses.',
    hubDescription:
      'Show up in AI-generated answers from ChatGPT, Google AI Overviews, and voice search. Generative Engine Optimization is how you get cited — not just ranked.',
    features: ['AI search optimization', 'Answer Engine Optimization', 'Structured data', 'Entity optimization'],
    price: '',
    href: '/services/geo-optimization',
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
    href: '/services/ecommerce-seo',
    accent: 'fuchsia',
  },
  {
    id: 'local-lead-generation',
    title: 'Local Lead Generation',
    subtitle: 'Ads That Deliver Leads',
    hubSubtitle: 'Ads that deliver leads',
    description:
      'Google Local Service Ads, Search Ads, and Facebook campaigns for home services and professional services. Pay for leads, not clicks.',
    hubDescription:
      'A validated ad funnel and landing page that converts local traffic into calls and booked jobs. We test before you scale.',
    features: ['Google Local Service Ads', 'Search campaigns', 'Facebook lead ads', 'Call tracking'],
    price: '$500/month',
    href: '/services/local-lead-generation',
    accent: 'orange',
  },
  {
    id: 'custom-tools-automation',
    title: 'Custom Tools & Automation',
    subtitle: 'Marketing Technology Built for You',
    hubSubtitle: 'Built for your business',
    description:
      'Custom SEO tools, reporting dashboards, lead generation systems, and workflow automation designed specifically for your business needs.',
    hubDescription:
      'Lightweight marketing tools and automations built for your specific workflow. The edge your competitors can\'t buy off the shelf.',
    features: ['SEO automation tools', 'Custom dashboards', 'Lead systems', 'Workflow automation'],
    price: 'From $2,500 setup + $750/mo.',
    href: '/services/custom-tools-automation',
    accent: 'teal',
  },
] as const;

export type ServiceCardId = (typeof serviceCards)[number]['id'];
