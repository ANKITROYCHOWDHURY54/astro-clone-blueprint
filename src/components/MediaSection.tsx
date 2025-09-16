import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const MediaSection = () => {
  const mediaLogos = [
    { name: "NEWS18", outlet: "National News Coverage" },
    { name: "NDTV", outlet: "Prime Time Interview" },
    { name: "OUTLOOK", outlet: "Magazine Feature" },
    { name: "ANI", outlet: "Press Release" },
    { name: "INDIA TODAY", outlet: "Special Report" },
    { name: "TIMES NOW", outlet: "Expert Panel" },
    { name: "CNN-NEWS18", outlet: "Live Discussion" },
    { name: "REPUBLIC", outlet: "Astrology Segment" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-secondary">In The Media</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognized and trusted by leading news outlets and media channels across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaLogos.map((media, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/5 rounded-lg p-4 mb-4 group-hover:bg-primary/10 transition-colors">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {media.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {media.outlet}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full group" asChild>
                  <a href="#media" aria-label={`Read article about ${media.name}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Trusted by millions for accurate predictions and spiritual guidance
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Featured in 50+ Publications</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>200+ TV Appearances</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>National Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;