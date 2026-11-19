import { Metadata } from 'next';
import { MapPin, Phone, Mail, Calendar, Clock, CheckCircle, ArrowRight, Globe, Home, MessageSquare, Zap, Star, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactButton from '../../components/ContactButton';
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_TEL } from '@/data/site';
import OrangeUnderline from '../../components/brand/OrangeUnderline';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact AIO Growth SEO — Free SEO Audit',
  },
  description: 'Contact AIO Growth SEO for a free consultation. Psychology-driven marketing strategies for Volusia & Flagler County businesses.',
  keywords: ['contact SEO expert', 'Central Florida marketing', 'free SEO consultation', 'Volusia County marketing', 'Flagler County SEO'],
  alternates: {
    canonical: 'https://aiogrowthseo.com/contact',
  },
  openGraph: {
    title: 'Contact AIO Growth SEO — Free SEO Audit',
    description: 'Get your free marketing consultation with AIO Growth SEO. Daytona Beach headquarters with in-person meetings available.',
    type: 'website',
    url: 'https://aiogrowthseo.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper">
      <PageBreadcrumb items={[{ label: "Contact", current: true }]} />

      {/* Hero Section */}
      <section className="bg-paper bg-waves pb-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex items-center text-[15px] font-semibold text-pen-text">
              <Calendar className="mr-2 h-4 w-4" />
              Free Marketing Consultation
            </p>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-navy md:text-6xl">
              Get Your <OrangeUnderline>Free Marketing</OrangeUnderline> Consultation
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-navy/70">
              Ready to transform your marketing with psychology-driven strategies? Schedule your complimentary consultation
              and discover exactly how to outthink your competition and accelerate growth.
            </p>

            <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
              <ContactButton
                size="lg"
                className="px-8 py-4 text-lg"
                defaultService="Free Marketing Consultation"
                dialogTitle="Schedule Strategy Session"
                dialogDescription="Let's discuss your business goals and create a custom marketing strategy."
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </ContactButton>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg"
                asChild
              >
                <a href={`tel:${SITE_PHONE_TEL}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {SITE_PHONE}
                </a>
              </Button>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 text-center md:grid-cols-3">
              <div className="p-4">
                <Clock className="mx-auto mb-2 h-8 w-8 text-brand" />
                <p className="text-sm font-medium text-navy">24-Hour Response</p>
              </div>
              <div className="p-4">
                <Home className="mx-auto mb-2 h-8 w-8 text-brand" />
                <p className="text-sm font-medium text-navy">In-Person Available</p>
              </div>
              <div className="p-4">
                <Globe className="mx-auto mb-2 h-8 w-8 text-brand" />
                <p className="text-sm font-medium text-navy">Remote Consultations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-band py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
              Multiple Ways to <OrangeUnderline>Connect</OrangeUnderline>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
              Choose the communication method that works best for you. We're here to help accelerate your business growth.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-hairline bg-cream p-6 text-center shadow-sm">
              <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-tint text-brand">
                <Phone className="h-8 w-8" />
              </span>
              <h3 className="mb-1 text-xl font-extrabold tracking-tight text-navy">Direct Phone Line</h3>
              <p className="mb-4 text-sm text-navy/60">Immediate response during business hours</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-2xl font-extrabold text-navy">{SITE_PHONE}</p>
                  <p className="text-sm text-navy/60">Monday - Friday, 9 AM - 5 PM EST</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`tel:${SITE_PHONE_TEL}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-hairline bg-cream p-6 text-center shadow-sm">
              <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-tint text-brand">
                <Mail className="h-8 w-8" />
              </span>
              <h3 className="mb-1 text-xl font-extrabold tracking-tight text-navy">Email Consultation</h3>
              <p className="mb-4 text-sm text-navy/60">Detailed strategy discussions via email</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-navy">{SITE_EMAIL}</p>
                  <p className="text-sm text-navy/60">Response within 24 hours</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${SITE_EMAIL}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-hairline bg-cream p-6 text-center shadow-sm">
              <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-tint text-brand">
                <Calendar className="h-8 w-8" />
              </span>
              <h3 className="mb-1 text-xl font-extrabold tracking-tight text-navy">Calendar Booking</h3>
              <p className="mb-4 text-sm text-navy/60">Schedule at your convenience</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-navy">Online Scheduling</p>
                  <p className="text-sm text-navy/60">Choose your preferred time slot</p>
                </div>
                <ContactButton variant="outline" className="w-full" defaultService="Free Marketing Consultation">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Meeting
                </ContactButton>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="mx-auto max-w-4xl rounded-3xl border border-hairline bg-cream p-8 shadow-sm">
            <div className="mb-6 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <Home className="h-8 w-8 text-brand" />
                <h3 className="text-2xl font-extrabold tracking-tight text-navy">Daytona Beach Headquarters</h3>
              </div>
              <p className="text-lg text-navy/70">In-person consultations available for local businesses</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-brand" />
                  <div>
                    <p className="font-semibold text-navy">Office Address</p>
                    <p className="text-navy/70">123 Main Street<br />Daytona Beach, FL 32114</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-brand" />
                  <div>
                    <p className="font-semibold text-navy">Office Hours</p>
                    <p className="text-navy/70">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-brand-tint/50 p-4">
                  <h4 className="mb-2 font-semibold text-navy">Local Advantage</h4>
                  <p className="mb-2 text-sm text-navy/70">
                    In-person meetings available for Daytona Beach area businesses including:
                  </p>
                  <ul className="space-y-1 text-xs text-navy/70">
                    <li>• Downtown Daytona Beach</li>
                    <li>• Ormond Beach</li>
                    <li>• Port Orange</li>
                    <li>• South Daytona</li>
                    <li>• Holly Hill</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
              Florida <OrangeUnderline>Service Coverage</OrangeUnderline>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
              Serving businesses across Florida with specialized local market expertise and nationwide remote consultation capabilities.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-cream p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Home className="h-6 w-6 text-brand" />
                <h3 className="text-xl font-extrabold tracking-tight text-navy">Local In-Person Service</h3>
              </div>
              <p className="mb-4 leading-relaxed text-navy/70">
                Full in-person consultation and ongoing support available in the Greater Daytona Beach area:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-navy/80">
                <div className="space-y-1">
                  <p>• Daytona Beach</p>
                  <p>• Ormond Beach</p>
                  <p>• Port Orange</p>
                  <p>• South Daytona</p>
                </div>
                <div className="space-y-1">
                  <p>• Holly Hill</p>
                  <p>• Deltona</p>
                  <p>• New Smyrna Beach</p>
                  <p>• DeLand</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-hairline bg-cream p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="h-6 w-6 text-brand" />
                <h3 className="text-xl font-extrabold tracking-tight text-navy">Florida-Wide Remote Service</h3>
              </div>
              <p className="mb-4 leading-relaxed text-navy/70">
                Comprehensive remote consultation services throughout Florida with deep local market knowledge:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-navy/80">
                <div className="space-y-1">
                  <p>• Orlando</p>
                  <p>• Tampa Bay</p>
                  <p>• Jacksonville</p>
                  <p>• Miami-Dade</p>
                </div>
                <div className="space-y-1">
                  <p>• Fort Lauderdale</p>
                  <p>• Gainesville</p>
                  <p>• Tallahassee</p>
                  <p>• All Florida Markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="bg-band px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Schedule Your Strategy Session
            </h2>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-navy/70">
              Get your free marketing consultation. Tell us about your business and marketing challenges,
              and we'll show you exactly how to accelerate growth with psychology-driven strategies.
            </p>
          </div>

          <div className="rounded-3xl border border-hairline bg-cream p-8 text-center shadow-sm">
            <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-tint text-brand">
              <MessageSquare className="h-8 w-8" />
            </span>
            <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
              Free Marketing Consultation Request
            </h3>
            <p className="mb-6 text-lg text-navy/70">
              Get a personalized marketing strategy within 24 hours
            </p>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-navy/70">
              Ready to transform your marketing with psychology-driven strategies? Click below to schedule your complimentary consultation
              and discover exactly how to outthink your competition and accelerate growth.
            </p>
            <ContactButton
              size="lg"
              variant="hero"
              className="px-12 py-6 text-lg"
              defaultService="Free Marketing Consultation"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </ContactButton>
            <p className="mt-6 text-center text-sm text-navy/60">
              No spam. No sales pitches. Just valuable marketing insights tailored to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Why Schedule Benefits */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
              Why Schedule a <OrangeUnderline>Consultation?</OrangeUnderline>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-navy/70">
              Every business is unique. A personalized consultation ensures you get strategies tailored specifically to your market,
              audience, and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Zap, title: "Personalized Strategy", description: "Get a custom marketing strategy designed specifically for your business, industry, and target audience. No generic templates or one-size-fits-all solutions." },
              { icon: Star, title: "Competitive Analysis", description: "Discover what your competitors are doing wrong and how you can outthink them with psychology-driven strategies that capture more market share." },
              { icon: CheckCircle, title: "Immediate Wins", description: "Walk away with actionable tactics you can implement immediately to improve your marketing performance and start seeing results within days." },
              { icon: User, title: "Audience Psychology", description: "Understand the psychological drivers behind your customers' decisions and learn how to craft messaging that resonates and converts." },
              { icon: FileText, title: "Growth Roadmap", description: "Receive a clear, step-by-step roadmap for scaling your business with proven marketing strategies tailored to your growth goals." },
              { icon: Clock, title: "Time Savings", description: "Avoid months of trial and error. Get expert guidance that fast-tracks your marketing success and saves you time and resources." },
            ].map((benefit, index) => (
              <div key={index} className="rounded-3xl border border-hairline bg-cream p-6 text-center shadow-sm">
                <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-tint text-brand">
                  <benefit.icon className="h-8 w-8" />
                </span>
                <h3 className="mb-3 text-xl font-extrabold tracking-tight text-navy">{benefit.title}</h3>
                <p className="leading-relaxed text-navy/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
              Consultation <OrangeUnderline>Process FAQs</OrangeUnderline>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { question: "What happens during the free consultation?", answer: "During our consultation, we'll analyze your current marketing, understand your business goals, identify your target audience psychology, and provide specific recommendations for growth. You'll receive actionable strategies you can implement immediately, plus a roadmap for long-term success." },
              { question: "How long is the consultation and what format?", answer: "Consultations typically last 45-60 minutes. For Daytona Beach area businesses, we offer in-person meetings at our office or your location. For other markets, we'll conduct the consultation via video conference, phone, or detailed email exchange based on your preference." },
              { question: "Is the consultation really free? What's the catch?", answer: "Yes, it's completely free with no strings attached. We provide genuine value during our consultation because we believe in demonstrating expertise rather than just talking about it. Some businesses choose to work with us afterward, but there's no pressure or obligation to do so." },
              { question: "What should I prepare for the consultation?", answer: "Come prepared to discuss your current marketing efforts, biggest challenges, and growth goals. If possible, bring information about your target audience, competitors, and any marketing data you have. The more context you provide, the more specific and valuable our recommendations will be." },
              { question: "Do you work with businesses outside of Florida?", answer: "Absolutely. While we specialize in Volusia & Flagler County markets and offer in-person service in the Daytona Beach area, we work with businesses throughout Central Florida through remote consultations. The psychology-driven marketing principles we use are effective regardless of location." },
              { question: "What happens after the consultation?", answer: "You'll receive a follow-up email summarizing our discussion and key recommendations. If you'd like to continue working together, I'll outline potential next steps. If not, you'll still have valuable insights to implement on your own. There's no pressure either way." },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-hairline">
                <AccordionTrigger className="py-5 text-left text-lg font-bold text-navy hover:text-brand hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-navy/75">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand bg-waves-light py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/85">
              Stop guessing what your customers want. Get psychology-driven marketing strategies that convert prospects into loyal customers.
            </p>
            <div className="mb-8 flex items-center justify-center gap-2 text-white/75">
              <CheckCircle className="h-5 w-5" />
              <span>Join 200+ businesses that chose strategic marketing over generic tactics</span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ContactButton
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg"
              defaultService="Free Marketing Consultation"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </ContactButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-brand"
              asChild
            >
              <a href={`tel:${SITE_PHONE_TEL}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call: {SITE_PHONE}
              </a>
            </Button>
          </div>

          <p className="mt-6 text-center text-white/75">
            Free consultations • No sales pressure • Results-focused approach
          </p>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact AIO Growth SEO",
            "description": "Contact page for AIO Growth SEO digital marketing consultation services",
            "url": "https://aiogrowthseo.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "AIO Growth SEO",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL",
                "postalCode": "32114",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.2108",
                "longitude": "-81.0228"
              },
              "telephone": SITE_PHONE_TEL,
              "email": SITE_EMAIL,
              "openingHours": "Mo-Fr 09:00-17:00"
            }
          })
        }}
      />
    </div>
  );
}
