'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { BlogFaqItem } from '@/types/blog';

interface BlogPostFaqsProps {
  faqs: BlogFaqItem[];
}

export default function BlogPostFaqs({ faqs }: BlogPostFaqsProps) {
  if (!faqs.length) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-200" aria-labelledby="blog-faq-heading">
      <h2 id="blog-faq-heading" className="text-2xl font-bold text-slate-900 mb-6">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`} data-testid={`blog-faq-${index}`}>
            <AccordionTrigger className="text-left text-slate-900 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
