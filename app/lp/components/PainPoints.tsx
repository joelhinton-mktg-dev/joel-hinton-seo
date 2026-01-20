'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Eye, Search, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PainPointsProps {
  headline?: string;
  subheadline?: string;
  painPoints?: PainPoint[];
}

const defaultPainPoints: PainPoint[] = [
  {
    icon: Eye,
    title: 'Invisible to Your Customers',
    description:
      "If you're not on page 1, you might as well not exist. 75% of users never scroll past the first page of Google.",
  },
  {
    icon: TrendingDown,
    title: 'Losing Business to Competitors',
    description:
      "Every day you're not ranking, your competitors are capturing the leads that should be yours.",
  },
  {
    icon: Search,
    title: 'Missing Local Searches',
    description:
      '"Near me" searches have grown 900% in 2 years. Without local SEO optimization, you\'re missing out.',
  },
  {
    icon: Bot,
    title: 'AI is Changing Search',
    description:
      "Google's AI Overviews and ChatGPT are reshaping how people find businesses. Is your site optimized for AI?",
  },
];

export function PainPoints({
  headline = "Is Your Business Suffering From These Problems?",
  subheadline = "If any of these sound familiar, you're not alone—and we can help.",
  painPoints = defaultPainPoints,
}: PainPointsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">Common Problems</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subheadline}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
