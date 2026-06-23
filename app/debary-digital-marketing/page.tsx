import LocationPage from '@/components/LocationPage';
import { buildLocationMetadata, getLocationBySlug } from '@/data/locations';

const SLUG = 'debary-digital-marketing';

export const metadata = buildLocationMetadata(SLUG);

export default function DebaryDigitalMarketingPage() {
  const location = getLocationBySlug(SLUG);

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
