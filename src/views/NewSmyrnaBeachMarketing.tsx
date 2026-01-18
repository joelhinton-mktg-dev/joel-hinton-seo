import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Waves, Sun, Palette, UtensilsCrossed, Hotel, ShoppingBag, Camera, TrendingUp, Phone, Mail, Calendar, Star, Users, CheckCircle, ArrowRight, Search, Globe, Target, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { businessTypes } from '@/types/contact-forms';

const NewSmyrnaBeachMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('New Smyrna Beach Marketing Consultation');

  return (
    <>
      <Helmet>
        <title>New Smyrna Beach Marketing | Coastal Business & Tourism Expert | AIO Growth SEO</title>
        <meta name="description" content="New Smyrna Beach marketing expert specializing in tourism businesses, surf shops, beachside restaurants, art galleries, and coastal hospitality. Local SEO strategies for Florida's East Coast." />
        <meta name="keywords" content="New Smyrna Beach marketing, NSB tourism marketing, surf shop marketing, beach restaurant SEO, Flagler Avenue marketing, New Smyrna Beach SEO" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/new-smyrna-beach-marketing" />

        <meta property="og:title" content="New Smyrna Beach Marketing | Coastal Business & Tourism Expert" />
        <meta property="og:description" content="New Smyrna Beach marketing for tourism businesses, surf culture, and coastal community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/new-smyrna-beach-marketing" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AIO Growth SEO - New Smyrna Beach",
            "description": "New Smyrna Beach Marketing and SEO Services",
            "url": "https://aiogrowthseo.com/new-smyrna-beach-marketing",
            "areaServed": {
              "@type": "City",
              "name": "New Smyrna Beach",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.0258",
              "longitude": "-80.9270"
            },
            "serviceType": "Digital Marketing Services",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
        <Navigation />

        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  <Waves className="w-4 h-4 mr-2" />
                  New Smyrna Beach Coastal Marketing
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  New Smyrna Beach Marketing That Rides the Wave of Success
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  From Flagler Avenue's vibrant shops to the world-class surf breaks, we understand what drives New Smyrna Beach's
                  unique blend of tourists, locals, and beach lifestyle seekers. Let's grow your coastal business with marketing
                  that captures the spirit of NSB.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    size="lg"
                    variant="hero"
                    onClick={() => openDialog()}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Free NSB Marketing Audit
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      selectService('Tourism Business Strategy');
                      openDialog();
                    }}
                  >
                    <Sun className="w-5 h-5 mr-2" />
                    Tourism Business Strategy
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                  <div className="p-4">
                    <div className="text-2xl font-bold text-cyan-600">60+</div>
                    <div className="text-sm text-muted-foreground">Coastal Clients</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-cyan-600">195%</div>
                    <div className="text-sm text-muted-foreground">Avg Growth</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-cyan-600">8</div>
                    <div className="text-sm text-muted-foreground">Beach Towns Served</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-cyan-600">5yr</div>
                    <div className="text-sm text-muted-foreground">Coastal Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NSB Market Psychology */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Understanding New Smyrna Beach's Market Psychology
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  New Smyrna Beach attracts a unique mix of surfers, families, artists, and day-trippers from Orlando.
                  Each audience has different motivations that require tailored marketing approaches.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Waves className="w-10 h-10 text-cyan-600 mb-4" />
                    <CardTitle>Surf Culture & Beach Lifestyle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Known as one of the best surf towns on the East Coast, NSB attracts dedicated surfers,
                      beach enthusiasts, and those seeking the authentic coastal lifestyle.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Surf shop and gear marketing</li>
                      <li>• Surf lesson and rental targeting</li>
                      <li>• Beach lifestyle product positioning</li>
                      <li>• Local surf community engagement</li>
                      <li>• Seasonal swell-based campaigns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Sun className="w-10 h-10 text-yellow-600 mb-4" />
                    <CardTitle>Tourism & Day-Trippers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Orlando visitors seeking beach escapes, snowbirds fleeing winter, and weekend tourists
                      create consistent demand for NSB businesses year-round.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Orlando day-trip targeting</li>
                      <li>• Snowbird seasonal marketing</li>
                      <li>• Weekend getaway positioning</li>
                      <li>• Family beach vacation content</li>
                      <li>• Pet-friendly beach marketing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Palette className="w-10 h-10 text-purple-600 mb-4" />
                    <CardTitle>Arts & Creative Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Flagler Avenue's galleries and the thriving arts scene attract creatives, collectors,
                      and tourists seeking authentic cultural experiences.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Art gallery promotion</li>
                      <li>• First Friday event marketing</li>
                      <li>• Artist studio visibility</li>
                      <li>• Cultural tourism targeting</li>
                      <li>• Creative workshop promotion</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Services for New Smyrna Beach */}
          <section className="py-16 px-4 bg-gradient-to-r from-cyan-50/50 to-blue-50/50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Our Services for <span className="text-cyan-600">New Smyrna Beach</span> Businesses
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Coastal digital marketing solutions designed for NSB's unique blend of surf culture, tourism, and vibrant arts community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Search className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">Local SEO</CardTitle>
                    <CardDescription className="text-base">
                      Capture tourists, surfers, and Orlando day-trippers searching for NSB businesses. From Flagler Avenue shops to beachside restaurants, we put you at the top of coastal searches.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/local-seo">
                      <Button variant="outline" className="w-full group-hover:bg-cyan-600 group-hover:text-white transition-colors">
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
                      Be the answer when visitors ask "best surf shop in NSB" or "top restaurants Flagler Avenue." Capture AI-powered searches from tourists planning their beach getaway.
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
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">Local Lead Generation</CardTitle>
                    <CardDescription className="text-base">
                      Convert beach tourists, art lovers, and seasonal visitors into customers with lead generation strategies that capture the authentic NSB coastal lifestyle appeal.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/local-lead-generation">
                      <Button variant="outline" className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
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
                      Sell surf gear, beach lifestyle products, and Flagler Avenue art online. We help NSB's coastal shops and galleries reach customers nationwide with e-commerce optimization.
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
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Marketing Strategies for NSB Businesses
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Each type of New Smyrna Beach business has unique opportunities. My strategies are tailored
                  to how your specific customers discover and choose coastal businesses.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <UtensilsCrossed className="w-6 h-6 mr-3 text-orange-600" />
                      Beachside Restaurants & Cafes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      From casual fish tacos to upscale waterfront dining, NSB's food scene thrives on both
                      tourist discovery and loyal local following.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Tourist Discovery</h4>
                        <p className="text-sm text-slate-600">"Best restaurants New Smyrna Beach" optimization and Google Maps visibility</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Local Loyalty</h4>
                        <p className="text-sm text-slate-600">Community engagement, loyalty programs, and off-season local specials</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Seasonal Balance</h4>
                        <p className="text-sm text-slate-600">Peak season capacity management, off-season local focus</p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Key Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• "Near me" search optimization</li>
                        <li>• Instagram-worthy moment creation</li>
                        <li>• Review generation strategies</li>
                        <li>• Event and live music promotion</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Hotel className="w-6 h-6 mr-3 text-blue-600" />
                      Hotels, Rentals & Accommodations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      Vacation rentals, boutique hotels, and beachfront properties compete for visitors seeking
                      the authentic NSB experience over chain alternatives.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Direct Booking Growth</h4>
                        <p className="text-sm text-slate-600">Reduce OTA dependence with SEO and retargeting strategies</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Experience Positioning</h4>
                        <p className="text-sm text-slate-600">Highlight unique NSB experiences: surfing, arts, nature</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Repeat Guest Marketing</h4>
                        <p className="text-sm text-slate-600">Email nurturing and loyalty programs for annual visitors</p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Key Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Orlando weekend escape targeting</li>
                        <li>• Pet-friendly accommodation SEO</li>
                        <li>• Snowbird long-term stay marketing</li>
                        <li>• Wedding and event venue promotion</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <ShoppingBag className="w-6 h-6 mr-3 text-pink-600" />
                      Surf Shops & Beach Retail
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      From board sales and rentals to beach apparel and souvenirs, retail thrives on capturing
                      the NSB vibe visitors want to take home.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Surf Shop Essentials</h4>
                        <p className="text-sm text-slate-600">Rental search optimization, lesson booking, and gear sales</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Tourist Retail</h4>
                        <p className="text-sm text-slate-600">Flagler Avenue foot traffic conversion and Google visibility</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">E-commerce Expansion</h4>
                        <p className="text-sm text-slate-600">Sell the NSB lifestyle online to past visitors nationwide</p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Key Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• "Surf rentals near me" dominance</li>
                        <li>• Local surf report content marketing</li>
                        <li>• Surf lesson booking optimization</li>
                        <li>• Branded merchandise e-commerce</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Palette className="w-6 h-6 mr-3 text-purple-600" />
                      Art Galleries & Creative Studios
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      NSB's thriving arts scene attracts collectors, tourists, and creative enthusiasts seeking
                      authentic coastal art and unique experiences.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Gallery Visibility</h4>
                        <p className="text-sm text-slate-600">Art walk promotion, featured artist marketing, collector outreach</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Workshop & Classes</h4>
                        <p className="text-sm text-slate-600">Art class promotion for tourists and locals seeking experiences</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Online Sales</h4>
                        <p className="text-sm text-slate-600">E-commerce for coastal art shipped to collectors nationwide</p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Key Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• First Friday event marketing</li>
                        <li>• Coastal art SEO positioning</li>
                        <li>• Artist story content marketing</li>
                        <li>• Collector email nurturing</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Seasonal Marketing */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  New Smyrna Beach's Year-Round Marketing Calendar
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  NSB's tourism patterns create distinct seasonal opportunities. Understanding when different
                  audiences visit allows for precise targeting and maximum ROI.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">Peak Season</Badge>
                    <CardTitle className="text-lg">Winter/Spring</CardTitle>
                    <p className="text-sm text-slate-600">Dec - Apr</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Snowbird arrivals</li>
                      <li>• Spring break families</li>
                      <li>• Perfect beach weather</li>
                      <li>• Art walk peak attendance</li>
                      <li>• Premium pricing opportunity</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Surf Season</Badge>
                    <CardTitle className="text-lg">Hurricane Season</CardTitle>
                    <p className="text-sm text-slate-600">Jun - Nov</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Best surf conditions</li>
                      <li>• Surf tourism peak</li>
                      <li>• Summer family vacations</li>
                      <li>• Orlando day-trippers</li>
                      <li>• Local-focused specials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="default" className="w-fit mb-2">Shoulder Season</Badge>
                    <CardTitle className="text-lg">Fall Transition</CardTitle>
                    <p className="text-sm text-slate-600">Sep - Nov</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Hurricane swell surfing</li>
                      <li>• Cooling temperatures</li>
                      <li>• Local appreciation events</li>
                      <li>• Shoulder season deals</li>
                      <li>• Fishing season peak</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">Special Events</Badge>
                    <CardTitle className="text-lg">Year-Round</CardTitle>
                    <p className="text-sm text-slate-600">Ongoing</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• First Friday art walks</li>
                      <li>• Surf competitions</li>
                      <li>• Seafood festivals</li>
                      <li>• Jazz and music events</li>
                      <li>• Fishing tournaments</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-cyan-50 to-blue-50">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Grow Your New Smyrna Beach Business?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get your free NSB marketing consultation. We'll show you exactly how to capture tourists,
                  surfers, art lovers, and locals with strategies built for coastal success.
                </p>
              </div>

              <Card className="card-professional shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">
                    Schedule Free NSB Consultation
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Get a personalized marketing strategy for your coastal business within 24 hours
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
                    No spam. No sales calls. Just valuable NSB marketing insights delivered within 24 hours.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  Serving Florida's East Coast: New Smyrna Beach, Edgewater, Oak Hill, Port Orange, Daytona Beach, and surrounding coastal communities
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Ride the Wave of Coastal Success?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Get a free New Smyrna Beach marketing audit. We'll show you exactly how to capture tourists,
                surf enthusiasts, and loyal locals with psychology-driven strategies.
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-100 mb-8">
                <CheckCircle className="w-5 h-5" />
                <span>Join 40+ NSB businesses riding the wave to digital success</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => {
                    selectService('Tourism Business Strategy');
                    openDialog();
                  }}
                >
                  <Sun className="w-5 h-5 mr-2" />
                  Tourism Business Strategy
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-600"
                  onClick={() => {
                    selectService('Surf Shop Marketing');
                    openDialog();
                  }}
                >
                  <Waves className="w-5 h-5 mr-2" />
                  Surf Shop Marketing
                </Button>
              </div>
              <p className="text-cyan-200 mt-6 text-sm">
                Serving all of Volusia County's coast: New Smyrna Beach, Flagler Avenue, Edgewater, Port Orange, and surrounding beach communities
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="New Smyrna Beach Marketing Consultation"
        description="Let's discuss how to grow your coastal business by reaching tourists, surfers, art lovers, and the local NSB community with targeted marketing strategies."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="New Smyrna Beach Marketing"
        serviceDescription="Marketing services for New Smyrna Beach tourism businesses, surf shops, restaurants, and coastal community"
        serviceUrl="https://aiogrowthseo.com/locations/new-smyrna-beach-marketing"
        serviceType="Digital Marketing"
      />
    </>
  );
};

export default NewSmyrnaBeachMarketing;
