'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

interface ComparisonRow {
  category: string;
  traditional: string;
  aio: string;
  aioWins?: boolean;
  neutral?: boolean;
}

interface ComparisonTableProps {
  title: string;
  rows: ComparisonRow[];
}

export function ComparisonTable({ title, rows }: ComparisonTableProps) {
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 md:px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider w-1/3">
                  Category
                </th>
                <th className="text-left py-4 px-4 md:px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider w-1/3">
                  Traditional Agency
                </th>
                <th className="text-left py-4 px-4 md:px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider w-1/3 bg-emerald-500/5 border-t-2 border-emerald-500 rounded-t-lg">
                  AIO Growth SEO
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.category}
                  className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-4 px-4 md:px-6 font-medium text-slate-900 text-sm">
                    {row.category}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-sm text-slate-600">
                    <span className="flex items-start gap-2">
                      {row.neutral ? (
                        <Minus
                          size={16}
                          strokeWidth={1.5}
                          className="text-amber-400 mt-0.5 shrink-0"
                        />
                      ) : row.aioWins !== false ? (
                        <X
                          size={16}
                          strokeWidth={1.5}
                          className="text-slate-400 mt-0.5 shrink-0"
                        />
                      ) : null}
                      {row.traditional}
                    </span>
                  </td>
                  <td className={`py-4 px-4 md:px-6 text-sm font-medium ${row.neutral ? 'bg-emerald-500/5 text-slate-700' : 'bg-emerald-500/5 text-slate-900'}`}>
                    <span className="flex items-start gap-2">
                      {row.neutral ? (
                        <Minus
                          size={16}
                          strokeWidth={1.5}
                          className="text-amber-400 mt-0.5 shrink-0"
                        />
                      ) : (
                        <Check
                          size={16}
                          strokeWidth={1.5}
                          className="text-emerald-500 mt-0.5 shrink-0"
                        />
                      )}
                      {row.aio}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
