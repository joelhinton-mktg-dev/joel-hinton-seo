export const setupTiers = [
  {
    name: 'Single-Location',
    price: '$1,500',
    description:
      'We make your existing site technically sound, run a full gap analysis plus market, keyword, and AI-prompt research, and build your topical map and execution roadmap — then add up to 10 new service-area and service pages (any mix). You own all of it.',
    serviceLabel: 'Single-Location Foundation - $1,500',
  },
  {
    name: 'Multi-Location',
    price: '$2,500',
    description:
      'Everything in Single-Location, built across 2–5 locations / Google Business Profiles, with programmatic location and service pages for every market. You own all of it.',
    serviceLabel: 'Multi-Location Foundation - $2,500',
  },
  {
    name: 'Regional',
    price: '$5,000',
    description:
      'For 6+ locations or multiple markets — a heavy programmatic build to own search across your entire region. You own all of it.',
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
    'Develop up to 10 additional pages',
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

/** Agentic SEO Site — /services/agentic-seo flagship offer. */
export const agenticOffer = {
  cardTitle: 'Agentic SEO Site',
  cardSubtitle: 'A website that improves itself',
  cardDescription:
    'An AI-ready site rebuild with a self-improving engine that reads search, funnel, and AI-visibility data — and gets better every cycle.',
  cardPrice: 'From $2,500 setup + $500/mo',
  setup: 'Setup $2,500–$5,000 (scoped by site size)',
  smbEntry: 'SMB entry point: $2,500 setup + Lite engine at $500/mo',
  ownership:
    'You own the site forever. Leave anytime and we hand over everything — you keep the website; you only lose the agentic engine layer.',
  serviceLabel: 'Agentic SEO Site - Custom Quote',
  canonicalPath: '/services/agentic-seo',
  setupDeliverables: [
    'Full site rebuild on a modern, AI-ready stack',
    'llms.txt and structured data across every page type that matters',
    'Internal-linking architecture built for topical authority',
    'Agentic browsing audit — how AI agents see and navigate your site',
  ],
  engineCycle: [
    { step: 'Read', detail: 'Pull search, funnel, and AI-visibility data from your live site.' },
    { step: 'Propose', detail: 'Identify gaps and rank what to fix next based on evidence.' },
    { step: 'Human QA', detail: 'Every change is reviewed before it ships — no autopilot rewrites.' },
    { step: 'Deploy', detail: 'Push approved updates to content, structure, and entity signals.' },
    { step: 'Measure', detail: 'Track impact and feed results into the next cycle.' },
  ],
} as const;

/** Agentic engine monthly ladder — SMB tiers, cadence-differentiated. */
export const agenticEngineTiers = [
  {
    name: 'Lite',
    price: '$500/mo',
    cadence: 'Monthly cycle — data review and prioritized recommendations',
    serviceLabel: 'Agentic Engine - Lite - $500/mo',
  },
  {
    name: 'Standard',
    price: '$1,000/mo',
    cadence: 'Bi-weekly cycle — read, propose, human QA, deploy, and measure',
    serviceLabel: 'Agentic Engine - Standard - $1,000/mo',
    highlighted: true,
  },
  {
    name: 'Full',
    price: '$1,500/mo',
    cadence: 'Weekly cycle — full read → propose → QA → deploy → measure loop',
    serviceLabel: 'Agentic Engine - Full - $1,500/mo',
  },
] as const;

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
