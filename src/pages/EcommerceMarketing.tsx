import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, TrendingUp, Users, CheckCircle, ArrowRight, Target, Award, 
  BarChart3, Phone, Calendar, Star, Zap, CreditCard, Eye, 
  Heart, Repeat, Package, MousePointer
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';


const EcommerceMarketing = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('E-commerce Marketing Audit');
  return (
    <>
      <Helmet>
        <title>E-commerce Marketing Psychology | Online Store Growth | Conversion Optimization | Joel Hinton</title>
        <meta name="description" content="E-commerce marketing psychology that reduces cart abandonment and increases conversions. Proven strategies for online stores with 265% traffic growth." />
        <meta name="keywords" content="ecommerce marketing, conversion optimization, cart abandonment, online store marketing, ecommerce psychology, retail marketing" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="E-commerce Marketing Psychology | Online Store Growth" />
        <meta property="og:description" content="E-commerce marketing strategies that reduce cart abandonment and increase conversions with proven results." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Industries", href: "/industries" },
            { label: "E-commerce & Retail", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                E-commerce Marketing Specialist
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                E-commerce Marketing <span className="text-primary">Psychology</span> That Converts Browsers to Buyers
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Online shoppers are bombarded with choices and distractions. Our psychology-driven strategies leverage social proof, 
                scarcity urgency, and personalization to overcome purchase hesitation and reduce cart abandonment. 
                Combined with our proven <Link to="/growth-marketing" className="text-primary hover:underline">growth marketing</Link> techniques and targeted 
                <Link to="/paid-advertising" className="text-primary hover:underline">paid advertising</Link>, we maximize your conversion potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Target className="w-5 h-5 mr-2" />
                  Get E-commerce Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Phone className="w-5 h-5 mr-2" />
                  Conversion Consultation
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
                <div className="p-4">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">265% Traffic Growth</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">310% More Conversions</p>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">425% ROI Increase</p>
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
                E-commerce <span className="gradient-text">Psychology Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Online shopping psychology is driven by confidence, urgency, and social validation. We leverage these triggers 
                to overcome purchase hesitation and create irresistible buying experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Social Proof</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "1,000+ happy customers" and detailed reviews build confidence in uncertain online shoppers and reduce purchase anxiety.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Customer review optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Sales counter displays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>User-generated content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Testimonial integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Scarcity Urgency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "Only 3 left in stock" or "Sale ends tonight" creates urgency that compels immediate purchase decisions and reduces procrastination.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Limited stock messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Time-sensitive offers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Flash sale campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Countdown timers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Personalization Psychology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "Recommended for you" and behavior-based suggestions make customers feel understood and increase purchase likelihood.
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Behavioral targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Product recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Custom content experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Retargeting campaigns</span>
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
                E-commerce Marketing <span className="gradient-text">Challenges We Solve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                E-commerce faces unique challenges from cart abandonment to product discovery. 
                We've developed specialized solutions for online retail success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <MousePointer className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Cart Abandonment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Recover lost sales from the 70% of customers who abandon their carts before completing purchase.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cart abandonment email sequences</li>
                      <li>• Exit-intent popup optimization</li>
                      <li>• Checkout process simplification</li>
                      <li>• Payment psychology optimization</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 45% cart abandonment recovery</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Product Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Help customers find products they want to buy through improved search, navigation, and recommendation systems.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Search functionality optimization</li>
                      <li>• Category page psychology</li>
                      <li>• Product recommendation engines</li>
                      <li>• Visual merchandising strategies</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 60% improvement in product page visits</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Repeat className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Customer Retention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Turn one-time buyers into loyal customers through personalized experiences and retention psychology.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Post-purchase email sequences</li>
                      <li>• Loyalty program development</li>
                      <li>• Personalized product recommendations</li>
                      <li>• Customer lifetime value campaigns</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 180% increase in customer lifetime value</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Competitive Pricing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Compete on value rather than price alone by emphasizing quality, service, and unique benefits that justify your pricing.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Solution:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Value proposition optimization</li>
                      <li>• Bundle and package strategies</li>
                      <li>• Quality differentiation messaging</li>
                      <li>• Price anchoring techniques</li>
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">Result: 35% improvement in profit margins</div>
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
                Proven <span className="gradient-text">E-commerce Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our e-commerce marketing consistently delivers measurable improvements in traffic, 
                conversions, and customer lifetime value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">265%</div>
                  <div className="text-lg font-semibold mb-2">Traffic Growth</div>
                  <p className="text-sm text-muted-foreground">Qualified shopping traffic</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">310%</div>
                  <div className="text-lg font-semibold mb-2">Conversion Rate</div>
                  <p className="text-sm text-muted-foreground">Browsers to buyers</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">425%</div>
                  <div className="text-lg font-semibold mb-2">ROI Increase</div>
                  <p className="text-sm text-muted-foreground">Marketing return on investment</p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
                  <div className="text-lg font-semibold mb-2">Cart Recovery</div>
                  <p className="text-sm text-muted-foreground">Abandoned cart conversions</p>
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
                E-commerce Marketing <span className="gradient-text">Service Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the e-commerce marketing package that fits your store size and growth goals. 
                All packages include conversion psychology and customer retention strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Store Starter</CardTitle>
                  <CardDescription>Perfect for new online stores</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$2,497<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Conversion optimization audit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Product page psychology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Cart abandonment recovery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Basic email automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Social proof integration</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => selectService("Store Starter - $2,497/mo")}
                  >
                    Start Store Growth
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/50 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">Conversion Master</CardTitle>
                  <CardDescription>For growing e-commerce stores</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$4,497<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Store Starter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced personalization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Customer segmentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Loyalty program development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">A/B testing framework</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => selectService("Conversion Master - $4,497/mo")}
                  >
                    Master Conversions
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">E-commerce Empire</CardTitle>
                  <CardDescription>For large online retailers</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">$7,997<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Everything in Conversion Master</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Multi-channel integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Advanced automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Enterprise reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Custom integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Priority support</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => selectService("E-commerce Empire - $7,997/mo")}
                  >
                    Build E-commerce Empire
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
                E-commerce Marketing <span className="gradient-text">FAQ</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you reduce cart abandonment rates?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We implement a multi-stage cart recovery system including exit-intent popups, email sequences, retargeting ads, and checkout optimization. We also analyze abandonment reasons and address friction points like shipping costs, complex checkout, or trust concerns. Most stores see 40-50% improvement in abandoned cart recovery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What platforms do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We work with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom solutions. Each platform has unique optimization opportunities, and we tailor our strategies to leverage the specific features and capabilities of your chosen platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do you improve product discovery and search?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We optimize internal search functionality, improve category navigation, implement smart product recommendations, and create intuitive filtering systems. We also use behavioral analytics to understand how customers browse and optimize the path to purchase accordingly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly can e-commerce stores see results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  E-commerce optimization can show results quickly. Cart abandonment recovery can improve within weeks, conversion rate optimization shows results in 30-60 days, and comprehensive strategies typically achieve full results in 3-6 months. We track conversion rates, average order value, and customer lifetime value weekly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-700">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Optimize Your Online Store?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Stop losing sales to cart abandonment and poor conversion rates. Get e-commerce marketing 
                that turns browsers into buyers and customers into loyal advocates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => openDialog()}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get E-commerce Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-purple-600" onClick={() => window.open('tel:+13865550123')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (386) 555-0123
                </Button>
              </div>
              <p className="text-purple-200 text-center">
                Conversion optimization • Cart recovery • Customer retention
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free E-commerce Marketing Consultation"
        description="Let's discuss how we can help optimize your online store for maximum conversions and growth."
        defaultService={selectedService}
        businessTypes={businessTypes.ecommerce}
      />
    </>
  );
};

export default EcommerceMarketing;