import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ZodiacSection = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const zodiacSigns = [
    {
      name: "Aries",
      symbol: "♈",
      element: "Fire",
      dates: "Mar 21 - Apr 19",
      traits: "Energetic, confident, and natural leaders",
      description: "Aries are known for their pioneering spirit and courage. They are natural-born leaders who thrive on challenges and new beginnings."
    },
    {
      name: "Taurus", 
      symbol: "♉",
      element: "Earth",
      dates: "Apr 20 - May 20",
      traits: "Reliable, practical, and devoted",
      description: "Taurus individuals are grounded and practical. They value stability, comfort, and have a deep appreciation for beauty and luxury."
    },
    {
      name: "Gemini",
      symbol: "♊", 
      element: "Air",
      dates: "May 21 - Jun 20",
      traits: "Curious, adaptable, and communicative",
      description: "Geminis are versatile and intellectually curious. They have excellent communication skills and love learning new things."
    },
    {
      name: "Cancer",
      symbol: "♋",
      element: "Water", 
      dates: "Jun 21 - Jul 22",
      traits: "Intuitive, emotional, and nurturing",
      description: "Cancer individuals are deeply intuitive and emotional. They are natural nurturers who value family and home above all."
    },
    {
      name: "Leo",
      symbol: "♌",
      element: "Fire",
      dates: "Jul 23 - Aug 22", 
      traits: "Dramatic, creative, and generous",
      description: "Leos are natural performers who love being in the spotlight. They are generous, warm-hearted, and have a flair for drama."
    },
    {
      name: "Virgo",
      symbol: "♍",
      element: "Earth",
      dates: "Aug 23 - Sep 22",
      traits: "Analytical, practical, and perfectionist",
      description: "Virgos are detail-oriented perfectionists who strive for excellence. They are practical, analytical, and highly organized."
    },
    {
      name: "Libra",
      symbol: "♎",
      element: "Air",
      dates: "Sep 23 - Oct 22",
      traits: "Diplomatic, fair-minded, and social",
      description: "Libras seek balance and harmony in all aspects of life. They are diplomatic, charming, and have a strong sense of justice."
    },
    {
      name: "Scorpio",
      symbol: "♏", 
      element: "Water",
      dates: "Oct 23 - Nov 21",
      traits: "Passionate, mysterious, and intense",
      description: "Scorpios are intense and passionate individuals. They are mysterious, determined, and possess incredible emotional depth."
    },
    {
      name: "Sagittarius",
      symbol: "♐",
      element: "Fire", 
      dates: "Nov 22 - Dec 21",
      traits: "Adventurous, optimistic, and philosophical",
      description: "Sagittarians are free-spirited adventurers who love exploring new horizons. They are optimistic, philosophical, and truth-seeking."
    },
    {
      name: "Capricorn",
      symbol: "♑",
      element: "Earth",
      dates: "Dec 22 - Jan 19",
      traits: "Ambitious, disciplined, and responsible", 
      description: "Capricorns are ambitious and disciplined individuals who work steadily toward their goals. They are responsible and practical."
    },
    {
      name: "Aquarius", 
      symbol: "♒",
      element: "Air",
      dates: "Jan 20 - Feb 18",
      traits: "Independent, innovative, and humanitarian",
      description: "Aquarians are progressive thinkers who value independence and innovation. They are humanitarian and forward-thinking."
    },
    {
      name: "Pisces",
      symbol: "♓",
      element: "Water",
      dates: "Feb 19 - Mar 20", 
      traits: "Compassionate, artistic, and intuitive",
      description: "Pisceans are deeply compassionate and intuitive. They are artistic, imaginative, and have a strong connection to the spiritual realm."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Your <span className="text-secondary">Zodiac</span> Sign
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the unique characteristics and traits of each zodiac sign
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {zodiacSigns.map((sign, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-warm hover:-translate-y-2 ${
                selectedSign === sign.name ? 'bg-secondary/10 border-secondary shadow-warm' : ''
              }`}
              onClick={() => setSelectedSign(selectedSign === sign.name ? null : sign.name)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {sign.symbol}
                </div>
                <div className="font-semibold text-foreground text-sm">
                  {sign.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {sign.dates}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected sign details */}
        {selectedSign && (
          <Card className="max-w-3xl mx-auto bg-secondary/5 border-secondary/20 animate-fade-in">
            <CardContent className="p-8">
              {(() => {
                const sign = zodiacSigns.find(s => s.name === selectedSign);
                return sign ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4">{sign.symbol}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{sign.name}</h3>
                    <div className="text-secondary font-semibold mb-2">{sign.dates}</div>
                    <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {sign.element} Sign
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{sign.traits}"</p>
                    <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
                      {sign.description}
                    </p>
                  </div>
                ) : null;
              })()}
            </CardContent>
          </Card>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Click on any zodiac sign to learn more about its unique characteristics
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZodiacSection;