import { Helmet } from 'react-helmet-async';
import { MapPin, Home, Zap, CheckCircle, ArrowRight, Phone, Mail, Calendar, Star, TrendingUp, Brain, BarChart3, Users, DollarSign, Car, Flag, Waves, Building2, Sun, Clock, Shield, Heart, Trophy, Compass, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

const DaytonaBeachDigitalMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Daytona Beach Marketing Audit');

  return (
    <>
      <Helmet>
        <title>Daytona Beach Digital Marketing | NASCAR Culture & Motorsports Expert | Joel Hinton</title>
        <meta name="description" content="Daytona Beach digital marketing with deep local expertise. NASCAR culture, motorsports tourism, beach lifestyle psychology. Home field advantage with fastest response times." />
        <meta name="keywords" content="Daytona Beach digital marketing, NASCAR marketing, motorsports tourism, beach lifestyle marketing, Daytona SEO, local digital marketing expert" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Daytona Beach Digital Marketing | NASCAR Culture & Motorsports Expert" />
        <meta property="og:description" content="Daytona Beach digital marketing with deep local expertise. NASCAR culture, motorsports tourism, beach lifestyle psychology." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daytona Beach Digital Marketing | NASCAR Culture & Motorsports Expert" />
        <meta name="twitter:description" content="Daytona Beach digital marketing with deep local expertise. NASCAR culture, motorsports tourism, beach lifestyle psychology." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Joel Hinton - Daytona Beach Digital Marketing",
            "description": "Daytona Beach Digital Marketing Expert specializing in NASCAR culture and motorsports tourism psychology",
            "url": "https://joelhinton.com/daytona-beach-digital-marketing",
            "telephone": "+1-386-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Daytona Beach",
              "addressRegion": "FL",
              "postalCode": "32114",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.2108",
              "longitude": "-81.0228"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Daytona Beach"
              },
              {
                "@type": "City",
                "name": "Ormond Beach"
              },
              {
                "@type": "City",
                "name": "Port Orange"
              },
              {
                "@type": "City",
                "name": "South Daytona"
              },
              {
                "@type": "City",
                "name": "Holly Hill"
              },
              {
                "@type": "Neighborhood",
                "name": "Main Street District"
              },
              {
                "@type": "Neighborhood",
                "name": "Downtown Daytona Beach"
              }
            ],
            "serviceType": "Digital Marketing Services",
            "priceRange": "$$",
            "founder": {
              "@type": "Person",
              "name": "Joel Hinton"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Areas We Serve", href: "/areas-we-serve" },
            { label: "Daytona Beach Digital Marketing", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Home className="w-4 h-4 mr-2" />
                My Home Base & Flagship Location
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Daytona Beach Digital Marketing: <span className="text-primary">Home Field</span> Advantage with <span className="gradient-text">NASCAR Culture</span> Expertise
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                Born and raised in Daytona Beach, I understand the unique psychology that drives our community - from NASCAR Nation to beach tourism, 
                from snowbird seasons to Bike Week crowds. This is more than my business location; it's my home, my community, and my deepest area of expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Flag className="w-5 h-5 mr-2" />
                  NASCAR Community Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  In-Person Consultation Available
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
                <div className="p-4">
                  <Flag className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">NASCAR Culture</p>
                </div>
                <div className="p-4">
                  <Waves className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Beach Tourism</p>
                </div>
                <div className="p-4">
                  <Car className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Motorsports Events</p>
                </div>
                <div className="p-4">
                  <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Local Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Field Advantage */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="gradient-text">Home Field Advantage</span> in Daytona Beach
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                When Daytona Beach is your home, you don't just understand the market - you live it, breathe it, and connect with it on a personal level. 
                Here's what 20+ years of local roots brings to your marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <Home className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Deep Community Roots</CardTitle>
                  <CardDescription>Born & raised in Daytona Beach - this is home</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Twenty years of living, working, and building relationships in Daytona Beach gives me insights that outside agencies simply cannot match. 
                    I understand the local culture from personal experience, not market research.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Personal connections throughout the community</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Intimate knowledge of local business ecosystem</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Understanding of community values and priorities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Participation in local events and organizations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Fastest Response & Service</CardTitle>
                  <CardDescription>In-person meetings and immediate support available</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Being local means I can meet you in person, respond to urgent needs immediately, and provide hands-on support when you need it most. 
                    No waiting for remote teams or dealing with time zone delays.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Same-day in-person meetings available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Immediate response during business hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local office for consultations and strategy sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Emergency marketing support when needed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Community Investment</CardTitle>
                  <CardDescription>Active involvement in Daytona Beach's growth and success</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    My success is directly tied to Daytona Beach's success. I'm not just providing services - I'm investing in our community's economic growth 
                    and helping local businesses thrive because this is my home too.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Supporting local business growth and development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Partnerships with local organizations and chambers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Mentoring local entrepreneurs and startups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Contributing to Daytona Beach's digital economy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Reputation & Accountability</CardTitle>
                  <CardDescription>My reputation in the community depends on your success</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    When you work with a local expert, you're not just another client number. My reputation in this community is built on delivering 
                    exceptional results for Daytona Beach businesses. Your success is my success.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local reputation built on proven results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Community referrals and word-of-mouth growth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Personal accountability for every project</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Long-term partnerships with local businesses</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Daytona Beach Market Psychology */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Daytona Beach's <span className="gradient-text">Unique Market</span> Psychology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Daytona Beach attracts diverse audiences united by passion - whether it's NASCAR racing, beach lifestyle, or motorsports culture. 
                Understanding these psychological drivers is key to effective marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <Flag className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">NASCAR Nation Psychology</CardTitle>
                  <CardDescription>Racing fans, automotive enthusiasts, competitive spirits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    NASCAR culture runs deep in Daytona Beach. Racing fans value authenticity, performance, loyalty, and tradition. 
                    They support brands that understand and respect the sport's heritage and community values.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Loyalty to authentic brands and supporters of racing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Performance and quality over flashy marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Community and family-oriented values</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Appreciation for tradition and heritage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Waves className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Beach Tourism Psychology</CardTitle>
                  <CardDescription>Vacationers, beach lovers, relaxation seekers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Beach tourists come to Daytona Beach seeking relaxation, fun, and memorable experiences. They're in vacation mode, 
                    looking for convenience, local flavor, and activities that enhance their beach getaway.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Experience-focused and memory-making mindset</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Convenience and proximity to beach activities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local authenticity and unique experiences</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Social sharing and bragging rights content</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <Car className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Motorsports Events Psychology</CardTitle>
                  <CardDescription>Daytona 500, Bike Week, racing enthusiasts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Major motorsports events bring passionate fans who travel from across the country. They're highly engaged, 
                    brand-conscious, and willing to spend on experiences and merchandise related to their interests.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">High engagement and passion-driven purchasing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Brand loyalty based on motorsports connections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Community and fellowship focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Event-specific and seasonal marketing opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Local Community Psychology</CardTitle>
                  <CardDescription>Residents, local businesses, community pride</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Local residents take pride in Daytona Beach's unique identity. They value businesses that contribute to the community, 
                    support local initiatives, and understand the balance between tourism and local life.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Community involvement and local support important</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Preference for businesses that 'get' local culture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Word-of-mouth and reputation-driven decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Pride in Daytona Beach's motorsports heritage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Districts & Target Areas */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Daytona Beach <span className="gradient-text">Business Districts</span> Strategy
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each area of Greater Daytona Beach has distinct characteristics and target audiences that require tailored marketing approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Downtown Daytona</CardTitle>
                  <CardDescription>Historic Main Street District & Business Core</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Downtown revitalization brings mix of historic charm and modern businesses. Targeting professionals, residents, and tourists exploring the authentic Daytona Beach experience.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">Local professionals, historic district visitors, Main Street shoppers</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Community-focused, authenticity-seeking, local pride</p>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">Historical storytelling, community events, local partnerships</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Waves className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Beachside District</CardTitle>
                  <CardDescription>Tourism hub & beachfront businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    High-traffic tourism area with hotels, restaurants, and attractions. Targeting visitors, beach-goers, and businesses serving the tourism industry.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-cyan-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">Tourists, beach visitors, hospitality businesses</p>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Experience-seeking, convenience-focused, memory-making</p>
                    </div>
                    <div className="bg-pink-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">Tourism marketing, seasonal campaigns, experience-focused content</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Trophy className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Speedway District</CardTitle>
                  <CardDescription>Daytona International Speedway area</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Motorsports epicenter attracting racing fans year-round. Targeting NASCAR enthusiasts, automotive businesses, and motorsports-related services.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                      <p className="text-xs text-muted-foreground">Racing fans, automotive enthusiasts, motorsports businesses</p>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Psychology</h4>
                      <p className="text-xs text-muted-foreground">Passion-driven, performance-focused, loyalty-oriented</p>
                    </div>
                    <div className="bg-indigo-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Strategy</h4>
                      <p className="text-xs text-muted-foreground">NASCAR partnerships, event marketing, performance positioning</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seasonal Marketing Calendar */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Daytona Beach's <span className="gradient-text">Seasonal Marketing</span> Calendar
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding Daytona Beach's seasonal patterns is crucial for marketing success. Each season brings unique opportunities and audience behaviors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <Flag className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Speedweeks & Daytona 500 (February)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The biggest event of the year brings 300,000+ visitors and international media attention. Peak opportunity for racing-related businesses and hospitality services.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Marketing Focus</h4>
                      <p className="text-xs text-muted-foreground">NASCAR partnerships, hospitality services, automotive businesses</p>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Audience Behavior</h4>
                      <p className="text-xs text-muted-foreground">High spending, brand loyal, performance-focused</p>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Best Strategies</h4>
                      <p className="text-xs text-muted-foreground">Event sponsorships, race-themed promotions, crowd management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Car className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Bike Week (March)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Massive motorcycle rally brings 500,000+ bikers to the area. Unique audience with distinct preferences and strong community bonds.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Marketing Focus</h4>
                      <p className="text-xs text-muted-foreground">Motorcycle services, hospitality, authentic local experiences</p>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Audience Behavior</h4>
                      <p className="text-xs text-muted-foreground">Community-oriented, authentic, freedom-loving</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Best Strategies</h4>
                      <p className="text-xs text-muted-foreground">Rally partnerships, biker-friendly messaging, authentic positioning</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Sun className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Beach Season (April-September)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Prime beach season with steady tourism flow, family vacations, and beach lifestyle marketing opportunities.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-cyan-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Marketing Focus</h4>
                      <p className="text-xs text-muted-foreground">Beach activities, family fun, summer experiences</p>
                    </div>
                    <div className="bg-teal-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Audience Behavior</h4>
                      <p className="text-xs text-muted-foreground">Relaxation-focused, family-oriented, experience-seeking</p>
                    </div>
                    <div className="bg-indigo-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Best Strategies</h4>
                      <p className="text-xs text-muted-foreground">Beach lifestyle content, family packages, summer promotions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Compass className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Local Focus Season (October-January)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foregreen">
                    Quieter tourism period perfect for local business focus, community building, and year-round resident targeting.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-amber-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Marketing Focus</h4>
                      <p className="text-xs text-muted-foreground">Local services, community events, resident-focused businesses</p>
                    </div>
                    <div className="bg-emerald-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Audience Behavior</h4>
                      <p className="text-xs text-muted-foreground">Community-oriented, value-conscious, relationship-building</p>
                    </div>
                    <div className="bg-violet-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Best Strategies</h4>
                      <p className="text-xs text-muted-foreground">Community partnerships, local SEO, relationship marketing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Daytona Beach Success Stories */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Daytona Beach <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from Daytona Beach businesses that leveraged local market expertise and community understanding.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Flag className="w-6 h-6 text-primary" />
                    Motorsports Tourism Business
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">400% increase in Speedweeks bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-destructive/10 rounded-lg">
                      <div className="text-2xl font-bold text-destructive">25</div>
                      <div className="text-sm text-muted-foreground">Speedweeks bookings (before)</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Speedweeks bookings (after)</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Key wins: NASCAR community targeting + seasonal optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Strategy: Racing psychology insights + event-based campaigns</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Waves className="w-6 h-6 text-primary" />
                    Beachside Restaurant
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">300% increase in off-season revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Challenge:</span>
                        <span className="text-right font-medium">Seasonal revenue fluctuations</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Solution:</span>
                        <span className="text-right font-medium">Local community engagement + year-round events</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Result:</span>
                        <span className="text-right font-medium text-primary">Became year-round community destination</span>
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
                    "Working with Joel was like having an insider's advantage. He didn't just understand our business - he understood our customers, our community, and the unique rhythms of Daytona Beach. Our Speedweeks revenue quadrupled because he knew exactly how to reach NASCAR fans at the right time with the right message."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">Sarah Martinez, Speedway Hospitality Group</cite>
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
                Daytona Beach Marketing <span className="gradient-text">FAQs</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How does your local Daytona Beach knowledge benefit my business?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Being born and raised in Daytona Beach gives me insider knowledge that outside agencies can't match. I understand the NASCAR culture, seasonal tourism patterns, local business relationships, and community values. This translates to more effective targeting, authentic messaging, and campaigns that truly resonate with our local audiences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Can you help with both tourism and local business marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. I understand both sides of Daytona Beach's economy. For tourism businesses, I know how to reach visitors during peak seasons like Speedweeks and Bike Week. For local businesses, I understand year-round resident needs and community dynamics. Many of my clients successfully serve both markets with different strategies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you handle the seasonal nature of Daytona Beach business?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  I plan campaigns around Daytona Beach's unique seasonal calendar. High-impact campaigns during Speedweeks and Bike Week, beach tourism marketing during summer months, and local community focus during quieter periods. This seasonal approach maximizes ROI and ensures year-round business growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes NASCAR and motorsports marketing different?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  NASCAR fans are incredibly loyal and community-oriented. They support businesses that authentically understand and respect racing culture. Marketing to this audience requires genuine knowledge of the sport, respect for tradition, and focus on performance and quality over flashy sales tactics. As a local, I've grown up in this culture.
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
                Ready to Leverage Daytona Beach's <span className="gradient-text">Home Field Advantage?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a comprehensive marketing strategy designed for Daytona Beach's unique market - from NASCAR culture to beach tourism to local community building.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Join 150+ Daytona Beach businesses that chose local expertise over generic marketing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => selectService('NASCAR Community Strategy Session')}
              >
                <Flag className="w-5 h-5 mr-2" />
                NASCAR Community Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg"
                onClick={() => selectService('In-Person Consultation')}
              >
                <Home className="w-5 h-5 mr-2" />
                In-Person Consultation
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Started with Daytona Beach Marketing Strategy"
        description="Let's discuss how to leverage Daytona Beach's unique NASCAR culture and tourism opportunities for your business growth."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default DaytonaBeachDigitalMarketing;