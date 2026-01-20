'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  result?: string;
}

interface SocialProofProps {
  testimonials?: Testimonial[];
  headline?: string;
  subheadline?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Mike Rodriguez',
    role: 'Owner',
    company: 'Rodriguez Plumbing',
    content: 'Within 3 months, we went from page 3 to the top 3 results for "plumber near me". Phone calls increased by 200%.',
    rating: 5,
    result: '+200% Calls',
  },
  {
    name: 'Sarah Chen',
    role: 'Managing Partner',
    company: 'Chen & Associates Law',
    content: 'Their AI-focused SEO strategy put us ahead of firms that have been around for decades. Best investment we made.',
    rating: 5,
    result: '#1 in Local Pack',
  },
  {
    name: 'David Thompson',
    role: 'Owner',
    company: 'Thompson HVAC Services',
    content: 'They understand the trades. No fluff, just results. Our leads have tripled and we had to hire two new techs.',
    rating: 5,
    result: '3x More Leads',
  },
];

export function SocialProof({
  testimonials = defaultTestimonials,
  headline = 'Trusted by Local Businesses',
  subheadline = 'See what our clients have to say about their results',
}: SocialProofProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subheadline}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                {testimonial.result && (
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    {testimonial.result}
                  </span>
                )}
              </div>

              <Quote className="w-8 h-8 text-slate-200 mb-3" />

              <p className="text-slate-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
