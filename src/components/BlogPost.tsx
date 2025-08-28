import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { format } from 'date-fns';
import { Calendar, Clock, Share2, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import { BlogPost as BlogPostType, ShareLinks } from '@/types/blog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPostProps {
  post: BlogPostType;
}

const generateShareLinks = (post: BlogPostType, currentUrl: string): ShareLinks => {
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const encodedDescription = encodeURIComponent(post.excerpt);

  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareLinks = generateShareLinks(post, currentUrl);

  const handleShare = (platform: keyof ShareLinks) => {
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>{post.seo.metaTitle}</title>
        <meta name="description" content={post.seo.metaDescription} />
        <meta name="keywords" content={post.seo.keywords.join(', ')} />
        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.seo.metaTitle} />
        <meta property="og:description" content={post.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        {post.seo.ogImage && <meta property="og:image" content={post.seo.ogImage} />}
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo.metaTitle} />
        <meta name="twitter:description" content={post.seo.metaDescription} />
        {post.seo.ogImage && <meta name="twitter:image" content={post.seo.ogImage} />}
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
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
              "@id": currentUrl
            },
            "publisher": {
              "@type": "Organization",
              "name": "Joel Hinton Marketing"
            },
            "articleSection": post.category,
            "keywords": post.tags.join(", ")
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <article>
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
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Share Section */}
            <Card className="mt-12">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-slate-600" />
                    <span className="font-medium text-slate-900">Share this article</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('email')}
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;