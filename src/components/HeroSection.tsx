import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, TrendingUp, Brain, Zap } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("Free SEO Audit")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "Free SEO Audit" }
  });

  const onSubmitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    console.log("Hero contact form submitted:", data);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 mb-8 card-professional hover-lift transition-all duration-300">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Psychology-Driven Digital Marketing
            </span>
            <TrendingUp className="w-4 h-4 text-secondary" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 fade-in">
            <span className="text-foreground">SEO is </span>
            <span className="gradient-text">Propaganda.</span>
            <br />
            <span className="gradient-text">GEO</span>
            <span className="text-foreground"> is Psychology.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto slide-up" style={{ animationDelay: "100ms" }}>
            AI-powered growth marketing that generates <strong className="text-secondary">200% traffic increases</strong> in 45 days. 
            Serving Daytona Beach, FL and businesses nationwide.
          </p>

          {/* Value Proposition */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto slide-up" style={{ animationDelay: "200ms" }}>
            No retainers. No long-term contracts. Just psychology-driven results that turn search engines into profit engines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-up" style={{ animationDelay: "300ms" }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="px-8 py-4 text-lg group transition-all duration-300 will-change-transform"
              onClick={() => setIsDialogOpen(true)}
            >
              Get Free SEO Audit
              <Zap className="w-5 h-5 ml-2 icon-pop" />
            </Button>
            <Button 
              variant="professional" 
              size="lg" 
              className="px-8 py-4 text-lg group transition-all duration-300 will-change-transform"
              asChild
            >
              <Link to="/results">
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2 icon-shift-right" />
              </Link>
            </Button>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center slide-up" style={{ animationDelay: "350ms" }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">200%</div>
              <p className="text-muted-foreground">Average Traffic Increase</p>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: "450ms" }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100+</div>
              <p className="text-muted-foreground">Leads Per Month Generated</p>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: "550ms" }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">45</div>
              <p className="text-muted-foreground">Days to See Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Form Dialog */}
    <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Request Your Free SEO Audit</DialogTitle>
          <DialogDescription>
            Fill out the form below and I'll provide a comprehensive SEO analysis of your website within 24 hours.
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
            <p className="text-muted-foreground">I'll review your website and send your free SEO audit within 24 hours.</p>
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
              <Input id="selectedService" value="Free SEO Audit" readOnly {...register('selectedService')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="marketingChallenge">Tell us about your marketing challenge *</Label>
              <Textarea 
                id="marketingChallenge" 
                placeholder="What's your website URL? What are your main SEO challenges? What results are you looking for?" 
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
                {isSubmitting ? 'Submitting...' : 'Get My Free SEO Audit'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
    </>
  );
};

export default HeroSection;