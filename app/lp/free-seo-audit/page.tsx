'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  HeroSection,
  MultiStepForm,
  SocialProof,
  PainPoints,
  BenefitsGrid,
  seoAuditBenefits,
  FAQAccordion,
  seoAuditFAQs,
  StickyFooterCTA,
} from '../components';

export default function FreeSEOAuditPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Is Your Website Invisible to Google?"
        subheadline="Get a free, comprehensive SEO audit that reveals exactly why your competitors are outranking you—and what to do about it."
        ctaText="Get My Free Audit"
        onCtaClick={scrollToForm}
        badgeText="Free Limited-Time Offer"
      />

      {/* Pain Points */}
      <PainPoints />

      {/* What You Get */}
      <BenefitsGrid
        headline="What's Included in Your Free Audit"
        subheadline="A complete analysis of your online presence—no strings attached"
        benefits={seoAuditBenefits}
        columns={3}
      />

      {/* Social Proof */}
      <SocialProof />

      {/* Form Section */}
      <section
        ref={formRef}
        id="audit-form"
        className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Claim Your Free SEO Audit
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Takes less than 2 minutes. We&apos;ll email your personalized audit
              within 24 hours.
            </p>
          </motion.div>

          <MultiStepForm
            page="free-seo-audit"
            source="landing-page"
            formspreeEndpoint="https://formspree.io/f/xrbarnbp"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion faqs={seoAuditFAQs} />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Stop Losing Business to Your Competitors
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Every day without proper SEO is money left on the table. Get your
              free audit and start climbing the rankings today.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-emerald-500/25"
            >
              Get My Free Audit Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <StickyFooterCTA
        text="Get your free SEO audit"
        buttonText="Claim Audit"
        onCtaClick={scrollToForm}
      />
    </>
  );
}
