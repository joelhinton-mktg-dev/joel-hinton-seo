'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Loader2, Phone, Video } from 'lucide-react';
import {
  FORMSPREE_LP_ENDPOINT,
  FORMSPREE_NOTIFICATION_EMAIL,
} from '@/data/site';
import { trackFormSubmission, trackMetaLead } from '@/lib/analytics';

const formSchema = z.object({
  name: z.string().min(2, 'Enter your name'),
  businessName: z.string().min(2, 'Enter your business name'),
  website: z
    .string()
    .min(1, 'Enter your website')
    .refine(
      (value) => {
        const normalized = value.startsWith('http') ? value : `https://${value}`;
        try {
          new URL(normalized);
          return true;
        } catch {
          return false;
        }
      },
      { message: 'Enter a valid website' }
    ),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  preferredReview: z.enum(['call', 'video'], {
    required_error: 'Choose call or video breakdown',
  }),
});

type FormData = z.infer<typeof formSchema>;

export function GapAnalysisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      website: '',
      email: '',
      phone: '',
      preferredReview: undefined,
    },
  });

  const preferredReview = watch('preferredReview');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const website = data.website.startsWith('http')
      ? data.website
      : `https://${data.website}`;

    try {
      const response = await fetch(FORMSPREE_LP_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          businessName: data.businessName,
          website,
          email: data.email,
          phone: data.phone || '',
          preferredReview: data.preferredReview,
          source: 'funnel-a',
          page: 'gap-analysis',
          offer: 'Competitive Gap Analysis',
          timestamp: new Date().toISOString(),
          _notification_email: FORMSPREE_NOTIFICATION_EMAIL,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      trackFormSubmission('custom_form', 'gap-analysis');
      trackMetaLead({
        contentName: 'gap-analysis',
        contentCategory: 'funnel-a',
      });
      setIsSuccess(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <Check className="h-7 w-7 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">You&apos;re on the list.</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          We received your request. Expect a reply within one business day to schedule the
          15-minute review or send the video breakdown.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ga-name">Name</Label>
          <Input id="ga-name" autoComplete="name" {...register('name')} />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ga-business">Business name</Label>
          <Input id="ga-business" autoComplete="organization" {...register('businessName')} />
          {errors.businessName && (
            <p className="text-sm text-red-600">{errors.businessName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ga-website">Website</Label>
        <Input
          id="ga-website"
          placeholder="yourbusiness.com"
          autoComplete="url"
          {...register('website')}
        />
        {errors.website && <p className="text-sm text-red-600">{errors.website.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ga-email">Email</Label>
          <Input id="ga-email" type="email" autoComplete="email" {...register('email')} />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ga-phone">Phone (optional)</Label>
          <Input id="ga-phone" type="tel" autoComplete="tel" {...register('phone')} />
        </div>
      </div>

      <div className="space-y-3">
        <Label>Call or video breakdown?</Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setValue('preferredReview', 'call', { shouldValidate: true })}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
              preferredReview === 'call'
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
            }`}
          >
            <Phone className="h-4 w-4" />
            15-minute call
          </button>
          <button
            type="button"
            onClick={() => setValue('preferredReview', 'video', { shouldValidate: true })}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
              preferredReview === 'video'
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
            }`}
          >
            <Video className="h-4 w-4" />
            Video breakdown
          </button>
        </div>
        {errors.preferredReview && (
          <p className="text-sm text-red-600">{errors.preferredReview.message}</p>
        )}
      </div>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-6 text-base font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          'Get My Free Competitive Gap Analysis'
        )}
      </Button>
    </form>
  );
}
