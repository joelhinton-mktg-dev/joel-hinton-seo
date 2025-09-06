import { Helmet } from 'react-helmet-async';
import { 
  Utensils, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Zap, Clock, Brain, 
  MapPin, Camera, Building2, Eye, Heart, CreditCard
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("Restaurant Marketing Audit")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const RestaurantsHospitalityMarketing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: "Restaurant Marketing Audit" }
  });

  const onSubmitForm = async (data: ContactFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    if (process.env.NODE_ENV === 'development') {
      console.log("Restaurant contact form submitted:", data);
    }
    setSubmitSuccess(true);
    reset();
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsDialogOpen(false);
    }, 2000);
    setIsSubmitting(false);
  };

  // Keep the original form logic for the inline form
  const [isInlineSubmitting, setIsInlineSubmitting] = useState(false);
  const [inlineSubmitSuccess, setInlineSubmitSuccess] = useState(false);

  const hospitalityLeadSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().min(2, "Restaurant/business name must be at least 2 characters"),
    industry: z.string().min(1, "Please select your business type"),
    message: z.string().min(20, "Please describe your marketing challenges (at least 20 characters)")
  });

  type HospitalityLeadFormData = z.infer<typeof hospitalityLeadSchema>;

  const {
    register: registerInline,
    handleSubmit: handleInlineSubmit,
    formState: { errors: inlineErrors },
    reset: resetInline,
    setValue: setValueInline
  } = useForm<HospitalityLeadFormData>({
    resolver: zodResolver(hospitalityLeadSchema),
    defaultValues: {
      industry: "restaurants-hospitality"
    }
  });

  const onInlineSubmit = async (data: HospitalityLeadFormData) => {
    setIsInlineSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Hospitality lead generated:", data);
    setInlineSubmitSuccess(true);
    resetInline({ industry: "restaurants-hospitality" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setInlineSubmitSuccess(false), 5000);
    setIsInlineSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Restaurant Marketing Psychology | Hospitality Marketing | Food Service Marketing | Joel Hinton</title>
        <meta name="description" content="Restaurant marketing psychology that drives reservations and repeat customers. Visual appeal and experience marketing for hospitality with 280% traffic growth." />
        <meta name="keywords" content="restaurant marketing, hospitality marketing, food service marketing, restaurant psychology, dining experience marketing, food photography marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Restaurant Marketing Psychology | Hospitality & Food Service" />
        <meta property="og:description" content="Restaurant marketing strategies that drive reservations and create loyal customers with proven results." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Restaurant Marketing Psychology",
            "description": "Visual appeal and experience marketing strategies for restaurants and hospitality businesses",
            "provider": {
              "@type": "Organization",
              "name": "Joel Hinton Digital Marketing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL"
              }
            },
            "areaServed": "Florida",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Restaurant Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Restaurant Experience Marketing"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Restaurants & Hospitality", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Utensils className="w-4 h-4 mr-2" />
                Restaurant Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Restaurant Marketing <span className="text-primary">Psychology</span> That Fills Tables & Creates Loyalty
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Dining decisions are driven by emotion, ambiance, and social proof. Our psychology-focused strategies leverage 
                visual appeal, experience anticipation, and community connection to turn browsers into diners and diners into regulars. We combine <Link to="/local-seo" className="text-primary hover:underline">local SEO expertise</Link> with <Link to="/paid-advertising" className="text-primary hover:underline">targeted advertising</Link> for maximum local impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => setIsDialogOpen(true)}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Restaurant Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => setIsDialogOpen(true)}>
                  <Phone className="w-5 h-5 mr-2" />
                  Restaurant Growth Call
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">280% Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">350% More Reservations</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">320% ROI Increase</p>
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
                Restaurant <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dining decisions are emotional and social. We leverage visual appeal, social validation, and experience 
                anticipation to create irresistible restaurant marketing that fills tables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Visual Appeal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    People eat with their eyes first. Professional food photography and ambiance visuals create craving and anticipation that drives dining decisions.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Professional food photography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Ambiance and atmosphere shots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Social media visual strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Menu presentation optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Social Proof & Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Diners trust other diners. Glowing reviews, busy dining rooms, and social media buzz create desirability and reduce decision anxiety.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Review generation campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>User-generated content strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Influencer dining partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Social media amplification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Experience Anticipation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Create anticipation for the full dining experience - from arrival to dessert - that builds excitement and justifies the visit.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Behind-the-scenes content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Chef story and expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Special event promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Seasonal menu psychology</span>
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
                Restaurant Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Restaurants face unique challenges from local competition to seasonal fluctuations. 
                We've developed specialized solutions for hospitality business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Local Competition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Stand out in crowded local dining markets by creating unique positioning and memorable experiences that customers choose over alternatives.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unique dining experience positioning</li>
                      <li>• Local SEO domination strategies</li>
                      <li>• Community engagement campaigns</li>
                      <li>• Signature dish/concept marketing</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% increase in local market share</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Seasonal Fluctuations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Navigate seasonal dining patterns and weather impacts with strategic marketing that maintains consistent revenue year-round.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Seasonal menu promotion campaigns</li>
                      <li>• Weather-responsive marketing</li>
                      <li>• Holiday and event strategies</li>
                      <li>• Off-season revenue streams</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 40% more consistent monthly revenue</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Online Visibility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Get found by hungry customers searching for dining options through optimized local search and social media presence.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Google Business Profile optimization</li>
                      <li>• Local SEO for "restaurants near me"</li>
                      <li>• Social media content strategy</li>
                      <li>• Online ordering integration</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 75% increase in online discovery</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Customer Loyalty</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Turn first-time diners into regular customers through loyalty programs and personalized experiences that create emotional connections.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Customer loyalty program development</li>
                      <li>• Personalized dining recommendations</li>
                      <li>• Birthday and anniversary campaigns</li>
                      <li>• VIP customer experience design</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 65% increase in repeat customer rate</div>
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
                Proven <span className="gradient-text">Restaurant Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our restaurant marketing consistently delivers measurable improvements in reservations, 
                customer loyalty, and revenue growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">280%</div>
                  <div className="text-lg font-semibold mb-2">Traffic Growth</div>
                  <p className="text-sm text-muted-foreground">Hungry customers finding you</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">350%</div>
                  <div className="text-lg font-semibold mb-2">Reservations</div>
                  <p className="text-sm text-muted-foreground">Bookings and walk-ins</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">320%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Marketing return on investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">65%</div>
                  <div className="text-lg font-semibold mb-2">Repeat Rate</div>
                  <p className="text-sm text-muted-foreground">Customers returning</p>
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
                Restaurant <span className="gradient-text">Success Story</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                      <Utensils className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Coastal Catch Seafood</CardTitle>
                      <CardDescription className="text-lg">Upscale Waterfront Restaurant</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-orange-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-1">350%</div>
                      <div className="text-sm text-orange-700">Reservations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-1">4.8★</div>
                      <div className="text-sm text-orange-700">Review Average</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-1">320%</div>
                      <div className="text-sm text-orange-700">ROI Growth</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">
                        Coastal Catch had amazing food and location but struggled with inconsistent reservations and weak online presence. 
                        They were losing customers to competitors with better social media and review management, despite having superior 
                        dining experiences.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Our Restaurant Psychology Solution</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Visual Strategy:</strong> Professional food photography and waterfront ambiance shots that showcase the full dining experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Social Proof:</strong> Systematic review generation and user-generated content campaigns featuring happy diners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Local SEO:</strong> Dominated "waterfront restaurants" and "fresh seafood" searches in the Daytona Beach area</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Experience Marketing:</strong> Promoted chef expertise, fresh catch stories, and special occasion positioning</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">The Results</h4>
                      <p className="text-orange-700 text-sm">
                        "Joel understood that restaurant marketing is about selling the experience, not just the food. Our reservations 
                        tripled, and we're consistently booked on weekends. The visual strategy and review management transformed how 
                        people perceive our restaurant online."
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-orange-800">Maria Rodriguez, Owner</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Restaurant Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the restaurant marketing package that fits your establishment size and growth goals. 
                All packages include visual strategy and customer experience optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Local Favorite</CardTitle>
                  <CardDescription>Perfect for single-location restaurants</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$2,197<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Professional food photography</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Local SEO optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Social media content strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Review management system</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Online ordering optimization</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => {
                      setIsDialogOpen(true);
                      reset({ selectedService: "Local Favorite - $2,197/mo" });
                    }}
                  >
                    Become Local Favorite
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Dining Destination</CardTitle>
                  <CardDescription>For established restaurants</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$3,697<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Local Favorite</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced visual strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Experience marketing campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Loyalty program development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Event and catering marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Influencer partnerships</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      setIsDialogOpen(true);
                      reset({ selectedService: "Dining Destination - $3,697/mo" });
                    }}
                  >
                    Become Dining Destination
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Hospitality Empire</CardTitle>
                  <CardDescription>For restaurant groups & hotels</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$6,497<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Dining Destination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-location coordination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Brand consistency programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Enterprise reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Regional market analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Priority support</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => {
                      setIsDialogOpen(true);
                      reset({ selectedService: "Hospitality Empire - $6,497/mo" });
                    }}
                  >
                    Build Hospitality Empire
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
                Restaurant Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you handle seasonal fluctuations in restaurant traffic?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We create seasonal marketing strategies that adapt to dining patterns and weather. Summer focuses on outdoor dining and fresh seasonal menus, winter emphasizes cozy ambiance and comfort foods, holidays target special occasions and celebrations. We also develop off-season promotions and events to maintain consistent revenue.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes restaurant marketing different from other industries?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Restaurant marketing is highly visual and emotion-driven. People choose where to dine based on craving, mood, and social factors. We focus on visual appeal, experience anticipation, and social proof rather than features and benefits. The goal is to make people hungry for your specific dining experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you help restaurants compete against delivery apps?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We position your restaurant as a complete dining experience that delivery can't replicate. This includes emphasizing ambiance, service, freshness, and social dining. We also optimize your presence on delivery platforms while driving direct online ordering and in-person dining that builds loyalty and higher margins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can restaurants see marketing results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Restaurants can see results relatively quickly due to local market dynamics. Social media and review improvements show within 30 days, local SEO results appear in 60-90 days, and comprehensive strategies typically achieve full results in 3-6 months. We track reservations, online orders, and customer retention monthly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you work with all types of restaurants and hospitality businesses?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we work with fine dining, casual restaurants, fast casual, bars, cafes, hotels, and catering companies. Each requires different psychology - fine dining emphasizes experience and exclusivity, while fast casual focuses on convenience and value. We tailor strategies to your specific hospitality segment and target customer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Lead Form */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Fill Your Tables</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get a custom restaurant marketing strategy that attracts diners, builds loyalty, and creates a buzz around your establishment.
              </p>
            </div>

            <Card className="card-professional max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get Your Free Restaurant Marketing Audit</CardTitle>
                <CardDescription>
                  We'll analyze your online presence, local SEO, and customer experience to identify growth opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {inlineSubmitSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Request Submitted!</h3>
                    <p className="text-green-700">
                      We'll analyze your restaurant and send your custom marketing strategy within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInlineSubmit(onInlineSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...registerInline("name")}
                          className={inlineErrors.name ? "border-red-500" : ""}
                        />
                        {inlineErrors.name && (
                          <p className="text-red-500 text-sm">{inlineErrors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@restaurant.com"
                          {...registerInline("email")}
                          className={inlineErrors.email ? "border-red-500" : ""}
                        />
                        {inlineErrors.email && (
                          <p className="text-red-500 text-sm">{inlineErrors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          placeholder="(555) 123-4567"
                          {...registerInline("phone")}
                          className={inlineErrors.phone ? "border-red-500" : ""}
                        />
                        {inlineErrors.phone && (
                          <p className="text-red-500 text-sm">{inlineErrors.phone.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Restaurant/Business Name *</Label>
                        <Input
                          id="company"
                          placeholder="Your restaurant name"
                          {...registerInline("company")}
                          className={inlineErrors.company ? "border-red-500" : ""}
                        />
                        {inlineErrors.company && (
                          <p className="text-red-500 text-sm">{inlineErrors.company.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Business Type *</Label>
                      <Select onValueChange={(value) => setValueInline("industry", value)} defaultValue="restaurants-hospitality">
                        <SelectTrigger className={inlineErrors.industry ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restaurants-hospitality">Restaurants & Hospitality</SelectItem>
                          <SelectItem value="fine-dining">Fine Dining</SelectItem>
                          <SelectItem value="casual-dining">Casual Dining</SelectItem>
                          <SelectItem value="fast-casual">Fast Casual</SelectItem>
                          <SelectItem value="bars-nightlife">Bars & Nightlife</SelectItem>
                          <SelectItem value="hotels-lodging">Hotels & Lodging</SelectItem>
                          <SelectItem value="catering">Catering Services</SelectItem>
                        </SelectContent>
                      </Select>
                      {inlineErrors.industry && (
                        <p className="text-red-500 text-sm">{inlineErrors.industry.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Marketing Challenges *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your restaurant marketing challenges, competition, or goals..."
                        rows={4}
                        {...registerInline("message")}
                        className={inlineErrors.message ? "border-red-500" : ""}
                      />
                      {inlineErrors.message && (
                        <p className="text-red-500 text-sm">{inlineErrors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isInlineSubmitting}
                    >
                      {isInlineSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 mr-2 animate-spin" />
                          Analyzing Your Restaurant...
                        </>
                      ) : (
                        <>
                          <Utensils className="w-5 h-5 mr-2" />
                          Get My Restaurant Growth Strategy
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Free audit • Custom strategy • 24-hour response
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-orange-600 to-red-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Fill Every Table?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Stop struggling with empty tables and inconsistent reservations. Get restaurant marketing 
                that creates buzz, builds loyalty, and turns your establishment into the local favorite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => setIsDialogOpen(true)}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Restaurant Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-orange-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-orange-200 text-center">
                Visual marketing • Experience strategy • Local domination
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) reset(); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Get Started with Restaurant Marketing</DialogTitle>
            <DialogDescription>
              Let's discuss your dining experience goals and help you fill every table.
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
              <p className="text-muted-foreground">I'll analyze your restaurant and send you a detailed marketing strategy within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
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
                  <Label>Business Type *</Label>
                  <Select onValueChange={(value) => setValue('businessType', value, { shouldValidate: true })}>
                    <SelectTrigger className={errors.businessType ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select your restaurant type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fine-dining">Fine Dining</SelectItem>
                      <SelectItem value="casual-dining">Casual Dining</SelectItem>
                      <SelectItem value="fast-casual">Fast Casual</SelectItem>
                      <SelectItem value="bars-nightlife">Bars & Nightlife</SelectItem>
                      <SelectItem value="hotels-lodging">Hotels & Lodging</SelectItem>
                      <SelectItem value="catering">Catering Services</SelectItem>
                      <SelectItem value="food-truck">Food Truck</SelectItem>
                      <SelectItem value="cafe-bakery">Cafe & Bakery</SelectItem>
                      <SelectItem value="other">Other Hospitality</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.businessType && <p className="text-sm text-destructive">{errors.businessType.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="selectedService">Selected Service *</Label>
                <Input id="selectedService" readOnly {...register('selectedService')} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marketingChallenge">Tell us about your marketing challenge *</Label>
                <Textarea 
                  id="marketingChallenge" 
                  placeholder="What's your restaurant's website? What challenges are you facing with reservations, customer loyalty, or local competition?" 
                  className={`min-h-[120px] ${errors.marketingChallenge ? 'border-destructive' : ''}`} 
                  {...register('marketingChallenge')} 
                />
                {errors.marketingChallenge && <p className="text-sm text-destructive">{errors.marketingChallenge.message}</p>}
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
    </>
  );
};

export default RestaurantsHospitalityMarketing;