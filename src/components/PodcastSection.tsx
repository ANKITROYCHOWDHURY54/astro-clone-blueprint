import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Headphones, Calendar, Users } from "lucide-react";

const PodcastSection = () => {
  const podcasts = [
    {
      title: "The Astro Arun Pandit Show",
      description: "Weekly insights into Vedic astrology and spiritual guidance",
      episode: "Episode 127",
      guest: "Celebrity Life Coach",
      date: "Dec 10, 2024",
      duration: "45 min"
    },
    {
      title: "Cosmic Conversations",
      description: "Deep dive into planetary influences and their effects",
      episode: "Episode 89",
      guest: "Renowned Author",
      date: "Dec 8, 2024", 
      duration: "38 min"
    },
    {
      title: "Stars & Success Stories",
      description: "Real client transformations through astrology",
      episode: "Episode 156",
      guest: "Business Leader",
      date: "Dec 5, 2024",
      duration: "52 min"
    },
    {
      title: "Mystic Monday",
      description: "Weekly predictions and astrological guidance",
      episode: "Episode 203",
      guest: "Yoga Instructor",
      date: "Dec 3, 2024",
      duration: "30 min"
    }
  ];

  return (
    <section className="py-20 bg-cosmic">
      <div className="container mx-auto px-4">
        {/* Featured Podcast Banner */}
        <div className="bg-maroon rounded-2xl p-8 mb-16 text-center shadow-mystical">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎙️ Featured Podcast
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-foreground mb-4">
              The Astro Arun Pandit Show
            </h2>
            
            <p className="text-xl text-maroon-foreground/80 mb-8 max-w-2xl mx-auto">
              Join millions of listeners worldwide for weekly astrological insights, 
              celebrity interviews, and transformative spiritual guidance.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8 text-maroon-foreground/70">
              <div className="flex items-center gap-2">
                <Headphones className="h-5 w-5" />
                <span>2M+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>500K+ Subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>New Episodes Weekly</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Play className="h-5 w-5 mr-2" />
              Listen to Latest Episode
            </Button>
          </div>
        </div>

        {/* Recent Episodes */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Recent <span className="text-accent">Episodes</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                      <Play className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-accent text-sm font-semibold mb-1">
                      {podcast.episode}
                    </div>
                    
                    <h4 className="text-lg font-bold text-primary-foreground mb-2">
                      {podcast.title}
                    </h4>
                    
                    <p className="text-primary-foreground/70 text-sm mb-3">
                      {podcast.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-primary-foreground/50 mb-4">
                      <span>Guest: {podcast.guest}</span>
                      <span>•</span>
                      <span>{podcast.date}</span>
                      <span>•</span>
                      <span>{podcast.duration}</span>
                    </div>

                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 hover:bg-accent/10 p-0">
                      Listen Now →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            View All Episodes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;