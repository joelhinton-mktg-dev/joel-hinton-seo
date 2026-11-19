import MarkerNote from '../brand/MarkerNote';

export interface ServiceTimelineStep {
  when: string;
  title: string;
  description: string;
  points?: string[];
}

interface ServiceTimelineProps {
  steps: ServiceTimelineStep[];
  /** Marker note floated over the final step (brand pattern from the design). */
  finalNote?: string;
}

const columnClasses: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

/**
 * Horizontal timeline from the Local SEO design v1: numbered nodes on a
 * blue-to-orange connector line, final node filled orange. Used with a
 * 30/60/90 arc where the service supports one, or with the page's own
 * process steps where it does not.
 */
export default function ServiceTimeline({ steps, finalNote }: ServiceTimelineProps) {
  const cols = columnClasses[steps.length] ?? 'md:grid-cols-4';

  return (
    <div className="relative mt-16">
      <div
        className="absolute left-[12%] right-[12%] top-7 hidden h-1 rounded-full bg-gradient-to-r from-brand via-brand to-pen md:block"
        aria-hidden="true"
      />
      <div className={`grid grid-cols-1 gap-12 md:gap-8 ${cols}`}>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <div key={step.title} className="relative md:text-center">
              {isLast && finalNote && (
                <MarkerNote className="absolute -top-10 left-0 text-[24px] md:left-auto md:right-2">
                  {finalNote}
                </MarkerNote>
              )}
              <span
                className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-lg font-extrabold md:mx-auto ${
                  isLast
                    ? 'border-[3px] border-pen bg-pen text-white'
                    : 'border-[3px] border-brand bg-paper text-brand'
                }`}
              >
                {index + 1}
              </span>
              <p className="mt-5 text-sm font-bold text-pen-text">{step.when}</p>
              <h3 className="mt-1 text-xl font-extrabold tracking-tight text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy/70">{step.description}</p>
              {step.points && (
                <ul className="mt-3 space-y-1.5 text-left text-sm leading-relaxed text-navy/70 md:mx-auto md:max-w-[240px]">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
