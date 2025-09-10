import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, Mail, Car, Globe, CheckCircle, ArrowRight, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

const AreasWeServe = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Local Consultation');

  return (
    <>
      <Helmet>
        <title>Areas We Serve | Florida Digital Marketing Services | Joel Hinton</title>
        <meta name="description" content="Digital marketing services across Florida from our Daytona Beach base. Serving Orlando, Tampa, Jacksonville, Miami, Fort Lauderdale with local market expertise and nationwide remote consultation." />
        <meta name="keywords" content="Florida digital marketing areas, Orlando marketing, Tampa marketing, Jacksonville marketing, Miami marketing, Fort Lauderdale marketing, Daytona Beach marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Areas We Serve | Florida Digital Marketing Services" />
        <meta property="og:description" content="Digital marketing services across Florida with local market expertise and nationwide remote consultation capabilities." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Areas We Serve | Florida Digital Marketing Services" />
        <meta name="twitter:description" content="Digital marketing services across Florida with local market expertise and nationwide remote consultation capabilities." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Joel Hinton Digital Marketing Services",
            "description": "Digital Marketing Services Across Florida",
            "url": "https://joelhinton.com/areas-we-serve",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Joel Hinton Digital Marketing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Florida"
              },
              {
                "@type": "City",
                "name": "Orlando"
              },
              {
                "@type": "City", 
                "name": "Tampa"
              },
              {
                "@type": "City",
                "name": "Miami"
              },
              {
                "@type": "City",
                "name": "Jacksonville"
              },
              {
                "@type": "City",
                "name": "Fort Lauderdale"
              },
              {
                "@type": "City",
                "name": "Daytona Beach"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  <Home className="w-4 h-4 mr-2" />
                  Based in Daytona Beach, FL
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Florida Digital Marketing Services & Areas We Serve
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Native Florida expertise from Daytona Beach to Miami. I understand the unique psychology of each market - 
                  from Disney World dreamers to South Beach luxury seekers. Local insights, proven results, statewide reach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="hero"
                    onClick={() => openDialog()}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Local Consultation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => openDialog()}
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Remote Services Available
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Florida Expertise Overview */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Native Florida Market Expertise
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Born and raised in Daytona Beach, I've spent my entire career understanding Florida's diverse markets. 
                    From NASCAR culture to snowbird seasons, hurricane psychology to tourism peaks - I know what makes Florida consumers tick.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">20+ Years Florida Experience</h4>
                        <p className="text-slate-600 text-sm">Deep understanding of regional cultures, seasonal patterns, and consumer psychology</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">200+ Florida Success Stories</h4>
                        <p className="text-slate-600 text-sm">Proven track record across tourism, healthcare, real estate, and tech industries</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Psychology-Driven Approach</h4>
                        <p className="text-slate-600 text-sm">Understanding what motivates each Florida market for maximum conversion impact</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Bilingual Capabilities</h4>
                        <p className="text-slate-600 text-sm">Serving Florida's diverse Hispanic and international communities</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button size="lg" variant="outline" onClick={() => selectService('Florida Market Analysis')}>
                    <Mail className="w-5 h-5 mr-2" />
                    Get Florida Market Analysis
                  </Button>
                </div>

                <div className="relative">
                  <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Daytona Beach Headquarters</h3>
                      <p className="text-slate-600 mb-6">
                        Strategically located in the heart of Florida, providing easy access to all major markets 
                        while maintaining deep local roots and understanding.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-green-600 mx-auto mb-1" />
                          <p className="font-semibold">1.5 hrs to Orlando</p>
                        </div>
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                          <p className="font-semibold">2 hrs to Jacksonville</p>
                        </div>
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                          <p className="font-semibold">3 hrs to Tampa</p>
                        </div>
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-pink-600 mx-auto mb-1" />
                          <p className="font-semibold">4 hrs to Miami</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Primary Service Areas
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Specialized local market expertise across Florida's major metropolitan areas. 
                  Each market receives customized strategies based on regional psychology and consumer behavior.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Daytona Beach - Home Base */}
                <Card className="border-2 border-blue-200 relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    HOME BASE
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Home className="w-6 h-6 text-blue-600" />
                      <div>
                        <CardTitle className="text-xl">Daytona Beach</CardTitle>
                        <Badge variant="secondary" className="text-xs">Volusia County</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Car className="w-4 h-4" />
                      <span>Local Presence</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      My home market advantage - deep NASCAR culture, motorsports tourism, beach lifestyle, 
                      and Spring Break marketing expertise.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Key Markets:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">NASCAR Events</Badge>
                        <Badge variant="outline" className="text-xs">Beach Tourism</Badge>
                        <Badge variant="outline" className="text-xs">Motorcycle Week</Badge>
                        <Badge variant="outline" className="text-xs">Spring Break</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-600">
                      <p>• Motorsports & Racing Culture</p>
                      <p>• Beach & Coastal Tourism</p>
                      <p>• Seasonal Event Marketing</p>
                      <p>• Local Business Growth</p>
                    </div>
                    
                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/daytona-beach-digital-marketing">
                        Daytona Beach Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Orlando */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-purple-600" />
                      <div>
                        <CardTitle className="text-xl">Orlando</CardTitle>
                        <Badge variant="secondary" className="text-xs">Orange County</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Car className="w-4 h-4" />
                      <span>1.5 hours drive</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Theme park capital psychology - Disney World families, convention attendees, 
                      Lake Nona medical professionals, and UCF community.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Key Markets:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Disney Tourism</Badge>
                        <Badge variant="outline" className="text-xs">Convention Center</Badge>
                        <Badge variant="outline" className="text-xs">Lake Nona</Badge>
                        <Badge variant="outline" className="text-xs">UCF</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-600">
                      <p>• Theme Park Visitor Targeting</p>
                      <p>• Convention & Business Travel</p>
                      <p>• Medical City Marketing</p>
                      <p>• University Community</p>
                    </div>
                    
                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/orlando-digital-marketing">
                        Orlando Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Tampa */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-amber-600" />
                      <div>
                        <CardTitle className="text-xl">Tampa Bay</CardTitle>
                        <Badge variant="secondary" className="text-xs">Hillsborough County</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Car className="w-4 h-4" />
                      <span>3 hours drive</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Historic Ybor City meets modern Westshore - cultural authenticity, 
                      financial services hub, and emerging tech corridor.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Key Markets:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Ybor City</Badge>
                        <Badge variant="outline" className="text-xs">Westshore</Badge>
                        <Badge variant="outline" className="text-xs">Downtown</Badge>
                        <Badge variant="outline" className="text-xs">Hyde Park</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-600">
                      <p>• Cultural Heritage Marketing</p>
                      <p>• Financial Services Professionals</p>
                      <p>• Tech Startup Community</p>
                      <p>• Luxury Lifestyle Targeting</p>
                    </div>
                    
                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/tampa-growth-marketing">
                        Tampa Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Jacksonville */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-green-600" />
                      <div>
                        <CardTitle className="text-xl">Jacksonville</CardTitle>
                        <Badge variant="secondary" className="text-xs">Duval County</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Car className="w-4 h-4" />
                      <span>2 hours drive</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      River city meets ocean beaches - maritime industries, beach communities, 
                      military families, and the largest city in the continental US.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Key Markets:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Beach Communities</Badge>
                        <Badge variant="outline" className="text-xs">Maritime</Badge>
                        <Badge variant="outline" className="text-xs">Military</Badge>
                        <Badge variant="outline" className="text-xs">Downtown</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-600">
                      <p>• Beach Lifestyle Marketing</p>
                      <p>• Maritime Industry Focus</p>
                      <p>• Military Family Services</p>
                      <p>• Urban Professional Targeting</p>
                    </div>
                    
                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/jacksonville-seo-consultant">
                        Jacksonville Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Miami */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-pink-600" />
                      <div>
                        <CardTitle className="text-xl">Miami-Dade</CardTitle>
                        <Badge variant="secondary" className="text-xs">Miami-Dade County</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Car className="w-4 h-4" />
                      <span>4 hours drive</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      International gateway with Art Deco flair - luxury consumers, 
                      bilingual marketing, international business, and vibrant nightlife culture.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Key Markets:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">South Beach</Badge>
                        <Badge variant="outline" className="text-xs">Brickell</Badge>
                        <Badge variant="outline" className="text-xs">Wynwood</Badge>
                        <Badge variant="outline" className="text-xs">Coral Gables</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-600">
                      <p>• Luxury Market Positioning</p>
                      <p>• International Business Focus</p>
                      <p>• Bilingual Marketing</p>
                      <p>• Art & Culture Targeting</p>
                    </div>
                    
                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/miami-marketing-agency">
                        Miami Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Fort Lauderdale */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-cyan-600" />
                      <div>
                        <CardTitle className="text-xl">Fort Lauderdale</CardTitle>
                        <Badge variant="secondary" className="text-xs">Broward County</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Car className="w-4 h-4" />
                      <span>4.5 hours drive</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Yachting capital with sophisticated tastes - boating enthusiasts, 
                      luxury services, Las Olas Boulevard lifestyle, and affluent communities.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Key Markets:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Las Olas</Badge>
                        <Badge variant="outline" className="text-xs">Marina</Badge>
                        <Badge variant="outline" className="text-xs">Beach</Badge>
                        <Badge variant="outline" className="text-xs">Luxury</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-600">
                      <p>• Yachting Community Focus</p>
                      <p>• Luxury Service Targeting</p>
                      <p>• Beach Lifestyle Marketing</p>
                      <p>• Affluent Professional Services</p>
                    </div>
                    
                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/fort-lauderdale-advertising">
                        Fort Lauderdale Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Remote Services */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Nationwide Remote Consultation
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  While Florida is our specialty, psychology-driven marketing principles work everywhere. 
                  I provide remote digital marketing services nationwide with the same depth of analysis and strategic thinking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <Globe className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Virtual Strategy Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Full-service digital marketing consultation via video conference. 
                      Same strategic depth, delivered remotely.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Market psychology analysis</li>
                      <li>• Competitor landscape review</li>
                      <li>• Custom strategy development</li>
                      <li>• Implementation roadmaps</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
                    <CardTitle>Proven Remote Success</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Successfully served clients in 25+ states with the same results-driven approach 
                      that works in Florida markets.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• California tech startups</li>
                      <li>• New York financial services</li>
                      <li>• Texas healthcare systems</li>
                      <li>• Nationwide e-commerce brands</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Phone className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                    <CardTitle>Flexible Communication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Multiple communication channels ensure seamless collaboration 
                      regardless of location or time zone.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Video conferencing</li>
                      <li>• Phone consultations</li>
                      <li>• Email strategy reviews</li>
                      <li>• Slack/Teams integration</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Dominate Your Market?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Whether you're in Florida or anywhere across the US, get a free marketing audit 
                tailored to your local market psychology and competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Local Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => selectService('Remote Strategy Session')}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Remote Strategy Session
                </Button>
              </div>
              <p className="text-blue-200 mt-6 text-sm">
                Free consultations available • No obligation • Results-focused approach
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Schedule Your Local Consultation"
        description="Let's discuss your local market opportunities and create a personalized marketing strategy for your area."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default AreasWeServe;