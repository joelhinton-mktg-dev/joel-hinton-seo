export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified?: string;
  category: BlogCategory;
  tags: string[];
  featuredImage?: string;
  readingTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage?: string;
  };
  published: boolean;
}

export type BlogCategory = 'SEO Psychology' | 'Growth Marketing' | 'Case Studies' | 'AI Marketing';

export interface BlogFilters {
  category?: BlogCategory;
  tag?: string;
  search?: string;
}

export interface PaginatedBlogPosts {
  posts: BlogPost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ShareLinks {
  twitter: string;
  linkedin: string;
  facebook: string;
  reddit: string;
  email: string;
}