'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  MapPin, Home, Flag, CheckCircle, ArrowRight, Phone, Star, TrendingUp,
  Brain, BarChart3, Users, Waves, Sun, Target, Search, Globe
} from 'lucide-react';

export default function DaytonaBeachDigitalMarketingPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Daytona Beach Marketing Audit');

  const services = [
    { name: 'Local SEO', description: 'Dominate Daytona Beach search results', icon: Search },
    { name: 'Google Business Profile', description: 'Optimize your local presence', icon: MapPin },
    { name: 'Content Marketing', description: 'NASCAR & beach culture content', icon: Globe },
    { name: 'Paid Advertising', description: 'Targeted local campaigns', icon: Target },
  ];

  const neighborhoods = ['Main Street District', 'Downtown Daytona Beach', 'Seabreeze', 'Midtown', 'South Daytona', 'Holly Hill'];

  return (
    <>
      <PageBreadcrumb
        items={[
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: "Daytona Beach Digital Marketing", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Home className="w-4 h-4 mr-2" />
              My Home Base & Flagship Location
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Daytona Beach Digital Marketing: <span className="text-primary">Home Field</span> Advantage with <span className="gradient-text">NASCAR Culture</span> Expertise
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Born and raised in Daytona Beach, I understand the unique psychology that drives our community - from NASCAR Nation to beach tourism,
              from snowbird seasons to Bike Week crowds. This is more than my business location; it&apos;s my home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Flag className="w-5 h-5 mr-2" />
                NASCAR Community Strategy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Phone className="w-5 h-5 mr-2" />
                In-Person Consultation
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              <div className="p-4">
                <Flag className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">NASCAR Culture</p>
              </div>
              <div className="p-4">
                <Waves className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Beach Tourism</p>
              </div>
              <div className="p-4">
                <Sun className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Snowbird Season</p>
              </div>
              <div className="p-4">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Local Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Daytona Beach */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Daytona Beach</span> Businesses Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep local knowledge combined with proven marketing expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Flag className="w-8 h-8" />
                </div>
                <CardTitle>NASCAR Culture Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep understanding of motorsports tourism and race-week marketing psychology. We know how to capture the Speedway crowd.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8" />
                </div>
                <CardTitle>Beach Tourism Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seasonal strategies for snowbirds, spring breakers, and year-round visitors. We understand the tourism calendar.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8" />
                </div>
                <CardTitle>Home Base Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Same-day meetings, fastest response times, and deep community connections. This is my hometown.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Daytona Beach <span className="gradient-text">Marketing Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.name} className="card-professional">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neighborhoods We Serve in <span className="gradient-text">Daytona Beach</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Daytona Beach Marketing Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">285%</div>
              <p className="text-lg opacity-90">Traffic Growth</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">340%</div>
              <p className="text-lg opacity-90">Lead Increase</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">4.9</div>
              <p className="text-lg opacity-90">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Daytona Beach Marketing FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How does NASCAR culture affect local marketing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                NASCAR brings over 100,000 visitors multiple times per year. We help businesses capture this traffic with
                race-week promotions, tourism-focused SEO, and seasonal campaigns that align with the motorsports calendar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you offer in-person meetings in Daytona Beach?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! As my home base, I offer same-day in-person meetings in Daytona Beach. This is unique in the digital
                marketing world and allows for deeper collaboration and faster results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How do you handle seasonal tourism fluctuations?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We build marketing strategies around Daytona&apos;s unique seasonal patterns - snowbird season, spring break,
                Bike Week, NASCAR races, and summer tourism. Your marketing adapts to capture each wave of visitors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-professional shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Ready to Dominate Daytona Beach?
              </CardTitle>
              <CardDescription className="text-lg">
                Get a free marketing audit from a true Daytona Beach local
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Target className="w-5 h-5 mr-2" />
                Get My Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Daytona Beach Marketing Consultation"
        description="Let's discuss how to grow your Daytona Beach business with local marketing expertise."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
