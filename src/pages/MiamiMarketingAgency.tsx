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
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Locations", href: "/locations" },
            { label: "Miami Marketing Agency", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold text-blue-700">Miami Marketing Agency</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Miami Marketing That <span className="gradient-text">Understands International Business</span> & Luxury Psychology
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From Brickell's international finance district to South Beach's luxury scene, I understand what drives Miami's sophisticated markets. 
                International clients, luxury consumers, and cultural districts require specialized psychology-driven strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Miami Marketing Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('International Business Strategy');
                    openDialog();
                  }}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  International Business Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-muted-foreground">Miami Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">375%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-muted-foreground">Districts Served</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">8yr</div>
                  <div className="text-sm text-muted-foreground">Miami Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Miami Market Psychology */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Miami's <span className="gradient-text">International Market</span> is Unique
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Miami is the gateway to Latin America, a luxury destination, and a cultural melting pot. Each audience requires sophisticated understanding of cultural nuances and decision-making processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>International Business Psychology</CardTitle>
                  <CardDescription>
                    Latin American executives and global corporations value relationship-building, cultural sensitivity, and long-term partnerships over quick transactions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Luxury Consumer Psychology</CardTitle>
                  <CardDescription>
                    High-net-worth individuals seek exclusivity, personalization, and flawless execution. They value experiences over products and expect white-glove service.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Languages className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Bilingual Marketing Psychology</CardTitle>
                  <CardDescription>
                    Effective bilingual marketing requires cultural adaptation, emotional resonance, and understanding of code-switching behavior in Miami's Hispanic community.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* District-Specific Strategies */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Miami District <span className="gradient-text">Marketing Strategies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each Miami district has its own culture, clientele, and commercial DNA. My strategies are tailored to the specific psychology of each area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Brickell Financial District</CardTitle>
                  <CardDescription>
                    International banking, luxury residential, business elite. Professional, sophisticated, efficiency-focused decision makers requiring B2B networking and multilingual content.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>South Beach Lifestyle</CardTitle>
                  <CardDescription>
                    Art Deco luxury, international tourism, hospitality businesses. Experience-driven, image-conscious audience requiring influencer partnerships and visual storytelling.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Wynwood Arts District</CardTitle>
                  <CardDescription>
                    Street art, creative community, artistic entrepreneurship. Authenticity-driven, community-focused audience requiring grassroots marketing and artistic collaboration.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Dominate Miami's Sophisticated Market?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Miami marketing consultation. I'll show you exactly how to capture international business, 
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
              <CardContent className="text-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Miami Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam. No sales calls. Just valuable Miami marketing insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving all of Greater Miami: Brickell, South Beach, Wynwood, Downtown Miami, Coconut Grove, Design District, and surrounding communities
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
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