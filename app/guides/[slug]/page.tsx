import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { format } from 'date-fns';
import { Calendar, Clock, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { guides, getGuideBySlug } from '@/data/guides';
import GuideShareButtons from './GuideShareButtons';
import TableOfContents from './TableOfContents';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides
    .filter(guide => guide.published)
    .map(guide => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide || !guide.published) {
    return {
      title: 'Guide Not Found | AIO Growth SEO',
    };
  }

  const canonicalUrl = `https://aiogrowthseo.com/guides/${guide.slug}`;

  return {
    title: guide.seo.metaTitle,
    description: guide.seo.metaDescription,
    keywords: guide.seo.keywords,
    authors: [{ name: guide.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: guide.seo.metaTitle,
      description: guide.seo.metaDescription,
      type: 'article',
      url: canonicalUrl,
      images: guide.seo.ogImage ? [{ url: guide.seo.ogImage }] : undefined,
      publishedTime: guide.publishDate,
      authors: [guide.author],
      section: guide.category,
      tags: guide.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seo.metaTitle,
      description: guide.seo.metaDescription,
      images: guide.seo.ogImage ? [guide.seo.ogImage] : undefined,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide || !guide.published) {
    notFound();
  }

  const canonicalUrl = `https://aiogrowthseo.com/guides/${guide.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.excerpt,
    "author": {
      "@type": "Person",
      "name": guide.author
    },
    "datePublished": guide.publishDate,
    "dateModified": guide.lastModified || guide.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIO Growth SEO",
      "url": "https://aiogrowthseo.com"
    },
    "articleSection": guide.category,
    "keywords": guide.tags.join(", ")
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
            <Link href="/guides" className="hover:text-primary">Guides</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground truncate max-w-[200px]">{guide.title}</span>
          </nav>
        </div>

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">Table of Contents</span>
                    </div>
                    <TableOfContents content={guide.content} />
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Back Link */}
              <Link
                href="/guides"
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Guides
              </Link>

              {/* Header */}
              <header className="mb-12">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">
                    {guide.category}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {guide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-600 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={guide.publishDate}>
                      {format(new Date(guide.publishDate), 'MMMM d, yyyy')}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{guide.readingTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>By {guide.author}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {guide.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Separator className="mb-8" />
              </header>

              {/* Featured Image */}
              {guide.featuredImage && (
                <div className="mb-12">
                  <img
                    src={guide.featuredImage}
                    alt={guide.title}
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
                    h1: ({children}) => <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">{children}</h1>,
                    h2: ({children}) => <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4">{children}</h2>,
                    h3: ({children}) => <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">{children}</h3>,
                    p: ({children}) => <p className="text-slate-700 mb-6 leading-relaxed">{children}</p>,
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-slate-600 bg-primary/5 py-4 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    code: ({children}) => (
                      <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800">
                        {children}
                      </code>
                    ),
                    pre: ({children}) => (
                      <pre className="bg-slate-900 text-slate-100 p-4 md:p-6 rounded-lg overflow-x-auto my-8 text-sm">
                        {children}
                      </pre>
                    ),
                    ul: ({children}) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
                    li: ({children}) => <li className="text-slate-700">{children}</li>,
                    table: ({children}) => (
                      <div className="overflow-x-auto my-8">
                        <table className="min-w-full border-collapse border border-slate-200">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({children}) => (
                      <th className="border border-slate-200 bg-slate-100 px-4 py-2 text-left font-semibold">
                        {children}
                      </th>
                    ),
                    td: ({children}) => (
                      <td className="border border-slate-200 px-4 py-2">
                        {children}
                      </td>
                    ),
                    a: ({href, children}) => (
                      <Link href={href || '#'} className="text-primary hover:underline">
                        {children}
                      </Link>
                    ),
                  }}
                >
                  {guide.content}
                </ReactMarkdown>
              </div>

              {/* Share Section */}
              <GuideShareButtons guide={guide} canonicalUrl={canonicalUrl} />

              {/* CTA Section */}
              <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6 md:p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">Need Help Implementing These Strategies?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team specializes in SEO, GEO, and AI search optimization. Let&apos;s discuss how we can help your business grow.
                  </p>
                  <Link href="/contact">
                    <Button>Schedule a Free Consultation</Button>
                  </Link>
                </CardContent>
              </Card>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
