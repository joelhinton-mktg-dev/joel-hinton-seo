interface LocationAreaSchemaProps {
  city: string;
  description: string;
  pageUrl?: string;
  datePublished?: string;
  dateModified?: string;
}

/** LocalBusiness JSON-LD for /areas-we-serve/[slug] pages */
export default function LocationAreaSchema({
  city,
  description,
  pageUrl,
  datePublished,
  dateModified,
}: LocationAreaSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AIO Growth SEO',
    url: 'https://aiogrowthseo.com',
    description,
    areaServed: {
      '@type': 'City',
      name: city,
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  };

  const pageSchema =
    pageUrl && (dateModified || datePublished)
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          url: pageUrl,
          ...(datePublished && { datePublished }),
          ...(dateModified && { dateModified }),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {pageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      )}
    </>
  );
}
