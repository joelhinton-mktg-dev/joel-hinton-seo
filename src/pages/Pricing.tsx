import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Check, Calculator, Zap, Shield, Target, TrendingUp } from "lucide-react";

const Pricing = () => {
  const seoServices = [
    {
      name: "Basic SEO Plan",
      price: "$500",
      type: "One-time",
      description: "Perfect for small businesses starting their SEO journey",
      features: [
        "Complete technical SEO audit and fixes",
        "On-page optimization for up to 10 pages", 
        "Keyword research and competitive analysis",
        "Google Business Profile optimization",
        "Schema markup implementation",
        "30-day performance report"
      ],
      timeline: "2-3 weeks",
      bestFor: "Local businesses, service providers, new websites",
      popular: false
    },
    {
      name: "Growth SEO Plan", 
      price: "$1,000",
      type: "One-time",
      description: "Perfect for businesses ready to scale organically",
      features: [
        "Everything in Basic SEO Plan",
        "Programmatic SEO framework (auto-generate scalable pages)",
        "Local SEO optimization for up to 3 locations",
        "Advanced AEO & GEO targeting for AI search",
        "Content strategy and creation templates", 
        "90-day performance tracking and optimization"
      ],
      timeline: "4-6 weeks",
      bestFor: "Growing businesses, multi-location companies, e-commerce",
      popular: true
    }
  ];

  const growthServices = [
    {
      name: "Growth Strategy Audit",
      price: "$750", 
      type: "One-time",
      description: "Perfect for businesses with traffic but poor conversions",
      features: [
        "Complete customer journey analysis",
        "Conversion psychology assessment",
        "Channel performance audit and recommendations",
        "Message-market fit evaluation", 
        "Competitive positioning analysis",
        "90-day growth roadmap with priorities"
      ],
      timeline: "2 weeks", 
      bestFor: "SaaS, e-commerce, service businesses with existing traffic",
      popular: false
    },
    {
      name: "Full Growth Marketing System",
      price: "$2,500",
      type: "One-time", 
      description: "Perfect for businesses ready to systematically scale",
      features: [
        "Everything in Growth Strategy Audit",
        "Landing page optimization using psychology principles",
        "Email marketing automation setup and sequences",
        "Multi-channel campaign development",
        "Attribution tracking and analytics implementation",
        "6-month performance tracking and optimization"
      ],
      timeline: "4-6 weeks",
      bestFor: "Scaling businesses ready for systematic growth",
      popular: false
    }
  ];

  const paidServices = [
    {
      name: "Paid Media Audit",
      price: "$300",
      type: "One-time",
      description: "Perfect for evaluating current ad performance", 
      features: [
        "Complete ad account audit (Google, Meta, LinkedIn)",
        "Customer psychology and targeting analysis",
        "Creative and copy performance review",
        "Landing page and conversion assessment",
        "90-day optimization roadmap"
      ],
      timeline: "1 week",
      bestFor: "Businesses currently running ads with poor ROI",
      popular: false
    },
    {
      name: "Paid Media Management", 
      price: "$500",
      type: "/month",
      description: "Perfect for businesses ready for professional ad management",
      features: [
        "Google Ads, Meta, and LinkedIn campaign management",
        "AI-optimized ad copy and creative testing", 
        "Landing page strategy and conversion tracking",
        "Custom attribution workflows and reporting",
        "Monthly strategy calls and optimization"
      ],
      timeline: "Month-to-month",
      bestFor: "Businesses spending $2K-$20K/month on ads", 
      popular: true,
      note: "Minimum Ad Spend: $1,500/month"
    }
  ];

  const packages = [
    {
      name: "The Local Dominator",
      price: "$800",
      services: ["Basic SEO Plan ($500)", "Paid Media Audit ($300)"],
      description: "Perfect for local businesses starting digital marketing",
      benefit: "Get found organically AND optimize your advertising"
    },
    {
      name: "The Growth Accelerator", 
      price: "$1,750",
      services: ["Growth SEO Plan ($1,000)", "Growth Strategy Audit ($750)"],
      description: "Perfect for businesses ready to scale systematically",
      benefit: "Organic visibility + conversion optimization",
      popular: true
    },
    {
      name: "The Complete System",
      price: "$3,000 first month, then $500/month", 
      services: ["Growth SEO Plan ($1,000)", "Full Growth Marketing System ($2,500)", "Paid Media Management ($500/month)"],
      description: "Perfect for serious businesses ready for comprehensive growth",
      benefit: "Everything you need to dominate your market"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <PageBreadcrumb 
        items={[
          { label: "Pricing", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <nav className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span>/</span>
            <span className="text-foreground">Pricing</span>
          </nav>
          
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            No Retainers. No Fluff. Just Plans That Work.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transparent pricing for real results. Choose what you need, pay what it's worth, own what you build.
          </p>
          
          <p className="text-lg text-foreground mb-8">
            We believe marketing pricing should be simple and transparent. Whether you're just starting out or ready to scale, 
            our plans give you exactly what you need — without bloated retainers or hidden costs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              No Long-Term Contracts
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              No Percentage Fees
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              No Hidden Costs
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Our Pricing is Different */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Our Pricing is Different</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl text-destructive">The Agency Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">$3,000/month retainers for basic keyword research and two blog posts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">20% of your ad spend just to click buttons in Google Ads</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">6-month minimum contracts with vague "ongoing optimization"</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">You never own what you pay for - everything disappears when you leave</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Transparent Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Fixed Pricing</p>
                    <p className="text-muted-foreground text-sm">Know exactly what you're paying and what you get</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Own Everything</p>
                    <p className="text-muted-foreground text-sm">You keep all accounts, data, content, and systems we build</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">No Minimums</p>
                    <p className="text-muted-foreground text-sm">Month-to-month on ongoing services, one-time for projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Value-Based</p>
                    <p className="text-muted-foreground text-sm">Pay for results and systems, not time and retainers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
              "If you've been told marketing means paying for ongoing mystery work, you've been sold a retainer, not results."
            </p>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">SEO Services</h2>
          <p className="text-center text-muted-foreground mb-12">One-time investments that compound over time</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className={`card-professional relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <p><strong>Timeline:</strong> {service.timeline}</p>
                    <p><strong>Best for:</strong> {service.bestFor}</p>
                  </div>
                  
                  <Button variant={service.popular ? "hero" : "outline"} className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Marketing Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Growth Marketing Services</h2>
          <p className="text-center text-muted-foreground mb-12">Systematic scaling based on psychology and data</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {growthServices.map((service, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-secondary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <p><strong>Timeline:</strong> {service.timeline}</p>
                    <p><strong>Best for:</strong> {service.bestFor}</p>
                  </div>
                  
                  <Button variant="cta" className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Media Services */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Paid Advertising Services</h2>
          <p className="text-center text-muted-foreground mb-12">AI-optimized campaigns with transparent, flat-fee pricing</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {paidServices.map((service, index) => (
              <Card key={index} className={`card-professional relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <p><strong>Timeline:</strong> {service.timeline}</p>
                    <p><strong>Best for:</strong> {service.bestFor}</p>
                    {service.note && <p><strong>Note:</strong> {service.note}</p>}
                  </div>
                  
                  <Button variant={service.popular ? "hero" : "outline"} className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Package Combinations */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Popular Package Combinations</h2>
          <p className="text-center text-muted-foreground mb-12">Save money with strategic service bundles</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`card-professional relative ${pkg.popular ? 'ring-2 ring-secondary' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Best Value
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {pkg.services.map((service, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">
                        • {service}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-primary mb-6">{pkg.benefit}</p>
                  <Button variant={pkg.popular ? "cta" : "outline"} className="w-full">
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Calculator className="w-8 h-8 inline-block mr-3" />
            ROI Calculator
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl text-destructive">Traditional Agency Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Website:</span>
                    <span className="font-medium">$10,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SEO Retainer:</span>
                    <span className="font-medium">$36,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paid Media (20% of $5K/month):</span>
                    <span className="font-medium">$12,000/year</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Year 1:</span>
                    <span className="text-destructive">$58,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Growth SEO Plan:</span>
                    <span className="font-medium">$1,000 (one-time)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Growth Marketing System:</span>
                    <span className="font-medium">$2,500 (one-time)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paid Media Management:</span>
                    <span className="font-medium">$6,000/year</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Year 1:</span>
                    <span className="text-primary">$9,500</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">You Save: $48,500+ in Year 1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plus: You own everything we build (agencies take it when you leave)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Start with an Audit</CardTitle>
                <CardDescription>Not sure what you need? Begin with a comprehensive audit</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  <li>• Low-risk way to see exactly where you're losing money/opportunities</li>
                  <li>• Get specific recommendations for your situation</li>
                </ul>
                <Button variant="outline" className="w-full">Schedule Audit</Button>
              </CardContent>
            </Card>

            <Card className="card-professional ring-2 ring-primary">
              <CardHeader>
                <CardTitle>Book a Strategy Call</CardTitle>
                <CardDescription>30-minute consultation to discuss your goals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  <li>• Get personalized recommendations for your business</li>
                  <li>• Understand which services will deliver the highest ROI</li>
                </ul>
                <Button variant="hero" className="w-full">Book Strategy Call</Button>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Choose a Plan</CardTitle>
                <CardDescription>Ready to move forward? Select your service above</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  <li>• All plans include consultation and strategic guidance</li>
                  <li>• Start seeing results in 2-4 weeks depending on service</li>
                </ul>
                <Button variant="cta" className="w-full">View All Services</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <p className="text-lg font-medium text-primary mb-2">Risk Reversal</p>
            <p className="text-muted-foreground">
              Every service includes strategic consultation to ensure you're investing in the right solutions for your business goals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;