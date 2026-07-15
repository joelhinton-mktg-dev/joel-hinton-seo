import {
  Home, Building2, Stethoscope, ShoppingCart, Briefcase, Code2, Scale,
  GraduationCap, Car, Utensils, Dumbbell, Landmark, LucideIcon
} from 'lucide-react';

export interface Industry {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  color: string;
  psychologyTriggers: string[];
  challenges: string[];
  metrics: {
    traffic: string;
    leads: string;
    roi: string;
  };
  description: string;
  details: {
    psychology: string;
    [key: string]: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const industries: Industry[] = [
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate & Investment',
    shortName: 'Real Estate',
    icon: Home,
    color: 'blue',
    psychologyTriggers: ['Scarcity psychology', 'Investment FOMO', 'Dream lifestyle visualization'],
    challenges: ['Lead qualification', 'Market timing', 'Trust building', 'Price objections'],
    metrics: { traffic: '285%', leads: '340%', roi: '450%' },
    description: 'Drive qualified leads with psychological triggers that move prospects from browsing to buying.',
    details: {
      psychology: 'Real estate buyers are driven by emotion first, logic second. We tap into dream fulfillment, investment anxiety, and social status motivations.',
      seasonal: 'Spring market surge, holiday slowdowns, year-end tax considerations, and economic cycle sensitivity.',
      messaging: 'Luxury: Exclusivity and status. Starter homes: Opportunity and future growth. Investment: ROI and market timing.'
    },
    seo: {
      metaTitle: 'Local SEO for Real Estate Agents — Volusia County',
      metaDescription: 'SEO and lead generation for real estate agents and brokers in Volusia and Flagler Counties. Get found by buyers and sellers actively searching your market.',
      keywords: ['real estate marketing', 'property marketing psychology', 'real estate lead generation', 'luxury home marketing', 'investment property marketing']
    }
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Medical',
    shortName: 'Healthcare',
    icon: Stethoscope,
    color: 'green',
    psychologyTriggers: ['Trust and credibility', 'Health anxiety relief', 'Expert authority positioning'],
    challenges: ['HIPAA compliance', 'Patient acquisition', 'Online reputation', 'Appointment conversion'],
    metrics: { traffic: '220%', leads: '380%', roi: '290%' },
    description: 'Build patient trust and drive appointments with healthcare-specific psychology and compliance.',
    details: {
      psychology: 'Health decisions are high-stakes and emotional. We leverage fear relief, trust signals, and outcome certainty to drive patient action.',
      compliance: 'HIPAA-compliant marketing, patient privacy protection, medical advertising regulations, and ethical considerations.',
      journey: 'Symptom awareness → Research → Provider selection → Appointment booking → Treatment commitment.'
    },
    seo: {
      metaTitle: 'Local SEO for Medical Practices — Central Florida',
      metaDescription: 'Patient acquisition and local search for medical and dental practices. HIPAA-aware strategy built around how patients search for providers in your area.',
      keywords: ['healthcare marketing', 'medical practice marketing', 'patient acquisition', 'HIPAA compliant marketing', 'doctor marketing']
    }
  },
  {
    id: 'home-services',
    slug: 'home-services',
    name: 'Home Services',
    shortName: 'Home Services',
    icon: Building2,
    color: 'orange',
    psychologyTriggers: ['Emergency urgency', 'Local trust signals', 'Before/after transformations'],
    challenges: ['Seasonal demand', 'Local competition', 'Emergency response', 'Pricing transparency'],
    metrics: { traffic: '320%', leads: '420%', roi: '380%' },
    description: 'Dominate local search with emergency psychology and trust-building that converts browsers to customers.',
    details: {
      psychology: 'Home emergencies create urgency and anxiety. We position your business as the reliable, local solution that provides immediate relief.',
      seasonal: 'HVAC peaks in summer/winter, roofing after storms, landscaping in spring, plumbing emergencies year-round.',
      trust: 'Local presence, customer reviews, licensing credentials, insurance verification, and community involvement.'
    },
    seo: {
      metaTitle: 'Local SEO for HVAC, Plumbing & Home Services',
      metaDescription: 'More service calls from local search. We help HVAC, plumbing, roofing, and electrical contractors in Volusia County rank where homeowners are looking.',
      keywords: ['home services marketing', 'HVAC marketing', 'plumber marketing', 'contractor marketing', 'local service marketing']
    }
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-commerce & Retail',
    shortName: 'E-commerce',
    icon: ShoppingCart,
    color: 'purple',
    psychologyTriggers: ['Social proof', 'Scarcity urgency', 'Personalization psychology'],
    challenges: ['Cart abandonment', 'Product discovery', 'Customer retention', 'Competitive pricing'],
    metrics: { traffic: '265%', leads: '310%', roi: '425%' },
    description: 'Increase conversions and reduce cart abandonment with advanced e-commerce psychology.',
    details: {
      psychology: 'Online shoppers need confidence and urgency. We use social proof, scarcity, and personalization to overcome purchase hesitation.',
      optimization: 'Product page psychology, checkout flow optimization, recommendation engines, and retention campaigns.',
      conversion: 'Trust badges, reviews, guarantees, limited-time offers, and abandoned cart recovery sequences.'
    },
    seo: {
      metaTitle: 'E-commerce SEO — More Traffic That Actually Buys',
      metaDescription: 'Search optimization built around revenue, not sessions. We focus on product pages, category structure, and the keywords buyers use when they\'re ready to purchase.',
      keywords: ['ecommerce marketing', 'online store marketing', 'cart abandonment', 'conversion optimization', 'product page optimization']
    }
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    name: 'Professional Services',
    shortName: 'Professional Services',
    icon: Briefcase,
    color: 'indigo',
    psychologyTriggers: ['Authority positioning', 'Results credibility', 'Consultation psychology'],
    challenges: ['Lead quality', 'Consultation conversion', 'Premium positioning', 'Long sales cycles'],
    metrics: { traffic: '195%', leads: '360%', roi: '520%' },
    description: 'Position as the premium choice and convert prospects into high-value clients.',
    details: {
      psychology: 'B2B buyers need confidence in expertise and results. We build authority through thought leadership and social proof.',
      authority: 'Case studies, certifications, speaking engagements, industry recognition, and client testimonials.',
      consultation: 'Free consultation psychology, value demonstration, problem amplification, and solution positioning.'
    },
    seo: {
      metaTitle: 'Local SEO for Consultants & Professional Services',
      metaDescription: 'Authority-building SEO for consultants, accountants, and B2B service providers. Get found by decision-makers searching for your expertise in Volusia County.',
      keywords: ['professional services marketing', 'B2B marketing', 'consulting marketing', 'accountant marketing', 'authority marketing']
    }
  },
  {
    id: 'saas',
    slug: 'saas',
    name: 'SaaS & Technology',
    shortName: 'SaaS',
    icon: Code2,
    color: 'cyan',
    psychologyTriggers: ['Free trial psychology', 'Feature benefit clarity', 'Success story proof'],
    challenges: ['Trial conversion', 'Feature adoption', 'Customer onboarding', 'Churn reduction'],
    metrics: { traffic: '245%', leads: '290%', roi: '380%' },
    description: 'Optimize the entire customer journey from trial to paid conversion and expansion.',
    details: {
      psychology: 'SaaS buyers need proof of value and ease of use. We optimize trial experiences and demonstrate clear ROI.',
      conversion: 'Free trial optimization, onboarding sequences, feature discovery, and upgrade psychology.',
      retention: 'Success metrics, usage analytics, expansion opportunities, and customer success programs.'
    },
    seo: {
      metaTitle: 'SEO & Content Marketing for SaaS Companies',
      metaDescription: 'Organic growth strategy for software companies. We focus on trial conversion keywords, product-led content, and the search terms your buyers use before they sign up.',
      keywords: ['SaaS marketing', 'software marketing', 'trial conversion', 'customer onboarding', 'churn reduction']
    }
  },
  {
    id: 'legal-services',
    slug: 'legal-services',
    name: 'Legal Services',
    shortName: 'Legal',
    icon: Scale,
    color: 'red',
    psychologyTriggers: ['Crisis urgency', 'Authority trust', 'Outcome confidence'],
    challenges: ['Consultation hesitation', 'Fee transparency', 'Outcome expectations', 'Referral generation'],
    metrics: { traffic: '180%', leads: '420%', roi: '350%' },
    description: 'Convert prospects in crisis moments with authority positioning and trust-building.',
    details: {
      psychology: 'Legal clients are often in crisis or facing complex decisions. We provide confidence, clarity, and urgency relief.',
      authority: 'Case results, bar credentials, media appearances, legal honors, and peer recognition.',
      consultation: 'Free consultation offers, case evaluation, fee transparency, and outcome expectations.'
    },
    seo: {
      metaTitle: 'Local SEO for Law Firms — Central Florida',
      metaDescription: 'Client acquisition and local search for attorneys and law firms in Central Florida. Rank for the practice area searches that bring in qualified case leads.',
      keywords: ['legal marketing', 'law firm marketing', 'attorney marketing', 'lawyer SEO', 'legal lead generation']
    }
  },
  {
    id: 'education-training',
    slug: 'education-training',
    name: 'Education & Training',
    shortName: 'Education',
    icon: GraduationCap,
    color: 'yellow',
    psychologyTriggers: ['Career advancement', 'Skill gap anxiety', 'Success transformation'],
    challenges: ['Course completion', 'Value demonstration', 'Certification credibility', 'Student acquisition'],
    metrics: { traffic: '230%', leads: '280%', roi: '310%' },
    description: 'Drive enrollment and completion with educational psychology and success positioning.',
    details: {
      psychology: 'Adult learners are motivated by career advancement and skill development. We tap into ambition and transformation desires.',
      value: 'Career outcomes, salary increases, job placement rates, and skill certifications.',
      retention: 'Engagement psychology, progress tracking, community building, and completion rewards.'
    },
    seo: {
      metaTitle: 'SEO for Schools, Courses & Training Programs',
      metaDescription: 'Student and enrollment-focused SEO for education and training providers. Get found by people actively searching for the skills and credentials you teach.',
      keywords: ['education marketing', 'course marketing', 'training marketing', 'student acquisition', 'enrollment marketing']
    }
  },
  {
    id: 'automotive-services',
    slug: 'automotive-services',
    name: 'Automotive Services',
    shortName: 'Automotive',
    icon: Car,
    color: 'gray',
    psychologyTriggers: ['Safety concerns', 'Cost anxiety', 'Convenience factors'],
    challenges: ['Service intervals', 'Cost transparency', 'Trust building', 'Emergency response'],
    metrics: { traffic: '210%', leads: '320%', roi: '280%' },
    description: 'Build trust and drive service appointments with automotive-specific psychology.',
    details: {
      psychology: 'Vehicle owners balance safety concerns with cost anxiety. We emphasize reliability, transparency, and convenience.',
      trust: 'Certifications, warranties, transparent pricing, and customer service excellence.',
      convenience: 'Online scheduling, service reminders, pickup/delivery, and mobile services.'
    },
    seo: {
      metaTitle: 'Local SEO for Auto Shops & Automotive Services',
      metaDescription: 'More service appointments from local search. We help auto shops, dealerships, and service centers in Volusia County rank where drivers are looking.',
      keywords: ['automotive marketing', 'auto shop marketing', 'car dealer marketing', 'auto service marketing', 'mechanic marketing']
    }
  },
  {
    id: 'restaurants-hospitality',
    slug: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    shortName: 'Restaurants',
    icon: Utensils,
    color: 'amber',
    psychologyTriggers: ['Visual appeal', 'Social proof & reviews', 'Experience anticipation'],
    challenges: ['Local competition', 'Seasonal fluctuations', 'Online visibility', 'Customer loyalty'],
    metrics: { traffic: '280%', leads: '350%', roi: '320%' },
    description: 'Drive reservations and loyalty with hospitality psychology and experience marketing.',
    details: {
      psychology: 'Dining decisions are emotional and social. We create desire through visual appeal, social proof, and experience anticipation.',
      experience: 'Atmosphere showcase, menu psychology, special events, and customer journey optimization.',
      loyalty: 'Reward programs, personalization, special occasions, and community building.'
    },
    seo: {
      metaTitle: 'Local SEO for Restaurants — Volusia County',
      metaDescription: 'More covers, more reservations, more repeat customers. Local search and Google Maps optimization for restaurants and hospitality businesses in Central Florida.',
      keywords: ['restaurant marketing', 'hospitality marketing', 'dining marketing', 'restaurant SEO', 'reservation marketing']
    }
  },
  {
    id: 'fitness-wellness',
    slug: 'fitness-wellness',
    name: 'Fitness & Wellness',
    shortName: 'Fitness',
    icon: Dumbbell,
    color: 'emerald',
    psychologyTriggers: ['Transformation motivation', 'Health urgency', 'Community belonging'],
    challenges: ['Membership conversion', 'Retention rates', 'Seasonal fluctuations', 'Competition'],
    metrics: { traffic: '270%', leads: '390%', roi: '320%' },
    description: 'Motivate action and build long-term commitment with fitness psychology and transformation focus.',
    details: {
      psychology: 'Fitness buyers are motivated by transformation and health concerns. We tap into aspiration and urgency.',
      motivation: 'Before/after stories, community support, goal achievement, and progress tracking.',
      retention: 'Habit formation, social connections, progress celebration, and personalized programs.'
    },
    seo: {
      metaTitle: 'Local SEO for Gyms & Fitness Studios',
      metaDescription: 'Membership growth through local search. We help gyms, yoga studios, and wellness centers in Volusia County get found by people ready to sign up.',
      keywords: ['fitness marketing', 'gym marketing', 'wellness marketing', 'personal trainer marketing', 'health club marketing']
    }
  },
  {
    id: 'financial-services',
    slug: 'financial-services',
    name: 'Financial Services',
    shortName: 'Financial',
    icon: Landmark,
    color: 'slate',
    psychologyTriggers: ['Security assurance', 'Growth opportunity', 'Expert guidance'],
    challenges: ['Trust building', 'Complex products', 'Regulatory compliance', 'Long sales cycles'],
    metrics: { traffic: '160%', leads: '280%', roi: '440%' },
    description: 'Build trust and drive high-value conversions with financial psychology and compliance.',
    details: {
      psychology: 'Financial decisions involve security and growth balance. We provide confidence, clarity, and opportunity focus.',
      trust: 'Credentials, testimonials, security measures, regulatory compliance, and transparent processes.',
      complexity: 'Educational content, simplified explanations, comparison tools, and consultation processes.'
    },
    seo: {
      metaTitle: 'Local SEO for Financial Advisors — Florida',
      metaDescription: 'Trust-building SEO for financial advisors, planners, and investment firms. Get found by clients searching for the financial guidance you provide.',
      keywords: ['financial services marketing', 'financial advisor marketing', 'investment marketing', 'wealth management marketing', 'insurance marketing']
    }
  }
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((industry) => industry.slug === slug);
};

export const getColorClasses = (color: string): string => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
    cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200',
    red: 'bg-red-100 text-red-600 border-red-200',
    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    gray: 'bg-gray-100 text-gray-600 border-gray-200',
    amber: 'bg-amber-100 text-amber-600 border-amber-200',
    emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
    slate: 'bg-slate-100 text-slate-600 border-slate-200'
  };
  return colors[color] || colors.blue;
};

export const getGradientClasses = (color: string): string => {
  const gradients: Record<string, string> = {
    blue: 'from-blue-600 to-indigo-600',
    green: 'from-green-600 to-emerald-600',
    orange: 'from-orange-600 to-amber-600',
    purple: 'from-purple-600 to-fuchsia-600',
    indigo: 'from-indigo-600 to-violet-600',
    cyan: 'from-cyan-600 to-teal-600',
    red: 'from-red-600 to-rose-600',
    yellow: 'from-yellow-600 to-orange-600',
    gray: 'from-gray-600 to-slate-600',
    amber: 'from-amber-600 to-orange-600',
    emerald: 'from-emerald-600 to-teal-600',
    slate: 'from-slate-600 to-gray-600'
  };
  return gradients[color] || gradients.blue;
};
