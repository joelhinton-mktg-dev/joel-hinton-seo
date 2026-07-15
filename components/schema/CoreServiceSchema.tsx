interface CoreServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

/** ProfessionalService JSON-LD for core /services/* pages */
export default function CoreServiceSchema({ name, description, url }: CoreServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'AIO Growth SEO',
      url: 'https://aiogrowthseo.com',
      areaServed: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    areaServed: {
      '@type': 'County',
      name: 'Volusia County',
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
