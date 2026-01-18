import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Search, MapPin, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 -mt-8 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/" className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <Home className="w-5 h-5 text-primary" />
                <span>Home</span>
              </Link>
              <Link href="/services" className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <Search className="w-5 h-5 text-primary" />
                <span>Our Services</span>
              </Link>
              <Link href="/areas-we-serve" className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Areas We Serve</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>Contact Us</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
