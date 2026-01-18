import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Users, Building2, Calendar, Phone, Mail, Star, Heart, Shield, Home, CheckCircle, ArrowRight, UtensilsCrossed, Stethoscope, ShoppingBag, Briefcase, Search, Globe, Target, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { businessTypes } from '@/types/contact-forms';

const PortOrangeMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Port Orange Marketing Consultation');

  return (
    <>
      <Helmet>
        <title>Port Orange Marketing | Established Community Business Expert | AIO Growth SEO</title>
        <meta name="description" content="Port Orange marketing expert helping established local businesses connect with loyal families and residents. Specialized strategies for medical practices, retail, family services, and Dunlawton corridor businesses." />
        <meta name="keywords" content="Port Orange marketing, Port Orange SEO, Dunlawton Avenue marketing, local business marketing, Port Orange digital marketing, Volusia County marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/port-orange-marketing" />

        <meta property="og:title" content="Port Orange Marketing | Established Community Business Expert" />
        <meta property="og:description" content="Port Orange marketing for established businesses serving loyal families and residents in Volusia County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/port-orange-marketing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <PageBreadcrumb
          items={[
            { label: "Locations", href: "/locations" },
            { label: "Port Orange Marketing", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold text-blue-700">Port Orange Marketing Expert</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Port Orange Marketing Built on <span className="gradient-text">Community Trust</span> & Local Loyalty
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From Dunlawton Avenue's thriving corridor to established family neighborhoods, we understand what makes
                Port Orange businesses succeed. In a community where loyalty runs deep, your marketing should build
                relationships that last for years.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Port Orange Marketing Audit
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
                  <Building2 className="w-5 h-5 mr-2" />
                  Local Business Growth Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">80+</div>
                  <div className="text-sm text-muted-foreground">Port Orange Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">195%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">65K</div>
                  <div className="text-sm text-muted-foreground">Residents Reached</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">6yr</div>
                  <div className="text-sm text-muted-foreground">Volusia Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Port Orange Market Insights */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Port Orange's Market is <span className="gradient-text">Built Different</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Port Orange isn't chasing trends—it's a community where established businesses thrive on reputation,
                relationships, and consistent quality. Your marketing should reflect that stability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Community Loyalty</CardTitle>
                  <CardDescription>
                    Port Orange residents stick with businesses they trust. Once you earn their loyalty, they become your best advocates—recommending you to neighbors, friends, and family.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Established Family Values</CardTitle>
                  <CardDescription>
                    Multi-generational families call Port Orange home. They value businesses that understand their needs across life stages—from young children to aging parents.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Dunlawton Corridor Strength</CardTitle>
                  <CardDescription>
                    The Dunlawton Avenue corridor is the heartbeat of Port Orange commerce. Businesses here benefit from consistent traffic and community recognition.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services for Port Orange */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services for <span className="gradient-text">Port Orange</span> Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trusted digital marketing solutions for Port Orange's established businesses, from the Dunlawton corridor to family neighborhoods across the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local SEO</CardTitle>
                  <CardDescription className="text-base">
                    Dominate Port Orange search results and attract loyal families from established neighborhoods. Build the online presence that matches your community reputation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-seo">
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
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">GEO/AEO Optimization</CardTitle>
                  <CardDescription className="text-base">
                    Be the trusted answer when Port Orange residents ask AI assistants for recommendations. Position your Dunlawton corridor business as the community's go-to choice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/geo-optimization">
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
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local Lead Generation</CardTitle>
                  <CardDescription className="text-base">
                    Convert Port Orange's loyal community members into long-term customers with lead generation strategies that honor the trust-based relationships this market values.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-lead-generation">
                    <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
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
                    Help established Port Orange retailers expand online. We optimize Dunlawton corridor shops and local stores to reach customers beyond the community with e-commerce SEO.
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
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Marketing for Port Orange's <span className="gradient-text">Established Businesses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every Port Orange business has earned its place through quality and consistency. We help you reach more of the community while maintaining the reputation you've built.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Medical & Dental Practices</CardTitle>
                  <CardDescription>
                    Family medicine, dental offices, specialists, and urgent care. Port Orange families need healthcare providers they can trust for the long term.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• "Doctor Port Orange" optimization</li>
                    <li>• Patient retention marketing</li>
                    <li>• Multi-generational family targeting</li>
                    <li>• Insurance and services visibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Professional Services</CardTitle>
                  <CardDescription>
                    Accountants, attorneys, insurance agents, and financial advisors. Build authority with residents seeking trusted local professionals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Professional authority building</li>
                    <li>• Trust signals and credentials</li>
                    <li>• Referral network visibility</li>
                    <li>• Community involvement highlighting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Local Restaurants & Dining</CardTitle>
                  <CardDescription>
                    Family restaurants, local favorites, and neighborhood eateries. Become the go-to spot where Port Orange families gather.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• "Restaurants near me" optimization</li>
                    <li>• Local favorite positioning</li>
                    <li>• Family meal and catering visibility</li>
                    <li>• Loyalty and repeat customer marketing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Home Services</CardTitle>
                  <CardDescription>
                    HVAC, plumbing, electrical, roofing, and lawn care. Established homeowners need reliable service providers they can call year after year.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Emergency service visibility</li>
                    <li>• Repeat customer programs</li>
                    <li>• Neighborhood service targeting</li>
                    <li>• Trust and licensing display</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Dunlawton Corridor Retail</CardTitle>
                  <CardDescription>
                    Shopping centers, specialty stores, and local retailers. Capture the steady stream of residents who shop locally on Dunlawton Avenue.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Corridor shopping visibility</li>
                    <li>• Local shopping preference targeting</li>
                    <li>• Seasonal and event promotion</li>
                    <li>• Community loyalty programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Family & Youth Services</CardTitle>
                  <CardDescription>
                    Childcare, tutoring, sports programs, and enrichment activities. Families invest in services that help their children thrive.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Parent-focused content marketing</li>
                    <li>• School partnership visibility</li>
                    <li>• Registration optimization</li>
                    <li>• Community event promotion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Strengthen Your Port Orange Presence?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Port Orange marketing consultation. We'll show you exactly how to deepen community connections,
                attract new loyal customers, and grow your established business sustainably.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Port Orange Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized marketing strategy for your Port Orange business within 24 hours
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
                  No spam. No sales calls. Just valuable Port Orange marketing insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving Port Orange and neighbors: South Daytona, Daytona Beach, New Smyrna Beach, and surrounding Volusia County communities
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Become Port Orange's Trusted Choice?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the businesses that have earned Port Orange's loyalty. Get a marketing strategy
              designed to build lasting relationships with this established community.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-100 mb-8">
              <CheckCircle className="w-5 h-5" />
              <span>Join 55+ Port Orange businesses building lasting community trust</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  selectService('Community Trust Strategy');
                  openDialog();
                }}
              >
                <Shield className="w-5 h-5 mr-2" />
                Community Trust Strategy
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => {
                  selectService('Dunlawton Corridor Marketing');
                  openDialog();
                }}
              >
                <Building2 className="w-5 h-5 mr-2" />
                Dunlawton Corridor Marketing
              </Button>
            </div>
            <p className="text-blue-200 mt-6 text-sm">
              Serving all of South Volusia: Port Orange, South Daytona, Daytona Beach Shores, Ponce Inlet, and surrounding communities
            </p>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Port Orange Marketing Strategy"
        description="Let's discuss how to strengthen your Port Orange presence by building deeper connections with established families and loyal community members."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="Port Orange Marketing"
        serviceDescription="Marketing services for Port Orange established businesses serving loyal families and residents in Volusia County"
        serviceUrl="https://aiogrowthseo.com/locations/port-orange-marketing"
        serviceType="Digital Marketing"
      />
    </>
  );
};

export default PortOrangeMarketing;
