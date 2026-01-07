import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Search,
  TrendingUp,
  Package,
  Store,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Globe,
  Target,
  DollarSign,
  Users,
  ShoppingBag,
  Smartphone,
  CreditCard,
  Truck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { businessTypes } from '@/types/contact-forms';

const EcommerceSEO: React.FC = () => {
  const { isOpen, selectedService, openDialog, closeDialog } = useContactDialog('E-commerce SEO Audit');

  const services = [
    {
      icon: Package,
      title: 'Product Page Optimization',
      description: 'Transform your product pages into conversion machines with optimized titles, descriptions, images, and schema markup that ranks and sells.',
      features: ['Product schema markup', 'Keyword-rich descriptions', 'Image optimization', 'Review integration']
    },
    {
      icon: Search,
      title: 'Technical E-commerce SEO',
      description: 'Solve complex technical challenges unique to online stores—crawl budget, faceted navigation, duplicate content, and site speed.',
      features: ['Crawl optimization', 'URL structure', 'Canonical tags', 'Core Web Vitals']
    },
    {
      icon: TrendingUp,
      title: 'Conversion Rate Optimization',
      description: 'Turn traffic into customers with data-driven CRO that improves your checkout flow, product presentation, and user experience.',
      features: ['A/B testing', 'Cart abandonment', 'UX improvements', 'Trust signals']
    },
    {
      icon: Store,
      title: 'Platform-Specific SEO',
      description: 'Expert optimization for Shopify, WooCommerce, BigCommerce, and Magento with platform-native solutions that maximize your store\'s potential.',
      features: ['Shopify SEO', 'WooCommerce optimization', 'Theme optimization', 'App integration']
    },
    {
      icon: Globe,
      title: 'Marketplace Optimization',
      description: 'Expand your reach on Amazon, Etsy, and eBay with marketplace SEO that improves product visibility and drives sales.',
      features: ['Amazon A9 algorithm', 'Etsy search ranking', 'Listing optimization', 'Review strategy']
    },
    {
      icon: BarChart3,
      title: 'E-commerce Content Strategy',
      description: 'Build authority and drive organic traffic with buying guides, product comparisons, and category content that converts browsers into buyers.',
      features: ['Buying guides', 'Category pages', 'Blog strategy', 'Link building']
    }
  ];

  const results = [
    { metric: '340%', label: 'Average organic traffic increase', icon: TrendingUp },
    { metric: '127%', label: 'Revenue growth from organic', icon: DollarSign },
    { metric: '89%', label: 'Improvement in product rankings', icon: Search },
    { metric: '45%', label: 'Increase in conversion rate', icon: ShoppingCart }
  ];

  const platforms = [
    { name: 'Shopify', description: 'Theme optimization, app integration, speed improvements' },
    { name: 'WooCommerce', description: 'WordPress SEO, plugin optimization, server performance' },
    { name: 'BigCommerce', description: 'Built-in SEO features, custom development' },
    { name: 'Magento', description: 'Enterprise solutions, complex catalog optimization' },
    { name: 'Amazon', description: 'A9 algorithm, listing optimization, brand registry' },
    { name: 'Custom Platforms', description: 'Headless commerce, custom solutions' }
  ];

  const floridaAdvantages = [
    {
      icon: DollarSign,
      title: 'No State Income Tax',
      description: 'Florida\'s tax-friendly environment means more profit margin to reinvest in marketing and growth.'
    },
    {
      icon: Users,
      title: '22 Million Residents',
      description: 'Massive local customer base plus millions of annual tourists looking for local products and services.'
    },
    {
      icon: Truck,
      title: 'Logistics Hub',
      description: 'Strategic location with major ports and distribution centers for efficient nationwide shipping.'
    },
    {
      icon: Smartphone,
      title: 'Tech-Savvy Population',
      description: 'High smartphone adoption and online shopping rates make Florida ideal for e-commerce growth.'
    }
  ];

  const packages = [
    {
      name: 'Starter Store',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for new online stores ready to build organic visibility',
      features: [
        'Up to 100 product optimizations',
        'Technical SEO audit & fixes',
        'Monthly content (2 articles)',
        'Core Web Vitals optimization',
        'Monthly reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Growth Store',
      price: '$3,000',
      period: '/month',
      description: 'For established stores scaling their organic presence',
      features: [
        'Up to 500 product optimizations',
        'Advanced technical SEO',
        'Weekly content (8 articles)',
        'Conversion rate optimization',
        'Marketplace optimization',
        'Bi-weekly strategy calls',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scale SEO for high-volume e-commerce operations',
      features: [
        'Unlimited product optimization',
        'Dedicated SEO specialist',
        'Daily content production',
        'Multi-marketplace strategy',
        'International SEO',
        'API integrations',
        'Weekly executive reporting'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results from e-commerce SEO?',
      answer: 'E-commerce SEO typically shows initial improvements within 2-3 months, with significant traffic and revenue growth between 4-6 months. Product pages often rank faster than category pages due to their specificity. We focus on quick wins like fixing technical issues and optimizing high-value products first while building long-term authority.'
    },
    {
      question: 'Do you work with Shopify stores?',
      answer: 'Yes! Shopify is one of our primary platforms. We understand Shopify\'s unique SEO challenges including theme limitations, app bloat, and URL structure. We optimize your Shopify store using platform-native solutions and apps that enhance rather than complicate your SEO.'
    },
    {
      question: 'Can you help with Amazon SEO too?',
      answer: 'Absolutely. We offer marketplace optimization for Amazon, Etsy, and eBay. While different from Google SEO, marketplace optimization uses similar principles—keyword research, compelling descriptions, and strategic optimization. Many clients run both their own store and marketplace presence.'
    },
    {
      question: 'What if I have thousands of products?',
      answer: 'We specialize in large catalog optimization. Using programmatic SEO, automated optimization tools, and strategic prioritization, we can efficiently optimize stores with thousands or even millions of products. We prioritize high-value products while implementing site-wide improvements that benefit all pages.'
    },
    {
      question: 'How do you handle seasonal e-commerce businesses?',
      answer: 'Central Florida\'s tourism-driven economy means we understand seasonal businesses well. We plan SEO campaigns around your peak seasons, building rankings in advance. Whether you\'re focused on holiday shopping, tourist season, or specific events, we time our efforts for maximum impact.'
    },
    {
      question: 'Will SEO work if I\'m also running paid ads?',
      answer: 'SEO and paid advertising work best together. While PPC provides immediate visibility, SEO builds sustainable organic traffic that reduces your dependence on ad spend. We coordinate with your advertising strategy to maximize total ROI and capture customers at every stage of the buying journey.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>E-commerce SEO Services | Online Store Optimization | AIO Growth SEO</title>
        <meta
          name="description"
          content="Boost your online store's visibility with expert e-commerce SEO. Product optimization, technical SEO, and conversion strategies for Shopify, WooCommerce, and more. Central Florida focused."
        />
        <meta
          name="keywords"
          content="e-commerce SEO, Shopify SEO, WooCommerce SEO, product page optimization, online store SEO, Central Florida e-commerce, Amazon SEO, conversion optimization"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/ecommerce-seo" />

        <meta property="og:title" content="E-commerce SEO Services | AIO Growth SEO" />
        <meta property="og:description" content="Boost your online store's visibility with expert e-commerce SEO. Product optimization, technical SEO, and conversion strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/ecommerce-seo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-commerce SEO Services | AIO Growth SEO" />
        <meta name="twitter:description" content="Boost your online store's visibility with expert e-commerce SEO. Product optimization, technical SEO, and conversion strategies." />
      </Helmet>

      <ProfessionalServiceSchema
        serviceName="E-commerce SEO Services"
        serviceDescription="Expert e-commerce SEO services for online stores including product optimization, technical SEO, conversion optimization, and marketplace strategies."
        serviceUrl="https://aiogrowthseo.com/ecommerce-seo"
        serviceType="E-commerce SEO"
        price="1500"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        <Navigation />

        <PageBreadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "E-commerce SEO", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 opacity-95" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                <ShoppingCart className="w-4 h-4 mr-2" />
                E-commerce SEO Specialists
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Turn Your Online Store Into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
                  Revenue Machine
                </span>
              </h1>

              <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Expert e-commerce SEO that drives qualified traffic, improves product rankings,
                and converts browsers into buyers. From Shopify to Amazon, we optimize your
                entire online presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8"
                  onClick={() => openDialog()}
                >
                  Get Your Free Store Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link to="/results">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-lg px-8"
                  >
                    See Client Results
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Results Banner */}
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <result.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                    {result.metric}
                  </p>
                  <p className="text-slate-600 text-sm">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Complete E-commerce SEO Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From product pages to checkout, we optimize every aspect of your online store
                to drive organic traffic and maximize revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-purple-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Florida E-commerce Advantages */}
        <section className="py-24 bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Local Advantage
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Central Florida for E-commerce?
              </h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Florida offers unique advantages for online sellers—from tax benefits to
                a massive customer base of residents and tourists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {floridaAdvantages.map((advantage, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{advantage.title}</CardTitle>
                    <CardDescription className="text-purple-200">
                      {advantage.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Platform Expertise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                We Optimize Every Platform
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Whether you're on Shopify, WooCommerce, or selling on Amazon, we have the
                platform-specific expertise to maximize your organic visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Store className="w-5 h-5 text-white" />
                      </div>
                      {platform.name}
                    </CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Investment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                E-commerce SEO Packages
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Scalable solutions designed for online stores at every stage of growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative ${pkg.popular ? 'border-purple-500 border-2 shadow-xl scale-105' : 'border-slate-200'}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                      <span className="text-slate-600">{pkg.period}</span>
                    </div>
                    <CardDescription className="mt-2">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      onClick={() => openDialog()}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                  Why AIO Growth SEO
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  E-commerce SEO That Actually Drives Revenue
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We don't just chase rankings—we focus on metrics that matter: traffic that
                  converts, products that rank for buying intent, and optimizations that
                  directly impact your bottom line.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Revenue-Focused Strategy</h3>
                      <p className="text-slate-600">We prioritize high-value products and buying-intent keywords that drive actual sales, not just traffic.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Platform Expertise</h3>
                      <p className="text-slate-600">Deep knowledge of Shopify, WooCommerce, and marketplace algorithms means faster, more effective optimization.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Conversion Integration</h3>
                      <p className="text-slate-600">SEO + CRO together. We optimize for rankings AND conversions because traffic without sales is worthless.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">What You Get</h3>
                  <ul className="space-y-4">
                    {[
                      'Comprehensive store SEO audit',
                      'Product page optimization strategy',
                      'Technical SEO fixes & monitoring',
                      'Content strategy for categories',
                      'Monthly performance reporting',
                      'Conversion optimization recommendations',
                      'Marketplace listing optimization',
                      'Dedicated account manager'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Common E-commerce SEO Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-xl px-6 border shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Online Store?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get a free e-commerce SEO audit and discover how we can help you
              drive more organic traffic and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8"
                onClick={() => openDialog()}
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <ContactDialog
          isOpen={isOpen}
          onClose={closeDialog}
          title="E-commerce SEO Consultation"
          description="Get a free e-commerce SEO audit and discover how we can help drive more organic traffic and revenue to your online store."
          defaultService={selectedService}
          businessTypes={businessTypes.general}
        />
      </div>
    </>
  );
};

export default EcommerceSEO;
