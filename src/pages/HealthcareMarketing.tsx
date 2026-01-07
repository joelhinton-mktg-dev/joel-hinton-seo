import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  Stethoscope, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Shield, Heart, UserCheck, 
  Clock, FileText, Building2, Eye, Lock
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


const HealthcareMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Healthcare Marketing Audit');
  return (
    <>
      <Helmet>
        <title>Healthcare Marketing | Medical Practice Marketing | Central Florida | AIO Growth SEO</title>
        <meta name="description" content="HIPAA-compliant healthcare marketing for medical practices in Volusia & Flagler Counties. Local SEO and patient acquisition strategies that build trust and drive appointments." />
        <meta name="keywords" content="healthcare marketing, medical marketing, HIPAA compliant marketing, patient acquisition, medical practice growth, healthcare psychology" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Healthcare Marketing Psychology | Medical Practice Marketing" />
        <meta property="og:description" content="HIPAA-compliant healthcare marketing strategies that build trust and drive patient appointments with proven results." />
        <meta property="og:type" content="website" />
      </Helmet>
      <ProfessionalServiceSchema
        serviceName="Healthcare Marketing"
        serviceDescription="HIPAA-compliant healthcare marketing strategies for medical practices in Central Florida"
        serviceUrl="https://aiogrowthseo.com/industries/healthcare"
        serviceType="Healthcare Marketing"
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Healthcare & Medical", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Stethoscope className="w-4 h-4 mr-2" />
                Healthcare Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Healthcare Marketing <span className="text-primary">Psychology</span> That Builds Trust & Drives Appointments
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Healthcare decisions are deeply personal and often anxiety-driven. Our HIPAA-compliant marketing strategies 
                leverage trust-building psychology, expert positioning, and patient journey optimization to convert concerned 
                prospects into confident patients. Through strategic <Link to="/local-seo" className="text-primary hover:underline">local SEO</Link> and comprehensive 
                <Link to="/seo-services" className="text-primary hover:underline">SEO services</Link>, we help patients find your practice when they need care most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Healthcare Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Healthcare Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">220% Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">380% More Patients</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">290% ROI Increase</p>
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
                Healthcare <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Healthcare marketing requires unique psychological understanding. Patients are often anxious, seeking reassurance, 
                and making decisions based on trust and credibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Trust and Credibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Patients need confidence in their healthcare provider. We build trust through credentials, testimonials, and transparent communication.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Board certifications & credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Patient success stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Professional associations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Transparent processes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Health Anxiety Relief</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Address patient fears and concerns with empathetic, educational content that provides reassurance and clear next steps.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Condition education content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Treatment outcome statistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>FAQ addressing concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Empathetic messaging</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Expert Authority Positioning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Position your practice as the leading authority through thought leadership, specialized expertise, and clinical excellence.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Specialty expertise showcase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Research & publications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Speaking engagements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Advanced technology</span>
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
                Healthcare Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Healthcare marketing faces unique challenges from HIPAA compliance to patient acquisition. 
                We've developed specialized solutions for the medical industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">HIPAA Compliance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Navigate complex healthcare regulations while creating effective marketing campaigns that protect patient privacy.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• HIPAA-compliant content strategies</li>
                      <li>• Privacy-focused lead capture</li>
                      <li>• Secure patient communication systems</li>
                      <li>• Compliant testimonial processes</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 100% compliance with increased conversions</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Patient Acquisition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Attract new patients while maintaining quality and building long-term relationships with your community.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Condition-specific landing pages</li>
                      <li>• Local SEO optimization</li>
                      <li>• Educational content marketing</li>
                      <li>• Referral program development</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 380% increase in new patient appointments</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Online Reputation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Build and maintain a stellar online reputation that attracts patients and builds community trust.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Review generation systems</li>
                      <li>• Reputation monitoring tools</li>
                      <li>• Patient satisfaction surveys</li>
                      <li>• Crisis management protocols</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 4.8+ star average across all platforms</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Appointment Conversion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Convert website visitors and phone inquiries into scheduled appointments with optimized booking processes.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Online scheduling optimization</li>
                      <li>• Phone script development</li>
                      <li>• Appointment reminder systems</li>
                      <li>• No-show reduction strategies</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% appointment booking rate</div>
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
                Proven <span className="gradient-text">Healthcare Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our healthcare marketing consistently delivers measurable improvements in patient acquisition 
                and practice growth while maintaining compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">220%</div>
                  <div className="text-lg font-semibold mb-2">Traffic Growth</div>
                  <p className="text-sm text-muted-foreground">Qualified patient inquiries</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">380%</div>
                  <div className="text-lg font-semibold mb-2">Patient Increase</div>
                  <p className="text-sm text-muted-foreground">New patient appointments</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">290%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Marketing return on investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
                  <div className="text-lg font-semibold mb-2">Star Rating</div>
                  <p className="text-sm text-muted-foreground">Average patient satisfaction</p>
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
                Healthcare <span className="gradient-text">Success Story</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Stethoscope className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Advanced Cardiology Center</CardTitle>
                      <CardDescription className="text-lg">Specialized Heart Care Practice</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">220%</div>
                      <div className="text-sm text-green-700">Patient Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
                      <div className="text-sm text-green-700">Show Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">4.9</div>
                      <div className="text-sm text-green-700">Star Rating</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">
                        Advanced Cardiology Center was struggling to attract patients for preventive care. Most patients only came during emergencies, 
                        making it difficult to provide proactive heart health management. Their generic marketing wasn't addressing patient anxiety 
                        about heart conditions or building trust in their specialized expertise.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Our Healthcare Psychology Solution</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Trust Building:</strong> Showcased board certifications, advanced technology, and successful patient outcomes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Anxiety Relief:</strong> Created educational content addressing common heart health concerns and treatment options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Expert Positioning:</strong> Developed thought leadership content and speaking engagements in the community</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>HIPAA Compliance:</strong> Implemented compliant patient testimonial and review systems</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">The Results</h4>
                      <p className="text-green-700 text-sm">
                        "Healthcare marketing requires incredible sensitivity and trust-building. The HIPAA-compliant strategies
                        and patient psychology expertise helped us grow while maintaining the highest ethical standards.
                        We're now the go-to cardiology practice in our area."
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-green-800">Dr. Michael R., Lead Cardiologist</span>
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
                Healthcare Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the healthcare marketing package designed for your practice size and specialty. 
                All packages are HIPAA-compliant and include patient psychology expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Practice Starter</CardTitle>
                  <CardDescription>Perfect for small practices</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$2,197<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">HIPAA-compliant website</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local SEO optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Patient education content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Online appointment booking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Review management</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => selectService("Practice Growth - $2,197/mo")}>
                    Start Practice Growth
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Specialty Authority</CardTitle>
                  <CardDescription>For specialized practices</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$3,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Practice Starter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Specialty-focused campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Expert positioning content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Patient testimonial programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Referral network building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => selectService("Healthcare Authority - $3,597/mo")}>
                    Become the Authority
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Health System</CardTitle>
                  <CardDescription>For large practices & health systems</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$6,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Specialty Authority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-location optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Physician recruitment marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Community health programs</span>
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
                  <Button className="w-full" variant="outline" onClick={() => selectService("Health System Scale - $5,197/mo")}>
                    Scale Health System
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
                Healthcare Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you ensure HIPAA compliance in marketing campaigns?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We follow strict HIPAA guidelines in all marketing activities. This includes using secure communication systems, obtaining proper consent for testimonials, anonymizing patient information, and ensuring all third-party tools are HIPAA-compliant. We also provide staff training on compliant marketing practices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes healthcare marketing different from other industries?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Healthcare marketing requires building deep trust because patients are making decisions about their health and wellbeing. We focus on education, empathy, and credibility rather than sales tactics. The psychology involves addressing anxiety, building confidence in treatment outcomes, and positioning providers as trusted experts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you work with all medical specialties?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we work with primary care, specialists, dental practices, mental health providers, and health systems. Each specialty requires different psychological approaches - cardiology focuses on prevention and outcomes, while cosmetic surgery emphasizes confidence and transformation. We tailor strategies to your specific specialty.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you handle patient reviews and reputation management?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We implement HIPAA-compliant review generation systems that encourage satisfied patients to share their experiences. This includes automated follow-up sequences, review platform optimization, and professional responses to all reviews. We also monitor your online reputation and provide crisis management if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can we expect to see patient growth?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Healthcare marketing typically shows initial results within 60-90 days for local SEO and reputation improvements. Patient appointment increases usually occur within 3-6 months as trust builds. Long-term growth and referral network development take 6-12 months. We provide monthly reports tracking patient inquiries, appointments, and conversion rates.
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
                Ready to Grow Your Medical Practice?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Build patient trust and drive appointments with HIPAA-compliant marketing strategies designed specifically 
                for healthcare providers. Start attracting the patients you want to serve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Healthcare Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-green-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-green-200 text-center">
                HIPAA-compliant • Healthcare expertise • Proven patient growth
              </p>
            </div>
          </div>
        </section>

        <Footer />

        <ContactDialog 
          isOpen={isOpen}
          onClose={closeDialog}
          title="Get Your Free Healthcare Marketing Audit"
          description="Let's discuss how we can help build patient trust and grow your medical practice."
          defaultService={selectedService}
          businessTypes={businessTypes.healthcare}
        />
      </div>
    </>
  );
};

export default HealthcareMarketing;