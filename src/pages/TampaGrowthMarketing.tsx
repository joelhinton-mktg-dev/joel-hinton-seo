import { Helmet } from 'react-helmet-async';
import { MapPin, Building2, Users, TrendingUp, Calendar, Phone, Mail, Star, Waves, Beer, MessageSquare, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { floridaTestimonials } from '@/data/floridaTestimonials';

const TampaGrowthMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Tampa Growth Marketing Consultation');

  return (
    <>
      <Helmet>
        <title>Tampa Growth Marketing | Tampa Bay Business Growth Expert | Joel Hinton</title>
        <meta name="description" content="Tampa Bay growth marketing expert specializing in Ybor City culture, Westshore business district, downtown professionals, and Tampa's emerging tech corridor. Psychology-driven growth strategies." />
        <meta name="keywords" content="Tampa growth marketing, Tampa Bay marketing, Ybor City marketing, Westshore marketing, Tampa downtown marketing, Tampa tech marketing, Tampa business growth" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Tampa Growth Marketing | Tampa Bay Business Growth Expert" />
        <meta property="og:description" content="Tampa Bay growth marketing expert specializing in local business districts, cultural targeting, and professional services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-amber-600" />
                <span className="text-lg font-semibold text-amber-700">Tampa Bay Growth Marketing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Capture Tampa's <span className="gradient-text">Diverse Energy</span> with Psychology-Driven Growth Marketing
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From Ybor City's vibrant culture to Westshore's corporate towers, I understand what drives Tampa Bay's unique business landscape. 
                Let's transform your marketing with strategies that resonate with each community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Tampa Growth Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Ybor Culture Marketing Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-amber-600">150+</div>
                  <div className="text-sm text-muted-foreground">Tampa Businesses</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-amber-600">285%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-amber-600">18</div>
                  <div className="text-sm text-muted-foreground">Neighborhoods</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-amber-600">5yr</div>
                  <div className="text-sm text-muted-foreground">Tampa Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Tampa is Different Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Tampa's Marketing Scene is <span className="gradient-text">Unique</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tampa Bay isn't just one market - it's a collection of distinct communities, each with unique psychology and consumer behavior.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Cultural Diversity Marketing</CardTitle>
                  <CardDescription>
                    From Ybor's Latin heritage to downtown's young professionals - each area requires different messaging strategies.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Economic Psychology</CardTitle>
                  <CardDescription>
                    Tampa's mix of corporate headquarters, startups, and creative industries creates unique purchasing behaviors.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Growth Mindset</CardTitle>
                  <CardDescription>
                    Tampa's rapid expansion creates opportunities for businesses ready to scale with psychology-driven strategies.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Dominate Tampa Bay's Growth Market?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Tampa growth marketing consultation. I'll show you exactly how to capture Ybor City culture, 
                Westshore professionals, and downtown innovators with psychology-driven strategies.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Tampa Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized growth strategy for the Tampa Bay market within 24 hours
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
                  Schedule Free Tampa Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam. No sales calls. Just valuable Tampa Bay growth insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving all of Tampa Bay: Ybor City, Westshore, Downtown Tampa, Hyde Park, SoHo, Brandon, Carrollwood, and surrounding communities
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
        serviceName="Tampa Growth Marketing"
        serviceDescription="Growth marketing strategies for Tampa Bay businesses, focusing on Ybor City culture, Westshore professionals, and downtown innovators"
        serviceUrl="https://joelhintonmarketing.com/locations/tampa-growth-marketing"
        serviceType="Growth Marketing"
      />
    </>
  );
};

export default TampaGrowthMarketing;