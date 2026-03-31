import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryBabyshower from "@/assets/gallery-babyshower.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import galleryKids from "@/assets/gallery-kids.jpg";
import galleryBaptism from "@/assets/gallery-baptism.jpg";

const categories = ["Sve", "Rođendani", "Svadbe", "Baby Shower", "Dečije proslave", "Korporativni"];

const galleryItems = [
  { src: galleryBirthday, category: "Rođendani", title: "Elegantna rođendanska proslava" },
  { src: galleryWedding, category: "Svadbe", title: "Romantični svadbeni aranžman" },
  { src: galleryBabyshower, category: "Baby Shower", title: "Nežni baby shower dekor" },
  { src: galleryCorporate, category: "Korporativni", title: "Sofisticirani korporativni event" },
  { src: galleryKids, category: "Dečije proslave", title: "Vesela dečija proslava" },
  { src: galleryBaptism, category: "Rođendani", title: "Dekoracija za krštenje" },
];

const Gallery = () => {
  const [active, setActive] = useState("Sve");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "Sve" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Galerija"
          subtitle="Pogledajte neke od naših najlepših dekoracija i budite inspirisani"
        />

        {/* Category filters */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-accent/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Gallery grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightbox(i)}
                className="group cursor-pointer rounded-2xl overflow-hidden relative aspect-square shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-primary-foreground font-heading text-lg font-semibold">{item.title}</p>
                    <p className="text-primary-foreground/70 text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.title}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
