import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to </span>
              <span className="gradient-text">Dominate Search?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get your free SEO audit and custom growth strategy. No sales calls. No pressure. Just actionable insights you can use immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Zap className="w-6 h-6 text-secondary" />
                  Free SEO Audit & Strategy Session
                </CardTitle>
                <CardDescription>
                  Get a detailed analysis of your current SEO performance and a custom growth strategy within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Smith" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Website URL</label>
                  <Input placeholder="https://yourwebsite.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Marketing Challenges</label>
                  <Textarea 
                    placeholder="Tell me about your biggest marketing challenges and goals..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button variant="hero" className="w-full" size="lg">
                  Get My Free SEO Audit
                  <Zap className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  No spam. No sales calls. Just valuable insights delivered within 24 hours.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Serving Daytona Beach, FL and businesses nationwide
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+1 (386) 555-0123</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">joel@joelhintonmarketing.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Daytona Beach, FL 32114</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-muted-foreground">Within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What You Get */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>What's Included in Your Free Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Technical SEO audit & priority fixes",
                      "Competitive analysis & opportunity gaps",
                      "Local SEO assessment for Florida markets",
                      "AI search readiness evaluation (GEO/AEO)",
                      "Custom growth strategy roadmap",
                      "ROI projections & timeline expectations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;