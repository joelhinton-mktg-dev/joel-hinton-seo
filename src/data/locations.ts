import type { Metadata } from 'next';

export interface Location {
  id: string;
  slug: string;
  city: string;
  region: string;
  tagline: string;
  description: string;
  isHomeBase?: boolean;
  features: string[];
  services: string[];
  neighborhoods: string[];
  nearbyAreas: string[];
  coordinates: {
    latitude: string;
    longitude: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  uniqueSellingPoints: {
    title: string;
    description: string;
  }[];
  heroHeadline?: string;
  heroTagline?: string;
  supplementalCopy?: string;
}

export const locations: Location[] = [
  {
    id: 'daytona-beach',
    slug: 'daytona-beach',
    city: 'Daytona Beach',
    region: 'Volusia County',
    tagline: 'NASCAR Culture & Motorsports Expert',
    description: 'Born and raised in Daytona Beach, I understand the unique psychology that drives our community - from NASCAR Nation to beach tourism, from snowbird seasons to Bike Week crowds.',
    isHomeBase: true,
    features: ['NASCAR Culture', 'Beach Tourism', 'Motorsports Events', 'Snowbird Season'],
    services: ['Local SEO', 'Google Business Profile', 'Content Marketing', 'Paid Advertising'],
    neighborhoods: ['Main Street District', 'Downtown Daytona Beach', 'Seabreeze', 'Midtown'],
    nearbyAreas: ['Ormond Beach', 'Port Orange', 'South Daytona', 'Holly Hill'],
    coordinates: { latitude: '29.2108', longitude: '-81.0228' },
    seo: {
      metaTitle: 'Daytona Beach Digital Marketing | NASCAR Culture & Motorsports Expert',
      metaDescription: 'Daytona Beach digital marketing with deep local expertise. NASCAR culture, motorsports tourism, beach lifestyle psychology. Home field advantage with fastest response times.',
      keywords: ['Daytona Beach digital marketing', 'NASCAR marketing', 'motorsports tourism', 'beach lifestyle marketing', 'Daytona SEO']
    },
    uniqueSellingPoints: [
      { title: 'NASCAR Culture Expertise', description: 'Deep understanding of motorsports tourism and race-week marketing psychology.' },
      { title: 'Beach Tourism Marketing', description: 'Seasonal strategies for snowbirds, spring breakers, and year-round visitors.' },
      { title: 'Home Base Advantage', description: 'Same-day meetings, fastest response times, and deep community connections.' }
    ]
  },
  {
    id: 'ormond-beach',
    slug: 'ormond-beach',
    city: 'Ormond Beach',
    region: 'Volusia County',
    tagline: 'Birthplace of Speed Marketing',
    description: 'Ormond Beach combines historic charm with modern affluence. From the Birthplace of Speed heritage to upscale residential communities, we understand what drives this market.',
    features: ['Historic Heritage', 'Affluent Demographics', 'Retail Centers', 'Golf Communities'],
    services: ['Local SEO', 'Reputation Management', 'Content Marketing', 'Social Media'],
    neighborhoods: ['Ormond-by-the-Sea', 'Tomoka Oaks', 'Halifax Plantation', 'Breakaway Trails'],
    nearbyAreas: ['Daytona Beach', 'Flagler Beach', 'Palm Coast'],
    coordinates: { latitude: '29.2858', longitude: '-81.0559' },
    seo: {
      metaTitle: 'Ormond Beach SEO | Birthplace of Speed Marketing',
      metaDescription: 'Ormond Beach SEO services for local businesses. Historic charm meets modern marketing. Affluent demographics and tourism marketing expertise.',
      keywords: ['Ormond Beach SEO', 'Ormond Beach marketing', 'birthplace of speed', 'Ormond Beach digital marketing']
    },
    uniqueSellingPoints: [
      { title: 'Affluent Market Understanding', description: 'Marketing strategies for higher-income demographics and luxury services.' },
      { title: 'Historic Heritage Marketing', description: 'Leveraging the Birthplace of Speed story for unique brand positioning.' },
      { title: 'Golf Community Expertise', description: 'Targeting residents of premium golf course communities.' }
    ]
  },
  {
    id: 'port-orange',
    slug: 'port-orange',
    city: 'Port Orange',
    region: 'Volusia County',
    tagline: 'Family-Focused Community Marketing',
    description: 'Port Orange is a family-oriented community with excellent schools and growing neighborhoods. Our marketing strategies connect with families and local service providers.',
    features: ['Family Demographics', 'Growing Community', 'Retail Growth', 'School Districts'],
    services: ['Local SEO', 'Google Ads', 'Social Media Marketing', 'Email Marketing'],
    neighborhoods: ['Cypress Head', 'Waters Edge', 'Sanctuary', 'Willow Run'],
    nearbyAreas: ['Daytona Beach', 'New Smyrna Beach', 'South Daytona'],
    coordinates: { latitude: '29.1383', longitude: '-80.9956' },
    seo: {
      metaTitle: 'Port Orange Marketing | Family-Focused Digital Marketing',
      metaDescription: 'Port Orange marketing services for family-oriented businesses. Growing community with excellent demographics for local service providers.',
      keywords: ['Port Orange marketing', 'Port Orange SEO', 'Port Orange digital marketing', 'family marketing']
    },
    uniqueSellingPoints: [
      { title: 'Family Market Expertise', description: 'Understanding the needs and buying patterns of family households.' },
      { title: 'Growing Community', description: 'Positioning businesses for growth in one of Florida fastest-growing areas.' },
      { title: 'Local Service Focus', description: 'Marketing strategies for home services, healthcare, and family businesses.' }
    ]
  },
  {
    id: 'palm-coast',
    slug: 'palm-coast',
    city: 'Palm Coast',
    region: 'Flagler County',
    tagline: 'Flagler County Growth Leader',
    description: 'Palm Coast SEO and marketing for Flagler County businesses in Florida fastest-growing family market. We help you rank in the local pack, earn AI recommendations, and convert searches from new residents, retirees, and healthcare and real estate brands.',
    features: ['Rapid Growth', 'Retirement Community', 'New Construction', 'Coastal Living'],
    services: ['Local SEO', 'Real Estate Marketing', 'Healthcare Marketing', 'Lead Generation'],
    neighborhoods: ['Palm Harbor', 'Grand Haven', 'European Village', 'Hammock Beach'],
    nearbyAreas: ['Flagler Beach', 'Bunnell', 'Ormond Beach'],
    coordinates: { latitude: '29.5844', longitude: '-81.2078' },
    seo: {
      metaTitle: 'Palm Coast SEO | Local Search & Digital Marketing',
      metaDescription: 'Palm Coast SEO and digital marketing for Flagler County businesses. Google Business Profile, local pack rankings, content, and lead generation in Florida fastest-growing family market.',
      keywords: ['Palm Coast SEO', 'Palm Coast SEO company', 'Palm Coast marketing', 'Palm Coast digital marketing', 'Flagler County SEO', 'local SEO Palm Coast']
    },
    heroHeadline: 'Palm Coast SEO',
    heroTagline: '& Flagler County Marketing',
    supplementalCopy: 'Palm Coast SEO is a distinct local-search game from Daytona or Orlando: dual demographics (retirees and young families), rapid new construction, and neighborhood-by-neighborhood proximity in the map pack. We build Palm Coast-specific GBP optimization, citation accuracy, review velocity, and location pages so you rank for Palm Coast SEO queries, not just generic statewide terms.',
    uniqueSellingPoints: [
      { title: 'Growth Market Positioning', description: 'Capturing market share in one of Florida fastest-growing regions.' },
      { title: 'Dual Demographic Expertise', description: 'Marketing to both retirees and young families effectively.' },
      { title: 'Real Estate Focus', description: 'New construction and relocation marketing expertise.' }
    ]
  },
  {
    id: 'new-smyrna-beach',
    slug: 'new-smyrna-beach',
    city: 'New Smyrna Beach',
    region: 'Volusia County',
    tagline: 'Surf Culture & Beach Lifestyle',
    description: 'New Smyrna Beach has a unique laid-back surf culture and artistic community. Our marketing captures the beach lifestyle that attracts visitors and residents alike.',
    features: ['Surf Culture', 'Arts Community', 'Beach Tourism', 'Historic Downtown'],
    services: ['Local SEO', 'Tourism Marketing', 'Restaurant Marketing', 'Event Promotion'],
    neighborhoods: ['Coronado Beach', 'Canal Street', 'Venetian Bay', 'Sugar Mill Ruins'],
    nearbyAreas: ['Edgewater', 'Port Orange', 'Oak Hill'],
    coordinates: { latitude: '29.0258', longitude: '-80.9270' },
    seo: {
      metaTitle: 'New Smyrna Beach Marketing | Surf Culture & Beach Lifestyle',
      metaDescription: 'New Smyrna Beach marketing for surf shops, restaurants, and beach businesses. Capture the laid-back lifestyle that makes NSB unique.',
      keywords: ['New Smyrna Beach marketing', 'NSB SEO', 'surf culture marketing', 'beach lifestyle marketing']
    },
    uniqueSellingPoints: [
      { title: 'Surf Culture Marketing', description: 'Authentic marketing for the surf and beach lifestyle community.' },
      { title: 'Arts & Culture Focus', description: 'Connecting with the creative community and art scene.' },
      { title: 'Tourism Expertise', description: 'Seasonal marketing for beach tourism and vacation rentals.' }
    ]
  },
  {
    id: 'debary',
    slug: 'debary',
    city: 'DeBary',
    region: 'Volusia County',
    tagline: 'West Volusia Business Hub',
    description: 'DeBary serves as a hub for West Volusia County with easy access to Orlando. Our marketing connects local businesses with both local residents and Orlando commuters.',
    features: ['Orlando Commuters', 'SunRail Access', 'Growing Retail', 'Nature Recreation'],
    services: ['Local SEO', 'B2B Marketing', 'Service Area Marketing', 'Google Ads'],
    neighborhoods: ['Glen Abbey', 'DeBary Plantation', 'River Oaks', 'Riviera Bella'],
    nearbyAreas: ['Deltona', 'Orange City', 'Sanford', 'Lake Mary'],
    coordinates: { latitude: '28.8831', longitude: '-81.3086' },
    seo: {
      metaTitle: 'DeBary Digital Marketing | West Volusia Business Hub',
      metaDescription: 'DeBary digital marketing for West Volusia businesses. Orlando commuter market, SunRail access, growing retail and service sectors.',
      keywords: ['DeBary digital marketing', 'DeBary SEO', 'West Volusia marketing', 'DeBary business marketing']
    },
    uniqueSellingPoints: [
      { title: 'Commuter Market Access', description: 'Reaching Orlando workers who live in West Volusia.' },
      { title: 'SunRail Corridor', description: 'Marketing to the growing transit-oriented community.' },
      { title: 'Nature Recreation', description: 'Outdoor lifestyle marketing for eco-tourism and recreation.' }
    ]
  },
  {
    id: 'sanford',
    slug: 'sanford',
    city: 'Sanford',
    region: 'Seminole County',
    tagline: 'Historic Downtown Revival',
    description: 'Sanford Historic Downtown district is experiencing a revival with new restaurants, shops, and businesses. Our marketing captures the charm and growth of this emerging market.',
    features: ['Historic Downtown', 'Craft Breweries', 'Antique Shops', 'Waterfront Living'],
    services: ['Local SEO', 'Restaurant Marketing', 'Retail Marketing', 'Event Marketing'],
    neighborhoods: ['Historic Downtown', 'Lake Mary Boulevard', 'Sanford Town Center', 'Mayfair'],
    nearbyAreas: ['Lake Mary', 'Longwood', 'Winter Springs', 'DeBary'],
    coordinates: { latitude: '28.8001', longitude: '-81.2731' },
    seo: {
      metaTitle: 'Sanford SEO Services | Historic Downtown Revival',
      metaDescription: 'Sanford SEO services for historic downtown businesses. Craft breweries, restaurants, retail shops, and emerging businesses in Seminole County.',
      keywords: ['Sanford SEO', 'Sanford marketing', 'Sanford digital marketing', 'downtown Sanford marketing']
    },
    uniqueSellingPoints: [
      { title: 'Downtown Revival', description: 'Marketing for the growing historic district renaissance.' },
      { title: 'Craft Beverage Scene', description: 'Expertise in brewery and restaurant marketing.' },
      { title: 'Waterfront Positioning', description: 'Leveraging Lake Monroe for lifestyle marketing.' }
    ]
  },
  {
    id: 'holly-hill',
    slug: 'holly-hill',
    city: 'Holly Hill',
    region: 'Volusia County',
    tagline: 'Small-Town Local Marketing',
    description: 'Holly Hill digital marketing for neighborhood businesses serving families and retirees in Volusia County. We help restaurants, medical practices, home services, and small retail connect with the community that already trusts local operators.',
    features: ['Affordable Market', 'Daytona Adjacent', 'Small Business Focus', 'Working Class'],
    services: ['Local SEO', 'Budget Marketing', 'Small Business Services', 'Lead Generation'],
    neighborhoods: ['Riverside', 'Nova Road Corridor', 'Downtown Holly Hill'],
    nearbyAreas: ['Daytona Beach', 'Ormond Beach', 'South Daytona'],
    coordinates: { latitude: '29.2438', longitude: '-81.0406' },
    seo: {
      metaTitle: 'Holly Hill Digital Marketing | Local SEO & Ads',
      metaDescription: 'Holly Hill digital marketing for restaurants, medical practices, home services, and small retail in Volusia County. Local SEO, Google Ads, and lead generation.',
      keywords: ['holly hill digital marketing', 'Holly Hill digital marketing', 'Holly Hill SEO', 'Holly Hill marketing', 'Volusia County small business marketing']
    },
    heroHeadline: 'Holly Hill Digital Marketing',
    heroTagline: 'for Local Volusia Businesses',
    supplementalCopy: 'Holly Hill digital marketing should speak to families and retirees in a close-knit community, not copy a metro-wide Daytona playbook. When you need broader search coverage across the beach market, work with our Daytona Beach SEO company on the homepage for Volusia-wide visibility.',
    uniqueSellingPoints: [
      { title: 'Value-Focused Marketing', description: 'Reaching budget-conscious consumers effectively.' },
      { title: 'Small Business Expertise', description: 'Affordable marketing solutions for local businesses.' },
      { title: 'Daytona Spillover', description: 'Capturing overflow traffic from Daytona Beach.' }
    ]
  },
  ];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find((location) => location.slug === slug);
};


export function buildLocationMetadata(slug: string): Metadata {
  const location = getLocationBySlug(slug);
  if (!location) {
    return { title: 'Location Not Found' };
  }
  const url = `https://aiogrowthseo.com/areas-we-serve/${slug}`;
  return {
    title: location.seo.metaTitle,
    description: location.seo.metaDescription,
    keywords: location.seo.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: location.seo.metaTitle,
      description: location.seo.metaDescription,
      url,
      type: 'website',
      siteName: 'AIO Growth SEO',
    },
    twitter: {
      card: 'summary_large_image',
      title: location.seo.metaTitle,
      description: location.seo.metaDescription,
    },
  };
}
