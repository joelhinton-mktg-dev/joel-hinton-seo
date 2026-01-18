import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  Dumbbell, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Shield, Heart, UserCheck, 
  Clock, FileText, Building2, Eye, Zap
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


const FitnessWellnessMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Fitness Marketing Audit');
  return (
    <>
      <Helmet>
        <title>Fitness & Wellness Marketing | Gym & Studio Marketing | Central Florida | AIO Growth SEO</title>
        <meta name="description" content="Fitness marketing for gyms and wellness centers in Volusia & Flagler Counties. Motivation-driven strategies that convert prospects into committed members." />
        <meta name="keywords" content="fitness marketing, gym marketing, wellness center marketing, fitness psychology, member retention, fitness studio marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/industries/fitness-wellness" />
        
        <meta property="og:title" content="Fitness & Wellness Marketing Psychology | Gym & Studio Marketing" />
        <meta property="og:description" content="Motivation-driven marketing strategies that convert prospects into committed fitness members with proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/industries/fitness-wellness" />
      </Helmet>
      <ProfessionalServiceSchema 
        serviceName="Fitness & Wellness Marketing"
        serviceDescription="Motivation-driven marketing strategies for gyms and wellness centers that inspire commitment and drive membership growth"
        serviceUrl="https://aiogrowthseo.com/industries/fitness-wellness"
        serviceType="Fitness Marketing"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Fitness & Wellness", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Dumbbell className="w-4 h-4 mr-2" />
                Fitness Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Fitness Marketing <span className="text-primary">Psychology</span> That Inspires Commitment & Drives Memberships
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Fitness decisions involve motivation, body image concerns, and commitment anxiety. Our psychology-driven 
                strategies position your gym as the supportive community that helps members achieve transformation goals. 
                Through strategic <Link to="/local-seo" className="text-primary hover:underline">local SEO</Link> and targeted
                <Link to="/local-lead-generation" className="text-primary hover:underline">advertising campaigns</Link>, we attract motivated prospects ready to commit to their fitness journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Fitness Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Membership Strategy Call
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">310% Membership Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">450% More Leads</p>
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
                Fitness <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fitness marketing requires understanding motivation cycles, body image psychology, and commitment barriers. 
                We create campaigns that inspire action and maintain long-term engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Transformation Motivation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    People join gyms seeking transformation and better health. We leverage before/after success stories and goal achievement to inspire action.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Member transformation showcases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Goal achievement campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Progress tracking emphasis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Success milestone celebrations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Community & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fitness journeys are easier with support. We emphasize community, encouragement, and shared goals to reduce workout intimidation.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Welcoming community messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Beginner-friendly positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Group class promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Personal trainer matching</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Seasonal Motivation Cycles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Leverage New Year motivation, summer body goals, and health awareness periods to drive membership and engagement.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>New Year resolution campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Summer preparation programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Health awareness tie-ins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Year-round motivation maintenance</span>
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
                Fitness Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fitness businesses face unique challenges from high competition to member retention. 
                We've developed specialized solutions for the wellness industry's biggest obstacles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">High Market Competition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Stand out from countless fitness options by emphasizing unique programs, community, and personalized support.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unique program differentiation</li>
                      <li>• Community culture emphasis</li>
                      <li>• Specialized fitness niches</li>
                      <li>• Personal success story focus</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 70% increase in membership inquiries</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Member Retention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Combat high churn rates with engagement strategies that keep members motivated and committed long-term.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Progress tracking systems</li>
                      <li>• Goal achievement programs</li>
                      <li>• Community building events</li>
                      <li>• Personal trainer matching</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 65% improvement in member retention</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Seasonal Motivation Cycles</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Navigate New Year rushes and summer goals while maintaining engagement during low-motivation periods.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• New Year transformation campaigns</li>
                      <li>• Summer body preparation</li>
                      <li>• Year-round motivation strategies</li>
                      <li>• Seasonal program launches</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 40% more consistent membership levels</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Gym Intimidation Barriers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Address fitness anxiety and gym intimidation with welcoming messaging that makes fitness accessible to everyone.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Beginner-friendly messaging</li>
                      <li>• Inclusive community emphasis</li>
                      <li>• Judgment-free zone positioning</li>
                      <li>• Personal support highlighting</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% new member conversion rate</div>
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
                Proven <span className="gradient-text">Fitness Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our fitness marketing consistently delivers measurable improvements in membership growth, 
                retention rates, and community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">310%</div>
                  <div className="text-lg font-semibold mb-2">Membership Growth</div>
                  <p className="text-sm text-muted-foreground">New member registrations</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">450%</div>
                  <div className="text-lg font-semibold mb-2">Lead Generation</div>
                  <p className="text-sm text-muted-foreground">Qualified fitness inquiries</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">380%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Marketing return on investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">65%</div>
                  <div className="text-lg font-semibold mb-2">Retention Rate</div>
                  <p className="text-sm text-muted-foreground">Member loyalty improvement</p>
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
                Fitness Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the fitness marketing package that fits your facility size and membership goals. 
                All packages include motivation psychology and retention optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Studio Starter</CardTitle>
                  <CardDescription>Perfect for boutique fitness studios</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$1,797<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local fitness SEO</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Class schedule optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Member success campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Trial membership conversion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Social media engagement</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => {
                    selectService("Studio Starter - $1,797/mo");
                  }}>
                    Start Studio Growth
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Fitness Authority</CardTitle>
                  <CardDescription>For established gyms & wellness centers</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$3,197<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Studio Starter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-program optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Corporate wellness programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Personal training promotion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Member referral systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => {
                    selectService("Fitness Authority - $3,197/mo");
                  }}>
                    Build Fitness Authority
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Wellness Empire</CardTitle>
                  <CardDescription>For multi-location fitness chains</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$5,397<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Fitness Authority</span>
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
                    selectService("Wellness Empire - $5,397/mo");
                  }}>
                    Scale Wellness Empire
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
                Fitness Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you address gym intimidation and fitness anxiety?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We create welcoming, inclusive messaging that emphasizes support over judgment. This includes beginner-friendly content, community success stories from all fitness levels, and highlighting personal trainers and staff who help members feel comfortable. The goal is positioning your gym as a supportive community rather than an intimidating environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What types of fitness businesses do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We work with traditional gyms, boutique fitness studios, yoga studios, CrossFit boxes, martial arts schools, personal training studios, and wellness centers. Each requires different psychological approaches - yoga emphasizes mindfulness and stress relief, while CrossFit focuses on challenge and community achievement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you improve member retention rates?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We implement engagement systems that track member progress, celebrate achievements, and provide ongoing motivation. This includes goal-setting programs, progress photo campaigns, community challenges, and personal check-ins. We also create content that keeps members engaged between visits and helps them see ongoing value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can fitness businesses see membership growth?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Fitness marketing typically shows initial results within 30-60 days for local visibility improvements. Membership increases usually occur within 2-4 months as community reputation builds, and retention improvements take 3-6 months to establish. We track trial memberships, conversion rates, and retention metrics monthly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build a Thriving Fitness Community?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Stop losing members to competition and low motivation. Get fitness marketing that builds 
                community, inspires transformation, and creates long-term member loyalty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Fitness Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-green-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-green-200 text-center">
                Community building • Member retention • Proven fitness growth
              </p>
            </div>
          </div>
        </section>

        <Footer />

        <ContactDialog 
          isOpen={isOpen}
          onClose={closeDialog}
          title="Get Your Free Fitness Marketing Audit"
          description="Let's discuss how we can help build your fitness community and boost member retention."
          defaultService={selectedService}
          businessTypes={businessTypes.fitness}
        />
      </div>
    </>
  );
};

export default FitnessWellnessMarketing;