import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Anchor, Crown, Waves, Gem, Sailboat, Building2, Calendar, Phone, Mail, Star, TrendingUp, CheckCircle, ArrowRight, Zap, Brain, BarChart3, Users, DollarSign, Compass, Ship } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FortLauderdaleAdvertising = () => {
  return (
    <>
      <Helmet>
        <title>Fort Lauderdale Advertising Agency | Yachting Community & Luxury Lifestyle Expert | Joel Hinton</title>
        <meta name="description" content="Fort Lauderdale advertising agency specializing in yachting community, luxury lifestyle, Las Olas Boulevard sophistication, and high-net-worth consumer psychology. Expert marine industry marketing." />
        <meta name="keywords" content="Fort Lauderdale advertising, yachting community marketing, luxury lifestyle advertising, Las Olas Boulevard marketing, high-net-worth marketing, marine industry advertising, Fort Lauderdale SEO" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Fort Lauderdale Advertising Agency | Yachting Community & Luxury Lifestyle Expert" />
        <meta property="og:description" content="Fort Lauderdale advertising agency specializing in yachting community, luxury lifestyle, and high-net-worth consumer psychology." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fort Lauderdale Advertising Agency | Yachting Community & Luxury Lifestyle Expert" />
        <meta name="twitter:description" content="Fort Lauderdale advertising agency specializing in yachting community, luxury lifestyle, and high-net-worth consumer psychology." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AdvertisingAgency",
            "name": "Joel Hinton - Fort Lauderdale Advertising Agency",
            "description": "Fort Lauderdale Advertising Agency specializing in yachting community and luxury lifestyle marketing",
            "url": "https://joelhinton.com/fort-lauderdale-advertising",
            "telephone": "+1-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fort Lauderdale",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "26.1224",
              "longitude": "-80.1373"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Fort Lauderdale"
              },
              {
                "@type": "Neighborhood",
                "name": "Las Olas Boulevard"
              },
              {
                "@type": "Neighborhood",
                "name": "Victoria Park"
              },
              {
                "@type": "Neighborhood", 
                "name": "Rio Vista"
              },
              {
                "@type": "Neighborhood",
                "name": "Harbor Beach"
              },
              {
                "@type": "Neighborhood",
                "name": "Lauderdale-by-the-Sea"
              }
            ],
            "serviceType": "Advertising Agency Services",
            "priceRange": "$$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Paid Advertising", href: "/paid-advertising" },
            { label: "Fort Lauderdale Advertising", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Anchor className="w-4 h-4 mr-2" />
                Yachting Capital of the World
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Fort Lauderdale Advertising: <span className="text-primary">Yachting Community</span> & <span className="gradient-text">Luxury Lifestyle</span> Expert
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Fort Lauderdale's sophistication flows from the New River to Las Olas Boulevard, where yacht owners, luxury connoisseurs, and high-net-worth individuals create a unique market psychology. I understand the refined tastes and exclusive expectations of America's premier boating community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Sailboat className="w-5 h-5 mr-2" />
                  Yachting Community Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Crown className="w-5 h-5 mr-2" />
                  Luxury Lifestyle Campaign
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <Anchor className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Yachting Community</p>
                </div>
                <div className="p-4">
                  <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Luxury Lifestyle</p>
                </div>
                <div className="p-4">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Las Olas Boulevard</p>
                </div>
                <div className="p-4">
                  <Gem className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">High-Net-Worth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fort Lauderdale Market Psychology */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fort Lauderdale's <span className="gradient-text">Sophisticated Market</span> Psychology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fort Lauderdale attracts discerning individuals who value quality, authenticity, and exclusivity. From yacht owners to luxury service providers, each audience segment has distinct psychological drivers and decision-making patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <Anchor className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Yachting Community Psychology</CardTitle>
                  <CardDescription>Yacht owners, marine professionals, boating enthusiasts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The yachting community values expertise, quality craftsmanship, and proven performance. They make considered decisions based on reputation, technical specifications, and peer recommendations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Technical expertise and industry knowledge crucial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Peer referrals and marina community influence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Quality and craftsmanship over price considerations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Seasonal purchasing tied to boating calendar</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Crown className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">High-Net-Worth Consumer Psychology</CardTitle>
                  <CardDescription>Affluent residents, luxury service clients, exclusive community members</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    High-net-worth individuals seek personalized service, exclusive access, and premium experiences. They value time efficiency, discretion, and white-glove treatment.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Personalization and bespoke service expectations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Time is the ultimate luxury commodity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Privacy and discretion paramount</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Exclusive access and VIP treatment expected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Las Olas Boulevard Sophistication</CardTitle>
                  <CardDescription>Upscale shopping, fine dining, cultural appreciation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Las Olas Boulevard attracts sophisticated consumers who appreciate fine dining, boutique shopping, and cultural experiences. They value authenticity, curation, and lifestyle enhancement.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Curated experiences over mass market</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local knowledge and insider recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Aesthetic appeal and ambiance importance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Social status and lifestyle expression</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Waves className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Marine Industry Ecosystem</CardTitle>
                  <CardDescription>Boat shows, marine services, luxury waterfront lifestyle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The marine industry ecosystem includes manufacturers, dealers, service providers, and enthusiasts who share common values of quality, performance, and maritime tradition.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Industry expertise and credentials matter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Boat show and event marketing opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">B2B relationships and partnership networks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Performance data and specifications critical</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Neighborhood Targeting */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fort Lauderdale <span className="gradient-text">Luxury Districts</span> Strategy
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each Fort Lauderdale neighborhood attracts distinct luxury market segments with unique preferences and psychological drivers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Las Olas Boulevard</CardTitle>
                  <CardDescription>The Rodeo Drive of Fort Lauderdale</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Upscale shopping, fine dining, and cultural sophistication. Targeting affluent locals, tourists, and yacht owners seeking premium experiences and luxury goods.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">Luxury shoppers, fine dining enthusiasts, cultural patrons</p>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Sophistication-seeking, experience-focused, status-conscious</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">Curated experiences, luxury positioning, cultural partnerships</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Anchor className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Harbor Beach</CardTitle>
                  <CardDescription>Oceanfront luxury living</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Exclusive oceanfront community with luxury condos and beach access. Targeting high-net-worth individuals seeking premium coastal lifestyle and privacy.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-cyan-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">Luxury condo owners, snowbirds, beach lifestyle enthusiasts</p>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Privacy-focused, lifestyle-driven, quality-conscious</p>
                    </div>
                    <div className="bg-pink-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">Exclusive access, luxury services, beach lifestyle marketing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Ship className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Rio Vista</CardTitle>
                  <CardDescription>Waterfront estates and yacht access</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Prestigious waterfront neighborhood with deep-water access. Targeting yacht owners, luxury home buyers, and marine industry professionals.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-indigo-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">Yacht owners, waterfront estate owners, marine executives</p>
                    </div>
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Maritime-focused, performance-oriented, network-conscious</p>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">Marine industry partnerships, yacht club relationships, waterfront focus</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fort Lauderdale Advertising Process */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                My Fort Lauderdale <span className="gradient-text">Advertising Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sophisticated advertising strategies that resonate with Fort Lauderdale's discerning luxury market and yachting community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 1: Luxury Market Analysis</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 1-2</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    High-net-worth audience identification and profiling
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Yachting community behavior and preference analysis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Las Olas Boulevard luxury market research
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Marine industry competitive landscape mapping
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Understanding affluence before creating campaigns"</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 2: Premium Content Creation</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 3-4</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Luxury brand messaging and positioning
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Yachting community-specific content strategy
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    High-net-worth psychological targeting
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Sophisticated visual and lifestyle creative development
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Premium content for premium audiences"</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 3: Exclusive Campaign Execution</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 5-6</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Premium platform advertising deployment
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Yacht club and marina partnership integration
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Las Olas Boulevard business network activation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Luxury market performance optimization
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Exclusive execution for exclusive markets"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seasonal Considerations */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fort Lauderdale's <span className="gradient-text">Seasonal Luxury</span> Calendar
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fort Lauderdale's luxury market follows predictable seasonal patterns driven by boating calendars, snowbird seasons, and major marine events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <Sailboat className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Boating Season Peak (October-May)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Prime boating weather brings yacht owners, marine services surge, and luxury hospitality peak. Major boat shows and marine events drive industry activity.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">October-November: Season Opening</h4>
                      <p className="text-xs text-muted-foreground">Yacht commissioning, marine services, luxury dining returns</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">December-February: Peak Activity</h4>
                      <p className="text-xs text-muted-foreground">Fort Lauderdale Boat Show, luxury shopping, fine dining peak</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">March-May: Spring Events</h4>
                      <p className="text-xs text-muted-foreground">Marina events, yacht club activities, marine industry networking</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Crown className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Luxury Market Cycles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Luxury spending patterns align with seasonal residents, major events, and high-society calendars that define Fort Lauderdale's affluent community.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Winter Season: Peak Luxury</h4>
                      <p className="text-xs text-muted-foreground">Snowbird residents, luxury real estate, high-end retail activity</p>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Spring: Event Season</h4>
                      <p className="text-xs text-muted-foreground">Las Olas events, gallery openings, luxury service demand</p>
                    </div>
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Summer: Local Focus</h4>
                      <p className="text-xs text-muted-foreground">Year-round resident targeting, marine maintenance, local luxury services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fort Lauderdale <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from Fort Lauderdale luxury businesses that understood their sophisticated market's unique psychology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Anchor className="w-6 h-6 text-primary" />
                    Luxury Marine Services
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">500% increase in yacht owner client acquisition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-destructive/10 rounded-lg">
                      <div className="text-2xl font-bold text-destructive">8</div>
                      <div className="text-sm text-muted-foreground">Yacht clients/month (before)</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">40+</div>
                      <div className="text-sm text-muted-foreground">Yacht clients/month (after)</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Key wins: Marina partnerships + yacht owner psychology targeting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Strategy: Technical expertise positioning + referral network activation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Crown className="w-6 h-6 text-primary" />
                    Las Olas Luxury Boutique
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">350% increase in high-net-worth customer base</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Challenge:</span>
                        <span className="text-right font-medium">Competing with established luxury retailers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Solution:</span>
                        <span className="text-right font-medium">Exclusive curation + personalized service focus</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Result:</span>
                        <span className="text-right font-medium text-primary">Became destination for discerning shoppers</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Client Testimonial */}
            <Card className="card-professional border-primary/20 bg-primary/5 max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-4">
                    "Joel understood our yacht owner clients in a way other agencies couldn't. His campaigns speak to the sophisticated tastes and technical knowledge of serious boaters. Our service bookings from luxury yacht owners have increased 500% in six months."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">Captain Michael Stevens, Elite Marine Services</cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fort Lauderdale Advertising <span className="gradient-text">FAQs</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you target the yachting community effectively in Fort Lauderdale?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The yachting community values technical expertise, quality craftsmanship, and peer recommendations. I focus on marina partnerships, yacht club relationships, and boat show presence. Content emphasizes performance data, certifications, and industry credentials. Timing campaigns around boating seasons and major marine events maximizes engagement with active yacht owners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes high-net-worth marketing different in Fort Lauderdale?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  High-net-worth individuals in Fort Lauderdale expect personalized service, exclusive access, and discretion. They value time efficiency and premium experiences over price considerations. Marketing must emphasize white-glove service, exclusive access, and sophisticated positioning. Privacy and discretion are paramount in all communications and targeting strategies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do seasonal patterns affect Fort Lauderdale luxury marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Fort Lauderdale's luxury market peaks during boating season (October-May) when snowbird residents and optimal weather drive yacht activity and luxury spending. The Fort Lauderdale International Boat Show in late October is a critical marketing moment. Summer focuses on year-round residents and marine maintenance services. Campaigns must adapt to these predictable luxury consumption cycles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What's special about Las Olas Boulevard marketing opportunities?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Las Olas Boulevard attracts sophisticated consumers who appreciate curated experiences, fine dining, and boutique shopping. Marketing here requires emphasis on exclusivity, local knowledge, and aesthetic appeal. The area's cultural sophistication means content must demonstrate refined taste and insider access. Partnership opportunities with galleries, restaurants, and luxury retailers create authentic luxury positioning.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Capture Fort Lauderdale's <span className="gradient-text">Luxury Market?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a comprehensive advertising strategy designed for Fort Lauderdale's yachting community, luxury consumers, and sophisticated market segments.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Join 60+ Fort Lauderdale businesses that chose sophisticated advertising over generic marketing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg">
                <Anchor className="w-5 h-5 mr-2" />
                Yachting Community Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                <Crown className="w-5 h-5 mr-2" />
                Luxury Market Analysis
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FortLauderdaleAdvertising;