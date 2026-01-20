'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Wrench,
  Droplets,
  Scale,
  Stethoscope,
  UtensilsCrossed,
  Store,
  HardHat,
  Building2,
  ArrowRight,
  ArrowLeft,
  Check,
  Lock,
  Shield,
  Loader2,
} from 'lucide-react';

const formSchema = z.object({
  businessType: z.string().min(1, 'Please select a business type'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  website: z.string().url('Please enter a valid URL').or(z.literal('')),
  challenges: z.array(z.string()).min(1, 'Please select at least one challenge'),
});

type FormData = z.infer<typeof formSchema>;

interface MultiStepFormProps {
  formspreeEndpoint?: string;
  source?: string;
  page: string;
  city?: string;
  onSuccess?: () => void;
}

const businessTypes = [
  { id: 'hvac', label: 'HVAC', icon: Wrench },
  { id: 'plumbing', label: 'Plumbing', icon: Droplets },
  { id: 'legal', label: 'Legal', icon: Scale },
  { id: 'medical', label: 'Medical/Dental', icon: Stethoscope },
  { id: 'restaurant', label: 'Restaurant', icon: UtensilsCrossed },
  { id: 'retail', label: 'Retail', icon: Store },
  { id: 'construction', label: 'Construction', icon: HardHat },
  { id: 'other', label: 'Other', icon: Building2 },
];

const challenges = [
  { id: 'not-showing', label: 'Not showing up on Google' },
  { id: 'competitors', label: 'Competitors outranking us' },
  { id: 'not-enough-leads', label: 'Not enough leads/calls' },
  { id: 'ai-changes', label: 'Worried about AI search changes' },
  { id: 'poor-reviews', label: 'Poor online reviews' },
  { id: 'outdated-website', label: 'Outdated website' },
];

export function MultiStepForm({
  formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID',
  source = 'landing-page',
  page,
  city,
  onSuccess,
}: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: '',
      name: '',
      email: '',
      phone: '',
      website: '',
      challenges: [],
    },
  });

  const selectedBusinessType = watch('businessType');
  const selectedChallenges = watch('challenges');

  const handleBusinessTypeSelect = (type: string) => {
    setValue('businessType', type);
  };

  const handleChallengeToggle = (challengeId: string) => {
    const current = selectedChallenges || [];
    if (current.includes(challengeId)) {
      setValue('challenges', current.filter((c) => c !== challengeId));
    } else {
      setValue('challenges', [...current, challengeId]);
    }
  };

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger('businessType');
    } else if (step === 2) {
      isValid = await trigger(['name', 'email', 'phone']);
    }
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source,
          page,
          city: city || 'not-specified',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        onSuccess?.();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-xl text-center"
      >
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600">
          We&apos;ve received your request. Our team will reach out within 24 hours
          with your free SEO audit.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-colors ${
                s <= step
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              {s < step ? <Check className="w-5 h-5" /> : s}
            </div>
          ))}
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: '0%' }}
            animate={{ width: `${((step - 1) / 2) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait" custom={step}>
          {/* Step 1: Business Type */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                What type of business do you have?
              </h3>
              <p className="text-slate-600 mb-6">Select your industry</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {businessTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedBusinessType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleBusinessTypeSelect(type.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-emerald-500' : ''}`} />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  );
                })}
              </div>
              {errors.businessType && (
                <p className="text-red-500 text-sm mt-2">{errors.businessType.message}</p>
              )}

              <Button
                type="button"
                onClick={nextStep}
                className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600"
                disabled={!selectedBusinessType}
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                How can we reach you?
              </h3>
              <p className="text-slate-600 mb-6">We&apos;ll send your audit here</p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="John Smith"
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="john@company.com"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Website & Challenges */}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Tell us about your website
              </h3>
              <p className="text-slate-600 mb-6">
                This helps us prepare your personalized audit
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="website">Website URL (optional)</Label>
                  <Input
                    id="website"
                    type="url"
                    {...register('website')}
                    placeholder="https://yourwebsite.com"
                    className="mt-1"
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
                  )}
                </div>

                <div>
                  <Label className="mb-3 block">
                    What challenges are you facing? (Select all that apply)
                  </Label>
                  <div className="space-y-2">
                    {challenges.map((challenge) => (
                      <label
                        key={challenge.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedChallenges?.includes(challenge.id)
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <Checkbox
                          checked={selectedChallenges?.includes(challenge.id)}
                          onCheckedChange={() => handleChallengeToggle(challenge.id)}
                        />
                        <span className="text-sm text-slate-700">{challenge.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.challenges && (
                    <p className="text-red-500 text-sm mt-2">{errors.challenges.message}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>Get My Free Audit <ArrowRight className="w-4 h-4 ml-2" /></>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Trust signals */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-center gap-6 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <Lock className="w-4 h-4" />
          <span>Secure & Private</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-4 h-4" />
          <span>No Spam Ever</span>
        </div>
      </div>
    </div>
  );
}
