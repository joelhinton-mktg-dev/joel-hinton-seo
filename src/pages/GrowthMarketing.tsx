import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProfessionalServiceSchema from "@/components/schema/ProfessionalServiceSchema";
import { CheckCircle, TrendingUp, Brain, Target, Zap, Users, BarChart, MessageSquare, ArrowRight, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import { useContactDialog } from "@/hooks/useContactDialog";
import { businessTypes } from "@/lib/businessTypes";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("Growth Marketing Strategy Consultation")
});

const leadCaptureFormSchema = z.object({
  revenue: z.string().min(1, "Please select your revenue range"),
  channel: z.string().min(1, "Please select your primary channel"),
  challenge: z.string().min(10, "Please describe your growth challenge (at least 10 characters)"),
  industry: z.string().min(2, "Please enter your industry/business type"),
  website: z.string().url("Please enter a valid website URL"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number")
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type LeadCaptureFormData = z.infer<typeof leadCaptureFormSchema>;

const GrowthMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Growth Marketing Consultation');
  const [isLeadCaptureSubmitting, setIsLeadCaptureSubmitting] = useState(false);
  const [leadCaptureSuccess, setLeadCaptureSuccess] = useState(false);

  // Form handling now managed by ContactDialog

  const {
    register: registerLeadCapture,
    handleSubmit: handleSubmitLeadCapture,
    formState: { errors: leadCaptureErrors },
    reset: resetLeadCapture,
    setValue: setValueLeadCapture
  } = useForm<LeadCaptureFormData>({
    resolver: zodResolver(leadCaptureFormSchema)
  });

  // Form submission now handled by ContactDialog

  const onSubmitLeadCapture = async (data: LeadCaptureFormData) => {
    if (isLeadCaptureSubmitting) return; // Prevent double submission
    setIsLeadCaptureSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Growth Marketing lead capture form submitted:", data);
    }
    setLeadCaptureSuccess(true);
    resetLeadCapture();
    setTimeout(() => {
      setLeadCaptureSuccess(false);
    }, 5000);
    setIsLeadCaptureSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Psychology-Driven Growth Marketing | Systematic Business Scaling | Joel Hinton</title>
        <meta name="description" content="Data-driven growth marketing strategies that convert visitors into customers using psychological triggers and conversion optimization." />
        <meta name="keywords" content="growth marketing, conversion optimization, SaaS marketing, e-commerce growth, psychology-driven marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Psychology-Driven Growth Marketing | Systematic Business Scaling" />
        <meta property="og:description" content="Growth marketing strategies using psychological triggers for systematic business scaling." />
        <meta property="og:type" content="website" />
      </Helmet>
      <ProfessionalServiceSchema 
        serviceName="Growth Marketing"
        serviceDescription="Psychology-driven growth marketing strategies for systematic business scaling"
        serviceUrl="https://joelhintonmarketing.com/growth-marketing"
        price="1000"
        serviceType="Digital Marketing"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      
      {/* Breadcrumb */}
      <PageBreadcrumb 
        items={[
          { label: "Growth Marketing", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <Badge variant="secondary" className="mb-6 text-sm font-medium">
          <Brain className="h-3 w-3 mr-2" />
          Psychology-Driven Growth
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
          Generative Optimization for AI-Driven Growth
        </h1>
        
        <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Stop guessing what works. Use consumer psychology and AI optimization to systematically scale your <Link to="/industries/saas" className="text-primary hover:underline">SaaS business</Link> or <Link to="/industries/ecommerce" className="text-primary hover:underline">e-commerce store</Link> with proven growth systems.
        </p>
        
        <p className="text-lg font-medium text-foreground mb-8 max-w-2xl mx-auto">
          Growth marketing isn't about more tactics. It's about understanding how people actually make decisions.
        </p>
        
        <Button 
          size="lg" 
          className="btn-hero text-lg px-8 py-6 mb-12"
          onClick={() => selectService('Growth Marketing Strategy')}
        >
          <Target className="h-5 w-5 mr-2" />
          Get Your Growth Strategy Audit
        </Button>
      </section>

      {/* Growth Marketing vs Marketing */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Growth Marketing vs Traditional Marketing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most businesses confuse activity with progress. Here's what actually drives sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Traditional Marketing */}
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Traditional Marketing Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Spray and pray advertising across multiple channels</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Generic messaging that appeals to everyone</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Campaign-based thinking with start/stop cycles</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Measuring vanity metrics instead of business impact</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground italic">"We tried Facebook ads and Google ads but nothing worked"</span>
                </div>
              </CardContent>
            </Card>

            {/* Our Growth Marketing Philosophy */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Our Growth Marketing Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Psychology-First:</span> <span className="text-muted-foreground">Understand decision triggers before choosing tactics</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">System-Driven:</span> <span className="text-muted-foreground">Build repeatable processes that compound over time</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Data-Obsessed:</span> <span className="text-muted-foreground">Every decision backed by behavioral data and testing</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Channel-Agnostic:</span> <span className="text-muted-foreground">Find where your customers actually are</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Conversion-Focused:</span> <span className="text-muted-foreground">Optimize the entire customer journey</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Psychology Framework */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Growth Psychology Framework</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to understanding and optimizing customer behavior for sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phase 1 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Customer Psychology Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Deep dive into decision-making process</li>
                  <li>• Identify emotional triggers</li>
                  <li>• Map customer journey</li>
                  <li>• Understand "jobs to be done"</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4 italic">
                  "We don't guess what motivates your customers - we know"
                </p>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Message-Market Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Craft messaging for real pain points</li>
                  <li>• Test value propositions</li>
                  <li>• Develop differentiating positioning</li>
                  <li>• Create educational content</li>
                </ul>
                <p className="text-xs font-medium text-secondary mt-4 italic">
                  "Say what your customers are already thinking"
                </p>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Channel Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Identify high-ROI channels</li>
                  <li>• Build systematic testing</li>
                  <li>• Create channel-specific content</li>
                  <li>• Develop attribution models</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4 italic">
                  "Be where your customers are, when they're ready"
                </p>
              </CardContent>
            </Card>

            {/* Phase 4 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Conversion System Design</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Optimize using psychology</li>
                  <li>• Build nurture sequences</li>
                  <li>• Design onboarding systems</li>
                  <li>• Create referral systems</li>
                </ul>
                <p className="text-xs font-medium text-secondary mt-4 italic">
                  "Turn buyers into lifetime advocates"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Marketing Services */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Growth Marketing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systematic growth solutions based on proven psychology and data-driven optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Growth Strategy Audit */}
            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2">Perfect for businesses with traffic but poor conversion</Badge>
                <CardTitle className="text-2xl">Growth Strategy & Psychology Audit</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">$750 <span className="text-sm font-normal text-muted-foreground">one-time</span></CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete customer journey analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Conversion psychology assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Channel performance audit and recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Message-market fit evaluation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Competitive positioning analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Growth opportunity identification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">90-day growth roadmap with priorities</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium">2 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Deliverable:</span>
                    <span className="font-medium">Strategy document + roadmap</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => {
                    setIsDialogOpen(true);
                    reset({ selectedService: "Growth Strategy & Psychology Audit - $750" });
                  }}
                >
                  <Target className="h-4 w-4 mr-2" />
                  Get Growth Audit
                </Button>
              </CardContent>
            </Card>

            {/* Full Growth System */}
            <Card className="relative border-primary shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Perfect for businesses ready to systematically scale</Badge>
                <CardTitle className="text-2xl">Full Growth Marketing System</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">$2,500 <span className="text-sm font-normal text-muted-foreground">one-time</span></CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">Everything in Growth Strategy Audit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Landing page optimization using psychology</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Email marketing automation setup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-channel campaign development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Customer segmentation & personalization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Attribution tracking & analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">A/B testing framework</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">6-month performance tracking</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium">4-6 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Ideal for:</span>
                    <span className="font-medium">SaaS, e-commerce, scaling services</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full btn-hero"
                  onClick={() => {
                    setIsDialogOpen(true);
                    reset({ selectedService: "Full Growth Marketing System - $2,500" });
                  }}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Scale My Business
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories & Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from psychology-driven growth marketing systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* SaaS Case Study */}
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle className="text-lg">SaaS Growth Case Study</CardTitle>
                <CardDescription>B2B Software Company</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">4x</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate Improvement</div>
                    <div className="text-xs mt-1">2% → 8% trial-to-paid conversion</div>
                  </div>
                  
                  <div className="text-sm text-left space-y-2">
                    <p><span className="font-medium">Challenge:</span> Low trial-to-paid conversion</p>
                    <p><span className="font-medium">Solution:</span> Psychology-driven onboarding + behavioral triggers</p>
                    <p><span className="font-medium">Timeline:</span> 90 days to full results</p>
                  </div>
                  
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-sm font-medium">Bonus Result:</div>
                    <div className="text-sm text-muted-foreground">35% reduction in churn rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* E-commerce Case Study */}
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <CardTitle className="text-lg">E-commerce Scaling</CardTitle>
                <CardDescription>Online Retailer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">45%</div>
                    <div className="text-sm text-muted-foreground">Average Order Value Increase</div>
                    <div className="text-xs mt-1">+ 23% improvement in LTV</div>
                  </div>
                  
                  <div className="text-sm text-left space-y-2">
                    <p><span className="font-medium">Challenge:</span> High traffic, low AOV</p>
                    <p><span className="font-medium">Solution:</span> Segmentation + personalized recommendations</p>
                    <p><span className="font-medium">Impact:</span> $180k additional annual revenue</p>
                  </div>
                  
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <div className="text-sm font-medium">Key Insight:</div>
                    <div className="text-sm text-muted-foreground">Customer psychology &gt; generic upsells</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Local Service Case Study */}
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle className="text-lg">Local Service Scaling</CardTitle>
                <CardDescription>Home Services Company</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">150%</div>
                    <div className="text-sm text-muted-foreground">Qualified Lead Increase</div>
                    <div className="text-xs mt-1">Systematic growth system built</div>
                  </div>
                  
                  <div className="text-sm text-left space-y-2">
                    <p><span className="font-medium">Challenge:</span> Relying entirely on referrals</p>
                    <p><span className="font-medium">Solution:</span> Multi-channel lead gen + nurture</p>
                    <p><span className="font-medium">Outcome:</span> Expanded to 3 new markets</p>
                  </div>
                  
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-sm font-medium">Timeline:</div>
                    <div className="text-sm text-muted-foreground">6 months to market expansion</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Psychology Principles */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Growth Psychology Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The behavioral science foundations that drive all our growth strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Decision Science Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Decision Science Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="font-medium">Loss Aversion</div>
                  <div className="text-sm text-muted-foreground">Frame offers to emphasize what customers lose by not acting</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Social Proof</div>
                  <div className="text-sm text-muted-foreground">Use testimonials and case studies to reduce purchase anxiety</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Scarcity & Urgency</div>
                  <div className="text-sm text-muted-foreground">Create legitimate time pressure to accelerate decisions</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Authority Positioning</div>
                  <div className="text-sm text-muted-foreground">Establish expertise to reduce customer risk perception</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Reciprocity</div>
                  <div className="text-sm text-muted-foreground">Provide value upfront to create obligation and trust</div>
                </div>
              </CardContent>
            </Card>

            {/* Behavioral Trigger Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-secondary" />
                  Behavioral Trigger Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="font-medium">Timing Optimization</div>
                  <div className="text-sm text-muted-foreground">Reach customers when they're most likely to convert</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Channel Psychology</div>
                  <div className="text-sm text-muted-foreground">Match message tone and format to platform expectations</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Personalization</div>
                  <div className="text-sm text-muted-foreground">Segment customers based on behavior, not just demographics</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Journey Optimization</div>
                  <div className="text-sm text-muted-foreground">Remove friction and add motivation at each decision point</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                How is growth marketing different from digital marketing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Digital marketing focuses on channels and tactics. Growth marketing focuses on systematic business scaling using psychology and data. We optimize entire customer journeys, not just individual campaigns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What size business benefits most from growth marketing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Businesses doing $100K+ annually who have product-market fit but need systematic customer acquisition. Too early and you're optimizing the wrong things. Too late and you've already built inefficient systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How long does it take to see growth results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Quick wins in 30-45 days (conversion optimization, messaging improvements). Systematic growth systems show compounding results over 90-180 days. We focus on sustainable growth, not temporary spikes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you guarantee specific growth results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We guarantee systematic implementation of proven growth psychology principles. Results depend on market conditions, product-market fit, and execution quality. We optimize for sustainable growth, not unsustainable promises.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Scale Systematically?</h2>
              <p className="text-lg text-muted-foreground mb-2">
                See exactly where your growth is being limited
              </p>
              <p className="text-sm text-muted-foreground">
                Used by 50+ businesses to systematically scale revenue
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lead Capture Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Get Your Growth Strategy Audit</CardTitle>
                  <CardDescription>No obligation. See exactly what's holding your business back.</CardDescription>
                </CardHeader>
                <CardContent>
                  {leadCaptureSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4 12 14.01l-3-3"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">Thanks! Audit request received.</h3>
                      <p className="text-muted-foreground">I'll analyze your growth potential and send you a detailed growth strategy audit within 48 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitLeadCapture(onSubmitLeadCapture)} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="revenue">Current Monthly Revenue *</Label>
                        <Select onValueChange={(value) => setValueLeadCapture('revenue', value, { shouldValidate: true })}>
                          <SelectTrigger className={leadCaptureErrors.revenue ? 'border-destructive' : ''}>
                            <SelectValue placeholder="Select revenue range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10k</SelectItem>
                            <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                            <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                            <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                            <SelectItem value="500k-plus">$500k+</SelectItem>
                          </SelectContent>
                        </Select>
                        {leadCaptureErrors.revenue && <p className="text-sm text-destructive">{leadCaptureErrors.revenue.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="channel">Primary Customer Acquisition Channel *</Label>
                        <Select onValueChange={(value) => setValueLeadCapture('channel', value, { shouldValidate: true })}>
                          <SelectTrigger className={leadCaptureErrors.channel ? 'border-destructive' : ''}>
                            <SelectValue placeholder="Select primary channel" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="referrals">Referrals</SelectItem>
                            <SelectItem value="organic-search">Organic Search</SelectItem>
                            <SelectItem value="paid-ads">Paid Advertising</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="email">Email Marketing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {leadCaptureErrors.channel && <p className="text-sm text-destructive">{leadCaptureErrors.channel.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="challenge">Biggest Growth Challenge Right Now *</Label>
                        <Textarea 
                          id="challenge"
                          placeholder="Describe your main growth obstacle..."
                          className={`min-h-[80px] ${leadCaptureErrors.challenge ? 'border-destructive' : ''}`}
                          {...registerLeadCapture('challenge')}
                        />
                        {leadCaptureErrors.challenge && <p className="text-sm text-destructive">{leadCaptureErrors.challenge.message}</p>}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry/Business Type *</Label>
                          <Input 
                            id="industry" 
                            placeholder="e.g., SaaS, E-commerce" 
                            {...registerLeadCapture('industry')}
                            className={leadCaptureErrors.industry ? 'border-destructive' : ''}
                          />
                          {leadCaptureErrors.industry && <p className="text-sm text-destructive">{leadCaptureErrors.industry.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website URL *</Label>
                          <Input 
                            id="website" 
                            placeholder="https://" 
                            {...registerLeadCapture('website')}
                            className={leadCaptureErrors.website ? 'border-destructive' : ''}
                          />
                          {leadCaptureErrors.website && <p className="text-sm text-destructive">{leadCaptureErrors.website.message}</p>}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your@email.com" 
                            {...registerLeadCapture('email')}
                            className={leadCaptureErrors.email ? 'border-destructive' : ''}
                          />
                          {leadCaptureErrors.email && <p className="text-sm text-destructive">{leadCaptureErrors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone" 
                            placeholder="(555) 123-4567" 
                            {...registerLeadCapture('phone')}
                            className={leadCaptureErrors.phone ? 'border-destructive' : ''}
                          />
                          {leadCaptureErrors.phone && <p className="text-sm text-destructive">{leadCaptureErrors.phone.message}</p>}
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full btn-hero" 
                        disabled={isLeadCaptureSubmitting}
                      >
                        <Target className="h-4 w-4 mr-2" />
                        {isLeadCaptureSubmitting ? 'Submitting...' : 'Audit My Growth Potential'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
              
              {/* Benefits & Social Proof */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What You'll Get</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Complete customer journey analysis</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Psychology-based conversion opportunities</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Channel optimization recommendations</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">90-day growth roadmap with priorities</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Businesses scaled systematically
                      </div>
                      <div className="text-xs text-muted-foreground italic">
                        &quot;Results over retainers&quot;
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Download: Psychology of High-Converting Landing Pages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

        <ContactSection />
        <Footer />
      </div>

      {/* OLD Contact Form Dialog - DISABLED */}
      {/* <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Get Started with Growth Marketing</DialogTitle>
            <DialogDescription>
              Let's discuss your growth goals and get you started with the perfect growth marketing strategy for your business.
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
              <p className="text-muted-foreground">I'll analyze your growth potential and send you a detailed growth marketing strategy within 48 hours.</p>
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
                      <SelectItem value="saas">SaaS / Tech</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
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
                <Label htmlFor="marketingChallenge">Tell us about your growth challenges *</Label>
                <Textarea 
                  id="marketingChallenge" 
                  placeholder="What's your current monthly revenue? What growth challenges are you facing? What's your biggest bottleneck to scaling?" 
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
      </Dialog> */}

      {/* NEW ContactDialog Integration */}
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Started with Growth Marketing"
        description="Let's discuss your growth goals and get you started with the perfect growth marketing strategy for your business."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default GrowthMarketing;