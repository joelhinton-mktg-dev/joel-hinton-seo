'use client';

import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function PortOrangeMarketingPage() {
  const location = getLocationBySlug('port-orange-marketing');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
