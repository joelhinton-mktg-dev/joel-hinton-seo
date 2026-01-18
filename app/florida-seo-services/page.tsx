'use client';

import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function FloridaSEOServicesPage() {
  const location = getLocationBySlug('florida-seo-services');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
