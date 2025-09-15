import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "Mercury Retrograde December 2024: What to Expect",
      excerpt: "Learn how Mercury retrograde will affect your sign and practical tips to navigate this challenging period with confidence.",
      image: "📖",
      date: "December 12, 2024",
      readTime: "5 min read",
      category: "Planetary Movements",
      author: "Astro Arun Pandit"
    },
    {
      title: "2025 Career Predictions for All Zodiac Signs",
      excerpt: "Discover what the stars have in store for your professional life in 2025. Career changes, promotions, and new opportunities ahead.",
      image: "💼",
      date: "December 10, 2024", 
      readTime: "8 min read",
      category: "Career Astrology",
      author: "Astro Arun Pandit"
    },
    {
      title: "Powerful Mantras for Love and Relationships",
      excerpt: "Ancient Vedic mantras to attract love, strengthen relationships, and resolve conflicts. Includes pronunciation guide and timing.",
      image: "💝",
      date: "December 8, 2024",
      readTime: "6 min read", 
      category: "Remedies",
      author: "Astro Arun Pandit"
    },
    {
      title: "Understanding Your Moon Sign's Influence",
      excerpt: "Why your Moon sign is just as important as your Sun sign and how it affects your emotions, relationships, and life decisions.",
      image: "🌙",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Vedic Astrology",
      author: "Astro Arun Pandit"
    },
    {
      title: "Gemstone Therapy: Science Meets Spirituality",
      excerpt: "How gemstones work according to Vedic astrology and modern science. Complete guide to choosing and wearing the right stones.",
      image: "💎",
      date: "December 3, 2024",
      readTime: "10 min read",
      category: "Gemstone Therapy",
      author: "Astro Arun Pandit"
    },
    {
      title: "Vastu Tips for Home Office Success",
      excerpt: "Transform your home workspace with these powerful Vastu principles. Boost productivity, wealth, and career growth from home.",
      image: "🏠",
      date: "December 1, 2024",
      readTime: "4 min read",
      category: "Vastu Shastra",
      author: "Astro Arun Pandit"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest from Our <span className="text-secondary">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover astrological insights, predictions, and ancient wisdom to guide your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl">{article.image}</div>
                </div>
                <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {article.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    By {article.author}
                  </div>
                  <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80 p-0">
                    Read More <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            View All Articles
          </Button>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Vedic Astrology", "Career", "Love & Marriage", "Remedies", "Predictions"].map((tag, index) => (
              <div key={index} className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full text-sm">
                <Tag className="h-3 w-3 text-secondary" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;