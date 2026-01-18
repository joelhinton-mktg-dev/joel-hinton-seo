import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Home, Heart, Users, TreePine, Building2, Calendar, Phone, Mail, Star, TrendingUp, CheckCircle, ArrowRight, Zap, Brain, BarChart3, DollarSign, Stethoscope, Wrench, MessageSquare, Search, Globe, Target, ShoppingCart } from 'lucide-react';
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
import { businessTypes } from '@/types/contact-forms';

const DebaryDigitalMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('DeBary Digital Marketing Consultation');

  return (
    <>
      <Helmet>
        <title>DeBary Digital Marketing | Local Business Growth Expert | AIO Growth SEO</title>
        <meta name="description" content="DeBary digital marketing expert helping local businesses reach families and retirees in Volusia County. Specialized strategies for restaurants, medical offices, home services, and retail." />
        <meta name="keywords" content="DeBary digital marketing, Volusia County marketing, DeBary SEO, local business marketing, DeBary advertising agency" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/debary-digital-marketing" />

        <meta property="og:title" content="DeBary Digital Marketing | Local Business Growth Expert" />
        <meta property="og:description" content="DeBary digital marketing strategies for local businesses serving families and retirees in Volusia County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/debary-digital-marketing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-green-700">DeBary Digital Marketing</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Grow Your DeBary Business with <span className="gradient-text">Community-Focused</span> Digital Marketing
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From Highway 17-92 to the St. Johns River, we understand what drives DeBary's families, retirees, and
                local business community. Let's create marketing that builds trust and drives real customers through your door.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free DeBary Marketing Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Local Business Growth Strategy');
                    openDialog();
                  }}
                >
                  <Home className="w-5 h-5 mr-2" />
                  Local Business Growth Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">75+</div>
                  <div className="text-sm text-muted-foreground">Local Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">185%</div>
                  <div className="text-sm text-muted-foreground">Avg ROI</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-muted-foreground">Volusia County Cities</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">5yr</div>
                  <div className="text-sm text-muted-foreground">Local Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Market Insights */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why DeBary's <span className="gradient-text">Local Market</span> is Unique
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                DeBary's mix of young families and active retirees creates a unique community with distinct needs, values, and purchasing behaviors that require localized marketing approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Family-First Decision Making</CardTitle>
                  <CardDescription>
                    DeBary families prioritize trust, convenience, and value. They rely on local recommendations and want businesses that understand their needs.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Community Word-of-Mouth</CardTitle>
                  <CardDescription>
                    In a close-knit community of 16,000, reputation travels fast. Online reviews, Facebook groups, and neighbor recommendations drive business.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Suburban Lifestyle Patterns</CardTitle>
                  <CardDescription>
                    DeBary residents value their peaceful suburban lifestyle while staying connected to Daytona Beach and Orlando for shopping and entertainment.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services for DeBary */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50/50 to-blue-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services for <span className="gradient-text">DeBary</span> Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Community-focused digital marketing solutions designed for DeBary's suburban families, local businesses, and close-knit neighborhoods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local SEO</CardTitle>
                  <CardDescription className="text-base">
                    Help DeBary families find your business when they search for local services. We optimize for community-focused searches that connect you with neighbors who value supporting local.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-seo">
                    <Button variant="outline" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">GEO/AEO Optimization</CardTitle>
                  <CardDescription className="text-base">
                    Be the answer when DeBary residents ask voice assistants for recommendations. Position your business as the trusted local choice in AI-powered search results.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/geo-optimization">
                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local Lead Generation</CardTitle>
                  <CardDescription className="text-base">
                    Convert DeBary families and retirees into loyal customers with lead generation strategies built on community trust and word-of-mouth principles.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-lead-generation">
                    <Button variant="outline" className="w-full group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">E-commerce SEO</CardTitle>
                  <CardDescription className="text-base">
                    Help DeBary's suburban families shop from your online store. We optimize local retailers and home-based businesses expanding online to reach neighbors and beyond.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/ecommerce-seo">
                    <Button variant="outline" className="w-full group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Grow Your DeBary Business?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free DeBary marketing consultation. We'll show you exactly how to reach local families,
                retirees, and community members with strategies that build lasting customer relationships.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free DeBary Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized marketing strategy for the DeBary market within 24 hours
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
                  No spam. No sales calls. Just valuable DeBary marketing insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving all of Volusia County: DeBary, Deltona, Orange City, DeLand, Sanford, Lake Mary, and surrounding communities
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Become DeBary's <span className="gradient-text">Go-To Business?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a comprehensive digital marketing strategy designed for DeBary's families, retirees, and tight-knit community.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Join 40+ DeBary businesses that chose community-focused marketing over generic advertising</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('Local Business Growth Session');
                  openDialog();
                }}
              >
                <Home className="w-5 h-5 mr-2" />
                Local Business Growth Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('Community Marketing Analysis');
                  openDialog();
                }}
              >
                <Users className="w-5 h-5 mr-2" />
                Community Marketing Analysis
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="DeBary Digital Marketing Strategy"
        description="Let's discuss how to grow your DeBary business by connecting with local families, retirees, and your community with targeted digital marketing strategies."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="DeBary Digital Marketing"
        serviceDescription="Digital marketing strategies for DeBary local businesses serving families and retirees in Volusia County"
        serviceUrl="https://aiogrowthseo.com/locations/debary-digital-marketing"
        serviceType="Digital Marketing"
      />
    </>
  );
};

export default DebaryDigitalMarketing;
