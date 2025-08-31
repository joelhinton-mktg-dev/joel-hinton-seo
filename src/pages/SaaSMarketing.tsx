import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code2, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Zap, Clock, Brain, 
  Shield, FileText, Building2, Eye, Rocket, CreditCard, Play
} from 'lucide-react';
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
import { Link } from "react-router-dom";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SaaSMarketing = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const saasLeadSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().min(2, "Company name must be at least 2 characters"),
    industry: z.string().min(1, "Please select your industry"),
    message: z.string().min(20, "Please describe your SaaS growth challenges (at least 20 characters)")
  });

  type SaaSLeadFormData = z.infer<typeof saasLeadSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<SaaSLeadFormData>({
    resolver: zodResolver(saasLeadSchema),
    defaultValues: {
      industry: "saas-technology"
    }
  });

  const onSubmit = async (data: SaaSLeadFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("SaaS lead generated:", data);
    setSubmitSuccess(true);
    reset({ industry: "saas-technology" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>SaaS Marketing Psychology | Trial Conversion Optimization | Customer Onboarding | Joel Hinton</title>
        <meta name="description" content="SaaS marketing psychology that optimizes trial conversion and reduces churn. Proven strategies for software companies with 245% traffic growth and 380% ROI." />
        <meta name="keywords" content="SaaS marketing, trial conversion, customer onboarding, SaaS psychology, software marketing, churn reduction, freemium marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="SaaS Marketing Psychology | Trial Conversion & Customer Success" />
        <meta property="og:description" content="SaaS marketing strategies that optimize trial conversion and customer success with proven results." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SaaS Marketing Psychology",
            "description": "Trial conversion optimization and customer success strategies for SaaS companies",
            "provider": {
              "@type": "Organization",
              "name": "Joel Hinton Digital Marketing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL"
              }
            },
            "areaServed": "Florida",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SaaS Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Trial Conversion Optimization"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "SaaS & Technology", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Code2 className="w-4 h-4 mr-2" />
                SaaS Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                SaaS Marketing <span className="text-primary">Psychology</span> That Converts Trials to Revenue
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                SaaS buyers need proof of value and ease of use before committing. Our psychology-driven strategies optimize 
                the entire customer journey from trial signup to expansion revenue, reducing churn and maximizing LTV.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Target className="w-5 h-5 mr-2" />
                  Get SaaS Growth Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Trial Conversion Strategy Call
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">245% Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">290% Trial Conversions</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">380% ROI Increase</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychology Triggers */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                SaaS <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                SaaS buyers are analytical and value-driven, but emotional about risk and adoption barriers. We leverage these 
                psychological patterns to create frictionless experiences that convert and retain. Our <Link to="/growth-marketing" className="text-primary hover:underline">growth marketing strategies</Link> and <Link to="/geo-optimization" className="text-primary hover:underline">AI search optimization</Link> are particularly effective for SaaS companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Free Trial Psychology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "Try before you buy" reduces risk and builds confidence. We optimize trial experiences to demonstrate value quickly and remove barriers to conversion.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Zero-friction signup flows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Value demonstration onboarding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Progressive feature introduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Success milestone tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Feature Benefit Clarity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Technical features mean nothing without clear benefits. We translate complex functionality into tangible business outcomes that prospects understand.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Benefit-first messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Use case demonstrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>ROI calculators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Feature comparison matrices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Success Story Proof</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    SaaS buyers are skeptical of bold claims. We provide detailed success stories, metrics, and social proof that validate your solution's effectiveness.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Customer success case studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Usage and adoption metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Customer testimonial videos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Third-party validation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Challenges We Solve */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                SaaS Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                SaaS companies face unique challenges from trial conversion to customer expansion. 
                We've developed specialized solutions for software business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Play className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Trial Conversion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Convert free trial users to paid customers by demonstrating clear value and removing adoption barriers during the trial experience.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Onboarding sequence optimization</li>
                      <li>• Value demonstration workflows</li>
                      <li>• Feature adoption tracking</li>
                      <li>• Conversion moment targeting</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% improvement in trial-to-paid conversion</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Feature Adoption</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Guide users to discover and adopt key features that increase engagement, demonstrate value, and reduce churn risk.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Progressive disclosure strategies</li>
                      <li>• In-app guidance systems</li>
                      <li>• Feature highlight campaigns</li>
                      <li>• Usage analytics optimization</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 60% increase in core feature adoption</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Customer Onboarding</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Create onboarding experiences that get users to their "aha moment" quickly and build confidence in your solution.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Personalized onboarding paths</li>
                      <li>• Quick win identification</li>
                      <li>• Progress milestone celebration</li>
                      <li>• Support touchpoint optimization</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 70% reduction in time-to-value</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Churn Reduction</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Identify at-risk customers early and implement retention strategies that address satisfaction issues before cancellation.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Churn prediction analytics</li>
                      <li>• Proactive customer success</li>
                      <li>• Win-back campaigns</li>
                      <li>• Satisfaction monitoring systems</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 45% reduction in monthly churn rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proven <span className="gradient-text">SaaS Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our SaaS marketing consistently delivers measurable improvements in trial conversion, 
                feature adoption, and customer lifetime value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">245%</div>
                  <div className="text-lg font-semibold mb-2">Traffic Growth</div>
                  <p className="text-sm text-muted-foreground">Qualified SaaS prospects</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">290%</div>
                  <div className="text-lg font-semibold mb-2">Trial Conversions</div>
                  <p className="text-sm text-muted-foreground">Free to paid upgrades</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">380%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Marketing return on investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
                  <div className="text-lg font-semibold mb-2">Churn Reduction</div>
                  <p className="text-sm text-muted-foreground">Monthly customer retention</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                SaaS <span className="gradient-text">Success Story</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Code2 className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">ProjectFlow SaaS</CardTitle>
                      <CardDescription className="text-lg">Project Management Software Platform</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">290%</div>
                      <div className="text-sm text-blue-700">Trial Conversions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">$180</div>
                      <div className="text-sm text-blue-700">Avg Customer LTV</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">380%</div>
                      <div className="text-sm text-blue-700">ROI Growth</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">
                        ProjectFlow had plenty of trial signups but terrible conversion rates. Users would sign up, get overwhelmed 
                        by features, and abandon the platform before experiencing value. Their generic onboarding wasn't demonstrating 
                        the core benefits that made customers successful.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Our SaaS Psychology Solution</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Trial Optimization:</strong> Created guided onboarding that gets users to their first project completion within 15 minutes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Feature Discovery:</strong> Progressive disclosure that introduces advanced features based on user success patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Value Demonstration:</strong> Real-time ROI tracking and productivity metrics within the app</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Conversion Psychology:</strong> Strategic upgrade prompts tied to usage milestones and success achievements</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">The Results</h4>
                      <p className="text-blue-700 text-sm">
                        "Joel transformed our trial experience from confusing to compelling. Our conversion rate tripled, and customers are now 
                        discovering advanced features that increase their lifetime value. The psychology-driven onboarding makes our complex 
                        software feel intuitive and valuable from day one. His expertise with <Link to="/industries/professional-services" className="text-primary hover:underline">B2B service companies</Link> was invaluable."
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-blue-800">Sarah Chen, CEO</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                SaaS Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the SaaS marketing package that fits your company stage and growth goals. 
                All packages include trial optimization and customer success strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Growth Starter</CardTitle>
                  <CardDescription>Perfect for early-stage SaaS</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$3,497<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Trial conversion optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Onboarding flow design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Feature adoption tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Customer success emails</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Basic churn prevention</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Start SaaS Growth</Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Scale Accelerator</CardTitle>
                  <CardDescription>For growing SaaS companies</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$5,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Growth Starter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced segmentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Expansion revenue campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Product-led growth strategies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Customer advocacy programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                  </div>
                  <Button className="w-full">Accelerate Growth</Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Enterprise Platform</CardTitle>
                  <CardDescription>For established SaaS platforms</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$9,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Scale Accelerator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-product optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Enterprise sales funnels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Custom integration marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Platform ecosystem development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Executive strategy consulting</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Scale Enterprise Platform</Button>
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
                SaaS Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you optimize free trial conversion rates?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We optimize the entire trial experience from signup to conversion. This includes removing friction from signup, creating guided onboarding that demonstrates value quickly, tracking feature adoption, and implementing strategic upgrade prompts at moments of success. Most SaaS companies see 60-85% improvement in trial-to-paid conversion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What SaaS business models do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We work with all SaaS models including freemium, free trial, enterprise sales, and product-led growth. Each model requires different psychology and conversion strategies. B2B SaaS focuses on ROI demonstration, while B2C emphasizes ease of use and personal benefit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you reduce SaaS customer churn?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We implement predictive churn analytics to identify at-risk customers before they cancel. This includes monitoring usage patterns, satisfaction surveys, feature adoption tracking, and proactive customer success interventions. We also create win-back campaigns and exit feedback systems to recover cancelling customers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can SaaS companies see marketing results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SaaS optimization can show results quickly. Onboarding improvements can increase conversion within weeks, feature adoption campaigns show results in 30-60 days, and comprehensive strategies typically achieve full results in 3-6 months. We track trial conversion rates, customer lifetime value, and churn rates weekly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you help with product-led growth strategies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we specialize in product-led growth (PLG) where the product itself drives acquisition, conversion, and expansion. We optimize in-app experiences, viral loops, referral programs, and feature-driven upgrade paths. PLG requires deep understanding of user psychology and product usage patterns.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Lead Form */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Optimize Your SaaS Growth</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get a custom SaaS growth strategy that converts more trials, reduces churn, and maximizes customer lifetime value.
              </p>
            </div>

            <Card className="card-professional max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get Your Free SaaS Growth Audit</CardTitle>
                <CardDescription>
                  We'll analyze your trial conversion, onboarding, and retention to identify immediate growth opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Request Submitted!</h3>
                    <p className="text-green-700">
                      We'll analyze your SaaS and send your custom growth strategy within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name")}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@company.com"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          placeholder="(555) 123-4567"
                          {...register("phone")}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm">{errors.phone.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          placeholder="Your SaaS company"
                          {...register("company")}
                          className={errors.company ? "border-red-500" : ""}
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm">{errors.company.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select onValueChange={(value) => setValue("industry", value)} defaultValue="saas-technology">
                        <SelectTrigger className={errors.industry ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saas-technology">SaaS & Technology</SelectItem>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="healthtech">HealthTech</SelectItem>
                          <SelectItem value="edtech">EdTech</SelectItem>
                          <SelectItem value="martech">MarTech</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.industry && (
                        <p className="text-red-500 text-sm">{errors.industry.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">SaaS Growth Challenges *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your trial conversion, onboarding, or retention challenges..."
                        rows={4}
                        {...register("message")}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 mr-2 animate-spin" />
                          Analyzing Your SaaS...
                        </>
                      ) : (
                        <>
                          <Rocket className="w-5 h-5 mr-2" />
                          Get My SaaS Growth Strategy
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Free audit • Custom strategy • 24-hour response
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Scale Your SaaS?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop losing trials to poor onboarding and feature confusion. Get SaaS marketing 
                that converts prospects into loyal customers who expand their usage over time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Get SaaS Growth Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-blue-200 text-center">
                Trial optimization • Customer success • Expansion revenue
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SaaSMarketing;