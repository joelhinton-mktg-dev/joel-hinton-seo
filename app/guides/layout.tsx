import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | AIO Growth SEO',
  },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
