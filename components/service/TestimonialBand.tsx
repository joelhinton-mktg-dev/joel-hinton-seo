import { Star } from 'lucide-react';

interface TestimonialBandProps {
  quote: string;
  name: string;
  role: string;
}

/** Navy testimonial band from the Local SEO design v1. Named, live testimonials only. */
export default function TestimonialBand({ quote, name, role }: TestimonialBandProps) {
  return (
    <section className="bg-navy py-20">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <div className="mb-7 flex justify-center gap-1" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-sun text-sun" />
          ))}
        </div>
        <blockquote className="text-2xl font-bold leading-snug text-white md:text-[28px]">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-7 font-bold text-white">
          {name}
          <span className="font-medium text-white/60"> · {role}</span>
        </p>
      </div>
    </section>
  );
}
