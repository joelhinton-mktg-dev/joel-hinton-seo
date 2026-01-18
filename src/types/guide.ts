export interface GuideSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface Guide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified?: string;
  readingTime: number;
  category: GuideCategory;
  tags: string[];
  featuredImage?: string;
  seo: GuideSEO;
  published: boolean;
}

export type GuideCategory =
  | 'SEO Fundamentals'
  | 'AI & GEO'
  | 'Strategy'
  | 'Industry Trends';

export interface ShareLinks {
  twitter: string;
  linkedin: string;
  facebook: string;
  reddit: string;
  email: string;
}
