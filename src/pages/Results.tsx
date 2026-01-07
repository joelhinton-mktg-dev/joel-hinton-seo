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
import { businessTypes } from '@/types/contact-forms';
import { Link } from 'react-router-dom';

const Results = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Results Analysis Consultation');

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
      testimonial: "In just 45 days, AIO Growth's SEO strategy drove a 200% increase in traffic for Privada Cigar Club — proof that real SEO works faster and smarter than traditional agency approaches.",
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
      testimonial: "Thanks to AIO Growth and their team, we've not only ranked nationally for our industry's top SEO keywords, but they've also helped us generate over 100 leads per month through paid media.",
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
      testimonial: "AIO Growth's psychology-driven approach transformed our conversion funnel. We went from 2% to 8% trial-to-paid conversion in 90 days.",
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
      quote: "AIO Growth's approach to SEO is completely different from every other agency we worked with. Instead of promising vague 'ongoing optimization,' they fixed our fundamental issues once and gave us systems that keep working.",
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
      quote: "Most consultants give you a report and disappear. AIO Growth built us systems that run themselves and keep generating leads months after the project ended. That's the difference between expense and investment.",
      author: "Lisa K., Professional Services",
      result: "250% lead increase",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Client Results & Case Studies | Proven Marketing ROI | AIO Growth SEO</title>
        <meta name="description" content="Proven SEO and digital marketing results from AIO Growth SEO. Real case studies showing increased rankings, traffic, and revenue for Central Florida clients." />
        <meta name="keywords" content="marketing results, case studies, client testimonials, SEO results, growth marketing ROI, Volusia County, Flagler County" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Client Results & Case Studies | Proven Marketing ROI | AIO Growth SEO" />
        <meta property="og:description" content="Proven SEO and digital marketing results from AIO Growth SEO. Real case studies showing increased rankings, traffic, and revenue." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Results", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Real Results, Real Clients, <span className="gradient-text">Real Growth</span>
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                By the Numbers
              </h2>
            </div>
            
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
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Detailed case studies showing exactly how psychology-driven marketing delivers measurable business impact
              </p>
            </div>

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
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See exactly where your marketing is being limited and get a roadmap to systematic growth
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Get Your Results Documentation
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Every project includes our Results Documentation Promise - you'll see exactly what we accomplished and how it impacts your business.
                </p>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam. No sales pressure. Just proven strategies that deliver measurable results.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Join 50+ businesses across 15+ industries that chose proven results over promises
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="See Your Business Results"
        description="Get your free marketing analysis and see how our proven strategies can deliver measurable results for your business."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
      
      <ProfessionalServiceSchema 
        serviceName="Marketing Results & Case Studies"
        serviceDescription="Proven marketing results and case studies showcasing successful SEO, growth marketing, and digital marketing campaigns"
        serviceUrl="https://aiogrowthseo.com/results"
        serviceType="Marketing Results"
      />
    </>
  );
};

export default Results;