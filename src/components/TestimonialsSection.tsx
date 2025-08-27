import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Privada Cigar Club",
    role: "E-commerce Business",
    content: "Joel's psychology-driven SEO approach generated a 200% increase in organic traffic within 45 days. His understanding of consumer behavior transformed our entire digital strategy.",
    rating: 5,
    results: "+200% Traffic in 45 Days"
  },
  {
    name: "Super Cash For Houses",
    role: "Real Estate Investment",
    content: "From 20 leads per month to 100+ qualified leads. Joel's local SEO and paid media strategies completely transformed our lead generation. The ROI speaks for itself.",
    rating: 5,
    results: "100+ Leads Per Month"
  },
  {
    name: "Florida Medical Practice",
    role: "Healthcare Provider",
    content: "Joel's GEO optimization prepared us for AI search while dominating traditional search. His technical expertise combined with marketing psychology is unmatched.",
    rating: 5,
    results: "+300% Online Appointments"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Proven </span>
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real clients. Real results. Psychology-driven marketing that generates measurable growth for Florida businesses and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-professional relative overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Results Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
                  {testimonial.results}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by businesses across Florida and nationwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">Daytona Beach</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold text-muted-foreground">Orlando</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold text-muted-foreground">Tampa</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold text-muted-foreground">Jacksonville</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold text-muted-foreground">Miami</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;