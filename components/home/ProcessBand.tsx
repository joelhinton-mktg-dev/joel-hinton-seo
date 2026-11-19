import Reveal from '../brand/Reveal';

const steps = [
  {
    step: 'Step 1',
    title: 'Free SEO audit',
    description:
      "Send your website. We review your site, Google Business Profile, and competitors, and show where you're losing customers.",
  },
  {
    step: 'Step 2',
    title: 'Foundation setup',
    description:
      'One-time technical fixes, profile optimization, and the pages that should be ranking for your services and towns.',
  },
  {
    step: 'Step 3',
    title: 'Monthly growth',
    description:
      'Content, links, and AI search work every month with a plain-English report. No long-term contract.',
  },
];

/** Navy process band from Homepage design v7: setup once, monthly growth after. */
const ProcessBand = () => {
  return (
    <section className="bg-navy bg-waves-light py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
            Build the foundation once. Keep it growing month to month.
          </h2>
          <p className="text-lg leading-relaxed text-white/75">
            Setup fixes what&apos;s holding the site back. Monthly work keeps it climbing.
            Cancel anytime, and you keep everything we build.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 120}>
              <div className="border-t border-white/20 pt-6">
                <p className="text-sm font-bold text-pen">{item.step}</p>
                <h3 className="mt-2.5 text-2xl font-extrabold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-white/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessBand;
