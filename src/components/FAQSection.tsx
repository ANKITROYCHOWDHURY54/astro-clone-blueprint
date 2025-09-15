import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I book a consultation with Astro Arun Pandit?",
      answer: "You can book a consultation through our website by clicking the 'Book Consultation' button, calling our helpline, or through WhatsApp. We offer both phone and video consultations to suit your preference."
    },
    {
      question: "What information do I need to provide for an accurate reading?",
      answer: "For the most accurate reading, please provide your complete birth details: date, time, and place of birth. If you don't know your exact birth time, we can help you with a birth time rectification service."
    },
    {
      question: "Are the free calculators and horoscopes accurate?",
      answer: "Yes, our free tools are based on authentic Vedic astrology principles and calculations. While they provide valuable insights, a personal consultation offers more detailed and personalized guidance."
    },
    {
      question: "How long does a typical consultation session last?",
      answer: "A standard consultation session lasts 45-60 minutes. This includes birth chart analysis, predictions, and remedial suggestions. Premium sessions can extend up to 90 minutes for comprehensive coverage."
    },
    {
      question: "Do you provide remedies and solutions for problems?",
      answer: "Absolutely! Along with predictions, we provide practical remedies including gemstone recommendations, mantras, charity suggestions, and lifestyle modifications based on your planetary positions."
    },
    {
      question: "Can astrology really help with career and business decisions?",
      answer: "Yes, Vedic astrology provides valuable insights into your career potential, favorable time periods for business ventures, partnership compatibility, and optimal timing for important professional decisions."
    },
    {
      question: "What makes your astrology courses different?",
      answer: "Our courses combine traditional Vedic knowledge with practical application. You'll learn from 20+ years of experience, get hands-on practice with real charts, and receive certification upon completion."
    },
    {
      question: "Is online consultation as effective as in-person meetings?",
      answer: "Yes, online consultations are equally effective. The accuracy depends on the birth details provided, not the physical presence. Many clients prefer online sessions for convenience and comfort."
    },
    {
      question: "How often should I consult an astrologer?",
      answer: "For general guidance, once or twice a year is sufficient. However, during major life transitions, challenging periods, or before important decisions, more frequent consultations can be beneficial."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "We stand behind our service quality. If you're not satisfied with your consultation, please contact us within 48 hours, and we'll work to address your concerns or provide a refund as per our policy."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our astrology services and consultations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-muted/30 rounded-lg px-6 border border-border/50 hover:border-secondary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="bg-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you with any additional questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919999999999" 
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                📞 Call: +91 99999 99999
              </a>
              <a 
                href="mailto:info@astroarunpandit.org" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                ✉️ Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;