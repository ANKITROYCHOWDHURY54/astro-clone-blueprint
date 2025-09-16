import { Button } from "@/components/ui/button";
import { Star, Clock, Shield, Award } from "lucide-react";
import consultationBanner from "@/assets/consultation-banner.jpg";

const ConsultationSection = () => {
  return (
    <section className="py-20 bg-cosmic relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Star className="h-12 w-12 text-accent" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{animationDelay: '1.5s'}}>
          <Star className="h-8 w-8 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <img 
              src={consultationBanner} 
              alt="Astrology Consultation - Your Guide to Life's Journey"
              className="w-full rounded-2xl shadow-glow"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-warm">
              ⭐ 4.9/5 Rating
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔮 Personal Consultation
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Astrology: Your Guide to Life's{" "}
              <span className="text-accent">Journey & Path</span>{" "}
              to Success
            </h2>
            
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Get personalized astrological guidance through one-on-one consultation. 
              Discover your strengths, overcome challenges, and unlock your true potential.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground">60 Min Session</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground">100% Confidential</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground">Certified Expert</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground">Accurate Predictions</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#contact">Book Your Call Consultation Now</a>
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
                <a href="#services">View Consultation Packages</a>
              </Button>
            </div>

            {/* Pricing hint */}
            <p className="text-primary-foreground/60 text-sm mt-4">
              Starting from ₹2,100 • Available 7 days a week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;