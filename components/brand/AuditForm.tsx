'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { trackFormSubmission, type FormType } from '@/lib/analytics';
import { FORMSPREE_NOTIFICATION_EMAIL, SITE_PHONE } from '@/data/site';

interface AuditFormProps {
  /** Formspree endpoint the two-step form posts to */
  endpoint: string;
  /** Service label recorded with the lead */
  serviceLabel: string;
  /** Button text on step 1 */
  buttonLabel: string;
  /** Analytics form type */
  formType?: FormType;
  /** Button color: blue on cream sections, navy inside the blue CTA bands */
  buttonVariant?: 'blue' | 'navy';
  className?: string;
}

/**
 * The two-step audit form from the designs: one field first (website),
 * then email on step 2, instead of a six-field popup.
 * Posts to the same Formspree endpoints the site already uses.
 */
const AuditForm = ({
  endpoint,
  serviceLabel,
  buttonLabel,
  formType = 'hero_form',
  buttonVariant = 'blue',
  className = '',
}: AuditFormProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleStep1 = (event: FormEvent) => {
    event.preventDefault();
    if (website.trim().length < 4) {
      setError('Add your website so we know where to start.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleStep2 = async (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Add a valid email so we can send the audit back.');
      return;
    }
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website: website.trim(),
          email: email.trim(),
          selectedService: serviceLabel,
          _notification_email: FORMSPREE_NOTIFICATION_EMAIL,
        }),
      });
      if (!response.ok) throw new Error('Form submission failed');
      setDone(true);
      trackFormSubmission(formType, window.location.pathname, 'Website Audit', serviceLabel);
    } catch {
      setError(`Something went wrong sending that. Call us at ${SITE_PHONE} and we will start it by phone.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (done) {
    return (
      <div
        className={`flex items-center gap-3 rounded-full border border-hairline bg-white px-5 py-4 shadow-lg ${className}`}
        role="status"
      >
        <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600" />
        <p className="text-[15px] font-semibold text-navy">
          Thanks, your audit is on its way. Watch your inbox within 24 hours.
        </p>
      </div>
    );
  }

  const buttonClasses =
    buttonVariant === 'blue'
      ? 'bg-brand hover:bg-navy'
      : 'bg-navy hover:bg-brand';

  return (
    <div className={className}>
      <form
        onSubmit={step === 1 ? handleStep1 : handleStep2}
        className="flex items-center gap-2 rounded-full border border-hairline bg-white p-2 shadow-lg"
      >
        {step === 1 ? (
          <>
            <label htmlFor={`audit-website-${serviceLabel}`} className="sr-only">
              Your website
            </label>
            <input
              id={`audit-website-${serviceLabel}`}
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="yourwebsite.com"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-4 text-base text-navy outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-3 text-base font-bold text-white transition-colors sm:px-6 ${buttonClasses}`}
            >
              {buttonLabel}
            </button>
          </>
        ) : (
          <>
            <label htmlFor={`audit-email-${serviceLabel}`} className="sr-only">
              Your email
            </label>
            <input
              id={`audit-email-${serviceLabel}`}
              type="email"
              autoComplete="email"
              placeholder="you@yourbusiness.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-4 text-base text-navy outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-3 text-base font-bold text-white transition-colors disabled:opacity-60 sm:px-6 ${buttonClasses}`}
            >
              {isSubmitting ? 'Sending...' : 'Send My Audit'}
            </button>
          </>
        )}
      </form>
      {step === 2 && !error && (
        <p className="mt-2 px-4 text-sm text-muted-foreground">
          Step 2 of 2: where should we send the audit for {website.trim()}?
        </p>
      )}
      {error && (
        <p className="mt-2 px-4 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default AuditForm;
