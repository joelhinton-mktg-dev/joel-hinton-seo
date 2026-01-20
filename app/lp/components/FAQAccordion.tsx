'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline?: string;
  subheadline?: string;
  faqs?: FAQ[];
}

export const seoAuditFAQs: FAQ[] = [
  {
    question: 'How long does the free SEO audit take?',
    answer:
      "We'll deliver your comprehensive audit within 24-48 hours of your submission. It typically takes us 2-3 hours to complete a thorough analysis of your website and competitors.",
  },
  {
    question: "Is this really free? What's the catch?",
    answer:
      "Yes, it's completely free with no strings attached. We offer the audit as a way to demonstrate our expertise and build trust. If you like what you see, we can discuss working together. If not, you still walk away with valuable insights.",
  },
  {
    question: "What if I don't have a website yet?",
    answer:
      "That's okay! We can still assess your online presence, including social profiles, directory listings, and your competitors. We'll also provide recommendations for what your new website should include.",
  },
  {
    question: 'Will you share my information with anyone?',
    answer:
      'Absolutely not. Your information is kept strictly confidential and will only be used to prepare your audit and follow up with you. We never sell or share your data.',
  },
  {
    question: 'What makes your audit different from automated tools?',
    answer:
      "Our audit is performed by real SEO experts, not just software. We analyze your specific business context, local market, and competitors to provide actionable recommendations—not just a list of technical issues.",
  },
  {
    question: 'Do I have to sign up for your services after the audit?',
    answer:
      "Not at all. The audit is yours to keep and use however you'd like. Many business owners use our recommendations to guide their own efforts or share with their existing team. There's zero pressure to become a client.",
  },
];

export function FAQAccordion({
  headline = 'Frequently Asked Questions',
  subheadline = 'Everything you need to know about our free SEO audit',
  faqs = seoAuditFAQs,
}: FAQAccordionProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subheadline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
