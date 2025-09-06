import { Helmet } from 'react-helmet-async';
import { MapPin, TrendingUp, Users, Calendar, Phone, Mail, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { floridaTestimonials } from '@/data/floridaTestimonials';

const FloridaSEOServices = () => {
  return (
    <>
      <Helmet>
        <title>Florida SEO Services | Local Digital Marketing Expert | Joel Hinton</title>
        <meta name="description" content="Florida SEO services from a local expert. Dominate search results across Orlando, Tampa, Miami, Jacksonville, and Fort Lauderdale. Hurricane-season marketing, tourism optimization, and local business growth." />
        <meta name="keywords" content="Florida SEO, Florida digital marketing, Orlando SEO, Tampa SEO, Miami SEO, Jacksonville SEO, Fort Lauderdale SEO, local SEO Florida" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Florida SEO Services | Local Digital Marketing Expert" />
        <meta property="og:description" content="Florida SEO services from a local expert. Hurricane-season marketing, tourism optimization, and local business growth strategies." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Florida SEO Services | Local Digital Marketing Expert" />
        <meta name="twitter:description" content="Florida SEO services from a local expert. Hurricane-season marketing, tourism optimization, and local business growth strategies." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Joel Hinton Digital Marketing",
            "description": "Florida SEO and Digital Marketing Services",
            "url": "https://joelhinton.com/florida-seo-services",
            "telephone": "+1-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Daytona Beach",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.2108",
              "longitude": "-81.0228"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Florida"
              },
              {
                "@type": "City",
                "name": "Orlando"
              },
              {
                "@type": "City", 
                "name": "Tampa"
              },
              {
                "@type": "City",
                "name": "Miami"
              },
              {
                "@type": "City",
                "name": "Jacksonville"
              },
              {
                "@type": "City",
                "name": "Fort Lauderdale"
              }
            ],
            "serviceType": "SEO Services",
            "priceRange": "$$"
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
                  <MapPin className="w-4 h-4 mr-2" />
                  Florida Local Expert
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Florida SEO Services That Dominate Local Search
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  From the beaches of Jacksonville to the nightlife of South Beach, I understand Florida's unique market psychology. 
                  As a Daytona Beach native, I've helped 200+ Florida businesses thrive through hurricane seasons, tourism peaks, 
                  and snowbird migrations with psychology-driven SEO strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="hero">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Florida SEO Audit
                  </Button>
                  <Button size="lg" variant="outline">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Local Strategy
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Florida Market Psychology Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Understanding Florida's Unique Market Psychology
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Florida isn't just another state - it's a complex ecosystem of seasonal residents, international visitors, 
                  diverse communities, and weather-dependent behaviors that require specialized marketing approaches.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <Calendar className="w-10 h-10 text-blue-600 mb-4" />
                    <CardTitle>Seasonal Psychology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Florida consumers behave differently throughout the year. Hurricane season creates urgency for home services, 
                      while snowbird season drives luxury spending.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Hurricane prep marketing (May-November)</li>
                      <li>• Snowbird targeting (November-April)</li>
                      <li>• Spring Break optimization (March-April)</li>
                      <li>• Summer family vacation focus</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="w-10 h-10 text-green-600 mb-4" />
                    <CardTitle>Cultural Diversity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Florida's multicultural landscape requires nuanced messaging that resonates with Hispanic, Caribbean, 
                      European, and domestic populations.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Bilingual SEO strategies</li>
                      <li>• Cultural celebration targeting</li>
                      <li>• International buyer psychology</li>
                      <li>• Retiree community engagement</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
                    <CardTitle>Economic Patterns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      From tourism-dependent coastal economies to agricultural inland markets, each Florida region has distinct 
                      economic cycles that affect consumer behavior.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Tourism-based spending patterns</li>
                      <li>• Real estate investment cycles</li>
                      <li>• Agricultural seasonal demands</li>
                      <li>• Tech startup growth trends</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Regional Expertise Section */}
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  City-Specific SEO Strategies Across Florida
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Each Florida city has its own personality, landmarks, and consumer psychology. 
                  My location-specific approach ensures your business resonates with local audiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      Orlando Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Theme park capital psychology - targeting families planning Disney World trips, convention attendees, 
                      and the growing tech corridor around Lake Nona.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-4">
                      <li>• Disney World visitor targeting</li>
                      <li>• Convention center optimization</li>
                      <li>• Medical city positioning</li>
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/orlando-digital-marketing">Orlando Services →</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-green-600" />
                      Tampa Growth
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Historic Ybor City charm meets modern downtown energy. Targeting young professionals, 
                      craft beer enthusiasts, and the emerging startup scene.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-4">
                      <li>• Ybor City cultural targeting</li>
                      <li>• Downtown professional focus</li>
                      <li>• Bay area lifestyle marketing</li>
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/tampa-growth-marketing">Tampa Services →</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                      Jacksonville SEO
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      River city meets ocean beaches - targeting maritime industries, beach lovers, 
                      and the largest city in the continental US by area.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-4">
                      <li>• Beach community targeting</li>
                      <li>• Maritime industry focus</li>
                      <li>• Military family outreach</li>
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/jacksonville-seo-consultant">Jacksonville Services →</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-pink-600" />
                      Miami Agency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      International gateway with Art Deco flair - targeting luxury consumers, 
                      international business, and the vibrant nightlife scene.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-4">
                      <li>• Luxury market positioning</li>
                      <li>• International SEO strategies</li>
                      <li>• Art Basel event targeting</li>
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/miami-marketing-agency">Miami Services →</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-cyan-600" />
                      Fort Lauderdale
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Yachting capital with sophisticated tastes - targeting boating enthusiasts, 
                      luxury services, and the Las Olas Boulevard lifestyle.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-4">
                      <li>• Yachting community focus</li>
                      <li>• Luxury service targeting</li>
                      <li>• Beach lifestyle marketing</li>
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/fort-lauderdale-advertising">Fort Lauderdale Services →</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      Daytona Beach
                    </CardTitle>
                    <Badge variant="default" className="w-fit">Home Base</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      My hometown advantage - deep understanding of motorsports culture, beach tourism, 
                      and the unique blend of racing enthusiasts and coastal living.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-4">
                      <li>• NASCAR event marketing</li>
                      <li>• Spring break optimization</li>
                      <li>• Motorcycle week targeting</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Industry Focus Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Florida Industry Expertise
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Understanding the psychology behind Florida's key industries allows me to craft SEO strategies 
                  that speak directly to your target customers' needs and behaviors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Hospitality & Tourism</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      From boutique hotels to vacation rentals, I understand the seasonal psychology of travelers. 
                      Targeting families planning Disney trips, couples seeking romantic getaways, and business travelers.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Peak season optimization (December-April)</li>
                      <li>• Hurricane season recovery marketing</li>
                      <li>• International visitor targeting</li>
                      <li>• Event-based marketing (Art Basel, NASCAR, Spring Break)</li>
                      <li>• Mobile-first booking optimization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Healthcare & Medical</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Florida's aging population and medical tourism create unique opportunities. 
                      Targeting retirees, seasonal residents, and patients seeking specialized treatments.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Snowbird patient acquisition</li>
                      <li>• Medical tourism optimization</li>
                      <li>• Senior-focused SEO strategies</li>
                      <li>• Urgent care and emergency services</li>
                      <li>• Specialist referral networks</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Real Estate & Property</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      From luxury Miami condos to Orlando family homes, Florida real estate requires understanding 
                      diverse buyer psychology - investors, retirees, families, and international buyers.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Luxury market positioning</li>
                      <li>• International buyer targeting</li>
                      <li>• Retirement community marketing</li>
                      <li>• Hurricane-resistant property features</li>
                      <li>• Investment property optimization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tech & Startups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Florida's growing tech scene from Miami's fintech to Orlando's simulation industry 
                      requires targeting young professionals, investors, and talent acquisition.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Talent acquisition SEO</li>
                      <li>• Investor relation optimization</li>
                      <li>• B2B SaaS positioning</li>
                      <li>• Tech event marketing</li>
                      <li>• Innovation district targeting</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Competitive Analysis Section */}
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Florida Marketing Landscape Analysis
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  I've analyzed 500+ Florida businesses to understand what works in this unique market. 
                  Here's what separates winners from the competition.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">What Most Agencies Get Wrong</h3>
                  <div className="space-y-4">
                    <Card className="border-red-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-red-700 mb-2">Ignoring Seasonal Psychology</h4>
                        <p className="text-slate-600">
                          Generic campaigns that don't adapt to hurricane seasons, snowbird migrations, or tourism peaks fail to capture Florida's unique consumer cycles.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-red-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-red-700 mb-2">One-Size-Fits-All Approach</h4>
                        <p className="text-slate-600">
                          Treating Miami's international luxury market the same as Jacksonville's maritime community leads to ineffective messaging and poor ROI.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-red-700 mb-2">Missing Cultural Nuances</h4>
                        <p className="text-slate-600">
                          Failing to understand the Hispanic, Caribbean, and international influences in Florida's market psychology limits reach and engagement.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">My Florida Advantage</h3>
                  <div className="space-y-4">
                    <Card className="border-green-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-green-700 mb-2">Native Market Understanding</h4>
                        <p className="text-slate-600">
                          Born and raised in Daytona Beach, I understand Florida's culture, seasonal patterns, and consumer psychology from personal experience.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-green-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-green-700 mb-2">Psychology-Driven Strategies</h4>
                        <p className="text-slate-600">
                          I combine behavioral psychology with local market knowledge to create campaigns that resonate with each region's unique mindset.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-green-700 mb-2">Proven Local Results</h4>
                        <p className="text-slate-600">
                          200+ Florida businesses have seen average increases of 250% in local traffic and 180% in qualified leads using my strategies.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Florida Success Stories
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Real results from real Florida businesses across different cities and industries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.values(floridaTestimonials).flat().slice(0, 6).map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-slate-600">{testimonial.company}</p>
                      <Badge variant="outline" className="w-fit">{testimonial.location}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4 text-sm italic">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-bold text-green-600 text-sm">{testimonial.result}</p>
                        <p className="text-xs text-slate-500">{testimonial.industry}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Dominate Florida Search Results?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free SEO audit specifically tailored to your Florida market. 
                I'll show you exactly how to outrank your competition and capture more local customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Florida SEO Audit
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FloridaSEOServices;