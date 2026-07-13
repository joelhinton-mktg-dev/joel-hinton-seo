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


/** Funnel Sprint — MintCRO / local-lead-generation offer framing. */
export const funnelSprintOffer = {
  name: 'Funnel Sprint',
  sprintPrice: '$5,000',
  sprintIncludes: 'includes the build, management, and a managed testing budget',
  guarantee: 'We keep testing until we hit your target conversion rate.',
  ongoingTiers: [
    { price: '$500/mo', adSpend: 'up to $10k ad spend' },
    { price: '$1,000/mo', adSpend: 'up to $20k ad spend' },
  ],
  diyVideoHref: '[YouTube link — pending]',
  href: '/services/local-lead-generation',
  serviceLabel: 'Funnel Sprint - $5,000',
} as const;

/** GEO — informational only; no standalone product pricing. */
export const geoOffer = {
  name: 'GEO Optimization',
  description:
    'AI-search visibility is built into every SEO plan — baseline optimization comes standard, and the full play lives in Domination-tier monthly work.',
  href: '/services/geo-optimization',
  headline: 'GEO Is Built Into Every SEO Plan',
  subhead:
    'GEO is built into every SEO plan — baseline AI-search optimization comes standard, and the full play (Reddit growth, deep entity work, AI-citation building) lives in our Domination tier.',
  baselineTitle: 'What You Get at Every Tier',
  baselineSubtitle: 'Baseline GEO is standard — not a separate purchase',
  baselineFeatures: [
    'Entity mapping and AI-prompt research',
    'Schema and structured data for AI crawlers',
    'Answer-focused content structure',
    'Baseline AI-search monitoring',
  ],
  dominationTitle: 'The Full GEO Play',
  dominationSubtitle: '$1,500–$2,500/mo as part of Complete SEO + GEO',
  dominationFeatures: [
    'Organic Reddit growth',
    'Deep entity and authority work',
    'AI-citation building and tracking',
    '10+ articles and 5+ backlinks monthly',
  ],
  seoPlansHref: '/services/search-engine-optimization',
  serviceLabel: 'GEO — included in SEO plans',
} as const;

/** E-commerce SEO — monthly tiers only (no separate setup SKU). */
export const ecommerceMonthlyTiers = [
  {
    name: 'Starter',
    badge: 'Starter',
    subtitle: 'Small Store',
    price: '$1,500/mo',
    description: 'Up to 100 products',
    features: [
      'Technical SEO audit & fixes',
      'Product page optimization',
      '2 blog articles/month',
      'Monthly reporting',
    ],
    serviceLabel: 'E-commerce Starter - $1,500/mo',
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    subtitle: 'Growth Store',
    price: '$3,000/mo',
    description: 'Up to 500 products',
    features: [
      'Everything in Starter',
      'Conversion rate optimization',
      '8 articles/month',
      'Link building campaign',
      'A/B testing support',
    ],
    serviceLabel: 'E-commerce Growth - $3,000/mo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    badge: 'Enterprise',
    subtitle: 'Large Store',
    price: 'Custom',
    description: '500+ products',
    features: [
      'Unlimited products',
      'Multi-marketplace optimization',
      'Dedicated SEO specialist',
      'Custom reporting dashboard',
      'Priority support',
    ],
    serviceLabel: 'E-commerce Enterprise',
  },
] as const;

/** Custom tools — project-scoped; quote on discovery. */
export const customToolsOffer = {
  name: 'Custom Tools & Automation',
  description:
    'Custom marketing tools, dashboards, and workflow automation built for your business — you own the code and data.',
  href: '/services/custom-tools-automation',
  projectRange:
    'Projects typically range from $5,000 for focused single-purpose tools to $25,000+ for comprehensive systems — scoped on the discovery call.',
  comparisonNote:
    'A $15,000 custom tool you own forever vs. $500–1,500/month in SaaS that adds up to $18,000+ in year one.',
  maintenanceNote:
    'Optional ongoing maintenance available — no vendor lock-in on what we build for you.',
  serviceLabel: 'Custom Tools - Discovery Call',
} as const;

/** Recommended package combinations for /pricing. */
export const pricingBundles = [
  {
    name: 'Local Business Starter',
    total: '$1,500 setup + $500/mo',
    services: ['Single-Location Foundation ($1,500)', 'Growth ($500/mo)'],
    description: 'Perfect for local service businesses ready to dominate their market',
    savings: 'Complete local foundation',
    serviceLabel: 'Local Business Starter Package',
  },
  {
    name: 'Growth Marketing System',
    total: '$3,000 setup + $1,500/mo',
    services: [
      'SEO Foundation ($1,500)',
      'Single-Location Local ($1,500)',
      'SEO Growth ($500/mo)',
      'Local Authority ($1,000/mo)',
    ],
    description: 'Dominate traditional search with SEO + local momentum',
    savings: 'Most comprehensive organic coverage',
    popular: true,
    serviceLabel: 'Growth Marketing System Package',
  },
  {
    name: 'Agentic + Local',
    total: '$4,000 setup + $1,000/mo',
    services: [
      'Agentic SMB rebuild ($2,500)',
      'Single-Location Local ($1,500)',
      'Agentic Lite + Local Growth ($1,000/mo combined)',
    ],
    description: 'Self-improving site plus local map-pack foundation',
    savings: 'Flagship site + local visibility',
    serviceLabel: 'Agentic + Local Package',
  },
] as const;

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Year-one ROI comparison for /pricing. Amounts in USD (integers). */
export const roiComparison = {
  traditionalTotal: 49300,
  ourTotal: 17500,
  savings: 31800,
  traditionalFootnote: '*And you lose it all when you leave',
  ourTagline: 'Plus: You own everything. Forever.',
  traditionalLines: [
    { label: 'SEO Retainer (12 months):', amount: 36000 },
    { label: 'PPC Management (20% of $2K/mo):', amount: 4800 },
    { label: 'Local SEO Add-on:', amount: 6000 },
    { label: 'Setup/Onboarding Fees:', amount: 2500 },
  ],
  ourLines: [
    { label: 'SEO Foundation Setup:', amount: 1500 },
    { label: 'Single-Location Local Setup:', amount: 1500 },
    { label: 'Agentic SMB Site Setup:', amount: 2500 },
    { label: 'Growth + Lite engine (12 months):', amount: 12000 },
  ],
} as const;
