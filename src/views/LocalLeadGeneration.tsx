import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import ContactDialog from "@/components/ContactDialog";
import { useContactDialog } from "@/hooks/useContactDialog";
import { businessTypes } from "@/types/contact-forms";
import ProfessionalServiceSchema from "@/components/schema/ProfessionalServiceSchema";
import {
  Target,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Search,
  Phone,
  MapPin,
  Home,
  Wrench,
  Stethoscope,
  Scale,
  DollarSign,
  Star,
  Calendar,
  Clock,
  ThumbsUp,
  Building2,
  Sparkles,
  BadgeCheck
} from "lucide-react";

const LocalLeadGeneration = () => {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Local Lead Generation Consultation');

  const homeServiceTypes = [
    { name: "HVAC", icon: "🌡️" },
    { name: "Plumbing", icon: "🔧" },
    { name: "Roofing", icon: "🏠" },
    { name: "Electrical", icon: "⚡" },
    { name: "Landscaping", icon: "🌳" },
    { name: "Pest Control", icon: "🐛" },
    { name: "Cleaning", icon: "🧹" },
    { name: "Pool Service", icon: "🏊" }
  ];

  const professionalServiceTypes = [
    { name: "Legal", icon: "⚖️" },
    { name: "Medical", icon: "🏥" },
    { name: "Dental", icon: "🦷" },
    { name: "Accounting", icon: "📊" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Financial", icon: "💰" },
    { name: "Real Estate", icon: "🏡" },
    { name: "Veterinary", icon: "🐾" }
  ];

  return (
    <>
      <Helmet>
        <title>Local Lead Generation Ads | Home Services & Professional Services | AIO Growth SEO</title>
        <meta name="description" content="Local lead generation ads for home services and professional services in Volusia & Flagler Counties. Google Local Service Ads, Search Ads, and Facebook lead campaigns that deliver qualified local leads." />
        <meta name="keywords" content="local lead generation, Google Local Service Ads, home services marketing, HVAC advertising, plumber marketing, lawyer advertising, local PPC, Volusia County advertising, Flagler County marketing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiogrowthseo.com/local-lead-generation" />

        <meta property="og:title" content="Local Lead Generation Ads | Home Services & Professional Services | AIO Growth SEO" />
        <meta property="og:description" content="Local lead generation ads for home services and professional services in Volusia & Flagler Counties." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiogrowthseo.com/local-lead-generation" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local Lead Generation Ads | AIO Growth SEO" />
        <meta name="twitter:description" content="Google Local Service Ads, Search Ads, and Facebook lead campaigns for local businesses." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <PageBreadcrumb
          items={[
            { label: "Local Lead Generation", current: true }
          ]}
        />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Volusia & Flagler Counties
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Local Leads That <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Actually Call</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Google Local Service Ads, Search Ads, and Facebook campaigns built specifically for
                home services and professional services businesses in Central Florida. Pay for leads, not clicks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                  onClick={() => {
                    selectService('Local Lead Generation Strategy');
                    openDialog();
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get More Local Leads
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg border-orange-300 hover:bg-orange-50"
                  onClick={() => {
                    selectService('Local Ads Audit');
                    openDialog();
                  }}
                >
                  <Target className="w-5 h-5 mr-2" />
                  Free Lead Gen Audit
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
                <div className="p-4">
                  <BadgeCheck className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Google Screened</p>
                </div>
                <div className="p-4">
                  <Search className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Search Ads</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Facebook Leads</p>
                </div>
                <div className="p-4">
                  <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Hyper-Local</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Local Lead Generation for <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Your Industry</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We specialize in generating qualified leads for home services and professional services businesses throughout Volusia and Flagler Counties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Home Services */}
              <Card className="card-professional border-2 border-orange-100 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Home Services</CardTitle>
                      <CardDescription>Emergency & scheduled service leads</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {homeServiceTypes.map((service) => (
                      <div key={service.name} className="flex items-center gap-2 text-sm">
                        <span>{service.icon}</span>
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Google Local Service Ads (Google Guaranteed)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Emergency service keyword targeting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Call-only campaigns for immediate leads</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Services */}
              <Card className="card-professional border-2 border-amber-100 hover:border-amber-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Professional Services</CardTitle>
                      <CardDescription>Consultation & appointment leads</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {professionalServiceTypes.map((service) => (
                      <div key={service.name} className="flex items-center gap-2 text-sm">
                        <span>{service.icon}</span>
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>Google Screened verification support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>High-intent consultation searches</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>Facebook lead forms for appointments</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ad Platforms Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Three Ways to <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Generate Local Leads</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use the right platform for your business type and goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Google Local Service Ads */}
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <BadgeCheck className="w-7 h-7 text-white" />
                  </div>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800">Highest Intent</Badge>
                  <CardTitle className="text-xl">Google Local Service Ads</CardTitle>
                  <CardDescription>Google Guaranteed & Google Screened</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Appear at the very top of Google when locals search for your services.
                    Pay per lead, not per click. Google verifies your business.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Pay only for actual leads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Top position above regular ads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Google badge builds trust</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Dispute bad leads for refunds</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> HVAC, Plumbing, Electrical, Roofing, Legal, Financial
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Google Search Ads */}
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Most Control</Badge>
                  <CardTitle className="text-xl">Google Search Ads</CardTitle>
                  <CardDescription>Targeted local keyword campaigns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Show up when people search for your services in your area.
                    Full control over keywords, ads, and landing pages.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Target specific service areas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Call extensions for direct leads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Schedule ads for business hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Retarget website visitors</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> All local services, especially those with specific niches
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Facebook/Meta Ads */}
              <Card className="card-professional">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Best Reach</Badge>
                  <CardTitle className="text-xl">Facebook & Instagram Ads</CardTitle>
                  <CardDescription>Local audience lead generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Reach local homeowners and decision-makers where they spend time.
                    Great for building awareness and capturing leads before they search.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Target by zip code & radius</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Homeowner targeting options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Lead forms without leaving app</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Lookalike audiences from customers</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> Seasonal services, new patient acquisition, brand building
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Local Focus Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Local Focus</span> Matters
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                National agencies don't understand the Volusia and Flagler market. We live here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Shield className="w-5 h-5" />
                    The National Agency Problem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p>Generic campaigns that ignore local competition</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p>Don't understand seasonal patterns (snowbirds, hurricanes)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p>Waste budget on areas you don't serve</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p>No knowledge of local neighborhoods and demographics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p>Can't help with Google Business Profile optimization</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-5 h-5" />
                    Our Local Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hyper-local targeting</p>
                      <p className="text-sm text-muted-foreground">By city, zip code, and neighborhood</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Seasonal strategy</p>
                      <p className="text-sm text-muted-foreground">Ramp up for snowbird season, prepare for hurricane prep</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Local competitor analysis</p>
                      <p className="text-sm text-muted-foreground">We know who's advertising what in your area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">GBP integration</p>
                      <p className="text-sm text-muted-foreground">Ads + organic local presence working together</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Generating Leads Across <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Central Florida</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Daytona Beach",
                "Port Orange",
                "Ormond Beach",
                "DeLand",
                "New Smyrna Beach",
                "Palm Coast",
                "DeBary",
                "Deltona",
                "Sanford",
                "Holly Hill",
                "Edgewater",
                "Orange City"
              ].map((city) => (
                <div key={city} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8">
              We target the exact service areas where your customers live and work
            </p>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Local Lead Gen <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Delivers</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-professional text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-orange-600 mb-2">$25-75</div>
                  <p className="text-lg font-medium mb-2">Per Qualified Lead</p>
                  <p className="text-sm text-muted-foreground">
                    Home services leads through Google LSA and Search Ads
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-amber-600 mb-2">40-60%</div>
                  <p className="text-lg font-medium mb-2">Call Answer Rate</p>
                  <p className="text-sm text-muted-foreground">
                    With call tracking and instant notifications
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">3-5x</div>
                  <p className="text-lg font-medium mb-2">ROI Target</p>
                  <p className="text-sm text-muted-foreground">
                    Revenue generated vs. ad spend investment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Local Lead Generation <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flat monthly management fee - we succeed when you get more leads
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-professional relative">
                <Badge className="absolute -top-3 left-6 bg-orange-600">Most Popular</Badge>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                    Local Lead Management
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-3xl font-bold text-orange-600">$500</span>
                    <span className="text-muted-foreground">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Google Local Service Ads management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Google Search Ads campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Facebook/Instagram lead campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Call tracking & recording</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Lead quality monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span>Monthly performance reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="font-medium text-orange-600">No percentage fees</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Recommended Ad Spend:</span> $1,000/month</p>
                    <p className="text-muted-foreground">Average ROAS is 3-4X after 60-90 days</p>
                    <p><span className="font-medium">Contract:</span> Month-to-month</p>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                    onClick={() => selectService('Local Lead Management - $500/month')}
                  >
                    Start Getting Leads
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional border-amber-200 bg-gradient-to-br from-amber-50/50 to-orange-50/50">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-amber-100 text-amber-800 border-amber-200">Complete Setup</Badge>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Zap className="w-6 h-6 text-amber-600" />
                    Local Lead Generation Funnel Setup
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-3xl font-bold text-amber-600">$1,000</span>
                    <span className="text-muted-foreground"> one-time</span>
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    Complete lead generation infrastructure for local businesses - not just ads, but the entire system to capture, nurture, and convert leads.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>Google Local Service Ads setup & optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>Custom landing page creation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>Email automation sequences & drip campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>Call tracking & CRM integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>Lead scoring & nurturing system</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span>Performance tracking dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      <span className="font-medium text-amber-700">30 days of optimization included</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Timeline:</span> 2-3 weeks to full deployment</p>
                    <p><span className="font-medium">Perfect for:</span> Local businesses ready to scale lead generation</p>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                    onClick={() => selectService('Local Lead Generation Funnel Setup - $1,000')}
                  >
                    Build My Lead Funnel
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What's the difference between Local Service Ads and regular Google Ads?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Local Service Ads appear at the very top of Google (above regular ads) and you pay per lead, not per click.
                  Google also verifies your business with background checks and license verification, giving you a "Google Guaranteed"
                  or "Google Screened" badge that builds trust with potential customers. Regular Google Ads give you more control
                  over messaging and targeting but charge per click regardless of lead quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How much should I budget for ad spend?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For local service businesses, we recommend starting with $1,000-2,000/month in ad spend to generate
                  meaningful data and a consistent flow of leads. This typically generates 15-40 leads per month depending
                  on your industry. As you see ROI, you can scale up. The key is having enough budget to test and optimize.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How quickly will I start getting leads?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For Google Search Ads and Facebook, leads can start within 24-48 hours of campaign launch. For Local Service Ads,
                  there's a verification process that takes 2-4 weeks before your ads go live. Once approved, leads typically
                  come in the same day. We recommend running Search Ads while waiting for LSA approval.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What if I get bad leads?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  With Local Service Ads, you can dispute invalid leads (wrong service, wrong area, spam) and get refunds from Google.
                  For Search Ads and Facebook, we use negative keywords, quality targeting, and lead form questions to filter out
                  bad leads before they cost you money. We also track lead quality and optimize campaigns to attract better leads over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do I own my ad accounts?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, 100%. We set up campaigns in your accounts or get access to your existing accounts. You own all the data,
                  audiences, and campaign history. If you ever want to part ways, everything stays with you and we provide
                  transition documentation. No lock-in, no hostage accounts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready for More Local Leads?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your service area, target customers, and build a lead generation strategy that fills your schedule.
              </p>
            </div>

            <Card className="card-professional shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Get Your Free Lead Gen Strategy Call
                </CardTitle>
                <CardDescription className="text-lg">
                  We'll analyze your market and show you exactly how to get more local leads
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                  onClick={() => {
                    selectService('Local Lead Generation Strategy Call');
                    openDialog();
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  No obligation. We'll show you what's possible in your specific market.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Serving home services and professional services businesses across Volusia & Flagler Counties
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Local Lead Generation"
        description="Tell us about your business and service area, and we'll show you how to generate more qualified local leads."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="Local Lead Generation Ads"
        serviceDescription="Google Local Service Ads, Search Ads, and Facebook lead generation campaigns for home services and professional services businesses in Volusia and Flagler Counties"
        serviceUrl="https://aiogrowthseo.com/local-lead-generation"
        serviceType="Local Advertising Services"
      />
    </>
  );
};

export default LocalLeadGeneration;
