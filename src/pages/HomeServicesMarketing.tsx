import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Building2, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Zap, Clock, MapPin, 
  Shield, AlertTriangle, Home, Wrench
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HomeServicesMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Home Services Marketing Psychology | HVAC, Plumbing, Roofing Marketing | Joel Hinton</title>
        <meta name="description" content="Emergency-driven home services marketing that converts anxious homeowners into customers. Psychology strategies for HVAC, plumbing, roofing with 320% traffic growth." />
        <meta name="keywords" content="home services marketing, HVAC marketing, plumbing marketing, roofing marketing, emergency service marketing, local contractor marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Home Services Marketing Psychology | Emergency Service Marketing" />
        <meta property="og:description" content="Emergency-driven marketing strategies that convert anxious homeowners into customers with proven results." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Home Services", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Building2 className="w-4 h-4 mr-2" />
                Home Services Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Home Services Marketing <span className="text-primary">Psychology</span> That Converts Emergencies to Customers
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                When homeowners have emergencies, they're anxious and need immediate relief. Our psychology-driven strategies 
                position your business as the trusted <Link to="/local-seo" className="text-primary hover:underline">local SEO</Link> solution that provides instant peace of mind and reliable results. 
                With our comprehensive <Link to="/seo-services" className="text-primary hover:underline">SEO services</Link>, you'll be found first when customers need help most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Target className="w-5 h-5 mr-2" />
                  Get Home Services Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Marketing Help
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">320% Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">420% More Emergency Calls</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">380% ROI Increase</p>
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
                Home Services <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Home service customers are often in crisis mode or planning important projects. We leverage these psychological 
                states to create marketing that provides immediate relief and builds long-term trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Emergency Urgency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "No heat in winter" or "flooded basement" creates immediate need. We position your business as the fast, reliable emergency solution.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>24/7 availability messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Fast response time guarantees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Emergency contact prominence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Crisis relief positioning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Local Trust Signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Homeowners prefer local contractors they can trust. We emphasize community connections, local presence, and neighborhood expertise.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Local business licensing display</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Community involvement showcase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Neighborhood project examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Local review emphasis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Before/After Transformations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Visual proof of transformation builds confidence and helps customers envision their own results with your services.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Project photo galleries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Transformation videos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Problem-solution stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Customer satisfaction focus</span>
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
                Home Services Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Home services businesses face unique marketing challenges from seasonal demand to local competition. 
                We've developed specialized solutions for the industry's biggest pain points.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Seasonal Demand</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Navigate seasonal fluctuations with strategic marketing that maintains revenue year-round and captures peak demand.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Seasonal service promotion campaigns</li>
                      <li>• Off-season maintenance marketing</li>
                      <li>• Weather-triggered emergency campaigns</li>
                      <li>• Preventive service education</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 40% more consistent monthly revenue</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Local Competition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Stand out from countless local competitors by building unique positioning and trust signals that customers remember.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unique value proposition development</li>
                      <li>• Local SEO domination</li>
                      <li>• Brand differentiation strategies</li>
                      <li>• Community involvement campaigns</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 75% market share in service areas</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Emergency Response</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Capture emergency calls when customers are most motivated to hire and willing to pay premium prices for immediate service.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Emergency keyword optimization</li>
                      <li>• 24/7 response positioning</li>
                      <li>• Crisis communication strategies</li>
                      <li>• Premium emergency pricing psychology</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% increase in emergency call volume</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Pricing Transparency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Overcome price objections and build trust with transparent, value-focused pricing that justifies your expertise.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Value-based pricing presentation</li>
                      <li>• Upfront pricing displays</li>
                      <li>• Quality vs cost education</li>
                      <li>• Guarantee and warranty emphasis</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 45% improvement in quote acceptance</div>
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
                Proven <span className="gradient-text">Home Services Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our home services marketing consistently delivers measurable improvements across 
                all key performance indicators for contractors and service providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">320%</div>
                  <div className="text-lg font-semibold mb-2">Traffic Growth</div>
                  <p className="text-sm text-muted-foreground">Local homeowners finding your services</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">420%</div>
                  <div className="text-lg font-semibold mb-2">Lead Generation</div>
                  <p className="text-sm text-muted-foreground">Emergency and scheduled service calls</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">380%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Return on marketing investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                  <div className="text-lg font-semibold mb-2">Quote Acceptance</div>
                  <p className="text-sm text-muted-foreground">Prospects choosing your services</p>
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
                Home Services Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the home services marketing package that fits your business size and service area. 
                All packages include emergency psychology optimization and local trust building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Local Contractor</CardTitle>
                  <CardDescription>Perfect for single-location contractors</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$1,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local SEO optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Emergency response campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Google Business Profile mastery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Review management system</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Seasonal campaign management</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Start Local Growth</Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Service Dominator</CardTitle>
                  <CardDescription>For established home service companies</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$3,497<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Local Contractor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-service optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced lead nurturing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Premium service positioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Maintenance contract marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Competitive intelligence</span>
                    </div>
                  </div>
                  <Button className="w-full">Dominate Your Market</Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Regional Empire</CardTitle>
                  <CardDescription>For multi-location service companies</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$5,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Service Dominator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-location coordination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Franchise marketing systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Regional brand building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Enterprise reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Priority emergency support</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Build Service Empire</Button>
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
                Home Services Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you handle seasonal fluctuations in home services marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We create year-round marketing strategies that adapt to seasonal demand. Summer focuses on HVAC and cooling, winter on heating and storm damage, spring on maintenance and improvements. We also develop off-season campaigns for preventive services and maintenance contracts to smooth revenue fluctuations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes home services marketing different from other industries?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Home services often involve emergencies or urgent needs, creating high-stress decision-making situations. We focus on immediate relief psychology, local trust signals, and emergency response positioning. The goal is to be the first call when homeowners need help, not compete in a crowded marketplace.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you work with all types of home service businesses?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we work with HVAC, plumbing, electrical, roofing, landscaping, cleaning, pest control, and other home service providers. Each service type requires different psychological approaches - emergency services focus on urgency, while improvement services emphasize transformation and value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can home service businesses see marketing results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Home services typically see faster results than other industries due to urgent local needs. Local SEO improvements show within 30-60 days, emergency campaigns can generate calls within days, and full optimization usually achieves results within 3-6 months. We track calls, leads, and conversion rates monthly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-orange-600 to-red-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Dominate Your Local Market?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Stop losing emergency calls to competitors. Get home services marketing that positions you as 
                the trusted local expert customers call first when they need help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Home Services Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-orange-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-orange-200 text-center">
                Emergency marketing • Local expertise • Proven contractor growth
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomeServicesMarketing;