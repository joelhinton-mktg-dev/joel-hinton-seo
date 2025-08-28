import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Calendar, Clock, CheckCircle, ArrowRight, Globe, Home, MessageSquare, Zap, Star, User, Building2, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    businessType: z.string().min(1, "Please select your business type"),
    marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
    preferredContact: z.string().min(1, "Please select your preferred contact method")
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Joel Hinton | Free Marketing Consultation | Daytona Beach FL</title>
        <meta name="description" content="Get your free marketing consultation with Joel Hinton. Daytona Beach headquarters with in-person meetings available. Remote consultations for all Florida markets." />
        <meta name="keywords" content="marketing consultation, Daytona Beach marketing consultant, free marketing audit, digital marketing strategy, Florida marketing expert" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Contact Joel Hinton | Free Marketing Consultation | Daytona Beach FL" />
        <meta property="og:description" content="Get your free marketing consultation with Joel Hinton. Daytona Beach headquarters with in-person meetings available." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Joel Hinton | Free Marketing Consultation" />
        <meta name="twitter:description" content="Get your free marketing consultation with Joel Hinton. Daytona Beach headquarters with in-person meetings available." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Joel Hinton Digital Marketing",
            "description": "Contact page for Joel Hinton Digital Marketing consultation services",
            "url": "https://joelhinton.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Joel Hinton Digital Marketing",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL",
                "postalCode": "32114",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.2108",
                "longitude": "-81.0228"
              },
              "telephone": "+1-386-555-0123",
              "email": "joel@joelhintonmarketing.com",
              "openingHours": "Mo-Fr 09:00-17:00",
              "serviceArea": {
                "@type": "State",
                "name": "Florida"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Contact", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Free Marketing Consultation
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Get Your <span className="text-primary">Free Marketing</span> Consultation
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Ready to transform your marketing with psychology-driven strategies? Schedule your complimentary consultation 
                and discover exactly how to outthink your competition and accelerate growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Strategy Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (386) 555-0123
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">24-Hour Response</p>
                </div>
                <div className="p-4">
                  <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">In-Person Available</p>
                </div>
                <div className="p-4">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Remote Consultations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Multiple Ways to <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the communication method that works best for you. I'm here to help accelerate your business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Direct Phone Line</CardTitle>
                  <CardDescription>Immediate response during business hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">(386) 555-0123</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 5 PM EST</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Email Consultation</CardTitle>
                  <CardDescription>Detailed strategy discussions via email</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">joel@joelhintonmarketing.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Calendar Booking</CardTitle>
                  <CardDescription>Schedule at your convenience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Online Scheduling</p>
                    <p className="text-sm text-muted-foreground">Choose your preferred time slot</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Meeting
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <Card className="card-professional max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Home className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Daytona Beach Headquarters</CardTitle>
                </div>
                <CardDescription className="text-lg">In-person consultations available for local businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Office Address</p>
                        <p className="text-muted-foreground">123 Main Street<br />Daytona Beach, FL 32114</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Office Hours</p>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Local Advantage</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        In-person meetings available for Daytona Beach area businesses including:
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Downtown Daytona Beach</li>
                        <li>• Ormond Beach</li>
                        <li>• Port Orange</li>
                        <li>• South Daytona</li>
                        <li>• Holly Hill</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Florida <span className="gradient-text">Service Coverage</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Serving businesses across Florida with specialized local market expertise and nationwide remote consultation capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Home className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Local In-Person Service</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Full in-person consultation and ongoing support available in the Greater Daytona Beach area:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <p>• Daytona Beach</p>
                      <p>• Ormond Beach</p>
                      <p>• Port Orange</p>
                      <p>• South Daytona</p>
                    </div>
                    <div className="space-y-1">
                      <p>• Holly Hill</p>
                      <p>• Deltona</p>
                      <p>• New Smyrna Beach</p>
                      <p>• DeLand</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Florida-Wide Remote Service</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive remote consultation services throughout Florida with deep local market knowledge:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <p>• Orlando</p>
                      <p>• Tampa Bay</p>
                      <p>• Jacksonville</p>
                      <p>• Miami-Dade</p>
                    </div>
                    <div className="space-y-1">
                      <p>• Fort Lauderdale</p>
                      <p>• Gainesville</p>
                      <p>• Tallahassee</p>
                      <p>• All Florida Markets</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Schedule Your Strategy Session
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your free marketing consultation. Tell us about your business and marketing challenges, 
                and I'll show you exactly how to accelerate growth with psychology-driven strategies.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Free Marketing Consultation Request
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a personalized marketing strategy within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700 mb-4">
                      Your consultation request has been submitted successfully.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I'll review your information and get back to you within 24 hours with your personalized marketing strategy recommendations.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                          placeholder="(386) 555-0123"
                          {...register("phone")}
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select onValueChange={(value) => setValue("businessType", value)}>
                          <SelectTrigger className={errors.businessType ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="saas">SaaS / Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="professional-services">Professional Services</SelectItem>
                            <SelectItem value="restaurant">Restaurant & Food</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="automotive">Automotive</SelectItem>
                            <SelectItem value="tourism">Tourism & Hospitality</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="financial">Financial Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.businessType && (
                          <p className="text-sm text-destructive">{errors.businessType.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Preferred Contact Method *</Label>
                      <Select onValueChange={(value) => setValue("preferredContact", value)}>
                        <SelectTrigger className={errors.preferredContact ? "border-destructive" : ""}>
                          <SelectValue placeholder="How would you like to be contacted?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="video">Video Conference</SelectItem>
                          <SelectItem value="in-person">In-Person Meeting (Daytona Beach area)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.preferredContact && (
                        <p className="text-sm text-destructive">{errors.preferredContact.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="marketingChallenge">What's your biggest marketing challenge? *</Label>
                      <Textarea
                        id="marketingChallenge"
                        placeholder="Tell me about your current marketing challenges, goals, and what you'd like to achieve. The more detail you provide, the better I can tailor our consultation to your specific needs."
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
                          Schedule Free Consultation
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      No spam. No sales pitches. Just valuable marketing insights tailored to your business.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Schedule Benefits */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Schedule a <span className="gradient-text">Consultation?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every business is unique. A personalized consultation ensures you get strategies tailored specifically to your market, 
                audience, and growth objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Personalized Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get a custom marketing strategy designed specifically for your business, industry, and target audience. 
                    No generic templates or one-size-fits-all solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Competitive Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover what your competitors are doing wrong and how you can outthink them with 
                    psychology-driven strategies that capture more market share.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Immediate Wins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Walk away with actionable tactics you can implement immediately to improve your marketing 
                    performance and start seeing results within days.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Audience Psychology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understand the psychological drivers behind your customers' decisions and learn how to 
                    craft messaging that resonates and converts.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Growth Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive a clear, step-by-step roadmap for scaling your business with proven marketing 
                    strategies tailored to your growth goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Time Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Avoid months of trial and error. Get expert guidance that fast-tracks your marketing 
                    success and saves you time and resources.
                  </p>
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
                Consultation <span className="gradient-text">Process FAQs</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What happens during the free consultation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  During our consultation, I'll analyze your current marketing, understand your business goals, identify your target audience psychology, and provide specific recommendations for growth. You'll receive actionable strategies you can implement immediately, plus a roadmap for long-term success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How long is the consultation and what format?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Consultations typically last 45-60 minutes. For Daytona Beach area businesses, I offer in-person meetings at my office or your location. For other markets, we'll conduct the consultation via video conference, phone, or detailed email exchange based on your preference.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Is the consultation really free? What's the catch?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, it's completely free with no strings attached. I provide genuine value during our consultation because I believe in demonstrating expertise rather than just talking about it. Some businesses choose to work with me afterward, but there's no pressure or obligation to do so.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What should I prepare for the consultation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Come prepared to discuss your current marketing efforts, biggest challenges, and growth goals. If possible, bring information about your target audience, competitors, and any marketing data you have. The more context you provide, the more specific and valuable my recommendations will be.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you work with businesses outside of Florida?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. While I specialize in Florida markets and offer in-person service in the Daytona Beach area, I work with businesses nationwide through remote consultations. The psychology-driven marketing principles I use are effective regardless of location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What happens after the consultation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You'll receive a follow-up email summarizing our discussion and key recommendations. If you'd like to continue working together, I'll outline potential next steps. If not, you'll still have valuable insights to implement on your own. There's no pressure either way.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop guessing what your customers want. Get psychology-driven marketing strategies that convert prospects into loyal customers.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-200 mb-8">
                <CheckCircle className="w-5 h-5" />
                <span>Join 200+ businesses that chose strategic marketing over generic tactics</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                Call: (386) 555-0123
              </Button>
            </div>
            
            <p className="text-blue-200 mt-6 text-center">
              Free consultations • No sales pressure • Results-focused approach
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;