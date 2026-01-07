import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Users, GraduationCap, Calendar, Phone, Mail, Star, Heart, TrendingUp, Home, CheckCircle, ArrowRight, UtensilsCrossed, Stethoscope, ShoppingBag, TreePine, Search, Globe, Target, ShoppingCart } from 'lucide-react';
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

const PalmCoastMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Palm Coast Marketing Consultation');

  return (
    <>
      <Helmet>
        <title>Palm Coast Marketing | Family Community & Growth Expert | AIO Growth SEO</title>
        <meta name="description" content="Palm Coast marketing expert helping businesses reach Florida's fastest-growing family community. Specialized strategies for education, healthcare, family services, and retail in Flagler County." />
        <meta name="keywords" content="Palm Coast marketing, Palm Coast SEO, Flagler County marketing, family business marketing, Palm Coast digital marketing, Palm Coast advertising" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Palm Coast Marketing | Family Community & Growth Expert" />
        <meta property="og:description" content="Palm Coast marketing for businesses serving Florida's fastest-growing family community in Flagler County." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <PageBreadcrumb
          items={[
            { label: "Locations", href: "/locations" },
            { label: "Palm Coast Marketing", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-lime-50 via-green-50 to-teal-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-green-700">Palm Coast Marketing Expert</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Palm Coast Marketing That <span className="gradient-text">Grows With Your Community</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Florida's fastest-growing city deserves marketing that understands its unique energy. From young families
                seeking quality schools to professionals building their dream life, we help Palm Coast businesses connect
                with the community that's shaping Flagler County's future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Palm Coast Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Family Community Strategy');
                    openDialog();
                  }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Family Community Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">90+</div>
                  <div className="text-sm text-muted-foreground">Palm Coast Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">235%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">#1</div>
                  <div className="text-sm text-muted-foreground">Growing FL City</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">5yr</div>
                  <div className="text-sm text-muted-foreground">Flagler Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Palm Coast Market Insights */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Palm Coast's Market is <span className="gradient-text">Exploding</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Palm Coast isn't just growing—it's becoming the destination for families seeking quality of life.
                Understanding what draws people here helps you reach them at the perfect moment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Family-First Decision Making</CardTitle>
                  <CardDescription>
                    Palm Coast families prioritize schools, safety, and community. They research extensively and choose businesses that align with their family values.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Growth-Minded Consumers</CardTitle>
                  <CardDescription>
                    New residents are building their lives from scratch—choosing doctors, restaurants, services, and retailers. First impressions matter enormously.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Education-Focused Community</CardTitle>
                  <CardDescription>
                    With top-rated schools driving relocation decisions, education-adjacent businesses have unique opportunities to serve this engaged community.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services for Palm Coast */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-50/50 to-green-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services for <span className="gradient-text">Palm Coast</span> Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Growth-focused digital marketing solutions designed for Palm Coast's booming family community and rapidly expanding business landscape.
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
                    Capture Palm Coast's explosive growth with local SEO that reaches new families and relocating residents. Become the go-to business in Florida's fastest-growing city.
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
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">GEO/AEO Optimization</CardTitle>
                  <CardDescription className="text-base">
                    Be found by new residents asking AI assistants for recommendations. When families ask "best pediatrician in Palm Coast" or "top restaurants near me," your business appears.
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
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Local Lead Generation</CardTitle>
                  <CardDescription className="text-base">
                    Convert Palm Coast's growing population of young families and new homeowners into loyal customers with community-focused lead generation that builds lasting relationships.
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
                    Reach Palm Coast's busy families shopping online. From kids' products to home essentials, we help local retailers and family-focused e-commerce stores grow their online sales.
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
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-teal-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Marketing for Palm Coast's <span className="gradient-text">Growing Businesses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every business in Palm Coast has an opportunity to grow with the community. I tailor strategies to capture new residents and build lasting customer relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Healthcare & Family Medicine</CardTitle>
                  <CardDescription>
                    Pediatricians, family doctors, dentists, and specialists. New families need healthcare providers they can trust for years to come.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• "Pediatrician Palm Coast" optimization</li>
                    <li>• New patient acquisition strategies</li>
                    <li>• Family-friendly messaging</li>
                    <li>• Insurance and services visibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Education & Youth Services</CardTitle>
                  <CardDescription>
                    Tutoring, enrichment programs, sports leagues, and childcare. Parents invest heavily in their children's development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• After-school program visibility</li>
                    <li>• Parent-focused content marketing</li>
                    <li>• Registration and enrollment optimization</li>
                    <li>• School district partnership highlighting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Family Restaurants & Dining</CardTitle>
                  <CardDescription>
                    Family-friendly restaurants, pizza shops, and casual dining. Become the go-to spot for busy families seeking convenience and quality.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• "Family restaurants near me" dominance</li>
                    <li>• Kids menu and family deal promotion</li>
                    <li>• Birthday party and event visibility</li>
                    <li>• Review generation from happy families</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Home & Family Services</CardTitle>
                  <CardDescription>
                    Home improvement, lawn care, pool services, and family-oriented contractors. New homeowners need trusted service providers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• New homeowner targeting</li>
                    <li>• Neighborhood and HOA visibility</li>
                    <li>• Seasonal service campaigns</li>
                    <li>• Trust signals and community reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Retail & Shopping</CardTitle>
                  <CardDescription>
                    Clothing stores, sporting goods, pet supplies, and specialty retail. Capture families building their new lives in Palm Coast.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Local shopping search optimization</li>
                    <li>• Back-to-school and seasonal campaigns</li>
                    <li>• Family loyalty program promotion</li>
                    <li>• Community involvement visibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg flex items-center justify-center mb-4">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Recreation & Fitness</CardTitle>
                  <CardDescription>
                    Gyms, golf courses, sports facilities, and outdoor recreation. Active families seek quality leisure options close to home.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Family membership promotion</li>
                    <li>• Youth program visibility</li>
                    <li>• Golf and recreation targeting</li>
                    <li>• Seasonal activity campaigns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-lime-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Grow With Palm Coast?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Palm Coast marketing consultation. We'll show you exactly how to reach new families,
                capture relocating residents, and build your business alongside Florida's fastest-growing community.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Palm Coast Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized marketing strategy for your Palm Coast business within 24 hours
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
                  No spam. No sales calls. Just valuable Palm Coast marketing insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving Palm Coast and neighbors: Flagler Beach, Bunnell, Ormond Beach, and surrounding Flagler County communities
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Become Palm Coast's Go-To Business?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join the businesses thriving in Florida's fastest-growing city. Get a marketing strategy
              designed for Palm Coast's family-focused, growth-minded community.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-100 mb-8">
              <CheckCircle className="w-5 h-5" />
              <span>Join 60+ Palm Coast businesses growing with their community</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  selectService('Family Community Strategy');
                  openDialog();
                }}
              >
                <Users className="w-5 h-5 mr-2" />
                Family Community Strategy
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
                onClick={() => {
                  selectService('New Resident Marketing');
                  openDialog();
                }}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                New Resident Marketing
              </Button>
            </div>
            <p className="text-green-200 mt-6 text-sm">
              Serving all of Flagler County: Palm Coast, Flagler Beach, Bunnell, Marineland, and surrounding communities
            </p>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Palm Coast Marketing Strategy"
        description="Let's discuss how to grow your business in Florida's fastest-growing city by connecting with families, new residents, and the thriving Palm Coast community."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="Palm Coast Marketing"
        serviceDescription="Marketing services for Palm Coast businesses serving Florida's fastest-growing family community in Flagler County"
        serviceUrl="https://aiogrowthseo.com/locations/palm-coast-marketing"
        serviceType="Digital Marketing"
      />
    </>
  );
};

export default PalmCoastMarketing;
