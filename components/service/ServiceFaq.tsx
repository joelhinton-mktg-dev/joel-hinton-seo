import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface ServiceFaqItem {
  question: string;
  answer: ReactNode;
  /** Plain-text version of the answer, used for the FAQPage schema. */
  schemaText?: string;
}

interface ServiceFaqProps {
  faqs: ServiceFaqItem[];
  /** Side note under the heading (template default mentions the assistant). */
  note?: string;
  /** Render a FAQPage JSON-LD block built from the items that carry schemaText. */
  withSchema?: boolean;
}

/**
 * Two-column FAQ section from the Local SEO design v1. When withSchema is
 * set, the FAQPage schema is generated from the same items that render,
 * so the two cannot drift.
 */
export default function ServiceFaq({
  faqs,
  note = 'Still wondering? The assistant in the corner can answer anything else.',
  withSchema = false,
}: ServiceFaqProps) {
  const schemaItems = faqs.filter((faq) => faq.schemaText);
  const faqSchema =
    withSchema && schemaItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: schemaItems.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.schemaText as string,
            },
          })),
        }
      : null;

  return (
    <section className="bg-paper py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Questions</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">{note}</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index + 1}`}
                className="border-b border-hairline"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-bold text-navy hover:text-brand hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-navy/75">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </section>
  );
}
