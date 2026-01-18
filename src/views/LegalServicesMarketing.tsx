import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  Scale, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Shield, Brain, UserCheck, 
  Clock, FileText, Building2, Eye, AlertTriangle, Gavel
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';


const LegalServicesMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Legal Services Marketing Audit');
  return (
    <>
      <Helmet>
        <title>Legal Services Marketing | Law Firm Marketing | Central Florida | AIO Growth SEO</title>
        <meta name="description" content="Legal marketing for attorneys and law firms in Volusia & Flagler Counties. Authority positioning and lead generation that converts prospects in crisis moments." />
        <meta name="keywords" content="legal marketing, law firm marketing, attorney marketing, legal services psychology, lawyer lead generation, legal authority positioning" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/industries/legal-services" />
        
        <meta property="og:title" content="Legal Services Marketing Psychology | Law Firm Marketing" />
        <meta property="og:description" content="Legal marketing strategies that convert prospects in crisis moments with authority positioning and proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/industries/legal-services" />
      </Helmet>
      <ProfessionalServiceSchema
        serviceName="Legal Services Marketing"
        serviceDescription="Authority-driven marketing strategies for law firms in Central Florida"
        serviceUrl="https://aiogrowthseo.com/industries/legal-services"
        serviceType="Legal Services Marketing"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-6 py-8">
          <PageBreadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Legal Services Marketing", href: "/industries/legal" }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <Scale className="w-4 h-4 mr-2" />
                Legal Services Marketing Psychology
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Legal Authority That <span className="gradient-text">Converts Crisis Into Clients</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Legal clients are often in crisis or facing complex decisions. Our psychology-driven strategies leverage 
                authority positioning, trust building, and urgency relief to convert prospects facing legal challenges, 
                resulting in <strong className="text-primary">420% more qualified leads</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Legal Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Free Legal Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">180%</div>
                  <p className="text-muted-foreground">Traffic Growth</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">420%</div>
                  <p className="text-muted-foreground">More Qualified Leads</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">350%</div>
                  <p className="text-muted-foreground">ROI Increase</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Your Legal Practice is <span className="text-destructive">Losing Authority</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Without strategic positioning, your firm competes on price instead of expertise, attracting low-quality clients while premium cases go to competitors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertTriangle,
                  title: "Consultation Hesitation",
                  description: "Prospects avoid calling due to cost concerns and intimidation",
                  impact: "Lost Revenue: $100,000+/month"
                },
                {
                  icon: Users,
                  title: "Low-Quality Leads",
                  description: "Attracting cases without merit or adequate resources",
                  impact: "Profit Margin: -40%"
                },
                {
                  icon: BarChart3,
                  title: "Price Competition",
                  description: "Competing on fees instead of expertise and results",
                  impact: "Case Value: -55%"
                }
              ].map((problem, index) => (
                <Card key={index} className="text-center p-6 border-destructive/20">
                  <problem.icon className="w-12 h-12 mx-auto mb-4 text-destructive" />
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground mb-4">{problem.description}</p>
                  <Badge variant="destructive">{problem.impact}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Legal Authority Marketing That <span className="gradient-text">Actually Converts</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We don't just drive traffic. We build unshakeable legal authority that attracts high-value clients who choose expertise over price.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: Brain,
                    title: "Crisis Psychology Marketing",
                    description: "Convert prospects facing legal emergencies using urgency relief and protective messaging that positions your firm as immediate solution."
                  },
                  {
                    icon: Shield,
                    title: "Authority Positioning",
                    description: "Build unshakeable credibility through credentials, case results, and expert recognition that makes clients choose you over competitors."
                  },
                  {
                    icon: Gavel,
                    title: "Outcome Confidence Systems",
                    description: "Showcase success rates and case results that build client confidence in positive outcomes, justifying premium fees."
                  }
                ].map((solution, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Card className="p-8">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-bold mb-4">Guaranteed Results</h3>
                  <p className="text-muted-foreground mb-6">
                    We guarantee a minimum 200% improvement in qualified consultation requests within 90 days, or you don't pay.
                  </p>
                  <Button size="lg" className="w-full" onClick={() => openDialog()}>
                    Get Your Guarantee
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Complete Legal Authority Marketing</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end legal marketing services designed to establish authority, attract premium clients, and maximize case value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Legal Authority Positioning",
                  description: "Build unshakeable credibility through credentials, case results, and expert recognition.",
                  features: ["Credentials showcase", "Case result displays", "Media recognition", "Expert positioning"]
                },
                {
                  icon: AlertTriangle,
                  title: "Crisis Conversion Marketing",
                  description: "Convert prospects in legal emergencies using psychology-driven urgency and relief messaging.",
                  features: ["Emergency landing pages", "Crisis psychology", "Immediate response", "Protective messaging"]
                },
                {
                  icon: Users,
                  title: "Consultation Optimization",
                  description: "Remove barriers and optimize the consultation process to convert prospects into clients.",
                  features: ["Free consultation offers", "Process explanation", "Barrier removal", "Follow-up systems"]
                },
                {
                  icon: FileText,
                  title: "Fee Transparency Systems",
                  description: "Address cost anxiety with clear value propositions and transparent fee structures.",
                  features: ["Fee structure clarity", "Value demonstration", "Payment options", "Investment justification"]
                },
                {
                  icon: Award,
                  title: "Outcome Confidence Building",
                  description: "Showcase success rates and results that build client confidence in positive outcomes.",
                  features: ["Success statistics", "Case result showcase", "Client testimonials", "Process transparency"]
                },
                {
                  icon: Brain,
                  title: "Legal Psychology Messaging",
                  description: "Craft messaging that addresses legal client psychology and decision-making patterns.",
                  features: ["Psychology research", "Message optimization", "Decision triggers", "Trust building"]
                }
              ].map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4" onClick={() => selectService(service.title)}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Become the Legal Authority?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your free legal marketing audit and discover exactly how to position your firm as the trusted expert clients choose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Legal Marketing Audit
                </Button>
              </div>
              <p className="text-sm opacity-75">
                Free audit includes authority analysis, consultation optimization, and growth recommendations • No obligations
              </p>
            </div>
          </div>
        </section>

        <Footer />

        <ContactDialog 
          isOpen={isOpen}
          onClose={closeDialog}
          title="Get Your Free Legal Marketing Audit"
          description="Let's discuss how we can build your legal authority and convert more consultations into clients."
          defaultService={selectedService}
          businessTypes={businessTypes.legal}
        />
      </div>
    </>
  );
};

export default LegalServicesMarketing;