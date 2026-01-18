import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  DollarSign, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Shield, Lock, UserCheck, 
  Clock, FileText, Building2, Eye, AlertTriangle
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


const FinancialServicesMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Financial Marketing Audit');
  return (
    <>
      <Helmet>
        <title>Financial Services Marketing | Investment & Insurance Marketing | Central Florida | AIO Growth SEO</title>
        <meta name="description" content="Financial marketing for advisors, wealth managers, and insurance agencies in Volusia & Flagler Counties. Security-focused strategies that build trust and drive qualified leads." />
        <meta name="keywords" content="financial services marketing, financial advisor marketing, investment marketing, insurance marketing, financial psychology, wealth management marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/industries/financial-services" />
        
        <meta property="og:title" content="Financial Services Marketing Psychology | Investment & Insurance Marketing" />
        <meta property="og:description" content="Security-focused marketing strategies that build trust and drive qualified financial service leads." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/industries/financial-services" />
      </Helmet>
      <ProfessionalServiceSchema 
        serviceName="Financial Services Marketing"
        serviceDescription="Security-focused marketing strategies for financial advisors and institutions that build trust and drive qualified leads"
        serviceUrl="https://aiogrowthseo.com/industries/financial-services"
        serviceType="Financial Marketing"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Financial Services", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <DollarSign className="w-4 h-4 mr-2" />
                Financial Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Financial Services Marketing <span className="text-primary">Psychology</span> That Builds Trust & Security
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Financial decisions involve security concerns, trust requirements, and long-term planning anxiety. Our compliant 
                marketing strategies position your firm as the trustworthy choice through credibility building, security emphasis, 
                and outcome demonstration. Combined with strategic <Link to="/local-seo" className="text-primary hover:underline">local SEO</Link> and
                <Link to="/local-lead-generation" className="text-primary hover:underline">local lead generation</Link>, we attract qualified prospects ready to invest in their financial future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Financial Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Financial Strategy Call
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">275% Qualified Leads</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">385% More Consultations</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">450% ROI Increase</p>
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
                Financial <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Financial decisions are driven by security needs, trust requirements, and future planning concerns. 
                We position your services as the secure foundation for financial confidence and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Security & Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Financial clients need absolute confidence in security, credentials, and fiduciary responsibility before trusting their money.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Credential & certification display</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Security protocol transparency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Fiduciary responsibility emphasis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Client testimonial programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Results & Performance Proof</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Financial clients need evidence of successful outcomes and portfolio performance before committing to advisory relationships.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Portfolio performance data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Client success case studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Awards & recognition showcase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Transparent fee structures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Financial Planning Urgency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Create appropriate urgency around retirement planning, tax optimization, and wealth protection without being pushy.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Retirement readiness assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Tax deadline campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Market opportunity timing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Educational urgency messaging</span>
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
                Financial Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Financial services face unique challenges from regulatory compliance to trust building. 
                We've developed specialized solutions for the financial industry's biggest obstacles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Regulatory Compliance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Navigate complex financial regulations while creating effective marketing that builds trust and drives qualified leads.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Compliance-first content strategies</li>
                      <li>• Regulatory-approved messaging</li>
                      <li>• Disclaimer integration</li>
                      <li>• Professional review processes</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 100% compliance with increased conversions</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Trust & Credibility Building</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Overcome financial advisor skepticism through transparent practices, credential showcasing, and client success demonstration.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Professional designation prominence</li>
                      <li>• Transparent fee structures</li>
                      <li>• Client success stories</li>
                      <li>• Third-party validation</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% improvement in consultation requests</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Lead Quality & Qualification</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Attract high-net-worth prospects with investment capacity rather than casual inquiries looking for free advice.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Wealth-qualified lead magnets</li>
                      <li>• Investment minimums messaging</li>
                      <li>• Sophisticated investor targeting</li>
                      <li>• Premium service positioning</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 75% increase in qualified leads</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Complex Service Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Simplify complex financial concepts and services so prospects understand value and feel confident making decisions.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Educational content marketing</li>
                      <li>• Complex concept simplification</li>
                      <li>• Video explanation series</li>
                      <li>• Interactive planning tools</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 60% improvement in consultation conversion</div>
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
                Proven <span className="gradient-text">Financial Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our financial services marketing consistently delivers measurable improvements in lead quality, 
                client acquisition, and assets under management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">275%</div>
                  <div className="text-lg font-semibold mb-2">Qualified Leads</div>
                  <p className="text-sm text-muted-foreground">High-value prospect inquiries</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">385%</div>
                  <div className="text-lg font-semibold mb-2">Consultations</div>
                  <p className="text-sm text-muted-foreground">Qualified consultation requests</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">450%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Marketing return on investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                  <div className="text-lg font-semibold mb-2">Client Retention</div>
                  <p className="text-sm text-muted-foreground">Long-term client relationships</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Recommendations */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Financial Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the financial marketing package that fits your practice size and client goals. 
                All packages include compliance expertise and trust-building psychology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Advisor Foundation</CardTitle>
                  <CardDescription>Perfect for independent financial advisors</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$2,597<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Compliance-focused content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Trust-building campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Educational content marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local client targeting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Credential showcasing</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => {
                    selectService("Advisor Foundation - $2,597/mo");
                  }}>
                    Build Advisory Practice
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Wealth Authority</CardTitle>
                  <CardDescription>For established financial practices</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$4,297<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Advisor Foundation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">High-net-worth targeting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Thought leadership content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Referral network building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced lead nurturing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Performance reporting</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => {
                    selectService("Wealth Authority - $4,297/mo");
                  }}>
                    Build Wealth Authority
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Financial Empire</CardTitle>
                  <CardDescription>For large financial institutions</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$7,297<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Wealth Authority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-office coordination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Enterprise lead systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Regional brand building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Custom integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Priority support</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => {
                    selectService("Financial Empire - $7,297/mo");
                  }}>
                    Scale Financial Empire
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Financial Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you ensure financial marketing compliance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We follow strict regulatory guidelines including FINRA, SEC, and state insurance regulations. All content is reviewed for compliance, disclaimers are properly integrated, and we avoid prohibited claims or guarantees. We also provide training on compliant marketing practices and maintain current knowledge of regulatory changes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What types of financial services do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We work with financial advisors, wealth managers, insurance agents, accounting firms, tax preparers, mortgage brokers, and financial planning practices. Each requires different trust-building approaches - wealth management emphasizes performance and security, while insurance focuses on protection and peace of mind.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you improve lead quality for financial services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We create content and campaigns that attract prospects with investment capacity and serious financial planning needs. This includes minimum investment messaging, sophisticated investor targeting, educational content that demonstrates expertise, and lead qualification systems that filter out unqualified prospects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can financial services see marketing results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Financial services typically see trust-building results within 60-90 days as content gains traction. Lead generation improvements usually occur within 3-6 months, while long-term authority and referral network development can take 6-12 months. We track consultation requests, lead quality scores, and assets under management monthly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-green-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Attract High-Value Financial Clients?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop competing on price and start winning with trust. Get financial services marketing 
                that builds credibility, attracts qualified prospects, and grows your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Financial Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-blue-200 text-center">
                Trust building • Compliance expertise • Qualified lead generation
              </p>
            </div>
          </div>
        </section>

        <Footer />

        <ContactDialog 
          isOpen={isOpen}
          onClose={closeDialog}
          title="Get Your Free Financial Marketing Audit"
          description="Let's discuss how we can help build trust and attract qualified financial clients."
          defaultService={selectedService}
          businessTypes={businessTypes.financial}
        />
      </div>
    </>
  );
};

export default FinancialServicesMarketing;