'use client';

import Link from 'next/link';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '@/components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  MapPin, CheckCircle, ArrowRight, Phone, Star, TrendingUp,
  Users, Target, Search, Globe, BarChart3
} from 'lucide-react';
import { Location } from '@/data/locations';

interface LocationPageProps {
  location: Location;
}

export default function LocationPage({ location }: LocationPageProps) {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog(`${location.city} Marketing Audit`);

  const services = [
    { name: 'Local SEO', description: `Dominate ${location.city} search results`, icon: Search },
    { name: 'Google Business Profile', description: 'Optimize your local presence', icon: MapPin },
    { name: 'Content Marketing', description: 'Local-focused content strategy', icon: Globe },
    { name: 'Lead Generation', description: 'Targeted local campaigns', icon: Target },
  ];

  return (
    <>
      <PageBreadcrumb
        items={[
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: `${location.city} ${location.slug.includes('seo') ? 'SEO' : 'Marketing'}`, current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            {location.isHomeBase && (
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Home Base Location
              </Badge>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {location.city} <span className="gradient-text">{location.tagline}</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              {location.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => openDialog()}
              >
                <Target className="w-5 h-5 mr-2" />
                Get {location.city} Marketing Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  selectService(`${location.city} Consultation`);
                  openDialog();
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              {location.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="p-4">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">{location.city}</span> Businesses Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Local expertise combined with proven marketing strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {location.uniqueSellingPoints.map((usp, index) => (
              <Card key={index} className="card-professional text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <CardTitle>{usp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{usp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {location.city} <span className="gradient-text">Marketing Services</span>
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

          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      {location.neighborhoods.length > 0 && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Areas We Serve in <span className="gradient-text">{location.city}</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {location.neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby Areas */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Also Serving <span className="gradient-text">Nearby Areas</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {location.nearbyAreas.map((area) => (
              <Badge key={area} variant="outline" className="px-4 py-2 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {location.city} Marketing Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">250%+</div>
              <p className="text-lg opacity-90">Traffic Growth</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">300%+</div>
              <p className="text-lg opacity-90">Lead Increase</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-5xl font-bold mb-2">4x</div>
              <p className="text-lg opacity-90">ROI Average</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {location.city} Marketing FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you specialize in {location.city} marketing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We have deep expertise in {location.city} and {location.region}. We understand the local market,
                demographics, and what drives business success in this area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What industries do you serve in {location.city}?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We work with all types of local businesses in {location.city} including home services, healthcare,
                real estate, restaurants, retail, and professional services. Our strategies are customized for each industry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How quickly can I see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For local SEO in {location.city}, most clients see improvements within 30-90 days. Paid advertising
                can generate leads within days. We provide clear timelines based on your specific goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-professional shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Ready to Grow Your {location.city} Business?
              </CardTitle>
              <CardDescription className="text-lg">
                Get a free marketing audit tailored for {location.city}
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
        title={`${location.city} Marketing Consultation`}
        description={`Let's discuss how to grow your ${location.city} business with local marketing expertise.`}
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
