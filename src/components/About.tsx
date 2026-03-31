import { Heart, Award, Palette, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import aboutImage from "@/assets/about-image.jpg";

const stats = [
  { icon: Heart, label: "Godina iskustva", value: "5+" },
  { icon: Award, label: "Uspešnih dekoracija", value: "200+" },
  { icon: Users, label: "Zadovoljnih klijenata", value: "150+" },
  { icon: Palette, label: "Kreativnih dizajna", value: "300+" },
];

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="O nama"
        subtitle="Upoznajte Dekoracije Mimi — vaš partner za kreiranje magičnih trenutaka"
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection delay={0.1}>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Dekoracije Mimi at work"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-6">
            Kreativnost, elegancija i pažnja do detalja
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Dekoracije Mimi je brend posvećen stvaranju prelepe atmosfere za vaše najvažnije 
              životne trenutke. Sa strašću prema dizajnu i ljubavlju prema detaljima, svaku 
              dekoraciju kreiramo kao jedinstveno umetničko delo.
            </p>
            <p>
              Od elegantnih svadbenih aranžmana do razigranih dečijih proslava, naš tim 
              koristi najkvalitetnije materijale i inovativne ideje kako bi vaše slavlje 
              bilo nezaboravno.
            </p>
            <p>
              Posebno se ponosimo radom sa <strong className="text-primary">prirodnim cvećem</strong> — 
              svežim aranžmanima koji unose toplinu, autentičnost i neponovljiv miris u svaki 
              prostor. Prirodno cveće dodaje posebnu eleganciju i čini svaku dekoraciju 
              jedinstvenom i živom.
            </p>
            <p>
              Verujemo da svaka prilika zaslužuje poseban dodir — zato radimo blisko sa 
              svakim klijentom kako bismo razumeli njihovu viziju i pretvorili je u stvarnost.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-5 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-heading text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
