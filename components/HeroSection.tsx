import Link from 'next/link';
import { Search, Star } from 'lucide-react';
import AuditForm from './brand/AuditForm';
import CountUp from './brand/CountUp';
import MarkerNote from './brand/MarkerNote';
import OrangeUnderline from './brand/OrangeUnderline';
import Reveal from './brand/Reveal';
import { FORMSPREE_HERO_ENDPOINT } from '@/data/site';

const stats = [
  { end: 91, suffix: '%', label: 'Avg Traffic Growth' },
  { end: 45, suffix: '+', label: 'Local Clients' },
  { end: 20, suffix: '', label: 'Days to Results' },
  { end: 5, suffix: '', label: 'Industries Served' },
];

const packRows = [
  { rank: 'A', name: 'Your Business', detail: 'Open · Daytona Beach', stars: 5, highlighted: true },
  { rank: 'B', name: 'Competitor', detail: 'Ormond Beach', stars: 4, highlighted: false },
  { rank: 'C', name: 'Competitor', detail: 'Port Orange', stars: 3, highlighted: false },
];

const Stars = ({ count }: { count: number }) => (
  <span className="flex gap-0.5" aria-label={`${count} star rating`}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-sun text-sun" />
    ))}
  </span>
);

const HeroSection = () => {
  return (
    <section className="bg-paper bg-waves overflow-hidden">
      <div className="container mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Copy + audit form */}
          <div>
            <p className="text-[15px] font-semibold text-pen-text mb-5">
              Central Florida&apos;s SEO &amp; GEO Optimization Experts
            </p>
            <h1 className="text-[42px] leading-[1.04] sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-navy mb-7">
              Daytona Beach SEO Company. Local Search That <OrangeUnderline>Gets You Found</OrangeUnderline>
            </h1>
            <p className="text-lg md:text-xl text-navy/75 leading-relaxed mb-4 max-w-xl">
              Dominate Google and AI search results. As a Daytona Beach SEO company, we help
              Central Florida businesses get found by customers searching on Google, ChatGPT,
              and voice assistants.
            </p>
            <p className="text-base md:text-lg text-navy/70 leading-relaxed mb-9 max-w-xl">
              Serving Volusia, Flagler, and Seminole Counties. No long-term contracts.
              Just measurable results that turn search visibility into profit.
            </p>

            <AuditForm
              endpoint={FORMSPREE_HERO_ENDPOINT}
              serviceLabel="Free SEO Audit"
              buttonLabel="Get Free SEO Audit"
              formType="hero_form"
              className="max-w-xl"
            />

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/results"
                className="inline-flex items-center rounded-full border-2 border-navy/15 bg-white px-6 py-3 font-bold text-navy transition-colors hover:border-brand hover:text-brand"
              >
                View Case Studies
              </Link>
              <span className="flex items-end gap-1.5">
                <MarkerNote className="text-[26px]">free, back in 24 hrs</MarkerNote>
                <svg viewBox="0 0 40 28" fill="none" aria-hidden="true" className="h-6 w-7 -scale-y-100 text-pen-text">
                  <path
                    d="M4 4 C 14 20, 24 24, 33 22 M33 22 l-7 -1 M33 22 l-2 -7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Local pack example card */}
          <Reveal className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="relative rounded-[1.75rem] border border-hairline bg-white p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-navy/60">Google Maps</span>
                <span className="text-xs font-medium text-muted-foreground">Example</span>
              </div>
              <div className="mb-4 flex items-center gap-2 rounded-full border border-hairline bg-paper px-4 py-2.5">
                <Search className="h-4 w-4 text-navy/50" />
                <span className="text-sm text-navy/80">ac repair daytona beach</span>
              </div>
              <div className="space-y-3">
                {packRows.map((row) => (
                  <div
                    key={row.rank}
                    className={`flex items-center gap-3 rounded-2xl p-3.5 ${
                      row.highlighted
                        ? 'border-2 border-pen bg-pen-tint/50'
                        : 'border border-hairline bg-white'
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold text-white ${
                        row.highlighted ? 'bg-pen' : 'bg-navy/25'
                      }`}
                    >
                      {row.rank}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-bold text-navy">{row.name}</span>
                      <span className="block text-sm text-muted-foreground">{row.detail}</span>
                    </span>
                    <Stars count={row.stars} />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-7 -left-3 -rotate-3 rounded-md bg-sun px-4 py-2.5 shadow-lg sm:-left-7">
              <MarkerNote tone="navy" rotate={false} className="text-[22px] leading-tight">
                this is the spot that gets the calls
              </MarkerNote>
            </div>
          </Reveal>
        </div>

        {/* Stats strip: the one verified set, used everywhere */}
        <div className="mt-24 border-t border-hairline pt-10">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-4xl font-extrabold tracking-tight text-navy md:text-[44px]">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </dd>
                <dt className="mt-1.5 text-[15px] text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
