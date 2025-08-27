import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
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
