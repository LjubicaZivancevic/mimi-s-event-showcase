import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const packages = [
  {
    name: "Basic",
    description: "Za manje proslave i intimna okupljanja",
    features: [
      "Balonska dekoracija",
      "Osnovni cvetni aranžman",
      "Postavljanje i uklanjanje",
      "Konsultacija pre događaja",
    ],
    popular: false,
  },
  {
    name: "Standard",
    description: "Najpopularniji paket za rođendane i proslave",
    features: [
      "Kompletna tematska dekoracija",
      "Balonski lukovi i aranžmani",
      "Cvetni aranžmani",
      "Photo corner dekoracija",
      "Postavljanje i uklanjanje",
      "Personalizovani detalji",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Za svadbe i velike događaje bez kompromisa",
    features: [
      "Luksuzna kompletna dekoracija",
      "Premium cvetni aranžmani",
      "Balonske instalacije",
      "Rasveta i ambijent",
      "Kompletni stolni aranžmani",
      "Photo corner sa rekvizitima",
      "Dedicated dekorater na licu mesta",
      "Potpuno prilagođen dizajn",
    ],
    popular: false,
  },
];

const Packages = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Paketi"
          subtitle="Izaberite paket koji najbolje odgovara vašoj proslavi — svaki se može prilagoditi"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl p-8 h-full flex flex-col relative ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground shadow-2xl scale-[1.02]"
                    : "bg-background shadow-sm border border-border/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5" />
                    Najpopularniji
                  </div>
                )}

                <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                    pkg.popular
                      ? "bg-accent text-accent-foreground hover:bg-pink-dark"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Pošalji upit
                </button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            * Sve cene su okvirne i zavise od specifičnih zahteva. Kontaktirajte nas za personalizovanu ponudu.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Packages;
