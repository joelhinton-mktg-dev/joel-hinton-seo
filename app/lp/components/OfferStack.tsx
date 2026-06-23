'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SpotsConfig {
  total: number;
  filled: number;
}

interface OfferStackProps {
  title: string;
  subtitle: string;
  spotsConfig: SpotsConfig;
  onApplyClick: () => void;
}

function SpotsCounter({ spotsConfig }: { spotsConfig: SpotsConfig }) {
  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <div className="flex gap-2">
        {Array.from({ length: spotsConfig.total }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full border-2 transition-colors ${
              i < spotsConfig.filled
                ? 'bg-emerald-500 border-emerald-500'
                : 'border-emerald-500/40 bg-transparent'
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-slate-400">
        {spotsConfig.filled} of {spotsConfig.total} spots filled
      </p>
    </div>
  );
}

export function OfferStack({
  title,
  subtitle,
  spotsConfig,
  onApplyClick,
}: OfferStackProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Standard Pricing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 opacity-75"
          >
            <h3 className="text-xl font-semibold text-slate-300 mb-6">
              Standard Pricing
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Setup
                </p>
                <p className="text-3xl font-bold text-white">$1,500</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Monthly
                </p>
                <p className="text-3xl font-bold text-white">$500</p>
                <p className="text-sm text-slate-500">/month</p>
              </div>
            </div>
          </motion.div>

          {/* Launch Offer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-slate-800 rounded-2xl p-8 border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
          >
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white border-0 px-4 py-1">
              5 Spots Only — 50% Off
            </Badge>
            <h3 className="text-xl font-semibold text-white mb-6 mt-2">
              Launch Offer
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Setup
                </p>
                <p className="text-sm text-slate-500 line-through">$1,500</p>
                <p className="text-3xl font-bold text-emerald-400">$750</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Monthly
                </p>
                <p className="text-3xl font-bold text-white">$500</p>
                <p className="text-sm text-slate-500">/month</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Month-to-month. No lock-in. Cancel anytime.
            </p>
            <Button
              onClick={onApplyClick}
              className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 text-lg"
            >
              Apply for a Spot
            </Button>
          </motion.div>
        </div>

        <SpotsCounter spotsConfig={spotsConfig} />
      </div>
    </section>
  );
}
