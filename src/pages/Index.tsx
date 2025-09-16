import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MediaSection from "@/components/MediaSection";
import ConsultationSection from "@/components/ConsultationSection";
import StatsSection from "@/components/StatsSection";
import CalculatorsSection from "@/components/CalculatorsSection";
import CoursesSection from "@/components/CoursesSection";
import PodcastSection from "@/components/PodcastSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
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
      <div id="home">
        <HeroSection />
      </div>

      {/* 3. Our Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* 4. In The Media Section */}
      <div id="media">
        <MediaSection />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* 5. Consultation Call Section */}
      <div id="consultation">
        <ConsultationSection />
      </div>

      {/* 6. Stats / Counters Section */}
      <StatsSection />

      {/* 7. Free Calculators Section */}
      <div id="calculators">
        <CalculatorsSection />
      </div>

      {/* 8. Courses Section */}
      <div id="courses">
        <CoursesSection />
      </div>

      {/* 9. Podcast Section */}
      <div id="podcast">
        <PodcastSection />
      </div>

      {/* 10. Video Section */}
      <div id="videos">
        <VideoSection />
      </div>

      {/* 10. Client Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* 11. Zodiac Signs Section */}
      <div id="zodiac">
        <ZodiacSection />
      </div>

      {/* 12. Blog/Articles Preview */}
      <div id="blog">
        <BlogSection />
      </div>

      {/* 13. FAQ Section */}
      <div id="faqs">
        <FAQSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
