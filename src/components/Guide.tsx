import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { format } from 'date-fns';
import { Calendar, Clock, Share2, Twitter, Linkedin, Facebook, Mail, BookOpen, ChevronRight } from 'lucide-react';
import { Guide as GuideType, ShareLinks, TableOfContentsItem } from '@/types/guide';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

interface GuideProps {
  guide: GuideType;
}

const generateShareLinks = (guide: GuideType, currentUrl: string): ShareLinks => {
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(guide.title);
  const encodedDescription = encodeURIComponent(guide.excerpt);

  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };
};

const extractTableOfContents = (content: string): TableOfContentsItem[] => {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');

    toc.push({ id, title, level });
  }

  return toc;
};

const Guide: React.FC<GuideProps> = ({ guide }) => {
  const canonicalUrl = `https://aiogrowthseo.com/guides/${guide.slug}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;
  const shareLinks = generateShareLinks(guide, currentUrl);
  const tableOfContents = extractTableOfContents(guide.content);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  const handleShare = (platform: keyof ShareLinks) => {
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>{guide.seo.metaTitle}</title>
        <meta name="description" content={guide.seo.metaDescription} />
        <meta name="keywords" content={guide.seo.keywords.join(', ')} />
        <meta name="author" content={guide.author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={guide.seo.metaTitle} />
        <meta property="og:description" content={guide.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {guide.seo.ogImage && <meta property="og:image" content={guide.seo.ogImage} />}
        <meta property="article:author" content={guide.author} />
        <meta property="article:published_time" content={guide.publishDate} />
        <meta property="article:section" content={guide.category} />
        {guide.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={guide.seo.metaTitle} />
        <meta name="twitter:description" content={guide.seo.metaDescription} />
        {guide.seo.ogImage && <meta name="twitter:image" content={guide.seo.ogImage} />}

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/guides" className="hover:text-primary">Guides</Link>
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
                    <nav className="space-y-1">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                            item.level === 1 ? 'font-medium' : ''
                          } ${
                            item.level === 2 ? 'pl-4' : ''
                          } ${
                            item.level === 3 ? 'pl-6 text-xs' : ''
                          } ${
                            activeSection === item.id
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:text-foreground hover:bg-slate-100'
                          }`}
                        >
                          {item.title}
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
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
                      <Link to={href || '#'} className="text-primary hover:underline">
                        {children}
                      </Link>
                    ),
                  }}
                >
                  {guide.content}
                </ReactMarkdown>
              </div>

              {/* Share Section */}
              <Card className="mt-12">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-slate-600" />
                      <span className="font-medium text-slate-900">Share this guide</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('twitter')}
                        className="flex items-center gap-2"
                      >
                        <Twitter className="w-4 h-4" />
                        <span className="hidden sm:inline">Twitter</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('facebook')}
                        className="flex items-center gap-2"
                      >
                        <Facebook className="w-4 h-4" />
                        <span className="hidden sm:inline">Facebook</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('email')}
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="hidden sm:inline">Email</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Section */}
              <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6 md:p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">Need Help Implementing These Strategies?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team specializes in SEO, GEO, and AI search optimization. Let's discuss how we can help your business grow.
                  </p>
                  <Link to="/contact">
                    <Button>Schedule a Free Consultation</Button>
                  </Link>
                </CardContent>
              </Card>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Guide;
