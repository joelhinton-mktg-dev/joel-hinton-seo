import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { 
  Target, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Gauge,
  Eye,
  Users,
  Search,
  Facebook,
  Linkedin,
  Bot,
  DollarSign,
  Phone
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("Paid Advertising Strategy Consultation")
});

const adAuditFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  adPlatform: z.string().min(1, "Please select your primary ad platform"),
  monthlyAdSpend: z.string().min(1, "Please select your monthly ad spend"),
  currentChallenges: z.string().min(10, "Please describe your current ad challenges (at least 10 characters)"),
  website: z.string().url("Please enter a valid website URL")
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type AdAuditFormData = z.infer<typeof adAuditFormSchema>;

const PaidAdvertising = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isAdAuditSubmitting, setIsAdAuditSubmitting] = useState(false);
  const [adAuditSuccess, setAdAuditSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "Paid Advertising Strategy Consultation" }
  });

  const {
    register: registerAdAudit,
    handleSubmit: handleSubmitAdAudit,
    formState: { errors: adAuditErrors },
    reset: resetAdAudit,
    setValue: setValueAdAudit
  } = useForm<AdAuditFormData>({
    resolver: zodResolver(adAuditFormSchema)
  });

  const onSubmitForm = async (data: ContactFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Paid Advertising contact form submitted:", data);
    }
    setSubmitSuccess(true);
    reset();
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsDialogOpen(false);
    }, 2000);
    setIsSubmitting(false);
  };

  const onSubmitAdAudit = async (data: AdAuditFormData) => {
    if (isAdAuditSubmitting) return; // Prevent double submission
    setIsAdAuditSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Paid Advertising audit form submitted:", data);
    }
    setAdAuditSuccess(true);
    resetAdAudit();
    setTimeout(() => {
      setAdAuditSuccess(false);
    }, 5000);
    setIsAdAuditSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>ROI-Focused Paid Advertising | Expert Google & Facebook Ads | Joel Hinton</title>
        <meta name="description" content="ROI-focused paid advertising campaigns for Florida businesses. Expert Google Ads, Facebook Ads, and PPC management." />
        <meta name="keywords" content="paid advertising, Google Ads management, Facebook advertising, PPC management, ROI advertising" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="ROI-Focused Paid Advertising | Expert Google & Facebook Ads | Joel Hinton" />
        <meta property="og:description" content="ROI-focused paid advertising campaigns for Florida businesses. Expert Google Ads, Facebook Ads, and PPC management." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ROI-Focused Paid Advertising | Expert Google & Facebook Ads" />
        <meta name="twitter:description" content="ROI-focused paid advertising campaigns for Florida businesses. Expert Google Ads, Facebook Ads, and PPC management." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Paid Advertising Management",
            "description": "ROI-focused paid advertising campaigns with transparent pricing",
            "provider": {
              "@type": "Person",
              "name": "Joel Hinton"
            },
            "serviceType": "Digital Marketing",
            "areaServed": "Florida"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <PageBreadcrumb 
        items={[
          { label: "Paid Advertising", current: true }
        ]}
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Paid Media That Actually Converts
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Stop burning money on ads that don't work. Get AI-optimized campaigns with psychology-driven creative that turns clicks into customers for <Link to="/industries/ecommerce" className="text-primary hover:underline">e-commerce</Link> and <Link to="/industries/restaurants-hospitality" className="text-primary hover:underline">restaurants & hospitality</Link> businesses.
            </p>
            
            <div className="bg-card p-6 rounded-lg border mb-8 max-w-3xl mx-auto">
              <p className="text-lg font-medium text-foreground">
                Most agencies charge 20% of ad spend just to set up basic campaigns. We charge a flat fee and optimize for your actual business goals.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-3"
              onClick={() => setIsDialogOpen(true)}
            >
              <Target className="w-5 h-5 mr-2" />
              Get Your Ad Account Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Why Most Paid Ads Fail Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Most Paid Ads Fail</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the problem is the first step to the solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="card-professional h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Shield className="w-5 h-5" />
                  The Typical Agency Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Charge 15-20% of your ad spend (so they want you to spend more, not less)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Generic campaigns copied from other clients</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Focus on clicks and impressions instead of actual business results</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>No real understanding of your customer psychology</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Lock you into long contracts with poor performance</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional h-full border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Brain className="w-5 h-5" />
                  Our Paid Media Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Flat Monthly Fee:</p>
                    <p className="text-sm text-muted-foreground">We succeed when you succeed, not when you spend more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Psychology-First Creative:</p>
                    <p className="text-sm text-muted-foreground">Ads that speak to real customer motivations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">AI-Optimized Campaigns:</p>
                    <p className="text-sm text-muted-foreground">Machine learning + human insight for maximum ROI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business-Focused Metrics:</p>
                    <p className="text-sm text-muted-foreground">Optimize for revenue and profit, not vanity metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Complete Transparency:</p>
                    <p className="text-sm text-muted-foreground">You own your accounts and see everything we do</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Psychology-Driven Framework Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Psychology-Driven Ad Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach to creating ads that convert browsers into buyers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Customer Psychology Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Emotional triggers identification</li>
                  <li>• Decision journey mapping</li>
                  <li>• Objection analysis</li>
                  <li>• Competitor differentiation</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4">
                  "We don't guess what motivates clicks - we know what drives conversions"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">AI-Powered Campaign Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Smart audience targeting</li>
                  <li>• Creative testing automation</li>
                  <li>• Landing page alignment</li>
                  <li>• Attribution modeling</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4">
                  "Every ad dollar working toward your actual business goals"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Systematic Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Continuous A/B testing</li>
                  <li>• Bid strategy optimization</li>
                  <li>• Cross-platform attribution</li>
                  <li>• ROI-focused reporting</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4">
                  "Turn advertising from expense into predictable investment"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Performance Scaling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Profitable scaling strategies</li>
                  <li>• Budget allocation optimization</li>
                  <li>• Customer lifetime value focus</li>
                  <li>• Predictable growth systems</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4">
                  "Scale what works, eliminate what doesn't"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Paid Media Services & Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent, flat-fee pricing that aligns with your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="card-professional relative">
              <Badge className="absolute -top-3 left-6 bg-primary">Most Popular</Badge>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Paid Media Management
                </CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-3xl font-bold text-primary">$500</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Platform Management:</span>
                    <span className="text-sm">Google Ads, Meta, LinkedIn</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Campaign Setup & Optimization:</span>
                      <span className="text-sm block text-muted-foreground">Search, Display, Shopping, Social campaigns</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">AI-Optimized Ad Copy:</span>
                      <span className="text-sm block text-muted-foreground">Psychology-driven creative with systematic testing</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Landing Page Strategy:</span>
                      <span className="text-sm block text-muted-foreground">Conversion-optimized recommendations and testing</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Conversion Tracking:</span>
                      <span className="text-sm block text-muted-foreground">Complete attribution setup and ROI measurement</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Monthly Strategy Calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Custom Attribution Workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium text-primary">No Percentage Fees - Keep 100% Control</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Perfect For:</span> Businesses spending $2,000-$20,000/month on ads</p>
                  <p><span className="font-medium">Minimum Ad Spend:</span> $1,500/month</p>
                  <p><span className="font-medium">Contract Terms:</span> Month-to-month (no lock-ins)</p>
                </div>

                <Button 
                  className="w-full btn-secondary"
                  onClick={() => {
                    setIsDialogOpen(true);
                    reset({ selectedService: "Paid Media Management - $500/month" });
                  }}
                >
                  Start Managing My Ads
                </Button>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Eye className="w-6 h-6 text-secondary" />
                  Paid Media Audit & Strategy
                </CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-3xl font-bold text-secondary">$300</span>
                  <span className="text-muted-foreground"> one-time</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Complete ad account audit (Google, Meta, LinkedIn)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Customer psychology and targeting analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Creative and copy performance review</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Landing page and conversion funnel assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Competitor advertising research and gap analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>90-day optimization roadmap with specific recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Budget allocation recommendations across platforms</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Timeline:</span> 1 week</p>
                  <p><span className="font-medium">Perfect For:</span> Evaluating current ad performance</p>
                  <p><span className="font-medium">Deliverable:</span> Comprehensive audit report + strategy</p>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setIsDialogOpen(true);
                    reset({ selectedService: "Paid Media Audit & Strategy - $300" });
                  }}
                >
                  Audit My Ad Performance
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master-level optimization across all major advertising platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle>Google Ads Mastery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Search Campaigns</h4>
                  <p className="text-sm text-muted-foreground">Capture high-intent traffic when customers are ready to buy</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Display & Video</h4>
                  <p className="text-sm text-muted-foreground">Stay top-of-mind throughout the customer decision process</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Shopping Campaigns</h4>
                  <p className="text-sm text-muted-foreground">E-commerce optimization with product-specific targeting</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Performance Max</h4>
                  <p className="text-sm text-muted-foreground">AI-powered campaigns across all Google properties</p>
                </div>
                <p className="text-xs font-medium text-primary mt-4">
                  "Be found exactly when your customers are searching for solutions"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Meta Advertising</CardTitle>
                <CardDescription>Facebook & Instagram</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Interest & Behavioral Targeting</h4>
                  <p className="text-sm text-muted-foreground">Reach customers based on psychology profiles</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Lookalike Audiences</h4>
                  <p className="text-sm text-muted-foreground">Find more customers similar to your best clients</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Retargeting Campaigns</h4>
                  <p className="text-sm text-muted-foreground">Re-engage visitors with personalized messaging</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Video & Creative Testing</h4>
                  <p className="text-sm text-muted-foreground">Systematic approach to high-converting creative</p>
                </div>
                <p className="text-xs font-medium text-primary mt-4">
                  "Interrupt customers with messages they actually want to see"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-700/10 rounded-lg flex items-center justify-center mb-4">
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </div>
                <CardTitle>LinkedIn Advertising</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">B2B Lead Generation</h4>
                  <p className="text-sm text-muted-foreground">Reach decision-makers with professional targeting</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Account-Based Marketing</h4>
                  <p className="text-sm text-muted-foreground">Target specific companies and stakeholders</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Thought Leadership Content</h4>
                  <p className="text-sm text-muted-foreground">Build authority while generating leads</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Sales Funnel Integration</h4>
                  <p className="text-sm text-muted-foreground">Connect LinkedIn leads with sales processes</p>
                </div>
                <p className="text-xs font-medium text-primary mt-4">
                  "Reach B2B buyers where they make professional decisions"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories & ROI Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses using our psychology-driven approach
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">Real Estate</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">400%</div>
                    <div className="text-xs text-muted-foreground">ROAS</div>
                  </div>
                </div>
                <CardTitle className="text-lg">Real Estate Investment Case Study</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Challenge:</span>
                    <span>Saturated "we buy houses" market</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ad Spend:</span>
                    <span>$5,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Management Fee:</span>
                    <span className="text-primary">$500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Results:</span>
                    <span>150+ leads/month at $33 CPL</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-primary">Key Win:</div>
                  <p>Psychology-driven ad copy that addressed seller objections upfront</p>
                  <div className="font-medium text-secondary mt-2">Savings:</div>
                  <p>$500/month vs typical 20% fee ($1,000+)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">E-commerce</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">250%</div>
                    <div className="text-xs text-muted-foreground">ROAS Increase</div>
                  </div>
                </div>
                <CardTitle className="text-lg">E-commerce Scaling Case Study</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Challenge:</span>
                    <span>Luxury product, long consideration</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Strategy:</span>
                    <span>Multi-platform retargeting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ROAS Improvement:</span>
                    <span className="text-primary">250%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AOV Increase:</span>
                    <span>40%</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-primary">Key Win:</div>
                  <p>Custom attribution showing true customer journey impact</p>
                  <div className="font-medium text-secondary mt-2">Scale:</div>
                  <p>Expanded from $3K to $15K monthly ad spend profitably</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">B2B SaaS</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">35%</div>
                    <div className="text-xs text-muted-foreground">CPL Reduction</div>
                  </div>
                </div>
                <CardTitle className="text-lg">B2B SaaS Case Study</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Challenge:</span>
                    <span>Complex software sales cycle</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Approach:</span>
                    <span>LinkedIn + Google combined</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CPL Reduction:</span>
                    <span className="text-primary">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Demos:</span>
                    <span>+12 additional</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-primary">Business Impact:</div>
                  <p>$180K+ additional pipeline growth</p>
                  <div className="font-medium text-secondary mt-2">Efficiency:</div>
                  <p>Same results with 60% less ad spend</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Why flat fee instead of percentage of ad spend?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Percentage fees create conflicts of interest - agencies want you to spend more, not optimize better. Our flat fee aligns our success with your ROI, not your budget size.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What's the minimum ad spend to work with you?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                $1,500/month minimum ensures enough data for meaningful optimization. Below that, you're better off with simple campaigns you can manage yourself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you guarantee specific ROAS results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We guarantee systematic implementation of proven optimization methods. ROAS depends on your market, offer, and competition. We optimize for maximum profitability within your market reality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How quickly can you improve underperforming ads?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Basic optimizations show improvement in 1-2 weeks. Systematic improvements compound over 30-90 days as we gather data and optimize. Quick wins first, then systematic scaling.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What happens if we want to stop working together?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You own everything - accounts, audiences, data, creative. We'll provide transition documentation. No contracts or penalties, just professional handoff.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Profitably?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop overpaying for ad management. Get psychology-driven campaigns with transparent pricing.
          </p>
          
          <div className="bg-card p-8 rounded-lg border mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center text-left">
              <div>
                <h3 className="text-lg font-bold mb-4">Get Your Ad Account Audit</h3>
                {adAuditSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="M22 4 12 14.01l-3-3"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Thanks! Audit request received.</h3>
                    <p className="text-muted-foreground">I'll analyze your ad performance and send you a detailed audit within 48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitAdAudit(onSubmitAdAudit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="monthlyAdSpend">Monthly Ad Spend *</Label>
                      <Select onValueChange={(value) => setValueAdAudit('monthlyAdSpend', value, { shouldValidate: true })}>
                        <SelectTrigger className={adAuditErrors.monthlyAdSpend ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select monthly ad spend" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-plus">$25,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      {adAuditErrors.monthlyAdSpend && <p className="text-sm text-destructive">{adAuditErrors.monthlyAdSpend.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="adPlatform">Primary Ad Platform *</Label>
                      <Select onValueChange={(value) => setValueAdAudit('adPlatform', value, { shouldValidate: true })}>
                        <SelectTrigger className={adAuditErrors.adPlatform ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select primary platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google-ads">Google Ads</SelectItem>
                          <SelectItem value="facebook">Facebook/Meta</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="multiple">Multiple Platforms</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {adAuditErrors.adPlatform && <p className="text-sm text-destructive">{adAuditErrors.adPlatform.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currentChallenges">Current Ad Challenges *</Label>
                      <Textarea 
                        id="currentChallenges"
                        placeholder="Describe your biggest paid media challenges..."
                        className={`min-h-[80px] ${adAuditErrors.currentChallenges ? 'border-destructive' : ''}`}
                        {...registerAdAudit('currentChallenges')}
                      />
                      {adAuditErrors.currentChallenges && <p className="text-sm text-destructive">{adAuditErrors.currentChallenges.message}</p>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select onValueChange={(value) => setValueAdAudit('businessType', value, { shouldValidate: true })}>
                          <SelectTrigger className={adAuditErrors.businessType ? 'border-destructive' : ''}>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="saas">SaaS / Tech</SelectItem>
                            <SelectItem value="professional-services">Professional Services</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="restaurant">Restaurant & Hospitality</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {adAuditErrors.businessType && <p className="text-sm text-destructive">{adAuditErrors.businessType.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website URL *</Label>
                        <Input 
                          id="website" 
                          placeholder="https://" 
                          {...registerAdAudit('website')}
                          className={adAuditErrors.website ? 'border-destructive' : ''}
                        />
                        {adAuditErrors.website && <p className="text-sm text-destructive">{adAuditErrors.website.message}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          {...registerAdAudit('email')}
                          className={adAuditErrors.email ? 'border-destructive' : ''}
                        />
                        {adAuditErrors.email && <p className="text-sm text-destructive">{adAuditErrors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          placeholder="(555) 123-4567" 
                          {...registerAdAudit('phone')}
                          className={adAuditErrors.phone ? 'border-destructive' : ''}
                        />
                        {adAuditErrors.phone && <p className="text-sm text-destructive">{adAuditErrors.phone.message}</p>}
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-hero" 
                      disabled={isAdAuditSubmitting}
                    >
                      <Target className="w-4 h-4 mr-2" />
                      {isAdAuditSubmitting ? 'Submitting...' : 'Audit My Ad Performance'}
                    </Button>
                  </form>
                )}
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>See exactly where your ad budget is being wasted</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>No obligation - just actionable insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Managing $200K+ monthly ad spend for 25+ businesses</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-medium">Save money on management fees, make more from better optimization</span>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Join businesses that chose results over retainers • No contracts • Transparent pricing
          </p>
        </div>
      </section>

        <Footer />
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Get Started with Paid Advertising</DialogTitle>
            <DialogDescription>
              Let's discuss your advertising goals and get you started with the perfect paid media strategy for your business.
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
              <p className="text-muted-foreground">I'll analyze your advertising needs and send you a detailed strategy within 48 hours.</p>
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
                  <Input id="phone" type="tel" placeholder="(555) 555-0123" {...register('phone')} className={errors.phone ? 'border-destructive' : ''} />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Business Type *</Label>
                  <Select onValueChange={(value) => setValue('businessType', value, { shouldValidate: true })}>
                    <SelectTrigger className={errors.businessType ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="saas">SaaS / Tech</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="home-services">Home Services</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="restaurant">Restaurant & Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
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
                <Label htmlFor="marketingChallenge">Tell us about your advertising challenges *</Label>
                <Textarea 
                  id="marketingChallenge" 
                  placeholder="What's your current monthly ad spend? What advertising challenges are you facing? What results are you looking to achieve?" 
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

export default PaidAdvertising;