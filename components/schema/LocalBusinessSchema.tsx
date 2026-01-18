const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AIO Growth SEO",
    "description": "Psychology-driven SEO and digital marketing services for businesses in Volusia & Flagler Counties, Central Florida",
    "url": "https://aiogrowthseo.com",
    "telephone": "(386) 555-0123",
    "email": "info@aiogrowthseo.com",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default LocalBusinessSchema;
