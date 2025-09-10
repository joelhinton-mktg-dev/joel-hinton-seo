import { Helmet } from 'react-helmet-async';
import { MapPin, Anchor, Users, Calendar, Phone, Mail, Star, Shield, Waves, Building2, TrendingUp, CheckCircle, ArrowRight, Zap, Brain, BarChart3, MessageSquare } from 'lucide-react';
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

const JacksonvilleSEOConsultant = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Jacksonville SEO Consultation');

  return (
    <>
      <Helmet>
        <title>Jacksonville SEO Consultant | Military Families & Beach Communities Expert | Joel Hinton</title>
        <meta name="description" content="Jacksonville SEO consultant specializing in military families, beach communities, maritime industry, and Riverside/Avondale districts. Local business psychology and seasonal marketing strategies." />
        <meta name="keywords" content="Jacksonville SEO consultant, Jacksonville SEO, military family marketing, beach community SEO, maritime industry SEO, Jacksonville digital marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Jacksonville SEO Consultant | Military Families & Beach Communities Expert" />
        <meta property="og:description" content="Jacksonville SEO consultant specializing in military families, beach communities, and maritime industry marketing." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Locations", href: "/locations" },
            { label: "Jacksonville SEO Consultant", current: true }
          ]}
        />
        
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold text-blue-700">Jacksonville SEO Expert</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Jacksonville SEO That <span className="gradient-text">Understands Military Families</span> & Beach Communities
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From NAS Jacksonville to Neptune Beach, I understand what drives Jacksonville's unique demographics. 
                Military families, beach communities, and maritime industry professionals require specialized SEO strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Jacksonville SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Military Family Marketing Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">180+</div>
                  <div className="text-sm text-muted-foreground">Jacksonville Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">312%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">22</div>
                  <div className="text-sm text-muted-foreground">Neighborhoods</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">7yr</div>
                  <div className="text-sm text-muted-foreground">Jacksonville Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Market Insights */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Jacksonville SEO is <span className="gradient-text">Different</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Jacksonville's military presence, maritime industry, and beach culture create unique consumer psychology that generic SEO misses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Military Family Psychology</CardTitle>
                  <CardDescription>
                    Military families have unique search patterns, decision-making processes, and trust factors that require specialized targeting.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Beach Community Marketing</CardTitle>
                  <CardDescription>
                    Neptune Beach, Atlantic Beach, and Ponte Vedra have distinct demographics with seasonal behaviors and luxury preferences.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Anchor className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Maritime Industry SEO</CardTitle>
                  <CardDescription>
                    Port of Jacksonville and maritime businesses require specialized B2B SEO strategies and industry-specific keywords.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Dominate Jacksonville's Search Results?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Jacksonville SEO consultation. I'll show you exactly how to capture military families, 
                beach communities, and maritime industry professionals with psychology-driven strategies.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Jacksonville Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized SEO strategy for the Jacksonville market within 24 hours
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
                  Schedule Free Jacksonville Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam. No sales calls. Just valuable Jacksonville SEO insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving all of Greater Jacksonville: Riverside, San Marco, Beaches, Mandarin, Orange Park, and surrounding Duval County communities
              </p>
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
        serviceName="Jacksonville SEO Consultant"
        serviceDescription="Expert SEO consulting services for Jacksonville businesses, focusing on local military families, beach communities, and maritime industries"
        serviceUrl="https://joelhintonmarketing.com/locations/jacksonville-seo-consultant"
        serviceType="SEO Consulting"
      />
    </>
  );
};

export default JacksonvilleSEOConsultant;