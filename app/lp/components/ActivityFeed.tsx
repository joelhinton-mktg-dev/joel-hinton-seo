'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ActivityItem {
  text: string;
}

interface ActivityFeedProps {
  items: ActivityItem[];
  intervalMs?: number;
}

export function ActivityFeed({ items, intervalMs = 4000 }: ActivityFeedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, items.length, intervalMs]);

  if (prefersReducedMotion) {
    return (
      <section className="bg-slate-800 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-sm text-slate-400">
                <span className="text-emerald-400 mr-1.5">&#10003;</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-slate-800 py-4 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div
          className="h-6 flex items-center justify-center"
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-slate-400 text-center"
            >
              <span className="text-emerald-400 mr-1.5">&#10003;</span>
              {items[currentIndex].text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
