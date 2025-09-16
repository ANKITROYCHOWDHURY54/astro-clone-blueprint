import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import courseThumb from "@/assets/course-thumbnail.jpg";

const CoursesSection = () => {
  const courses = [
    {
      title: "Advanced Astrology Course",
      duration: "6 Months",
      students: "2,500+",
      rating: "4.9",
      level: "Intermediate to Advanced",
      description: "Master the ancient science of Vedic astrology with comprehensive training covering all aspects.",
      features: ["Birth Chart Analysis", "Predictive Techniques", "Remedial Measures", "Practical Sessions"],
      price: "₹15,999",
      originalPrice: "₹24,999"
    },
    {
      title: "Lal Kitab Course",
      duration: "3 Months", 
      students: "1,800+",
      rating: "4.8",
      level: "Beginner to Intermediate",
      description: "Learn the unique remedial astrology system of Lal Kitab with practical applications.",
      features: ["Lal Kitab Principles", "Remedy Techniques", "Case Studies", "Certification"],
      price: "₹8,999",
      originalPrice: "₹12,999"
    },
    {
      title: "Numerology Mastery",
      duration: "2 Months",
      students: "3,200+", 
      rating: "4.9",
      level: "Beginner Friendly",
      description: "Complete numerology course covering name analysis, predictions, and remedies.",
      features: ["Number Meanings", "Name Corrections", "Compatibility", "Business Numerology"],
      price: "₹5,999",
      originalPrice: "₹8,999"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-secondary">Astrology</span> Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from India's renowned astrologer and become a certified professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={courseThumb} 
                  alt={`${course.title} - Professional Astrology Training`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </div>
                <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {course.rating} ⭐
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    What You'll Learn:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-secondary">{course.price}</span>
                  <span className="text-muted-foreground line-through">{course.originalPrice}</span>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded text-sm font-semibold">
                    Save {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                  </span>
                </div>
                
                <Button variant="cta" size="lg" className="w-full group-hover:shadow-glow transition-all" asChild>
                  <a href="#contact">Enroll Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Join thousands of successful students worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent" />
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-secondary" />
              <span>Live Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-accent" />
              <span>Certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;