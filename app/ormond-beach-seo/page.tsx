'use client';

import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function OrmondBeachSEOPage() {
  const location = getLocationBySlug('ormond-beach-seo');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
