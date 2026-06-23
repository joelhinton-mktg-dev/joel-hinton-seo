'use client';

import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SystemNode {
  step: number;
  icon: LucideIcon;
  label: string;
  detail: string;
}

interface SystemFlowProps {
  title: string;
  subtitle: string;
  nodes: SystemNode[];
}

function NodeCard({ node, index }: { node: SystemNode; index: number }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const Icon = node.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
      role="button"
      aria-describedby={`tooltip-${node.step}`}
    >
      <div className="bg-slate-800 rounded-xl p-4 md:p-5 border border-slate-700 transition-all duration-300 group-hover:border-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group-focus:border-emerald-500 group-focus:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
        <span className="text-xs text-slate-500 font-mono mb-2 block">
          {String(node.step).padStart(2, '0')}
        </span>
        <Icon size={20} strokeWidth={1.5} className="text-emerald-400 mb-2" />
        <p className="text-white font-medium text-sm">{node.label}</p>
      </div>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            id={`tooltip-${node.step}`}
            role="tooltip"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-slate-700 text-slate-200 text-xs rounded-lg p-3 shadow-xl border border-slate-600"
          >
            {node.detail}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function HorizontalConnector({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="hidden md:flex items-center justify-center px-1">
      <div
        className={`flex-1 h-px ${
          reverse
            ? 'bg-gradient-to-r from-emerald-500/10 to-emerald-500/40'
            : 'bg-gradient-to-r from-emerald-500/40 to-emerald-500/10'
        }`}
      />
    </div>
  );
}

function VerticalConnector() {
  return (
    <div className="flex justify-center py-2 md:py-0">
      <div className="w-px h-6 md:h-full bg-gradient-to-b from-slate-700 to-emerald-500/40" />
    </div>
  );
}

export function SystemFlow({ title, subtitle, nodes }: SystemFlowProps) {
  const row1 = nodes.slice(0, 4);
  const row2 = nodes.slice(4, 8);
  // Row 2 displayed right-to-left on desktop
  const row2Reversed = [...row2].reverse();

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
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Desktop layout: 2 rows of 4 with connectors */}
        <div className="hidden md:block max-w-5xl mx-auto">
          {/* Row 1: left to right */}
          <div className="grid grid-cols-7 gap-y-0 items-center">
            {row1.map((node, i) => (
              <Fragment key={node.step}>
                <NodeCard node={node} index={i} />
                {i < 3 && <HorizontalConnector />}
              </Fragment>
            ))}
          </div>

          {/* Vertical connector from node 4 to node 5 (right side) */}
          <div className="grid grid-cols-7">
            <div className="col-start-7 flex justify-center py-3">
              <div className="w-px h-10 bg-gradient-to-b from-emerald-500/40 to-slate-700" />
            </div>
          </div>

          {/* Row 2: right to left (reversed) */}
          <div className="grid grid-cols-7 gap-y-0 items-center">
            {row2Reversed.map((node, i) => (
              <Fragment key={node.step}>
                <NodeCard node={node} index={i + 4} />
                {i < 3 && <HorizontalConnector reverse />}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Mobile layout: vertical stack */}
        <div className="md:hidden max-w-sm mx-auto space-y-0">
          {nodes.map((node, i) => (
            <div key={node.step}>
              <NodeCard node={node} index={i} />
              {i < nodes.length - 1 && <VerticalConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
