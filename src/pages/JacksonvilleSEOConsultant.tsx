import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Anchor, Users, Calendar, Phone, Mail, Star, Shield, Waves, Building2, TrendingUp, CheckCircle, ArrowRight, Zap, Brain, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const JacksonvilleSEOConsultant = () => {
  return (
    <>
      <Helmet>
        <title>Jacksonville SEO Consultant | Military Families & Beach Communities Expert | Joel Hinton</title>
        <meta name="description" content="Jacksonville SEO consultant specializing in military families, beach communities, maritime industry, and Riverside/Avondale districts. Local business psychology and seasonal marketing strategies." />
        <meta name="keywords" content="Jacksonville SEO, Jacksonville digital marketing, military family marketing, beach community SEO, maritime industry SEO, Riverside Avondale marketing, Jacksonville local SEO" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Jacksonville SEO Consultant | Military Families & Beach Communities Expert" />
        <meta property="og:description" content="Jacksonville SEO consultant specializing in military families, beach communities, maritime industry, and local business psychology." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jacksonville SEO Consultant | Military Families & Beach Communities Expert" />
        <meta name="twitter:description" content="Jacksonville SEO consultant specializing in military families, beach communities, maritime industry, and local business psychology." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Joel Hinton - Jacksonville SEO Consultant",
            "description": "Jacksonville SEO Consultant specializing in military families, beach communities, and maritime industry",
            "url": "https://joelhinton.com/jacksonville-seo-consultant",
            "telephone": "+1-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Jacksonville"
              },
              {
                "@type": "Neighborhood",
                "name": "Riverside"
              },
              {
                "@type": "Neighborhood",
                "name": "Avondale"
              },
              {
                "@type": "Neighborhood",
                "name": "Atlantic Beach"
              },
              {
                "@type": "Neighborhood", 
                "name": "Neptune Beach"
              },
              {
                "@type": "Neighborhood",
                "name": "Jacksonville Beach"
              }
            ],
            "serviceType": "SEO Consulting Services",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "SEO Services", href: "/seo-services" },
            { label: "Jacksonville SEO Consultant", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Jacksonville Local Expert
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Jacksonville SEO Consultant: <span className="text-primary">Military Families</span> & <span className="gradient-text">Beach Communities</span> Expert
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                As the largest city by land area in the continental US, Jacksonville's unique psychology blends military precision with coastal relaxation. I understand how to reach military families, beach lovers, maritime professionals, and Riverside/Avondale's artistic community with SEO that converts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Jacksonville SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Military Family Marketing Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Military Families</p>
                </div>
                <div className="p-4">
                  <Waves className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Beach Communities</p>
                </div>
                <div className="p-4">
                  <Anchor className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Maritime Industry</p>
                </div>
                <div className="p-4">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Riverside/Avondale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Market Psychology */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Understanding Jacksonville's <span className="gradient-text">Unique Psychology</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Jacksonville isn't just another Florida city. It's where military discipline meets beach culture, where maritime tradition blends with artistic expression, and where seasonal patterns create unique consumer behaviors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Military Family Psychology</CardTitle>
                  <CardDescription>Naval Air Station Jacksonville & Mayport Naval Station influence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Military families value reliability, security, and clear communication. They make decisions based on trust, referrals, and proven track records.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Decision-making involves spouse consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Value long-term relationships over quick sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Research extensively before purchasing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Deployment cycles affect timing decisions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Waves className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Beach Community Mindset</CardTitle>
                  <CardDescription>Atlantic Beach, Neptune Beach & Jacksonville Beach culture</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Beach communities prioritize lifestyle, experiences, and maintaining their coastal paradise. They're environmentally conscious and community-focused.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Environmental sustainability matters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Community involvement influences trust</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Lifestyle over luxury mentality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Hurricane preparedness is always top-of-mind</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <Anchor className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Maritime Industry Focus</CardTitle>
                  <CardDescription>Port of Jacksonville & marine commerce psychology</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Maritime professionals value precision, safety, and efficiency. They're practical decision-makers who appreciate straightforward, no-nonsense communication.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Safety and compliance are non-negotiable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">ROI-focused purchasing decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">24/7 availability expectations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Industry certifications matter significantly</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Riverside/Avondale Districts</CardTitle>
                  <CardDescription>Historic charm meets modern sophistication</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    These historic districts attract educated professionals, artists, and young families who value authenticity, local businesses, and community character.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Support for local, independent businesses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Historical preservation awareness</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Arts and culture appreciation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Walkability and community events matter</span>
                    </div>
                  </div>
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
                Jacksonville's <span className="gradient-text">Seasonal Marketing</span> Considerations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your Jacksonville SEO strategy must account for unique seasonal patterns that affect consumer behavior throughout the year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Hurricane Season Psychology (June-November)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Hurricane season creates unique psychological patterns that affect everything from home improvement purchases to insurance decisions.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-destructive/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Peak Preparation (May-June)</h4>
                      <p className="text-xs text-muted-foreground">Home services, emergency supplies, insurance reviews</p>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Active Season (July-October)</h4>
                      <p className="text-xs text-muted-foreground">Travel cancellations, staycation bookings, emergency services</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Recovery Planning (November)</h4>
                      <p className="text-xs text-muted-foreground">Damage repair, landscape restoration, winter preparations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Tourism & Military Cycles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Jacksonville's tourism patterns and military deployment cycles create predictable consumer behavior changes throughout the year.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Winter Tourism Peak (December-March)</h4>
                      <p className="text-xs text-muted-foreground">Golf tourism, beach activities, dining, hospitality surge</p>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Spring Break & Events (March-April)</h4>
                      <p className="text-xs text-muted-foreground">TPC Sawgrass, Jacksonville Jazz Festival, youth sports</p>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Military PCS Season (Summer)</h4>
                      <p className="text-xs text-muted-foreground">Real estate activity, moving services, family services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Strategy for Jacksonville */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                My Jacksonville <span className="gradient-text">SEO Strategy</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Combining military precision with beach community authenticity to create SEO campaigns that resonate with each Jacksonville audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 1: Military-Grade Technical Foundation</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 1-2</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Complete technical SEO audit with military precision
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Mobile-first optimization for beach/boat browsing
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Local schema for military base proximity
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Hurricane-proof hosting and performance
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Mission-critical reliability meets beach accessibility"</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 2: Community-Specific Content</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 3-4</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Military family-focused content strategy
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Beach community lifestyle optimization
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Maritime industry B2B positioning
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Riverside/Avondale cultural targeting
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Content that speaks to Jacksonville's diverse communities"</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 3: Seasonal Optimization</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 5-6</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Hurricane season marketing automation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Military PCS cycle targeting
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Tourism season optimization
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Year-round performance monitoring
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Scalable systems for seasonal success"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Jacksonville <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from Jacksonville businesses that understood their community's unique psychology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Military Family Dental Practice
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">300% increase in military family appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-destructive/10 rounded-lg">
                      <div className="text-2xl font-bold text-destructive">15</div>
                      <div className="text-sm text-muted-foreground">Military families/month (before)</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">45+</div>
                      <div className="text-sm text-muted-foreground">Military families/month (after)</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Key wins: TRICARE-focused content + military community engagement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Strategy: Deployment-friendly scheduling + family-focused messaging</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Waves className="w-6 h-6 text-primary" />
                    Beach Community Restaurant
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">250% increase in local beach community diners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Challenge:</span>
                        <span className="text-right font-medium">Competing with chain restaurants near beach</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Solution:</span>
                        <span className="text-right font-medium">Local community focus + sustainability messaging</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Result:</span>
                        <span className="text-right font-medium text-primary">Became the go-to local spot for beach residents</span>
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
                    "Joel understood our military community in a way that other marketers couldn't. He knows how military families think and make decisions. Our patient base from NAS Jacksonville has tripled in six months."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">Dr. Sarah Mitchell, Oceanfront Family Dental</cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Jacksonville SEO <span className="gradient-text">FAQs</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you target military families differently in Jacksonville?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Military families have unique decision-making patterns. They value trust, security, and long-term relationships. I create content that addresses deployment concerns, TRICARE benefits, PCS moves, and family stability. Location-based targeting focuses on proximity to NAS Jacksonville and Mayport Naval Station.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes beach community SEO different in Jacksonville?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Beach communities prioritize lifestyle and environmental consciousness. They support local businesses and value community involvement. My strategy emphasizes local partnerships, sustainable practices, and community events. Content focuses on lifestyle benefits rather than luxury positioning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do seasonal factors affect Jacksonville SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Jacksonville has unique seasonal patterns: hurricane season creates urgency for home services, military PCS season drives real estate activity, and tourism cycles affect hospitality businesses. I build automated seasonal campaigns that adjust messaging and targeting based on these predictable patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What's special about marketing to Riverside/Avondale residents?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Riverside/Avondale attracts educated professionals and artists who value authenticity and local character. They support independent businesses and are culturally engaged. SEO strategy emphasizes historical significance, arts community involvement, walkability, and local business partnerships.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Dominate Jacksonville <span className="gradient-text">Search Results?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a free SEO audit specifically designed for Jacksonville's unique military, beach, and maritime communities.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Join 50+ Jacksonville businesses that chose community-focused SEO over generic marketing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Get Your Free Jacksonville SEO Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Military Family Marketing Strategy
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default JacksonvilleSEOConsultant;