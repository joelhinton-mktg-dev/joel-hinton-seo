import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Scale, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Zap, Clock, Brain, 
  Shield, FileText, Building2, Eye, AlertTriangle, Gavel
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import { Link } from "react-router-dom";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ContactDialog } from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

const LegalServicesMarketing = () => {
  const {
    isDialogOpen,
    openDialog,
    closeDialog
  } = useContactDialog();

  // Keep the original form logic for the inline form
  const [isInlineSubmitting, setIsInlineSubmitting] = useState(false);
  const [inlineSubmitSuccess, setInlineSubmitSuccess] = useState(false);

  const legalLeadSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().min(2, "Law firm name must be at least 2 characters"),
    industry: z.string().min(1, "Please select your legal specialty"),
    message: z.string().min(20, "Please describe your legal marketing challenges (at least 20 characters)")
  });

  type LegalLeadFormData = z.infer<typeof legalLeadSchema>;

  const {
    register: registerInline,
    handleSubmit: handleInlineSubmit,
    formState: { errors: inlineErrors },
    reset: resetInline,
    setValue: setValueInline
  } = useForm<LegalLeadFormData>({
    resolver: zodResolver(legalLeadSchema),
    defaultValues: {
      industry: "legal-services"
    }
  });

  const onInlineSubmit = async (data: LegalLeadFormData) => {
    setIsInlineSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Legal services lead generated:", data);
    setInlineSubmitSuccess(true);
    resetInline({ industry: "legal-services" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setInlineSubmitSuccess(false), 5000);
    setIsInlineSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Legal Services Marketing Psychology | Law Firm Marketing | Attorney Marketing | Joel Hinton</title>
        <meta name="description" content="Legal services marketing psychology that converts prospects in crisis moments. Authority-driven strategies for law firms with 180% traffic growth and 420% lead increase." />
        <meta name="keywords" content="legal marketing, law firm marketing, attorney marketing, legal services psychology, lawyer lead generation, legal authority positioning" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Legal Services Marketing Psychology | Law Firm Marketing" />
        <meta property="og:description" content="Legal marketing strategies that convert prospects in crisis moments with authority positioning and proven results." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Legal Services Marketing Psychology",
            "description": "Authority-driven marketing strategies for law firms and legal services",
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
              "name": "Legal Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Legal Authority Positioning"
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
            { label: "Legal Services", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Scale className="w-4 h-4 mr-2" />
                Legal Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Legal Services Marketing <span className="text-primary">Psychology</span> That Converts Crisis into Clients
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Legal clients are often in crisis or facing complex decisions. Our psychology-driven strategies leverage 
                authority positioning, trust building, and urgency relief to convert prospects into clients who value expertise. Our <Link to="/local-seo" className="text-primary hover:underline">local SEO services</Link> help law firms dominate "attorney near me" searches, while our <Link to="/seo-services" className="text-primary hover:underline">SEO expertise</Link> builds long-term authority.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog("Legal Services Marketing Audit")}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Legal Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog("Legal Services Marketing Audit")}>
                  <Phone className="w-5 h-5 mr-2" />
                  Legal Marketing Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">180% Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">420% More Qualified Leads</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">350% ROI Increase</p>
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
                Legal Services <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Legal clients need confidence in outcomes and trust in expertise. We leverage crisis psychology, authority 
                positioning, and outcome confidence to convert prospects facing legal challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Crisis Urgency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Legal problems require immediate action. We position your firm as the expert solution that provides relief and protects client interests.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>24/7 consultation availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Immediate response guarantees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Crisis relief messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Protective action emphasis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Authority Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Legal clients need confidence in their attorney's expertise. We build unshakeable authority through credentials, results, and recognition.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Bar admissions and credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Case result showcases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Legal awards and recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Media appearances and quotes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Gavel className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Outcome Confidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Clients need confidence in positive outcomes. We showcase successful case results and demonstrate track records that build expectation of success.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Success rate statistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Settlement and verdict results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Client success stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Process transparency</span>
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
                Legal Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Legal services face unique marketing challenges from consultation hesitation to fee transparency. 
                We've developed specialized solutions for law firm growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Consultation Hesitation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    People hesitate to contact attorneys due to cost concerns and intimidation factors. We remove barriers and encourage initial contact.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Free consultation offers</li>
                      <li>• No-obligation case evaluations</li>
                      <li>• Consultation process explanation</li>
                      <li>• Attorney accessibility emphasis</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 75% increase in consultation requests</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Fee Transparency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Address cost anxiety with transparent fee structures and clear value propositions that justify legal investment.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Clear fee structure displays</li>
                      <li>• Value proposition emphasis</li>
                      <li>• Payment plan options</li>
                      <li>• Cost of inaction education</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 60% improvement in fee acceptance</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Outcome Expectations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Manage client expectations while building confidence in positive outcomes through transparent communication and process education.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Process timeline clarity</li>
                      <li>• Realistic outcome education</li>
                      <li>• Success probability discussions</li>
                      <li>• Regular communication protocols</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 90% client satisfaction rate</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Referral Generation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Build referral networks and repeat business through exceptional client experiences and professional relationship development.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Client experience optimization</li>
                      <li>• Professional network building</li>
                      <li>• Referral incentive programs</li>
                      <li>• Community involvement strategy</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% of new clients from referrals</div>
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
                Proven <span className="gradient-text">Legal Services Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our legal marketing consistently delivers measurable improvements in consultation requests, 
                client quality, and case referrals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">180%</div>
                  <div className="text-lg font-semibold mb-2">Traffic Growth</div>
                  <p className="text-sm text-muted-foreground">Legal prospects searching for help</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">420%</div>
                  <div className="text-lg font-semibold mb-2">Qualified Leads</div>
                  <p className="text-sm text-muted-foreground">Consultation requests</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">350%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Marketing return on investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                  <div className="text-lg font-semibold mb-2">Referral Rate</div>
                  <p className="text-sm text-muted-foreground">New clients from referrals</p>
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
                Legal Services <span className="gradient-text">Success Story</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Scale className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Henderson & Associates Law</CardTitle>
                      <CardDescription className="text-lg">Personal Injury & Criminal Defense</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">420%</div>
                      <div className="text-sm text-blue-700">Lead Quality</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">$2.3M</div>
                      <div className="text-sm text-blue-700">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">350%</div>
                      <div className="text-sm text-blue-700">ROI Growth</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">
                        Henderson & Associates was competing with larger firms for personal injury cases and struggling with low-quality leads. 
                        Most consultation requests came from people who couldn't afford their services or had weak cases. They needed to attract 
                        serious clients with strong cases and adequate resources.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Our Legal Psychology Solution</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Authority Building:</strong> Showcased case results, bar credentials, and media recognition to establish expertise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Crisis Psychology:</strong> Created emergency-focused landing pages for accident victims needing immediate help</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Fee Transparency:</strong> Developed contingency fee education that removed cost anxiety for qualified cases</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Outcome Confidence:</strong> Highlighted specific case results and settlement amounts to build expectation of success</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">The Results</h4>
                      <p className="text-blue-700 text-sm">
                        "Joel's legal marketing transformed our practice. Instead of chasing any case that walked through the door, we now attract 
                        high-value clients with strong cases. Our consultation-to-retainer rate improved dramatically, and we're selective about 
                        which cases we take. The authority positioning made us the go-to firm in our practice areas. His experience with <Link to="/industries/professional-services" className="text-primary hover:underline">professional services marketing</Link> was invaluable for our B2B clients."
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-blue-800">James Henderson, Managing Partner</span>
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
                Legal Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the legal marketing package that fits your practice size and specialization. 
                All packages include authority building and crisis conversion strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Solo Practice</CardTitle>
                  <CardDescription>Perfect for individual attorneys</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$2,697<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Professional website optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local SEO for legal searches</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Free consultation campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Authority content creation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Review management</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => {
                      openDialog("Legal Services Marketing Audit");
                      reset({ selectedService: "Solo Practice - $2,697/mo" });
                    }}
                  >
                    Build Solo Authority
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Established Firm</CardTitle>
                  <CardDescription>For growing law firms</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$4,697<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Solo Practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-attorney positioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Case result showcases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Practice area optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Referral network development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Media relations support</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      openDialog("Legal Services Marketing Audit");
                      reset({ selectedService: "Established Firm - $4,697/mo" });
                    }}
                  >
                    Dominate Your Practice Area
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Legal Powerhouse</CardTitle>
                  <CardDescription>For large law firms</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$7,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Established Firm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-location coordination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Thought leadership campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Industry recognition strategies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Enterprise reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Priority crisis management</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => {
                      openDialog("Legal Services Marketing Audit");
                      reset({ selectedService: "Legal Powerhouse - $7,997/mo" });
                    }}
                  >
                    Become Legal Authority
                  </Button>
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
                Legal Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you handle legal advertising regulations and ethics rules?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We ensure all legal marketing complies with state bar regulations and ethical guidelines. This includes proper disclaimers, truthful advertising, client confidentiality protection, and appropriate case result presentations. We stay current with evolving legal advertising rules across all jurisdictions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What practice areas do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We work with personal injury, criminal defense, family law, corporate law, employment law, real estate law, and other practice areas. Each requires different psychology - personal injury focuses on crisis relief, while corporate law emphasizes expertise and results. We tailor strategies to your specific practice area and client base.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you improve consultation-to-retainer conversion rates?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We optimize the entire consultation process from initial contact to retainer signing. This includes consultation preparation materials, case evaluation processes, fee structure presentation, and confidence-building strategies. We also provide consultation scripts and follow-up systems that address common objections and concerns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you build authority and credibility for new attorneys?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  New attorneys can build authority through thought leadership content, community involvement, continuing education highlights, and association with experienced mentors. We create content strategies that showcase legal knowledge, provide value to potential clients, and position new attorneys as rising experts in their practice areas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can law firms see marketing results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Legal marketing typically shows initial results within 60-90 days for local SEO and consultation improvements. Lead quality increases usually occur within 3-6 months as authority builds. Long-term positioning and referral network development take 6-12 months. We track consultation requests, retainer rates, and case quality monthly.
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
                Ready to <span className="gradient-text">Build Legal Authority</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get a custom legal marketing strategy that positions your firm as the trusted authority and converts more consultations into clients.
              </p>
            </div>

            <Card className="card-professional max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get Your Free Legal Marketing Audit</CardTitle>
                <CardDescription>
                  We'll analyze your online presence, consultation process, and authority positioning to identify growth opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {inlineSubmitSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Request Submitted!</h3>
                    <p className="text-green-700">
                      We'll analyze your legal practice and send your custom marketing strategy within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInlineSubmit(onInlineSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...registerInline("name")}
                          className={inlineErrors.name ? "border-red-500" : ""}
                        />
                        {inlineErrors.name && (
                          <p className="text-red-500 text-sm">{inlineErrors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@lawfirm.com"
                          {...registerInline("email")}
                          className={inlineErrors.email ? "border-red-500" : ""}
                        />
                        {inlineErrors.email && (
                          <p className="text-red-500 text-sm">{inlineErrors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          placeholder="(555) 123-4567"
                          {...registerInline("phone")}
                          className={inlineErrors.phone ? "border-red-500" : ""}
                        />
                        {inlineErrors.phone && (
                          <p className="text-red-500 text-sm">{inlineErrors.phone.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Law Firm Name *</Label>
                        <Input
                          id="company"
                          placeholder="Your law firm name"
                          {...registerInline("company")}
                          className={inlineErrors.company ? "border-red-500" : ""}
                        />
                        {inlineErrors.company && (
                          <p className="text-red-500 text-sm">{inlineErrors.company.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Legal Specialty *</Label>
                      <Select onValueChange={(value) => setValueInline("industry", value)} defaultValue="legal-services">
                        <SelectTrigger className={inlineErrors.industry ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select your practice area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="legal-services">Legal Services</SelectItem>
                          <SelectItem value="personal-injury">Personal Injury</SelectItem>
                          <SelectItem value="criminal-defense">Criminal Defense</SelectItem>
                          <SelectItem value="family-law">Family Law</SelectItem>
                          <SelectItem value="corporate-law">Corporate Law</SelectItem>
                          <SelectItem value="employment-law">Employment Law</SelectItem>
                          <SelectItem value="real-estate-law">Real Estate Law</SelectItem>
                          <SelectItem value="estate-planning">Estate Planning</SelectItem>
                        </SelectContent>
                      </Select>
                      {inlineErrors.industry && (
                        <p className="text-red-500 text-sm">{inlineErrors.industry.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Legal Marketing Challenges *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your consultation conversion, authority building, or client acquisition challenges..."
                        rows={4}
                        {...registerInline("message")}
                        className={inlineErrors.message ? "border-red-500" : ""}
                      />
                      {inlineErrors.message && (
                        <p className="text-red-500 text-sm">{inlineErrors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isInlineSubmitting}
                    >
                      {isInlineSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 mr-2 animate-spin" />
                          Analyzing Your Legal Practice...
                        </>
                      ) : (
                        <>
                          <Scale className="w-5 h-5 mr-2" />
                          Get My Legal Marketing Strategy
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
        <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-800">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Become the Legal Authority?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop competing on price and start winning with authority. Get legal marketing that positions 
                your firm as the trusted expert clients choose in their time of need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog("Legal Services Marketing Audit")}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Legal Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-blue-200 text-center">
                Legal authority • Crisis conversion • Ethical compliance
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Contact Form Dialog */}
      <ContactDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title="Get Started with Legal Services Marketing"
        description="Let's discuss your authority building goals and help you convert more consultations into clients."
        defaultService="Legal Services Marketing Audit"
        businessTypes={businessTypes.legal}
      />
    </>
  );
};

export default LegalServicesMarketing;