import { motion } from "framer-motion";
import { Flower2, Star, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import archFloral from "@/assets/arch-floral.jpg";
import archBalloon from "@/assets/arch-balloon.jpg";
import archRustic from "@/assets/arch-rustic.jpg";
import archCircular from "@/assets/arch-circular.jpg";

const arches = [
  {
    image: archFloral,
    title: "Cvetni luk",
    description:
      "Raskošan luk od prirodnog cveća — ruže, božuri i zelenilo stvaraju romantičnu atmosferu savršenu za venčanja i svečane ceremonije.",
    icon: Flower2,
    tag: "Najpopularniji",
  },
  {
    image: archBalloon,
    title: "Balon luk",
    description:
      "Veseli i šareni balon lukovi u pastelnim tonovima — idealni za rođendane, baby shower proslave i dečije zabave.",
    icon: Sparkles,
    tag: "Za proslave",
  },
  {
    image: archRustic,
    title: "Rustični luk",
    description:
      "Drveni luk sa draperijom i cvećem u boho stilu — savršen izbor za venčanja na otvorenom i rustične proslave.",
    icon: Star,
    tag: "Boho stil",
  },
  {
    image: archCircular,
    title: "Kružni luk",
    description:
      "Elegantni kružni luk bogato ukrašen belim i roze cvećem — luksuzna pozadina za fotografisanje i svečane trenutke.",
    icon: Flower2,
    tag: "Premium",
  },
];

const Arches = () => (
  <section id="arches" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Naši lukovi — preporuke"
        subtitle="Izaberite savršen dekorativni luk za vašu proslavu. Svaki luk se prilagođava vašim željama i temi događaja."
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {arches.map((arch, i) => (
          <AnimatedSection key={arch.title} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group border border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={arch.image}
                  alt={arch.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={640}
                  height={800}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {arch.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/40 transition-colors duration-300">
                    <arch.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    {arch.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {arch.description}
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <div className="mt-14 text-center bg-background rounded-2xl p-8 lg:p-10 border border-border/50 shadow-sm">
          <Flower2 className="w-8 h-8 text-accent mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-primary mb-3">
            Radimo sa prirodnim cvećem
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Svi naši cvetni aranžmani i lukovi mogu biti izrađeni od <strong className="text-primary">svežeg, prirodnog cveća</strong>. 
            Prirodno cveće unosi autentičnu lepotu, nežan miris i posebnu eleganciju u svaki prostor. 
            Kontaktirajte nas za personalizovanu ponudu sa vašim omiljenim cvećem.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Arches;
