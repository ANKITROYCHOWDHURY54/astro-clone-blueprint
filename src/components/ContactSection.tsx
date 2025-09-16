import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book a <span className="text-secondary">Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill the form and our team will reach out to schedule your session
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form className="bg-background rounded-2xl p-8 shadow-warm space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Full Name" required />
              <Input type="email" placeholder="Email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Phone" required />
              <Input placeholder="Preferred Date" />
            </div>
            <Textarea placeholder="Your question or brief concern" rows={5} />
            <Button variant="cta" size="lg" className="w-full">Submit Request</Button>
          </form>

          {/* Info */}
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-secondary" /> +91 99999 99999</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-secondary" /> info@astroarunpandit.org</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-secondary" /> New Delhi, India</div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                title="map"
                className="w-full h-64"
                loading="lazy"
                src="https://maps.google.com/maps?q=New%20Delhi&t=&z=11&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;







