import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProfessionalServiceSchema from "@/components/schema/ProfessionalServiceSchema";
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  Search, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Bot, 
  Target,
  BarChart3,
  Users,
  Clock,
  DollarSign,
  Star
} from "lucide-react";


const SEOServices = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Free SEO Audit');

  return (
    <>
      <Helmet>
        <title>Comprehensive SEO Services | Technical & Local SEO Expert | AIO Growth SEO</title>
        <meta name="description" content="Comprehensive SEO services combining technical optimization with behavioral psychology to drive Central Florida business growth and higher search rankings. Volusia & Flagler County SEO experts." />
        <meta name="keywords" content="SEO services, technical SEO, local SEO, search engine optimization, Volusia County SEO, Flagler County SEO, Central Florida SEO" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Comprehensive SEO Services | AIO Growth SEO" />
        <meta property="og:description" content="Technical SEO optimization combined with behavioral psychology for proven Central Florida business growth." />
        <meta property="og:type" content="website" />
      </Helmet>
      <ProfessionalServiceSchema
        serviceName="SEO Services"
        serviceDescription="Comprehensive SEO services combining technical optimization, topical authority mapping, and AI-powered content systems"
        serviceUrl="https://aiogrowthseo.com/seo-services"
        price="1000"
        serviceType="Search Engine Optimization"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      
      {/* Breadcrumb */}
      <PageBreadcrumb 
        items={[
          { label: "SEO Services", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              SEO Rewired: Technical SEO + Local Signals
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Stop paying <span className="text-primary">$3K/month</span> for two blogs. Get real SEO that combines <span className="gradient-text">technical optimization</span> with consumer psychology.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Traditional SEO agencies sell you retainers. We sell you results. Our proven strategies help <Link to="/industries/professional-services" className="text-primary hover:underline">professional services</Link> and <Link to="/industries/legal-services" className="text-primary hover:underline">legal services</Link> dominate their markets with real SEO that drives business growth.
            </p>
            
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg"
              onClick={() => openDialog()}
            >
              Get Your Free SEO Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-destructive">
                Why Traditional SEO is Broken
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Most agencies charge $3,000/month for basic keyword research and two blog posts</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">They promise 'ongoing optimizations' but never fix the real technical issues</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">You're paying for busywork, not business growth</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">SEO has become propaganda - all fluff, no substance</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-8 text-primary">
                Our GEO Solution
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">We focus on what actually moves the needle: technical fixes, psychology-driven content, and scalable systems</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">One-time fixes that compound over time vs endless retainers</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">GEO (Generative Engine Optimization) for the AI search era</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Psychology-driven content that converts visitors to customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO vs GEO Comparison */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Traditional SEO vs <span className="gradient-text">Our SEO/GEO System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create a strategic roadmap to topical authority using semantic SEO and AI-powered content systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-professional border-destructive/20">
              <CardHeader>
                <CardTitle className="text-xl text-destructive flex items-center gap-2">
                  <Search className="w-6 h-6" />
                  Traditional SEO Approach
                </CardTitle>
                <CardDescription className="text-destructive/80 font-medium mt-2">
                  Keywords → Content → Hope for Rankings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  <span>Keyword research with no strategic context</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  <span>Random blog posts targeting individual keywords</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  <span>No understanding of topical relationships</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  <span>Ignores AI search and answer engines entirely</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Bot className="w-6 h-6" />
                  Our SEO/GEO System
                </CardTitle>
                <CardDescription className="text-primary font-medium mt-2">
                  Technical Audit → Topical Mapping → Semantic SEO → Content Automation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span><strong>Topical authority mapping</strong> - understand your entire topic cluster</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span><strong>Entity-based SEO</strong> - optimize for concepts, not just keywords</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span><strong>Answer Engine Optimization (AEO)</strong> - rank in AI & voice search</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span><strong>AI content automation</strong> - scale with 80/20 human oversight</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">SEO Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three phases that transform your website from invisible to irresistible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Phase 1: Technical Foundation</CardTitle>
                <CardDescription className="text-primary font-semibold">Week 1-2</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Complete technical SEO audit using custom tools
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Fix Core Web Vitals and page speed issues
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Implement proper schema markup
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Resolve crawl errors and indexation problems
                </div>
                <p className="text-xs italic text-primary mt-4">"We fix what's broken before building what's new"</p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Phase 2: Psychology-Driven Content</CardTitle>
                <CardDescription className="text-primary font-semibold">Week 3-4</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Keyword research based on actual user intent
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Content strategy rooted in consumer decision science
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Answer Engine Optimization (AEO)
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Local SEO optimization for geographic targeting
                </div>
                <p className="text-xs italic text-primary mt-4">"Content that converts, not just ranks"</p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Phase 3: AI Content Engine</CardTitle>
                <CardDescription className="text-primary font-semibold">Week 5-6</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  AI Content Engine setup and automation
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Automated content creation using topical map as roadmap
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  80/20 approach: AI generates, humans perfect
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Content strategy tied to topical authority building
                </div>
                <p className="text-xs italic text-primary mt-4">"AI generates, humans perfect, rankings compound"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No retainers. No hidden fees. Just results-driven SEO with clear deliverables.
            </p>
          </div>

          {/* One-Time Packages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="card-professional">
              <CardHeader className="text-center pb-8">
                <Badge variant="secondary" className="w-fit mx-auto mb-4">Foundation</Badge>
                <CardTitle className="text-2xl mb-2">Basic SEO Foundation</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">$1,000</div>
                <CardDescription className="text-muted-foreground">One-time investment</CardDescription>
                <p className="text-sm text-primary font-medium mt-2">Foundation for search & answer engine success</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Complete technical SEO audit & fixes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">On-page optimization for core pages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm"><strong>Topical map creation</strong> - your content roadmap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Competitive gap analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Google Business Profile optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Schema markup implementation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">30-day performance report</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium">2-3 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ideal for:</span>
                    <span className="font-medium text-right">Local businesses, service providers</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-6"
                  onClick={() => selectService("Basic SEO Foundation - $1,000")}
                >
                  Get Started - $1,000
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-professional border-primary/50 bg-primary/5">
              <CardHeader className="text-center pb-8">
                <Badge className="w-fit mx-auto mb-4 bg-primary">Recommended</Badge>
                <CardTitle className="text-2xl mb-2">Growth SEO System</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">$2,000</div>
                <CardDescription className="text-muted-foreground">One-time investment</CardDescription>
                <p className="text-sm text-primary font-medium mt-2">Complete SEO + AI Content Engine setup</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Everything in Basic Foundation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm"><strong>AI Content Engine</strong> setup & automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Content strategy implementation (first 5 articles)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Initial backlink building (directories + 1-2 guest posts)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Advanced AEO (Answer Engine Optimization)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Multi-location SEO (up to 3 locations)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">90-day performance tracking</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium">4-6 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ideal for:</span>
                    <span className="font-medium text-right">Growing businesses, content-focused</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-6 btn-hero text-primary-foreground"
                  onClick={() => selectService("Growth SEO System - $2,000")}
                >
                  Get Started - $2,000
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Maintenance Options */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Optional Monthly Maintenance</h3>
              <p className="text-muted-foreground">For businesses that want ongoing optimization support after foundation setup</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-professional">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Monthly Maintenance</CardTitle>
                    <div className="text-2xl font-bold text-primary">$500<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      10 hours of optimization work monthly
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Content updates and new page optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Technical monitoring and fixes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Monthly performance reporting
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/30">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Advanced Monthly</CardTitle>
                    <div className="text-2xl font-bold text-primary">$1,000<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Everything in Monthly Maintenance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Monthly link building campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      AI Content Engine management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Priority support and strategy calls
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real businesses. Real growth. Real ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Privada Cigar Club
                </CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">200% organic traffic increase in 45 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-destructive/10 rounded-lg">
                    <div className="text-2xl font-bold text-destructive">2,000</div>
                    <div className="text-sm text-muted-foreground">Before (monthly visits)</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">6,000+</div>
                    <div className="text-sm text-muted-foreground">After (monthly visits)</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Key wins: Technical fixes + content optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>ROI: $15,000 in additional revenue from organic traffic</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Super Cash For Houses
                </CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">100+ qualified leads per month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Challenge:</span>
                      <span className="text-right font-medium">Competing in saturated real estate market</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Solution:</span>
                      <span className="text-right font-medium">Local SEO + programmatic content strategy</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Result:</span>
                      <span className="text-right font-medium text-primary">Consistent lead flow without paid advertising</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Testimonial */}
          <Card className="card-professional border-primary/20 bg-primary/5 max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">
                  "In just 45 days, AIO Growth's SEO strategy drove a 200% increase in traffic for Privada Cigar Club — proof that real SEO works faster and smarter."
                </blockquote>
                <cite className="text-sm text-muted-foreground">Brian Descind, Privada Cigar Club</cite>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">SEO Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Psychology-Driven Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Content based on "Century of Self" consumer psychology principles and understanding how people actually make buying decisions.</p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">AI-First Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Generative Engine Optimization (GEO) for AI search and custom AI tools replacing expensive SaaS solutions.</p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">No monthly retainers or hidden fees. One-time investments with lasting results and clear deliverables.</p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Rapid Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Results in 30-45 days, not 6 months. Technical fixes that immediately impact performance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="gradient-text">Dominate</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Real Estate", description: "Lead generation and local market domination", href: "/industries/real-estate" },
              { name: "Healthcare", description: "Patient acquisition and local authority building", href: "/industries/healthcare" },
              { name: "Home Services", description: "Local SEO and emergency service optimization", href: "/industries/home-services" },
              { name: "E-commerce", description: "Product page optimization and category scaling", href: "/industries/ecommerce" },
              { name: "Professional Services", description: "Thought leadership and client acquisition", href: "/industries/professional-services" },
              { name: "Restaurants", description: "Local visibility and review optimization", href: "/industries/restaurants" }
            ].map((industry, index) => (
              <Card key={index} className="card-professional text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link 
                      to={industry.href} 
                      className="hover:text-primary transition-colors duration-300"
                    >
                      {industry.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
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
                How is this different from other SEO agencies?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most agencies sell you monthly retainers for basic tasks. We fix your fundamental SEO issues once, then give you the systems to scale. No ongoing fees for work that should be done right the first time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Why one-time pricing instead of monthly?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Because real SEO fixes compound over time. Technical optimizations, proper content strategy, and programmatic systems work for months or years without constant tweaking. We build assets, not dependencies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What if I need ongoing SEO support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our Growth SEO plan includes automation systems and templates that handle ongoing optimization. For businesses needing custom support, we offer project-based work rather than open-ended retainers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How quickly will I see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Technical fixes often show improvements within 2-4 weeks. Content and authority building takes 60-90 days for full impact. Unlike agencies promising "6-month minimum contracts," we deliver measurable results quickly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get your free SEO audit and see exactly what's holding your website back.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>No obligation. Join 100+ businesses that chose results over retainers</span>
            </div>
          </div>

          <Card className="card-professional max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get Your Free SEO Audit</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL *</Label>
                  <Input id="website" type="url" placeholder="https://yourdomain.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-type">Business Type/Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="home-services">Home Services</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="restaurant">Restaurant/Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenge">Current Biggest SEO Challenge</Label>
                  <Textarea id="challenge" placeholder="What's your biggest challenge with SEO right now?" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>

                <Button className="w-full btn-hero text-primary-foreground text-lg py-6">
                  Audit My Website
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

        <Footer />
      </div>

      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free SEO Audit"
        description="Let's discuss your SEO goals and see exactly what's holding your website back."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default SEOServices;