import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Lazy load all page components
const Index = lazy(() => import("./pages/Index"));
const SEOServices = lazy(() => import("./pages/SEOServices"));
const GrowthMarketing = lazy(() => import("./pages/GrowthMarketing"));
const PaidAdvertising = lazy(() => import("./pages/PaidAdvertising"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Results = lazy(() => import("./pages/Results"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const FloridaSEOServices = lazy(() => import("./pages/FloridaSEOServices"));
const OrlandoDigitalMarketing = lazy(() => import("./pages/OrlandoDigitalMarketing"));
const TampaGrowthMarketing = lazy(() => import("./pages/TampaGrowthMarketing"));
const JacksonvilleSEOConsultant = lazy(() => import("./pages/JacksonvilleSEOConsultant"));
const MiamiMarketingAgency = lazy(() => import("./pages/MiamiMarketingAgency"));
const AreasWeServe = lazy(() => import("./pages/AreasWeServe"));
const FortLauderdaleAdvertising = lazy(() => import("./pages/FortLauderdaleAdvertising"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const DaytonaBeachDigitalMarketing = lazy(() => import("./pages/DaytonaBeachDigitalMarketing"));
const Contact = lazy(() => import("./pages/Contact"));
const VibeCoding = lazy(() => import("./pages/VibeCoding"));
const Services = lazy(() => import("./pages/Services"));
const LocalSEO = lazy(() => import("./pages/LocalSEO"));
const GEOOptimization = lazy(() => import("./pages/GEOOptimization"));
const Industries = lazy(() => import("./pages/Industries"));
const RealEstateMarketing = lazy(() => import("./pages/RealEstateMarketing"));
const HealthcareMarketing = lazy(() => import("./pages/HealthcareMarketing"));
const HomeServicesMarketing = lazy(() => import("./pages/HomeServicesMarketing"));
const EcommerceMarketing = lazy(() => import("./pages/EcommerceMarketing"));
const ProfessionalServicesMarketing = lazy(() => import("./pages/ProfessionalServicesMarketing"));
const SaaSMarketing = lazy(() => import("./pages/SaaSMarketing"));
const RestaurantsHospitalityMarketing = lazy(() => import("./pages/RestaurantsHospitalityMarketing"));
const LegalServicesMarketing = lazy(() => import("./pages/LegalServicesMarketing"));
const EducationTrainingMarketing = lazy(() => import("./pages/EducationTrainingMarketing"));
const AutomotiveServicesMarketing = lazy(() => import("./pages/AutomotiveServicesMarketing"));
const FitnessWellnessMarketing = lazy(() => import("./pages/FitnessWellnessMarketing"));
const FinancialServicesMarketing = lazy(() => import("./pages/FinancialServicesMarketing"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/seo-services" element={<SEOServices />} />
              <Route path="/growth-marketing" element={<GrowthMarketing />} />
              <Route path="/paid-advertising" element={<PaidAdvertising />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/results" element={<Results />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/florida-seo-services" element={<FloridaSEOServices />} />
              <Route path="/orlando-digital-marketing" element={<OrlandoDigitalMarketing />} />
              <Route path="/tampa-growth-marketing" element={<TampaGrowthMarketing />} />
              <Route path="/jacksonville-seo-consultant" element={<JacksonvilleSEOConsultant />} />
              <Route path="/miami-marketing-agency" element={<MiamiMarketingAgency />} />
              <Route path="/areas-we-serve" element={<AreasWeServe />} />
              <Route path="/fort-lauderdale-advertising" element={<FortLauderdaleAdvertising />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/daytona-beach-digital-marketing" element={<DaytonaBeachDigitalMarketing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/vibe-coding" element={<VibeCoding />} />
              <Route path="/services" element={<Services />} />
              <Route path="/local-seo" element={<LocalSEO />} />
              <Route path="/geo-optimization" element={<GEOOptimization />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/real-estate" element={<RealEstateMarketing />} />
              <Route path="/industries/healthcare" element={<HealthcareMarketing />} />
              <Route path="/industries/home-services" element={<HomeServicesMarketing />} />
              <Route path="/industries/ecommerce" element={<EcommerceMarketing />} />
              <Route path="/industries/professional-services" element={<ProfessionalServicesMarketing />} />
              <Route path="/industries/saas" element={<SaaSMarketing />} />
              <Route path="/industries/restaurants-hospitality" element={<RestaurantsHospitalityMarketing />} />
              <Route path="/industries/legal-services" element={<LegalServicesMarketing />} />
              <Route path="/industries/education-training" element={<EducationTrainingMarketing />} />
              <Route path="/industries/automotive-services" element={<AutomotiveServicesMarketing />} />
              <Route path="/industries/fitness-wellness" element={<FitnessWellnessMarketing />} />
              <Route path="/industries/financial-services" element={<FinancialServicesMarketing />} />
              <Route path="/not-found" element={<NotFound />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
