import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MediaSection from "@/components/MediaSection";
import ConsultationSection from "@/components/ConsultationSection";
import StatsSection from "@/components/StatsSection";
import CalculatorsSection from "@/components/CalculatorsSection";
import CoursesSection from "@/components/CoursesSection";
import PodcastSection from "@/components/PodcastSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ZodiacSection from "@/components/ZodiacSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Header / Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Our Services Section */}
      <ServicesSection />

      {/* 4. In The Media Section */}
      <MediaSection />

      {/* 5. Consultation Call Section */}
      <ConsultationSection />

      {/* 6. Stats / Counters Section */}
      <StatsSection />

      {/* 7. Free Calculators Section */}
      <CalculatorsSection />

      {/* 8. Courses Section */}
      <CoursesSection />

      {/* 9. Podcast Section */}
      <PodcastSection />

      {/* 10. Client Testimonials Section */}
      <TestimonialsSection />

      {/* 11. Zodiac Signs Section */}
      <ZodiacSection />

      {/* 12. Blog/Articles Preview */}
      <BlogSection />

      {/* 13. FAQ Section */}
      <FAQSection />

      {/* 14. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
