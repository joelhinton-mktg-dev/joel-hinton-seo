import { notFound } from 'next/navigation';
import LocationPage from '@/components/LocationPage';
import { getLocationBySlug } from '@/data/locations';

export default function DaytonaBeachPage() {
  const location = getLocationBySlug('daytona-beach');

  if (!location) {
    notFound();
  }

  return <LocationPage location={location} />;
}
