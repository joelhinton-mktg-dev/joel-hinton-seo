'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface CredibilityBarProps {
  stats: Stat[];
}

export function CredibilityBar({ stats }: CredibilityBarProps) {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 border-t border-emerald-500/20 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
