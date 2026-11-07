import { notFound } from 'next/navigation';
import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function DaytonaBeachPage() {
  const location = getLocationBySlug('daytona-beach');

  if (!location) {
    notFound();
  }

  const faqSchema = location.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: location.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            // Answers use [text](href) links; schema gets the plain text.
            text: faq.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
          },
        })),
      }
    : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <LocationPage location={location} />
    </>
  );
}
