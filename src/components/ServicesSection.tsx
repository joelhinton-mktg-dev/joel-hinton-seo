import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Megaphone, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Rewired",
    subtitle: "Technical SEO + Local Signals",
    description: "Traditional SEO vs GEO (Generative Engine Optimization). Technical audits, local SEO dominance, and programmatic SEO at scale. Prepare for AI search with Answer Engine Optimization.",
    features: ["Technical SEO audits", "Local SEO for Florida", "Programmatic SEO", "AI search optimization (AEO)"],
    price: "$500 - $1,000",
    href: "/seo-services"
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    subtitle: "Generative Optimization",
    description: "Multi-channel growth strategies powered by customer psychology and decision science. AI-powered content generation and growth automation workflows.",
    features: ["Answer Engine Optimization", "Conversion rate optimization", "Customer psychology", "Growth automation"],
    price: "$1,000 - $2,500",
    href: "/growth-marketing"
  },
  {
    icon: Megaphone,
    title: "Paid Performance",
    subtitle: "Media That Converts",
    description: "Google Ads, Meta advertising, and LinkedIn campaigns optimized with AI-powered copy testing and custom attribution workflows.",
    features: ["Google & Meta ads", "AI-optimized ad copy", "Landing page strategy", "Custom attribution"],
    price: "$500/month",
    href: "/paid-advertising"
  },
  {
    icon: Cpu,
    title: "Vibe Coding",
    subtitle: "Custom Tools & Automation",
    description: "Replace expensive SaaS with custom AI-powered tools. Lead capture systems, marketing automation, and client communication AI agents.",
    features: ["AI lead capture systems", "Marketing automation", "Custom SEO tools", "AI communication agents"],
    price: "Quote-based",
    href: "/automation"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Psychology-Driven </span>
            <span className="gradient-text">Marketing Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No retainers. No long-term contracts. Just results-driven marketing that understands consumer psychology and leverages AI optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-professional hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-secondary">{service.price}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary mb-3">
                    {service.subtitle}
                  </CardDescription>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="cta" size="lg" className="px-8 py-4">
            Get Custom Strategy Session
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;