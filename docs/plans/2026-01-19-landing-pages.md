# Landing Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build 4 high-converting landing pages for paid ads with stripped navigation, multi-step forms, and dynamic location support.

**Architecture:** Create isolated `/app/lp/` directory with its own minimal layout (no navigation menu). Build shared landing page components with Framer Motion animations. Each landing page reads URL searchParams for dynamic location personalization.

**Tech Stack:** Next.js 14 App Router, Framer Motion, Tailwind CSS, shadcn/ui, react-hook-form + zod, Formspree, Lucide React icons.

---

## Phase 1: Infrastructure

### Task 1: Install Framer Motion

**Files:**
- Modify: `package.json`

**Step 1: Install the dependency**

Run: `npm install framer-motion`
Expected: Package added to dependencies

**Step 2: Verify installation**

Run: `npm list framer-motion`
Expected: Output shows framer-motion version (11.x or similar)

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add framer-motion for landing page animations"
```

---

### Task 2: Create Landing Page Layout

**Files:**
- Create: `app/lp/layout.tsx`

**Step 1: Create the lp directory**

Run: `mkdir -p app/lp`
Expected: Directory created

**Step 2: Create the stripped landing page layout**

Create `app/lp/layout.tsx`:

```tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal Header - Logo only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AIO</span>
            </div>
            <span className="font-semibold text-slate-900">Growth SEO</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to main site
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-emerald-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">AIO</span>
              </div>
              <span className="text-sm text-slate-400">
                &copy; {new Date().getFullYear()} AIO Growth SEO
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Main Site
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

**Step 3: Verify no syntax errors**

Run: `npx tsc --noEmit app/lp/layout.tsx 2>&1 || echo "Check complete"`
Expected: No type errors (or minimal warnings)

**Step 4: Commit**

```bash
git add app/lp/layout.tsx
git commit -m "feat(lp): add stripped landing page layout without navigation"
```

---

### Task 3: Create Landing Page Components Directory

**Files:**
- Create: `app/lp/components/` directory

**Step 1: Create the components directory**

Run: `mkdir -p app/lp/components`
Expected: Directory created

