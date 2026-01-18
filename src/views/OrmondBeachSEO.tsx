import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Crown, Users, Calendar, Phone, Mail, Star, Gem, Waves, Briefcase, TrendingUp, CheckCircle, ArrowRight, UtensilsCrossed, Store, Landmark, Search, Globe, Target, ShoppingCart } from 'lucide-react';
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

const OrmondBeachSEO = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Ormond Beach SEO Consultation');

  return (
    <>
      <Helmet>
        <title>Ormond Beach SEO | Upscale Coastal Business Growth Expert | AIO Growth SEO</title>
        <meta name="description" content="Ormond Beach SEO expert specializing in upscale coastal businesses, professional services, fine dining, and boutique retail. Local SEO strategies for Volusia County's premier beach community." />
        <meta name="keywords" content="Ormond Beach SEO, Ormond Beach marketing, upscale business SEO, professional services marketing, Ormond Beach digital marketing, coastal business SEO" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/ormond-beach-seo" />

        <meta property="og:title" content="Ormond Beach SEO | Upscale Coastal Business Growth Expert" />
        <meta property="og:description" content="Ormond Beach SEO expert specializing in upscale coastal businesses, professional services, and quality-focused consumers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/ormond-beach-seo" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <PageBreadcrumb
          items={[
            { label: "Locations", href: "/locations" },
            { label: "Ormond Beach SEO", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-indigo-600" />
                <span className="text-lg font-semibold text-indigo-700">Ormond Beach SEO Expert</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Ormond Beach SEO That <span className="gradient-text">Reflects Your Excellence</span> & Attracts Quality Clients
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From Granada Boulevard's historic charm to Ormond-by-the-Sea's beachfront elegance, we understand what drives
                Ormond Beach's discerning consumers. Upscale businesses deserve SEO that attracts quality-focused customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Ormond Beach SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Upscale Business Strategy');
                    openDialog();
                  }}
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Upscale Business Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-indigo-600">70+</div>
                  <div className="text-sm text-muted-foreground">Ormond Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-indigo-600">220%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-indigo-600">10</div>
                  <div className="text-sm text-muted-foreground">Coastal Towns</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-indigo-600">6yr</div>
                  <div className="text-sm text-muted-foreground">Volusia Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ormond Beach Market Insights */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Ormond Beach SEO is <span className="gradient-text">Different</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ormond Beach's affluent community, historic character, and quality-focused residents create unique opportunities that generic SEO simply cannot capture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Affluent Consumer Psychology</CardTitle>
                  <CardDescription>
                    Ormond Beach residents prioritize quality over price. They research thoroughly and choose businesses that demonstrate expertise and professionalism.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Historic Downtown Appeal</CardTitle>
                  <CardDescription>
                    Granada Boulevard and The Casements attract visitors seeking authentic experiences. Businesses here benefit from heritage and character-driven marketing.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Golf & Leisure Lifestyle</CardTitle>
                  <CardDescription>
                    With premier golf courses and country clubs, Ormond Beach attracts active retirees and professionals who invest in quality leisure experiences.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services for Ormond Beach */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services for <span className="gradient-text">Ormond Beach</span> Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Premium digital marketing solutions designed for Ormond Beach's discerning business community and quality-focused clientele.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local SEO</CardTitle>
                  <CardDescription className="text-base">
                    Rank for searches that matter to Ormond Beach's affluent community. From Granada Boulevard to Ormond-by-the-Sea, we help upscale businesses attract quality-focused clients.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-seo">
                    <Button variant="outline" className="w-full group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">GEO/AEO Optimization</CardTitle>
                  <CardDescription className="text-base">
                    Position your Ormond Beach business as the premium choice in AI search results. When discerning customers ask for "the best" in your category, be the answer they find.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/geo-optimization">
                    <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local Lead Generation</CardTitle>
                  <CardDescription className="text-base">
                    Attract qualified leads from Ormond Beach's professional community, active retirees, and quality-conscious families with targeted strategies that reflect your brand's excellence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-lead-generation">
                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
                    Help your upscale Ormond Beach boutique or premium brand reach discerning online shoppers. We optimize luxury goods, artisan products, and specialty stores for quality-focused buyers.
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

        {/* Business Types Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SEO for Ormond Beach's <span className="gradient-text">Premier Businesses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every Ormond Beach business serves discerning clients. I tailor SEO strategies to attract quality-focused customers who value excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Upscale Dining & Fine Restaurants</CardTitle>
                  <CardDescription>
                    Fine dining, waterfront restaurants, and chef-driven concepts. Attract food enthusiasts who appreciate culinary excellence and ambiance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• "Best restaurants Ormond Beach" optimization</li>
                    <li>• Fine dining experience positioning</li>
                    <li>• Reservation and special event visibility</li>
                    <li>• Food critic and review management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Professional Services</CardTitle>
                  <CardDescription>
                    Law firms, financial advisors, medical specialists, and consultants. Build authority and trust with clients who expect premium service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Professional authority building</li>
                    <li>• Thought leadership content</li>
                    <li>• Credential and expertise showcasing</li>
                    <li>• Referral and testimonial optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Golf & Leisure Services</CardTitle>
                  <CardDescription>
                    Golf courses, country clubs, spas, and wellness centers. Reach active retirees and professionals seeking premium leisure experiences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Golf course and club visibility</li>
                    <li>• Membership and event promotion</li>
                    <li>• Wellness and spa service targeting</li>
                    <li>• Seasonal and tournament marketing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Boutique Retail & Galleries</CardTitle>
                  <CardDescription>
                    Art galleries, antique shops, designer boutiques, and specialty stores. Attract collectors and discerning shoppers seeking unique finds.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Boutique shopping experience positioning</li>
                    <li>• Art and collectible visibility</li>
                    <li>• Historic downtown discovery</li>
                    <li>• Event and exhibition promotion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Attract Ormond Beach's Quality-Focused Clients?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Ormond Beach SEO consultation. We'll show you exactly how to reach affluent consumers,
                professionals, and discerning clients with strategies built for upscale success.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Ormond Beach Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized SEO strategy for your Ormond Beach business within 24 hours
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
                  No spam. No sales calls. Just valuable Ormond Beach SEO insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving Ormond Beach and neighbors: Ormond-by-the-Sea, Daytona Beach, Flagler Beach, Palm Coast, and surrounding Volusia County communities
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Ormond Beach SEO Strategy"
        description="Let's discuss how to attract Ormond Beach's quality-focused clients and position your business as the premier choice in your industry."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="Ormond Beach SEO"
        serviceDescription="Expert SEO services for Ormond Beach upscale businesses, focusing on professional services, fine dining, and boutique retail"
        serviceUrl="https://aiogrowthseo.com/locations/ormond-beach-seo"
        serviceType="SEO Consulting"
      />
    </>
  );
};

export default OrmondBeachSEO;
