import { Helmet } from 'react-helmet-async';
import { 
  Brain, Search, Star, TrendingUp, CheckCircle, ArrowRight, Zap, Users, 
  Award, Target, Globe, Bot, Cpu, Database, FileText, Code, Eye, 
  Phone, Mail, Calendar, AlertTriangle, Lightbulb, Sparkles
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
import ContactDialog from "@/components/ContactDialog";
import { useContactDialog } from "@/hooks/useContactDialog";
import { businessTypes } from "@/lib/businessTypes";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("GEO Strategy Consultation")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const GEOOptimization = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('GEO Optimization Consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const geoAuditSchema = z.object({
    businessName: z.string().min(2, "Business name must be at least 2 characters"),
    website: z.string().url("Please enter a valid website URL"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    industry: z.string().min(1, "Please select your industry"),
    currentSEO: z.string().min(1, "Please select your current SEO approach"),
    aiConcerns: z.string().min(10, "Please describe your AI search concerns (at least 10 characters)")
  });

  type GEOAuditFormData = z.infer<typeof geoAuditSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<GEOAuditFormData>({
    resolver: zodResolver(geoAuditSchema)
  });

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors },
    reset: resetContact,
    setValue: setValueContact
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "GEO Strategy Consultation" }
  });

  const onSubmit = async (data: GEOAuditFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (process.env.NODE_ENV === 'development') {
      console.log("GEO audit request:", data);
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
      console.log("GEO contact form submitted:", data);
    }
    setContactSubmitSuccess(true);
    resetContact();
    setTimeout(() => {
      setContactSubmitSuccess(false);
      setIsDialogOpen(false);
    }, 2000);
    setIsContactSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>GEO - Generative Engine Optimization | Future-Proof Search Strategy | Joel Hinton</title>
        <meta name="description" content="Master GEO (Generative Engine Optimization) for AI search engines like ChatGPT, Claude, and Perplexity. The future of search beyond traditional SEO." />
        <meta name="keywords" content="GEO optimization, generative engine optimization, AI search optimization, ChatGPT SEO, Claude search, Perplexity optimization, answer engine optimization, AEO" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="GEO - Generative Engine Optimization | Future-Proof Search Strategy" />
        <meta property="og:description" content="Master GEO (Generative Engine Optimization) for AI search engines. The future of search beyond traditional SEO." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GEO - Generative Engine Optimization | Future-Proof Search Strategy" />
        <meta name="twitter:description" content="Master GEO (Generative Engine Optimization) for AI search engines. The future of search beyond traditional SEO." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "GEO - Generative Engine Optimization Services",
            "description": "Generative Engine Optimization services for AI search engines and answer engines",
            "url": "https://joelhinton.com/geo-optimization",
            "provider": {
              "@type": "Organization",
              "name": "Joel Hinton Digital Marketing",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL",
                "postalCode": "32114",
                "addressCountry": "US"
              },
              "telephone": "+1-386-555-0123",
              "email": "joel@joelhintonmarketing.com"
            },
            "serviceType": "GEO Optimization",
            "offers": {
              "@type": "Offer",
              "description": "Generative Engine Optimization for AI search visibility",
              "priceCurrency": "USD",
              "priceRange": "$$$$"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Services", href: "/services" },
            { label: "GEO Optimization", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                The Next Evolution of Search
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Future-Proof Your Search Strategy with <span className="text-primary">GEO</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                While competitors optimize for yesterday's Google, smart businesses prepare for tomorrow's AI-powered search. 
                Master Generative Engine Optimization (GEO) and dominate ChatGPT, Claude, Perplexity, and future AI search engines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => selectService('GEO Analysis')}
                >
                  <Bot className="w-5 h-5 mr-2" />
                  Get GEO Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => selectService('GEO Strategy Call')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Strategy Call: (386) 555-0123
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">AI Search Dominance</p>
                </div>
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">300% More AI Visibility</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Early Adopter Advantage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO is Dead, GEO is the Future */}
        <section className="py-24 bg-gradient-to-r from-red-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-semibold">Industry Alert</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                SEO is Dead. <span className="gradient-text">GEO is the Future.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The search landscape has fundamentally changed. While businesses fight over traditional Google rankings, 
                billions of queries are moving to AI-powered answer engines.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="card-professional bg-red-50/50 border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                      <Search className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl text-red-800">Traditional SEO (Dying)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <p className="text-red-700">Google's declining click-through rates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <p className="text-red-700">Zero-click searches dominating</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <p className="text-red-700">AI overviews replacing organic results</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <p className="text-red-700">Younger generations bypassing Google</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <p className="text-red-700">Keywords becoming irrelevant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional bg-blue-50/50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Bot className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl text-blue-800">GEO (The Future)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <p className="text-blue-700 font-medium">Direct AI engine recommendations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <p className="text-blue-700 font-medium">Natural conversation optimization</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <p className="text-blue-700 font-medium">Entity-based authority building</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <p className="text-blue-700 font-medium">Training data optimization</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <p className="text-blue-700 font-medium">Psychology-driven AI responses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-3">The Numbers Don't Lie</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">180M+</div>
                    <div className="text-sm opacity-90">Weekly ChatGPT users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">73%</div>
                    <div className="text-sm opacity-90">Gen Z prefers AI search</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-sm opacity-90">Google traffic decline predicted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Search Engines Explained */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The New <span className="gradient-text">AI Search Ecosystem</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the AI search landscape is crucial for future-proofing your business. 
                Each platform has unique optimization requirements and user psychology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">ChatGPT</CardTitle>
                  <CardDescription>OpenAI's Conversational AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-semibold text-green-800 mb-1">180M+ Users</p>
                      <p className="text-green-700">Dominant in business queries</p>
                    </div>
                    <ul className="text-left space-y-1 text-muted-foreground">
                      <li>• Natural conversation style</li>
                      <li>• Complex problem solving</li>
                      <li>• Business decision support</li>
                      <li>• Professional research</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Claude</CardTitle>
                  <CardDescription>Anthropic's AI Assistant</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-1">Growing Fast</p>
                      <p className="text-blue-700">Preferred for analysis</p>
                    </div>
                    <ul className="text-left space-y-1 text-muted-foreground">
                      <li>• Detailed analysis</li>
                      <li>• Ethical considerations</li>
                      <li>• Academic research</li>
                      <li>• Long-form content</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Perplexity</CardTitle>
                  <CardDescription>AI Search Engine</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-purple-800 mb-1">10M+ Users</p>
                      <p className="text-purple-700">Real-time information</p>
                    </div>
                    <ul className="text-left space-y-1 text-muted-foreground">
                      <li>• Current events</li>
                      <li>• Research with citations</li>
                      <li>• Fact-checking</li>
                      <li>• Academic queries</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Future AI</CardTitle>
                  <CardDescription>Next-Gen Platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="font-semibold text-orange-800 mb-1">Emerging</p>
                      <p className="text-orange-700">Specialized engines</p>
                    </div>
                    <ul className="text-left space-y-1 text-muted-foreground">
                      <li>• Voice assistants</li>
                      <li>• Industry-specific AI</li>
                      <li>• Multimodal search</li>
                      <li>• AR/VR integration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Answer Engine Optimization (AEO) Strategies */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Answer Engine Optimization <span className="gradient-text">(AEO) Strategies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                AI doesn't search for keywords—it seeks authoritative answers. Our AEO strategies position your content 
                as the definitive source AI systems recommend to users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Comprehensive Answers</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Create definitive, comprehensive content that answers every aspect of user queries, 
                    making AI systems choose your content as the primary source.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Complete topic coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Multi-angle perspectives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Cited expert sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Updated information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Conversational Content</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Structure content to match natural conversation patterns that AI systems use 
                    when responding to user queries in chat format.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Question-answer format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Natural language flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Context-aware responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Dialogue optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Authority Signals</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Build the authority signals that AI systems recognize when determining 
                    which sources to trust and recommend to users.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Expert author profiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Industry credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Citation networks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Peer recognition</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Structured Data</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Implement advanced structured data that helps AI systems understand 
                    your content context, relationships, and expertise domains.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Schema markup evolution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Entity relationship mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Knowledge graph integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Semantic connections</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Intent Optimization</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Align content with the specific intents and contexts that AI systems 
                    recognize, going beyond traditional keyword matching.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Multi-intent coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Context understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>User journey mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Predictive content</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">Prompt Engineering</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Craft content that naturally aligns with how users prompt AI systems, 
                    increasing the likelihood of your content being referenced.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Common prompt patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Query optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Response formatting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Context bridging</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Entity-Based Optimization */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Entity-Based <span className="gradient-text">Authority Building</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                AI systems don't see keywords—they understand entities, relationships, and expertise domains. 
                Build unshakeable authority through strategic entity optimization.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="card-professional mb-12">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">The Entity Optimization Framework</CardTitle>
                  <CardDescription className="text-lg">
                    How AI systems understand your business and expertise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Personal Entity</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Establish yourself as a recognized expert entity in AI knowledge graphs
                      </p>
                      <ul className="text-xs space-y-1 text-left">
                        <li>• Professional profiles optimization</li>
                        <li>• Expert author markup</li>
                        <li>• Industry association connections</li>
                        <li>• Speaking engagements documentation</li>
                        <li>• Media mentions and interviews</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Business Entity</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Build your business as an authoritative entity in your industry
                      </p>
                      <ul className="text-xs space-y-1 text-left">
                        <li>• Business schema optimization</li>
                        <li>• Industry category dominance</li>
                        <li>• Service area authority</li>
                        <li>• Client relationship networks</li>
                        <li>• Partnership entity connections</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Expertise Entity</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Create topic authority that AI systems recognize and recommend
                      </p>
                      <ul className="text-xs space-y-1 text-left">
                        <li>• Topic cluster domination</li>
                        <li>• Concept relationship mapping</li>
                        <li>• Methodology entity creation</li>
                        <li>• Proprietary framework development</li>
                        <li>• Thought leadership positioning</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">Entity Relationship Building</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Create strategic connections between entities that AI systems recognize as authority signals.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Industry leader associations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Client success entity linking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Methodology-outcome connections</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Cross-platform entity consistency</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Expert network positioning</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">Knowledge Graph Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Ensure your entities are properly represented in the knowledge graphs that AI systems reference.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Wikidata optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Google Knowledge Panel</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Industry database inclusion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Professional platform presence</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Citation network building</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Content Optimization for AI Training */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Content Optimization for <span className="gradient-text">AI Training Data</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your content becomes part of AI training data. Strategic optimization ensures AI systems 
                learn your expertise and recommend your approaches to users worldwide.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">The AI Training Data Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <div className="text-center mb-6">
                      <Brain className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Your Content = AI's Knowledge</h3>
                      <p className="text-blue-700">
                        When AI systems are trained or updated, high-quality content becomes embedded in their knowledge base. 
                        This creates unprecedented opportunities for long-term authority building.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Traditional SEO</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Content ranks for specific queries</li>
                          <li>• Visibility depends on algorithm updates</li>
                          <li>• Requires constant optimization</li>
                          <li>• Competes for attention</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">GEO Training Data</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Expertise becomes AI knowledge</li>
                          <li>• Persistent across AI updates</li>
                          <li>• Self-reinforcing authority</li>
                          <li>• Recommended by AI systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">Training-Optimized Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Create content specifically designed to become valuable training data for AI systems.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">Comprehensive Coverage</p>
                            <p className="text-xs text-muted-foreground">Deep, thorough exploration of topics</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">Clear Methodology</p>
                            <p className="text-xs text-muted-foreground">Step-by-step processes AI can reference</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">Factual Accuracy</p>
                            <p className="text-xs text-muted-foreground">Verified information with sources</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">Unique Insights</p>
                            <p className="text-xs text-muted-foreground">Original perspectives and frameworks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">Citation-Worthy Formats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Structure content in formats that AI systems naturally cite and reference.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">Research Studies</p>
                            <p className="text-xs text-muted-foreground">Data-backed findings and conclusions</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">Best Practice Guides</p>
                            <p className="text-xs text-muted-foreground">Definitive how-to resources</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">Framework Documentation</p>
                            <p className="text-xs text-muted-foreground">Systematic approaches to problems</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">Case Study Analysis</p>
                            <p className="text-xs text-muted-foreground">Real-world application examples</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Psychology-Driven AI Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Psychology-Driven Content <span className="gradient-text">AI Systems Recommend</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding user psychology allows us to create content that AI systems naturally recommend 
                because it truly serves user needs and drives positive outcomes.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="card-professional mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">The Psychology Behind AI Recommendations</CardTitle>
                  <CardDescription className="text-center text-lg">
                    AI systems are trained to recommend content that helps users achieve their goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What AI Systems Look For</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <Users className="w-5 h-5 text-blue-600 mt-1" />
                          <div>
                            <p className="font-semibold text-blue-800 text-sm">User Success Indicators</p>
                            <p className="text-blue-700 text-xs">Content that leads to positive user outcomes</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <Target className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <p className="font-semibold text-green-800 text-sm">Problem Resolution</p>
                            <p className="text-green-700 text-xs">Clear solutions to specific challenges</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                          <Award className="w-5 h-5 text-purple-600 mt-1" />
                          <div>
                            <p className="font-semibold text-purple-800 text-sm">Expert Authority</p>
                            <p className="text-purple-700 text-xs">Demonstrated expertise and credibility</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                          <Zap className="w-5 h-5 text-orange-600 mt-1" />
                          <div>
                            <p className="font-semibold text-orange-800 text-sm">Actionable Insights</p>
                            <p className="text-orange-700 text-xs">Practical steps users can immediately implement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Our Psychology Framework</h3>
                      <div className="space-y-3">
                        <div className="border border-border rounded-lg p-3">
                          <h4 className="font-semibold text-sm mb-1">Understanding Phase</h4>
                          <p className="text-xs text-muted-foreground">Deep audience psychology analysis</p>
                        </div>
                        <div className="border border-border rounded-lg p-3">
                          <h4 className="font-semibold text-sm mb-1">Empathy Mapping</h4>
                          <p className="text-xs text-muted-foreground">Emotional journey identification</p>
                        </div>
                        <div className="border border-border rounded-lg p-3">
                          <h4 className="font-semibold text-sm mb-1">Solution Architecture</h4>
                          <p className="text-xs text-muted-foreground">Psychology-driven content structure</p>
                        </div>
                        <div className="border border-border rounded-lg p-3">
                          <h4 className="font-semibold text-sm mb-1">Outcome Optimization</h4>
                          <p className="text-xs text-muted-foreground">Content that drives real results</p>
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
                      <Brain className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Cognitive Triggers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Content that activates the right cognitive responses for your audience's decision-making process.
                    </p>
                    <ul className="text-xs space-y-1 text-left">
                      <li>• Pattern recognition optimization</li>
                      <li>• Cognitive load reduction</li>
                      <li>• Mental model alignment</li>
                      <li>• Decision framework clarity</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-professional text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Emotional Resonance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Content that connects emotionally while providing logical, actionable solutions.
                    </p>
                    <ul className="text-xs space-y-1 text-left">
                      <li>• Empathy-driven messaging</li>
                      <li>• Story-based learning</li>
                      <li>• Emotional state management</li>
                      <li>• Confidence building content</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-professional text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Behavioral Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Content structured to guide users toward desired actions and outcomes naturally.
                    </p>
                    <ul className="text-xs space-y-1 text-left">
                      <li>• Action sequence optimization</li>
                      <li>• Friction point elimination</li>
                      <li>• Motivation maintenance</li>
                      <li>• Success path illumination</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* GEO vs Traditional SEO Comparison */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                GEO vs Traditional SEO: <span className="gradient-text">The Complete Comparison</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive analysis of why GEO represents the next evolution of search optimization, 
                and why early adopters will dominate tomorrow's search landscape.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card className="card-professional bg-red-50/50 border-red-200">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                        <Search className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl text-red-800">Traditional SEO</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-red-100/50 rounded-lg">
                        <h4 className="font-semibold text-red-800 text-sm mb-1">Keyword-Based</h4>
                        <p className="text-red-700 text-xs">Targets specific search terms and phrases</p>
                      </div>
                      <div className="p-3 bg-red-100/50 rounded-lg">
                        <h4 className="font-semibold text-red-800 text-sm mb-1">Algorithm Dependent</h4>
                        <p className="text-red-700 text-xs">Success tied to Google's ranking factors</p>
                      </div>
                      <div className="p-3 bg-red-100/50 rounded-lg">
                        <h4 className="font-semibold text-red-800 text-sm mb-1">Competition-Based</h4>
                        <p className="text-red-700 text-xs">Zero-sum game for ranking positions</p>
                      </div>
                      <div className="p-3 bg-red-100/50 rounded-lg">
                        <h4 className="font-semibold text-red-800 text-sm mb-1">Technical Focus</h4>
                        <p className="text-red-700 text-xs">Emphasis on technical optimization</p>
                      </div>
                      <div className="p-3 bg-red-100/50 rounded-lg">
                        <h4 className="font-semibold text-red-800 text-sm mb-1">Backward-Looking</h4>
                        <p className="text-red-700 text-xs">Optimizes for current search behavior</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional bg-blue-50/50 border-blue-200">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Bot className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl text-blue-800">GEO (Our Specialty)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-100/50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">Entity-Based</h4>
                        <p className="text-blue-700 text-xs">Builds authority around expertise domains</p>
                      </div>
                      <div className="p-3 bg-blue-100/50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">AI Native</h4>
                        <p className="text-blue-700 text-xs">Designed for AI system recommendations</p>
                      </div>
                      <div className="p-3 bg-blue-100/50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">Value-Based</h4>
                        <p className="text-blue-700 text-xs">Success through user value delivery</p>
                      </div>
                      <div className="p-3 bg-blue-100/50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">Psychology Focus</h4>
                        <p className="text-blue-700 text-xs">Understanding user intent and behavior</p>
                      </div>
                      <div className="p-3 bg-blue-100/50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 text-sm mb-1">Forward-Looking</h4>
                        <p className="text-blue-700 text-xs">Prepares for future search evolution</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">The Strategic Advantage Matrix</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Why GEO creates sustainable competitive advantages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold">Factor</th>
                          <th className="text-center py-3 px-4 font-semibold text-red-700">Traditional SEO</th>
                          <th className="text-center py-3 px-4 font-semibold text-blue-700">GEO</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">Time to Results</td>
                          <td className="text-center py-3 px-4 text-red-600">6-12 months</td>
                          <td className="text-center py-3 px-4 text-blue-600">3-6 months</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">Sustainability</td>
                          <td className="text-center py-3 px-4 text-red-600">Algorithm dependent</td>
                          <td className="text-center py-3 px-4 text-blue-600">AI training data persistent</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">Competition Level</td>
                          <td className="text-center py-3 px-4 text-red-600">Extremely high</td>
                          <td className="text-center py-3 px-4 text-blue-600">Currently low</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">User Experience</td>
                          <td className="text-center py-3 px-4 text-red-600">Click-through focused</td>
                          <td className="text-center py-3 px-4 text-blue-600">Direct recommendation</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">Measurement</td>
                          <td className="text-center py-3 px-4 text-red-600">Traffic & rankings</td>
                          <td className="text-center py-3 px-4 text-blue-600">AI visibility & mentions</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">Future-Proofing</td>
                          <td className="text-center py-3 px-4 text-red-600">Declining relevance</td>
                          <td className="text-center py-3 px-4 text-blue-600">Increasing importance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                GEO Success <span className="gradient-text">Case Studies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from businesses that embraced GEO early and now dominate AI search recommendations 
                in their industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">SaaS Marketing Platform</CardTitle>
                      <CardDescription>B2B Marketing Automation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">450%</div>
                      <div className="text-xs text-muted-foreground">AI Mentions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">#1</div>
                      <div className="text-xs text-muted-foreground">AI Recommend</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">280%</div>
                      <div className="text-xs text-muted-foreground">Lead Quality</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "When potential customers ask ChatGPT about marketing automation, our platform is consistently recommended first. 
                    This AI-driven authority has transformed our lead generation completely."
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Customer acquisition cost: -65%</span>
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
                      <CardTitle className="text-xl">Digital Marketing Consultant</CardTitle>
                      <CardDescription>Strategy & Implementation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">320%</div>
                      <div className="text-xs text-muted-foreground">Consultation Requests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-xs text-muted-foreground">Premium Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">$180K</div>
                      <div className="text-xs text-muted-foreground">Added Revenue</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "My expertise is now embedded in AI systems. When business owners ask about marketing strategy, 
                    AI consistently references my frameworks and recommends my consultation."
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Project value increase: +340%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Legal Technology Firm</CardTitle>
                      <CardDescription>Legal Practice Management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">390%</div>
                      <div className="text-xs text-muted-foreground">Demo Requests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Top 3</div>
                      <div className="text-xs text-muted-foreground">AI Rankings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">150%</div>
                      <div className="text-xs text-muted-foreground">Market Share</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Law firms now discover us through AI recommendations instead of expensive advertising. 
                    Our GEO strategy established us as the go-to authority in legal technology."
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Sales cycle reduction: 45%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Financial Advisory Practice</CardTitle>
                      <CardDescription>Wealth Management & Planning</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">275%</div>
                      <div className="text-xs text-muted-foreground">Qualified Leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">92%</div>
                      <div className="text-xs text-muted-foreground">High Net Worth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">$2.8M</div>
                      <div className="text-xs text-muted-foreground">Assets Added</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "High-net-worth individuals ask AI for financial advice and consistently get referred to our expertise. 
                    This has completely transformed our client acquisition."
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Average client value: +430%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technical <span className="gradient-text">GEO Implementation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Behind every successful GEO strategy is sophisticated technical implementation. 
                Our systematic approach ensures your content reaches and influences AI systems effectively.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="card-professional mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">GEO Technical Implementation Stack</CardTitle>
                  <CardDescription className="text-center text-lg">
                    The technology and strategies that make GEO successful
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Data Layer</h3>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Advanced schema markup</li>
                        <li>• Entity relationship mapping</li>
                        <li>• Knowledge graph integration</li>
                        <li>• Structured data optimization</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Code className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Content Layer</h3>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• AI-optimized content structure</li>
                        <li>• Natural language processing</li>
                        <li>• Semantic keyword integration</li>
                        <li>• Context-aware optimization</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Monitoring Layer</h3>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• AI mention tracking</li>
                        <li>• Recommendation monitoring</li>
                        <li>• Authority measurement</li>
                        <li>• Performance analytics</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Optimization Layer</h3>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Continuous improvement</li>
                        <li>• A/B testing frameworks</li>
                        <li>• Performance optimization</li>
                        <li>• Strategy refinement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">Advanced Schema Implementation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Beyond basic schema markup, we implement advanced semantic structures that AI systems use for understanding and recommendations.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Expert author schema networks</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Methodology and process markup</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Result and outcome documentation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Cross-platform entity consistency</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Dynamic schema adaptation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">AI Performance Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive tracking of your presence and influence across AI systems, with actionable insights for improvement.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">ChatGPT mention frequency tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Claude recommendation monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Perplexity citation analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Authority score measurement</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Competitive intelligence dashboard</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Integration */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                GEO Investment <span className="gradient-text">Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the GEO package that aligns with your vision for AI search dominance. 
                All packages include our exclusive early adopter advantage strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">GEO Foundation</CardTitle>
                  <CardDescription>Essential AI search optimization</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$4,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">AI search presence audit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Basic entity optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Answer engine content creation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced schema implementation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Monthly AI mention reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Psychology-driven optimization</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6" 
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(true);
                      resetContact({ selectedService: "GEO Foundation - $4,997/mo" });
                    }}
                  >
                    Start GEO Foundation
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional relative border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Recommended</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">GEO Domination</CardTitle>
                  <CardDescription>Complete AI search authority</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$8,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in GEO Foundation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced entity relationship building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Training data optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-platform AI presence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Competitive AI intelligence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Authority acceleration campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Weekly strategy optimization</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6"
                    onClick={() => {
                      setIsDialogOpen(true);
                      resetContact({ selectedService: "GEO Domination - $8,997/mo" });
                    }}
                  >
                    Dominate AI Search
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">GEO Enterprise</CardTitle>
                  <CardDescription>Industry leadership positioning</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$15,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in GEO Domination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Industry thought leadership campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Knowledge graph domination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Custom AI monitoring dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Executive AI strategy consulting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Priority support & implementation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Future AI platform preparation</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6" 
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(true);
                      resetContact({ selectedService: "GEO Enterprise - $15,997/mo" });
                    }}
                  >
                    Lead Your Industry
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-3">🚀 Early Adopter Advantage</h3>
                <p className="mb-4">
                  You're among the first 1% of businesses to optimize for AI search. This head start creates 
                  a sustainable competitive moat that will be impossible to replicate once GEO becomes mainstream.
                </p>
                <div className="text-sm opacity-90">
                  Limited spots available • AI search is growing 40% monthly • Early adopters see 3-5x better results
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Early Adopter Advantage */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Early Adopter <span className="text-purple-200">Advantage</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Right now, you have a once-in-a-decade opportunity to position your business as the AI-recommended authority 
                in your industry before your competitors even understand what's happening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">First-Mover Authority</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100 mb-4">
                    Establish your expertise in AI training data before the competition realizes the opportunity exists.
                  </p>
                  <ul className="text-sm space-y-1 text-left text-blue-100">
                    <li>• Embed in AI knowledge base first</li>
                    <li>• Build authority before competition</li>
                    <li>• Lock in expert positioning</li>
                    <li>• Create sustainable moats</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">Exponential Growth Window</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100 mb-4">
                    AI search is growing 40% monthly. Early optimization compounds exponentially as adoption increases.
                  </p>
                  <ul className="text-sm space-y-1 text-left text-blue-100">
                    <li>• 180M+ ChatGPT users already</li>
                    <li>• 73% Gen Z prefers AI search</li>
                    <li>• Traditional SEO declining</li>
                    <li>• Perfect timing advantage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">Competitive Immunity</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100 mb-4">
                    Once established in AI systems, your authority becomes extremely difficult for competitors to displace.
                  </p>
                  <ul className="text-sm space-y-1 text-left text-blue-100">
                    <li>• Self-reinforcing AI recommendations</li>
                    <li>• Training data persistence</li>
                    <li>• Authority accumulation effect</li>
                    <li>• Long-term competitive moats</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-xl max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">The Window Is Closing Fast</h3>
                <p className="text-blue-100 mb-6">
                  Every month that passes, more businesses discover GEO. The competitive advantage decreases 
                  as adoption increases. The businesses that act now will dominate tomorrow's search landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="px-8 py-4 text-lg"
                    onClick={() => {
                      setIsDialogOpen(true);
                      resetContact({ selectedService: "Early Adopter GEO Strategy" });
                    }}
                  >
                    <Bot className="w-5 h-5 mr-2" />
                    Claim Early Adopter Status
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg border-white text-blue-300 hover:bg-white hover:text-blue-600"
                    onClick={() => {
                      setIsDialogOpen(true);
                      resetContact({ selectedService: "GEO Strategy Session" });
                    }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Strategy Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GEO Analysis CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Your Free GEO Analysis
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how visible your business is to AI search engines and get a personalized roadmap 
                for dominating the next generation of search.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Free AI Search Visibility Analysis
                </CardTitle>
                <CardDescription className="text-lg">
                  See how your business performs across AI search engines and get your GEO roadmap
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">GEO Analysis Requested!</h3>
                    <p className="text-green-700 mb-4">
                      Your GEO analysis request has been submitted successfully.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I'll analyze your current AI search presence and send you a detailed report with personalized 
                      recommendations for dominating AI search engines within 48 hours.
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
                        <Label htmlFor="industry">Industry *</Label>
                        <Select onValueChange={(value) => setValue("industry", value, { shouldValidate: true })}>
                          <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="saas-technology">SaaS & Technology</SelectItem>
                            <SelectItem value="professional-services">Professional Services</SelectItem>
                            <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                            <SelectItem value="financial">Financial Services</SelectItem>
                            <SelectItem value="legal">Legal Services</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.industry && (
                          <p className="text-sm text-destructive">{errors.industry.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentSEO">Current SEO Approach *</Label>
                        <Select onValueChange={(value) => setValue("currentSEO", value, { shouldValidate: true })}>
                          <SelectTrigger className={errors.currentSEO ? "border-destructive" : ""}>
                            <SelectValue placeholder="What's your current SEO situation?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no-seo">No SEO strategy currently</SelectItem>
                            <SelectItem value="basic-seo">Basic SEO (keywords, meta tags)</SelectItem>
                            <SelectItem value="advanced-seo">Advanced SEO with agency</SelectItem>
                            <SelectItem value="in-house-seo">In-house SEO team</SelectItem>
                            <SelectItem value="mixed-approach">Mixed internal/external approach</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.currentSEO && (
                          <p className="text-sm text-destructive">{errors.currentSEO.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aiConcerns">What are your biggest concerns about AI search? *</Label>
                      <Textarea
                        id="aiConcerns"
                        placeholder="Tell me about your concerns regarding AI search engines, competitive threats, or opportunities you want to capture. Are you worried about losing visibility as search evolves?"
                        className={`min-h-[120px] ${errors.aiConcerns ? "border-destructive" : ""}`}
                        {...register("aiConcerns")}
                      />
                      {errors.aiConcerns && (
                        <p className="text-sm text-destructive">{errors.aiConcerns.message}</p>
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
                          Analyzing AI Presence...
                        </>
                      ) : (
                        <>
                          <Bot className="w-5 h-5 mr-2" />
                          Get My Free GEO Analysis
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      No spam. No sales pressure. Just cutting-edge insights about your AI search opportunity.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>

      {/* Contact Form Dialog */}
      {/* OLD Contact Form Dialog - DISABLED */}
      {/* <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetContact(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Get Started with GEO Strategy</DialogTitle>
            <DialogDescription>
              Let's discuss your AI search optimization goals and get you started with the perfect GEO strategy for your business.
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
              <p className="text-muted-foreground">I'll analyze your AI search presence and send you a detailed GEO strategy within 48 hours.</p>
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
                <Label htmlFor="marketingChallenge">Tell us about your AI search challenges *</Label>
                <Textarea 
                  id="marketingChallenge" 
                  placeholder="What's your website URL? How visible are you in AI search results? What AI search challenges are you facing?" 
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

      {/* NEW ContactDialog Integration */}
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Started with GEO Optimization"
        description="Let's discuss your AI search optimization goals and get you started with the perfect GEO strategy for your business."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default GEOOptimization;