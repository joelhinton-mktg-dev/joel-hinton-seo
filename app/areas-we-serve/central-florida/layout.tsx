import { buildLocationMetadata } from '@/data/locations';

export const metadata = buildLocationMetadata('central-florida');

export default function CentralFloridaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
