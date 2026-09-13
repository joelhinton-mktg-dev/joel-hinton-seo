import { Metadata } from 'next';
import { Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';

export const metadata: Metadata = {
  title: {
    absolute: 'SEO Tools — Coming Soon | AIO Growth SEO',
  },
  description: 'We are building a suite of free tools for local business owners and contractors. Check back soon.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://aiogrowthseo.com/tools',
  },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageBreadcrumb items={[{ label: 'Tools', current: true }]} />

      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Wrench className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Free SEO Tools for Local Businesses
            </h1>
            <p className="text-xl text-muted-foreground">
              We are building a suite of free tools for local business owners and contractors. Check back soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
