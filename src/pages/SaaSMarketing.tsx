import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  Code2, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Shield, Rocket, UserCheck, 
  Clock, FileText, Building2, Eye, Zap, Brain
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


const SaaSMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('SaaS Marketing Consultation');
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
      </Helmet>
      <ProfessionalServiceSchema 
        serviceName="SaaS Marketing"
        serviceDescription="Psychology-driven SaaS marketing strategies that optimize trial conversion and customer success"
        serviceUrl="https://joelhintonmarketing.com/industries/saas"
        serviceType="SaaS Marketing"
        industryType="Software"
        areaServed="Florida, United States"
        hasOfferCatalog={true}
        provider={{
          name: "Joel Hinton Digital Marketing",
          telephone: "+1-386-555-0123",
          email: "joel@joelhintonmarketing.com",
          address: {
            streetAddress: "",
            addressLocality: "Daytona Beach",
            addressRegion: "FL",
            postalCode: "32114",
            addressCountry: "US"
          }
        }}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-6 py-8">
          <PageBreadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "SaaS Marketing", href: "/industries/saas" }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <Code2 className="w-4 h-4 mr-2" />
                SaaS Marketing Psychology
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Turn <span className="gradient-text">Trials Into Customers</span> with Psychology-Driven SaaS Marketing
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Stop losing trial users to churn. Our psychology-driven approach optimizes every step of your customer journey, 
                from first click to customer success, resulting in <strong className="text-primary">245% trial conversion increases</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get SaaS Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Free SaaS Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">245%</div>
                  <p className="text-muted-foreground">Trial Conversion Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">380%</div>
                  <p className="text-muted-foreground">ROI on Marketing Spend</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">67%</div>
                  <p className="text-muted-foreground">Churn Reduction</p>
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
                Your SaaS Marketing is <span className="text-destructive">Bleeding Money</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Every day you delay optimizing your funnel, you're losing qualified trials and letting competitors capture your market share.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Low Trial Conversion",
                  description: "Visitors sign up but never convert to paid plans",
                  impact: "Lost Revenue: $50,000+/month"
                },
                {
                  icon: Users,
                  title: "High Churn Rate",
                  description: "Customers cancel within the first 3 months",
                  impact: "Lifetime Value: -60%"
                },
                {
                  icon: BarChart3,
                  title: "Poor Onboarding",
                  description: "Users don't understand your product's value",
                  impact: "Activation Rate: <20%"
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
                Psychology-Driven SaaS Marketing That <span className="gradient-text">Actually Converts</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We don't just drive traffic. We engineer the entire customer psychology journey to maximize trial conversions and minimize churn.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: Brain,
                    title: "Trial Conversion Psychology",
                    description: "We analyze user behavior patterns to identify exactly where trials drop off and why, then implement psychological triggers that guide users toward activation."
                  },
                  {
                    icon: Rocket,
                    title: "Onboarding Optimization",
                    description: "Create frictionless onboarding experiences that demonstrate value within the first 5 minutes, using progressive disclosure and achievement psychology."
                  },
                  {
                    icon: Shield,
                    title: "Churn Prevention Systems",
                    description: "Proactive engagement campaigns that identify at-risk users and re-engage them before they churn, increasing lifetime value by 340%."
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
                    We guarantee a minimum 150% improvement in your trial-to-customer conversion rate within 90 days, or you don't pay.
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
              <h2 className="text-4xl font-bold mb-6">Complete SaaS Marketing Optimization</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end SaaS marketing services designed to maximize your customer acquisition cost (CAC) and customer lifetime value (CLV) ratio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Trial Conversion Optimization",
                  description: "Advanced funnel analysis and psychological optimization to turn more trials into paying customers.",
                  features: ["Conversion path analysis", "A/B testing implementation", "Behavioral trigger optimization"]
                },
                {
                  icon: Users,
                  title: "Customer Onboarding Design",
                  description: "Psychology-based onboarding flows that demonstrate value and drive activation within minutes.",
                  features: ["Progressive disclosure", "Achievement mechanics", "Value demonstration"]
                },
                {
                  icon: BarChart3,
                  title: "Churn Reduction Systems",
                  description: "Proactive engagement campaigns and retention strategies that keep customers longer.",
                  features: ["At-risk user identification", "Re-engagement campaigns", "Success milestone tracking"]
                },
                {
                  icon: Rocket,
                  title: "Product-Led Growth",
                  description: "Transform your product into a growth engine through strategic user experience optimization.",
                  features: ["Viral mechanics", "Referral systems", "Usage-based growth loops"]
                },
                {
                  icon: Award,
                  title: "Customer Success Integration",
                  description: "Align marketing and customer success for continuous value delivery and expansion revenue.",
                  features: ["Success metric tracking", "Expansion opportunity identification", "Customer advocacy programs"]
                },
                {
                  icon: Brain,
                  title: "Psychology-Based Messaging",
                  description: "Craft messaging that speaks to your users' psychological motivations and decision drivers.",
                  features: ["User psychology research", "Message optimization", "Emotional trigger implementation"]
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
                Ready to Turn Your Trials Into Revenue?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your free SaaS marketing audit and discover exactly how to optimize your conversion funnel for maximum growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get SaaS Marketing Audit
                </Button>
              </div>
              <p className="text-sm opacity-75">
                Free audit includes conversion analysis, churn assessment, and growth recommendations • No obligations
              </p>
            </div>
          </div>
        </section>

        <Footer />

        <ContactDialog 
          isOpen={isOpen}
          onClose={closeDialog}
          title="Get Your Free SaaS Marketing Audit"
          description="Let's discuss how we can optimize your trial conversion and reduce churn to accelerate your SaaS growth."
          defaultService={selectedService}
          businessTypes={businessTypes.saas}
        />
      </div>
    </>
  );
};

export default SaaSMarketing;