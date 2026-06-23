import { BlogPost } from '@/types/blog';

const SITE_URL = 'https://aiogrowthseo.com';
const PUBLISHER_LOGO = `${SITE_URL}/favicon.ico`;

export interface FaqItem {
  question: string;
  answer: string;
}

/** Extract FAQ Q&A pairs from markdown content (## Frequently asked questions section). */
export function extractFaqsFromContent(content: string): FaqItem[] {
  const faqs: FaqItem[] = [];
  const lines = content.split('\n');
  let inFaq = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (/^##\s+frequently asked questions/i.test(line) || line.toLowerCase() === 'frequently asked questions') {
      inFaq = true;
      continue;
    }

    if (!inFaq) continue;

    if (line.startsWith('## ') && !/^##\s+frequently asked questions/i.test(line)) {
      break;
    }

    const questionMatch = line.match(/^\*\*(.+?\??)\*\*$/);
    if (!questionMatch) continue;

    const question = questionMatch[1].trim();
    const answerParts: string[] = [];

    for (let j = i + 1; j < lines.length; j++) {
      const nextLine = lines[j].trim();
      if (/^\*\*.+\?\*\*$/.test(nextLine) || (nextLine.startsWith('## ') && !/^##\s+frequently asked questions/i.test(nextLine))) {
        break;
      }
      if (nextLine) {
        answerParts.push(nextLine);
      }
      i = j;
    }

    if (answerParts.length > 0) {
      faqs.push({ question, answer: answerParts.join(' ') });
    }
  }

  return faqs;
}

export function buildBlogPostSchemas(post: BlogPost, canonicalUrl: string, ogImageUrl?: string) {
  const faqs = post.faqs?.length ? post.faqs : extractFaqsFromContent(post.content);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.publishDate,
    dateModified: post.lastModified || post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIO Growth SEO',
      logo: {
        '@type': 'ImageObject',
        url: PUBLISHER_LOGO,
      },
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    ...(ogImageUrl && { image: ogImageUrl }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return { articleSchema, breadcrumbSchema, faqSchema };
}
