export function getServiceHref(serviceName: string): string {
  const normalized = serviceName.trim().toLowerCase();

  const map: Record<string, string> = {
    // Core service pages
    'seo services': '/services/search-engine-optimization',
    'local seo': '/services/local-seo',
    'geo optimization': '/services/geo-optimization',
    'e-commerce seo': '/services/ecommerce-seo',
    'ecommerce seo': '/services/ecommerce-seo',
    'local lead generation': '/services/local-lead-generation',
    'custom tools & automation': '/services/custom-tools-automation',
    'custom tools and automation': '/services/custom-tools-automation',
    'custom tools automation': '/services/custom-tools-automation',

    // Common location-page labels that should route to the closest “real” service page
    'google business profile': '/services/local-seo',
    'content marketing': '/services/search-engine-optimization',
    'lead generation': '/services/local-lead-generation',
    'paid advertising': '/services/local-lead-generation',
    'google ads': '/services/local-lead-generation',
  };

  return map[normalized] ?? '/services';
}

