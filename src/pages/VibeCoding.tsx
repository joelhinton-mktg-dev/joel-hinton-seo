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
    projectDescription: z.string().min(20, "Please provide more details about your project (at least 20 characters)"),
    budget: z.string().min(1, "Please select your budget range"),
    selectedService: z.string().default("Custom Development Project")
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "Custom Development Project" }
  });

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (process.env.NODE_ENV === 'development') {
      console.log("Form submitted:", data);
    }
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
    setIsSubmitting(false);
  };

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
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vibe Coding | Custom Marketing Tools & Automation" />
        <meta name="twitter:description" content="Custom-coded marketing tools and automation systems. Replace expensive SaaS with tailored solutions." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Vibe Coding - Custom Marketing Tools & Automation",
            "description": "Custom software development for marketing automation, AI agents, and lead capture systems",
            "url": "https://joelhinton.com/vibe-coding",
            "provider": {
              "@type": "Person",
              "name": "Joel Hinton"
            },
            "serviceType": "Custom Software Development",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Custom AI Agents",
                "description": "Custom AI-powered client communication and automation systems"
              },
              {
                "@type": "Offer", 
                "name": "Lead Capture Systems",
                "description": "Custom lead generation and pipeline automation tools"
              },
              {
                "@type": "Offer",
                "name": "AEO/GEO Automation",
                "description": "Automated answer engine and knowledge panel optimization"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Vibe Coding", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Code className="w-4 h-4 mr-2" />
                Custom Marketing Technology
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Replace Expensive <span className="text-primary">SaaS</span> with <span className="gradient-text">Custom-Coded Solutions</span> Tailored to Your Business
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                Stop paying monthly fees for tools that don't fit your business. Own your marketing technology instead of renting it. 
                Custom solutions that grow with your business, combining technical expertise with deep marketing psychology knowledge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => {
                    setIsDialogOpen(true);
                    reset({ selectedService: "Custom Development Project" });
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
                    setIsDialogOpen(true);
                    reset({ selectedService: "Discovery Call - Custom Development" });
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
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stop Paying Monthly Fees for <span className="gradient-text">Generic Tools</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most SaaS tools force you to adapt your business to their limitations. Custom solutions adapt to your business, 
                giving you exactly what you need without the bloat or monthly fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
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
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <div>
                        <p className="font-medium text-destructive">Price increases</p>
                        <p className="text-sm text-muted-foreground">Locked into rising subscription costs</p>
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
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-medium text-primary">Grows with you</p>
                        <p className="text-sm text-muted-foreground">Evolve the tool as your business scales</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROI Comparison */}
            <Card className="card-professional max-w-4xl mx-auto">
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
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
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

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">Custom AEO/GEO Automation</CardTitle>
                      <CardDescription>Answer Engine & Knowledge Panel optimization</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Automated systems that monitor and optimize your presence across answer engines (ChatGPT, Perplexity) 
                    and knowledge panels (Google, Bing). Keep your business information current and competitive.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Auto-update Google Knowledge Panel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Answer engine monitoring and optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local citation management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Competitive intelligence tracking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">Custom AI Agents for Client Communication</CardTitle>
                      <CardDescription>Intelligent client support and engagement systems</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    AI-powered client communication agents trained on your business knowledge and optimized for your client relationships. 
                    Handle routine queries, provide updates, and maintain client engagement automatically.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">24/7 client support and FAQ handling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Personalized client check-ins and updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Intelligent escalation to human agents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-platform integration (email, chat, phone)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technical <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Full-stack development expertise combined with deep marketing knowledge. 
                Modern technologies, robust architecture, and psychology-driven user experience design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-professional text-center">
                <CardHeader>
                  <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>React & TypeScript</li>
                    <li>Next.js & Vite</li>
                    <li>Tailwind CSS</li>
                    <li>Progressive Web Apps</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Backend & APIs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Python & FastAPI</li>
                    <li>Node.js & Express</li>
                    <li>PostgreSQL & MongoDB</li>
                    <li>RESTful & GraphQL APIs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">AI & Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>OpenAI & Claude APIs</li>
                    <li>Custom AI Agents</li>
                    <li>Natural Language Processing</li>
                    <li>Predictive Analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>CRM Systems</li>
                    <li>Email Platforms</li>
                    <li>Analytics Tools</li>
                    <li>Payment Processors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Tools <span className="gradient-text">Built & Deployed</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real examples of custom marketing technology solutions that replaced expensive SaaS tools and delivered better results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">Custom SEO Audit Tool</CardTitle>
                      <CardDescription className="text-primary font-semibold">Replaced $299/month SEMrush subscription</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Built a comprehensive SEO audit tool specifically for a digital agency's client reporting needs. 
                      Includes technical SEO analysis, competitor research, and automated report generation.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-destructive/5 p-3 rounded-lg text-center">
                        <p className="text-2xl font-bold text-destructive">$3,588</p>
                        <p className="text-sm text-muted-foreground">Annual SaaS cost</p>
                      </div>
                      <div className="bg-primary/5 p-3 rounded-lg text-center">
                        <p className="text-2xl font-bold text-primary">$8,500</p>
                        <p className="text-sm text-muted-foreground">One-time build cost</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">ROI achieved in 2.4 years</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Custom white-label branding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Agency-specific reporting features</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">AI Lead Qualification System</CardTitle>
                      <CardDescription className="text-primary font-semibold">Replaced $450/month HubSpot + Calendly setup</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Intelligent lead capture and qualification system for a B2B consulting firm. 
                      AI-powered chat that qualifies prospects and automatically schedules qualified leads.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Before:</span>
                        <span className="font-medium">23% lead qualification rate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">After:</span>
                        <span className="font-medium text-primary">67% lead qualification rate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Show Rate:</span>
                        <span className="font-medium text-primary">89% (vs 45% before)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">3x improvement in lead quality</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Reduced no-show rate by 55%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">24/7 prospect engagement</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="card-professional max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Multi-Platform Marketing Dashboard</CardTitle>
                <CardDescription className="text-lg">Replaced $800/month in various SaaS tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">What it replaced:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>SearchAtlas:</span>
                        <span className="text-destructive">$129/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mailchimp Pro:</span>
                        <span className="text-destructive">$199/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hootsuite:</span>
                        <span className="text-destructive">$99/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Google Analytics 360:</span>
                        <span className="text-destructive">$150/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Various reporting tools:</span>
                        <span className="text-destructive">$223/month</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total monthly cost:</span>
                        <span className="text-destructive">$800/month</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Custom solution benefits:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">All data in one unified dashboard</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Custom KPIs and reporting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Automated client report generation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Real-time alerts and notifications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Mobile-optimized interface</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">White-label client access portals</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg text-center">
                      <p className="text-lg font-bold text-primary">$18,000 build cost</p>
                      <p className="text-sm text-muted-foreground">ROI in 1.9 years</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Development <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From discovery to deployment, a proven process that ensures your custom solution meets your exact needs and delivers measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">1. Discovery Call</CardTitle>
                  <Badge variant="secondary" className="mb-4">Week 1</Badge>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Understand your current tools and pain points</li>
                    <li>• Map your ideal workflow and requirements</li>
                    <li>• Define success metrics and ROI goals</li>
                    <li>• Provide detailed project scope and timeline</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">2. Design & Planning</CardTitle>
                  <Badge variant="secondary" className="mb-4">Week 2-3</Badge>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Create detailed technical specifications</li>
                    <li>• Design user interface mockups</li>
                    <li>• Plan database architecture and integrations</li>
                    <li>• Get your approval before development starts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">3. Development</CardTitle>
                  <Badge variant="secondary" className="mb-4">Week 4-8</Badge>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Build core functionality with regular updates</li>
                    <li>• Implement AI features and automations</li>
                    <li>• Set up integrations and data connections</li>
                    <li>• Weekly progress reviews and feedback</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">4. Launch & Support</CardTitle>
                  <Badge variant="secondary" className="mb-4">Week 9+</Badge>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Thorough testing and quality assurance</li>
                    <li>• Deploy to your hosting environment</li>
                    <li>• Train your team on the new system</li>
                    <li>• Ongoing support and optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing & Service Structure */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Investment & <span className="gradient-text">Service Structure</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quote-based pricing ensures you get exactly what you need without paying for features you don't use. 
                Transparent process from discovery to deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="card-professional text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Simple Tools</CardTitle>
                  <CardDescription>Basic automation and integrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary mb-2">$5K - $15K</p>
                    <p className="text-sm text-muted-foreground">One-time investment</p>
                  </div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li>• Lead capture forms and landing pages</li>
                    <li>• Basic CRM integrations</li>
                    <li>• Email automation workflows</li>
                    <li>• Simple reporting dashboards</li>
                    <li>• 30 days of support included</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center border-2 border-primary/50">
                <CardHeader>
                  <Badge variant="default" className="mb-2">Most Popular</Badge>
                  <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">AI-Powered Systems</CardTitle>
                  <CardDescription>Intelligent automation and custom AI agents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary mb-2">$15K - $35K</p>
                    <p className="text-sm text-muted-foreground">One-time investment</p>
                  </div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li>• Custom AI agents and chatbots</li>
                    <li>• Lead qualification and scoring</li>
                    <li>• Advanced automation workflows</li>
                    <li>• Multi-platform integrations</li>
                    <li>• 90 days of support included</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Enterprise Solutions</CardTitle>
                  <CardDescription>Complex systems and full platform development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary mb-2">$35K+</p>
                    <p className="text-sm text-muted-foreground">One-time investment</p>
                  </div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li>• Full marketing automation platforms</li>
                    <li>• Multi-tenant SaaS solutions</li>
                    <li>• Advanced AI and ML features</li>
                    <li>• Custom API development</li>
                    <li>• 6 months of support included</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="card-professional max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Ongoing Support Options</CardTitle>
                <CardDescription>Keep your custom solution optimized and evolving</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Maintenance & Updates
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Bug fixes and security updates</li>
                      <li>• API integration maintenance</li>
                      <li>• Performance optimization</li>
                      <li>• Backup and monitoring</li>
                    </ul>
                    <p className="mt-4 text-center">
                      <span className="text-2xl font-bold text-primary">$500-1500</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Growth & Enhancement
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• New feature development</li>
                      <li>• Additional integrations</li>
                      <li>• UI/UX improvements</li>
                      <li>• Advanced analytics and reporting</li>
                    </ul>
                    <p className="mt-4 text-center">
                      <span className="text-2xl font-bold text-primary">Quote-based</span>
                      <span className="text-sm text-muted-foreground block">Per enhancement</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
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
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700 mb-4">
                      Your project inquiry has been submitted successfully.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I'll review your requirements and get back to you within 48 hours with a detailed project proposal and quote.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          {...register("phone")}
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range *</Label>
                        <Select onValueChange={(value) => setValue("budget", value, { shouldValidate: true })}>
                          <SelectTrigger className={errors.budget ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                            <SelectItem value="15k-35k">$15K - $35K</SelectItem>
                            <SelectItem value="35k-75k">$35K - $75K</SelectItem>
                            <SelectItem value="75k+">$75K+</SelectItem>
                            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.budget && (
                          <p className="text-sm text-destructive">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select onValueChange={(value) => setValue("projectType", value, { shouldValidate: true })}>
                        <SelectTrigger className={errors.projectType ? "border-destructive" : ""}>
                          <SelectValue placeholder="What type of solution do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-agents">AI Agents & Chatbots</SelectItem>
                          <SelectItem value="lead-automation">Lead Capture & Automation</SelectItem>
                          <SelectItem value="aeo-geo">AEO/GEO Automation</SelectItem>
                          <SelectItem value="crm-integration">CRM Integration & Workflows</SelectItem>
                          <SelectItem value="reporting-dashboard">Custom Reporting Dashboard</SelectItem>
                          <SelectItem value="saas-replacement">Replace Existing SaaS Tool</SelectItem>
                          <SelectItem value="marketing-platform">Complete Marketing Platform</SelectItem>
                          <SelectItem value="other">Other Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.projectType && (
                        <p className="text-sm text-destructive">{errors.projectType.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">Project Description *</Label>
                      <Textarea
                        id="projectDescription"
                        placeholder="Describe your project in detail. What tools are you currently using? What problems are you trying to solve? What would success look like? The more detail you provide, the better I can understand your needs."
                        className={`min-h-[120px] ${errors.projectDescription ? "border-destructive" : ""}`}
                        {...register("projectDescription")}
                      />
                      {errors.projectDescription && (
                        <p className="text-sm text-destructive">{errors.projectDescription.message}</p>
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" />
                          Request Project Quote
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      No spam. No sales pitches. Just a detailed technical proposal and honest project assessment.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Development <span className="gradient-text">FAQs</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you determine the project cost and timeline?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  During the discovery call, I analyze your requirements, current tools, desired features, and complexity. I then provide a detailed project scope with fixed pricing and timeline. Simple integrations might take 2-4 weeks, while complex AI systems can take 8-12 weeks. You'll know exactly what to expect before we start.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do I own the code and can I modify it later?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, you own 100% of the custom code and can modify it however you want. I provide complete source code, documentation, and deployment instructions. You're never locked into my services, though most clients find ongoing support valuable as their needs evolve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What if my requirements change during development?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Minor changes are included in the project scope. For significant feature additions or changes, I'll provide a change order with additional cost and timeline impact. I prefer to be thorough during discovery to minimize changes, but I understand business needs evolve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do custom solutions compare to existing SaaS tools?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Custom solutions are built exactly for your workflow, eliminate monthly fees, provide complete data ownership, and can evolve with your business. SaaS tools are faster to deploy but force you to adapt to their limitations. For businesses spending $300+/month on tools that don't quite fit, custom solutions typically provide better ROI within 2-3 years.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What happens if something breaks or needs updates?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All projects include a support period (30-180 days depending on project size) for bug fixes and minor adjustments. After that, you can choose ongoing maintenance plans, handle updates yourself with the provided documentation, or contract updates as needed. Most clients find the peace of mind of ongoing support worth the investment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Can you integrate with my existing tools and systems?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, integration capabilities are a key advantage of custom development. I can connect to virtually any system with an API - CRMs, email platforms, analytics tools, databases, etc. If a direct integration isn't available, I can build custom connectors or data sync solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stop Renting. Start Owning.
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Custom marketing technology that fits your business perfectly, saves money long-term, and grows with your success.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-200 mb-8">
                <CheckCircle className="w-5 h-5" />
                <span>Join 30+ businesses that replaced expensive SaaS with custom solutions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                Call: (386) 555-0123
              </Button>
            </div>
            
            <p className="text-blue-200 mt-6 text-center">
              Free discovery calls • No obligation • Honest project assessment
            </p>
          </div>
        </section>

        <Footer />
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Get Started with Custom Development</DialogTitle>
            <DialogDescription>
              Let's discuss your project requirements and create a custom solution that perfectly fits your business needs.
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
              <p className="text-muted-foreground">I'll review your project requirements and send you a detailed proposal within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select onValueChange={(value) => setValue("budget", value, { shouldValidate: true })}>
                    <SelectTrigger className={errors.budget ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                      <SelectItem value="15k-35k">$15K - $35K</SelectItem>
                      <SelectItem value="35k-75k">$35K - $75K</SelectItem>
                      <SelectItem value="75k+">$75K+</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.budget && <p className="text-sm text-destructive">{errors.budget.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type *</Label>
                <Select onValueChange={(value) => setValue("projectType", value, { shouldValidate: true })}>
                  <SelectTrigger className={errors.projectType ? "border-destructive" : ""}>
                    <SelectValue placeholder="What type of solution do you need?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-agents">AI Agents & Chatbots</SelectItem>
                    <SelectItem value="lead-automation">Lead Capture & Automation</SelectItem>
                    <SelectItem value="aeo-geo">AEO/GEO Automation</SelectItem>
                    <SelectItem value="crm-integration">CRM Integration & Workflows</SelectItem>
                    <SelectItem value="reporting-dashboard">Custom Reporting Dashboard</SelectItem>
                    <SelectItem value="saas-replacement">Replace Existing SaaS Tool</SelectItem>
                    <SelectItem value="marketing-platform">Complete Marketing Platform</SelectItem>
                    <SelectItem value="other">Other Custom Solution</SelectItem>
                  </SelectContent>
                </Select>
                {errors.projectType && <p className="text-sm text-destructive">{errors.projectType.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="selectedService">Selected Service *</Label>
                <Input id="selectedService" readOnly {...register('selectedService')} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription">Project Description *</Label>
                <Textarea 
                  id="projectDescription" 
                  placeholder="Describe your project in detail. What tools are you currently using? What problems are you trying to solve? What would success look like?" 
                  className={`min-h-[120px] ${errors.projectDescription ? 'border-destructive' : ''}`} 
                  {...register('projectDescription')} 
                />
                {errors.projectDescription && <p className="text-sm text-destructive">{errors.projectDescription.message}</p>}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" variant="hero" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Get Started'}
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
        serviceName="Custom Development Services"
        serviceDescription="Custom web development, automation tools, and technical solutions for marketing and business optimization"
        serviceUrl="https://joelhintonmarketing.com/services/vibe-coding"
        serviceType="Custom Development"
      />
    </>
  );
};

export default VibeCoding;