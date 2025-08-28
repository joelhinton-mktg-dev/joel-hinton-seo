import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Check, Calculator, Zap, Shield, Target, TrendingUp } from "lucide-react";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  businessType: z.string().min(1, 'Please select your business type'),
  marketingChallenge: z.string().min(10, 'Please tell us about your marketing challenge (at least 10 characters)'),
  selectedService: z.string().min(1)
});

type PricingContactFormData = z.infer<typeof contactFormSchema>;

const Pricing = () => {
  const seoServices = [
    {
      name: "Basic SEO Plan",
      price: "$500",
      type: "One-time",
      description: "Perfect for small businesses starting their SEO journey",
      features: [
        "Complete technical SEO audit and fixes",
        "On-page optimization for up to 10 pages", 
        "Keyword research and competitive analysis",
        "Google Business Profile optimization",
        "Schema markup implementation",
        "30-day performance report"
      ],
      timeline: "2-3 weeks",
      bestFor: "Local businesses, service providers, new websites",
      popular: false
    },
    {
      name: "Growth SEO Plan", 
      price: "$1,000",
      type: "One-time",
      description: "Perfect for businesses ready to scale organically",
      features: [
        "Everything in Basic SEO Plan",
        "Programmatic SEO framework (auto-generate scalable pages)",
        "Local SEO optimization for up to 3 locations",
        "Advanced AEO & GEO targeting for AI search",
        "Content strategy and creation templates", 
        "90-day performance tracking and optimization"
      ],
      timeline: "4-6 weeks",
      bestFor: "Growing businesses, multi-location companies, e-commerce",
      popular: true
    }
  ];

  const growthServices = [
    {
      name: "Growth Strategy Audit",
      price: "$750", 
      type: "One-time",
      description: "Perfect for businesses with traffic but poor conversions",
      features: [
        "Complete customer journey analysis",
        "Conversion psychology assessment",
        "Channel performance audit and recommendations",
        "Message-market fit evaluation", 
        "Competitive positioning analysis",
        "90-day growth roadmap with priorities"
      ],
      timeline: "2 weeks", 
      bestFor: "SaaS, e-commerce, service businesses with existing traffic",
      popular: false
    },
    {
      name: "Full Growth Marketing System",
      price: "$2,500",
      type: "One-time", 
      description: "Perfect for businesses ready to systematically scale",
      features: [
        "Everything in Growth Strategy Audit",
        "Landing page optimization using psychology principles",
        "Email marketing automation setup and sequences",
        "Multi-channel campaign development",
        "Attribution tracking and analytics implementation",
        "6-month performance tracking and optimization"
      ],
      timeline: "4-6 weeks",
      bestFor: "Scaling businesses ready for systematic growth",
      popular: false
    }
  ];

  const paidServices = [
    {
      name: "Paid Media Audit",
      price: "$300",
      type: "One-time",
      description: "Perfect for evaluating current ad performance", 
      features: [
        "Complete ad account audit (Google, Meta, LinkedIn)",
        "Customer psychology and targeting analysis",
        "Creative and copy performance review",
        "Landing page and conversion assessment",
        "90-day optimization roadmap"
      ],
      timeline: "1 week",
      bestFor: "Businesses currently running ads with poor ROI",
      popular: false
    },
    {
      name: "Paid Media Management", 
      price: "$500",
      type: "/month",
      description: "Perfect for businesses ready for professional ad management",
      features: [
        "Google Ads, Meta, and LinkedIn campaign management",
        "AI-optimized ad copy and creative testing", 
        "Landing page strategy and conversion tracking",
        "Custom attribution workflows and reporting",
        "Monthly strategy calls and optimization"
      ],
      timeline: "Month-to-month",
      bestFor: "Businesses spending $2K-$20K/month on ads", 
      popular: true,
      note: "Minimum Ad Spend: $1,500/month"
    }
  ];

  const packages = [
    {
      name: "The Local Dominator",
      price: "$800",
      services: ["Basic SEO Plan ($500)", "Paid Media Audit ($300)"],
      description: "Perfect for local businesses starting digital marketing",
      benefit: "Get found organically AND optimize your advertising"
    },
    {
      name: "The Growth Accelerator", 
      price: "$1,750",
      services: ["Growth SEO Plan ($1,000)", "Growth Strategy Audit ($750)"],
      description: "Perfect for businesses ready to scale systematically",
      benefit: "Organic visibility + conversion optimization",
      popular: true
    },
    {
      name: "The Complete System",
      price: "$3,000 first month, then $500/month", 
      services: ["Growth SEO Plan ($1,000)", "Full Growth Marketing System ($2,500)", "Paid Media Management ($500/month)"],
      description: "Perfect for serious businesses ready for comprehensive growth",
      benefit: "Everything you need to dominate your market"
    }
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<PricingContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: '' }
  });

  const openDialogForService = (serviceName: string) => {
    setSelectedService(serviceName);
    setValue('selectedService', serviceName, { shouldValidate: true, shouldDirty: true });
    setIsDialogOpen(true);
  };

  const onSubmitForm = async (data: PricingContactFormData) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    console.log('Pricing contact submitted:', data);
    setSubmitSuccess(true);
    reset({ selectedService });
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsDialogOpen(false);
    }, 2000);
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Digital Marketing Agency</title>
        <meta name="description" content="Transparent pricing for real results. Choose what you need, pay what it's worth, own what you build." />
      </Helmet>
      <Navigation />
      
      {/* Breadcrumb */}
      <PageBreadcrumb 
        items={[
          { label: "Pricing", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <nav className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span>/</span>
            <span className="text-foreground">Pricing</span>
          </nav>
          
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            No Retainers. No Fluff. Just Plans That Work.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transparent pricing for real results. Choose what you need, pay what it's worth, own what you build.
          </p>
          
          <p className="text-lg text-foreground mb-8">
            We believe marketing pricing should be simple and transparent. Whether you're just starting out or ready to scale, 
            our plans give you exactly what you need — without bloated retainers or hidden costs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              No Long-Term Contracts
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              No Percentage Fees
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              No Hidden Costs
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Our Pricing is Different */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Our Pricing is Different</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl text-destructive">The Agency Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">$3,000/month retainers for basic keyword research and two blog posts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">20% of your ad spend just to click buttons in Google Ads</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">6-month minimum contracts with vague "ongoing optimization"</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">You never own what you pay for - everything disappears when you leave</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Transparent Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Fixed Pricing</p>
                    <p className="text-muted-foreground text-sm">Know exactly what you're paying and what you get</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Own Everything</p>
                    <p className="text-muted-foreground text-sm">You keep all accounts, data, content, and systems we build</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">No Minimums</p>
                    <p className="text-muted-foreground text-sm">Month-to-month on ongoing services, one-time for projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Value-Based</p>
                    <p className="text-muted-foreground text-sm">Pay for results and systems, not time and retainers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
              "If you've been told marketing means paying for ongoing mystery work, you've been sold a retainer, not results."
            </p>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">SEO Services</h2>
          <p className="text-center text-muted-foreground mb-12">One-time investments that compound over time</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className={`card-professional relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <p><strong>Timeline:</strong> {service.timeline}</p>
                    <p><strong>Best for:</strong> {service.bestFor}</p>
                  </div>
                  
                  <Button variant={service.popular ? "hero" : "outline"} className="w-full" onClick={() => openDialogForService(service.name)}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Marketing Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Growth Marketing Services</h2>
          <p className="text-center text-muted-foreground mb-12">Systematic scaling based on psychology and data</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {growthServices.map((service, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-secondary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <p><strong>Timeline:</strong> {service.timeline}</p>
                    <p><strong>Best for:</strong> {service.bestFor}</p>
                  </div>
                  
                  <Button variant="cta" className="w-full" onClick={() => openDialogForService(service.name)}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Media Services */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Paid Advertising Services</h2>
          <p className="text-center text-muted-foreground mb-12">AI-optimized campaigns with transparent, flat-fee pricing</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {paidServices.map((service, index) => (
              <Card key={index} className={`card-professional relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <p><strong>Timeline:</strong> {service.timeline}</p>
                    <p><strong>Best for:</strong> {service.bestFor}</p>
                    {service.note && <p><strong>Note:</strong> {service.note}</p>}
                  </div>
                  
                  <Button variant={service.popular ? "hero" : "outline"} className="w-full" onClick={() => openDialogForService(service.name)}>
  Get Started
</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Package Combinations */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Popular Package Combinations</h2>
          <p className="text-center text-muted-foreground mb-12">Save money with strategic service bundles</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`card-professional relative ${pkg.popular ? 'ring-2 ring-secondary' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Best Value
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {pkg.services.map((service, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">
                        • {service}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-primary mb-6">{pkg.benefit}</p>
                  <Button variant={pkg.popular ? "cta" : "outline"} className="w-full" onClick={() => openDialogForService(pkg.name)}>
  Choose Package
</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Calculator className="w-8 h-8 inline-block mr-3" />
            ROI Calculator
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl text-destructive">Traditional Agency Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Website:</span>
                    <span className="font-medium">$10,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SEO Retainer:</span>
                    <span className="font-medium">$36,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paid Media (20% of $5K/month):</span>
                    <span className="font-medium">$12,000/year</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Year 1:</span>
                    <span className="text-destructive">$58,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Growth SEO Plan:</span>
                    <span className="font-medium">$1,000 (one-time)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Growth Marketing System:</span>
                    <span className="font-medium">$2,500 (one-time)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paid Media Management:</span>
                    <span className="font-medium">$6,000/year</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Year 1:</span>
                    <span className="text-primary">$9,500</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">You Save: $48,500+ in Year 1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plus: You own everything we build (agencies take it when you leave)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Start with an Audit</CardTitle>
                <CardDescription>Not sure what you need? Begin with a comprehensive audit</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  <li>• Low-risk way to see exactly where you're losing money/opportunities</li>
                  <li>• Get specific recommendations for your situation</li>
                </ul>
                <Button variant="outline" className="w-full" onClick={() => openDialogForService("SEO Audit")}>Schedule Audit</Button>
                </CardContent>
            </Card>

            <Card className="card-professional ring-2 ring-primary">
              <CardHeader>
                <CardTitle>Book a Strategy Call</CardTitle>
                <CardDescription>30-minute consultation to discuss your goals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  <li>• Get personalized recommendations for your business</li>
                  <li>• Understand which services will deliver the highest ROI</li>
                </ul>
                <Button variant="hero" className="w-full" onClick={() => openDialogForService("Strategy Call")}>Book Strategy Call</Button>
                </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Choose a Plan</CardTitle>
                <CardDescription>Ready to move forward? Select your service above</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  <li>• All plans include consultation and strategic guidance</li>
                  <li>• Start seeing results in 2-4 weeks depending on service</li>
                </ul>
                <Button variant="cta" className="w-full">View All Services</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <p className="text-lg font-medium text-primary mb-2">Risk Reversal</p>
            <p className="text-muted-foreground">
              Every service includes strategic consultation to ensure you're investing in the right solutions for your business goals.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset({ selectedService }); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Request Your {selectedService ? selectedService : 'Service'} Consultation</DialogTitle>
            <DialogDescription>
              Fill out the form below and I'll follow up within 24 hours with a customized plan.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thanks! Request received.</h3>
              <p className="text-muted-foreground">I'll review your details and reach out shortly.</p>
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
                  <Select onValueChange={(value) => register('businessType').onChange({ target: { value } })}>
                    <SelectTrigger className={errors.businessType ? 'border-destructive' : ''}>
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
                  {errors.businessType && <p className="text-sm text-destructive">{errors.businessType.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="selectedService">Selected Service *</Label>
                <Input id="selectedService" value={selectedService} readOnly {...register('selectedService')} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marketingChallenge">Tell us about your marketing challenge *</Label>
                <Textarea id="marketingChallenge" placeholder="Briefly describe your goals, challenges, and timeframe..." className={`min-h-[120px] ${errors.marketingChallenge ? 'border-destructive' : ''}`} {...register('marketingChallenge')} />
                {errors.marketingChallenge && <p className="text-sm text-destructive">{errors.marketingChallenge.message}</p>}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" variant="hero" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Pricing;