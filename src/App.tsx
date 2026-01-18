import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";
import CookieConsent from "@/components/CookieConsent";
import { initializeGA, trackPageView, handleConsentUpdate } from "@/lib/analytics";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { usePageTracking } from "@/hooks/usePageTracking";

// Lazy load all page components
const Index = lazy(() => import("./views/Index"));
const SEOServices = lazy(() => import("./views/SEOServices"));
const LocalLeadGeneration = lazy(() => import("./views/LocalLeadGeneration"));
const Pricing = lazy(() => import("./views/Pricing"));
const Results = lazy(() => import("./views/Results"));
const About = lazy(() => import("./views/About"));
const Blog = lazy(() => import("./views/Blog"));
const BlogPostPage = lazy(() => import("./views/BlogPostPage"));
const FloridaSEOServices = lazy(() => import("./views/FloridaSEOServices"));
const AreasWeServe = lazy(() => import("./views/AreasWeServe"));
const DebaryDigitalMarketing = lazy(() => import("./views/DebaryDigitalMarketing"));
const SanfordSEOServices = lazy(() => import("./views/SanfordSEOServices"));
const NewSmyrnaBeachMarketing = lazy(() => import("./views/NewSmyrnaBeachMarketing"));
const HollyHillDigitalMarketing = lazy(() => import("./views/HollyHillDigitalMarketing"));
const OrmondBeachSEO = lazy(() => import("./views/OrmondBeachSEO"));
const PalmCoastMarketing = lazy(() => import("./views/PalmCoastMarketing"));
const PortOrangeMarketing = lazy(() => import("./views/PortOrangeMarketing"));
const PrivacyPolicy = lazy(() => import("./views/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./views/TermsOfService"));
const DaytonaBeachDigitalMarketing = lazy(() => import("./views/DaytonaBeachDigitalMarketing"));
const Contact = lazy(() => import("./views/Contact"));
const CustomToolsAutomation = lazy(() => import("./views/CustomToolsAutomation"));
const Services = lazy(() => import("./views/Services"));
const LocalSEO = lazy(() => import("./views/LocalSEO"));
const GEOOptimization = lazy(() => import("./views/GEOOptimization"));
const Industries = lazy(() => import("./views/Industries"));
const RealEstateMarketing = lazy(() => import("./views/RealEstateMarketing"));
const HealthcareMarketing = lazy(() => import("./views/HealthcareMarketing"));
const HomeServicesMarketing = lazy(() => import("./views/HomeServicesMarketing"));
const EcommerceMarketing = lazy(() => import("./views/EcommerceMarketing"));
const ProfessionalServicesMarketing = lazy(() => import("./views/ProfessionalServicesMarketing"));
const SaaSMarketing = lazy(() => import("./views/SaaSMarketing"));
const RestaurantsHospitalityMarketing = lazy(() => import("./views/RestaurantsHospitalityMarketing"));
const LegalServicesMarketing = lazy(() => import("./views/LegalServicesMarketing"));
const EducationTrainingMarketing = lazy(() => import("./views/EducationTrainingMarketing"));
const AutomotiveServicesMarketing = lazy(() => import("./views/AutomotiveServicesMarketing"));
const FitnessWellnessMarketing = lazy(() => import("./views/FitnessWellnessMarketing"));
const FinancialServicesMarketing = lazy(() => import("./views/FinancialServicesMarketing"));
const EcommerceSEO = lazy(() => import("./views/EcommerceSEO"));
const Guides = lazy(() => import("./views/Guides"));
const GuidePage = lazy(() => import("./views/GuidePage"));
const NotFound = lazy(() => import("./views/NotFound"));

const queryClient = new QueryClient();

// Analytics wrapper component
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { canUseAnalytics } = useCookieConsent();
  
  // Track page views automatically
  usePageTracking();

  useEffect(() => {
    // Initialize analytics when consent changes
    if (canUseAnalytics) {
      initializeGA();
      trackPageView(window.location.pathname, document.title);
    }
  }, [canUseAnalytics]);

  // Listen for cookie consent updates
  useEffect(() => {
    const handleConsentChange = (event: CustomEvent) => {
      const { preferences } = event.detail;
      handleConsentUpdate(preferences.analytics);
    };

    window.addEventListener('cookieConsentUpdated', handleConsentChange as EventListener);
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentChange as EventListener);
    };
  }, []);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsWrapper>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            }>
              <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/seo-services" element={<SEOServices />} />
                            <Route path="/local-lead-generation" element={<LocalLeadGeneration />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/results" element={<Results />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/florida-seo-services" element={<FloridaSEOServices />} />
              <Route path="/areas-we-serve" element={<AreasWeServe />} />
              <Route path="/debary-digital-marketing" element={<DebaryDigitalMarketing />} />
              <Route path="/sanford-seo-services" element={<SanfordSEOServices />} />
              <Route path="/new-smyrna-beach-marketing" element={<NewSmyrnaBeachMarketing />} />
              <Route path="/holly-hill-digital-marketing" element={<HollyHillDigitalMarketing />} />
              <Route path="/ormond-beach-seo" element={<OrmondBeachSEO />} />
              <Route path="/palm-coast-marketing" element={<PalmCoastMarketing />} />
              <Route path="/port-orange-marketing" element={<PortOrangeMarketing />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/daytona-beach-digital-marketing" element={<DaytonaBeachDigitalMarketing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/custom-tools-automation" element={<CustomToolsAutomation />} />
              <Route path="/services" element={<Services />} />
              <Route path="/local-seo" element={<LocalSEO />} />
              <Route path="/geo-optimization" element={<GEOOptimization />} />
              <Route path="/ecommerce-seo" element={<EcommerceSEO />} />
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
              <Route path="/guides" element={<Guides />} />
              <Route path="/guides/:slug" element={<GuidePage />} />
              <Route path="/not-found" element={<NotFound />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <CookieConsent />
          </AnalyticsWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
