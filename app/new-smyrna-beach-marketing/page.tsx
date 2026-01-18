'use client';

import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function NewSmyrnaBeachMarketingPage() {
  const location = getLocationBySlug('new-smyrna-beach-marketing');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
