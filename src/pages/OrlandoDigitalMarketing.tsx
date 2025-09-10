import { Helmet } from 'react-helmet-async';
import { MapPin, Users, Calendar, TrendingUp, Phone, Mail, Star, Castle, Building2, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { floridaTestimonials } from '@/data/floridaTestimonials';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

const OrlandoDigitalMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Orlando Digital Marketing Audit');

  return (
    <>
      <Helmet>
        <title>Orlando Digital Marketing | Disney World Tourism SEO Expert | Joel Hinton</title>
        <meta name="description" content="Orlando digital marketing expert specializing in Disney World tourism, theme park marketing, convention center optimization, and medical city targeting. Local Orlando SEO strategies that work." />
        <meta name="keywords" content="Orlando digital marketing, Orlando SEO, Disney World marketing, theme park SEO, Orlando tourism marketing, convention center marketing, Lake Nona marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Orlando Digital Marketing | Disney World Tourism SEO Expert" />
        <meta property="og:description" content="Orlando digital marketing expert specializing in Disney World tourism, theme park marketing, and convention center optimization." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orlando Digital Marketing | Disney World Tourism SEO Expert" />
        <meta name="twitter:description" content="Orlando digital marketing expert specializing in Disney World tourism, theme park marketing, and convention center optimization." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Joel Hinton Digital Marketing - Orlando",
            "description": "Orlando Digital Marketing and SEO Services",
            "url": "https://joelhinton.com/orlando-digital-marketing",
            "telephone": "+1-555-0123",
            "areaServed": {
              "@type": "City",
              "name": "Orlando",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5383",
              "longitude": "-81.3792"
            },
            "serviceType": "Digital Marketing Services",
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
                  <Castle className="w-4 h-4 mr-2" />
                  Orlando Theme Park Capital
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Orlando Digital Marketing That Captures the Magic
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  From Disney World dreamers to convention center professionals, I understand Orlando's unique market psychology. 
                  Target families planning magical vacations, medical professionals in Lake Nona, and the thriving business community 
                  with psychology-driven digital marketing strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="hero"
                    onClick={() => openDialog()}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Free Orlando Marketing Audit
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => openDialog()}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Theme Park Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Orlando Market Psychology */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Understanding Orlando's Market Psychology
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Orlando isn't just about theme parks - it's a complex ecosystem of tourism, healthcare innovation, 
                  convention business, and family entertainment that requires sophisticated marketing approaches.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Castle className="w-10 h-10 text-purple-600 mb-4" />
                    <CardTitle>Tourism & Entertainment Psychology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Orlando attracts 75+ million visitors annually, each with different motivations - first-time Disney families, 
                      thrill-seeking teenagers, anniversary couples, and international tourists.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Disney World planning psychology</li>
                      <li>• Universal Studios thrill-seekers</li>
                      <li>• International visitor targeting</li>
                      <li>• Multi-generational trip planning</li>
                      <li>• Budget vs. luxury vacation mindsets</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                    <CardTitle>Convention & Business Travel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      The Orange County Convention Center hosts 200+ events annually, bringing business travelers 
                      who blend work with leisure in unique ways.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Extended business trip planning</li>
                      <li>• Corporate event add-ons</li>
                      <li>• Professional networking preferences</li>
                      <li>• Bleisure travel optimization</li>
                      <li>• B2B service targeting</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="w-10 h-10 text-green-600 mb-4" />
                    <CardTitle>Local Community Dynamics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Beyond tourism, Orlando has a thriving local community with diverse needs - from Lake Nona's medical professionals 
                      to Winter Park's arts scene and College Park's young families.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Medical city targeting (Lake Nona)</li>
                      <li>• Arts community engagement (Winter Park)</li>
                      <li>• Young family neighborhoods</li>
                      <li>• University community (UCF)</li>
                      <li>• Tech corridor growth</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Landmark-Based Targeting */}
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Landmark-Specific Marketing Strategies
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Each Orlando landmark attracts different demographics with unique psychological profiles. 
                  My location-based targeting ensures your message reaches the right audience at the right mindset.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Castle className="w-6 h-6 mr-3 text-purple-600" />
                      Disney World Vicinity Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      Target the 58 million annual Disney visitors with strategic placement around Magic Kingdom, EPCOT, 
                      Hollywood Studios, and Animal Kingdom. Each park attracts different family dynamics and spending patterns.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Magic Kingdom Families</h4>
                        <p className="text-sm text-slate-600">First-time visitors, multi-generational groups, princess-obsessed kids</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">EPCOT Enthusiasts</h4>
                        <p className="text-sm text-slate-600">Food & wine lovers, cultural explorers, adult-focused experiences</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Hollywood Studios Fans</h4>
                        <p className="text-sm text-slate-600">Star Wars fanatics, movie buffs, thrill-seeking teenagers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Animal Kingdom Adventurers</h4>
                        <p className="text-sm text-slate-600">Nature lovers, Avatar fans, educational-focused families</p>
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Strategic Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Pre-visit planning content (6+ months ahead)</li>
                        <li>• On-property service targeting</li>
                        <li>• Post-visit memory preservation</li>
                        <li>• Annual passholder retention</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Building2 className="w-6 h-6 mr-3 text-blue-600" />
                      Convention Center & I-Drive
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      The Orange County Convention Center and International Drive create a unique blend of business and leisure 
                      travelers who have specific needs and decision-making patterns.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Convention Attendees</h4>
                        <p className="text-sm text-slate-600">Extended stays, expense accounts, networking opportunities</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">I-Drive Tourists</h4>
                        <p className="text-sm text-slate-600">Entertainment seekers, dining adventurers, attraction hoppers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Business Travelers</h4>
                        <p className="text-sm text-slate-600">Efficiency-focused, premium service expectations, tight schedules</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Bleisure Market</h4>
                        <p className="text-sm text-slate-600">Work-leisure combo, extended weekends, family meet-ups</p>
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Strategic Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Pre-convention planning content</li>
                        <li>• Corporate event add-on services</li>
                        <li>• Professional networking facilitation</li>
                        <li>• Extended stay optimizations</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Users className="w-6 h-6 mr-3 text-green-600" />
                      Lake Nona Medical City
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      Lake Nona represents Orlando's future - a master-planned community focused on health, wellness, and technology 
                      that attracts high-income professionals with specific lifestyle preferences.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Medical Professionals</h4>
                        <p className="text-sm text-slate-600">High-income specialists, wellness-focused, premium service expectations</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Tech Workers</h4>
                        <p className="text-sm text-slate-600">Innovation-driven, early adopters, efficiency-focused</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Wellness Enthusiasts</h4>
                        <p className="text-sm text-slate-600">Health-conscious, fitness-oriented, sustainable living</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Young Families</h4>
                        <p className="text-sm text-slate-600">Education-focused, community-minded, quality of life prioritized</p>
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Strategic Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Premium healthcare marketing</li>
                        <li>• Wellness and fitness services</li>
                        <li>• Educational services targeting</li>
                        <li>• Luxury lifestyle positioning</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <TrendingUp className="w-6 h-6 mr-3 text-orange-600" />
                      UCF & College Corridor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      The University of Central Florida area represents young, tech-savvy consumers with evolving needs 
                      and strong digital engagement patterns.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">College Students</h4>
                        <p className="text-sm text-slate-600">Budget-conscious, social-media driven, experience-focused</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Young Professionals</h4>
                        <p className="text-sm text-slate-600">Career-building, lifestyle-experimenting, brand-conscious</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Faculty & Staff</h4>
                        <p className="text-sm text-slate-600">Stability-seeking, community-oriented, education-valued</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Parent Support Network</h4>
                        <p className="text-sm text-slate-600">Visiting families, move-in services, ongoing support needs</p>
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Strategic Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Student service targeting</li>
                        <li>• Young professional lifestyle</li>
                        <li>• Educational support services</li>
                        <li>• Parent-focused communications</li>
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
                  Orlando's Year-Round Marketing Calendar
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Orlando's tourism patterns create unique seasonal opportunities. Understanding when and why people visit 
                  allows for precise targeting and maximum ROI.
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
                      <li>• Christmas/New Year families</li>
                      <li>• Spring Break crowds</li>
                      <li>• Pleasant weather seekers</li>
                      <li>• Premium pricing acceptance</li>
                      <li>• Advanced booking patterns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Hurricane Season</Badge>
                    <CardTitle className="text-lg">Summer</CardTitle>
                    <p className="text-sm text-slate-600">May - Aug</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Family summer vacations</li>
                      <li>• International visitors</li>
                      <li>• Heat-tolerant demographics</li>
                      <li>• Value-seeking families</li>
                      <li>• Weather contingency planning</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="default" className="w-fit mb-2">Sweet Spot</Badge>
                    <CardTitle className="text-lg">Fall</CardTitle>
                    <p className="text-sm text-slate-600">Sep - Nov</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Halloween festivities</li>
                      <li>• Convention season peak</li>
                      <li>• Food & Wine festivals</li>
                      <li>• Moderate weather return</li>
                      <li>• Holiday preparation</li>
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
                      <li>• EPCOT festivals</li>
                      <li>• Convention bookings</li>
                      <li>• Sports tournaments</li>
                      <li>• Cultural celebrations</li>
                      <li>• Corporate events</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Orlando Success Stories
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Real results from Orlando businesses who understood the power of psychology-driven local marketing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {floridaTestimonials.orlando.map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <p className="text-slate-600">{testimonial.company}</p>
                      <Badge variant="outline" className="w-fit">{testimonial.location}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-bold text-green-600 text-lg">{testimonial.result}</p>
                        <p className="text-slate-500">{testimonial.industry}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Dominate Orlando's Digital Landscape?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get your free Orlando digital marketing consultation. I'll show you exactly how to capture Disney families, 
                  convention attendees, and local professionals with psychology-driven strategies.
                </p>
              </div>

              <Card className="card-professional shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">
                    Schedule Free Orlando Consultation
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Get a personalized marketing strategy for the Orlando market within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                      <p className="text-green-700 mb-4">
                        Your Orlando consultation request has been submitted successfully.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        I'll review your information and get back to you within 24 hours with your personalized Orlando marketing strategy.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            {...register("name")}
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            {...register("email")}
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(407) 555-0123"
                            {...register("phone")}
                            className={errors.phone ? "border-destructive" : ""}
                          />
                          {errors.phone && (
                            <p className="text-sm text-destructive">{errors.phone.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Business Type *</Label>
                          <Select onValueChange={(value) => {
                            const event = { target: { value } };
                            register("businessType").onChange(event);
                          }}>
                            <SelectTrigger className={errors.businessType ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="restaurant-food">Restaurant/Food Service</SelectItem>
                              <SelectItem value="professional-services">Professional Services</SelectItem>
                              <SelectItem value="healthcare-medical">Healthcare/Medical</SelectItem>
                              <SelectItem value="real-estate">Real Estate</SelectItem>
                              <SelectItem value="home-services">Home Services</SelectItem>
                              <SelectItem value="retail-ecommerce">Retail/E-commerce</SelectItem>
                              <SelectItem value="technology-saas">Technology/SaaS</SelectItem>
                              <SelectItem value="legal-services">Legal Services</SelectItem>
                              <SelectItem value="financial-services">Financial Services</SelectItem>
                              <SelectItem value="other-business">Other Business</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.businessType && (
                            <p className="text-sm text-destructive">{errors.businessType.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="marketingChallenge">Tell us about your marketing challenge *</Label>
                        <Textarea
                          id="marketingChallenge"
                          placeholder="What's your biggest marketing challenge in the Orlando market? Are you struggling to reach Disney families, convention attendees, or local professionals? What results are you looking for?"
                          className={`min-h-[120px] ${errors.marketingChallenge ? "border-destructive" : ""}`}
                          {...register("marketingChallenge")}
                        />
                        {errors.marketingChallenge && (
                          <p className="text-sm text-destructive">{errors.marketingChallenge.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full py-6 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5 mr-2" />
                            Schedule Free Orlando Consultation
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        No spam. No sales calls. Just valuable Orlando marketing insights delivered within 24 hours.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  Serving all of Greater Orlando: Disney World, Universal Studios, Convention Center, Lake Nona, Winter Park, UCF, and surrounding communities
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Capture Orlando's Magic Market?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Get a free Orlando digital marketing audit. I'll show you exactly how to target Disney families, 
                convention attendees, and local professionals with psychology-driven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => openDialog()}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Orlando Marketing Audit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                  onClick={() => openDialog()}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Theme Park Strategy
                </Button>
              </div>
              <p className="text-purple-200 mt-6 text-sm">
                Serving all of Greater Orlando: Disney World, Universal Studios, Convention Center, Lake Nona, Winter Park, UCF, and surrounding communities
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Get Started with Orlando Marketing Strategy</DialogTitle>
            <DialogDescription>
              Let's discuss how to capture Disney families, convention attendees, and local professionals with psychology-driven Orlando marketing strategies.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="M22 4 12 14.01l-3-3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thanks! Request received.</h3>
              <p className="text-muted-foreground">I'll analyze your Orlando market opportunities and send you a detailed strategy within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Smith" {...register('name')} className={errors.name ? 'border-destructive' : ''} />
                  {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" {...register('email')} className={errors.email ? 'border-destructive' : ''} />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="(407) 555-0123" {...register('phone')} className={errors.phone ? 'border-destructive' : ''} />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Business Type *</Label>
                  <Select onValueChange={(value) => setValue('businessType', value, { shouldValidate: true })}>
                    <SelectTrigger className={errors.businessType ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant-food">Restaurant/Food Service</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="healthcare-medical">Healthcare/Medical</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="home-services">Home Services</SelectItem>
                      <SelectItem value="retail-ecommerce">Retail/E-commerce</SelectItem>
                      <SelectItem value="technology-saas">Technology/SaaS</SelectItem>
                      <SelectItem value="legal-services">Legal Services</SelectItem>
                      <SelectItem value="financial-services">Financial Services</SelectItem>
                      <SelectItem value="other-business">Other Business</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.businessType && <p className="text-sm text-destructive">{errors.businessType.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="selectedService">Selected Service *</Label>
                <Input id="selectedService" readOnly {...register('selectedService')} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marketingChallenge">Tell us about your marketing challenge *</Label>
                <Textarea 
                  id="marketingChallenge" 
                  placeholder="What's your biggest marketing challenge in the Orlando market? Are you struggling to reach Disney families, convention attendees, or local professionals? What results are you looking for?" 
                  className={`min-h-[120px] ${errors.marketingChallenge ? 'border-destructive' : ''}`} 
                  {...register('marketingChallenge')} 
                />
                {errors.marketingChallenge && <p className="text-sm text-destructive">{errors.marketingChallenge.message}</p>}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" variant="hero" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Get Started'}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrlandoDigitalMarketing;