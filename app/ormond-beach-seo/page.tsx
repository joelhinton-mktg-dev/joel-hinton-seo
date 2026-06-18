import LocationPage from '@/components/LocationPage';
import { buildLocationMetadata, getLocationBySlug } from '@/data/locations';

const SLUG = 'ormond-beach-seo';

export const metadata = buildLocationMetadata(SLUG);

export default function OrmondBeachSeoPage() {
  const location = getLocationBySlug(SLUG);

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationPage location={location} />;
}
