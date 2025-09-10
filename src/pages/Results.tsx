import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  ArrowUp,
  CheckCircle,
  Star,
  BarChart3,
  Trophy,
  Building,
  Globe,
  Zap,
  Calendar,
  Phone,
  ArrowRight
} from "lucide-react";
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from 'react-router-dom';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("SEO Audit")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Results = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Results Analysis Consultation');

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "SEO Audit" }
  });

  const onSubmitForm = async (data: ContactFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Results contact form submitted:", data);
    }
    setSubmitSuccess(true);
    reset();
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsDialogOpen(false);
    }, 2000);
    setIsSubmitting(false);
  };

  const keyMetrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "200%+",
      label: "Average Traffic Increase",
      description: "Within 90 days"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "150+",
      label: "Leads Per Month",
      description: "Generated for clients"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$180K+",
      label: "Revenue Growth",
      description: "Additional annual revenue"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "50+",
      label: "Successful Projects",
      description: "Across 15+ industries"
    }
  ];

  const caseStudies = [
    {
      client: "Privada Cigar Club",
      industry: "E-commerce",
      challenge: "New website with minimal organic visibility in competitive luxury market",
      service: "Growth SEO Plan",
      investment: "$1,000 one-time",
      timeline: "45 days",
      results: [
        "200% increase in organic traffic",
        "350% improvement in keyword rankings",
        "$15,000 additional monthly revenue",
        "40% increase in subscription conversions"
      ],
      testimonial: "In just 45 days, Joel's SEO strategy drove a 200% increase in traffic for Privada Cigar Club — proof that real SEO works faster and smarter than traditional agency approaches.",
      author: "Brian Descind, Founder",
      keyWin: "Technical fixes create immediate improvements"
    },
    {
      client: "Super Cash For Houses",
      industry: "Real Estate Investment",
      challenge: "Competing in saturated 'we buy houses' market with limited differentiation",
      service: "Growth SEO Plan + Paid Media Management",
      investment: "$1,000 + $500/month",
      timeline: "Ongoing",
      results: [
        "150+ qualified leads per month",
        "$33 average cost per lead",
        "Geographic expansion to 3 new markets",
        "400% ROI on advertising spend"
      ],
      testimonial: "Thanks to Joel and his team, we've not only ranked nationally for our industry's top SEO keywords, but they've also helped us generate over 100 leads per month through paid media.",
      author: "Juanita Couch, Super Cash For Houses",
      keyWin: "Eliminated dependence on expensive lead generation services"
    },
    {
      client: "B2B SaaS Company",
      industry: "Technology",
      challenge: "High traffic but poor trial-to-paid conversion (2%)",
      service: "Full Growth Marketing System",
      investment: "$2,500 one-time",
      timeline: "90 days",
      results: [
        "4x improvement in trial-to-paid conversion",
        "35% reduction in customer churn",
        "$240,000 additional annual revenue",
        "Systematic growth processes established"
      ],
      testimonial: "Joel's psychology-driven approach transformed our conversion funnel. We went from 2% to 8% trial-to-paid conversion in 90 days.",
      author: "SaaS Founder",
      keyWin: "Industry-specific psychological triggers in automation"
    }
  ];

  const industryResults = [
    {
      industry: "Real Estate & Investment",
      icon: <Building className="w-6 h-6" />,
      results: "150+ leads/month, $30-40 cost per lead",
      expansion: "Clients expanding to 2-5 new markets",
      keyWins: "Local SEO domination, psychology-driven seller messaging"
    },
    {
      industry: "Healthcare & Medical",
      icon: <Target className="w-6 h-6" />,
      results: "200%+ increase in patient inquiries",
      expansion: "HIPAA-compliant lead generation",
      keyWins: "Local authority building, trust-based content marketing"
    },
    {
      industry: "Home Services",
      icon: <Zap className="w-6 h-6" />,
      results: "300%+ increase in service calls",
      expansion: "Emergency service positioning",
      keyWins: "Seasonal optimization, local market domination"
    },
    {
      industry: "E-commerce & Retail",
      icon: <Globe className="w-6 h-6" />,
      results: "180% increase in organic revenue",
      expansion: "40% AOV improvement",
      keyWins: "Conversion psychology, systematic testing frameworks"
    }
  ];

  const testimonials = [
    {
      quote: "Joel's approach to SEO is completely different from every other agency we worked with. Instead of promising vague 'ongoing optimization,' he fixed our fundamental issues once and gave us systems that keep working.",
      author: "Sarah M., E-commerce Director",
      result: "180% revenue growth",
      rating: 5
    },
    {
      quote: "The flat-fee paid advertising management saved us thousands while delivering better results than our previous percentage-based agency. We finally have transparent reporting and campaigns that actually focus on our business goals.",
      author: "Mike R., SaaS Founder",
      result: "400% ROAS improvement",
      rating: 5
    },
    {
      quote: "Most consultants give you a report and disappear. Joel built us systems that run themselves and keep generating leads months after the project ended. That's the difference between expense and investment.",
      author: "Lisa K., Professional Services",
      result: "250% lead increase",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Client Results & Case Studies | Proven Marketing ROI | Joel Hinton</title>
        <meta name="description" content="Proven SEO and digital marketing results from Joel Hinton. Real case studies showing increased rankings, traffic, and revenue for Florida clients." />
        <meta name="keywords" content="marketing results, case studies, client testimonials, SEO results, growth marketing ROI" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Client Results & Case Studies | Proven Marketing ROI | Joel Hinton" />
        <meta property="og:description" content="Proven SEO and digital marketing results from Joel Hinton. Real case studies showing increased rankings, traffic, and revenue." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Client Results & Case Studies | Proven Marketing ROI" />
        <meta name="twitter:description" content="Proven SEO and digital marketing results from Joel Hinton. Real case studies showing increased rankings, traffic, and revenue." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Client Results & Case Studies",
            "description": "Real case studies and proven results from Joel Hinton's marketing campaigns",
            "provider": {
              "@type": "Person",
              "name": "Joel Hinton",
              "jobTitle": "Digital Marketing Consultant"
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Digital Marketing Results",
              "description": "Proven marketing results and client case studies"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <PageBreadcrumb 
        items={[
          { label: "Results", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Real Results, Real Clients, <span className="text-primary">Real Growth</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              See exactly how psychology-driven marketing and transparent pricing deliver measurable business impact for companies across industries.
            </p>
            
            <p className="text-lg text-foreground/80 mb-12">
              Don't take our word for it. Here's what happens when you combine consumer psychology with technical expertise and transparent pricing.
            </p>

            {/* Key Metrics Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="bg-card/50 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-3 flex justify-center">
                      {metric.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              By the Numbers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <BarChart3 className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Performance Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Clients Served</span>
                      <span className="font-semibold text-foreground">50+ businesses</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Average Traffic Increase</span>
                      <span className="font-semibold text-foreground">180% within 90 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Lead Generation Improvement</span>
                      <span className="font-semibold text-foreground">140% average increase</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Ad Spend Managed</span>
                      <span className="font-semibold text-foreground">$2M+ transparently</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <Trophy className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Success Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Client Retention Rate</span>
                      <span className="font-semibold text-foreground">85% choose additional services</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Average ROI</span>
                      <span className="font-semibold text-foreground">400%+ return on investment</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Industries Served</span>
                      <span className="font-semibold text-foreground">15+ verticals</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Project Success Rate</span>
                      <span className="font-semibold text-foreground">95%+ client satisfaction</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <Link to="/industries/real-estate">
                <Badge variant="secondary" className="px-4 py-2 hover:bg-secondary/80 transition-colors cursor-pointer">
                  Real Estate
                </Badge>
              </Link>
              <span className="text-muted-foreground self-center">•</span>
              <Link to="/industries/healthcare">
                <Badge variant="secondary" className="px-4 py-2 hover:bg-secondary/80 transition-colors cursor-pointer">
                  Healthcare
                </Badge>
              </Link>
              <span className="text-muted-foreground self-center">•</span>
              <Link to="/industries/home-services">
                <Badge variant="secondary" className="px-4 py-2 hover:bg-secondary/80 transition-colors cursor-pointer">
                  Home Services
                </Badge>
              </Link>
              <span className="text-muted-foreground self-center">•</span>
              <Link to="/industries/ecommerce">
                <Badge variant="secondary" className="px-4 py-2 hover:bg-secondary/80 transition-colors cursor-pointer">
                  E-commerce
                </Badge>
              </Link>
              <span className="text-muted-foreground self-center">•</span>
              <Link to="/industries/professional-services">
                <Badge variant="secondary" className="px-4 py-2 hover:bg-secondary/80 transition-colors cursor-pointer">
                  Professional Services
                </Badge>
              </Link>
              <span className="text-muted-foreground self-center">•</span>
              <Link to="/industries/saas">
                <Badge variant="secondary" className="px-4 py-2 hover:bg-secondary/80 transition-colors cursor-pointer">
                  SaaS
                </Badge>
              </Link>
              <span className="text-muted-foreground self-center">•</span>
              <Link to="/industries/legal-services">
                <Badge variant="secondary" className="px-4 py-2 hover:bg-secondary/80 transition-colors cursor-pointer">
                  Legal
                </Badge>
              </Link>
            </div>
</div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              Featured Success Stories
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Detailed case studies showing exactly how psychology-driven marketing delivers measurable business impact
            </p>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Client Info */}
                      <div className="bg-primary/5 p-8">
                        <Badge className="mb-4">{study.industry}</Badge>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {study.client}
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium text-foreground">Challenge:</span>
                            <p className="text-muted-foreground mt-1">{study.challenge}</p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Service:</span>
                            <p className="text-muted-foreground mt-1">{study.service}</p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Investment:</span>
                            <p className="text-muted-foreground mt-1">{study.investment}</p>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Timeline:</span>
                            <p className="text-muted-foreground mt-1">{study.timeline}</p>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="p-8">
                        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                          <ArrowUp className="w-5 h-5 text-primary mr-2" />
                          Results Achieved
                        </h4>
                        <div className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                          <p className="text-sm font-medium text-primary mb-1">Key Innovation:</p>
                          <p className="text-sm text-muted-foreground">{study.keyWin}</p>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="p-8 bg-muted/30">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-primary fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-foreground mb-4 italic">
                          "{study.testimonial}"
                        </blockquote>
                        <p className="text-sm font-medium text-muted-foreground">
                          — {study.author}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Results */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Industry-Specific Results
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {industryResults.map((industry, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-primary mr-3">
                        {industry.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {industry.industry}
                      </h3>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Average Results: </span>
                        <span className="text-muted-foreground">{industry.results}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Expansion: </span>
                        <span className="text-muted-foreground">{industry.expansion}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Key Wins: </span>
                        <span className="text-muted-foreground">{industry.keyWins}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Return on Investment Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                    Traditional Agency Model
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monthly Retainer:</span>
                      <span className="text-foreground">$3,000 × 12 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Annual Cost:</span>
                      <span className="font-bold text-foreground">$36,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Results:</span>
                      <span className="text-muted-foreground">Often minimal after "honeymoon"</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ownership:</span>
                      <span className="text-destructive">Nothing (work stops when you leave)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/20 border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                    Our Approach
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Growth SEO Plan:</span>
                      <span className="text-foreground">$1,000 (one-time)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">12-Month Results:</span>
                      <span className="font-bold text-primary">$48,000 additional revenue</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="font-bold text-primary">4,800% return</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ownership:</span>
                      <span className="text-primary">Complete - systems work indefinitely</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-lg p-6 inline-block">
                <p className="text-2xl font-bold text-primary mb-2">
                  You Save: $35,000+ in Year 1
                </p>
                <p className="text-muted-foreground">
                  Plus you own everything we build (agencies take it when you leave)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              What Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="text-sm">
                      <p className="font-medium text-muted-foreground mb-1">
                        — {testimonial.author}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.result}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Join Our Success Stories?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              See exactly where your marketing is being limited and get a roadmap to systematic growth
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Start with an Audit</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  See exactly where you're losing opportunities
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Schedule Audit
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Strategy Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discuss your specific situation and goals
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Book Call
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Choose a Plan</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Select the solution that fits your goals
                </p>
                <Link to="/services">
                  <Button variant="outline" size="sm" className="w-full">
                    View Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

                <Link to="/contact">
                <Button variant="hero" size="lg" className="mb-4">
                  Get Your Results Documentation
                </Button>
                </Link>
            
            <p className="text-sm text-muted-foreground">
              Every project includes our Results Documentation Promise - you'll see exactly what we accomplished and how it impacts your business.
            </p>
          </div>
        </div>
      </section>
        <Footer />
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Schedule Your SEO Audit</DialogTitle>
            <DialogDescription>
              Get a comprehensive analysis of your current SEO performance and a roadmap for improvement.
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
              <p className="text-muted-foreground">I'll review your information and reach out within 24 hours to schedule your SEO audit.</p>
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
                <Input id="selectedService" value="SEO Audit" readOnly {...register('selectedService')} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marketingChallenge">Tell us about your marketing challenge *</Label>
                <Textarea 
                  id="marketingChallenge" 
                  placeholder="What's your website URL? What are your current SEO challenges? What results are you looking to achieve?" 
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
                  {isSubmitting ? 'Submitting...' : 'Schedule SEO Audit'}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        selectedService={selectedService}
      />
      
      <ProfessionalServiceSchema 
        serviceName="Marketing Results & Case Studies"
        serviceDescription="Proven marketing results and case studies showcasing successful SEO, growth marketing, and digital marketing campaigns"
        serviceUrl="https://joelhintonmarketing.com/results"
        serviceType="Marketing Results"
      />
    </>
  );
};

export default Results;