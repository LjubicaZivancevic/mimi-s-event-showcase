import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: Props) => (
  <AnimatedSection className={`mb-16 ${centered ? "text-center" : ""}`}>
    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className={`mt-6 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
      <div className="h-[2px] w-12 bg-accent rounded-full" />
      <div className="h-2 w-2 bg-accent rounded-full" />
      <div className="h-[2px] w-12 bg-accent rounded-full" />
    </div>
  </AnimatedSection>
);

export default SectionHeading;
