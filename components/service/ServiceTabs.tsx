'use client';

import { useState, type ReactNode } from 'react';
import { Check } from 'lucide-react';

export interface ServiceTabItem {
  id: string;
  title: string;
  subtitle?: string;
  description: ReactNode;
  features: string[];
  /** Optional closing line under the checklist (e.g. a "Best for" note). */
  note?: ReactNode;
}

interface ServiceTabsProps {
  services: ServiceTabItem[];
  ariaLabel: string;
  idPrefix: string;
}

/**
 * Tabbed "What's included" interface from the Local SEO design v1,
 * generalized for every service page in phase 2. Every panel stays in
 * the HTML (inactive ones are hidden) so search engines read all of it.
 */
export default function ServiceTabs({ services, ariaLabel, idPrefix }: ServiceTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-[1.75rem] border border-hairline bg-white p-4 shadow-xl sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[290px_1fr]">
        <div
          role="tablist"
          aria-label={ariaLabel}
          className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${service.id}`}
              aria-selected={index === active}
              aria-controls={`${idPrefix}-panel-${service.id}`}
              onClick={() => setActive(index)}
              className={`relative shrink-0 whitespace-nowrap rounded-xl px-4 py-3.5 text-left text-[15px] font-bold transition-colors lg:whitespace-normal ${
                index === active
                  ? 'bg-paper text-navy'
                  : 'text-navy/55 hover:bg-paper/70 hover:text-navy'
              }`}
            >
              {index === active && (
                <span className="absolute left-0 top-1/2 hidden h-8 w-1 -translate-y-1/2 rounded-full bg-pen lg:block" />
              )}
              {service.title}
            </button>
          ))}
        </div>

        <div>
          {services.map((service, index) => (
            <div
              key={service.id}
              role="tabpanel"
              id={`${idPrefix}-panel-${service.id}`}
              aria-labelledby={`${idPrefix}-tab-${service.id}`}
              hidden={index !== active}
              className="h-full rounded-2xl bg-paper p-6 sm:p-8"
            >
              <p className="text-sm font-semibold text-muted-foreground">
                {String(index + 1).padStart(2, '0')} of {String(services.length).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="mt-1.5 font-semibold text-brand">{service.subtitle}</p>
              )}
              <div className="mt-4 leading-relaxed text-navy/75">{service.description}</div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 rounded-xl border border-hairline bg-white px-3.5 py-2.5 text-[15px] font-medium text-navy/85"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.note && (
                <div className="mt-6 border-t border-hairline pt-4 text-sm leading-relaxed text-navy/65">
                  {service.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
