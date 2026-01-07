import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  Utensils, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Camera, Heart, UserCheck, 
  Clock, FileText, Building2, Eye, MapPin, CreditCard
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


const RestaurantsHospitalityMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Restaurant Marketing Audit');
  return (
    <>
      <Helmet>
        <title>Restaurant Marketing | Hospitality Marketing | Central Florida | AIO Growth SEO</title>
        <meta name="description" content="Restaurant and hospitality marketing for food service businesses in Volusia & Flagler Counties. Visual appeal strategies that drive reservations and repeat customers." />
        <meta name="keywords" content="restaurant marketing, hospitality marketing, food service marketing, restaurant psychology, dining experience marketing, food photography marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Restaurant Marketing Psychology | Hospitality & Food Service" />
        <meta property="og:description" content="Restaurant marketing strategies that drive reservations and create loyal customers with proven results." />
        <meta property="og:type" content="website" />
      </Helmet>
      <ProfessionalServiceSchema 
        serviceName="Restaurant Marketing"
        serviceDescription="Visual appeal and experience marketing strategies for restaurants and hospitality businesses"
        serviceUrl="https://aiogrowthseo.com/industries/restaurants"
        serviceType="Restaurant Marketing"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-6 py-8">
          <PageBreadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Restaurant Marketing", href: "/industries/restaurants" }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <Utensils className="w-4 h-4 mr-2" />
                Restaurant Marketing Psychology
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Restaurant Marketing That <span className="gradient-text">Fills Tables & Creates Loyalty</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Dining decisions are driven by emotion, ambiance, and social proof. Our psychology-focused strategies leverage 
                visual appeal, experience anticipation, and community connection to turn browsers into diners, 
                resulting in <strong className="text-primary">350% more reservations</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Restaurant Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Free Restaurant Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">280%</div>
                  <p className="text-muted-foreground">Traffic Growth</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">350%</div>
                  <p className="text-muted-foreground">More Reservations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">320%</div>
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
                Your Restaurant is <span className="text-destructive">Fighting for Attention</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Without strategic visual marketing and experience positioning, your restaurant blends in with competitors while diners choose based on convenience rather than desire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Poor Visual Appeal",
                  description: "Outdated photos and weak visual presence fail to create craving",
                  impact: "Lost Revenue: $30,000+/month"
                },
                {
                  icon: Users,
                  title: "Inconsistent Reservations",
                  description: "Unpredictable booking patterns and seasonal fluctuations",
                  impact: "Capacity Utilization: -45%"
                },
                {
                  icon: Building2,
                  title: "Local Competition",
                  description: "Fighting with established restaurants for same customer base",
                  impact: "Market Share: -30%"
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
                Restaurant Experience Marketing That <span className="gradient-text">Actually Converts</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We don't just drive traffic. We create irresistible dining experiences that fill tables, build loyalty, and turn customers into advocates.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: Camera,
                    title: "Visual Craving Creation",
                    description: "Professional food photography and ambiance visuals that trigger immediate desire and anticipation for your dining experience."
                  },
                  {
                    icon: Star,
                    title: "Social Proof Amplification",
                    description: "Strategic review generation and user-generated content that creates desirability and reduces decision anxiety through social validation."
                  },
                  {
                    icon: Heart,
                    title: "Experience Anticipation Systems",
                    description: "Behind-the-scenes content and storytelling that builds excitement for the full dining journey from arrival to dessert."
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
                    We guarantee a minimum 150% improvement in reservation requests within 90 days, or you don't pay.
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
              <h2 className="text-4xl font-bold mb-6">Complete Restaurant Experience Marketing</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end restaurant marketing services designed to create visual appeal, build community buzz, and maximize table turnover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Visual Appeal Marketing",
                  description: "Professional food photography and ambiance visuals that create immediate craving and desire.",
                  features: ["Food photography", "Ambiance shots", "Menu presentation", "Social media visuals"]
                },
                {
                  icon: Star,
                  title: "Social Proof Generation",
                  description: "Review management and user-generated content that builds desirability through social validation.",
                  features: ["Review campaigns", "User-generated content", "Influencer partnerships", "Social amplification"]
                },
                {
                  icon: Heart,
                  title: "Experience Anticipation",
                  description: "Behind-the-scenes content that builds excitement for the complete dining experience.",
                  features: ["Chef storytelling", "Preparation videos", "Special events", "Seasonal campaigns"]
                },
                {
                  icon: MapPin,
                  title: "Local SEO Domination",
                  description: "Optimize for local restaurant searches and location-based dining discovery.",
                  features: ["Google Business optimization", "Local search ranking", "Area targeting", "Competition analysis"]
                },
                {
                  icon: UserCheck,
                  title: "Loyalty Program Development",
                  description: "Create systems that turn first-time diners into regular customers and brand advocates.",
                  features: ["Loyalty programs", "VIP experiences", "Birthday campaigns", "Repeat customer incentives"]
                },
                {
                  icon: BarChart3,
                  title: "Revenue Optimization",
                  description: "Strategic campaigns that maximize table turnover, average check size, and seasonal performance.",
                  features: ["Seasonal strategies", "Upselling systems", "Event marketing", "Revenue analytics"]
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
                Ready to Fill Every Table?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your free restaurant marketing audit and discover exactly how to create buzz, build loyalty, and maximize your dining room capacity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Restaurant Marketing Audit
                </Button>
              </div>
              <p className="text-sm opacity-75">
                Free audit includes visual strategy, local SEO analysis, and growth recommendations • No obligations
              </p>
            </div>
          </div>
        </section>

        <Footer />

        <ContactDialog 
          isOpen={isOpen}
          onClose={closeDialog}
          title="Get Your Free Restaurant Marketing Audit"
          description="Let's discuss how we can fill your tables and create a loyal customer base through strategic restaurant marketing."
          defaultService={selectedService}
          businessTypes={businessTypes.restaurant}
        />
      </div>
    </>
  );
};

export default RestaurantsHospitalityMarketing;