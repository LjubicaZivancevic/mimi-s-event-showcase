import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Ana Petrović",
    event: "Svadba",
    text: "Dekoracije Mimi su naše venčanje pretvorile u bajku! Svaki detalj je bio savršen — od cvetnih aranžmana do balonskih lukova. Gosti i dalje pričaju o dekoraciji!",
    rating: 5,
  },
  {
    name: "Marija Ilić",
    event: "Dečiji rođendan",
    text: "Moja ćerka je bila oduševljena! Dekoracija je bila tačno onakva kakvu smo zamislili — vesela, šarena i puna magije. Preporuka od srca!",
    rating: 5,
  },
  {
    name: "Jelena Đorđević",
    event: "Baby Shower",
    text: "Profesionalne, kreativne i neverovatno pažljive. Baby shower dekoracija je bila prelepа i svi su bili impresionirani. Hvala Mimi timu!",
    rating: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Utisci klijenata"
        subtitle="Pogledajte šta naši zadovoljni klijenti kažu o saradnji sa nama"
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-card rounded-2xl p-8 h-full flex flex-col relative shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50"
            >
              <Quote className="w-10 h-10 text-accent/40 mb-4" />
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div>
                <p className="font-heading font-semibold text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.event}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
