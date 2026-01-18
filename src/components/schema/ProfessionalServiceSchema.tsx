interface ProfessionalServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  price?: string;
  serviceType: string;
}

const ProfessionalServiceSchema = ({ 
  serviceName, 
  serviceDescription, 
  serviceUrl, 
  price,
  serviceType 
}: ProfessionalServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": "AIO Growth SEO",
      "url": "https://aiogrowthseo.com",
      "telephone": "(386) 555-0123",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Daytona Beach",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "serviceType": serviceType,
    "areaServed": [
      "Florida",
      "Daytona Beach", 
      "Orlando",
      "Jacksonville",
      "Tampa",
      "Miami"
    ],
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    })
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default ProfessionalServiceSchema;