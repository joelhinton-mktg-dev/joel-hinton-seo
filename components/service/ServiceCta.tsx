import type { ReactNode } from 'react';
import AuditForm from '../brand/AuditForm';

interface ServiceCtaProps {
  heading: string;
  copy: ReactNode;
  endpoint: string;
  serviceLabel: string;
  buttonLabel: string;
  formType?: 'services_form' | 'custom_form' | 'hero_form';
}

/** Closing blue CTA band from the Local SEO design v1, with the two-step audit form. */
export default function ServiceCta({
  heading,
  copy,
  endpoint,
  serviceLabel,
  buttonLabel,
  formType = 'custom_form',
}: ServiceCtaProps) {
  return (
    <section className="bg-brand bg-waves-light py-24">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {heading}
        </h2>
        <div className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/85">
          {copy}
        </div>
        <AuditForm
          endpoint={endpoint}
          serviceLabel={serviceLabel}
          buttonLabel={buttonLabel}
          formType={formType}
          buttonVariant="navy"
          className="mx-auto max-w-xl text-left"
        />
      </div>
    </section>
  );
}
