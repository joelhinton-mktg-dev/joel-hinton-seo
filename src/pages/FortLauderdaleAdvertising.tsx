import { Helmet } from 'react-helmet-async';
import { MapPin, Anchor, Crown, Waves, Gem, Sailboat, Building2, Calendar, Phone, Mail, Star, TrendingUp, CheckCircle, ArrowRight, Zap, Brain, BarChart3, Users, DollarSign, Compass, Ship, MessageSquare } from 'lucide-react';
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

const FortLauderdaleAdvertising = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Fort Lauderdale Advertising Consultation');

  return (
    <>
      <Helmet>
        <title>Fort Lauderdale Advertising | Yachting Community & Luxury Market Expert | Joel Hinton</title>
        <meta name="description" content="Fort Lauderdale advertising expert specializing in yachting community, luxury market, and sophisticated consumers. Marina partnerships, yacht club relationships, and high-end consumer psychology." />
        <meta name="keywords" content="Fort Lauderdale advertising, yachting marketing, luxury market advertising, marina advertising, Fort Lauderdale marketing agency" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Fort Lauderdale Advertising | Yachting Community & Luxury Market Expert" />
        <meta property="og:description" content="Fort Lauderdale advertising strategies for yachting community, luxury consumers, and sophisticated market segments." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold text-blue-700">Fort Lauderdale Advertising</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Capture Fort Lauderdale's <span className="gradient-text">Luxury Market</span> with Psychology-Driven Advertising
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From Las Olas Boulevard to the Intracoastal Waterway, I understand what drives Fort Lauderdale's yachting community, 
                luxury consumers, and sophisticated market segments. Let's create advertising that resonates with discerning tastes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Fort Lauderdale Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Yachting Community Strategy');
                    openDialog();
                  }}
                >
                  <Anchor className="w-5 h-5 mr-2" />
                  Yachting Community Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">95+</div>
                  <div className="text-sm text-muted-foreground">Luxury Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">245%</div>
                  <div className="text-sm text-muted-foreground">Avg ROI</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-muted-foreground">Marinas Served</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">6yr</div>
                  <div className="text-sm text-muted-foreground">Yachting Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Market Insights */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Fort Lauderdale's <span className="gradient-text">Luxury Market</span> is Unique
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fort Lauderdale's yachting community and luxury consumers have distinct psychology, seasonal patterns, and purchasing behaviors that require specialized advertising approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Luxury Consumer Psychology</CardTitle>
                  <CardDescription>
                    High-net-worth individuals in Fort Lauderdale make decisions based on exclusivity, quality, and peer recommendations rather than price.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Sailboat className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Yachting Community Networks</CardTitle>
                  <CardDescription>
                    The marine industry relies heavily on referrals, boat show presence, and marina relationships for business development.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Seasonal Market Dynamics</CardTitle>
                  <CardDescription>
                    Fort Lauderdale's luxury market has distinct seasonal patterns tied to boating seasons, snowbird arrivals, and boat show schedules.
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
                Ready to Dominate Fort Lauderdale's Luxury Market?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Fort Lauderdale advertising consultation. I'll show you exactly how to capture the yachting community, 
                luxury consumers, and sophisticated market segments with psychology-driven strategies.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Fort Lauderdale Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized advertising strategy for the Fort Lauderdale market within 24 hours
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
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam. No sales calls. Just valuable Fort Lauderdale advertising insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving all of Greater Fort Lauderdale: Las Olas Boulevard, Victoria Park, Rio Vista, Harbor Beach, Lauderdale-by-the-Sea, and surrounding communities
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
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
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('Yachting Community Strategy Session');
                  openDialog();
                }}
              >
                <Anchor className="w-5 h-5 mr-2" />
                Yachting Community Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('Luxury Market Analysis');
                  openDialog();
                }}
              >
                <Crown className="w-5 h-5 mr-2" />
                Luxury Market Analysis
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
        serviceName="Fort Lauderdale Advertising"
        serviceDescription="Premium advertising strategies for Fort Lauderdale's luxury market, yachting community, and sophisticated consumers"
        serviceUrl="https://joelhintonmarketing.com/locations/fort-lauderdale-advertising"
        serviceType="Digital Marketing"
      />
    </>
  );
};

export default FortLauderdaleAdvertising;