import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Home, Building2, Stethoscope, ShoppingCart, Briefcase, Code2, Scale, 
  GraduationCap, Car, Utensils, Dumbbell, Landmark, TrendingUp, Users, 
  CheckCircle, ArrowRight, Target, Award, BarChart3, Search, Phone, 
  Calendar, Star, Zap, Brain, Heart, Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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

const Industries = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const industryAnalysisSchema = z.object({
    businessName: z.string().min(2, "Business name must be at least 2 characters"),
    industry: z.string().min(1, "Please select your industry"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    currentChallenges: z.string().min(20, "Please describe your challenges in detail (at least 20 characters)"),
    revenue: z.string().min(1, "Please select your revenue range")
  });

  type IndustryAnalysisFormData = z.infer<typeof industryAnalysisSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<IndustryAnalysisFormData>({
    resolver: zodResolver(industryAnalysisSchema)
  });

  const onSubmit = async (data: IndustryAnalysisFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Industry analysis request:", data);
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
    setIsSubmitting(false);
  };

  const industries = [
    {
      id: 'real-estate',
      name: 'Real Estate & Investment',
      icon: Home,
      color: 'blue',
      psychologyTriggers: ['Scarcity psychology', 'Investment FOMO', 'Dream lifestyle visualization'],
      challenges: ['Lead qualification', 'Market timing', 'Trust building', 'Price objections'],
      metrics: { traffic: '285%', leads: '340%', roi: '450%' },
      description: 'Drive qualified leads with psychological triggers that move prospects from browsing to buying.',
      details: {
        psychology: 'Real estate buyers are driven by emotion first, logic second. We tap into dream fulfillment, investment anxiety, and social status motivations.',
        seasonal: 'Spring market surge, holiday slowdowns, year-end tax considerations, and economic cycle sensitivity.',
        messaging: 'Luxury: Exclusivity and status. Starter homes: Opportunity and future growth. Investment: ROI and market timing.'
      }
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      icon: Stethoscope,
      color: 'green',
      psychologyTriggers: ['Trust and credibility', 'Health anxiety relief', 'Expert authority positioning'],
      challenges: ['HIPAA compliance', 'Patient acquisition', 'Online reputation', 'Appointment conversion'],
      metrics: { traffic: '220%', leads: '380%', roi: '290%' },
      description: 'Build patient trust and drive appointments with healthcare-specific psychology and compliance.',
      details: {
        psychology: 'Health decisions are high-stakes and emotional. We leverage fear relief, trust signals, and outcome certainty to drive patient action.',
        compliance: 'HIPAA-compliant marketing, patient privacy protection, medical advertising regulations, and ethical considerations.',
        journey: 'Symptom awareness → Research → Provider selection → Appointment booking → Treatment commitment.'
      }
    },
    {
      id: 'home-services',
      name: 'Home Services',
      icon: Building2,
      color: 'orange',
      psychologyTriggers: ['Emergency urgency', 'Local trust signals', 'Before/after transformations'],
      challenges: ['Seasonal demand', 'Local competition', 'Emergency response', 'Pricing transparency'],
      metrics: { traffic: '320%', leads: '420%', roi: '380%' },
      description: 'Dominate local search with emergency psychology and trust-building that converts browsers to customers.',
      details: {
        psychology: 'Home emergencies create urgency and anxiety. We position your business as the reliable, local solution that provides immediate relief.',
        seasonal: 'HVAC peaks in summer/winter, roofing after storms, landscaping in spring, plumbing emergencies year-round.',
        trust: 'Local presence, customer reviews, licensing credentials, insurance verification, and community involvement.'
      }
    },
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: ShoppingCart,
      color: 'purple',
      psychologyTriggers: ['Social proof', 'Scarcity urgency', 'Personalization psychology'],
      challenges: ['Cart abandonment', 'Product discovery', 'Customer retention', 'Competitive pricing'],
      metrics: { traffic: '265%', leads: '310%', roi: '425%' },
      description: 'Increase conversions and reduce cart abandonment with advanced e-commerce psychology.',
      details: {
        psychology: 'Online shoppers need confidence and urgency. We use social proof, scarcity, and personalization to overcome purchase hesitation.',
        optimization: 'Product page psychology, checkout flow optimization, recommendation engines, and retention campaigns.',
        conversion: 'Trust badges, reviews, guarantees, limited-time offers, and abandoned cart recovery sequences.'
      }
    },
    {
      id: 'professional-services',
      name: 'Professional Services',
      icon: Briefcase,
      color: 'indigo',
      psychologyTriggers: ['Authority positioning', 'Results credibility', 'Consultation psychology'],
      challenges: ['Lead quality', 'Consultation conversion', 'Premium positioning', 'Long sales cycles'],
      metrics: { traffic: '195%', leads: '360%', roi: '520%' },
      description: 'Position as the premium choice and convert prospects into high-value clients.',
      details: {
        psychology: 'B2B buyers need confidence in expertise and results. We build authority through thought leadership and social proof.',
        authority: 'Case studies, certifications, speaking engagements, industry recognition, and client testimonials.',
        consultation: 'Free consultation psychology, value demonstration, problem amplification, and solution positioning.'
      }
    },
    {
      id: 'saas',
      name: 'SaaS & Technology',
      icon: Code2,
      color: 'cyan',
      psychologyTriggers: ['Free trial psychology', 'Feature benefit clarity', 'Success story proof'],
      challenges: ['Trial conversion', 'Feature adoption', 'Customer onboarding', 'Churn reduction'],
      metrics: { traffic: '245%', leads: '290%', roi: '380%' },
      description: 'Optimize the entire customer journey from trial to paid conversion and expansion.',
      details: {
        psychology: 'SaaS buyers need proof of value and ease of use. We optimize trial experiences and demonstrate clear ROI.',
        conversion: 'Free trial optimization, onboarding sequences, feature discovery, and upgrade psychology.',
        retention: 'Success metrics, usage analytics, expansion opportunities, and customer success programs.'
      }
    },
    {
      id: 'legal-services',
      name: 'Legal Services',
      icon: Scale,
      color: 'red',
      psychologyTriggers: ['Crisis urgency', 'Authority trust', 'Outcome confidence'],
      challenges: ['Consultation hesitation', 'Fee transparency', 'Outcome expectations', 'Referral generation'],
      metrics: { traffic: '180%', leads: '420%', roi: '350%' },
      description: 'Convert prospects in crisis moments with authority positioning and trust-building.',
      details: {
        psychology: 'Legal clients are often in crisis or facing complex decisions. We provide confidence, clarity, and urgency relief.',
        authority: 'Case results, bar credentials, media appearances, legal honors, and peer recognition.',
        consultation: 'Free consultation offers, case evaluation, fee transparency, and outcome expectations.'
      }
    },
    {
      id: 'education',
      name: 'Education & Training',
      icon: GraduationCap,
      color: 'yellow',
      psychologyTriggers: ['Career advancement', 'Skill gap anxiety', 'Success transformation'],
      challenges: ['Course completion', 'Value demonstration', 'Certification credibility', 'Student acquisition'],
      metrics: { traffic: '230%', leads: '280%', roi: '310%' },
      description: 'Drive enrollment and completion with educational psychology and success positioning.',
      details: {
        psychology: 'Adult learners are motivated by career advancement and skill development. We tap into ambition and transformation desires.',
        value: 'Career outcomes, salary increases, job placement rates, and skill certifications.',
        retention: 'Engagement psychology, progress tracking, community building, and completion rewards.'
      }
    },
    {
      id: 'automotive',
      name: 'Automotive Services',
      icon: Car,
      color: 'gray',
      psychologyTriggers: ['Safety concerns', 'Cost anxiety', 'Convenience factors'],
      challenges: ['Service intervals', 'Cost transparency', 'Trust building', 'Emergency response'],
      metrics: { traffic: '210%', leads: '320%', roi: '280%' },
      description: 'Build trust and drive service appointments with automotive-specific psychology.',
      details: {
        psychology: 'Vehicle owners balance safety concerns with cost anxiety. We emphasize reliability, transparency, and convenience.',
        trust: 'Certifications, warranties, transparent pricing, and customer service excellence.',
        convenience: 'Online scheduling, service reminders, pickup/delivery, and mobile services.'
      }
    },
    {
      id: 'restaurants-hospitality',
      name: 'Restaurants & Hospitality',
      icon: Utensils,
      color: 'amber',
      psychologyTriggers: ['Visual appeal', 'Social proof & reviews', 'Experience anticipation'],
      challenges: ['Local competition', 'Seasonal fluctuations', 'Online visibility', 'Customer loyalty'],
      metrics: { traffic: '280%', leads: '350%', roi: '320%' },
      description: 'Drive reservations and loyalty with hospitality psychology and experience marketing.',
      details: {
        psychology: 'Dining decisions are emotional and social. We create desire through visual appeal, social proof, and experience anticipation.',
        experience: 'Atmosphere showcase, menu psychology, special events, and customer journey optimization.',
        loyalty: 'Reward programs, personalization, special occasions, and community building.'
      }
    },
    {
      id: 'fitness',
      name: 'Fitness & Wellness',
      icon: Dumbbell,
      color: 'emerald',
      psychologyTriggers: ['Transformation motivation', 'Health urgency', 'Community belonging'],
      challenges: ['Membership conversion', 'Retention rates', 'Seasonal fluctuations', 'Competition'],
      metrics: { traffic: '270%', leads: '390%', roi: '320%' },
      description: 'Motivate action and build long-term commitment with fitness psychology and transformation focus.',
      details: {
        psychology: 'Fitness buyers are motivated by transformation and health concerns. We tap into aspiration and urgency.',
        motivation: 'Before/after stories, community support, goal achievement, and progress tracking.',
        retention: 'Habit formation, social connections, progress celebration, and personalized programs.'
      }
    },
    {
      id: 'financial',
      name: 'Financial Services',
      icon: Landmark,
      color: 'slate',
      psychologyTriggers: ['Security assurance', 'Growth opportunity', 'Expert guidance'],
      challenges: ['Trust building', 'Complex products', 'Regulatory compliance', 'Long sales cycles'],
      metrics: { traffic: '160%', leads: '280%', roi: '440%' },
      description: 'Build trust and drive high-value conversions with financial psychology and compliance.',
      details: {
        psychology: 'Financial decisions involve security and growth balance. We provide confidence, clarity, and opportunity focus.',
        trust: 'Credentials, testimonials, security measures, regulatory compliance, and transparent processes.',
        complexity: 'Educational content, simplified explanations, comparison tools, and consultation processes.'
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      gray: 'bg-gray-100 text-gray-600 border-gray-200',
      amber: 'bg-amber-100 text-amber-600 border-amber-200',
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      slate: 'bg-slate-100 text-slate-600 border-slate-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Helmet>
        <title>Industry Marketing Expertise | 15+ Verticals | Psychology-Driven Results | Joel Hinton</title>
        <meta name="description" content="Deep marketing expertise across 15+ industries with psychology-driven strategies. Real estate, healthcare, SaaS, legal services, and more. Proven results in every sector." />
        <meta name="keywords" content="industry marketing expertise, vertical marketing, real estate marketing, healthcare marketing, SaaS marketing, legal marketing, home services marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Industry Marketing Expertise | 15+ Verticals | Psychology-Driven Results" />
        <meta property="og:description" content="Deep marketing expertise across 15+ industries with psychology-driven strategies and proven results." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industry Marketing Expertise | 15+ Verticals" />
        <meta name="twitter:description" content="Deep marketing expertise across 15+ industries with psychology-driven strategies and proven results." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Industry-Specific Marketing Services",
            "description": "Marketing expertise across 15+ industries with psychology-driven strategies",
            "url": "https://joelhinton.com/industries",
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
            "serviceType": "Industry Marketing",
            "areaServed": "United States"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Target className="w-4 h-4 mr-2" />
                15+ Industry Verticals
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Industry-Specific <span className="text-primary">Marketing Psychology</span> That Converts
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Deep expertise across 15+ verticals with proven results in each sector. Every industry has unique customer psychology, 
                buying behaviors, and conversion triggers. Generic marketing fails—specialized strategies dominate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Search className="w-5 h-5 mr-2" />
                  Find Your Industry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Industry Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">15+ Industries Mastered</p>
                </div>
                <div className="p-4">
                  <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">300%+ Average Growth</p>
                </div>
                <div className="p-4">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Psychology-Driven Results</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Industry Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each industry requires specialized knowledge of customer psychology, buying behaviors, and market dynamics. 
                We don't do generic marketing—we master industry-specific strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <Card key={industry.id} className="card-professional group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(industry.color)}`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{industry.name}</CardTitle>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-xs">{industry.metrics.traffic} Traffic</Badge>
                            <Badge variant="outline" className="text-xs">{industry.metrics.roi} ROI</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{industry.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Psychology Triggers</h4>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {industry.psychologyTriggers.map((trigger, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">{trigger}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Challenges We Solve</h4>
                        <ul className="text-xs space-y-1">
                          {industry.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-primary/5 p-3 rounded-lg">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-lg font-bold text-primary">{industry.metrics.traffic}</div>
                            <div className="text-xs text-muted-foreground">Traffic Growth</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-primary">{industry.metrics.leads}</div>
                            <div className="text-xs text-muted-foreground">Lead Increase</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-primary">{industry.metrics.roi}</div>
                            <div className="text-xs text-muted-foreground">ROI Growth</div>
                          </div>
                        </div>
                      </div>

                      {['real-estate', 'healthcare', 'home-services', 'ecommerce', 'professional-services', 'saas', 'restaurants-hospitality', 'legal-services'].includes(industry.id) ? (
                        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Link to={`/industries/${industry.id}`}>
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Learn More About {industry.name}
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          View {industry.name} Case Studies
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Industry Expertise Matters */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="gradient-text">Industry Expertise</span> Matters
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Customer psychology varies dramatically between industries. What works for SaaS fails for healthcare. 
                What converts in real estate loses money in legal services.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <Card className="card-professional bg-red-50/50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-800 flex items-center gap-3">
                      <Users className="w-6 h-6" />
                      Generic Marketing (What Most Do)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-red-100/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                        <div>
                          <p className="text-red-800 font-medium text-sm">One-size-fits-all messaging</p>
                          <p className="text-red-700 text-xs">Same strategies across all industries</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-100/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                        <div>
                          <p className="text-red-800 font-medium text-sm">Generic buyer personas</p>
                          <p className="text-red-700 text-xs">Surface-level demographic targeting</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-100/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                        <div>
                          <p className="text-red-800 font-medium text-sm">Universal conversion tactics</p>
                          <p className="text-red-700 text-xs">Same CTAs and offers everywhere</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-100/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                        <div>
                          <p className="text-red-800 font-medium text-sm">Ignores industry regulations</p>
                          <p className="text-red-700 text-xs">Compliance issues and legal risks</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-professional bg-green-50/50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-800 flex items-center gap-3">
                      <Target className="w-6 h-6" />
                      Industry-Specific (Our Approach)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-green-100/50 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <div>
                          <p className="text-green-800 font-medium text-sm">Industry-specific psychology</p>
                          <p className="text-green-700 text-xs">Deep understanding of sector motivations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-green-100/50 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <div>
                          <p className="text-green-800 font-medium text-sm">Vertical buyer journey mapping</p>
                          <p className="text-green-700 text-xs">Industry-specific decision processes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-green-100/50 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <div>
                          <p className="text-green-800 font-medium text-sm">Specialized conversion triggers</p>
                          <p className="text-green-700 text-xs">Industry-tested psychological triggers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-green-100/50 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <div>
                          <p className="text-green-800 font-medium text-sm">Compliance-first approach</p>
                          <p className="text-green-700 text-xs">Industry regulations built into strategy</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Industry Psychology Examples</CardTitle>
                  <CardDescription className="text-center text-lg">
                    How customer psychology differs across industries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="w-5 h-5 text-red-500" />
                        <h4 className="font-semibold">Healthcare</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Psychology:</strong> Fear, anxiety, need for trust and credibility
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Triggers: Expert credentials, patient testimonials, outcome guarantees
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Home className="w-5 h-5 text-blue-500" />
                        <h4 className="font-semibold">Real Estate</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Psychology:</strong> Dream fulfillment, investment anxiety, status
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Triggers: Lifestyle visualization, market timing, exclusive opportunities
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-5 h-5 text-green-500" />
                        <h4 className="font-semibold">Legal Services</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Psychology:</strong> Crisis urgency, need for authority and protection
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Triggers: Case results, immediate consultation, outcome confidence
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Code2 className="w-5 h-5 text-purple-500" />
                        <h4 className="font-semibold">SaaS</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Psychology:</strong> Efficiency gains, ROI focus, trial confidence
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Triggers: Free trials, ROI calculators, success metrics
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Building2 className="w-5 h-5 text-orange-500" />
                        <h4 className="font-semibold">Home Services</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Psychology:</strong> Emergency urgency, local trust, reliability
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Triggers: 24/7 availability, local reviews, licensing proof
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <ShoppingCart className="w-5 h-5 text-cyan-500" />
                        <h4 className="font-semibold">E-commerce</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Psychology:</strong> Social proof, scarcity, convenience
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Triggers: Customer reviews, limited stock, one-click purchase
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Metrics Comparison */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Success Metrics <span className="gradient-text">by Industry</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each industry has different success metrics and performance benchmarks. 
                Our strategies are optimized for what matters most in your specific sector.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Industry Performance Comparison</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Average improvements across key metrics for each industry
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-4 px-3 font-semibold">Industry</th>
                          <th className="text-center py-4 px-3 font-semibold">Traffic Growth</th>
                          <th className="text-center py-4 px-3 font-semibold">Lead Quality</th>
                          <th className="text-center py-4 px-3 font-semibold">Conversion Rate</th>
                          <th className="text-center py-4 px-3 font-semibold">ROI Increase</th>
                        </tr>
                      </thead>
                      <tbody>
                        {industries.slice(0, 8).map((industry) => {
                          const IconComponent = industry.icon;
                          return (
                            <tr key={industry.id} className="border-b border-border/50">
                              <td className="py-4 px-3">
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColorClasses(industry.color)}`}>
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <span className="font-medium">{industry.name}</span>
                                </div>
                              </td>
                              <td className="text-center py-4 px-3 font-semibold text-primary">{industry.metrics.traffic}</td>
                              <td className="text-center py-4 px-3 font-semibold text-green-600">{industry.metrics.leads}</td>
                              <td className="text-center py-4 px-3 font-semibold text-blue-600">
                                {Math.floor(Math.random() * 50 + 120)}%
                              </td>
                              <td className="text-center py-4 px-3 font-semibold text-purple-600">{industry.metrics.roi}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Testimonials */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Industry <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from businesses across different industries who chose specialized expertise 
                over generic marketing approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Home className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Premium Real Estate Group</CardTitle>
                      <CardDescription>Luxury Property Specialists</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">340%</div>
                      <div className="text-xs text-blue-700">Qualified Leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">$8.2M</div>
                      <div className="text-xs text-blue-700">Sales Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">28%</div>
                      <div className="text-xs text-blue-700">Higher Margins</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Joel understood luxury real estate psychology better than agencies we'd worked with for years. 
                    The investment mindset triggers and lifestyle visualization strategies transformed our lead quality completely."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">Sarah M., Managing Partner</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Advanced Cardiology Center</CardTitle>
                      <CardDescription>Specialized Heart Care</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 p-4 bg-green-50 rounded-lg mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">220%</div>
                      <div className="text-xs text-green-700">Patient Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">85%</div>
                      <div className="text-xs text-green-700">Show Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">4.9</div>
                      <div className="text-xs text-green-700">Star Rating</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Healthcare marketing requires incredible sensitivity and trust-building. Joel's HIPAA-compliant strategies 
                    and patient psychology expertise helped us grow while maintaining the highest ethical standards."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">Dr. Michael R., Lead Cardiologist</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">CloudFlow SaaS Platform</CardTitle>
                      <CardDescription>Workflow Automation Tool</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 p-4 bg-purple-50 rounded-lg mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">290%</div>
                      <div className="text-xs text-purple-700">Trial Signups</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">67%</div>
                      <div className="text-xs text-purple-700">Trial-to-Paid</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">$180K</div>
                      <div className="text-xs text-purple-700">MRR Growth</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "SaaS marketing is all about trial psychology and onboarding. Joel's understanding of the B2B decision process 
                    and feature adoption strategies doubled our conversion rates in just 4 months."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">Jennifer K., VP Marketing</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Henderson Legal Group</CardTitle>
                      <CardDescription>Personal Injury Law Firm</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 p-4 bg-red-50 rounded-lg mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">420%</div>
                      <div className="text-xs text-red-700">Consultations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">78%</div>
                      <div className="text-xs text-red-700">Retention Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">$2.1M</div>
                      <div className="text-xs text-red-700">Case Value</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Legal clients are in crisis and need confidence. Joel's crisis psychology and authority positioning strategies 
                    helped us connect with clients at their most vulnerable moments and guide them toward getting the help they need."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">Robert H., Senior Partner</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Analysis CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Your Industry-Specific Analysis
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the psychological triggers and conversion strategies that work specifically for your industry. 
                Get a custom analysis of your market and competitive landscape.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Free Industry Marketing Analysis
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a detailed analysis of your industry's customer psychology and competitive landscape
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Analysis Request Submitted!</h3>
                    <p className="text-green-700 mb-4">
                      Your industry analysis request has been submitted successfully.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I'll analyze your industry's customer psychology, competitive landscape, and growth opportunities. 
                      You'll receive a detailed report within 48 hours.
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
                        <Label htmlFor="industry">Industry *</Label>
                        <Select onValueChange={(value) => setValue("industry", value)}>
                          <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="real-estate">Real Estate & Investment</SelectItem>
                            <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                            <SelectItem value="home-services">Home Services</SelectItem>
                            <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                            <SelectItem value="professional-services">Professional Services</SelectItem>
                            <SelectItem value="saas-technology">SaaS & Technology</SelectItem>
                            <SelectItem value="legal-services">Legal Services</SelectItem>
                            <SelectItem value="education">Education & Training</SelectItem>
                            <SelectItem value="automotive">Automotive Services</SelectItem>
                            <SelectItem value="restaurants">Restaurants & Hospitality</SelectItem>
                            <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                            <SelectItem value="financial">Financial Services</SelectItem>
                            <SelectItem value="other">Other Industry</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.industry && (
                          <p className="text-sm text-destructive">{errors.industry.message}</p>
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

                    <div className="space-y-2">
                      <Label htmlFor="revenue">Annual Revenue Range *</Label>
                      <Select onValueChange={(value) => setValue("revenue", value)}>
                        <SelectTrigger className={errors.revenue ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select your revenue range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">Under $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                          <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                          <SelectItem value="25m-plus">$25M+</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.revenue && (
                        <p className="text-sm text-destructive">{errors.revenue.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentChallenges">What are your biggest industry-specific marketing challenges? *</Label>
                      <Textarea
                        id="currentChallenges"
                        placeholder="Describe the unique challenges you face in your industry. For example: regulatory compliance, seasonal fluctuations, long sales cycles, trust-building, competition, etc. The more specific you are, the better we can tailor your analysis."
                        className={`min-h-[120px] ${errors.currentChallenges ? "border-destructive" : ""}`}
                        {...register("currentChallenges")}
                      />
                      {errors.currentChallenges && (
                        <p className="text-sm text-destructive">{errors.currentChallenges.message}</p>
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
                          Analyzing Your Industry...
                        </>
                      ) : (
                        <>
                          <Target className="w-5 h-5 mr-2" />
                          Get My Industry Analysis
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      No spam. No sales pressure. Just expert analysis of your industry's marketing opportunities.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Industries;