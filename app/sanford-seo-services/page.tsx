import LocationPage from '@/components/LocationPage';
import { buildLocationMetadata, getLocationBySlug } from '@/data/locations';

const SLUG = 'sanford-seo-services';

export const metadata = buildLocationMetadata(SLUG);

export default function SanfordSeoServicesPage() {
  const location = getLocationBySlug(SLUG);

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
