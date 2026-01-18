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
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { Link, useNavigate } from "react-router-dom";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { businessTypes } from '@/types/contact-forms';

const Industries = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Industry Analysis Consultation');
  const navigate = useNavigate();

  // Mapping industry IDs to their corresponding routes
  const industryRoutes = {
    'real-estate': '/industries/real-estate',
    'healthcare': '/industries/healthcare',
    'home-services': '/industries/home-services',
    'ecommerce': '/industries/ecommerce',
    'professional-services': '/industries/professional-services',
    'saas': '/industries/saas',
    'legal-services': '/industries/legal-services',
    'education': '/industries/education-training',
    'automotive': '/industries/automotive-services',
    'restaurants-hospitality': '/industries/restaurants-hospitality',
    'fitness': '/industries/fitness-wellness',
    'financial': '/industries/financial-services'
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
        <title>Industry Marketing Expertise | 15+ Verticals | Psychology-Driven Results | AIO Growth SEO</title>
        <meta name="description" content="Deep marketing expertise across 15+ industries with psychology-driven strategies. Real estate, healthcare, SaaS, legal services, and more. Proven results in every sector." />
        <meta name="keywords" content="industry marketing expertise, vertical marketing, real estate marketing, healthcare marketing, SaaS marketing, legal marketing, home services marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/industries" />
        
        <meta property="og:title" content="Industry Marketing Expertise | 15+ Verticals | Psychology-Driven Results" />
        <meta property="og:description" content="Deep marketing expertise across 15+ industries with psychology-driven strategies and proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/industries" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Target className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold text-blue-700">15+ Industry Verticals</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Industry-Specific <span className="gradient-text">Marketing Psychology</span> That Converts
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Deep expertise across 15+ verticals with proven results in each sector. Every industry has unique customer psychology, 
                buying behaviors, and conversion triggers. Generic marketing fails—specialized strategies dominate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Find Your Industry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Industry Consultation');
                    openDialog();
                  }}
                >
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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

                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        onClick={() => {
                          const route = industryRoutes[industry.id as keyof typeof industryRoutes];
                          if (route) {
                            navigate(route);
                          }
                        }}
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Learn More About {industry.name}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
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
              <CardContent className="text-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => openDialog()}
                >
                  <Target className="w-5 h-5 mr-2" />
                  Get My Industry Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam. No sales pressure. Just expert analysis of your industry's marketing opportunities.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving businesses across all major industries with specialized psychology-driven strategies
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Find Your Industry-Specific Strategy"
        description="Get a custom marketing analysis designed specifically for your industry's unique customer psychology and buying behaviors."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
      
      <ProfessionalServiceSchema 
        serviceName="Industry Marketing Services"
        serviceDescription="Specialized marketing strategies tailored to specific industries including healthcare, real estate, home services, and more"
        serviceUrl="https://aiogrowthseo.com/industries"
        serviceType="Industry Marketing"
      />
    </>
  );
};

export default Industries;