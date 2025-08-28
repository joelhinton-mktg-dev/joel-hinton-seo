import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import { 
  Target, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Gauge,
  Eye,
  Users,
  Search,
  Facebook,
  Linkedin,
  Bot,
  DollarSign,
  Phone
} from "lucide-react";

const PaidAdvertising = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <PageBreadcrumb 
        items={[
          { label: "Paid Advertising", current: true }
        ]}
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Paid Media That Actually Converts
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Stop burning money on ads that don't work. Get AI-optimized campaigns with psychology-driven creative that turns clicks into customers.
            </p>
            
            <div className="bg-card p-6 rounded-lg border mb-8 max-w-3xl mx-auto">
              <p className="text-lg font-medium text-foreground">
                Most agencies charge 20% of ad spend just to set up basic campaigns. We charge a flat fee and optimize for your actual business goals.
              </p>
            </div>
            
            <Button size="lg" className="btn-hero text-lg px-8 py-3">
              <Target className="w-5 h-5 mr-2" />
              Get Your Ad Account Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Why Most Paid Ads Fail Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Most Paid Ads Fail</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the problem is the first step to the solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="card-professional h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Shield className="w-5 h-5" />
                  The Typical Agency Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Charge 15-20% of your ad spend (so they want you to spend more, not less)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Generic campaigns copied from other clients</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Focus on clicks and impressions instead of actual business results</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>No real understanding of your customer psychology</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Lock you into long contracts with poor performance</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional h-full border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Brain className="w-5 h-5" />
                  Our Paid Media Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Flat Monthly Fee:</p>
                    <p className="text-sm text-muted-foreground">We succeed when you succeed, not when you spend more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Psychology-First Creative:</p>
                    <p className="text-sm text-muted-foreground">Ads that speak to real customer motivations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">AI-Optimized Campaigns:</p>
                    <p className="text-sm text-muted-foreground">Machine learning + human insight for maximum ROI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business-Focused Metrics:</p>
                    <p className="text-sm text-muted-foreground">Optimize for revenue and profit, not vanity metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Complete Transparency:</p>
                    <p className="text-sm text-muted-foreground">You own your accounts and see everything we do</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Psychology-Driven Framework Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Psychology-Driven Ad Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach to creating ads that convert browsers into buyers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Customer Psychology Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Emotional triggers identification</li>
                  <li>• Decision journey mapping</li>
                  <li>• Objection analysis</li>
                  <li>• Competitor differentiation</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4">
                  "We don't guess what motivates clicks - we know what drives conversions"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">AI-Powered Campaign Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Smart audience targeting</li>
                  <li>• Creative testing automation</li>
                  <li>• Landing page alignment</li>
                  <li>• Attribution modeling</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4">
                  "Every ad dollar working toward your actual business goals"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Systematic Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Continuous A/B testing</li>
                  <li>• Bid strategy optimization</li>
                  <li>• Cross-platform attribution</li>
                  <li>• ROI-focused reporting</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4">
                  "Turn advertising from expense into predictable investment"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Performance Scaling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Profitable scaling strategies</li>
                  <li>• Budget allocation optimization</li>
                  <li>• Customer lifetime value focus</li>
                  <li>• Predictable growth systems</li>
                </ul>
                <p className="text-xs font-medium text-primary mt-4">
                  "Scale what works, eliminate what doesn't"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Paid Media Services & Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent, flat-fee pricing that aligns with your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="card-professional relative">
              <Badge className="absolute -top-3 left-6 bg-primary">Most Popular</Badge>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Paid Media Management
                </CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-3xl font-bold text-primary">$500</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Platform Management:</span>
                    <span className="text-sm">Google Ads, Meta, LinkedIn</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Campaign Setup & Optimization:</span>
                      <span className="text-sm block text-muted-foreground">Search, Display, Shopping, Social campaigns</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">AI-Optimized Ad Copy:</span>
                      <span className="text-sm block text-muted-foreground">Psychology-driven creative with systematic testing</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Landing Page Strategy:</span>
                      <span className="text-sm block text-muted-foreground">Conversion-optimized recommendations and testing</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Conversion Tracking:</span>
                      <span className="text-sm block text-muted-foreground">Complete attribution setup and ROI measurement</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Monthly Strategy Calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium">Custom Attribution Workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium text-primary">No Percentage Fees - Keep 100% Control</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Perfect For:</span> Businesses spending $2,000-$20,000/month on ads</p>
                  <p><span className="font-medium">Minimum Ad Spend:</span> $1,500/month</p>
                  <p><span className="font-medium">Contract Terms:</span> Month-to-month (no lock-ins)</p>
                </div>

                <Button className="w-full btn-secondary">
                  Start Managing My Ads
                </Button>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Eye className="w-6 h-6 text-secondary" />
                  Paid Media Audit & Strategy
                </CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-3xl font-bold text-secondary">$300</span>
                  <span className="text-muted-foreground"> one-time</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Complete ad account audit (Google, Meta, LinkedIn)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Customer psychology and targeting analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Creative and copy performance review</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Landing page and conversion funnel assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Competitor advertising research and gap analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>90-day optimization roadmap with specific recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Budget allocation recommendations across platforms</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Timeline:</span> 1 week</p>
                  <p><span className="font-medium">Perfect For:</span> Evaluating current ad performance</p>
                  <p><span className="font-medium">Deliverable:</span> Comprehensive audit report + strategy</p>
                </div>

                <Button variant="outline" className="w-full">
                  Audit My Ad Performance
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master-level optimization across all major advertising platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle>Google Ads Mastery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Search Campaigns</h4>
                  <p className="text-sm text-muted-foreground">Capture high-intent traffic when customers are ready to buy</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Display & Video</h4>
                  <p className="text-sm text-muted-foreground">Stay top-of-mind throughout the customer decision process</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Shopping Campaigns</h4>
                  <p className="text-sm text-muted-foreground">E-commerce optimization with product-specific targeting</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Performance Max</h4>
                  <p className="text-sm text-muted-foreground">AI-powered campaigns across all Google properties</p>
                </div>
                <p className="text-xs font-medium text-primary mt-4">
                  "Be found exactly when your customers are searching for solutions"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Meta Advertising</CardTitle>
                <CardDescription>Facebook & Instagram</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Interest & Behavioral Targeting</h4>
                  <p className="text-sm text-muted-foreground">Reach customers based on psychology profiles</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Lookalike Audiences</h4>
                  <p className="text-sm text-muted-foreground">Find more customers similar to your best clients</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Retargeting Campaigns</h4>
                  <p className="text-sm text-muted-foreground">Re-engage visitors with personalized messaging</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Video & Creative Testing</h4>
                  <p className="text-sm text-muted-foreground">Systematic approach to high-converting creative</p>
                </div>
                <p className="text-xs font-medium text-primary mt-4">
                  "Interrupt customers with messages they actually want to see"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-700/10 rounded-lg flex items-center justify-center mb-4">
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </div>
                <CardTitle>LinkedIn Advertising</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">B2B Lead Generation</h4>
                  <p className="text-sm text-muted-foreground">Reach decision-makers with professional targeting</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Account-Based Marketing</h4>
                  <p className="text-sm text-muted-foreground">Target specific companies and stakeholders</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Thought Leadership Content</h4>
                  <p className="text-sm text-muted-foreground">Build authority while generating leads</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Sales Funnel Integration</h4>
                  <p className="text-sm text-muted-foreground">Connect LinkedIn leads with sales processes</p>
                </div>
                <p className="text-xs font-medium text-primary mt-4">
                  "Reach B2B buyers where they make professional decisions"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories & ROI Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses using our psychology-driven approach
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">Real Estate</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">400%</div>
                    <div className="text-xs text-muted-foreground">ROAS</div>
                  </div>
                </div>
                <CardTitle className="text-lg">Real Estate Investment Case Study</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Challenge:</span>
                    <span>Saturated "we buy houses" market</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ad Spend:</span>
                    <span>$5,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Management Fee:</span>
                    <span className="text-primary">$500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Results:</span>
                    <span>150+ leads/month at $33 CPL</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-primary">Key Win:</div>
                  <p>Psychology-driven ad copy that addressed seller objections upfront</p>
                  <div className="font-medium text-secondary mt-2">Savings:</div>
                  <p>$500/month vs typical 20% fee ($1,000+)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">E-commerce</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">250%</div>
                    <div className="text-xs text-muted-foreground">ROAS Increase</div>
                  </div>
                </div>
                <CardTitle className="text-lg">E-commerce Scaling Case Study</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Challenge:</span>
                    <span>Luxury product, long consideration</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Strategy:</span>
                    <span>Multi-platform retargeting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ROAS Improvement:</span>
                    <span className="text-primary">250%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AOV Increase:</span>
                    <span>40%</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-primary">Key Win:</div>
                  <p>Custom attribution showing true customer journey impact</p>
                  <div className="font-medium text-secondary mt-2">Scale:</div>
                  <p>Expanded from $3K to $15K monthly ad spend profitably</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">B2B SaaS</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">35%</div>
                    <div className="text-xs text-muted-foreground">CPL Reduction</div>
                  </div>
                </div>
                <CardTitle className="text-lg">B2B SaaS Case Study</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Challenge:</span>
                    <span>Complex software sales cycle</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Approach:</span>
                    <span>LinkedIn + Google combined</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CPL Reduction:</span>
                    <span className="text-primary">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Demos:</span>
                    <span>+12 additional</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-primary">Business Impact:</div>
                  <p>$180K+ additional pipeline growth</p>
                  <div className="font-medium text-secondary mt-2">Efficiency:</div>
                  <p>Same results with 60% less ad spend</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Paid Advertising FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our transparent, results-focused approach
            </p>
          </div>

          <div className="space-y-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">Why flat fee instead of percentage of ad spend?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Percentage fees create conflicts of interest - agencies want you to spend more, not optimize better. Our flat fee aligns our success with your ROI, not your budget size.</p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">What's the minimum ad spend to work with you?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>$1,500/month minimum ensures enough data for meaningful optimization. Below that, you're better off with simple campaigns you can manage yourself.</p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">Do you guarantee specific ROAS results?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We guarantee systematic implementation of proven optimization methods. ROAS depends on your market, offer, and competition. We optimize for maximum profitability within your market reality.</p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you improve underperforming ads?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Basic optimizations show improvement in 1-2 weeks. Systematic improvements compound over 30-90 days as we gather data and optimize. Quick wins first, then systematic scaling.</p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg">What happens if we want to stop working together?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You own everything - accounts, audiences, data, creative. We'll provide transition documentation. No contracts or penalties, just professional handoff.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Profitably?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop overpaying for ad management. Get psychology-driven campaigns with transparent pricing.
          </p>
          
          <div className="bg-card p-8 rounded-lg border mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center text-left">
              <div>
                <h3 className="text-lg font-bold mb-4">Get Your Ad Account Audit</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Current monthly ad spend"
                    className="w-full p-3 border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="Primary advertising platforms"
                    className="w-full p-3 border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="Biggest paid media challenge"
                    className="w-full p-3 border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="Current cost per lead/sale"
                    className="w-full p-3 border rounded-lg bg-background"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-3 border rounded-lg bg-background"
                  />
                  <Button className="w-full btn-hero">
                    <Target className="w-4 h-4 mr-2" />
                    Audit My Ad Performance
                  </Button>
                </form>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>See exactly where your ad budget is being wasted</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>No obligation - just actionable insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Managing $200K+ monthly ad spend for 25+ businesses</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-medium">Save money on management fees, make more from better optimization</span>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Join businesses that chose results over retainers • No contracts • Transparent pricing
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaidAdvertising;