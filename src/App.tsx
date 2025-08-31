import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import SEOServices from "./pages/SEOServices";
import GrowthMarketing from "./pages/GrowthMarketing";
import PaidAdvertising from "./pages/PaidAdvertising";
import Pricing from "./pages/Pricing";
import Results from "./pages/Results";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import FloridaSEOServices from "./pages/FloridaSEOServices";
import OrlandoDigitalMarketing from "./pages/OrlandoDigitalMarketing";
import TampaGrowthMarketing from "./pages/TampaGrowthMarketing";
import JacksonvilleSEOConsultant from "./pages/JacksonvilleSEOConsultant";
import MiamiMarketingAgency from "./pages/MiamiMarketingAgency";
import AreasWeServe from "./pages/AreasWeServe";
import FortLauderdaleAdvertising from "./pages/FortLauderdaleAdvertising";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DaytonaBeachDigitalMarketing from "./pages/DaytonaBeachDigitalMarketing";
import Contact from "./pages/Contact";
import VibeCoding from "./pages/VibeCoding";
import Services from "./pages/Services";
import LocalSEO from "./pages/LocalSEO";
import GEOOptimization from "./pages/GEOOptimization";
import Industries from "./pages/Industries";
import RealEstateMarketing from "./pages/RealEstateMarketing";
import HealthcareMarketing from "./pages/HealthcareMarketing";
import HomeServicesMarketing from "./pages/HomeServicesMarketing";
import EcommerceMarketing from "./pages/EcommerceMarketing";
import ProfessionalServicesMarketing from "./pages/ProfessionalServicesMarketing";
import SaaSMarketing from "./pages/SaaSMarketing";
import RestaurantsHospitalityMarketing from "./pages/RestaurantsHospitalityMarketing";
import LegalServicesMarketing from "./pages/LegalServicesMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
