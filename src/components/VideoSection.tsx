import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const videos = [
  { id: "LqEoMx0Cmt8", title: "Astrology Sahi Hai?", description: "Podcast highlight clip" },
  { id: "EN1XntiQoms", title: "2025 Jyotish Predictions", description: "Yearly outlook" },
  { id: "lWnaLDnX2Qo", title: "Lal Kitab Remedies", description: "Practical guide" },
  { id: "IZMXWWAG-gY", title: "Moon Sign Secrets", description: "Deep dive" }
];

const VideoSection = () => {
  return (
     <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Watch Our <span className="text-secondary">Videos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked episodes and clips from our YouTube channel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v) => (
            <Card key={v.id} className="overflow-hidden group hover:shadow-warm transition-all duration-300">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-4">
                <div className="font-semibold mb-1">{v.title}</div>
                <div className="text-sm text-muted-foreground">{v.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href="https://www.youtube.com/@AstroArunPandit" target="_blank" rel="noreferrer">Visit YouTube Channel</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;







