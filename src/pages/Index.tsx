import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Florida SEO Expert Joel Hinton | Psychology-Driven Digital Marketing</title>
        <meta name="description" content="Florida SEO expert Joel Hinton provides psychology-driven digital marketing services. Boost rankings & conversions with proven local SEO strategies." />
        <meta name="keywords" content="Florida SEO expert, digital marketing, local SEO, psychology-driven marketing, search engine optimization" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Florida SEO Expert Joel Hinton | Psychology-Driven Digital Marketing" />
        <meta property="og:description" content="Florida SEO expert providing psychology-driven digital marketing services for proven business growth." />
        <meta property="og:type" content="website" />
      </Helmet>
      <LocalBusinessSchema />
      <Navigation />
      <main>
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="results">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
