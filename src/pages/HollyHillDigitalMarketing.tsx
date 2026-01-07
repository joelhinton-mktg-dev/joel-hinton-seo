import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Home, Users, Heart, Calendar, Phone, Mail, Star, Stethoscope, Wrench, UtensilsCrossed, ArrowRight, Store, ShieldCheck, Search, Globe, Target, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { businessTypes } from '@/types/contact-forms';

const HollyHillDigitalMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Holly Hill Digital Marketing Consultation');

  return (
    <>
      <Helmet>
        <title>Holly Hill Digital Marketing | Small Town Business Growth | AIO Growth SEO</title>
        <meta name="description" content="Holly Hill digital marketing expert helping local businesses connect with families and retirees in Volusia County. Specialized strategies for restaurants, medical practices, home services, and small retail." />
        <meta name="keywords" content="Holly Hill digital marketing, Holly Hill SEO, Volusia County marketing, small town business marketing, Holly Hill Florida marketing, local business growth" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Holly Hill Digital Marketing | Small Town Business Growth" />
        <meta property="og:description" content="Holly Hill digital marketing for local businesses serving families and retirees in the Volusia County community." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-emerald-600" />
                <span className="text-lg font-semibold text-emerald-700">Holly Hill Digital Marketing</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Grow Your Holly Hill Business with <span className="gradient-text">Hometown Heart</span> Digital Marketing
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                In a close-knit community like Holly Hill, trust is everything. We understand what drives your neighbors to choose
                local businesses—and how to help them find you online. Let's grow your business the small-town way: authentically.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Holly Hill Marketing Audit
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
                  Local Business Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-emerald-600">45+</div>
                  <div className="text-sm text-muted-foreground">Local Businesses</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-emerald-600">175%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-emerald-600">6</div>
                  <div className="text-sm text-muted-foreground">Volusia Cities</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-emerald-600">5yr</div>
                  <div className="text-sm text-muted-foreground">Local Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Holly Hill is Different Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Holly Hill's Market is <span className="gradient-text">Special</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Holly Hill isn't trying to be Daytona Beach or Orlando. It's a tight-knit community where relationships matter
                and word-of-mouth still carries weight. Your marketing should reflect that.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Community Trust</CardTitle>
                  <CardDescription>
                    In Holly Hill, neighbors recommend neighbors. Online visibility builds on that trust—showing you're established, reliable, and part of the community.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Family & Retiree Focus</CardTitle>
                  <CardDescription>
                    Holly Hill's mix of young families and active retirees means different needs at different life stages—but all value personal service and reliability.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Local Loyalty</CardTitle>
                  <CardDescription>
                    Residents prefer supporting local over chains. Help them find you first when they search for services you provide.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services for Holly Hill */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services for <span className="gradient-text">Holly Hill</span> Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Small-town digital marketing solutions built on the values Holly Hill residents cherish: trust, authenticity, and genuine community connection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local SEO</CardTitle>
                  <CardDescription className="text-base">
                    Help your Holly Hill neighbors find you online. We optimize for the local searches that matter in a close-knit community where word-of-mouth meets digital discovery.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-seo">
                    <Button variant="outline" className="w-full group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">GEO/AEO Optimization</CardTitle>
                  <CardDescription className="text-base">
                    Be the trusted answer when Holly Hill residents ask voice assistants for local recommendations. Position your small-town business as the authentic community choice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/geo-optimization">
                    <Button variant="outline" className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local Lead Generation</CardTitle>
                  <CardDescription className="text-base">
                    Turn Holly Hill's local loyalty into lasting customer relationships with lead generation strategies that honor small-town values and build genuine community trust.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/local-lead-generation">
                    <Button variant="outline" className="w-full group-hover:bg-cyan-600 group-hover:text-white transition-colors">
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
                    Take your Holly Hill small business online. We help local shops, crafters, and service providers launch and optimize e-commerce stores that maintain small-town authenticity.
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
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Marketing for Holly Hill's <span className="gradient-text">Local Businesses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every Holly Hill business has a story and serves the community in its own way. I tailor strategies to match how your customers actually search and decide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Local Restaurants & Cafes</CardTitle>
                  <CardDescription>
                    Family diners, pizza shops, and neighborhood cafes. Get found when locals search for "restaurants near me" and build the loyal following your food deserves.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Google Business Profile optimization</li>
                    <li>• Menu and specials visibility</li>
                    <li>• Review generation and management</li>
                    <li>• Local search dominance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Medical & Dental Practices</CardTitle>
                  <CardDescription>
                    Family doctors, dentists, and specialists. Build trust before patients ever walk through the door with professional online presence and patient reviews.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Healthcare SEO best practices</li>
                    <li>• Patient review management</li>
                    <li>• Appointment booking optimization</li>
                    <li>• Insurance and services visibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Home Services</CardTitle>
                  <CardDescription>
                    Plumbers, electricians, HVAC, lawn care, and handymen. Be the first call when something breaks or needs fixing in Holly Hill homes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Emergency service visibility</li>
                    <li>• Service area targeting</li>
                    <li>• Before/after portfolio showcasing</li>
                    <li>• Trust signals and licensing display</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Small Retail & Services</CardTitle>
                  <CardDescription>
                    Gift shops, salons, auto repair, and specialty stores. Stand out from big-box competition by highlighting your personal touch and local expertise.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Local shopping search optimization</li>
                    <li>• Product and service showcasing</li>
                    <li>• Community involvement highlighting</li>
                    <li>• Loyalty program promotion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Become Holly Hill's Go-To Business?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Holly Hill marketing consultation. We'll show you exactly how to reach more neighbors,
                build your local reputation, and grow sustainably—the small-town way.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Holly Hill Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized marketing strategy for your local business within 24 hours
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
                  No spam. No sales calls. Just valuable Holly Hill marketing insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving Holly Hill and neighbors: Daytona Beach, Ormond Beach, South Daytona, Port Orange, and surrounding Volusia County communities
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Holly Hill Digital Marketing Strategy"
        description="Let's discuss how to help your Holly Hill business connect with more local families, retirees, and neighbors through authentic, community-focused marketing."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="Holly Hill Digital Marketing"
        serviceDescription="Digital marketing strategies for Holly Hill local businesses, focusing on community trust, family services, and small-town authenticity"
        serviceUrl="https://aiogrowthseo.com/locations/holly-hill-digital-marketing"
        serviceType="Digital Marketing"
      />
    </>
  );
};

export default HollyHillDigitalMarketing;
