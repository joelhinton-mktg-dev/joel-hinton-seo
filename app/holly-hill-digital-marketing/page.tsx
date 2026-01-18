'use client';

import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function HollyHillDigitalMarketingPage() {
  const location = getLocationBySlug('holly-hill-digital-marketing');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
