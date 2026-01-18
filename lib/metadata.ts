import { Metadata } from 'next';

const BASE_URL = 'https://aiogrowthseo.com';
const SITE_NAME = 'AIO Growth SEO';

interface CreateMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

/**
 * Creates consistent metadata for Next.js pages
 * Handles title templating, canonical URLs, Open Graph, and Twitter cards
 */
export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = 'website',
  ogImage,
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
}: CreateMetadataOptions): Metadata {
  const canonicalUrl = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords,
    authors: authors?.map(name => ({ name })),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: ogType,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: ogImage ? [{ url: ogImage, alt: title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };

  // Add article-specific metadata for blog posts and guides
  if (ogType === 'article' && metadata.openGraph) {
    const ogArticle = metadata.openGraph as any;
    if (publishedTime) ogArticle.publishedTime = publishedTime;
    if (modifiedTime) ogArticle.modifiedTime = modifiedTime;
    if (authors) ogArticle.authors = authors;
    if (section) ogArticle.section = section;
    if (tags) ogArticle.tags = tags;
  }

  return metadata;
}

/**
 * Creates metadata for service pages with ProfessionalService schema hints
 */
export function createServiceMetadata({
  serviceName,
  description,
  path,
  keywords = [],
  price,
}: {
  serviceName: string;
  description: string;
  path: string;
  keywords?: string[];
  price?: string;
}): Metadata {
  return createMetadata({
    title: `${serviceName} | Professional SEO Services`,
    description,
    path,
    keywords: [...keywords, serviceName, 'SEO services', 'digital marketing'],
    ogType: 'website',
  });
}

/**
 * Creates metadata for location pages with local SEO focus
 */
export function createLocationMetadata({
  location,
  description,
  path,
  keywords = [],
}: {
  location: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return createMetadata({
    title: `${location} SEO & Digital Marketing`,
    description,
    path,
    keywords: [...keywords, `${location} SEO`, `${location} digital marketing`, 'local SEO'],
    ogType: 'website',
  });
}

/**
 * Creates metadata for industry pages
 */
export function createIndustryMetadata({
  industry,
  description,
  path,
  keywords = [],
}: {
  industry: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return createMetadata({
    title: `${industry} Marketing | Industry Expertise`,
    description,
    path,
    keywords: [...keywords, `${industry} marketing`, `${industry} SEO`, 'industry marketing'],
    ogType: 'website',
  });
}

/**
 * Creates metadata for blog posts
 */
export function createBlogMetadata({
  title,
  description,
  slug,
  keywords = [],
  ogImage,
  publishedTime,
  modifiedTime,
  author,
  category,
  tags,
}: {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}): Metadata {
  return createMetadata({
    title,
    description,
    path: `/blog/${slug}`,
    keywords,
    ogType: 'article',
    ogImage,
    publishedTime,
    modifiedTime,
    authors: author ? [author] : undefined,
    section: category,
    tags,
  });
}

/**
 * Creates metadata for guide pages
 */
export function createGuideMetadata({
  title,
  description,
  slug,
  keywords = [],
  ogImage,
  publishedTime,
  modifiedTime,
  author,
  category,
  tags,
}: {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}): Metadata {
  return createMetadata({
    title,
    description,
    path: `/guides/${slug}`,
    keywords,
    ogType: 'article',
    ogImage,
    publishedTime,
    modifiedTime,
    authors: author ? [author] : undefined,
    section: category,
    tags,
  });
}
