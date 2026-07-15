import { SITE_EMAIL, SITE_PHONE } from "@/data/site";

const LocalBusinessSchema = () => {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AIO Growth SEO",
    "description": "Psychology-driven SEO and digital marketing services for businesses in Volusia & Flagler Counties, Central Florida",
    "url": "https://aiogrowthseo.com",
    "telephone": SITE_PHONE,
    "email": SITE_EMAIL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Daytona Beach",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.2108",
      "longitude": "-81.0228"
    },
    "priceRange": "$500-$5000",
    "openingHours": "Mo-Fr 09:00-17:00",
    "areaServed": [
      "Volusia County",
      "Flagler County",
      "Daytona Beach",
      "Port Orange",
      "Ormond Beach",
      "Palm Coast",
      "New Smyrna Beach"
    ],
    "serviceType": [
      "SEO Services",
      "Local SEO",
      "GEO Optimization",
      "Local Lead Generation",
      "Custom Marketing Tools & Automation"
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AIO Growth SEO",
    "url": "https://aiogrowthseo.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aiogrowthseo.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIO Growth SEO",
    "url": "https://aiogrowthseo.com",
    "logo": "https://aiogrowthseo.com/icon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "areaServed": {
      "@type": "County",
      "name": "Volusia County"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization, null, 2) }}
      />
    </>
  );
};

export default LocalBusinessSchema;
