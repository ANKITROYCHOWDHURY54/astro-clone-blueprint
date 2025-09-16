import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sparkles, Star, Heart, Briefcase, Home, Gem } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "@/assets/Image1.webp";
import img2 from "@/assets/Image2.webp";
import img3 from "@/assets/Image3.webp";
import img4 from "@/assets/Image4.jpeg";
import img5 from "@/assets/Image5.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      badge: "✨ Advanced Kundli Reading",
      title: "Unlock Your Life's Celestial Blueprint",
      description: "Discover your true path with authentic Vedic astrology. Get personalized insights, predictions, and guidance from India's trusted astrologer with 20+ years of experience.",
      primaryCta: "Get Your Advanced Kundli",
      primaryLink: "#calculators",
      secondaryCta: "Watch Free Preview",
      secondaryLink: "#podcast",
      icon: Star,
      image: img1
    },
    {
      badge: "💕 Love & Marriage Guidance",
      title: "Find Your Perfect Soulmate",
      description: "Discover compatibility, marriage timing, and relationship guidance through ancient Vedic wisdom. Strengthen your bond and find lasting love.",
      primaryCta: "Check Compatibility",
      primaryLink: "#calculators",
      secondaryCta: "Read Success Stories",
      secondaryLink: "#testimonials",
      icon: Heart,
      image: img2
    },
    {
      badge: "💼 Career & Business Astrology",
      title: "Unlock Your Professional Success",
      description: "Get career guidance, business predictions, and timing for important decisions. Discover your true calling and achieve professional excellence.",
      primaryCta: "Get Career Reading",
      primaryLink: "#services",
      secondaryCta: "View Courses",
      secondaryLink: "#courses",
      icon: Briefcase,
      image: img3
    },
    {
      badge: "🏠 Vastu & Home Harmony",
      title: "Transform Your Living Space",
      description: "Optimize your home and office with Vastu Shastra principles. Create positive energy flow for prosperity, health, and happiness.",
      primaryCta: "Book Vastu Consultation",
      primaryLink: "#contact",
      secondaryCta: "Learn Vastu Tips",
      secondaryLink: "#blog",
      icon: Home,
      image: img4
    },
    {
      badge: "💎 Gemstone Therapy",
      title: "Harness the Power of Gemstones",
      description: "Discover the right gemstones for your planetary positions. Enhance your life with authentic gemstone therapy and ancient wisdom.",
      primaryCta: "Get Gemstone Reading",
      primaryLink: "#services",
      secondaryCta: "View Collection",
      secondaryLink: "#calculators",
      icon: Gem,
      image: img5
    }
  ];

  const [api, setApi] = useState<any>(null);

  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Set initial slide

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Carousel 
        className="w-full h-screen" 
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          })
        ]}
      >
        <CarouselContent className="h-screen">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative h-full bg-hero flex items-center overflow-hidden">
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

                <div className="container mx-auto px-4 py-20 w-full">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                      <div className="space-y-6">
                        <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                          {slide.badge}
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                          {slide.title.split(' ').map((word, i) => 
                            word === 'Celestial' || word === 'Perfect' || word === 'Professional' || word === 'Living' || word === 'Power' ? 
                              <span key={i} className="text-accent">{word} </span> : 
                              <span key={i}>{word} </span>
                          )}
                        </h1>
                        
                        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
                          {slide.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                            <a href={slide.primaryLink}>
                              {slide.primaryCta}
                            </a>
                          </Button>
                          <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
                            <a href={slide.secondaryLink}>
                              {slide.secondaryCta}
                            </a>
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
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                      <div className="relative z-10 max-w-xl mx-auto rounded-2xl shadow-glow overflow-hidden bg-primary/5 p-2">
                        <img 
                          src={slide.image}
                          alt="Astrology visual"
                          className="w-full h-auto max-h-[520px] md:max-h-[620px] object-contain object-center"
                        />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows */}
        <CarouselPrevious className="left-4 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 bg-primary/80 backdrop-blur-sm" />
        <CarouselNext className="right-4 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 bg-primary/80 backdrop-blur-sm" />
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent scale-125' 
                  : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;