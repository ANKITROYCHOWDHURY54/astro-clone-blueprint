import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      image: "👩🏻‍💼",
      rating: 5,
      text: "Astro Arun Pandit's predictions about my career change were incredibly accurate. I followed his guidance and landed my dream job within 3 months. His remedies really work!",
      service: "Career Consultation"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India", 
      image: "👨🏻‍💼",
      rating: 5,
      text: "I was skeptical about astrology, but after consulting Arun ji, my business started flourishing. His Vastu suggestions transformed my office energy completely.",
      service: "Business Astrology"
    },
    {
      name: "Deepika Patel",
      location: "Bangalore, India",
      image: "👩🏻",
      rating: 5,
      text: "My marriage was going through a rough patch. Arun ji's relationship guidance and remedies helped us rebuild our bond stronger than ever. Forever grateful!",
      service: "Relationship Counseling"
    },
    {
      name: "Amit Gupta",
      location: "Pune, India",
      image: "👨🏻‍🎓",
      rating: 5,
      text: "The Advanced Astrology Course exceeded my expectations. Arun ji's teaching style is exceptional. I'm now a certified astrologer helping others!",
      service: "Astrology Course"
    },
    {
      name: "Sneha Agarwal",
      location: "Hyderabad, India",
      image: "👩🏻‍⚕️",
      rating: 5,
      text: "My health issues were accurately predicted and the prescribed gemstone therapy worked wonders. Arun ji's expertise in medical astrology is remarkable.",
      service: "Health Astrology"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, India",
      image: "👨🏻‍💻",
      rating: 5,
      text: "The free Kundli report was so detailed and accurate! It gave me insights I never knew about myself. Definitely booking a personal consultation soon.",
      service: "Kundli Analysis"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-secondary">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from thousands of satisfied clients who transformed their lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-secondary" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                    <div className="text-xs text-secondary font-medium">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15K+</div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Return Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;