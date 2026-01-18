'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Sparkles, Users, Cog, ArrowRight, ShoppingCart } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";
import { trackFormSubmission, trackConversion, trackLead } from '@/lib/analytics';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("Custom Strategy Session")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const services = [
  {
    icon: Search,
    title: "SEO Services",
    subtitle: "Technical SEO + Content Strategy",
    description: "Comprehensive SEO that combines technical excellence with content strategy. Site audits, keyword research, and ongoing optimization for sustainable organic growth.",
    features: ["Technical SEO audits", "Keyword research", "Content optimization", "Backlink strategy"],
    price: "$500 - $1,000",
    href: "/seo-services"
  },
  {
    icon: MapPin,
    title: "Local SEO",
    subtitle: "Dominate Your Local Market",
    description: "Get found by customers in Volusia & Flagler Counties. Google Business Profile optimization, local citations, and review management for local businesses.",
    features: ["Google Business Profile", "Local citations", "Review management", "Map pack rankings"],
    price: "$400 - $800",
    href: "/local-seo"
  },
  {
    icon: Sparkles,
    title: "GEO Optimization",
    subtitle: "AI Search Ready",
    description: "Prepare for the future of search. Optimize your content for AI assistants, ChatGPT, and generative search engines that are changing how people find businesses.",
    features: ["AI search optimization", "Answer Engine Optimization", "Structured data", "Entity optimization"],
    price: "$600 - $1,200",
    href: "/geo-optimization"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO",
    subtitle: "Grow Your Online Store",
    description: "Drive organic traffic and sales for Shopify, WooCommerce, and marketplace stores. Product optimization, technical SEO, and conversion strategies.",
    features: ["Product page optimization", "Technical e-commerce SEO", "Marketplace optimization", "Conversion optimization"],
    price: "$1,500 - $3,000",
    href: "/ecommerce-seo"
  },
  {
    icon: Users,
    title: "Local Lead Generation",
    subtitle: "Ads That Deliver Leads",
    description: "Google Local Service Ads, Search Ads, and Facebook campaigns for home services and professional services. Pay for leads, not clicks.",
    features: ["Google Local Service Ads", "Search campaigns", "Facebook lead ads", "Call tracking"],
    price: "$500/month",
    href: "/local-lead-generation"
  },
  {
    icon: Cog,
    title: "Custom Tools & Automation",
    subtitle: "Marketing Technology Built for You",
    description: "Custom SEO tools, reporting dashboards, lead generation systems, and workflow automation designed specifically for your business needs.",
    features: ["SEO automation tools", "Custom dashboards", "Lead systems", "Workflow automation"],
    price: "Quote-based",
    href: "/custom-tools-automation"
  }
];

const ServicesSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "Custom Strategy Session" }
  });

  const onSubmitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Services contact form submitted:", data);
    }
    setSubmitSuccess(true);
    reset();

    trackFormSubmission(
      'services_form',
      window.location.pathname,
      data.businessType,
      'Custom Strategy Session'
    );

    trackConversion('strategy_session', 1, 'USD');

    trackLead(
      window.location.pathname,
      'strategy_session',
      data.businessType
    );

    setTimeout(() => {
      setSubmitSuccess(false);
      setIsDialogOpen(false);
    }, 2000);
    setIsSubmitting(false);
  };

  return (
    <>
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Psychology-Driven </span>
            <span className="gradient-text">Marketing Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No retainers. No long-term contracts. Just results-driven marketing that understands consumer psychology and leverages AI optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-professional hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-secondary">{service.price}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary mb-3">
                    {service.subtitle}
                  </CardDescription>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all"
                    asChild
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="cta"
            size="lg"
            className="px-8 py-4"
            onClick={() => setIsDialogOpen(true)}
          >
            Get Custom Strategy Session
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>

    <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Schedule Your Custom Strategy Session</DialogTitle>
          <DialogDescription>
            Let's discuss your business goals and create a personalized marketing strategy that drives real results.
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
            <p className="text-muted-foreground">I'll review your information and reach out within 24 hours to schedule your strategy session.</p>
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
              <Input id="selectedService" value="Custom Strategy Session" readOnly {...register('selectedService')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="marketingChallenge">Tell us about your marketing challenge *</Label>
              <Textarea
                id="marketingChallenge"
                placeholder="What are your current marketing goals? What challenges are you facing? What results are you looking to achieve?"
                className={`min-h-[120px] ${errors.marketingChallenge ? 'border-destructive' : ''}`}
                {...register('marketingChallenge')}
              />
              {errors.marketingChallenge && <p className="text-sm text-destructive">{errors.marketingChallenge.message}</p>}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" variant="cta" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Schedule Strategy Session'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
    </>
  );
};

export default ServicesSection;
