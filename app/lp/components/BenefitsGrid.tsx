'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  headline?: string;
  subheadline?: string;
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
}

export function BenefitsGrid({
  headline = 'What You Get',
  subheadline = 'Everything you need to dominate local search',
  benefits,
  columns = 3,
}: BenefitsGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
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

        <div className={`grid ${gridCols[columns]} gap-6 max-w-6xl mx-auto`}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Pre-built benefit list for SEO audit landing page
export const seoAuditBenefits: Benefit[] = [
  {
    icon: Check,
    title: 'Technical SEO Analysis',
    description:
      'Full site crawl to identify speed issues, broken links, and crawlability problems.',
  },
  {
    icon: Check,
    title: 'Keyword Gap Analysis',
    description:
      'Discover which keywords your competitors rank for that you\'re missing.',
  },
  {
    icon: Check,
    title: 'Local SEO Review',
    description:
      'Google Business Profile audit, citation analysis, and local ranking factors.',
  },
  {
    icon: Check,
    title: 'Content Assessment',
    description:
      'Page-by-page content review with recommendations for improvement.',
  },
  {
    icon: Check,
    title: 'Competitor Comparison',
    description:
      'See how you stack up against your top 3 local competitors.',
  },
  {
    icon: Check,
    title: 'Action Plan',
    description:
      'Prioritized list of fixes and opportunities to improve your rankings.',
  },
];
