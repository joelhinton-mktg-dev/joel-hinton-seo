'use client';

import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function PalmCoastMarketingPage() {
  const location = getLocationBySlug('palm-coast-marketing');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
