import { z } from 'zod';

// Base contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  marketingChallenge: z.string().min(10, "Please tell us about your marketing challenge (at least 10 characters)"),
  selectedService: z.string().default("")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Business type option interface
export interface BusinessTypeOption {
  value: string;
  label: string;
}

// Predefined business type sets for different industries
export const businessTypes = {
  general: [
    { value: "restaurant-food-service", label: "Restaurant/Food Service" },
    { value: "professional-services", label: "Professional Services" },
    { value: "healthcare-medical", label: "Healthcare/Medical" },
    { value: "real-estate", label: "Real Estate" },
    { value: "home-services", label: "Home Services" },
    { value: "retail-ecommerce", label: "Retail/E-commerce" },
    { value: "technology-saas", label: "Technology/SaaS" },
    { value: "legal-services", label: "Legal Services" },
    { value: "financial-services", label: "Financial Services" },
    { value: "other", label: "Other Business" }
  ],
  
  healthcare: [
    { value: "medical-practice", label: "Medical Practice" },
    { value: "dental-practice", label: "Dental Practice" },
    { value: "specialty-clinic", label: "Specialty Clinic" },
    { value: "urgent-care", label: "Urgent Care" },
    { value: "hospital-system", label: "Hospital System" },
    { value: "physical-therapy", label: "Physical Therapy" },
    { value: "mental-health", label: "Mental Health Practice" },
    { value: "veterinary", label: "Veterinary Practice" },
    { value: "other", label: "Other Healthcare Business" }
  ],
  
  realEstate: [
    { value: "residential-agent", label: "Residential Agent" },
    { value: "luxury-agent", label: "Luxury Real Estate Agent" },
    { value: "commercial-broker", label: "Commercial Broker" },
    { value: "property-developer", label: "Property Developer" },
    { value: "investment-firm", label: "Real Estate Investment Firm" },
    { value: "property-management", label: "Property Management" },
    { value: "real-estate-team", label: "Real Estate Team" },
    { value: "brokerage", label: "Real Estate Brokerage" },
    { value: "other", label: "Other Real Estate Business" }
  ],
  
  financial: [
    { value: "financial-advisor", label: "Financial Advisor" },
    { value: "wealth-manager", label: "Wealth Manager" },
    { value: "insurance-agent", label: "Insurance Agent" },
    { value: "accounting-firm", label: "Accounting Firm" },
    { value: "tax-preparer", label: "Tax Preparer" },
    { value: "mortgage-broker", label: "Mortgage Broker" },
    { value: "financial-planner", label: "Financial Planner" },
    { value: "investment-firm", label: "Investment Firm" },
    { value: "other", label: "Other Financial Service" }
  ],
  
  fitness: [
    { value: "gym", label: "Traditional Gym" },
    { value: "boutique-fitness", label: "Boutique Fitness Studio" },
    { value: "yoga-studio", label: "Yoga Studio" },
    { value: "crossfit", label: "CrossFit Box" },
    { value: "martial-arts", label: "Martial Arts School" },
    { value: "personal-training", label: "Personal Training Studio" },
    { value: "wellness-center", label: "Wellness Center" },
    { value: "fitness-franchise", label: "Fitness Franchise" },
    { value: "other", label: "Other Fitness Business" }
  ],
  
  automotive: [
    { value: "auto-repair", label: "Auto Repair Shop" },
    { value: "car-dealership", label: "Car Dealership" },
    { value: "auto-parts", label: "Auto Parts Store" },
    { value: "car-wash", label: "Car Wash" },
    { value: "tire-shop", label: "Tire Shop" },
    { value: "body-shop", label: "Auto Body Shop" },
    { value: "motorcycle-dealer", label: "Motorcycle Dealer" },
    { value: "rv-dealer", label: "RV Dealer" },
    { value: "other", label: "Other Automotive Business" }
  ],
  
  education: [
    { value: "k12-school", label: "K-12 School" },
    { value: "university-college", label: "University/College" },
    { value: "training-center", label: "Training Center" },
    { value: "tutoring-service", label: "Tutoring Service" },
    { value: "online-education", label: "Online Education Platform" },
    { value: "vocational-school", label: "Vocational School" },
    { value: "language-school", label: "Language School" },
    { value: "test-prep", label: "Test Preparation" },
    { value: "other", label: "Other Education Business" }
  ],
  
  homeServices: [
    { value: "hvac", label: "HVAC Services" },
    { value: "plumbing", label: "Plumbing Services" },
    { value: "electrical", label: "Electrical Services" },
    { value: "roofing", label: "Roofing Services" },
    { value: "landscaping", label: "Landscaping" },
    { value: "cleaning", label: "Cleaning Services" },
    { value: "pest-control", label: "Pest Control" },
    { value: "security", label: "Security Systems" },
    { value: "other", label: "Other Home Service" }
  ],
  
  ecommerce: [
    { value: "fashion-apparel", label: "Fashion & Apparel" },
    { value: "electronics", label: "Electronics" },
    { value: "beauty-cosmetics", label: "Beauty & Cosmetics" },
    { value: "home-garden", label: "Home & Garden" },
    { value: "sports-outdoors", label: "Sports & Outdoors" },
    { value: "jewelry", label: "Jewelry & Accessories" },
    { value: "food-beverage", label: "Food & Beverage" },
    { value: "books-media", label: "Books & Media" },
    { value: "other", label: "Other E-commerce" }
  ],
  
  professional: [
    { value: "management-consulting", label: "Management Consulting" },
    { value: "it-consulting", label: "IT Consulting" },
    { value: "financial-advisory", label: "Financial Advisory" },
    { value: "hr-consulting", label: "HR Consulting" },
    { value: "marketing-agency", label: "Marketing Agency" },
    { value: "design-agency", label: "Design Agency" },
    { value: "engineering", label: "Engineering Services" },
    { value: "architecture", label: "Architecture" },
    { value: "other", label: "Other Professional Service" }
  ],
  
  saas: [
    { value: "b2b-saas", label: "B2B SaaS" },
    { value: "b2c-saas", label: "B2C SaaS" },
    { value: "fintech", label: "FinTech" },
    { value: "healthtech", label: "HealthTech" },
    { value: "edtech", label: "EdTech" },
    { value: "martech", label: "MarTech" },
    { value: "hrtech", label: "HRTech" },
    { value: "proptech", label: "PropTech" },
    { value: "other", label: "Other SaaS" }
  ],
  
  legal: [
    { value: "personal-injury", label: "Personal Injury" },
    { value: "criminal-defense", label: "Criminal Defense" },
    { value: "family-law", label: "Family Law" },
    { value: "corporate-law", label: "Corporate Law" },
    { value: "real-estate-law", label: "Real Estate Law" },
    { value: "immigration-law", label: "Immigration Law" },
    { value: "employment-law", label: "Employment Law" },
    { value: "estate-planning", label: "Estate Planning" },
    { value: "other", label: "Other Legal Practice" }
  ],
  
  restaurant: [
    { value: "fine-dining", label: "Fine Dining Restaurant" },
    { value: "casual-dining", label: "Casual Dining Restaurant" },
    { value: "fast-casual", label: "Fast Casual Restaurant" },
    { value: "quick-service", label: "Quick Service Restaurant" },
    { value: "bar-nightlife", label: "Bar & Nightlife" },
    { value: "catering", label: "Catering Service" },
    { value: "food-truck", label: "Food Truck" },
    { value: "hotel-hospitality", label: "Hotel & Hospitality" },
    { value: "other", label: "Other Restaurant/Hospitality" }
  ]
};