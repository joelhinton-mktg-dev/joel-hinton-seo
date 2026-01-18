import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, Mail, Car, CheckCircle, ArrowRight, Home, Users, Building2, Waves, TreePine } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

const AreasWeServe = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Local Consultation');

  return (
    <>
      <Helmet>
        <title>Areas We Serve | Volusia & Flagler County Marketing Expert | AIO Growth SEO</title>
        <meta name="description" content="Hyper-local digital marketing services for Volusia and Flagler Counties. Serving Daytona Beach, Ormond Beach, Port Orange, New Smyrna Beach, Palm Coast, DeLand, Holly Hill, DeBary, and Sanford with deep community expertise." />
        <meta name="keywords" content="Volusia County marketing, Flagler County marketing, Daytona Beach marketing, Ormond Beach SEO, Port Orange marketing, New Smyrna Beach marketing, Palm Coast marketing, local business marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/areas-we-serve" />

        <meta property="og:title" content="Areas We Serve | Volusia & Flagler County Marketing Expert" />
        <meta property="og:description" content="Hyper-local digital marketing services for Volusia and Flagler Counties with deep community expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/areas-we-serve" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Areas We Serve | Volusia & Flagler County Marketing Expert" />
        <meta name="twitter:description" content="Hyper-local digital marketing services for Volusia and Flagler Counties with deep community expertise." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AIO Growth SEO Digital Marketing Services",
            "description": "Hyper-Local Digital Marketing for Volusia & Flagler Counties",
            "url": "https://aiogrowthseo.com/areas-we-serve",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AIO Growth SEO",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Volusia County" },
              { "@type": "AdministrativeArea", "name": "Flagler County" },
              { "@type": "City", "name": "Daytona Beach" },
              { "@type": "City", "name": "Ormond Beach" },
              { "@type": "City", "name": "Port Orange" },
              { "@type": "City", "name": "New Smyrna Beach" },
              { "@type": "City", "name": "Palm Coast" },
              { "@type": "City", "name": "DeLand" },
              { "@type": "City", "name": "Holly Hill" },
              { "@type": "City", "name": "DeBary" },
              { "@type": "City", "name": "Sanford" }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />

        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  <Home className="w-4 h-4 mr-2" />
                  Volusia & Flagler Counties
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Hyper-Local Marketing for <span className="gradient-text">Central Florida's</span> Coastal Communities
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  I don't just serve Central Florida—I live here, work here, and know every neighborhood.
                  From Ormond Beach's upscale charm to New Smyrna's surf culture, from Palm Coast's growing families
                  to DeLand's historic downtown, I understand what makes each community unique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="hero"
                    onClick={() => openDialog()}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Local Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      selectService('Community Marketing Strategy');
                      openDialog();
                    }}
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Find Your Community
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Local Expertise Overview */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    True Hyper-Local Expertise
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Generic marketing agencies treat all Florida markets the same. I know that Ormond Beach families
                    shop differently than Port Orange residents, and Palm Coast newcomers have different needs than
                    established DeLand business owners. This hyper-local knowledge drives real results.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Born & Raised in Volusia County</h4>
                        <p className="text-slate-600 text-sm">Deep roots and genuine understanding of our coastal communities</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">200+ Local Business Success Stories</h4>
                        <p className="text-slate-600 text-sm">Proven track record with restaurants, medical practices, retail, and services</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Community-First Approach</h4>
                        <p className="text-slate-600 text-sm">Marketing that builds trust and reflects local values</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Neighborhood-Level Targeting</h4>
                        <p className="text-slate-600 text-sm">Precision marketing that reaches the right customers in the right communities</p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" variant="outline" onClick={() => openDialog()}>
                    <Mail className="w-5 h-5 mr-2" />
                    Get Local Market Analysis
                  </Button>
                </div>

                <div className="relative">
                  <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Daytona Beach Home Base</h3>
                      <p className="text-slate-600 mb-6">
                        Centrally located to serve all of Volusia and Flagler Counties with
                        in-person meetings, local insights, and rapid response times.
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-green-600 mx-auto mb-1" />
                          <p className="font-semibold">10 min to Ormond</p>
                        </div>
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                          <p className="font-semibold">15 min to Port Orange</p>
                        </div>
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                          <p className="font-semibold">25 min to NSB</p>
                        </div>
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-teal-600 mx-auto mb-1" />
                          <p className="font-semibold">30 min to Palm Coast</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Primary Service Areas - Coastal Communities */}
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Waves className="w-6 h-6 text-blue-600" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Coastal Communities
                  </h2>
                </div>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Beach towns and waterfront communities with unique tourism, lifestyle, and local business dynamics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Daytona Beach - Home Base */}
                <Card className="border-2 border-blue-200 relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    HOME BASE
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Home className="w-6 h-6 text-blue-600" />
                      <div>
                        <CardTitle className="text-xl">Daytona Beach</CardTitle>
                        <Badge variant="secondary" className="text-xs">Volusia County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Motorsports capital with NASCAR culture, beach tourism, and vibrant local business community.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">NASCAR Events</Badge>
                        <Badge variant="outline" className="text-xs">Beach Tourism</Badge>
                        <Badge variant="outline" className="text-xs">Bike Week</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/daytona-beach-digital-marketing">
                        Daytona Beach Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Ormond Beach */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                      <div>
                        <CardTitle className="text-xl">Ormond Beach</CardTitle>
                        <Badge variant="secondary" className="text-xs">Volusia County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Upscale coastal community with historic downtown, golf courses, and affluent professionals.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Historic Downtown</Badge>
                        <Badge variant="outline" className="text-xs">Golf & Leisure</Badge>
                        <Badge variant="outline" className="text-xs">Upscale Dining</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/ormond-beach-seo">
                        Ormond Beach Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* New Smyrna Beach */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-cyan-600" />
                      <div>
                        <CardTitle className="text-xl">New Smyrna Beach</CardTitle>
                        <Badge variant="secondary" className="text-xs">Volusia County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Premier surf town with arts district, tourism businesses, and authentic beach lifestyle.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Surf Culture</Badge>
                        <Badge variant="outline" className="text-xs">Flagler Avenue</Badge>
                        <Badge variant="outline" className="text-xs">Art Galleries</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/new-smyrna-beach-marketing">
                        New Smyrna Beach Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Palm Coast */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-green-600" />
                      <div>
                        <CardTitle className="text-xl">Palm Coast</CardTitle>
                        <Badge variant="secondary" className="text-xs">Flagler County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Florida's fastest-growing city with young families, excellent schools, and booming local economy.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Family Community</Badge>
                        <Badge variant="outline" className="text-xs">Top Schools</Badge>
                        <Badge variant="outline" className="text-xs">Rapid Growth</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/palm-coast-marketing">
                        Palm Coast Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Port Orange */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <CardTitle className="text-xl">Port Orange</CardTitle>
                        <Badge variant="secondary" className="text-xs">Volusia County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Established residential community with loyal families, Dunlawton corridor, and strong local businesses.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Family Loyalty</Badge>
                        <Badge variant="outline" className="text-xs">Dunlawton Corridor</Badge>
                        <Badge variant="outline" className="text-xs">Established</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/port-orange-marketing">
                        Port Orange Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Holly Hill */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                      <div>
                        <CardTitle className="text-xl">Holly Hill</CardTitle>
                        <Badge variant="secondary" className="text-xs">Volusia County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Tight-knit small town community with family businesses, retirees, and strong neighborhood loyalty.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Small Town</Badge>
                        <Badge variant="outline" className="text-xs">Family Business</Badge>
                        <Badge variant="outline" className="text-xs">Community Trust</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/holly-hill-digital-marketing">
                        Holly Hill Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Inland Communities */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <TreePine className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Inland & West Volusia Communities
                  </h2>
                </div>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Historic downtowns, suburban growth, and family-oriented communities in West Volusia and Seminole County.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* DeLand */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-amber-600" />
                      <div>
                        <CardTitle className="text-xl">DeLand / West Volusia</CardTitle>
                        <Badge variant="secondary" className="text-xs">Volusia County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Historic downtown charm with Stetson University, antique shops, and growing professional services.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Historic Downtown</Badge>
                        <Badge variant="outline" className="text-xs">Stetson University</Badge>
                        <Badge variant="outline" className="text-xs">Antiques</Badge>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <p>• Downtown retail & restaurants</p>
                      <p>• Professional services</p>
                      <p>• University community</p>
                      <p>• Historic preservation businesses</p>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" className="w-full" onClick={() => openDialog()}>
                      DeLand Marketing Inquiry
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* DeBary */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-6 h-6 text-green-600" />
                      <div>
                        <CardTitle className="text-xl">DeBary</CardTitle>
                        <Badge variant="secondary" className="text-xs">Volusia County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Suburban family community near the St. Johns River with local restaurants, medical offices, and services.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Family Community</Badge>
                        <Badge variant="outline" className="text-xs">Local Services</Badge>
                        <Badge variant="outline" className="text-xs">Suburban</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/debary-digital-marketing">
                        DeBary Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Sanford */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-amber-600" />
                      <div>
                        <CardTitle className="text-xl">Sanford</CardTitle>
                        <Badge variant="secondary" className="text-xs">Seminole County</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Historic downtown revival with antique shops, professional services, and growing family community.
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Historic Revival</Badge>
                        <Badge variant="outline" className="text-xs">Antique District</Badge>
                        <Badge variant="outline" className="text-xs">Professional</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="/sanford-seo-services">
                        Sanford Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Hyper-Local Matters */}
          <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Why Hyper-Local Marketing Works
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Generic statewide marketing wastes your budget on people who'll never become customers.
                  Hyper-local expertise means every dollar targets the neighbors, families, and businesses in your community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Neighborhood-Level Targeting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      I know which neighborhoods shop locally, which areas are growing, and where your ideal customers live.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• ZIP code precision targeting</li>
                      <li>• Community-specific messaging</li>
                      <li>• Local search domination</li>
                      <li>• Neighborhood reputation building</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Users className="w-10 h-10 text-green-600 mx-auto mb-4" />
                    <CardTitle>Community Psychology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Understanding local values, seasonal patterns, and community events that drive purchasing decisions.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Seasonal tourism patterns</li>
                      <li>• Local event tie-ins</li>
                      <li>• Community value alignment</li>
                      <li>• Trust-building strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CheckCircle className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                    <CardTitle>Proven Local Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      200+ local businesses have grown with strategies built specifically for their community.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Local business case studies</li>
                      <li>• Community referral networks</li>
                      <li>• Repeat customer focus</li>
                      <li>• Long-term partnerships</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Dominate Your Local Market?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free marketing audit tailored to your specific community. I'll show you exactly how to
                reach more local customers and build lasting relationships in your neighborhood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Local Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => {
                    selectService('Community Marketing Analysis');
                    openDialog();
                  }}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Community Analysis
                </Button>
              </div>
              <p className="text-blue-200 mt-6 text-sm">
                Serving Volusia County, Flagler County, and Seminole County communities
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Schedule Your Local Consultation"
        description="Let's discuss your local market opportunities and create a personalized marketing strategy for your community."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default AreasWeServe;
