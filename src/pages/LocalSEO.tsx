import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Search, Star, TrendingUp, Calendar, CheckCircle, ArrowRight,
  Globe, Target, Zap, Users, Award, Building2, FileText, Phone, Mail, Clock,
  Home
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("Local SEO Strategy Consultation")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const LocalSEO = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Local SEO Strategy Consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactSubmitSuccess, setContactSubmitSuccess] = useState(false);

  const auditFormSchema = z.object({
    businessName: z.string().min(2, "Business name must be at least 2 characters"),
    website: z.string().url("Please enter a valid website URL"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    city: z.string().min(1, "Please select your primary city"),
    businessType: z.string().min(1, "Please select your business type"),
    currentChallenges: z.string().min(10, "Please describe your challenges (at least 10 characters)")
  });

  type AuditFormData = z.infer<typeof auditFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema)
  });

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors },
    reset: resetContact,
    setValue: setValueContact
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "Local SEO Strategy Consultation" }
  });

  const onSubmit = async (data: AuditFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (process.env.NODE_ENV === 'development') {
      console.log("Local SEO audit request:", data);
    }
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
    setIsSubmitting(false);
  };

  const onSubmitContact = async (data: ContactFormData) => {
    if (isContactSubmitting) return; // Prevent double submission
    setIsContactSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Local SEO contact form submitted:", data);
    }
    setContactSubmitSuccess(true);
    resetContact();
    setTimeout(() => {
      setContactSubmitSuccess(false);
      setIsDialogOpen(false);
    }, 2000);
    setIsContactSubmitting(false);
  };

  const localCities = [
    "Daytona Beach", "Ormond Beach", "Port Orange", "New Smyrna Beach", "Palm Coast", "DeLand",
    "Holly Hill", "DeBary", "Sanford", "Deltona", "Orange City", "Edgewater", "South Daytona",
    "Flagler Beach", "Bunnell", "Lake Mary", "Longwood", "Altamonte Springs", "Other Volusia/Flagler City"
  ];

  return (
    <>
      <Helmet>
        <title>Local SEO Services | Dominate Your Market | AIO Growth SEO</title>
        <meta name="description" content="Volusia & Flagler County Local SEO experts helping businesses dominate their local markets. Google Business Profile optimization, citation building, and review management strategies." />
        <meta name="keywords" content="local SEO Volusia County, local SEO Flagler County, Google Business Profile optimization, local search marketing, citation building, review management, Central Florida local SEO" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Local SEO Services | Dominate Your Market | AIO Growth SEO" />
        <meta property="og:description" content="Volusia & Flagler County Local SEO experts helping businesses dominate their local markets with psychology-driven strategies." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local SEO Services | AIO Growth SEO" />
        <meta name="twitter:description" content="Volusia & Flagler County Local SEO experts helping businesses dominate their local markets with psychology-driven strategies." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Local SEO Services - Volusia & Flagler County",
            "description": "Local SEO services helping Central Florida businesses dominate their local markets",
            "url": "https://aiogrowthseo.com/local-seo",
            "provider": {
              "@type": "Organization",
              "name": "AIO Growth SEO",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL",
                "postalCode": "32114",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Volusia County" },
              { "@type": "AdministrativeArea", "name": "Flagler County" }
            ],
            "serviceType": "Local SEO",
            "offers": {
              "@type": "Offer",
              "description": "Local SEO setup and monthly services for Central Florida businesses",
              "priceCurrency": "USD",
              "price": "1500",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "1500",
                "priceCurrency": "USD",
                "unitText": "one-time setup"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Services", href: "/services" },
            { label: "Local SEO", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Volusia & Flagler County Market Domination
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary">Local SEO</span> That Dominates Central Florida Markets
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Stop losing customers to competitors who show up first in local searches. Our psychology-driven Local SEO strategies help Central Florida businesses in <Link to="/industries/real-estate" className="text-primary hover:underline">real estate</Link>, <Link to="/industries/home-services" className="text-primary hover:underline">home services</Link>, and <Link to="/industries/healthcare" className="text-primary hover:underline">healthcare</Link> capture more local customers and dominate their markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => document.getElementById('local-seo-audit')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Get Free Local SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => window.open('tel:+13865550123')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">300% More Local Visibility</p>
                </div>
                <div className="p-4">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">5-Star Review Management</p>
                </div>
                <div className="p-4">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Beat Local Competitors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO vs Traditional SEO */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Local SEO vs <span className="gradient-text">Traditional SEO</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Local SEO targets customers in your immediate area who are ready to buy. It's fundamentally different from traditional SEO and requires specialized strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                      <Globe className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">Traditional SEO</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2"></div>
                      <p className="text-muted-foreground">Targets broad, national keywords</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2"></div>
                      <p className="text-muted-foreground">Focuses on organic search rankings</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2"></div>
                      <p className="text-muted-foreground">Longer conversion cycle</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2"></div>
                      <p className="text-muted-foreground">Competes with national brands</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2"></div>
                      <p className="text-muted-foreground">Results take 6-12 months</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">Local SEO (Our Specialty)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p className="text-foreground font-medium">Targets "near me" & local intent keywords</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p className="text-foreground font-medium">Dominates Google Map Pack results</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p className="text-foreground font-medium">Higher conversion rates (ready-to-buy customers)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p className="text-foreground font-medium">Competes with local businesses only</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p className="text-foreground font-medium">Results visible in 30-90 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Florida-Specific Strategies */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Florida-Specific <span className="gradient-text">Local SEO Strategies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Florida's unique market characteristics require specialized approaches. From tourist seasons to hurricane preparations, we optimize for Florida's specific search patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Tourist vs. Local Targeting</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Optimize for both year-round residents and seasonal tourists with different search behaviors and intent patterns.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Seasonal keyword optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Tourist vs. resident messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Peak season preparation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Seasonal Market Cycles</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Leverage Florida's unique seasonal patterns to maximize visibility during peak demand periods for your industry.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Hurricane season optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Winter tourist surge preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Summer locals focus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Multi-Location Optimization</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Dominate multiple Florida markets with location-specific strategies that avoid keyword cannibalization.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>City-specific landing pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Local citation management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Regional content strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Business Profile Optimization */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Google Business Profile <span className="gradient-text">Domination</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your Google Business Profile is your digital storefront. We optimize every element to maximize visibility and conversion in local search results.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional mb-12">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Complete GBP Optimization Includes:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Profile Verification & Setup</p>
                          <p className="text-sm text-muted-foreground">Ensuring your business is properly verified and all information is accurate</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">High-Quality Photo Optimization</p>
                          <p className="text-sm text-muted-foreground">Professional photos that showcase your business and improve engagement</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Strategic Category Selection</p>
                          <p className="text-sm text-muted-foreground">Choosing the right primary and secondary categories for maximum visibility</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Attribute Optimization</p>
                          <p className="text-sm text-muted-foreground">Highlighting business features that customers search for</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Psychology-Driven Description</p>
                          <p className="text-sm text-muted-foreground">Compelling business descriptions that convert browsers into customers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Regular Post Management</p>
                          <p className="text-sm text-muted-foreground">Strategic posts that keep your profile active and engaging</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Q&A Optimization</p>
                          <p className="text-sm text-muted-foreground">Proactively answering common customer questions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Performance Monitoring</p>
                          <p className="text-sm text-muted-foreground">Tracking views, clicks, calls, and direction requests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">The Psychology Behind GBP Optimization</h3>
                  <p className="text-muted-foreground">
                    Most businesses treat their Google Business Profile as an afterthought. We use psychological triggers to make your business irresistible to local searchers.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Social Proof</h4>
                    <p className="text-sm text-muted-foreground">High-quality reviews and photos that build trust instantly</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Urgency</h4>
                    <p className="text-sm text-muted-foreground">Strategic posts about limited offers and availability</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Authority</h4>
                    <p className="text-sm text-muted-foreground">Professional presentation that positions you as the expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Citation Building & Review Management */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Citation Building & <span className="gradient-text">Review Management</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build unshakeable local authority with strategic citation building and a systematic approach to generating and managing customer reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <Card className="card-professional">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl">Strategic Citation Building</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Citations are online mentions of your business name, address, and phone number. We build high-quality citations on authoritative sites to establish local trust signals.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Tier 1 Citations (Must-Haves)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Google Business Profile</li>
                          <li>• Bing Places for Business</li>
                          <li>• Apple Maps Connect</li>
                          <li>• Facebook Business</li>
                          <li>• Yelp</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Tier 2 Citations (Industry-Specific)</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Industry directories</li>
                          <li>• Local chamber of commerce</li>
                          <li>• Better Business Bureau</li>
                          <li>• Industry associations</li>
                          <li>• Local news sites</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Florida-Specific Citations</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Florida business directories</li>
                          <li>• City-specific platforms</li>
                          <li>• Regional publications</li>
                          <li>• Tourism boards</li>
                          <li>• Local government listings</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="card-professional">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl">Review Management System</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Reviews are crucial for local SEO and customer trust. We implement systems that generate more positive reviews and properly handle negative feedback.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Automated Review Requests</p>
                          <p className="text-sm text-muted-foreground">Systematic follow-up with satisfied customers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Review Response Strategy</p>
                          <p className="text-sm text-muted-foreground">Professional responses to all reviews that build trust</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Reputation Monitoring</p>
                          <p className="text-sm text-muted-foreground">Track mentions across all major review platforms</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Negative Review Recovery</p>
                          <p className="text-sm text-muted-foreground">Turn negative experiences into positive outcomes</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-amber-600 mt-1" />
                        <div>
                          <p className="font-semibold text-amber-800">Review Psychology Secret</p>
                          <p className="text-sm text-amber-700">
                            We time review requests based on customer journey psychology - requesting reviews at the emotional peak of customer satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup & Technical SEO */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Schema Markup & <span className="gradient-text">Technical Optimization</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Help search engines understand your business with strategic schema markup and technical optimizations that boost local search visibility.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Essential Schema Types for Local Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary" />
                          LocalBusiness Schema
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Core business information including name, address, hours, contact details, and service areas.
                        </p>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary" />
                          Review Schema
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Display star ratings directly in search results to increase click-through rates.
                        </p>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          Service Schema
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed service descriptions, pricing, and availability information.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          Event Schema
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Promote business events, sales, and special offers with rich snippets.
                        </p>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          Organization Schema
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Establish brand authority with comprehensive organization markup.
                        </p>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          GeoCoordinates Schema
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Precise location data for improved local search accuracy.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">Technical SEO Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Mobile-first optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Page speed optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">SSL certificate setup</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">XML sitemap optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Local keyword optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">NAP consistency audit</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">Local Content Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Location-specific landing pages</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Local event coverage</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Community involvement content</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Local industry insights</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Customer success stories</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">FAQ optimization</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Location SEO */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Multi-Location <span className="gradient-text">SEO Mastery</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expand your business across multiple Florida markets without cannibalizing your existing rankings. Strategic multi-location SEO that scales.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="card-professional mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">The Multi-Location Challenge</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Most businesses make critical mistakes when expanding to multiple locations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-destructive mb-4">❌ What Most Businesses Do Wrong</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                          <span>•</span>
                          <span>Duplicate content across location pages</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                          <span>•</span>
                          <span>Compete against themselves for keywords</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                          <span>•</span>
                          <span>Generic location pages with no local relevance</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                          <span>•</span>
                          <span>Inconsistent business information</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                          <span>•</span>
                          <span>No local market differentiation</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary mb-4">✅ Our Strategic Approach</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <span>Unique content for each location</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <span>Location-specific keyword strategies</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <span>Local market psychology integration</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <span>Centralized citation management</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <span>Location-specific review strategies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="card-professional text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Location Page Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Each location gets a fully optimized page with unique content, local keywords, and market-specific messaging.
                    </p>
                    <ul className="text-xs space-y-1 text-left">
                      <li>• Local market analysis</li>
                      <li>• Community-focused content</li>
                      <li>• Location-specific testimonials</li>
                      <li>• Regional service variations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-professional text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Keyword Segmentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Strategic keyword distribution prevents cannibalization while maximizing coverage across all target markets.
                    </p>
                    <ul className="text-xs space-y-1 text-left">
                      <li>• Primary location keywords</li>
                      <li>• Secondary market terms</li>
                      <li>• Service + location combinations</li>
                      <li>• Competitive gap analysis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-professional text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Performance Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Individual location performance monitoring with consolidated reporting for multi-location insights.
                    </p>
                    <ul className="text-xs space-y-1 text-left">
                      <li>• Location-specific analytics</li>
                      <li>• Competitive position tracking</li>
                      <li>• ROI by market analysis</li>
                      <li>• Growth opportunity identification</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Considerations */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Florida's <span className="gradient-text">Seasonal SEO Strategy</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Florida's unique seasonal patterns require specialized SEO strategies. From hurricane season to winter tourist influx, we optimize for year-round success.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="card-professional">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-8 h-8 text-blue-600" />
                      <CardTitle className="text-2xl">Winter Season (Dec-Mar)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Peak tourist season brings different search behaviors and increased competition. We optimize for both tourists and year-round residents.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Tourist-Focused Keywords</h4>
                        <p className="text-xs text-muted-foreground">"near me", "vacation", "best", "reviews"</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Content Strategies</h4>
                        <p className="text-xs text-muted-foreground">Tourist guides, seasonal services, weather-related content</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Optimization Focus</h4>
                        <p className="text-xs text-muted-foreground">Extended hours, availability, tourist amenities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-8 h-8 text-orange-600" />
                      <CardTitle className="text-2xl">Summer Season (Jun-Nov)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Hurricane season and local-focused period. Emphasis shifts to serving year-round residents and emergency preparedness services.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Local-Focused Keywords</h4>
                        <p className="text-xs text-muted-foreground">"hurricane prep", "local", "emergency", "reliable"</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Content Strategies</h4>
                        <p className="text-xs text-muted-foreground">Hurricane guides, local events, community involvement</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Optimization Focus</h4>
                        <p className="text-xs text-muted-foreground">Emergency services, community trust, local expertise</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Year-Round SEO Calendar</CardTitle>
                  <CardDescription className="text-center">
                    Strategic optimization schedule that aligns with Florida's unique seasonal patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Q1: Winter Peak</h4>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <li>Tourist keyword focus</li>
                        <li>Extended hours promotion</li>
                        <li>Seasonal service highlights</li>
                        <li>Visitor guide content</li>
                      </ul>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-b from-green-50 to-green-100 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Q2: Spring Transition</h4>
                      <ul className="text-xs text-green-700 space-y-1">
                        <li>Balanced targeting</li>
                        <li>Local event promotion</li>
                        <li>Summer prep content</li>
                        <li>Service adjustments</li>
                      </ul>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-b from-orange-50 to-orange-100 border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Q3: Hurricane Season</h4>
                      <ul className="text-xs text-orange-700 space-y-1">
                        <li>Emergency keywords</li>
                        <li>Preparedness content</li>
                        <li>Community focus</li>
                        <li>Reliability messaging</li>
                      </ul>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-b from-purple-50 to-purple-100 border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Q4: Holiday Prep</h4>
                      <ul className="text-xs text-purple-700 space-y-1">
                        <li>Holiday services</li>
                        <li>Early bird promotions</li>
                        <li>Tourist prep</li>
                        <li>Seasonal adjustments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing - Setup + Monthly Model */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Local SEO <span className="gradient-text">Investment Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Start with a solid foundation, then maintain your momentum. Our setup + monthly model gets you ranking fast and keeps you there.
              </p>
            </div>

            {/* Setup Package */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Step 1: Foundation Setup
                </Badge>
                <h3 className="text-2xl font-bold">Start with a Complete Local SEO Foundation</h3>
              </div>

              <Card className="card-professional border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">Local Foundation Setup</CardTitle>
                  <CardDescription className="text-lg">Everything you need to dominate local search</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">$1,500</span>
                    <span className="text-lg text-muted-foreground ml-2">one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Complete Local SEO Audit & Technical Fixes</p>
                          <p className="text-sm text-muted-foreground">Comprehensive analysis and implementation of all technical optimizations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Google Business Profile Optimization</p>
                          <p className="text-sm text-muted-foreground">Full GBP setup, optimization, and verification</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">25-30 Core Citations Built</p>
                          <p className="text-sm text-muted-foreground">High-authority local directories and platforms</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Local Schema Implementation</p>
                          <p className="text-sm text-muted-foreground">LocalBusiness, Service, and Review schema markup</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Review Management System Setup</p>
                          <p className="text-sm text-muted-foreground">Automated review requests and monitoring tools</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Geographic & Topical Authority Roadmap</p>
                          <p className="text-sm text-muted-foreground">Custom strategy for your market and industry</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Button
                      size="lg"
                      className="px-8"
                      onClick={() => {
                        openDialog();
                        resetContact({ selectedService: "Local Foundation Setup - $1,500" });
                      }}
                    >
                      Get Started with Foundation Setup
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Packages */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Step 2: Monthly Maintenance
                </Badge>
                <h3 className="text-2xl font-bold">Keep Your Local Rankings Growing</h3>
                <p className="text-muted-foreground mt-2">Choose the level of ongoing optimization that fits your goals</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-professional relative">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">Local Growth</CardTitle>
                    <CardDescription>Maintain and steadily improve rankings</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">$500<span className="text-base font-normal text-muted-foreground">/month</span></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Monthly monitoring & updates</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Basic GMB posts & optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Citation maintenance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Monthly performance reports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Review response management</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-6"
                      variant="outline"
                      onClick={() => {
                        openDialog();
                        resetContact({ selectedService: "Local Growth - $500/month" });
                      }}
                    >
                      Choose Local Growth
                    </Button>
                  </CardContent>
                </Card>

                <Card className="card-professional relative border-primary/50 shadow-lg">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Recommended</Badge>
                  </div>
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl mb-2">Market Domination</CardTitle>
                    <CardDescription>Aggressive growth and competitor crushing</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">$750<span className="text-base font-normal text-muted-foreground">/month</span></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Everything in Local Growth +</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Weekly content creation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Review generation campaigns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Competitor monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Weekly progress updates</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-6"
                      onClick={() => {
                        openDialog();
                        resetContact({ selectedService: "Market Domination - $750/month" });
                      }}
                    >
                      Choose Market Domination
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  <Building2 className="w-4 h-4 mr-2" />
                  Enterprise Solution
                </Badge>
                <h3 className="text-2xl font-bold">Multi-Location & Statewide Coverage</h3>
              </div>

              <Card className="card-professional border-secondary/30 bg-gradient-to-br from-secondary/5 to-primary/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">Full Coverage Package</CardTitle>
                  <CardDescription className="text-lg">For 10+ locations or statewide market domination</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">$2,500</span>
                    <span className="text-lg text-muted-foreground ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-semibold">Weekly GMB Posts Across All Locations</p>
                          <p className="text-sm text-muted-foreground">Consistent engagement across your entire footprint</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-semibold">Monthly Link Building Campaigns</p>
                          <p className="text-sm text-muted-foreground">Authority-building backlinks for each location</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-semibold">Location-Specific Content Creation</p>
                          <p className="text-sm text-muted-foreground">Unique, locally-optimized content for each market</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-semibold">Programmatic SEO Implementation</p>
                          <p className="text-sm text-muted-foreground">Scalable location page generation and optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8"
                      onClick={() => {
                        openDialog();
                        resetContact({ selectedService: "Full Coverage Package - $2,500/month" });
                      }}
                    >
                      Discuss Enterprise Solution
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                All packages include our 90-day performance guarantee. If you don't see measurable improvement in local search visibility, we'll work for free until you do.
              </p>
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Strategy Call
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Local SEO <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from Florida businesses that chose strategic local SEO over generic digital marketing tactics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Tampa HVAC Company</CardTitle>
                      <CardDescription>Emergency Air Conditioning Repair</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">312%</div>
                      <div className="text-xs text-muted-foreground">Local Calls</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">#1</div>
                      <div className="text-xs text-muted-foreground">Map Pack</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">4.9</div>
                      <div className="text-xs text-muted-foreground">Star Rating</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Our Google Business Profile went from invisible to dominating the Tampa HVAC market. During last summer's heatwave, we were booked solid from local search traffic alone."
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">ROI: 420% increase in 6 months</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Orlando Dental Practice</CardTitle>
                      <CardDescription>Family & Cosmetic Dentistry</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">185%</div>
                      <div className="text-xs text-muted-foreground">New Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Top 3</div>
                      <div className="text-xs text-muted-foreground">All Keywords</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">67</div>
                      <div className="text-xs text-muted-foreground">New Reviews</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The psychology-driven approach transformed how patients perceive our practice. We're not just ranking higher; we're attracting higher-quality patients who value our expertise."
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Average patient value: +$890 per case</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <Home className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Miami Real Estate Team</CardTitle>
                      <CardDescription>Luxury Property Specialists</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">245%</div>
                      <div className="text-xs text-muted-foreground">Qualified Leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">8/10</div>
                      <div className="text-xs text-muted-foreground">Top Rankings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">$2.1M</div>
                      <div className="text-xs text-muted-foreground">Extra Sales</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Local SEO dominance in Miami's competitive market seemed impossible. Within 8 months, we're the go-to team for luxury properties in South Beach and Brickell."
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Commission increase: $87,500 monthly</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Jacksonville Plumbing</CardTitle>
                      <CardDescription>Emergency & Residential Service</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">428%</div>
                      <div className="text-xs text-muted-foreground">Emergency Calls</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">#1</div>
                      <div className="text-xs text-muted-foreground">5 Cities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">89%</div>
                      <div className="text-xs text-muted-foreground">Market Share</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Multi-location optimization helped us dominate not just Jacksonville, but surrounding cities too. Our trucks stay busy, and we're selective about which jobs we take."
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Revenue growth: 340% year-over-year</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local SEO Audit CTA */}
        <section id="local-seo-audit" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Your Free Local SEO Audit
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover exactly where your local search presence stands and get a personalized roadmap for dominating your Central Florida market.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Free Local SEO Audit & Strategy Session
                </CardTitle>
                <CardDescription className="text-lg">
                  Discover your local search gaps and get a custom strategy within 48 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Audit Request Submitted!</h3>
                    <p className="text-green-700 mb-4">
                      Your local SEO audit request has been submitted successfully.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We'll analyze your local search presence and send you a detailed report with personalized recommendations within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          placeholder="Your Business Name"
                          {...register("businessName")}
                          className={errors.businessName ? "border-destructive" : ""}
                        />
                        {errors.businessName && (
                          <p className="text-sm text-destructive">{errors.businessName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website URL *</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          {...register("website")}
                          className={errors.website ? "border-destructive" : ""}
                        />
                        {errors.website && (
                          <p className="text-sm text-destructive">{errors.website.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(386) 555-0123"
                          {...register("phone")}
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Primary City *</Label>
                        <Select onValueChange={(value) => setValue("city", value, { shouldValidate: true })}>
                          <SelectTrigger className={errors.city ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select your primary city" />
                          </SelectTrigger>
                          <SelectContent className="max-h-48">
                            {localCities.map((city) => (
                              <SelectItem key={city} value={city.toLowerCase().replace(/ /g, '-')}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.city && (
                          <p className="text-sm text-destructive">{errors.city.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select onValueChange={(value) => setValue("businessType", value, { shouldValidate: true })}>
                          <SelectTrigger className={errors.businessType ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="legal">Legal Services</SelectItem>
                            <SelectItem value="dental">Dental</SelectItem>
                            <SelectItem value="automotive">Automotive</SelectItem>
                            <SelectItem value="home-services">Home Services (HVAC, Plumbing, etc.)</SelectItem>
                            <SelectItem value="restaurant">Restaurant & Food</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="beauty">Beauty & Wellness</SelectItem>
                            <SelectItem value="professional">Professional Services</SelectItem>
                            <SelectItem value="fitness">Fitness & Recreation</SelectItem>
                            <SelectItem value="tourism">Tourism & Hospitality</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.businessType && (
                          <p className="text-sm text-destructive">{errors.businessType.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentChallenges">What's your biggest local SEO challenge? *</Label>
                      <Textarea
                        id="currentChallenges"
                        placeholder="Tell me about your current local search challenges, competition, or specific goals. The more detail you provide, the more customized your audit will be."
                        className={`min-h-[120px] ${errors.currentChallenges ? "border-destructive" : ""}`}
                        {...register("currentChallenges")}
                      />
                      {errors.currentChallenges && (
                        <p className="text-sm text-destructive">{errors.currentChallenges.message}</p>
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
                          Submitting Audit Request...
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5 mr-2" />
                          Get My Free Local SEO Audit
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      No spam. No sales pressure. Just actionable insights you can implement immediately.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>

      {/* OLD Contact Form Dialog - DISABLED */}
      {/* <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetContact(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Get Started with Local SEO</DialogTitle>
            <DialogDescription>
              Let's discuss your local search optimization goals and get you started with the perfect local SEO strategy for your business.
            </DialogDescription>
          </DialogHeader>

          {contactSubmitSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="M22 4 12 14.01l-3-3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thanks! Request received.</h3>
              <p className="text-muted-foreground">We'll analyze your local search presence and send you a detailed local SEO strategy within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitContact(onSubmitContact)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Smith" {...registerContact('name')} className={contactErrors.name ? 'border-destructive' : ''} />
                  {contactErrors.name && <p className="text-sm text-destructive">{contactErrors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" {...registerContact('email')} className={contactErrors.email ? 'border-destructive' : ''} />
                  {contactErrors.email && <p className="text-sm text-destructive">{contactErrors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="(555) 555-0123" {...registerContact('phone')} className={contactErrors.phone ? 'border-destructive' : ''} />
                  {contactErrors.phone && <p className="text-sm text-destructive">{contactErrors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Business Type *</Label>
                  <Select onValueChange={(value) => setValueContact('businessType', value, { shouldValidate: true })}>
                    <SelectTrigger className={contactErrors.businessType ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="saas">SaaS / Tech</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="home-services">Home Services</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="restaurant">Restaurant & Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {contactErrors.businessType && <p className="text-sm text-destructive">{contactErrors.businessType.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="selectedService">Selected Service *</Label>
                <Input id="selectedService" readOnly {...registerContact('selectedService')} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marketingChallenge">Tell us about your local search challenges *</Label>
                <Textarea 
                  id="marketingChallenge" 
                  placeholder="What's your business location? What local search challenges are you facing? How visible are you in local search results?" 
                  className={`min-h-[120px] ${contactErrors.marketingChallenge ? 'border-destructive' : ''}`} 
                  {...registerContact('marketingChallenge')} 
                />
                {contactErrors.marketingChallenge && <p className="text-sm text-destructive">{contactErrors.marketingChallenge.message}</p>}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" variant="hero" disabled={isContactSubmitting}>
                  {isContactSubmitting ? 'Submitting...' : 'Get Started'}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog> */}

      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Started with Local SEO"
        description="Let's discuss your local search optimization goals and get you started with the perfect local SEO strategy for your business."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default LocalSEO;