'use client';

import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function SanfordSEOServicesPage() {
  const location = getLocationBySlug('sanford-seo-services');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
