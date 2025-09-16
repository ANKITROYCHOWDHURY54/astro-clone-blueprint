import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Heart, 
  Briefcase, 
  Home, 
  Baby, 
  BookOpen, 
  Gem, 
  Calendar,
  Shield,
  Target,
  Users,
  Crown
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Star,
      title: "Kundli Analysis",
      description: "Complete birth chart analysis with detailed predictions and remedies",
      cta: "Book Now"
    },
    {
      icon: Heart,
      title: "Love & Marriage",
      description: "Relationship compatibility, marriage timing, and love life guidance",
      cta: "Consult Now"
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Professional growth, job changes, business success predictions",
      cta: "Know More"
    },
    {
      icon: Home,
      title: "Vastu Consultation",
      description: "Home and office Vastu analysis for prosperity and harmony",
      cta: "Book Now"
    },
    {
      icon: Baby,
      title: "Child Astrology",
      description: "Child's future, education, career path, and naming guidance",
      cta: "Consult Now"
    },
    {
      icon: BookOpen,
      title: "Numerology",
      description: "Name analysis, lucky numbers, and life path number readings",
      cta: "Know More"
    },
    {
      icon: Gem,
      title: "Gemstone Consultation",
      description: "Authentic gemstone recommendations for health and prosperity",
      cta: "Book Now"
    },
    {
      icon: Calendar,
      title: "Muhurat Selection",
      description: "Auspicious timing for important events and ceremonies",
      cta: "Consult Now"
    },
    {
      icon: Shield,
      title: "Health Predictions",
      description: "Health analysis, disease predictions, and remedial solutions",
      cta: "Know More"
    },
    {
      icon: Target,
      title: "Life Purpose",
      description: "Discover your dharma and life's true calling through astrology",
      cta: "Book Now"
    },
    {
      icon: Users,
      title: "Family Astrology",
      description: "Family harmony, relationship dynamics, and generational patterns",
      cta: "Consult Now"
    },
    {
      icon: Crown,
      title: "Premium Reading",
      description: "Comprehensive 2-hour session covering all life aspects",
      cta: "Know More"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-secondary">Astrology</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive astrological guidance for every aspect of your life journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary" asChild>
                    <a href="#contact">{service.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;