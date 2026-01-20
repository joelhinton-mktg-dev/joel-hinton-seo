'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

interface StickyFooterCTAProps {
  text?: string;
  buttonText?: string;
  onCtaClick: () => void;
  scrollThreshold?: number;
}

export function StickyFooterCTA({
  text = 'Ready to grow your business?',
  buttonText = 'Get Your Free Audit',
  onCtaClick,
  scrollThreshold = 500,
}: StickyFooterCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > scrollThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-slate-900 px-4 py-3 shadow-lg">
            <div className="flex items-center justify-between gap-3">
              <p className="text-white text-sm font-medium flex-1">{text}</p>
              <Button
                onClick={onCtaClick}
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-white whitespace-nowrap"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <button
                onClick={handleDismiss}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
