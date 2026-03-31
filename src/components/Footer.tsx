import { Heart, Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Dekoracije Mimi" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-heading text-xl font-semibold">Dekoracije Mimi</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Pretvaramo vaše snove u prelepe dekoracije. Svaki detalj, svaki cvet, svaki balon — savršeno osmišljeni za vaš poseban dan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Brza navigacija</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Početna", href: "#hero" },
                { label: "O nama", href: "#about" },
                { label: "Usluge", href: "#services" },
                { label: "Galerija", href: "#gallery" },
                { label: "Paketi", href: "#packages" },
                { label: "Kontakt", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-primary-foreground/70 hover:text-accent transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+381 XX XXX XXXX</span>
              </div>
              <a href="https://wa.me/381XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a href="https://instagram.com/dekoracijemimi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@dekoracijemimi</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Srbija</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Dekoracije Mimi. Sva prava zadržana. Made with
            <Heart className="w-3.5 h-3.5 fill-accent text-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
