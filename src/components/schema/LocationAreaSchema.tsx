interface LocationAreaSchemaProps {
  city: string;
  description: string;
}

/** LocalBusiness JSON-LD for /areas-we-serve/[slug] pages */
export default function LocationAreaSchema({ city, description }: LocationAreaSchemaProps) {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
