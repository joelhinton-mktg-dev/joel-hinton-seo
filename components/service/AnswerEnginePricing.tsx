import type { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { geoOffer } from '@/data/pricing';

interface AnswerEnginePricingProps {
  heading: string;
  intro: ReactNode;
  /** Extra line inside the foundation card, under the offer subhead. */
  foundationNote?: string;
  /** Opens the page's contact dialog with the Answer Engine service label. */
  onStart: () => void;
}

/**
 * The two-step pricing layout from the Local SEO design v1, carrying the
 * Answer Engine offer from src/data/pricing.ts (geoOffer). Shared by the
 * service pages whose own pricing ladders are retired: the figures come
 * only from pricing.ts, never from page copy.
 */
export default function AnswerEnginePricing({
  heading,
  intro,
  foundationNote,
  onStart,
}: AnswerEnginePricingProps) {
  return (
    <section className="bg-paper py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-[15px] font-semibold text-pen-text">Pricing</p>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
            {heading}
          </h2>
          <div className="text-lg leading-relaxed text-navy/70">{intro}</div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
          <div className="relative rounded-3xl border border-hairline bg-white p-8 shadow-sm">
            <span className="absolute -top-4 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-navy font-extrabold text-white">
              1
            </span>
            <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Step 1 · One-time
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy">
              Foundation setup
            </h3>
            <p className="mt-5">
              <span className="text-5xl font-extrabold tracking-tight text-navy">
                {geoOffer.build}
              </span>{' '}
              <span className="text-muted-foreground">one-time investment</span>
            </p>
            <p className="mt-2 text-[15px] font-medium text-navy/60">You own all of it.</p>
            <p className="mt-5 leading-relaxed text-navy/75">{geoOffer.subhead}</p>
            {foundationNote && (
              <p className="mt-3 leading-relaxed text-navy/75">{foundationNote}</p>
            )}
            <Button
              variant="outline"
              onClick={onStart}
              className="mt-8 h-12 w-full rounded-full border-2 border-navy font-bold text-navy hover:bg-navy hover:text-white"
            >
              Start With the Foundation
            </Button>
          </div>

          <div className="relative rounded-3xl bg-navy p-8 shadow-xl">
            <span className="absolute -top-4 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-pen font-extrabold text-white">
              2
            </span>
            <p className="text-sm font-bold uppercase tracking-wide text-white/60">
              Step 2 · Monthly
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white">
              Monthly growth
            </h3>
            <p className="mt-5">
              <span className="text-5xl font-extrabold tracking-tight text-white">
                {geoOffer.monthly.replace('/mo', '')}
              </span>{' '}
              <span className="text-white/60">/mo · cancel anytime</span>
            </p>
            <p className="mt-2 text-[15px] font-medium text-white/60">
              Month to month. Cancel anytime.
            </p>
            <ul className="mt-6 space-y-3">
              {geoOffer.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              {geoOffer.term}. Backed by the {geoOffer.guarantee}: if ChatGPT, Perplexity, or
              Google AI Overviews does not name your business for your main service in your
              city within 90 days of launch, we keep working at no additional charge until it
              does.
            </p>
            <Button
              onClick={onStart}
              className="mt-8 h-12 w-full rounded-full bg-brand font-bold text-white hover:bg-brand/90"
            >
              Start Monthly Growth
            </Button>
          </div>
        </div>

        <p className="mt-10 text-center text-navy/70">
          Want the full breakdown? See{' '}
          <Link href="/pricing" className="font-semibold text-brand underline hover:text-navy">
            full pricing
          </Link>{' '}
          or the{' '}
          <Link href={geoOffer.href} className="font-semibold text-brand underline hover:text-navy">
            Answer Engine service page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
