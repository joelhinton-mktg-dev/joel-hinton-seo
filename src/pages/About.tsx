import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageBreadcrumb } from "@/components/ui/breadcrumb";
import { Brain, Target, Users, Award, MapPin, Phone, Mail, Lightbulb, TrendingUp, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Joel Hinton | Psychology-Driven Marketing Expert | Daytona Beach FL</title>
        <meta name="description" content="Meet Joel Hinton, the marketing consultant who combines consumer psychology with AI optimization to help businesses outthink their competition. Based in Daytona Beach, FL." />
        <meta name="keywords" content="Joel Hinton, marketing psychology expert, Daytona Beach marketing consultant, consumer psychology, behavioral marketing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Joel Hinton",
            "jobTitle": "Digital Marketing Consultant & Psychology Expert",
            "description": "Marketing consultant specializing in consumer psychology and AI optimization",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Daytona Beach",
              "addressRegion": "FL"
            },
            "expertise": [
              "Consumer Psychology",
              "SEO & GEO Optimization", 
              "AI Marketing Automation",
              "Conversion Psychology"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Joel Hinton Digital Marketing"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Breadcrumb */}
        <PageBreadcrumb 
          items={[
            { label: "About Joel", current: true }
          ]}
        />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Badge variant="outline" className="mb-4">
                  <Brain className="w-4 h-4 mr-2" />
                  Psychology-Driven Marketing Expert
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Meet Joel Hinton: AI Agents, Automation & SEO Growth Expert
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                The marketing consultant who combines consumer psychology with technical expertise to help businesses outthink and outrank their competition.
              </p>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8">
                <p className="text-lg font-medium text-foreground">
                  "SEO is Propaganda. GEO is Psychology. I help brands dominate AI search by understanding how people—and algorithms—actually think."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Philosophy Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Marketing Philosophy</h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                  <span className="text-xl font-semibold">Why Psychology Matters More Than Tactics</span>
                </div>
              </div>
              
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-lg leading-relaxed mb-6">
                      After 15+ years in digital marketing, I've learned that most agencies focus on the wrong things. They obsess over keywords, ad placements, and technical tricks while completely ignoring the most important factor: how people actually make decisions.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      Traditional marketing treats customers like search engines—feed them the right keywords and they'll convert. But real growth comes from understanding the psychology behind every click, every search, and every purchase decision.
                    </p>
                    <p className="text-lg leading-relaxed">
                      That's why I built my entire approach around consumer decision science, rooted in lessons from Edward Bernays' work and modern behavioral psychology. When you understand what motivates people at a psychological level, marketing becomes predictable rather than hopeful.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Journey to Marketing Psychology</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <TrendingUp className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Early Career Lessons</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      I started like most marketers—chasing the latest tactics, celebrating vanity metrics, and wondering why campaigns that looked great on paper failed to move business needles. After managing millions in ad spend and countless SEO campaigns, I realized something was fundamentally wrong with how our industry approaches growth.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">The Psychology-First Revelation</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      The turning point came when I discovered the connection between Edward Bernays' propaganda techniques and modern consumer behavior. I started rebuilding my methodology around one question: "What would make me, as a customer, actually want to buy this?" This shift changed everything.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise & Credentials */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Expertise & Credentials</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Technical SEO Mastery</h3>
                    <p className="text-sm text-muted-foreground">Deep understanding of search algorithms and technical optimization</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Consumer Psychology</h3>
                    <p className="text-sm text-muted-foreground">Extensive study of decision science and behavioral triggers</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">AI & Automation</h3>
                    <p className="text-sm text-muted-foreground">Early adopter of AI tools for marketing optimization</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Business Growth</h3>
                    <p className="text-sm text-muted-foreground">Hands-on experience scaling businesses to multi-million revenue</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">15+ Years of Marketing Evolution</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Continuous Learning & Innovation</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Marketing Psychology & Consumer Decision Science</li>
                      <li>• AI Technology & Marketing Automation</li>
                      <li>• Industry Evolution & Algorithm Changes</li>
                      <li>• Results Measurement & Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Industry Recognition</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Featured in marketing publications</li>
                      <li>• Speaking at industry conferences</li>
                      <li>• Active in AI marketing communities</li>
                      <li>• Beta testing emerging marketing tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daytona Beach Advantage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">The Daytona Beach Advantage</h2>
              </div>
              
              <Card>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                      Based in Daytona Beach, Florida, I have unique insight into both local business challenges and seasonal market dynamics. Living through hurricane seasons, Speedway events, and tourism fluctuations has taught me how external factors impact business growth—and how to build marketing systems that adapt.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      This local perspective, combined with national and international client experience, gives me a unique understanding of how psychology-driven marketing works across different markets, seasons, and customer segments.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Local Business Understanding</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Seasonal Marketing & Tourism Dynamics</li>
                        <li>• Community Psychology & Local Customer Behavior</li>
                        <li>• Economic Factors & Purchasing Psychology</li>
                        <li>• Florida Business Landscape & Opportunities</li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <Badge variant="outline" className="text-lg px-4 py-2">
                        <MapPin className="w-5 h-5 mr-2" />
                        Daytona Beach, FL
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Anti-Agency Approach */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Anti-Agency Approach</h2>
              
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Why I Don't Run a Traditional Agency
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    I deliberately chose not to build a traditional marketing agency for one simple reason: agency models create conflicts of interest that hurt client results.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    When agencies charge percentages of ad spend, they profit when you spend more, not when you spend efficiently. When they require monthly retainers, they benefit from dependency, not from building systems that work independently.
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-primary">My Business Philosophy</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Transparent Pricing:</strong> Fixed fees so we focus on results, not billings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Client Ownership:</strong> You own everything we build</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Results Focus:</strong> One-time investments that compound</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Psychology-Driven:</strong> Understanding motivations, not chasing algorithms</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-primary">Core Values</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Transparency:</strong> No hidden fees or mystery processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Results:</strong> Measurable business impact, not vanity metrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Education:</strong> Teaching clients to understand systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Innovation:</strong> Proven psychology + cutting-edge technology</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Connection Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Beyond Marketing</h2>
              </div>
              
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    When I'm not optimizing conversion rates or analyzing customer psychology, you'll find me exploring creative projects that blend technology with human insight. Photography has taught me about visual psychology and storytelling. Travel has shown me how cultural differences impact consumer behavior.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Reading behavioral psychology and historical propaganda analysis keeps me sharp on the fundamentals that never change—regardless of which new platform or algorithm update comes next.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Working Together Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Ready to Work Together?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-primary">My Ideal Clients</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Ready for Growth: Product-market fit, ready to scale</li>
                      <li>• Value Transparency: Appreciate honest communication</li>
                      <li>• Long-term Thinkers: Want to build assets, not rent them</li>
                      <li>• Results-Focused: Care about business impact over activity</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-primary">Not a Good Fit If</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Want someone to blame for poor fundamentals</li>
                      <li>• Prefer ongoing retainers to systematic improvements</li>
                      <li>• Looking for magic tricks vs proven principles</li>
                      <li>• Need constant hand-holding vs independent growth</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Marketing psychology is endlessly fascinating because every business, every customer, and every market has unique psychological triggers. I love diving deep into what makes your customers tick and building systems that activate those insights systematically.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button variant="hero" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Strategy Call
                    </Button>
                    <Button variant="outline" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Get Started Today
                    </Button>
                  </div>
                  
                  <div className="mt-8 p-4 bg-card/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Risk Reversal:</strong> Every consultation includes actionable insights you can implement immediately, regardless of whether we work together long-term.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default About;