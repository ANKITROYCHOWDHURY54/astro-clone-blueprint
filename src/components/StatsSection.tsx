import { Users, Heart, Star, Calendar } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "20K+",
      label: "Consultations",
      color: "text-secondary"
    },
    {
      icon: Heart,
      number: "50K+",
      label: "Happy Clients",
      color: "text-accent"
    },
    {
      icon: Star,
      number: "100K+",
      label: "Followers",
      color: "text-secondary"
    },
    {
      icon: Calendar,
      number: "20+",
      label: "Years Experience",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-maroon">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-maroon-foreground/10 rounded-full mb-4 group-hover:bg-maroon-foreground/20 transition-all duration-300">
                  <IconComponent className={`h-10 w-10 ${stat.color}`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-maroon-foreground/5 rounded-full"></div>
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-maroon-foreground mb-2">
                  {stat.number}
                </div>
                
                <div className="text-maroon-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-maroon-foreground/60 text-lg">
            Trusted by thousands for life-changing astrological guidance
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;