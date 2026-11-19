'use client';

import AuditForm from '../brand/AuditForm';
import { openAssistant } from '../brand/ChatAssistant';
import { FORMSPREE_HERO_ENDPOINT } from '@/data/site';

/** Closing blue band from Homepage design v7, with the assistant next step. */
const CtaBand = () => {
  return (
    <section className="bg-brand bg-waves-light py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
              See what&apos;s keeping customers from finding you.
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-white/85">
              Send your website and get a free SEO audit within 24 hours. No long-term
              contracts, no pressure.
            </p>
          </div>
          <div>
            <AuditForm
              endpoint={FORMSPREE_HERO_ENDPOINT}
              serviceLabel="Free SEO Audit"
              buttonLabel="Get Free SEO Audit"
              formType="custom_form"
              buttonVariant="navy"
            />
            <p className="mt-4 text-white/85">
              Rather chat? The{' '}
              <button
                type="button"
                onClick={openAssistant}
                className="font-bold text-white underline underline-offset-4 hover:text-sun"
              >
                assistant
              </button>{' '}
              can start it for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
