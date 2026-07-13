import { buildLocationMetadata } from '@/data/locations';

export const metadata = buildLocationMetadata('daytona-beach');

export default function DaytonaBeachLayout({ children }: { children: React.ReactNode }) {
  return children;
}
