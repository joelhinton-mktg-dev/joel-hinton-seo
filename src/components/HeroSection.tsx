import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Brain, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 mb-8 card-professional">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Psychology-Driven Digital Marketing
            </span>
            <TrendingUp className="w-4 h-4 text-secondary" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 fade-in">
            <span className="text-foreground">SEO is </span>
            <span className="gradient-text">Propaganda.</span>
            <br />
            <span className="gradient-text">GEO</span>
            <span className="text-foreground"> is Psychology.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto slide-up">
            AI-powered growth marketing that generates <strong className="text-secondary">200% traffic increases</strong> in 45 days. 
            Serving Daytona Beach, FL and businesses nationwide.
          </p>

          {/* Value Proposition */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto slide-up">
            No retainers. No long-term contracts. Just psychology-driven results that turn search engines into profit engines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-up">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Get Free SEO Audit
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="professional" size="lg" className="px-8 py-4 text-lg">
              View Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center slide-up">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">200%</div>
              <p className="text-muted-foreground">Average Traffic Increase</p>
            </div>
            <div className="text-center slide-up">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100+</div>
              <p className="text-muted-foreground">Leads Per Month Generated</p>
            </div>
            <div className="text-center slide-up">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">45</div>
              <p className="text-muted-foreground">Days to See Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;