import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Landmark, Building2, Store, Briefcase, Users, Heart, Clock, TrendingUp, CheckCircle, ArrowRight, Zap, Brain, BarChart3, Star, Phone, Mail, Calendar, DollarSign, MessageSquare, Search, Globe, Target, ShoppingCart } from 'lucide-react';
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

const SanfordSEOServices = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Sanford SEO Services Consultation');

  return (
    <>
      <Helmet>
        <title>Sanford SEO Services | Historic Downtown Business Growth | AIO Growth SEO</title>
        <meta name="description" content="Sanford SEO services helping historic downtown businesses, professional services, and family-owned shops grow online. Expert in local SEO for Seminole County businesses." />
        <meta name="keywords" content="Sanford SEO services, Sanford digital marketing, historic downtown Sanford, Seminole County SEO, local business marketing Sanford, Sanford Florida marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/sanford-seo-services" />

        <meta property="og:title" content="Sanford SEO Services | Historic Downtown Business Growth" />
        <meta property="og:description" content="Sanford SEO services for historic downtown businesses, professional services, and family-owned shops in Seminole County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/sanford-seo-services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <PageBreadcrumb
          items={[
            { label: "Locations", href: "/locations" },
            { label: "Sanford SEO Services", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-amber-600" />
                <span className="text-lg font-semibold text-amber-700">Sanford SEO Services</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Sanford SEO That <span className="gradient-text">Honors Your Heritage</span> & Grows Your Business
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From Historic Downtown's brick-lined streets to the professional offices along First Street, we understand what drives Sanford's
                family businesses, professional services, and community-focused shops. Let's build your online presence with the same care you put into your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Sanford SEO Analysis
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
                  <Landmark className="w-5 h-5 mr-2" />
                  Historic Downtown Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-amber-600">85+</div>
                  <div className="text-sm text-muted-foreground">Sanford Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-amber-600">210%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-amber-600">12</div>
                  <div className="text-sm text-muted-foreground">Industries Served</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-amber-600">6yr</div>
                  <div className="text-sm text-muted-foreground">Central FL Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sanford Market Psychology */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Sanford's <span className="gradient-text">Historic Market</span> is Unique
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sanford blends historic charm with modern growth. Families, professionals, and entrepreneurs choose Sanford for its character and community—and they expect businesses that reflect those values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Community-First Values</CardTitle>
                  <CardDescription>
                    Sanford residents value relationships, trust, and supporting local. They choose businesses that are part of the community fabric, not faceless corporations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Professional Service Trust</CardTitle>
                  <CardDescription>
                    Doctors, lawyers, accountants, and consultants build practices on referrals and reputation. Online presence must reinforce credibility and expertise.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Heritage & Authenticity</CardTitle>
                  <CardDescription>
                    Sanford's historic downtown attracts visitors and residents who appreciate authenticity. Your marketing should reflect genuine character, not generic templates.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services for Sanford */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services for <span className="gradient-text">Sanford</span> Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Heritage-focused digital marketing solutions for Sanford's historic downtown shops, professional services, and community-minded businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local SEO</CardTitle>
                  <CardDescription className="text-base">
                    Dominate Sanford and Seminole County search results. From Historic Downtown boutiques to First Street professional offices, we position your business as the trusted local choice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-seo">
                    <Button variant="outline" className="w-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">GEO/AEO Optimization</CardTitle>
                  <CardDescription className="text-base">
                    Be the answer when Sanford residents and visitors ask AI assistants for recommendations. Position your historic downtown business as the authentic choice in voice search.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/geo-optimization">
                    <Button variant="outline" className="w-full group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local Lead Generation</CardTitle>
                  <CardDescription className="text-base">
                    Convert Sanford's community-first consumers into loyal clients with lead generation that reflects your heritage values and builds lasting professional relationships.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-lead-generation">
                    <Button variant="outline" className="w-full group-hover:bg-red-600 group-hover:text-white transition-colors">
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
                    Expand your Historic Downtown Sanford shop online. We help boutiques, antique stores, and artisan businesses reach customers statewide while honoring your heritage brand.
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

        {/* Business-Specific Strategies */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sanford Business <span className="gradient-text">SEO Strategies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each type of Sanford business has unique needs. My strategies are tailored to how your specific customers search and make decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Historic Downtown Retail</CardTitle>
                  <CardDescription>
                    Antique shops, boutiques, specialty stores. Attract both locals and visitors with local SEO, Google Business optimization, and content that showcases your unique offerings.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Professional Services</CardTitle>
                  <CardDescription>
                    Law firms, medical practices, financial advisors, consultants. Build authority with thought leadership content, reviews management, and professional directory optimization.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Family Restaurants & Cafes</CardTitle>
                  <CardDescription>
                    Local eateries and gathering spots. Dominate local search with menu optimization, review generation, and community-focused content that makes you the neighborhood favorite.
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
                Ready to Grow Your Sanford Business?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Sanford SEO consultation. We'll show you exactly how to reach more local customers,
                build your online reputation, and become the go-to choice in your industry.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Sanford Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized SEO strategy for your Sanford business within 24 hours
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
                  No spam. No sales calls. Just valuable Sanford SEO insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving all of Seminole County: Sanford, Lake Mary, Longwood, Altamonte Springs, Winter Springs, Oviedo, and surrounding communities
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Become Sanford's <span className="gradient-text">Go-To Business?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a comprehensive SEO strategy designed for Sanford's families, professionals, and community-minded consumers.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Join 50+ Sanford businesses that chose community-focused SEO over generic marketing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('Local Business SEO Session');
                  openDialog();
                }}
              >
                <Landmark className="w-5 h-5 mr-2" />
                Local Business SEO Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService('Professional Services SEO');
                  openDialog();
                }}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Professional Services SEO
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Sanford SEO Services Consultation"
        description="Let's discuss how to grow your Sanford business with SEO strategies designed for historic downtown shops, professional services, and community-focused businesses."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="Sanford SEO Services"
        serviceDescription="SEO services for Sanford's historic downtown businesses, professional services, and family-owned shops in Seminole County"
        serviceUrl="https://aiogrowthseo.com/locations/sanford-seo-services"
        serviceType="Digital Marketing"
      />
    </>
  );
};

export default SanfordSEOServices;
