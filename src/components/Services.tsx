import { motion } from "framer-motion";
import { Cake, Heart, Baby, Church, Briefcase, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Cake,
    title: "Rođendani",
    description: "Kreiramo čarobne rođendanske dekoracije za sve uzraste — od tematskih dečijih zabava do elegantnih proslava za odrasle.",
  },
  {
    icon: Heart,
    title: "Svadbe",
    description: "Romantične i sofisticirane svadbene dekoracije koje čine vaš poseban dan zaista nezaboravnim.",
  },
  {
    icon: Baby,
    title: "Baby Shower",
    description: "Nežne i preslatke dekoracije za baby shower proslave — savršen uvod u novi životni poglavlje.",
  },
  {
    icon: Church,
    title: "Krštenja i prvi rođendani",
    description: "Delikatne i emotivne dekoracije za krštenja i prve rođendane vašeg najmilijeg.",
  },
  {
    icon: Briefcase,
    title: "Korporativni eventi",
    description: "Profesionalne i elegantne dekoracije za poslovne događaje, konferencije i proslave.",
  },
  {
    icon: Sparkles,
    title: "Posebni zahtevi",
    description: "Imate jedinstvenu viziju? Kreiramo potpuno prilagođene dekoracije za svaku priliku.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Naše usluge"
        subtitle="Pružamo kompletne dekoraterske usluge za sve vaše posebne prilike"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 group h-full border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/40 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
