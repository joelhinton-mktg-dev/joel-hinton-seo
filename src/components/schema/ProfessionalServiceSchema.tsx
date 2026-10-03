import { SITE_PHONE_TEL } from "@/data/site";

interface ProfessionalServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  price?: string;
  serviceType: string;
  areaServed?: unknown;
  offers?: unknown;
  dateModified?: string;
}

const defaultAreaServed = [
  "Florida",
  "Daytona Beach",
  "Orlando",
  "Jacksonville",
  "Tampa",
  "Miami"
];

const ProfessionalServiceSchema = ({
  serviceName,
  serviceDescription,
  serviceUrl,
  price,
  serviceType,
  areaServed,
  offers,
  dateModified,
}: ProfessionalServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    ...(dateModified && { dateModified }),
    "provider": {
      "@type": "LocalBusiness",
      "name": "AIO Growth SEO",
      "url": "https://aiogrowthseo.com",
      "telephone": SITE_PHONE_TEL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Daytona Beach",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "serviceType": serviceType,
    "areaServed": areaServed ?? defaultAreaServed,
    ...(offers
      ? { offers }
      : price && {
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