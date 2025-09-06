import { Helmet } from 'react-helmet-async';
import { MapPin, Anchor, Users, Calendar, Phone, Mail, Star, Shield, Waves, Building2, TrendingUp, CheckCircle, ArrowRight, Zap, Brain, BarChart3, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
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

const JacksonvilleSEOConsultant = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    businessType: z.string().min(1, "Please select your business type"),
    marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
    selectedService: z.string().default("Jacksonville SEO Audit")
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
    defaultValues: { selectedService: "Jacksonville SEO Audit" }
  });

  const onSubmitForm = async (data: ContactFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Jacksonville contact form submitted:", data);
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
        <title>Jacksonville SEO Consultant | Military Families & Beach Communities Expert | Joel Hinton</title>
        <meta name="description" content="Jacksonville SEO consultant specializing in military families, beach communities, maritime industry, and Riverside/Avondale districts. Local business psychology and seasonal marketing strategies." />
        <meta name="keywords" content="Jacksonville SEO, Jacksonville digital marketing, military family marketing, beach community SEO, maritime industry SEO, Riverside Avondale marketing, Jacksonville local SEO" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Jacksonville SEO Consultant | Military Families & Beach Communities Expert" />
        <meta property="og:description" content="Jacksonville SEO consultant specializing in military families, beach communities, maritime industry, and local business psychology." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jacksonville SEO Consultant | Military Families & Beach Communities Expert" />
        <meta name="twitter:description" content="Jacksonville SEO consultant specializing in military families, beach communities, maritime industry, and local business psychology." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Joel Hinton - Jacksonville SEO Consultant",
            "description": "Jacksonville SEO Consultant specializing in military families, beach communities, and maritime industry",
            "url": "https://joelhinton.com/jacksonville-seo-consultant",
            "telephone": "+1-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Jacksonville"
              },
              {
                "@type": "Neighborhood",
                "name": "Riverside"
              },
              {
                "@type": "Neighborhood",
                "name": "Avondale"
              },
              {
                "@type": "Neighborhood",
                "name": "Atlantic Beach"
              },
              {
                "@type": "Neighborhood", 
                "name": "Neptune Beach"
              },
              {
                "@type": "Neighborhood",
                "name": "Jacksonville Beach"
              }
            ],
            "serviceType": "SEO Consulting Services",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "SEO Services", href: "/seo-services" },
            { label: "Jacksonville SEO Consultant", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Jacksonville Local Expert
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Jacksonville SEO Consultant: <span className="text-primary">Military Families</span> & <span className="gradient-text">Beach Communities</span> Expert
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                As the largest city by land area in the continental US, Jacksonville's unique psychology blends military precision with coastal relaxation. I understand how to reach military families, beach lovers, maritime professionals, and Riverside/Avondale's artistic community with SEO that converts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Jacksonville SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Military Family Marketing Strategy
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Military Families</p>
                </div>
                <div className="p-4">
                  <Waves className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Beach Communities</p>
                </div>
                <div className="p-4">
                  <Anchor className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Maritime Industry</p>
                </div>
                <div className="p-4">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Riverside/Avondale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Market Psychology */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Understanding Jacksonville's <span className="gradient-text">Unique Psychology</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Jacksonville isn't just another Florida city. It's where military discipline meets beach culture, where maritime tradition blends with artistic expression, and where seasonal patterns create unique consumer behaviors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Military Family Psychology</CardTitle>
                  <CardDescription>Naval Air Station Jacksonville & Mayport Naval Station influence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Military families value reliability, security, and clear communication. They make decisions based on trust, referrals, and proven track records.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Decision-making involves spouse consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Value long-term relationships over quick sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Research extensively before purchasing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Deployment cycles affect timing decisions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Waves className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Beach Community Mindset</CardTitle>
                  <CardDescription>Atlantic Beach, Neptune Beach & Jacksonville Beach culture</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Beach communities prioritize lifestyle, experiences, and maintaining their coastal paradise. They're environmentally conscious and community-focused.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Environmental sustainability matters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Community involvement influences trust</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Lifestyle over luxury mentality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Hurricane preparedness is always top-of-mind</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <Anchor className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Maritime Industry Focus</CardTitle>
                  <CardDescription>Port of Jacksonville & marine commerce psychology</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Maritime professionals value precision, safety, and efficiency. They're practical decision-makers who appreciate straightforward, no-nonsense communication.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Safety and compliance are non-negotiable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">ROI-focused purchasing decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">24/7 availability expectations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Industry certifications matter significantly</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Riverside/Avondale Districts</CardTitle>
                  <CardDescription>Historic charm meets modern sophistication</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    These historic districts attract educated professionals, artists, and young families who value authenticity, local businesses, and community character.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Support for local, independent businesses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Historical preservation awareness</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Arts and culture appreciation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Walkability and community events matter</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seasonal Considerations */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Jacksonville's <span className="gradient-text">Seasonal Marketing</span> Considerations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your Jacksonville SEO strategy must account for unique seasonal patterns that affect consumer behavior throughout the year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Hurricane Season Psychology (June-November)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Hurricane season creates unique psychological patterns that affect everything from home improvement purchases to insurance decisions.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-destructive/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Peak Preparation (May-June)</h4>
                      <p className="text-xs text-muted-foreground">Home services, emergency supplies, insurance reviews</p>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Active Season (July-October)</h4>
                      <p className="text-xs text-muted-foreground">Travel cancellations, staycation bookings, emergency services</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Recovery Planning (November)</h4>
                      <p className="text-xs text-muted-foreground">Damage repair, landscape restoration, winter preparations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-xl">Tourism & Military Cycles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Jacksonville's tourism patterns and military deployment cycles create predictable consumer behavior changes throughout the year.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Winter Tourism Peak (December-March)</h4>
                      <p className="text-xs text-muted-foreground">Golf tourism, beach activities, dining, hospitality surge</p>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Spring Break & Events (March-April)</h4>
                      <p className="text-xs text-muted-foreground">TPC Sawgrass, Jacksonville Jazz Festival, youth sports</p>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Military PCS Season (Summer)</h4>
                      <p className="text-xs text-muted-foreground">Real estate activity, moving services, family services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Strategy for Jacksonville */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                My Jacksonville <span className="gradient-text">SEO Strategy</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Combining military precision with beach community authenticity to create SEO campaigns that resonate with each Jacksonville audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 1: Military-Grade Technical Foundation</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 1-2</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Complete technical SEO audit with military precision
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Mobile-first optimization for beach/boat browsing
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Local schema for military base proximity
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Hurricane-proof hosting and performance
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Mission-critical reliability meets beach accessibility"</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 2: Community-Specific Content</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 3-4</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Military family-focused content strategy
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Beach community lifestyle optimization
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Maritime industry B2B positioning
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Riverside/Avondale cultural targeting
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Content that speaks to Jacksonville's diverse communities"</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Phase 3: Seasonal Optimization</CardTitle>
                  <CardDescription className="text-primary font-semibold">Week 5-6</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Hurricane season marketing automation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Military PCS cycle targeting
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Tourism season optimization
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Year-round performance monitoring
                  </div>
                  <p className="text-xs italic text-primary mt-4">"Scalable systems for seasonal success"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Jacksonville <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from Jacksonville businesses that understood their community's unique psychology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Military Family Dental Practice
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">300% increase in military family appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-destructive/10 rounded-lg">
                      <div className="text-2xl font-bold text-destructive">15</div>
                      <div className="text-sm text-muted-foreground">Military families/month (before)</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">45+</div>
                      <div className="text-sm text-muted-foreground">Military families/month (after)</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Key wins: TRICARE-focused content + military community engagement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Strategy: Deployment-friendly scheduling + family-focused messaging</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Waves className="w-6 h-6 text-primary" />
                    Beach Community Restaurant
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">250% increase in local beach community diners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Challenge:</span>
                        <span className="text-right font-medium">Competing with chain restaurants near beach</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Solution:</span>
                        <span className="text-right font-medium">Local community focus + sustainability messaging</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Result:</span>
                        <span className="text-right font-medium text-primary">Became the go-to local spot for beach residents</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Client Testimonial */}
            <Card className="card-professional border-primary/20 bg-primary/5 max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-4">
                    "Joel understood our military community in a way that other marketers couldn't. He knows how military families think and make decisions. Our patient base from NAS Jacksonville has tripled in six months."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">Dr. Sarah Mitchell, Oceanfront Family Dental</cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Jacksonville SEO <span className="gradient-text">FAQs</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you target military families differently in Jacksonville?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Military families have unique decision-making patterns. They value trust, security, and long-term relationships. I create content that addresses deployment concerns, TRICARE benefits, PCS moves, and family stability. Location-based targeting focuses on proximity to NAS Jacksonville and Mayport Naval Station.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes beach community SEO different in Jacksonville?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Beach communities prioritize lifestyle and environmental consciousness. They support local businesses and value community involvement. My strategy emphasizes local partnerships, sustainable practices, and community events. Content focuses on lifestyle benefits rather than luxury positioning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do seasonal factors affect Jacksonville SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Jacksonville has unique seasonal patterns: hurricane season creates urgency for home services, military PCS season drives real estate activity, and tourism cycles affect hospitality businesses. I build automated seasonal campaigns that adjust messaging and targeting based on these predictable patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What's special about marketing to Riverside/Avondale residents?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Riverside/Avondale attracts educated professionals and artists who value authenticity and local character. They support independent businesses and are culturally engaged. SEO strategy emphasizes historical significance, arts community involvement, walkability, and local business partnerships.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Dominate Jacksonville's Search Results?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free Jacksonville SEO consultation. I'll show you exactly how to capture military families, 
                beach communities, and maritime industry professionals with psychology-driven strategies.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Free Jacksonville Consultation
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized SEO strategy for the Jacksonville market within 24 hours
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
                      Your Jacksonville consultation request has been submitted successfully.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I'll review your information and get back to you within 24 hours with your personalized Jacksonville SEO strategy.
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
                          placeholder="(904) 555-0123"
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
                        placeholder="What's your biggest marketing challenge in the Jacksonville market? Are you struggling to reach military families, beach communities, or maritime industry professionals? What results are you looking for?"
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
                          Schedule Free Jacksonville Consultation
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      No spam. No sales calls. Just valuable Jacksonville SEO insights delivered within 24 hours.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving all of Greater Jacksonville: Riverside, Avondale, Atlantic Beach, Neptune Beach, Jacksonville Beach, and surrounding communities
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Dominate Jacksonville <span className="gradient-text">Search Results?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a free SEO audit specifically designed for Jacksonville's unique military, beach, and maritime communities.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Join 50+ Jacksonville businesses that chose community-focused SEO over generic marketing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => setIsDialogOpen(true)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Your Free Jacksonville SEO Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg"
                onClick={() => setIsDialogOpen(true)}
              >
                <Mail className="w-5 h-5 mr-2" />
                Military Family Marketing Strategy
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Get Started with Jacksonville SEO Strategy</DialogTitle>
            <DialogDescription>
              Let's discuss how to reach military families, beach communities, and maritime industry professionals with Jacksonville-specific SEO strategies.
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
              <p className="text-muted-foreground">I'll analyze your Jacksonville market opportunities and send you a detailed SEO strategy within 48 hours.</p>
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
                  <Input id="phone" type="tel" placeholder="(904) 555-0123" {...register('phone')} className={errors.phone ? 'border-destructive' : ''} />
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
                  placeholder="What's your biggest marketing challenge in the Jacksonville market? Are you struggling to reach military families, beach communities, or maritime industry professionals? What results are you looking for?" 
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

export default JacksonvilleSEOConsultant;