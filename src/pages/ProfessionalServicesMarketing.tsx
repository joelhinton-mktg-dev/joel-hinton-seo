import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Briefcase, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Zap, Clock, Brain, 
  Shield, FileText, Building2, Eye, Handshake
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';

const ProfessionalServicesMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Professional Services Marketing Audit');
  return (
    <>
      <Helmet>
        <title>Professional Services Marketing Psychology | B2B Consulting Marketing | Joel Hinton</title>
        <meta name="description" content="Authority-driven professional services marketing that converts prospects into high-value clients. B2B psychology strategies with 195% traffic growth and 520% ROI." />
        <meta name="keywords" content="professional services marketing, B2B consulting marketing, authority positioning, professional services psychology, consulting lead generation" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Professional Services Marketing Psychology | B2B Consulting" />
        <meta property="og:description" content="Authority-driven marketing strategies that convert prospects into high-value professional service clients." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Professional Services", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Briefcase className="w-4 h-4 mr-2" />
                Professional Services Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Services Marketing <span className="text-primary">Psychology</span> That Positions You as the Premium Choice
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                B2B buyers need confidence in expertise and results. Our authority-driven strategies position you as the 
                premium choice through thought leadership, credibility building, and consultation psychology that converts 
                prospects into high-value clients. Our <Link to="/seo-services" className="text-primary hover:underline">SEO services</Link> and <Link to="/growth-marketing" className="text-primary hover:underline">growth marketing</Link> expertise are particularly effective for professional service firms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Authority Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Strategy Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">195% Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">360% More Qualified Leads</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">520% ROI Increase</p>
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
                Professional Services <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                B2B decision-makers need confidence in expertise, proven results, and risk mitigation. We position your 
                services as the premium choice that delivers superior outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Authority Positioning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    B2B buyers choose recognized experts. We build unshakeable authority through thought leadership, credentials, and industry recognition.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Thought leadership content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Speaking engagement promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Industry recognition showcase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Expert media positioning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Results Credibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Prospects need proof your services deliver measurable results. We showcase outcomes, ROI, and client success stories prominently.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Detailed case studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>ROI measurement displays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Client testimonial videos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Measurable outcome focus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Consultation Psychology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Professional services often require consultation before engagement. We optimize the consultation process to build confidence and close deals.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Free consultation positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Value demonstration strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Problem amplification techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Solution positioning frameworks</span>
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
                Professional Services <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional services face unique challenges from long sales cycles to premium positioning. 
                We've developed specialized solutions for B2B service providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Lead Quality</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Attract high-value prospects who have budget, authority, and urgency rather than tire-kickers looking for free advice.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Budget-qualified lead magnets</li>
                      <li>• Authority-based content marketing</li>
                      <li>• Premium positioning strategies</li>
                      <li>• Decision-maker targeting</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 75% improvement in lead quality scores</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Handshake className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Consultation Conversion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Convert consultation requests into signed contracts through strategic consultation positioning and value demonstration.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Consultation value positioning</li>
                      <li>• Problem diagnosis frameworks</li>
                      <li>• Solution presentation strategies</li>
                      <li>• Objection handling systems</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% consultation-to-contract rate</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Premium Positioning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Position your services as premium solutions that command higher fees through expertise demonstration and value focus.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Value-based pricing psychology</li>
                      <li>• Expertise differentiation</li>
                      <li>• Premium service packaging</li>
                      <li>• High-value client targeting</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 45% increase in average project value</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Long Sales Cycles</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Navigate complex B2B decision processes with nurturing campaigns that maintain engagement throughout long sales cycles.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Multi-stage nurturing sequences</li>
                      <li>• Educational content series</li>
                      <li>• Decision committee targeting</li>
                      <li>• Progress-based follow-up</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 50% reduction in sales cycle length</div>
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
                Proven <span className="gradient-text">Professional Services Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our professional services marketing consistently delivers measurable improvements in 
                lead quality, consultation rates, and client value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">195%</div>
                  <div className="text-lg font-semibold mb-2">Traffic Growth</div>
                  <p className="text-sm text-muted-foreground">Qualified business prospects</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">360%</div>
                  <div className="text-lg font-semibold mb-2">Lead Quality</div>
                  <p className="text-sm text-muted-foreground">High-value consultation requests</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">520%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Return on marketing investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                  <div className="text-lg font-semibold mb-2">Contract Rate</div>
                  <p className="text-sm text-muted-foreground">Consultations to signed contracts</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Services <span className="gradient-text">Success Story</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Strategic Growth Consultants</CardTitle>
                      <CardDescription className="text-lg">Management Consulting & Strategy Implementation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">360%</div>
                      <div className="text-sm text-blue-700">Lead Quality</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">$380K</div>
                      <div className="text-sm text-blue-700">Avg Project Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">520%</div>
                      <div className="text-sm text-blue-700">ROI Growth</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">
                        Strategic Growth Consultants was attracting small businesses looking for cheap advice instead of enterprise clients 
                        ready to invest in comprehensive strategy implementations. Their generic B2B marketing wasn't positioning them 
                        as premium consultants, and consultation requests were coming from unqualified prospects.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Our Professional Services Psychology Solution</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Authority Building:</strong> Positioned leadership team as industry thought leaders through speaking engagements and expert content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Premium Positioning:</strong> Shifted messaging from "affordable consulting" to "strategic transformation partners"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Results Focus:</strong> Created detailed case studies showing measurable ROI and business transformation outcomes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Consultation Optimization:</strong> Developed strategic consultation process that demonstrates value and builds urgency</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">The Results</h4>
                      <p className="text-blue-700 text-sm">
                        "Joel transformed how we position our consulting services. Instead of competing on price, we now attract enterprise clients 
                        who value strategic expertise. Our average project value increased 340%, and we're selective about which opportunities we pursue. 
                        The authority positioning has made us the go-to consultants in our market."
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-blue-800">David Chen, Managing Partner</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Recommendations */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Services <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the professional services marketing package that fits your practice size and client goals. 
                All packages include authority building and premium positioning strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Authority Builder</CardTitle>
                  <CardDescription>Perfect for individual consultants</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$2,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Personal brand development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Thought leadership content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">LinkedIn optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Speaking opportunity positioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Consultation conversion system</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => selectService("Authority Builder - $2,997/mo")}
                  >
                    Build Authority
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Premium Practice</CardTitle>
                  <CardDescription>For established consulting practices</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$4,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Authority Builder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Enterprise lead generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Account-based marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Case study development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Referral network building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Premium client retention</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => selectService("Premium Practice - $4,997/mo")}
                  >
                    Command Premium Fees
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Consulting Empire</CardTitle>
                  <CardDescription>For large consulting firms</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$8,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Premium Practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-practice coordination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Industry leadership campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Global market positioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Enterprise client acquisition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Executive strategy consulting</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => selectService("Consulting Empire - $8,997/mo")}
                  >
                    Lead Your Industry
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Services <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you improve lead quality for professional services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We create content and campaigns that attract decision-makers with budget and authority. This includes premium positioning, authority-building content, case studies with ROI focus, and lead qualification systems that filter out non-serious prospects. We also target specific industries and company sizes that match your ideal client profile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What types of professional services do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We work with management consultants, IT consultants, financial advisors, marketing agencies, HR consultants, legal services, accounting firms, and other B2B professional services. Each requires different authority-building strategies and client acquisition approaches based on their specific expertise and target market.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you handle long B2B sales cycles?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We create multi-stage nurturing campaigns that maintain engagement throughout long decision processes. This includes educational content series, decision committee targeting, regular value-add touchpoints, and progress-based follow-up sequences. The goal is to stay top-of-mind while building trust and demonstrating ongoing value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can professional services see marketing results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Professional services typically see authority-building results within 3-6 months as thought leadership content gains traction. Lead generation improvements usually occur within 60-90 days, while long-term authority and premium positioning can take 6-12 months to fully establish. We track consultation requests, lead quality scores, and conversion rates monthly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Command Premium Consulting Fees?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop competing on price and start winning with authority. Get professional services marketing 
                that positions you as the premium choice and attracts high-value clients ready to invest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Authority Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-blue-200 text-center">
                Authority positioning • Premium pricing • High-value clients
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free Professional Services Marketing Audit"
        description="Let's discuss how we can help grow your professional services business."
        defaultService={selectedService}
        businessTypes={businessTypes.professional}
      />
    </>
  );
};

export default ProfessionalServicesMarketing;