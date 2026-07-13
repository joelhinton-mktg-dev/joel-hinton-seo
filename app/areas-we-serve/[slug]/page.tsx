import { notFound } from 'next/navigation';
import LocationPage from '@/components/LocationPage';
import { buildLocationMetadata, getLocationBySlug, locations } from '@/data/locations';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations
    .filter((location) => location.slug !== 'daytona-beach')
    .map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return buildLocationMetadata(slug);
}

export default async function AreaLocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <LocationPage location={location} />;
}
