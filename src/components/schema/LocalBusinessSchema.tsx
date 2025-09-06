const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Joel Hinton Digital Marketing",
    "description": "Psychology-driven SEO and digital marketing services for Florida businesses",
    "url": "https://joelhintonmarketing.com",
    "telephone": "(386) 555-0123",
    "email": "joel@joelhintonmarketing.com",
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
      "Florida",
      "Daytona Beach",
      "Orlando", 
      "Jacksonville",
      "Tampa",
      "Miami"
    ],
    "serviceType": [
      "SEO Services",
      "Digital Marketing",
      "Growth Marketing",
      "Local SEO",
      "Paid Advertising"
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