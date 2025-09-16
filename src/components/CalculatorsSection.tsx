import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calculator, 
  Heart, 
  Calendar, 
  Star, 
  BookOpen, 
  Target 
} from "lucide-react";

const CalculatorsSection = () => {
  const calculators = [
    {
      icon: Calculator,
      title: "Free Kundli",
      description: "Generate your complete birth chart with detailed analysis and predictions",
      cta: "Generate Now",
      popular: true
    },
    {
      icon: Heart,
      title: "Free Matchmaking",
      description: "Check compatibility between partners using traditional astrological methods",
      cta: "Check Compatibility",
      popular: false
    },
    {
      icon: Calendar,
      title: "Free Horoscope",
      description: "Daily, weekly, and monthly horoscope predictions for all zodiac signs",
      cta: "Read Horoscope",
      popular: true
    },
    {
      icon: Star,
      title: "Lucky Number",
      description: "Find your lucky numbers based on numerology and birth details",
      cta: "Find Numbers",
      popular: false
    },
    {
      icon: BookOpen,
      title: "Name Analysis",
      description: "Discover the hidden meaning and vibration of your name",
      cta: "Analyze Name",
      popular: false
    },
    {
      icon: Target,
      title: "Career Prediction",
      description: "Get insights about your career path and professional growth",
      cta: "Get Prediction",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Free <span className="text-secondary">Astrology</span> Calculators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore your destiny with our comprehensive collection of free astrological tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calc, index) => {
            const IconComponent = calc.icon;
            return (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {calc.popular && (
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6 group-hover:bg-secondary/20 transition-colors">
                    <IconComponent className="h-10 w-10 text-secondary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {calc.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {calc.description}
                  </p>
                  
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full group-hover:shadow-glow transition-all"
                    asChild
                  >
                    <a href="#contact">{calc.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All calculators are based on authentic Vedic astrology principles
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>100% Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Privacy Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorsSection;