import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  Car, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Shield, Wrench, UserCheck, 
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


const AutomotiveServicesMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Automotive Marketing Audit');
  return (
    <>
      <Helmet>
        <title>Automotive Services Marketing | Auto Repair Marketing | Central Florida | AIO Growth SEO</title>
        <meta name="description" content="Automotive marketing for auto repair shops, tire shops, and body shops in Volusia & Flagler Counties. Trust-driven strategies that convert car owners into loyal customers." />
        <meta name="keywords" content="automotive marketing, auto repair marketing, car service marketing, automotive psychology, local auto shop marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Automotive Services Marketing Psychology | Auto Repair Marketing" />
        <meta property="og:description" content="Trust-driven marketing strategies that convert car owners into loyal automotive service customers." />
        <meta property="og:type" content="website" />
      </Helmet>
      <ProfessionalServiceSchema 
        serviceName="Automotive Services Marketing"
        serviceDescription="Trust-driven marketing strategies for auto repair shops and automotive services that build customer loyalty"
        serviceUrl="https://aiogrowthseo.com/industries/automotive-services"
        serviceType="Automotive Marketing"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Automotive Services", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Car className="w-4 h-4 mr-2" />
                Automotive Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Automotive Marketing <span className="text-primary">Psychology</span> That Builds Trust & Drives Service Loyalty
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Car owners need trust in automotive services, especially for major repairs and maintenance. Our psychology-driven 
                strategies position your shop as the reliable, honest choice through transparency, expertise demonstration, and 
                customer care focus. Combined with strategic <Link to="/local-seo" className="text-primary hover:underline">local SEO</Link> and
                <Link to="/local-lead-generation" className="text-primary hover:underline">targeted advertising</Link>, we help customers find your shop when they need automotive care most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Automotive Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Auto Shop Strategy Call
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">285% Service Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">340% More Customers</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">390% ROI Increase</p>
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
                Automotive <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Automotive customers often feel vulnerable and need reassurance about honest pricing, quality work, and reliable service. 
                We position your shop as the trustworthy choice they can depend on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Trust & Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Car owners fear being overcharged or getting unnecessary work. We build trust through transparent pricing, honest communication, and upfront estimates.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Upfront pricing displays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>No-surprise guarantee messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Work process transparency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Customer education content</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Emergency Service Psychology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Car breakdowns create stress and urgency. We position your shop as the reliable emergency solution that provides immediate relief.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>24/7 availability messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Roadside assistance positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Fast service guarantees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Emergency contact prominence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Expertise & Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Customers need confidence in technical expertise and quality workmanship. We showcase certifications, experience, and quality guarantees.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>ASE certification displays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Years of experience emphasis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Quality guarantee prominent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Before/after work photos</span>
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
                Automotive Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Automotive services face unique challenges from dealership competition to trust building. 
                We've developed specialized solutions for the automotive industry's biggest pain points.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Dealership Competition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Compete with dealership service centers by emphasizing personal service, fair pricing, and neighborhood trust.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Local business advantage messaging</li>
                      <li>• Personal service differentiation</li>
                      <li>• Cost comparison strategies</li>
                      <li>• Community involvement showcase</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 65% more service appointments vs dealerships</div>
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
                    Overcome customer skepticism about auto repair honesty through transparent practices and proven reliability.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Diagnostic transparency</li>
                      <li>• Written estimates emphasis</li>
                      <li>• Quality guarantee prominence</li>
                      <li>• Customer testimonial campaigns</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 4.8+ star average across all platforms</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Seasonal Service Fluctuations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Navigate seasonal demand changes with strategic campaigns that maintain steady revenue year-round.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Seasonal maintenance campaigns</li>
                      <li>• Weather-triggered promotions</li>
                      <li>• Preventive service education</li>
                      <li>• Off-season service packages</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 50% more consistent monthly revenue</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Customer Retention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Turn one-time customers into loyal clients through maintenance reminders and relationship building.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Service reminder systems</li>
                      <li>• Loyalty program development</li>
                      <li>• Multi-vehicle service tracking</li>
                      <li>• Customer appreciation campaigns</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 80% customer retention rate</div>
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
                Proven <span className="gradient-text">Automotive Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our automotive marketing consistently delivers measurable improvements in service appointments, 
                customer retention, and shop reputation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">285%</div>
                  <div className="text-lg font-semibold mb-2">Service Growth</div>
                  <p className="text-sm text-muted-foreground">New service appointments</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
                  <div className="text-lg font-semibold mb-2">Customer Increase</div>
                  <p className="text-sm text-muted-foreground">New customer acquisitions</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">390%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Marketing return on investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                  <div className="text-lg font-semibold mb-2">Retention Rate</div>
                  <p className="text-sm text-muted-foreground">Repeat customer loyalty</p>
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
                Automotive Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the automotive marketing package that fits your shop size and service area. 
                All packages include trust-building psychology and customer retention strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Local Garage</CardTitle>
                  <CardDescription>Perfect for independent auto shops</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$1,697<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local SEO optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Trust-building campaigns</span>
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
                      <span className="text-sm">Service reminder automation</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => {
                    selectService("Local Garage - $1,697/mo");
                  }}>
                    Start Shop Growth
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Service Authority</CardTitle>
                  <CardDescription>For established automotive services</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$2,897<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Local Garage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-service optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Customer loyalty programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Fleet service marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced reputation management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Competitive analysis</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => {
                    selectService("Service Authority - $2,897/mo");
                  }}>
                    Build Service Authority
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Auto Empire</CardTitle>
                  <CardDescription>For multi-location auto services</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$4,697<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Service Authority</span>
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
                      <span className="text-sm">Priority support</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => {
                    selectService("Auto Empire - $4,697/mo");
                  }}>
                    Scale Auto Empire
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
                Automotive Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you help auto shops compete with dealership service centers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We emphasize the personal service, community connection, and cost advantages of independent shops. This includes highlighting relationships with customers, faster service, competitive pricing, and local business benefits. We also showcase specialized expertise and personalized attention that dealerships often can't provide.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes automotive marketing different from other service industries?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Automotive customers often feel vulnerable and worry about being overcharged or receiving unnecessary services. We focus on transparency, honesty, and building long-term trust rather than quick sales. The goal is to become the trusted neighborhood shop that customers recommend to family and friends.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you work with all types of automotive businesses?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we work with general auto repair shops, specialty services (transmission, brakes, etc.), oil change centers, tire shops, body shops, and automotive detailing services. Each requires different trust-building approaches - emergency repairs focus on reliability, while maintenance services emphasize preventive care value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can automotive businesses see marketing results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Automotive services typically see local SEO improvements within 30-60 days, reputation and trust building shows results in 60-90 days, and customer retention programs usually achieve full results within 6 months. We track service appointments, customer acquisition cost, and retention rates monthly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-red-600 to-orange-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Automotive Customer Loyalty?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Stop losing customers to dealerships and competitors. Get automotive marketing that builds trust, 
                demonstrates expertise, and creates loyal customers for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Automotive Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-red-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-red-200 text-center">
                Trust building • Customer loyalty • Proven automotive growth
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>


      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free Automotive Marketing Audit"
        description="Let's discuss how we can help bring more customers to your automotive business and build long-term loyalty."
        defaultService={selectedService}
        businessTypes={businessTypes.automotive}
      />
    </>
  );
};

export default AutomotiveServicesMarketing;