**Step 2: No commit needed** (empty directory won't be tracked)

---

### Task 4: Create HeroSection Component

**Files:**
- Create: `app/lp/components/HeroSection.tsx`

**Step 1: Create the HeroSection component**

Create `app/lp/components/HeroSection.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, TrendingUp, Users, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  onCtaClick: () => void;
  badgeText?: string;
  city?: string;
}

export function HeroSection({
  headline,
  subheadline,
  ctaText,
  onCtaClick,
  badgeText,
  city,
}: HeroSectionProps) {
  // Replace {city} placeholder in headline
  const processedHeadline = city
    ? headline.replace('{city}', city)
    : headline.replace(' in {city}', '').replace('{city}', 'Your Area');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge */}
          {(badgeText || city) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                {badgeText || `Serving ${city} & Surrounding Areas`}
              </Badge>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              {processedHeadline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {ctaText}
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">500+ Businesses Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm">4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">312% Avg. Traffic Increase</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}
```

**Step 2: Verify no syntax errors**

Run: `npx tsc --noEmit app/lp/components/HeroSection.tsx 2>&1 || echo "Check complete"`
Expected: No type errors

**Step 3: Commit**

```bash
git add app/lp/components/HeroSection.tsx
git commit -m "feat(lp): add animated HeroSection component with location support"
```

---

### Task 5: Create MultiStepForm Component

**Files:**
- Create: `app/lp/components/MultiStepForm.tsx`

**Step 1: Create the MultiStepForm component**

Create `app/lp/components/MultiStepForm.tsx`:

```tsx
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
```

**Step 2: Verify no syntax errors**

Run: `npx tsc --noEmit app/lp/components/MultiStepForm.tsx 2>&1 || echo "Check complete"`
Expected: No type errors

**Step 3: Commit**

```bash
git add app/lp/components/MultiStepForm.tsx
git commit -m "feat(lp): add MultiStepForm with 3-step animated flow"
```

---

### Task 6: Create SocialProof Component

**Files:**
- Create: `app/lp/components/SocialProof.tsx`

**Step 1: Create the SocialProof component**

Create `app/lp/components/SocialProof.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  result?: string;
}

interface SocialProofProps {
  testimonials?: Testimonial[];
  headline?: string;
  subheadline?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Mike Rodriguez',
    role: 'Owner',
    company: 'Rodriguez Plumbing',
    content: 'Within 3 months, we went from page 3 to the top 3 results for "plumber near me". Phone calls increased by 200%.',
    rating: 5,
    result: '+200% Calls',
  },
  {
    name: 'Sarah Chen',
    role: 'Managing Partner',
    company: 'Chen & Associates Law',
    content: 'Their AI-focused SEO strategy put us ahead of firms that have been around for decades. Best investment we made.',
    rating: 5,
    result: '#1 in Local Pack',
  },
  {
    name: 'David Thompson',
    role: 'Owner',
    company: 'Thompson HVAC Services',
    content: 'They understand the trades. No fluff, just results. Our leads have tripled and we had to hire two new techs.',
    rating: 5,
    result: '3x More Leads',
  },
];

export function SocialProof({
  testimonials = defaultTestimonials,
  headline = 'Trusted by Local Businesses',
  subheadline = 'See what our clients have to say about their results',
}: SocialProofProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subheadline}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                {testimonial.result && (
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    {testimonial.result}
                  </span>
                )}
              </div>

              <Quote className="w-8 h-8 text-slate-200 mb-3" />

              <p className="text-slate-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/lp/components/SocialProof.tsx
git commit -m "feat(lp): add SocialProof testimonials component"
```

---

### Task 7: Create PainPoints Component

**Files:**
- Create: `app/lp/components/PainPoints.tsx`

**Step 1: Create the PainPoints component**

Create `app/lp/components/PainPoints.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Eye, Search, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PainPointsProps {
  headline?: string;
  subheadline?: string;
  painPoints?: PainPoint[];
}

const defaultPainPoints: PainPoint[] = [
  {
    icon: Eye,
    title: 'Invisible to Your Customers',
    description:
      "If you're not on page 1, you might as well not exist. 75% of users never scroll past the first page of Google.",
  },
  {
    icon: TrendingDown,
    title: 'Losing Business to Competitors',
    description:
      "Every day you're not ranking, your competitors are capturing the leads that should be yours.",
  },
  {
    icon: Search,
    title: 'Missing Local Searches',
    description:
      '"Near me" searches have grown 900% in 2 years. Without local SEO optimization, you\'re missing out.',
  },
  {
    icon: Bot,
    title: 'AI is Changing Search',
    description:
      "Google's AI Overviews and ChatGPT are reshaping how people find businesses. Is your site optimized for AI?",
  },
];

export function PainPoints({
  headline = "Is Your Business Suffering From These Problems?",
  subheadline = "If any of these sound familiar, you're not alone—and we can help.",
  painPoints = defaultPainPoints,
}: PainPointsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">Common Problems</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subheadline}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/lp/components/PainPoints.tsx
git commit -m "feat(lp): add PainPoints problem agitation component"
```

---

### Task 8: Create BenefitsGrid Component

**Files:**
- Create: `app/lp/components/BenefitsGrid.tsx`

**Step 1: Create the BenefitsGrid component**

Create `app/lp/components/BenefitsGrid.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  headline?: string;
  subheadline?: string;
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
}

export function BenefitsGrid({
  headline = 'What You Get',
  subheadline = 'Everything you need to dominate local search',
  benefits,
  columns = 3,
}: BenefitsGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subheadline}</p>
        </motion.div>

        <div className={`grid ${gridCols[columns]} gap-6 max-w-6xl mx-auto`}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Pre-built benefit list for SEO audit landing page
export const seoAuditBenefits: Benefit[] = [
  {
    icon: Check,
    title: 'Technical SEO Analysis',
    description:
      'Full site crawl to identify speed issues, broken links, and crawlability problems.',
  },
  {
    icon: Check,
    title: 'Keyword Gap Analysis',
    description:
      'Discover which keywords your competitors rank for that you\'re missing.',
  },
  {
    icon: Check,
    title: 'Local SEO Review',
    description:
      'Google Business Profile audit, citation analysis, and local ranking factors.',
  },
  {
    icon: Check,
    title: 'Content Assessment',
    description:
      'Page-by-page content review with recommendations for improvement.',
  },
  {
    icon: Check,
    title: 'Competitor Comparison',
    description:
      'See how you stack up against your top 3 local competitors.',
  },
  {
    icon: Check,
    title: 'Action Plan',
    description:
      'Prioritized list of fixes and opportunities to improve your rankings.',
  },
];
```

**Step 2: Commit**

```bash
git add app/lp/components/BenefitsGrid.tsx
git commit -m "feat(lp): add BenefitsGrid value proposition component"
```

---

### Task 9: Create FAQAccordion Component

**Files:**
- Create: `app/lp/components/FAQAccordion.tsx`

**Step 1: Create the FAQAccordion component**

Create `app/lp/components/FAQAccordion.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline?: string;
  subheadline?: string;
  faqs?: FAQ[];
}

export const seoAuditFAQs: FAQ[] = [
  {
    question: 'How long does the free SEO audit take?',
    answer:
      "We'll deliver your comprehensive audit within 24-48 hours of your submission. It typically takes us 2-3 hours to complete a thorough analysis of your website and competitors.",
  },
  {
    question: "Is this really free? What's the catch?",
    answer:
      "Yes, it's completely free with no strings attached. We offer the audit as a way to demonstrate our expertise and build trust. If you like what you see, we can discuss working together. If not, you still walk away with valuable insights.",
  },
  {
    question: "What if I don't have a website yet?",
    answer:
      "That's okay! We can still assess your online presence, including social profiles, directory listings, and your competitors. We'll also provide recommendations for what your new website should include.",
  },
  {
    question: 'Will you share my information with anyone?',
    answer:
      'Absolutely not. Your information is kept strictly confidential and will only be used to prepare your audit and follow up with you. We never sell or share your data.',
  },
  {
    question: 'What makes your audit different from automated tools?',
    answer:
      "Our audit is performed by real SEO experts, not just software. We analyze your specific business context, local market, and competitors to provide actionable recommendations—not just a list of technical issues.",
  },
  {
    question: 'Do I have to sign up for your services after the audit?',
    answer:
      "Not at all. The audit is yours to keep and use however you'd like. Many business owners use our recommendations to guide their own efforts or share with their existing team. There's zero pressure to become a client.",
  },
];

export function FAQAccordion({
  headline = 'Frequently Asked Questions',
  subheadline = 'Everything you need to know about our free SEO audit',
  faqs = seoAuditFAQs,
}: FAQAccordionProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subheadline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/lp/components/FAQAccordion.tsx
git commit -m "feat(lp): add FAQAccordion for objection handling"
```

---

### Task 10: Create StickyFooterCTA Component

**Files:**
- Create: `app/lp/components/StickyFooterCTA.tsx`

**Step 1: Create the StickyFooterCTA component**

Create `app/lp/components/StickyFooterCTA.tsx`:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

interface StickyFooterCTAProps {
  text?: string;
  buttonText?: string;
  onCtaClick: () => void;
  scrollThreshold?: number;
}

export function StickyFooterCTA({
  text = 'Ready to grow your business?',
  buttonText = 'Get Your Free Audit',
  onCtaClick,
  scrollThreshold = 500,
}: StickyFooterCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > scrollThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-slate-900 px-4 py-3 shadow-lg">
            <div className="flex items-center justify-between gap-3">
              <p className="text-white text-sm font-medium flex-1">{text}</p>
              <Button
                onClick={onCtaClick}
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-white whitespace-nowrap"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <button
                onClick={handleDismiss}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

**Step 2: Commit**

```bash
git add app/lp/components/StickyFooterCTA.tsx
git commit -m "feat(lp): add StickyFooterCTA mobile component"
```

---

### Task 11: Create Component Index Export

**Files:**
- Create: `app/lp/components/index.ts`

**Step 1: Create the index file**

Create `app/lp/components/index.ts`:

```ts
export { HeroSection } from './HeroSection';
export { MultiStepForm } from './MultiStepForm';
export { SocialProof } from './SocialProof';
export { PainPoints } from './PainPoints';
export { BenefitsGrid, seoAuditBenefits } from './BenefitsGrid';
export { FAQAccordion, seoAuditFAQs } from './FAQAccordion';
export { StickyFooterCTA } from './StickyFooterCTA';
```

**Step 2: Commit**

```bash
git add app/lp/components/index.ts
git commit -m "feat(lp): add component index exports"
```

---

## Phase 2: Build Free SEO Audit Landing Page

### Task 12: Create Free SEO Audit Landing Page

**Files:**
- Create: `app/lp/free-seo-audit/page.tsx`

**Step 1: Create the directory**

Run: `mkdir -p app/lp/free-seo-audit`
Expected: Directory created

**Step 2: Create the landing page**

Create `app/lp/free-seo-audit/page.tsx`:

```tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  HeroSection,
  MultiStepForm,
  SocialProof,
  PainPoints,
  BenefitsGrid,
  seoAuditBenefits,
  FAQAccordion,
  seoAuditFAQs,
  StickyFooterCTA,
} from '../components';

export default function FreeSEOAuditPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Is Your Website Invisible to Google?"
        subheadline="Get a free, comprehensive SEO audit that reveals exactly why your competitors are outranking you—and what to do about it."
        ctaText="Get My Free Audit"
        onCtaClick={scrollToForm}
        badgeText="Free Limited-Time Offer"
      />

      {/* Pain Points */}
      <PainPoints />

      {/* What You Get */}
      <BenefitsGrid
        headline="What's Included in Your Free Audit"
        subheadline="A complete analysis of your online presence—no strings attached"
        benefits={seoAuditBenefits}
        columns={3}
      />

      {/* Social Proof */}
      <SocialProof />

      {/* Form Section */}
      <section
        ref={formRef}
        id="audit-form"
        className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Claim Your Free SEO Audit
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Takes less than 2 minutes. We&apos;ll email your personalized audit
              within 24 hours.
            </p>
          </motion.div>

          <MultiStepForm
            page="free-seo-audit"
            source="landing-page"
            formspreeEndpoint="https://formspree.io/f/xrbarnbp"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion faqs={seoAuditFAQs} />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Stop Losing Business to Your Competitors
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Every day without proper SEO is money left on the table. Get your
              free audit and start climbing the rankings today.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-emerald-500/25"
            >
              Get My Free Audit Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <StickyFooterCTA
        text="Get your free SEO audit"
        buttonText="Claim Audit"
        onCtaClick={scrollToForm}
      />
    </>
  );
}
```

**Step 3: Verify no syntax errors**

Run: `npx tsc --noEmit app/lp/free-seo-audit/page.tsx 2>&1 || echo "Check complete"`
Expected: No type errors

**Step 4: Commit**

```bash
git add app/lp/free-seo-audit/page.tsx
git commit -m "feat(lp): add free SEO audit landing page"
```

---

### Task 13: Add Metadata for SEO Audit Page

**Files:**
- Create: `app/lp/free-seo-audit/layout.tsx`

**Step 1: Create layout with metadata**

Create `app/lp/free-seo-audit/layout.tsx`:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free SEO Audit | AIO Growth SEO',
  description:
    'Get a free, comprehensive SEO audit that reveals why your competitors are outranking you. No strings attached—actionable insights delivered in 24 hours.',
  keywords: [
    'free SEO audit',
    'SEO analysis',
    'website audit',
    'local SEO audit',
    'competitor analysis',
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Free SEO Audit | AIO Growth SEO',
    description:
      'Discover why your competitors are outranking you with our free, comprehensive SEO audit.',
    type: 'website',
  },
};

export default function FreeSEOAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

**Step 2: Commit**

```bash
git add app/lp/free-seo-audit/layout.tsx
git commit -m "feat(lp): add metadata for free SEO audit landing page"
```

---

### Task 14: Test the Landing Page

**Step 1: Start the development server**

Run: `npm run dev`
Expected: Server starts on localhost:3000

**Step 2: Test the landing page manually**

Open: `http://localhost:3000/lp/free-seo-audit`
Verify:
- Minimal header (logo only, no navigation)
- Hero section with animated gradient orbs
- Pain points section displays
- Benefits grid displays
- Testimonials section displays
- Multi-step form works (step transitions)
- FAQ accordion expands/collapses
- Sticky footer appears on mobile after scrolling
- Form submits successfully (check Formspree)

**Step 3: Fix any issues found**

If issues found, debug and fix in respective component files.

---

### Task 15: Final Commit for Phase 2

**Step 1: Ensure all changes committed**

Run: `git status`
Expected: Working tree clean

**Step 2: Create phase completion commit if needed**

If any uncommitted changes:
```bash
git add .
git commit -m "feat(lp): complete Phase 2 - free SEO audit landing page"
```

---

## Phase 3: Additional Landing Pages (Future Tasks)

### Task 16: Create Local SEO Landing Page

**Files:**
- Create: `app/lp/local-seo/page.tsx`
- Create: `app/lp/local-seo/layout.tsx`

This page uses dynamic location via searchParams:
- `/lp/local-seo?city=Daytona%20Beach&county=Volusia`

(Implementation details similar to free-seo-audit page with location-aware content)

---

### Task 17: Create GEO Optimization Landing Page

**Files:**
- Create: `app/lp/geo-optimization/page.tsx`
- Create: `app/lp/geo-optimization/layout.tsx`

Focus on AI/GEO differentiation messaging.

---

### Task 18: Create Lead Generation Landing Page

**Files:**
- Create: `app/lp/lead-generation/page.tsx`
- Create: `app/lp/lead-generation/layout.tsx`

High urgency messaging for lead gen service.

---

## Summary

**Phase 1 (Infrastructure):** Tasks 1-11
- Install Framer Motion
- Create stripped landing page layout
- Build 7 reusable components

**Phase 2 (First Landing Page):** Tasks 12-15
- Build free-seo-audit landing page
- Add metadata
- Test and verify

**Phase 3 (Additional Pages):** Tasks 16-18
- local-seo, geo-optimization, lead-generation pages
