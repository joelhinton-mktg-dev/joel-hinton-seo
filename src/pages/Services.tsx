import { Helmet } from 'react-helmet-async';
import { Search, TrendingUp, Target, Code, Brain, CheckCircle, ArrowRight, Users, Zap, Star, BarChart3, DollarSign, MessageSquare, Shield, Clock, Award, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { Link } from 'react-router-dom';

const Services = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Marketing Services Consultation');

  return (
    <>
      <Helmet>
        <title>Marketing Services | Psychology-Driven SEO, Growth Marketing & Custom Tools | Joel Hinton</title>
        <meta name="description" content="Psychology-driven marketing services that actually work. SEO, Growth Marketing, Paid Advertising, and Custom Development. Results-focused approach with proven ROI." />
        <meta name="keywords" content="marketing services, psychology-driven marketing, SEO services, growth marketing, paid advertising, custom development, marketing consultant" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Marketing Services | Psychology-Driven SEO, Growth Marketing & Custom Tools" />
        <meta property="og:description" content="Psychology-driven marketing services that actually work. SEO, Growth Marketing, Paid Advertising, and Custom Development." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Services | Psychology-Driven SEO, Growth Marketing & Custom Tools" />
        <meta name="twitter:description" content="Psychology-driven marketing services that actually work. SEO, Growth Marketing, Paid Advertising, and Custom Development." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Joel Hinton Digital Marketing Services",
            "description": "Psychology-driven marketing services including SEO, Growth Marketing, Paid Advertising, and Custom Development",
            "url": "https://joelhinton.com/services",
            "provider": {
              "@type": "Person",
              "name": "Joel Hinton"
            },
            "areaServed": {
              "@type": "Country", 
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Services",
                    "description": "Psychology-driven search engine optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Growth Marketing",
                    "description": "Data-driven growth strategies and optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Paid Advertising",
                    "description": "Performance-based advertising campaigns"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Development",
                    "description": "Custom marketing tools and automation systems"
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
            { label: "Services", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <Brain className="w-4 h-4 mr-2" />
                Psychology-Driven Approach
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary">Psychology-Driven</span> Marketing Services That <span className="gradient-text">Actually Work</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Stop wasting money on marketing tactics that sound good but don't deliver results. 
                Get proven strategies based on consumer psychology that turn prospects into loyal customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" asChild>
                  <Link to="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
                  <Link to="/pricing">
                    <DollarSign className="w-5 h-5 mr-2" />
                    View Pricing
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
                <div className="p-4">
                  <Search className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">SEO Services</p>
                </div>
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Growth Marketing</p>
                </div>
                <div className="p-4">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Paid Advertising</p>
                </div>
                <div className="p-4">
                  <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Custom Tools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Core <span className="gradient-text">Marketing Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each service is built on deep understanding of consumer psychology, backed by data, and optimized for measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* SEO Services */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Search className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">SEO Services</CardTitle>
                      <CardDescription className="text-base">Psychology-driven search optimization</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    SEO that understands search psychology. We optimize for how people actually search, think, and make decisions - 
                    not just algorithms. Get rankings that convert.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Search psychology optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Answer Engine Optimization (AEO)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Local & Geographic SEO (GEO)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Content strategy & optimization</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-blue-900">Investment Range</span>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">Most Popular</Badge>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">$2,500 - $7,500</p>
                    <p className="text-sm text-blue-700">per month</p>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link to="/seo-services">
                      Learn More About SEO
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Growth Marketing */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Growth Marketing</CardTitle>
                      <CardDescription className="text-base">Data-driven growth strategies</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Full-funnel growth strategies that understand customer psychology at every stage. 
                    From awareness to advocacy, we optimize each touchpoint for maximum impact.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Conversion rate optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Customer journey mapping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">A/B testing & optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Marketing automation setup</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-green-900">Investment Range</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">$3,500 - $8,500</p>
                    <p className="text-sm text-green-700">per month</p>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link to="/growth-marketing">
                      Learn More About Growth Marketing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Paid Advertising */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Paid Advertising</CardTitle>
                      <CardDescription className="text-base">Performance-based ad campaigns</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Advertising campaigns built on psychological triggers and behavioral insights. 
                    Every ad is designed to resonate with your ideal customer's mindset and motivations.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Google Ads & Microsoft Ads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Social media advertising</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Psychological targeting & messaging</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">ROI tracking & optimization</span>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-purple-900">Management Fee</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">15-20%</p>
                    <p className="text-sm text-purple-700">of ad spend + $1,500 minimum</p>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link to="/paid-advertising">
                      Learn More About Paid Ads
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Vibe Coding */}
              <Card className="card-professional group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Vibe Coding</CardTitle>
                      <CardDescription className="text-base">Custom tools & automation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Replace expensive SaaS with custom-coded solutions built specifically for your business. 
                    Own your marketing technology instead of renting it.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">AI agents & automation systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Lead capture & nurturing tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Custom dashboards & reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">AEO/GEO automation</span>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-orange-900">Project Range</span>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">One-time</Badge>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">$5K - $35K+</p>
                    <p className="text-sm text-orange-700">per project</p>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                    <Link to="/vibe-coding">
                      Learn More About Custom Development
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Our Approach */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our <span className="gradient-text">Psychology-Driven</span> Approach?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most marketing focuses on tactics and tools. We focus on the human psychology behind every click, search, and purchase decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consumer Psychology First</h3>
                    <p className="text-muted-foreground">
                      We study how your customers think, what motivates them, and what psychological triggers drive their decisions. 
                      Every strategy is built on behavioral insights, not guesswork.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Optimization</h3>
                    <p className="text-muted-foreground">
                      Psychology provides the foundation, data provides the proof. We continuously test, measure, and optimize 
                      based on real performance metrics and user behavior.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results-Focused Strategy</h3>
                    <p className="text-muted-foreground">
                      We don't just drive traffic or increase impressions. We focus on the metrics that matter: 
                      qualified leads, conversions, and revenue growth that impacts your bottom line.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Deep Audience Understanding</h3>
                    <p className="text-muted-foreground">
                      We don't just know your audience demographics. We understand their fears, desires, objections, 
                      and decision-making processes to create messaging that truly resonates.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">The Psychology-Driven Difference</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                        <h4 className="font-semibold text-destructive mb-2">Traditional Marketing</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Focuses on tactics and tools</li>
                          <li>• Generic messaging for everyone</li>
                          <li>• Vanity metrics (clicks, impressions)</li>
                          <li>• One-size-fits-all approach</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2">Psychology-Driven Marketing</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Focuses on human behavior and motivation</li>
                          <li>• Personalized messaging for each audience</li>
                          <li>• Revenue and ROI metrics</li>
                          <li>• Customized for your specific market</li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600 mb-1">3.2x Average</p>
                      <p className="text-sm text-green-700">Improvement in conversion rates vs traditional approaches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Client <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from businesses that chose psychology-driven marketing over generic tactics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">SaaS Company</CardTitle>
                      <Badge variant="outline" className="text-xs">SEO Services</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">340%</p>
                        <p className="text-xs text-blue-700">Organic traffic increase</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">$2.1M</p>
                        <p className="text-xs text-green-700">Additional revenue</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Joel's psychology-driven approach to SEO didn't just improve our rankings - it transformed how we think about our customers."
                    </p>
                    <cite className="text-xs text-muted-foreground">- Sarah Chen, Marketing Director</cite>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <div>
                      <CardTitle className="text-lg">E-commerce Brand</CardTitle>
                      <Badge variant="outline" className="text-xs">Growth Marketing</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">185%</p>
                        <p className="text-xs text-green-700">Conversion rate improvement</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-2xl font-bold text-purple-600">67%</p>
                        <p className="text-xs text-purple-700">Reduction in CAC</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Understanding customer psychology at each funnel stage completely changed our conversion rates."
                    </p>
                    <cite className="text-xs text-muted-foreground">- Michael Rodriguez, CEO</cite>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-purple-600" />
                    <div>
                      <CardTitle className="text-lg">B2B Service Provider</CardTitle>
                      <Badge variant="outline" className="text-xs">Paid Advertising</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-2xl font-bold text-purple-600">4.2x</p>
                        <p className="text-xs text-purple-700">ROAS improvement</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-2xl font-bold text-orange-600">56%</p>
                        <p className="text-xs text-orange-700">Lower cost per lead</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "The psychological targeting strategies delivered our best-performing campaigns ever."
                    </p>
                    <cite className="text-xs text-muted-foreground">- Lisa Thompson, Growth Lead</cite>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <a href="/results">
                  View More Case Studies
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Which Service is Right for You */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Which Service is <span className="gradient-text">Right for You?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Not sure where to start? Use this guide to find the best service for your current business goals and challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-center">Start Here: What's Your Primary Goal?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                <div className="space-y-4">
                  <Link to="/seo-services">
                    <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Search className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">Increase Organic Traffic & Rankings</h4>
                          <p className="text-sm text-muted-foreground">Need more qualified visitors from search engines</p>
                        </div>
                      </div>
                      <div className="mt-3 pl-9">
                        <Badge variant="outline" className="text-blue-600">→ SEO Services</Badge>
                      </div>
                    </div>
                  </Link>

                  <Link to="/growth-marketing">
                  <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold">Improve Conversion Rates & Sales</h4>
                        <p className="text-sm text-muted-foreground">Getting traffic but need better conversion rates</p>
                      </div>
                    </div>
                    <div className="mt-3 pl-9">
                      <Badge variant="outline" className="text-green-600">→ Growth Marketing</Badge>
                    </div>
                  </div>
                </Link>

                <Link to="/paid-advertising">
                  <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-purple-600" />
                      <div>
                        <h4 className="font-semibold">Generate Immediate Leads & Sales</h4>
                        <p className="text-sm text-muted-foreground">Need fast results from paid advertising</p>
                      </div>
                    </div>
                    <div className="mt-3 pl-9">
                      <Badge variant="outline" className="text-purple-600">→ Paid Advertising</Badge>
                    </div>
                  </div>
                </Link>

                <Link to="/vibe-coding">
                  <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Code className="w-6 h-6 text-orange-600" />
                      <div>
                        <h4 className="font-semibold">Replace Expensive SaaS Tools</h4>
                        <p className="text-sm text-muted-foreground">Want custom solutions that fit your business perfectly</p>
                      </div>
                    </div>
                    <div className="mt-3 pl-9">
                      <Badge variant="outline" className="text-orange-600">→ Vibe Coding</Badge>
                    </div>
                  </div>
                </Link>
              </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-center">Timeline & Investment Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Quick Results (1-3 months)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Paid Advertising:</span>
                        <span className="text-purple-600">15-20% of ad spend</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Growth Marketing (CRO):</span>
                        <span className="text-green-600">$3,500-8,500/mo</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">Medium-term Results (3-6 months)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>SEO Services:</span>
                        <span className="text-blue-600">$2,500-7,500/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Full Growth Marketing:</span>
                        <span className="text-green-600">$3,500-8,500/mo</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">Long-term Assets (2-6 months)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Custom Tools (Simple):</span>
                        <span className="text-orange-600">$5K-15K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AI-Powered Systems:</span>
                        <span className="text-orange-600">$15K-35K</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-center">
                      <strong>Not sure?</strong> Schedule a free consultation to discuss your specific situation and goals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop wasting money on tactics that don't work. Get marketing strategies based on proven psychology 
                that turn prospects into loyal customers.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-200 mb-8">
                <CheckCircle className="w-5 h-5" />
                <span>Join 200+ businesses that chose psychology-driven marketing over generic tactics</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" asChild>
                <Link to="/contact">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent" asChild>
                <Link to="/pricing">
                  <DollarSign className="w-5 h-5 mr-2" />
                  View All Pricing
                </Link>
              </Button>
            </div>
            
            <p className="text-blue-200 mt-6 text-center">
              Free consultations • No sales pressure • Results-focused approach
            </p>
          </div>
        </section>

        <Footer />
      </div>
      
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        selectedService={selectedService}
      />
      
      <ProfessionalServiceSchema 
        serviceName="Marketing Services"
        serviceDescription="Psychology-driven marketing services including SEO, Growth Marketing, Paid Advertising, and Custom Development"
        serviceUrl="https://joelhintonmarketing.com/services"
        serviceType="Marketing Services"
      />
    </>
  );
};

export default Services;