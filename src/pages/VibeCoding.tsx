import { Helmet } from 'react-helmet-async';
import { Code, Zap, CheckCircle, ArrowRight, Phone, Mail, Calendar, Star, TrendingUp, Brain, BarChart3, Users, DollarSign, Bot, Cpu, Database, Globe, Shield, MessageSquare, RefreshCw, Target, Cog, Workflow, LineChart, FileText, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';

const VibeCoding = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Custom Development Consultation');

  return (
    <>
      <Helmet>
        <title>Vibe Coding | Custom Marketing Tools & Automation | Replace Expensive SaaS</title>
        <meta name="description" content="Custom-coded marketing tools and automation systems. Replace expensive SaaS with tailored solutions. AI agents, lead capture, AEO/GEO automation, and marketing workflows." />
        <meta name="keywords" content="custom marketing tools, marketing automation, AI agents, lead capture systems, AEO automation, GEO optimization, custom software development, SaaS replacement" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Vibe Coding | Custom Marketing Tools & Automation" />
        <meta property="og:description" content="Custom-coded marketing tools and automation systems. Replace expensive SaaS with tailored solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Vibe Coding", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Code className="w-4 h-4 mr-2" />
                Custom Marketing Technology
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Replace Expensive <span className="gradient-text">SaaS</span> with Custom-Coded Solutions Tailored to Your Business
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Stop paying monthly fees for tools that don't fit your business. Own your marketing technology instead of renting it. 
                Custom solutions that grow with your business, combining technical expertise with deep marketing psychology knowledge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Custom Development Project');
                    openDialog();
                  }}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Custom Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Discovery Call - Custom Development');
                    openDialog();
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Discovery Call
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
                <div className="p-4">
                  <Bot className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">AI Agents</p>
                </div>
                <div className="p-4">
                  <Workflow className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Lead Automation</p>
                </div>
                <div className="p-4">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">AEO/GEO Tools</p>
                </div>
                <div className="p-4">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Own Your Tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stop Paying Monthly Fees for <span className="gradient-text">Generic Tools</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most SaaS tools force you to adapt your business to their limitations. Custom solutions adapt to your business, 
                giving you exactly what you need without the bloat or monthly fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional border-2 border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-destructive/20 text-destructive flex items-center justify-center">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-destructive">The SaaS Trap</CardTitle>
                      <CardDescription>What you're currently dealing with</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <div>
                        <p className="font-medium text-destructive">$500-2000/month</p>
                        <p className="text-sm text-muted-foreground">SEMrush, SearchAtlas, HubSpot, etc.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <div>
                        <p className="font-medium text-destructive">Generic features</p>
                        <p className="text-sm text-muted-foreground">One-size-fits-all doesn't fit anyone well</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <div>
                        <p className="font-medium text-destructive">No customization</p>
                        <p className="text-sm text-muted-foreground">Adapt your process to their limitations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <div>
                        <p className="font-medium text-destructive">Data lock-in</p>
                        <p className="text-sm text-muted-foreground">Your data trapped in their system</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">The Custom Solution</CardTitle>
                      <CardDescription>What you get instead</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-medium text-primary">One-time investment</p>
                        <p className="text-sm text-muted-foreground">Own it forever, no monthly fees</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-medium text-primary">Perfect fit</p>
                        <p className="text-sm text-muted-foreground">Built exactly for your business needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-medium text-primary">Full customization</p>
                        <p className="text-sm text-muted-foreground">Every feature designed for your workflow</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-medium text-primary">Your data, your control</p>
                        <p className="text-sm text-muted-foreground">Complete ownership and portability</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROI Comparison */}
            <Card className="card-professional">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">ROI Reality Check</CardTitle>
                <CardDescription>Compare 2-year costs: SaaS vs Custom Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-destructive/10 p-6 rounded-lg">
                      <h4 className="font-bold text-2xl text-destructive mb-2">$24,000+</h4>
                      <p className="text-sm text-muted-foreground">SEMrush + HubSpot + others<br />2-year subscription costs</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h4 className="font-bold text-2xl text-primary mb-2">$15,000</h4>
                      <p className="text-sm text-muted-foreground">Custom solution<br />One-time investment</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-500/10 p-6 rounded-lg">
                      <h4 className="font-bold text-2xl text-green-600 mb-2">$9,000+</h4>
                      <p className="text-sm text-muted-foreground">Saved in first 2 years<br />Plus ongoing savings</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Custom <span className="gradient-text">Marketing Technology</span> Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                AI-powered systems, automation workflows, and custom tools designed specifically for your business needs and growth objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">AI-Powered Lead Capture & Engagement</CardTitle>
                      <CardDescription>Automated prospect interaction and qualification</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Custom AI agents that engage prospects, qualify leads, and schedule appointments automatically. 
                    Built with your specific business knowledge and optimized for your ideal customer psychology.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Smart lead qualification and scoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">24/7 prospect engagement and follow-up</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Automated appointment scheduling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">CRM integration and data sync</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Workflow className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">Lead-to-Client Pipeline Automation</CardTitle>
                      <CardDescription>Complete capture → nurture → conversion workflow</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    End-to-end automation from first contact to client onboarding. Custom workflows that nurture prospects 
                    through your specific sales process with personalized touchpoints and psychology-driven messaging.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-channel lead capture integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Behavioral trigger-based nurturing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Automated proposal and contract generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Client onboarding automation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Own Your Marketing Technology?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Schedule your discovery call to explore custom solutions that replace expensive SaaS tools 
                and deliver exactly what your business needs.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Schedule Discovery Call
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a custom project quote and technical roadmap within 48 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    selectService('Custom Development Discovery Call');
                    openDialog();
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Discovery Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam. No sales pitches. Just a detailed technical proposal and honest project assessment.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Join 30+ businesses that replaced expensive SaaS with custom solutions
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        selectedService={selectedService}
      />
      
      <ProfessionalServiceSchema 
        serviceName="Custom Development Services"
        serviceDescription="Custom web development, automation tools, and technical solutions for marketing and business optimization"
        serviceUrl="https://joelhintonmarketing.com/services/vibe-coding"
        serviceType="Custom Development"
      />
    </>
  );
};

export default VibeCoding;