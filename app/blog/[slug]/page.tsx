import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { format } from 'date-fns';
import { Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { blogPosts } from '@/data/blogPosts';
import ShareButtons from './ShareButtons';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts
    .filter(post => post.published)
    .map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug && p.published);

  if (!post) {
    return {
      title: 'Post Not Found | AIO Growth SEO',
    };
  }

  const canonicalUrl = `https://aiogrowthseo.com/blog/${post.slug}`;
  const ogImageUrl = post.seo.ogImage
    ? (post.seo.ogImage.startsWith('http')
        ? post.seo.ogImage
        : `https://aiogrowthseo.com${post.seo.ogImage.startsWith('/') ? '' : '/'}${post.seo.ogImage}`)
    : undefined;

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: 'article',
      url: canonicalUrl,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
      publishedTime: post.publishDate,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug && p.published);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://aiogrowthseo.com/blog/${post.slug}`;
  const ogImageUrl = post.seo.ogImage
    ? (post.seo.ogImage.startsWith('http')
        ? post.seo.ogImage
        : `https://aiogrowthseo.com${post.seo.ogImage.startsWith('/') ? '' : '/'}${post.seo.ogImage}`)
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.publishDate,
    "dateModified": post.lastModified || post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIO Growth SEO"
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    ...(ogImageUrl && { "image": ogImageUrl })
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>

        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <article>
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishDate}>
                    {format(new Date(post.publishDate), 'MMMM d, yyyy')}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>By {post.author}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator className="mb-8" />
            </header>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-12">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-slate max-w-none prose-lg">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-slate-900 mt-12 mb-6">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">{children}</h3>,
                  p: ({children}) => <p className="text-slate-700 mb-6 leading-relaxed">{children}</p>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-slate-600 bg-blue-50 py-4 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  code: ({children}) => (
                    <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800">
                      {children}
                    </code>
                  ),
                  pre: ({children}) => (
                    <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto my-8">
                      {children}
                    </pre>
                  ),
                  ul: ({children}) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
                  li: ({children}) => <li className="text-slate-700">{children}</li>,
                  a: ({href, children}) => (
                    <Link href={href || '#'} className="text-primary hover:underline">
                      {children}
                    </Link>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Share Section */}
            <ShareButtons post={post} canonicalUrl={canonicalUrl} />

            {/* CTA Section */}
            <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold mb-2">Want to Apply These Insights?</h3>
                <p className="text-muted-foreground mb-4">
                  Our team specializes in psychology-driven marketing that converts. Let&apos;s discuss your goals.
                </p>
                <Link href="/contact">
                  <Button>Schedule a Free Consultation</Button>
                </Link>
              </CardContent>
            </Card>
          </article>
        </main>
      </div>
    </>
  );
}
