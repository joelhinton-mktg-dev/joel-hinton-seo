import { Helmet } from 'react-helmet-async';
import { MapPin, Globe, Crown, Palette, Languages, Building, Waves, Camera, TrendingUp, CheckCircle, ArrowRight, Zap, Brain, BarChart3, Users, Star, Phone, Mail, Calendar, DollarSign, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';

const MiamiMarketingAgency = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Miami Marketing Agency Consultation');

  return (
    <>
      <Helmet>
        <title>Miami Marketing Agency | International Business & Luxury Services Expert | Joel Hinton</title>
        <meta name="description" content="Miami marketing agency specializing in international business, luxury services, bilingual marketing, and art district culture. Expert in Brickell, South Beach, and Wynwood marketing psychology." />
        <meta name="keywords" content="Miami marketing agency, international business marketing, luxury services marketing, bilingual marketing Miami, Brickell marketing, South Beach marketing, Wynwood marketing, Miami SEO" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Miami Marketing Agency | International Business & Luxury Services Expert" />
        <meta property="og:description" content="Miami marketing agency specializing in international business, luxury services, bilingual marketing, and art district culture." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Miami Marketing Agency | International Business & Luxury Services Expert" />
        <meta name="twitter:description" content="Miami marketing agency specializing in international business, luxury services, bilingual marketing, and art district culture." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MarketingAgency",
            "name": "Joel Hinton - Miami Marketing Agency",
            "description": "Miami Marketing Agency specializing in international business, luxury services, and bilingual marketing",
            "url": "https://joelhinton.com/miami-marketing-agency",
            "telephone": "+1-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Miami",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.7617",
              "longitude": "-80.1918"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Miami"
              },
              {
                "@type": "Neighborhood",
                "name": "Brickell"
              },
              {
                "@type": "Neighborhood",
                "name": "South Beach"
              },
              {
                "@type": "Neighborhood", 
                "name": "Wynwood"
              },
              {
                "@type": "Neighborhood",
                "name": "Downtown Miami"
              },
              {
                "@type": "Neighborhood",
                "name": "Coconut Grove"
              }
            ],
            "serviceType": "Marketing Agency Services",
            "priceRange": "$$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Growth Marketing", href: "/growth-marketing" },
            { label: "Miami Marketing Agency", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Globe className="w-4 h-4 mr-2" />
                Miami International Gateway
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Miami Marketing Agency: <span className="text-primary">International Business</span> & <span className="gradient-text">Luxury Services</span> Expert
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Miami is where global business meets luxury lifestyle, where art meets commerce, and where bilingual communication is essential. I understand the sophisticated psychology of international clients, luxury consumers, and Miami's diverse cultural districts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  International Business Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Languages className="w-5 h-5 mr-2" />
                  Bilingual Marketing Consultation
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">International Business</p>
                </div>
                <div className="p-4">
                  <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Luxury Services</p>
                </div>
                <div className="p-4">
                  <Palette className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Art District Culture</p>
                </div>
                <div className="p-4">
                  <Languages className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Bilingual Psychology</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Miami Market Psychology */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Miami's <span className="gradient-text">International Market</span> Psychology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Miami is the gateway to Latin America, a luxury destination, and a cultural melting pot. Each audience requires sophisticated understanding of cultural nuances, economic patterns, and decision-making processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <Globe className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">International Business Psychology</CardTitle>
                  <CardDescription>Latin American executives, European investors, global corporations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    International clients value relationship-building, cultural sensitivity, and long-term partnerships. They make decisions through consensus and require high-touch service.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Relationship-first business culture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-generational family business dynamics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Time zone considerations for global operations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Cultural protocol and formal communication</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Crown className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Luxury Consumer Psychology</CardTitle>
                  <CardDescription>High-net-worth individuals, luxury service providers, exclusive brands</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Luxury consumers seek exclusivity, personalization, and flawless execution. They value experiences over products and expect white-glove service at every touchpoint.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Exclusivity and scarcity drive desire</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Personal brand and status considerations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Experience-driven purchasing decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Discretion and privacy paramount</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <Languages className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Bilingual Marketing Psychology</CardTitle>
                  <CardDescription>Spanish-English cultural bridge, translation vs. transcreation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Effective bilingual marketing goes beyond translation—it requires cultural adaptation, emotional resonance, and understanding of code-switching behavior in Miami's Hispanic community.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Transcreation over direct translation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Cultural context shapes message reception</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Code-switching behavior in marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Generational language preferences</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Palette className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Art District Culture</CardTitle>
                  <CardDescription>Wynwood creativity, Design District sophistication, artistic community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Miami's art scene attracts creative professionals, collectors, and cultural tourists who value authenticity, innovation, and artistic expression in their business choices.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Authenticity over mass market appeal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Visual storytelling and aesthetic quality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Community involvement and local support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Innovation and creative collaboration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* District-Specific Strategies */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Miami District <span className="gradient-text">Marketing Strategies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each Miami district has its own culture, clientele, and commercial DNA. My strategies are tailored to the specific psychology of each area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Brickell Financial District</CardTitle>
                  <CardDescription>International banking, luxury residential, business elite</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Miami's Manhattan - targeting international executives, financial services, and luxury residential. Professional, sophisticated, time-conscious decision makers.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">C-suite executives, international bankers, luxury condo residents</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Efficiency-focused, status-conscious, ROI-driven decisions</p>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">B2B networking, luxury positioning, multilingual professional content</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Waves className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">South Beach Lifestyle</CardTitle>
                  <CardDescription>Art Deco luxury, nightlife, international tourism</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Global playground for celebrities, influencers, and luxury tourists. Experience-driven, image-conscious, social media savvy audience.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-pink-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">Luxury tourists, celebrities, hospitality businesses, fashion brands</p>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Experience-first, social proof important, visual aesthetics crucial</p>
                    </div>
                    <div className="bg-cyan-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">Influencer partnerships, visual storytelling, event-based marketing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Palette className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Wynwood Arts District</CardTitle>
                  <CardDescription>Street art, creative community, artistic entrepreneurship</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Creative hub attracting artists, galleries, and cultural businesses. Community-focused, authenticity-driven, innovation-seeking audience.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">Artists, galleries, creative agencies, cultural tourists, young professionals</p>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Authenticity-seeking, community-minded, anti-corporate sentiment</p>
                    </div>
                    <div className="bg-indigo-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">Grassroots marketing, community partnerships, artistic collaboration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Miami Marketing Process */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                My Miami <span className="gradient-text">Marketing Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sophisticated strategies that honor Miami's international sophistication while driving measurable business results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 1: Cultural Market Analysis</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 1-2</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    International audience segmentation and analysis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Luxury consumer behavior mapping
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Bilingual keyword research and cultural context
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    District-specific competitive analysis
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Understanding culture before crafting campaigns"</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 2: Sophisticated Content Strategy</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 3-4</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Bilingual content transcreation (not translation)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Luxury brand positioning and messaging
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    International SEO and cultural optimization
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Art district community engagement strategies
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Sophisticated content that crosses cultural boundaries"</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 3: Luxury Implementation</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 5-6</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    White-glove campaign execution
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    International business network integration
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Luxury market event and partnership strategy
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Sophisticated performance tracking and reporting
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Execution as refined as Miami itself"</p>
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
                Miami <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from Miami businesses that understood their sophisticated market's unique psychology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Crown className="w-6 h-6 text-primary" />
                    Brickell Luxury Real Estate
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">400% increase in international luxury inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-destructive/10 rounded-lg">
                      <div className="text-2xl font-bold text-destructive">5</div>
                      <div className="text-sm text-muted-foreground">Intl inquiries/month (before)</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">20+</div>
                      <div className="text-sm text-muted-foreground">Intl inquiries/month (after)</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Key wins: Bilingual luxury positioning + international network targeting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Strategy: Cultural transcreation + high-net-worth psychology</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Palette className="w-6 h-6 text-primary" />
                    Wynwood Art Gallery
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">300% increase in art collector engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Challenge:</span>
                        <span className="text-right font-medium">Competing with established South Beach galleries</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Solution:</span>
                        <span className="text-right font-medium">Authentic community engagement + artist storytelling</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Result:</span>
                        <span className="text-right font-medium text-primary">Became destination for serious collectors</span>
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
                    "Joel understood our international clients in a way other agencies couldn't. His bilingual approach isn't just translation—it's cultural fluency. Our Latin American client base has grown 400% in eight months."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">Roberto Mendez, Managing Partner, Brickell Investment Group</cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Seasonal Considerations */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Miami's <span className="gradient-text">Seasonal Marketing</span> Calendar
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Miami's marketing calendar is driven by international events, luxury season, and cultural celebrations that shape consumer behavior.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Peak Luxury Season (December-April)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    International visitors, snowbirds, and luxury spending peak. Art Basel, boat shows, and high-society events drive premium market activity.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">December: Art Basel Week</h4>
                      <p className="text-xs text-muted-foreground">International art market, luxury hospitality, high-end retail surge</p>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">January-March: Snowbird Season</h4>
                      <p className="text-xs text-muted-foreground">Luxury services, fine dining, cultural events, real estate interest</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">April: Peak Business</h4>
                      <p className="text-xs text-muted-foreground">Corporate events, international conferences, networking opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Cultural & Business Cycles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Miami's unique position as Latin America's business capital creates specific marketing opportunities tied to regional events and business cycles.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Summer: Local Focus</h4>
                      <p className="text-xs text-muted-foreground">Community events, local business support, Wynwood art scene activity</p>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Fall: Business Quarter</h4>
                      <p className="text-xs text-muted-foreground">Latin American business connections, trade events, corporate partnerships</p>
                    </div>
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Year-Round: International Gateway</h4>
                      <p className="text-xs text-muted-foreground">Constant flow of international business, luxury tourism, cultural exchange</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Miami Marketing <span className="gradient-text">FAQs</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you approach bilingual marketing beyond simple translation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  True bilingual marketing requires transcreation—adapting concepts, emotions, and cultural references for different audiences. I understand Miami's unique code-switching culture where Spanish and English blend naturally. Content is crafted to resonate culturally, not just linguistically, considering generational differences in language preferences among Miami's Hispanic community.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes luxury marketing different in Miami versus other markets?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Miami luxury consumers are more internationally minded and experience-focused than traditional luxury markets. They value exclusivity but also authenticity and cultural sophistication. The market includes both established wealth and new money from Latin America, each with different psychological drivers. Discretion, cultural sensitivity, and relationship-building are paramount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you target the different Miami districts effectively?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Each district has distinct demographics and psychographics. Brickell requires professional B2B messaging for international executives. South Beach needs lifestyle and experience-focused content for tourists and hospitality. Wynwood demands authentic, community-focused approaches that respect the artistic culture. I adapt messaging, channels, and timing for each district's unique rhythm.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do international business marketing strategies work in Miami?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  International business in Miami requires understanding Latin American corporate culture, time zones, decision-making hierarchies, and relationship-building protocols. Marketing must account for family business dynamics, formal communication styles, and the importance of personal connections. Success requires patience, cultural sensitivity, and long-term relationship focus rather than quick transactional approaches.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Conquer Miami's Sophisticated Market?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Miami marketing consultation. I'll show you exactly how to capture the international business community, 
                luxury consumers, and cultural districts with psychology-driven strategies.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Miami Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized marketing strategy for the Miami market within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700 mb-4">
                      Your Miami consultation request has been submitted successfully.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I'll review your information and get back to you within 24 hours with your personalized Miami marketing strategy.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(305) 555-0123"
                          {...register("phone")}
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select onValueChange={(value) => setValue("businessType", value, { shouldValidate: true })}>
                          <SelectTrigger className={errors.businessType ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="international-business">International Business</SelectItem>
                            <SelectItem value="luxury-services">Luxury Services</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="hospitality">Hospitality & Tourism</SelectItem>
                            <SelectItem value="professional-services">Professional Services</SelectItem>
                            <SelectItem value="restaurant">Restaurant & Dining</SelectItem>
                            <SelectItem value="art-culture">Art & Culture</SelectItem>
                            <SelectItem value="financial">Financial Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.businessType && (
                          <p className="text-sm text-destructive">{errors.businessType.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="marketingChallenge">Tell us about your marketing challenge *</Label>
                      <Textarea
                        id="marketingChallenge"
                        placeholder="What's your biggest marketing challenge in the Miami market? Are you struggling to reach the international business community, luxury consumers, or cultural districts? What results are you looking for?"
                        className={`min-h-[120px] ${errors.marketingChallenge ? "border-destructive" : ""}`}
                        {...register("marketingChallenge")}
                      />
                      {errors.marketingChallenge && (
                        <p className="text-sm text-destructive">{errors.marketingChallenge.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" />
                          Schedule Free Miami Consultation
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      No spam. No sales calls. Just valuable Miami marketing insights delivered within 24 hours.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving all of Greater Miami: Brickell, South Beach, Wynwood, Downtown Miami, Coconut Grove, and surrounding communities
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Conquer Miami's <span className="gradient-text">Sophisticated Market?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a comprehensive marketing strategy designed for Miami's international business community, luxury consumers, and cultural districts.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Join 75+ Miami businesses that chose sophisticated marketing over generic advertising</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('International Business Strategy Session');
                  openDialog();
                }}
              >
                <Globe className="w-5 h-5 mr-2" />
                International Business Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('Bilingual Marketing Consultation');
                  openDialog();
                }}
              >
                <Languages className="w-5 h-5 mr-2" />
                Bilingual Marketing Consultation
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        selectedService={selectedService}
      />
      
      <ProfessionalServiceSchema 
        serviceName="Miami Marketing Agency"
        serviceDescription="Premium marketing agency services for Miami's diverse international business community and luxury markets"
        serviceUrl="https://joelhintonmarketing.com/locations/miami-marketing-agency"
        serviceType="Digital Marketing"
      />
    </>
  );
};

export default MiamiMarketingAgency;