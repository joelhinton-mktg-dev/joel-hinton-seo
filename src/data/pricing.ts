export const setupTiers = [
  {
    name: 'Single-Location',
    price: '$1,500',
    description:
      'We make your existing site technically sound, run a full gap analysis plus market, keyword, and AI-prompt research, and build your topical map and execution roadmap — then add up to 10 new pages (5 location + 5 service). You own all of it.',
    serviceLabel: 'Single-Location Foundation - $1,500',
  },
  {
    name: 'Multi-Location',
    price: '$2,500',
    description:
      'Everything in Single-Location, built across 2–5 locations / Google Business Profiles, with programmatic location and service pages for every market.',
    serviceLabel: 'Multi-Location Foundation - $2,500',
  },
  {
    name: 'Regional',
    price: '$5,000',
    description:
      'For 6+ locations or multiple markets — a heavy programmatic build to own search across your entire region.',
    serviceLabel: 'Regional Foundation - $5,000',
  },
] as const;

export const monthlyTiers = [
  {
    name: 'Growth',
    price: '$500/mo',
    features: [
      '4–6 articles',
      '2–3 backlinks',
      '4 Google Business Profile posts',
      'Monitoring',
    ],
    serviceLabel: 'Growth - $500/mo',
  },
  {
    name: 'Authority',
    price: '$1,000/mo',
    features: [
      '6–8 articles',
      '3–6 backlinks',
      'Strategic link building',
    ],
    serviceLabel: 'Authority - $1,000/mo',
    highlighted: true,
  },
  {
    name: 'Domination',
    price: '$1,500–$2,500/mo',
    features: [
      'Complete SEO + GEO plan',
      '10+ articles',
      '5+ backlinks',
      'Organic Reddit growth',
      'Review acquisition',
      'Full AI-search optimization',
    ],
    serviceLabel: 'Domination - $1,500–$2,500/mo',
  },
] as const;

export const multiLocationMonthlyNote =
  'More than 3 locations or Google Business Profiles? Monthly starts at $1,000.';

/** Flat SEO Foundation — used on /seo-services only (not location-tiered). */
export const seoFoundation = {
  price: '$1,500',
  serviceLabel: 'SEO Foundation - $1,500',
  features: [
    'Technical audit',
    'Gap analysis',
    'Keyword + AI-prompt research',
    'Topical map + roadmap',
    'On-page optimization',
    'Schema implementation',
  ],
} as const;

/** Monthly ladder for /seo-services — no location or GBP language. */
export const seoMonthlyTiers = [
  {
    name: 'Growth',
    price: '$500/mo',
    features: ['4–6 articles', '2–3 backlinks', 'Monitoring'],
    serviceLabel: 'Growth - $500/mo',
  },
  {
    name: 'Authority',
    price: '$1,000/mo',
    features: ['6–8 articles', '3–6 backlinks', 'Strategic link building'],
    serviceLabel: 'Authority - $1,000/mo',
    highlighted: true,
  },
  {
    name: 'Domination',
    price: '$1,500–$2,500/mo',
    features: [
      'Complete SEO + GEO plan',
      '10+ articles',
      '5+ backlinks',
      'Organic Reddit growth',
      'Review acquisition',
      'Full AI-search optimization',
    ],
    serviceLabel: 'Domination - $1,500–$2,500/mo',
  },
] as const;

/** Agentic SEO Site — /agentic-seo flagship offer. */
export const agenticOffer = {
  setup: 'Setup $2,500–$5,000 (scoped by site size)',
  monthly: '$1,000–$1,500/mo for the engine',
  ownership:
    'You own the site forever. Leave anytime and we hand over everything — you keep the website; you only lose the agentic engine layer.',
  serviceLabel: 'Agentic SEO Site - Custom Quote',
} as const;

/** Funnel Sprint — /local-lead-generation offer framing. */
export const funnelSprintOffer = {
  sprintPrice: '$5,000',
  sprintIncludes: 'includes the build, management, and a managed testing budget',
  guarantee: 'We keep testing until we hit your target conversion rate.',
  ongoingTiers: [
    { price: '$500/mo', adSpend: 'up to $10k ad spend' },
    { price: '$1,000/mo', adSpend: 'up to $20k ad spend' },
  ],
  diyVideoHref: '[YouTube link — pending]',
  serviceLabel: 'Funnel Sprint - $5,000',
} as const;
