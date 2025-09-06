import { Helmet } from 'react-helmet-async';
import { MapPin, Building2, Users, TrendingUp, Calendar, Phone, Mail, Star, Waves, Beer, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { floridaTestimonials } from '@/data/floridaTestimonials';

const TampaGrowthMarketing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    businessType: z.string().min(1, "Please select your business type"),
    marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
    selectedService: z.string().default("Tampa Growth Marketing Audit")
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "Tampa Growth Marketing Audit" }
  });

  const onSubmitForm = async (data: ContactFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Tampa contact form submitted:", data);
    }
    setSubmitSuccess(true);
    reset();
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsDialogOpen(false);
    }, 2000);
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Tampa Growth Marketing | Tampa Bay Business Growth Expert | Joel Hinton</title>
        <meta name="description" content="Tampa Bay growth marketing expert specializing in Ybor City culture, Westshore business district, downtown professionals, and Tampa's emerging tech corridor. Psychology-driven growth strategies." />
        <meta name="keywords" content="Tampa growth marketing, Tampa Bay marketing, Ybor City marketing, Westshore marketing, Tampa downtown marketing, Tampa tech marketing, Tampa business growth" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Tampa Growth Marketing | Tampa Bay Business Growth Expert" />
        <meta property="og:description" content="Tampa Bay growth marketing expert specializing in local business districts, cultural targeting, and professional services." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tampa Growth Marketing | Tampa Bay Business Growth Expert" />
        <meta name="twitter:description" content="Tampa Bay growth marketing expert specializing in local business districts, cultural targeting, and professional services." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Joel Hinton Digital Marketing - Tampa",
            "description": "Tampa Growth Marketing and Digital Marketing Services",
            "url": "https://joelhinton.com/tampa-growth-marketing",
            "telephone": "+1-555-0123",
            "areaServed": {
              "@type": "City",
              "name": "Tampa",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.9506",
              "longitude": "-82.4572"
            },
            "serviceType": "Growth Marketing Services",
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
                  <Waves className="w-4 h-4 mr-2" />
                  Tampa Bay Growth Expert
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Tampa Growth Marketing That Captures Bay Area Energy
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  From Ybor City's historic charm to Westshore's corporate towers, I understand Tampa Bay's diverse business psychology. 
                  Target craft beer enthusiasts, financial professionals, tech startups, and the vibrant downtown scene with 
                  growth marketing strategies tailored to Tampa's unique culture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="hero"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Free Tampa Growth Audit
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Bay Area Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Tampa Market Psychology */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Understanding Tampa Bay's Business Psychology
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Tampa Bay blends historic character with modern innovation, creating unique consumer psychology. 
                  From cigar-rolling heritage to tech entrepreneurship, understanding these layers drives growth success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Beer className="w-10 h-10 text-amber-600 mb-4" />
                    <CardTitle>Cultural Heritage Psychology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Tampa's rich cultural history creates consumers who value authenticity, craftsmanship, and local pride. 
                      From Ybor City's cigar heritage to craft brewery culture.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Authentic experience seekers</li>
                      <li>• Local business supporters</li>
                      <li>• Craft and artisan preferences</li>
                      <li>• Cultural event enthusiasts</li>
                      <li>• Historic preservation values</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                    <CardTitle>Professional Services Hub</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Tampa's financial district and corporate presence create a sophisticated B2B market with specific 
                      decision-making patterns and professional service needs.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Financial services concentration</li>
                      <li>• Corporate decision-making</li>
                      <li>• Professional networking culture</li>
                      <li>• Executive-level targeting</li>
                      <li>• B2B relationship focus</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
                    <CardTitle>Emerging Tech Ecosystem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Tampa's growing tech sector attracts innovative minds who value disruption, efficiency, and cutting-edge solutions. 
                      Different psychology from traditional industries.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Innovation-driven mindset</li>
                      <li>• Early adopter behavior</li>
                      <li>• Startup culture values</li>
                      <li>• Remote work preferences</li>
                      <li>• Tech-savvy expectations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Business District Analysis */}
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Tampa Bay Business District Psychology
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Each Tampa district has distinct business cultures and consumer behaviors. 
                  My district-specific approach ensures your growth marketing resonates with local audiences.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Beer className="w-6 h-6 mr-3 text-amber-600" />
                      Ybor City Historic District
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      Tampa's historic heart where cigar-rolling heritage meets modern nightlife and entrepreneurship. 
                      Attracts culturally-minded consumers who value authenticity and local experiences.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Cultural Enthusiasts</h4>
                        <p className="text-sm text-slate-600">Heritage tourists, history buffs, authentic experience seekers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Nightlife Crowd</h4>
                        <p className="text-sm text-slate-600">Young professionals, entertainment seekers, social dining enthusiasts</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Local Business Owners</h4>
                        <p className="text-sm text-slate-600">Artists, restaurateurs, boutique retailers, craft entrepreneurs</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Event Attendees</h4>
                        <p className="text-sm text-slate-600">Festival-goers, cultural event enthusiasts, weekend visitors</p>
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Growth Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Authentic brand storytelling</li>
                        <li>• Cultural event marketing</li>
                        <li>• Local partnership leverage</li>
                        <li>• Heritage tourism targeting</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Building2 className="w-6 h-6 mr-3 text-blue-600" />
                      Westshore Business District
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      Tampa's premier business district housing major corporations, high-end hotels, and professional services. 
                      Attracts executive-level decision makers and corporate professionals.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Corporate Executives</h4>
                        <p className="text-sm text-slate-600">C-level decision makers, high-income professionals, corporate travelers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Financial Services</h4>
                        <p className="text-sm text-slate-600">Investment professionals, wealth managers, financial advisors</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Business Travelers</h4>
                        <p className="text-sm text-slate-600">Consultants, sales professionals, conference attendees</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Luxury Consumers</h4>
                        <p className="text-sm text-slate-600">High-end dining, premium services, luxury retail shoppers</p>
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Growth Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Executive-level B2B targeting</li>
                        <li>• Premium service positioning</li>
                        <li>• Corporate event marketing</li>
                        <li>• Luxury lifestyle campaigns</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Users className="w-6 h-6 mr-3 text-purple-600" />
                      Downtown Tampa Core
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      Tampa's revitalized downtown attracts young professionals, urban dwellers, and innovative businesses. 
                      Mix of residential, entertainment, and emerging tech companies.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Urban Professionals</h4>
                        <p className="text-sm text-slate-600">Millennials, urban dwellers, work-life balance seekers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Tech Workers</h4>
                        <p className="text-sm text-slate-600">Startup employees, remote workers, digital nomads</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Condo Residents</h4>
                        <p className="text-sm text-slate-600">Downtown living enthusiasts, walkability prioritizers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Entertainment Seekers</h4>
                        <p className="text-sm text-slate-600">Sports fans, concert-goers, dining enthusiasts</p>
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Growth Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Young professional targeting</li>
                        <li>• Urban lifestyle marketing</li>
                        <li>• Tech service positioning</li>
                        <li>• Event-based campaigns</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <TrendingUp className="w-6 h-6 mr-3 text-green-600" />
                      Hyde Park & SoHo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">
                      Tampa's trendy neighborhoods attracting affluent residents who value boutique shopping, 
                      fine dining, and upscale lifestyle experiences.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Affluent Residents</h4>
                        <p className="text-sm text-slate-600">High-income households, luxury lifestyle preferences</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Boutique Shoppers</h4>
                        <p className="text-sm text-slate-600">Fashion-conscious, unique experience seekers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Fine Dining Enthusiasts</h4>
                        <p className="text-sm text-slate-600">Culinary adventurers, social dining culture</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Young Families</h4>
                        <p className="text-sm text-slate-600">Education-focused, community-minded, safety-conscious</p>
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Growth Opportunities:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Luxury service targeting</li>
                        <li>• Boutique brand positioning</li>
                        <li>• Family service marketing</li>
                        <li>• Lifestyle-based campaigns</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Major Employers & Industry Analysis */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Tampa's Corporate Landscape & Growth Opportunities
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Understanding Tampa's major employers and their employee psychology creates targeted growth marketing opportunities. 
                  Each company culture influences consumer behavior and purchasing decisions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Financial Services Hub</CardTitle>
                    <Badge variant="secondary">Raymond James • Bank of America • Wells Fargo</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Tampa's concentration of financial services creates a sophisticated professional market with high disposable income 
                      and specific lifestyle preferences.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-800">Employee Psychology:</h4>
                        <p className="text-sm text-slate-600">Risk-aware, data-driven, relationship-focused, premium service expectations</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Growth Opportunities:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Executive coaching and development</li>
                          <li>• Luxury lifestyle services</li>
                          <li>• Investment and wealth management</li>
                          <li>• Corporate wellness programs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Retail & Consumer Goods</CardTitle>
                    <Badge variant="secondary">Publix Super Markets • Tech Data</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Large-scale retail operations create employees who understand customer service excellence and operational efficiency, 
                      influencing their own purchasing patterns.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-800">Employee Psychology:</h4>
                        <p className="text-sm text-slate-600">Customer-service minded, efficiency-focused, value-conscious, community-oriented</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Growth Opportunities:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Employee training and development</li>
                          <li>• Family-oriented services</li>
                          <li>• Community engagement programs</li>
                          <li>• Value-focused service offerings</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Healthcare & Medical</CardTitle>
                    <Badge variant="secondary">Tampa General Hospital • Moffitt Cancer Center</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Healthcare professionals have unique schedules, high stress levels, and specific wellness needs that create 
                      targeted marketing opportunities.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-800">Employee Psychology:</h4>
                        <p className="text-sm text-slate-600">Wellness-focused, time-constrained, helping-oriented, evidence-based decision making</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Growth Opportunities:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Stress management services</li>
                          <li>• Time-saving solutions</li>
                          <li>• Health and wellness products</li>
                          <li>• Continuing education programs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Emerging Tech Corridor</CardTitle>
                    <Badge variant="secondary">ConnectWise • ReliaQuest • Startups</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Tampa's growing tech scene attracts innovative minds with different priorities than traditional industries - 
                      flexibility, growth, and cutting-edge solutions.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-800">Employee Psychology:</h4>
                        <p className="text-sm text-slate-600">Innovation-driven, flexibility-seeking, growth-minded, tech-savvy, efficiency-focused</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Growth Opportunities:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• SaaS and tech services</li>
                          <li>• Professional development</li>
                          <li>• Remote work solutions</li>
                          <li>• Innovation consulting</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Seasonal Considerations */}
          <section className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Tampa Bay's Seasonal Marketing Psychology
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Tampa's weather patterns and seasonal events create unique consumer psychology shifts throughout the year. 
                  Strategic timing amplifies growth marketing effectiveness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">Snowbird Season</CardTitle>
                    <Badge variant="outline" className="w-fit">Oct - Apr</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Influx of seasonal residents with higher disposable income and different spending patterns than year-round residents.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Luxury service demand increases</li>
                      <li>• Healthcare service spikes</li>
                      <li>• Dining and entertainment growth</li>
                      <li>• Real estate activity peaks</li>
                      <li>• Cultural event attendance rises</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Calendar className="w-8 h-8 text-orange-600 mb-2" />
                    <CardTitle className="text-lg">Hurricane Season</CardTitle>
                    <Badge variant="outline" className="w-fit">Jun - Nov</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Weather concerns create urgency around home preparation, insurance, and contingency planning services.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Home improvement urgency</li>
                      <li>• Insurance evaluation periods</li>
                      <li>• Emergency service planning</li>
                      <li>• Generator and preparation sales</li>
                      <li>• Travel insurance interest</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Calendar className="w-8 h-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">Summer Tourism</CardTitle>
                    <Badge variant="outline" className="w-fit">May - Sep</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Family vacation season brings visitors seeking Tampa Bay beaches, attractions, and family-friendly experiences.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Family activity businesses</li>
                      <li>• Beach and water services</li>
                      <li>• Hotel and accommodation</li>
                      <li>• Restaurant and dining</li>
                      <li>• Tourist attraction marketing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Calendar className="w-8 h-8 text-purple-600 mb-2" />
                    <CardTitle className="text-lg">Event Seasons</CardTitle>
                    <Badge variant="outline" className="w-fit">Year-Round</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm">
                      Tampa Bay's calendar of festivals, sporting events, and cultural activities creates targeted marketing opportunities.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Gasparilla Festival (January)</li>
                      <li>• Strawberry Festival (February)</li>
                      <li>• Tampa Bay Lightning/Bucs seasons</li>
                      <li>• Art and music festivals</li>
                      <li>• Corporate convention seasons</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Tampa Bay Success Stories
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Real growth results from Tampa businesses who leveraged psychology-driven marketing strategies 
                  tailored to the Bay Area's unique market dynamics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {floridaTestimonials.tampa.map((testimonial, index) => (
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
                  Ready to Grow Your Tampa Bay Business?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get your free Tampa growth marketing consultation. I'll show you exactly how to target Ybor City culture, 
                  Westshore professionals, and downtown innovators with psychology-driven growth strategies.
                </p>
              </div>

              <Card className="card-professional shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">
                    Schedule Free Tampa Consultation
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Get a personalized growth strategy for the Tampa Bay market within 24 hours
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
                        Your Tampa consultation request has been submitted successfully.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        I'll review your information and get back to you within 24 hours with your personalized Tampa growth strategy.
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
                            placeholder="(813) 555-0123"
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
                          placeholder="What's your biggest marketing challenge in the Tampa Bay market? Are you struggling to reach Ybor City culture, Westshore professionals, or downtown innovators? What results are you looking for?"
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
                            Schedule Free Tampa Consultation
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        No spam. No sales calls. Just valuable Tampa Bay growth insights delivered within 24 hours.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  Serving all of Tampa Bay: Ybor City, Westshore, Downtown Tampa, Hyde Park, SoHo, Brandon, Carrollwood, and surrounding communities
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Grow Your Tampa Bay Business?
              </h2>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                Get a free Tampa growth marketing audit. I'll show you exactly how to target Ybor City culture, 
                Westshore professionals, and downtown innovators with psychology-driven growth strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Tampa Growth Audit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-amber-600"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Bay Area Strategy
                </Button>
              </div>
              <p className="text-amber-200 mt-6 text-sm">
                Serving all of Tampa Bay: Ybor City, Westshore, Downtown Tampa, Hyde Park, SoHo, Brandon, Carrollwood, and surrounding communities
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
            <DialogTitle>Get Started with Tampa Growth Marketing Strategy</DialogTitle>
            <DialogDescription>
              Let's discuss how to target Ybor City culture, Westshore professionals, and downtown innovators with psychology-driven growth strategies for Tampa Bay.
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
              <p className="text-muted-foreground">I'll analyze your Tampa Bay growth opportunities and send you a detailed strategy within 48 hours.</p>
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
                  <Input id="phone" type="tel" placeholder="(813) 555-0123" {...register('phone')} className={errors.phone ? 'border-destructive' : ''} />
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
                  placeholder="What's your biggest marketing challenge in the Tampa Bay market? Are you struggling to reach Ybor City culture, Westshore professionals, or downtown innovators? What results are you looking for?" 
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

export default TampaGrowthMarketing;