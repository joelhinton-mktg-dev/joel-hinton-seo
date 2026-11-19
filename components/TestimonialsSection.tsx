import { testimonials } from "@/data/clientTestimonials";
import Reveal from "./brand/Reveal";

/**
 * Results band (Homepage design v7). The quotes and business names are the
 * live site's; each big figure is reconciled to the figure its quote and the
 * underlying live testimonial support (card 1: +200%, per Privada Cigar Club).
 */
const resultCards = [
  {
    stat: '+200%',
    label: 'Traffic in 45 days',
    quote:
      'The psychology-driven SEO approach generated a 200% increase in organic traffic within 45 days. Their understanding of consumer behavior transformed our entire digital strategy.',
    circled: true,
  },
  {
    stat: '20 → 100+',
    label: 'Leads per month',
    quote:
      'From 20 leads per month to 100+ qualified leads. The local SEO and paid media strategies completely transformed our lead generation. The ROI speaks for itself.',
    circled: false,
  },
  {
    stat: '+219%',
    label: 'Online appointments',
    quote:
      'GEO optimization prepared us for AI search while dominating traditional search. The technical expertise combined with marketing psychology is unmatched.',
    circled: false,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-paper py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-[15px] font-semibold text-pen-text mb-4">Proven Results</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-5">
            Real clients. Real results.
          </h2>
          <p className="text-lg text-navy/70 leading-relaxed">
            Psychology-driven marketing that generates measurable growth for Florida
            businesses and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resultCards.map((card, index) => {
            const client = testimonials[index];
            return (
              <Reveal key={card.stat} delay={index * 120}>
                <figure className="flex h-full flex-col rounded-3xl border border-hairline bg-white p-8 shadow-sm">
                  <div className="relative inline-block self-start">
                    <span className="text-[40px] font-extrabold leading-none tracking-tight text-brand">
                      {card.stat}
                    </span>
                    {card.circled && (
                      <svg
                        viewBox="0 0 200 80"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="absolute -inset-x-3 -inset-y-2.5 h-[calc(100%+20px)] w-[calc(100%+24px)]"
                      >
                        <ellipse
                          cx="100"
                          cy="40"
                          rx="96"
                          ry="35"
                          fill="none"
                          stroke="#F97415"
                          strokeWidth="4"
                          strokeLinecap="round"
                          transform="rotate(-2 100 40)"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="mt-2.5 text-[15px] text-muted-foreground">{card.label}</p>
                  <blockquote className="mt-6 flex-1 leading-relaxed text-navy/80">
                    &ldquo;{card.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 border-t border-hairline pt-5">
                    <div className="font-bold text-navy">{client.name}</div>
                    <div className="text-sm text-muted-foreground">{client.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
