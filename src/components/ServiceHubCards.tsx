'use client';

import Link from 'next/link';
import {
  Search,
  MapPin,
  Sparkles,
  Users,
  Cog,
  ArrowRight,
  ShoppingCart,
  CheckCircle,
  Bot,
  type LucideIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { agenticServiceCard, serviceCards, type ServiceCardId } from '@/data/serviceCards';

const icons: Record<ServiceCardId, LucideIcon> = {
  'seo-services': Search,
  'local-seo': MapPin,
  'geo-optimization': Sparkles,
  'ecommerce-seo': ShoppingCart,
  'local-lead-generation': Users,
  'custom-tools-automation': Cog,
};

const accentStyles = {
  blue: {
    icon: 'bg-blue-500/20 text-blue-600',
    check: 'text-blue-600',
    price: 'bg-blue-50 text-blue-600',
    btn: 'bg-blue-600 hover:bg-blue-700',
  },
  green: {
    icon: 'bg-green-500/20 text-green-600',
    check: 'text-green-600',
    price: 'bg-green-50 text-green-600',
    btn: 'bg-green-600 hover:bg-green-700',
  },
  purple: {
    icon: 'bg-purple-500/20 text-purple-600',
    check: 'text-purple-600',
    price: 'bg-purple-50 text-purple-600',
    btn: 'bg-purple-600 hover:bg-purple-700',
  },
  fuchsia: {
    icon: 'bg-fuchsia-500/20 text-fuchsia-600',
    check: 'text-fuchsia-600',
    price: 'bg-fuchsia-50 text-fuchsia-600',
    btn: 'bg-fuchsia-600 hover:bg-fuchsia-700',
  },
  orange: {
    icon: 'bg-orange-500/20 text-orange-600',
    check: 'text-orange-600',
    price: 'bg-orange-50 text-orange-600',
    btn: 'bg-orange-600 hover:bg-orange-700',
  },
  teal: {
    icon: 'bg-teal-500/20 text-teal-600',
    check: 'text-teal-600',
    price: 'bg-teal-50 text-teal-600',
    btn: 'bg-teal-600 hover:bg-teal-700',
  },
} as const;

export function ServiceHubCards() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <Card className="card-professional overflow-hidden border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 via-violet-50 to-slate-50 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-8 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <Badge className="bg-indigo-600 hover:bg-indigo-600 text-white w-fit">
                <Bot className="w-3.5 h-3.5 mr-1.5" />
                Flagship Offer
              </Badge>
              <div>
                <CardTitle className="text-2xl md:text-3xl mb-2">{agenticServiceCard.title}</CardTitle>
                <CardDescription className="text-base font-medium text-indigo-700">
                  {agenticServiceCard.subtitle}
                </CardDescription>
              </div>
              <p className="text-muted-foreground max-w-2xl">{agenticServiceCard.description}</p>
              <p className="text-xl font-bold text-indigo-600">{agenticServiceCard.price}</p>
            </div>
            <div className="shrink-0 lg:text-right">
              <Button
                size="lg"
                className="w-full lg:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                asChild
              >
                <Link href={agenticServiceCard.href}>
                  Explore Agentic SEO
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceCards.map((service) => {
        const Icon = icons[service.id];
        const styles = accentStyles[service.accent];
        const displayFeatures = service.features.slice(0, 3);

        return (
          <Card key={service.id} className="card-professional group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${styles.icon}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.hubSubtitle}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">{service.description}</p>
              <div className="space-y-2">
                {displayFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${styles.check}`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className={`p-3 rounded-lg ${styles.price}`}>
                <p className="text-lg font-bold">
                  {service.price || service.subtitle}
                </p>
              </div>
              <Button className={`w-full text-white ${styles.btn}`} asChild>
                <Link href={service.href}>
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
      </div>
    </div>
  );
}
