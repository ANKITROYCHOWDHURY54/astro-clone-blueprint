import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import astrologerHero from "@/assets/astrologer-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Star className="h-8 w-8 text-accent" />
        </div>
        <div className="absolute top-40 right-16 animate-float" style={{animationDelay: '1s'}}>
          <Sparkles className="h-6 w-6 text-accent" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '2s'}}>
          <Star className="h-6 w-6 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Advanced Kundli Reading
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Unlock Your Life's{" "}
              <span className="text-accent">Celestial</span>{" "}
              Blueprint
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Discover your true path with authentic Vedic astrology. Get personalized insights, 
              predictions, and guidance from India's trusted astrologer with 20+ years of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Your Advanced Kundli
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                Watch Free Preview
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-8 text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="text-sm">50K+ Happy Clients</div>
              <div className="text-sm">20+ Years Experience</div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={astrologerHero} 
                alt="Professional Astrologer - Your Guide to Spiritual Wisdom"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-glow"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;