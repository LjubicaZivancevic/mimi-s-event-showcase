import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Instagram, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { z } from "zod";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Ime je obavezno").max(100),
  phone: z.string().trim().min(1, "Telefon je obavezan").max(30),
  email: z.string().trim().email("Unesite ispravnu email adresu").max(255),
  eventType: z.string().trim().min(1, "Izaberite tip događaja"),
  eventDate: z.string().trim().min(1, "Unesite datum događaja"),
  location: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Poruka je obavezna").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

const eventTypes = [
  "Rođendan",
  "Svadba",
  "Baby Shower",
  "Krštenje",
  "Korporativni event",
  "Drugo",
];

const Contact = () => {
  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setStatus("sending");
    setErrors({});

    // Simulate sending — replace with actual backend call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // TODO: Connect to email API / serverless function
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(result.data) });
      setStatus("success");
      setForm({});
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: string) =>
    `w-full px-5 py-3.5 rounded-xl bg-background border transition-all duration-300 outline-none font-body text-sm ${
      errors[field]
        ? "border-destructive focus:ring-2 focus:ring-destructive/30"
        : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
    }`;

  if (status === "success") {
    return (
      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-background rounded-2xl p-12 shadow-lg"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Poruka je uspešno poslata!
            </h3>
            <p className="text-muted-foreground mb-8">
              Hvala vam na interesovanju! Javićemo vam se u najkraćem mogućem roku.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Pošalji novu poruku
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Kontaktirajte nas"
          subtitle="Rezervišite svoju dekoraciju danas — javite nam se i zajedno ćemo kreirati nešto posebno"
        />

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <AnimatedSection delay={0.1} className="lg:col-span-1 space-y-6">
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
              <h3 className="font-heading text-xl font-semibold text-primary mb-6">
                Javite nam se
              </h3>
              <div className="space-y-5">
                <a
                  href="https://wa.me/381XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href="tel:+381XXXXXXXXX"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">+381 XX XXX XXXX</span>
                </a>
                <a
                  href="https://instagram.com/dekoracijemimi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">@dekoracijemimi</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">Srbija</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 space-y-5">
              {status === "error" && (
                <div className="flex items-center gap-3 bg-destructive/10 text-destructive rounded-xl p-4 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  Došlo je do greške. Molimo pokušajte ponovo.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Ime i prezime *</label>
                  <input name="name" value={form.name || ""} onChange={handleChange} className={inputClass("name")} placeholder="Vaše ime" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefon *</label>
                  <input name="phone" value={form.phone || ""} onChange={handleChange} className={inputClass("phone")} placeholder="+381..." />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input name="email" type="email" value={form.email || ""} onChange={handleChange} className={inputClass("email")} placeholder="vaš@email.com" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Tip događaja *</label>
                  <select name="eventType" value={form.eventType || ""} onChange={handleChange} className={inputClass("eventType")}>
                    <option value="">Izaberite...</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.eventType && <p className="text-destructive text-xs mt-1">{errors.eventType}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Datum događaja *</label>
                  <input name="eventDate" type="date" value={form.eventDate || ""} onChange={handleChange} className={inputClass("eventDate")} />
                  {errors.eventDate && <p className="text-destructive text-xs mt-1">{errors.eventDate}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Lokacija</label>
                <input name="location" value={form.location || ""} onChange={handleChange} className={inputClass("location")} placeholder="Grad, restoran..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Poruka *</label>
                <textarea
                  name="message"
                  value={form.message || ""}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass("message")}
                  placeholder="Opišite vašu viziju dekoracije..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                    Slanje...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Rezervišite vašu dekoraciju
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
