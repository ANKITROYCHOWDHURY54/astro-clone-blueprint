import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Courses", href: "#courses" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Sitemap", href: "#sitemap" }
  ];

  const services = [
    "Kundli Analysis", "Love & Marriage", "Career Guidance", "Vastu Consultation", 
    "Numerology", "Gemstone Therapy", "Health Predictions", "Business Astrology"
  ];

  return (
    <footer className="bg-maroon text-maroon-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-8 w-8 text-accent animate-pulse-glow" />
              <span className="text-2xl font-bold">AstroGuru</span>
            </div>
            
            <p className="text-maroon-foreground/80 mb-6 leading-relaxed">
              India's most trusted astrologer with 20+ years of experience in Vedic astrology. 
              Guiding thousands towards a better life through authentic astrological wisdom.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@astroarunpandit.org</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-maroon-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-maroon-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Connected</h3>
            <p className="text-maroon-foreground/80 mb-4 text-sm">
              Subscribe to our newsletter for weekly horoscopes and astrological insights.
            </p>
            
            <div className="space-y-3 mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-maroon-foreground/10 border-maroon-foreground/20 text-maroon-foreground placeholder:text-maroon-foreground/50"
              />
              <Button variant="cta" className="w-full" asChild>
                <a href="#contact">Subscribe Now</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                className="w-10 h-10 bg-maroon-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com"
                className="w-10 h-10 bg-maroon-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com"
                className="w-10 h-10 bg-maroon-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com"
                className="w-10 h-10 bg-maroon-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-maroon-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-maroon-foreground/60 text-sm">
              © 2024 AstroGuru. All rights reserved. | Made with ❤️ for spiritual seekers
            </div>
            
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-maroon-foreground/60 hover:text-accent text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-maroon-foreground/60 hover:text-accent text-sm">
                Terms & Conditions
              </a>
              <a href="#disclaimer" className="text-maroon-foreground/60 hover:text-accent text-sm">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;