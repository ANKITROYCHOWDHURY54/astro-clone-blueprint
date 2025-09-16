const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-secondary">AstroGuru</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Inspired by the flow of astroarunpandit.org, this clone delivers a clean and
              conversion‑focused experience. It mirrors the professional structure with a
              modern UI, responsive layout, and accessible components.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ 20+ years of trusted Vedic astrology practice</li>
              <li>✓ Thousands of life‑changing consultations</li>
              <li>✓ Courses, podcasts, and free calculators</li>
            </ul>
          </div>
          <div className="bg-primary/5 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { k: "Experience", v: "20+ Years" },
                { k: "Happy Clients", v: "50K+" },
                { k: "Reviews", v: "15K+" },
                { k: "Courses", v: "10+" }
              ].map((s) => (
                <div key={s.k} className="text-center">
                  <div className="text-2xl font-bold text-secondary">{s.v}</div>
                  <div className="text-sm text-muted-foreground">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;







