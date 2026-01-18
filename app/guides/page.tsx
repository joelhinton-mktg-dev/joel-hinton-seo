import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Search, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import { getPublishedGuides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'SEO & GEO Guides | Free Educational Resources | AIO Growth SEO',
  description: 'Comprehensive guides on SEO, GEO (Generative Engine Optimization), and AI search optimization. Free educational resources to help you master digital marketing.',
  keywords: ['SEO guides', 'GEO guides', 'digital marketing resources', 'SEO education', 'AI search optimization guides'],
  alternates: {
    canonical: 'https://aiogrowthseo.com/guides',
  },
  openGraph: {
    title: 'SEO & GEO Guides | Free Educational Resources | AIO Growth SEO',
    description: 'Comprehensive guides on SEO, GEO, and AI search optimization. Free educational resources for digital marketers.',
    type: 'website',
    url: 'https://aiogrowthseo.com/guides',
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  'SEO Fundamentals': <Search className="w-5 h-5" />,
  'AI & GEO': <Sparkles className="w-5 h-5" />,
  'Strategy': <TrendingUp className="w-5 h-5" />,
  'Industry Trends': <TrendingUp className="w-5 h-5" />,
};

export default function GuidesPage() {
  const guides = getPublishedGuides();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SEO & GEO Guides",
    "description": "Comprehensive guides on SEO, GEO, and AI search optimization",
    "url": "https://aiogrowthseo.com/guides",
    "publisher": {
      "@type": "Organization",
      "name": "AIO Growth SEO",
      "url": "https://aiogrowthseo.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": guides.map((guide, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://aiogrowthseo.com/guides/${guide.slug}`,
        "name": guide.title
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background">
        <PageBreadcrumb
          items={[
            { label: "Guides", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Free Educational Resources
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">SEO & GEO Guides</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive guides to help you master Search Engine Optimization, Generative Engine Optimization,
              and AI-powered search strategies. Learn from industry experts.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                {guides.length} Comprehensive Guides
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Updated for 2026
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                100% Free
              </Badge>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 md:gap-8">
              {guides.map((guide) => (
                <Card key={guide.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {categoryIcons[guide.category] || <BookOpen className="w-5 h-5" />}
                        </div>
                        <Badge variant="secondary">{guide.category}</Badge>
                      </div>

                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                          <Link href={`/guides/${guide.slug}`}>
                            {guide.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          {guide.excerpt}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{guide.readingTime} min read</span>
                          </div>
                          <span>By {guide.author}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {guide.tags.slice(0, 4).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Link href={`/guides/${guide.slug}`}>
                          <Button variant="default" className="group/btn">
                            Read Guide
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Personalized Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our guides are a great starting point, but every business is unique.
              Schedule a free consultation to discuss your specific SEO and GEO needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Search className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">SEO Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Technical SEO, content strategy, and link building to improve your search rankings.
                </p>
                <Link href="/seo-services">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </Card>

              <Card className="text-center p-6">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GEO Optimization</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Optimize for AI search engines like ChatGPT and Perplexity to increase brand visibility.
                </p>
                <Link href="/geo-optimization">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </Card>

              <Card className="text-center p-6">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Local SEO</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Dominate local search results and Google Business Profile for your service area.
                </p>
                <Link href="/local-seo">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
