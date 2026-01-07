import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactDialog from "@/components/ContactDialog";
import { useContactDialog } from "@/hooks/useContactDialog";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { businessTypes } from '@/types/contact-forms';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Stethoscope,
  Scale,
  Building2,
  Briefcase,
  UtensilsCrossed,
  ShoppingBag,
  Car,
  ArrowRight,
  MapPin,
  CheckCircle
} from "lucide-react";

const industries = [
  {
    icon: Home,
    title: "Home Services",
    description: "HVAC, plumbing, roofing, landscaping, and contractors serving Central Florida homeowners.",
    href: "/industries/home-services",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Medical practices, dental offices, chiropractors, and wellness providers in Volusia & Flagler.",
    href: "/industries/healthcare",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Law firms and attorneys building their practice through local search dominance.",
    href: "/industries/legal-services",
    color: "from-slate-600 to-slate-700"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Realtors, property managers, and real estate agencies in Central Florida's growing market.",
    href: "/industries/real-estate",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Accountants, consultants, financial advisors, and B2B service providers.",
    href: "/industries/professional-services",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Hospitality",
    description: "Restaurants, hotels, and hospitality businesses serving tourists and locals alike.",
    href: "/industries/restaurants-hospitality",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Retail",
    description: "Online stores and local retailers expanding their digital presence.",
    href: "/industries/ecommerce",
    color: "from-fuchsia-500 to-purple-600"
  },
  {
    icon: Car,
    title: "Automotive Services",
    description: "Auto repair shops, dealerships, and automotive service providers.",
    href: "/industries/automotive-services",
    color: "from-red-500 to-red-600"
  }
];

const localMarkets = [
  { name: "Daytona Beach", href: "/daytona-beach-digital-marketing", highlight: true },
  { name: "Ormond Beach", href: "/ormond-beach-seo" },
  { name: "Port Orange", href: "/port-orange-marketing" },
  { name: "Palm Coast", href: "/palm-coast-marketing" },
  { name: "New Smyrna Beach", href: "/new-smyrna-beach-marketing" },
  { name: "DeBary", href: "/debary-digital-marketing" },
  { name: "Sanford", href: "/sanford-seo-services" },
  { name: "Holly Hill", href: "/holly-hill-digital-marketing" }
];

const Index = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Free SEO Audit');

  return (
    <>
      <Helmet>
        <title>Central Florida SEO & Digital Marketing | Volusia & Flagler Counties | AIO Growth SEO</title>
        <meta name="description" content="AIO Growth SEO delivers psychology-driven digital marketing for businesses in Volusia & Flagler Counties. Local SEO, lead generation, and custom automation tools that drive real results." />
        <meta name="keywords" content="Central Florida SEO, Volusia County digital marketing, Flagler County SEO, local SEO, Daytona Beach marketing, psychology-driven marketing" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Central Florida SEO & Digital Marketing | AIO Growth SEO" />
        <meta property="og:description" content="Psychology-driven digital marketing for Volusia & Flagler County businesses. Local SEO, lead generation, and automation that delivers measurable growth." />
        <meta property="og:type" content="website" />
      </Helmet>
      <LocalBusinessSchema />
      <Navigation />
      <main>
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Industry Expertise
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">SEO for </span>
                <span className="gradient-text">Your Industry</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We understand the unique challenges and opportunities in Central Florida's key industries.
                Specialized strategies that speak your customers' language.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                    <CardHeader className="pb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{industry.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Link to={industry.href}>
                        <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link to="/industries">
                <Button variant="outline" size="lg" className="px-8">
                  View All Industries
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Local Markets Section */}
        <section id="local-markets" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <MapPin className="w-4 h-4 mr-2" />
                  Local Market Expertise
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-foreground">Serving </span>
                  <span className="gradient-text">Volusia & Flagler</span>
                  <span className="text-foreground"> Counties</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  From the beaches of Daytona to the historic streets of Sanford, we understand what drives
                  local customers in Central Florida. Market-specific strategies that resonate with your community.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Deep understanding of local search patterns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Tourism & seasonal optimization expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Community-focused content strategies</span>
                  </div>
                </div>

                <Link to="/areas-we-serve">
                  <Button variant="hero" size="lg" className="px-8">
                    View All Service Areas
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {localMarkets.map((market, index) => (
                  <Link key={index} to={market.href}>
                    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${market.highlight ? 'border-primary bg-primary/5' : ''}`}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <MapPin className={`w-5 h-5 ${market.highlight ? 'text-primary' : 'text-muted-foreground'} group-hover:text-primary transition-colors`} />
                        <span className={`font-medium ${market.highlight ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                          {market.name}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results">
          <TestimonialsSection />
        </section>
      </main>
      <Footer />
      
      <ContactDialog 
        isOpen={isOpen}
        onClose={closeDialog}
        title="Free SEO Audit & Strategy Session"
        description="Get a comprehensive analysis of your marketing opportunities and discover how psychology-driven strategies can transform your business growth."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default Index;
