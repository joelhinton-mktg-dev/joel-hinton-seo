import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { 
  Home, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Zap, DollarSign, MapPin, 
  Clock, Shield, Building2, Heart, Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


const RealEstateMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Real Estate Marketing Audit');
  return (
    <>
      <Helmet>
        <title>Real Estate Marketing | Investment Property Marketing | Central Florida | AIO Growth SEO</title>
        <meta name="description" content="Real estate marketing for agents and brokers in Volusia & Flagler Counties. Local SEO and lead generation strategies that convert browsers to buyers." />
        <meta name="keywords" content="real estate marketing, property marketing psychology, real estate lead generation, luxury home marketing, investment property marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Real Estate Marketing Psychology | Investment Property Marketing" />
        <meta property="og:description" content="Psychology-driven real estate marketing strategies that convert browsers to buyers with proven 285% traffic growth." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Marketing Psychology" />
        <meta name="twitter:description" content="Psychology-driven real estate marketing strategies with proven results." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Real Estate & Investment", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Home className="w-4 h-4 mr-2" />
                Real Estate Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Real Estate Marketing <span className="text-primary">Psychology</span> That Converts Browsers to Buyers
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Real estate is sold with emotion and justified with logic. Our psychology-driven strategies tap into dream fulfillment, 
                investment anxiety, and lifestyle aspirations to turn prospects into qualified buyers ready to act. 
                Through strategic <Link to="/local-seo" className="text-primary hover:underline">local SEO</Link> and targeted
                <Link to="/local-lead-generation" className="text-primary hover:underline">local lead generation</Link> campaigns, we ensure your properties get maximum visibility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get Real Estate Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Real Estate Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">285% Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">340% More Qualified Leads</p>
                </div>
                <div className="p-4">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
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
                Real Estate <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real estate buyers are driven by powerful psychological forces. We leverage these triggers to create 
                irresistible marketing that moves prospects from browsing to buying.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Scarcity Psychology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "Only 3 units left at this price" or "Interest rates rising next month" creates urgency that compels immediate action.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Limited inventory messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Market timing urgency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Price increase warnings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Seasonal opportunity windows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Investment FOMO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fear of missing out on appreciation, tax benefits, or market timing drives investment property decisions and upgrades.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Appreciation potential messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Tax advantage emphasis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Cash flow projections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Market cycle positioning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Dream Lifestyle Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Help prospects visualize their ideal lifestyle, family moments, and social status that comes with the property.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Lifestyle-focused imagery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Family moment scenarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Social status positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Future state visualization</span>
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
                Real Estate Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every real estate professional faces unique marketing challenges. We've developed specialized solutions 
                for the most common pain points in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Lead Qualification</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Attract serious buyers while filtering out tire-kickers who waste your time and resources.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Pre-qualification forms with psychological triggers</li>
                      <li>• Budget-based content segmentation</li>
                      <li>• Intent-based lead scoring systems</li>
                      <li>• Automated qualification sequences</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 65% improvement in lead quality</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Market Timing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Help prospects overcome timing hesitation and take action in any market condition.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Market condition education content</li>
                      <li>• Timing psychology messaging</li>
                      <li>• Seasonal opportunity campaigns</li>
                      <li>• Fear-of-missing-out triggers</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 40% reduction in sales cycle length</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Trust Building</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Establish credibility and trust in a market where buyers are making the largest financial decision of their lives.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Client success story campaigns</li>
                      <li>• Expert positioning content</li>
                      <li>• Social proof integration</li>
                      <li>• Transparency-focused messaging</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 85% increase in consultation bookings</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Price Objections</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Overcome price resistance by shifting focus to value, investment potential, and opportunity cost.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Value-based pricing psychology</li>
                      <li>• Investment return calculators</li>
                      <li>• Opportunity cost messaging</li>
                      <li>• Payment psychology optimization</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 30% improvement in price acceptance</div>
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
                Proven <span className="gradient-text">Real Estate Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our psychology-driven real estate marketing consistently delivers measurable improvements 
                across all key performance indicators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">285%</div>
                  <div className="text-lg font-semibold mb-2">Traffic Growth</div>
                  <p className="text-sm text-muted-foreground">Qualified prospects finding your listings</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
                  <div className="text-lg font-semibold mb-2">Lead Generation</div>
                  <p className="text-sm text-muted-foreground">High-quality buyer and seller inquiries</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">450%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Return on marketing investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">65%</div>
                  <div className="text-lg font-semibold mb-2">Faster Sales</div>
                  <p className="text-sm text-muted-foreground">Reduced time on market</p>
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
                Real Estate <span className="gradient-text">Success Story</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Home className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Premium Real Estate Group</CardTitle>
                      <CardDescription className="text-lg">Luxury Property Specialists in South Florida</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">340%</div>
                      <div className="text-sm text-blue-700">Qualified Leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">$8.2M</div>
                      <div className="text-sm text-blue-700">Sales Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">28%</div>
                      <div className="text-sm text-blue-700">Higher Margins</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">
                        Premium Real Estate Group was struggling to attract qualified luxury buyers. Their generic marketing attracted 
                        price shoppers who weren't serious about purchasing high-end properties. Lead quality was poor, and conversion 
                        rates were declining despite increased ad spend.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Our Psychology-Driven Solution</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Lifestyle Visualization:</strong> Created immersive virtual tours and lifestyle content showing the exclusive experiences luxury properties provide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Investment Psychology:</strong> Developed content positioning luxury real estate as wealth preservation and status symbols</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Scarcity Triggers:</strong> Implemented exclusive opportunity messaging and limited availability campaigns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1" />
                          <span><strong>Social Proof:</strong> Showcased celebrity and high-net-worth client success stories</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">The Results</h4>
                      <p className="text-green-700 text-sm">
                        "AIO Growth understood real estate psychology better than agencies we'd worked with for years.
                        The investment mindset triggers and lifestyle visualization strategies transformed our lead quality completely.
                        We're not just selling houses—we're selling dreams and lifestyles."
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-green-800">Sarah M., Managing Partner</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Unique Marketing Approach */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Unique <span className="gradient-text">Real Estate Approach</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                While other marketers treat real estate like any other product, we understand the unique psychology 
                of property buyers and the emotional journey of home ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6">Market Segmentation Psychology</h3>
                <div className="space-y-4">
                  <Card className="card-professional">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary mb-2">Luxury Market</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Psychology: Status, exclusivity, lifestyle enhancement, wealth preservation
                      </p>
                      <p className="text-xs">
                        Triggers: Limited availability, celebrity associations, architectural significance, investment potential
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-professional">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-green-600 mb-2">First-Time Buyers</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Psychology: Achievement, stability, family future, financial anxiety
                      </p>
                      <p className="text-xs">
                        Triggers: Affordability focus, stability messaging, future growth potential, family benefits
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-professional">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-blue-600 mb-2">Investment Properties</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Psychology: ROI maximization, cash flow, tax benefits, portfolio growth
                      </p>
                      <p className="text-xs">
                        Triggers: Financial projections, market analysis, tax advantages, passive income potential
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Seasonal Psychology Strategy</h3>
                <div className="space-y-4">
                  <Card className="card-professional">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-orange-600 mb-2">Spring Market Surge</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Peak buying season - family planning, new beginnings psychology
                      </p>
                      <p className="text-xs">
                        Strategy: New start messaging, family-focused content, inventory scarcity campaigns
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-professional">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-red-600 mb-2">Winter Opportunities</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Motivated sellers, less competition, serious buyers only
                      </p>
                      <p className="text-xs">
                        Strategy: Opportunity messaging, motivated seller benefits, holiday timing psychology
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-professional">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-600 mb-2">Florida Considerations</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Hurricane season, snowbird patterns, tourism impact
                      </p>
                      <p className="text-xs">
                        Strategy: Safety focus, seasonal rental potential, weather-resistant features
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Recommendations */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Real Estate Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the real estate marketing package that fits your business model and growth goals. 
                All packages include industry-specific psychology and Florida market expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Agent Accelerator</CardTitle>
                  <CardDescription>Perfect for individual agents</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$2,497<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Personal branding & positioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Lead generation campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Property listing optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Social media management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Email nurture sequences</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => {
                    selectService("Agent Accelerator - $1,997/mo");
                  }}>
                    Start Agent Accelerator
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Team Dominator</CardTitle>
                  <CardDescription>For real estate teams & brokerages</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$4,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Agent Accelerator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Team branding & positioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced lead distribution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Market area domination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Luxury market positioning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Investment property campaigns</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => {
                    selectService("Market Authority - $3,497/mo");
                  }}>
                    Dominate Your Market
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Brokerage Empire</CardTitle>
                  <CardDescription>For large brokerages & franchises</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$8,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Team Dominator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-location optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Agent recruitment marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Franchise brand compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Performance analytics dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Priority strategy consulting</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" onClick={() => {
                    selectService("Real Estate Empire - $5,497/mo");
                  }}>
                    Build Your Empire
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
                Real Estate Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How is real estate marketing different from other industries?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Real estate is unique because it involves the largest financial decision most people make. The psychology is driven by emotion (dream fulfillment, security, status) justified with logic (investment, location, features). We leverage visualization, scarcity, and investment psychology rather than generic marketing tactics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you work with both residential and commercial real estate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we work with residential agents, commercial brokers, property developers, and investment firms. Each requires different psychological approaches - residential focuses on lifestyle and family, while commercial emphasizes ROI and business benefits. We tailor strategies to your specific market segment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you handle seasonal real estate marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We adjust messaging and strategy based on seasonal psychology. Spring campaigns focus on new beginnings and family planning. Summer emphasizes quick moves and availability. Fall targets serious buyers before winter. Winter positions opportunities and motivated sellers. In Florida, we also account for hurricane season and snowbird patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes your approach different from other real estate marketers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most real estate marketing focuses on features and listings. We focus on the psychology behind buying decisions - dream fulfillment, investment anxiety, social status, and family security. Our campaigns target emotional triggers first, then provide logical justification. This approach generates higher-quality leads who are ready to act.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can we expect to see results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Real estate marketing typically shows initial results within 30-60 days for lead generation, with full optimization achieved in 3-6 months. However, real estate has longer sales cycles, so tracking leads to closed sales may take 6-12 months. We provide monthly reports showing lead quality improvements, engagement metrics, and conversion progress.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Real Estate Marketing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop competing on price and start winning with psychology. Get a custom real estate marketing strategy 
                that turns browsers into buyers and prospects into profits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Real Estate Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-blue-200 text-center">
                Free consultation • No obligations • Real estate marketing expertise
              </p>
            </div>
          </div>
        </section>

        <Footer />

        <ContactDialog 
          isOpen={isOpen}
          onClose={closeDialog}
          title="Get Your Free Real Estate Marketing Audit"
          description="Let's discuss how we can help attract qualified buyers and grow your real estate business."
          defaultService={selectedService}
          businessTypes={businessTypes.realEstate}
        />
      </div>
    </>
  );
};

export default RealEstateMarketing;