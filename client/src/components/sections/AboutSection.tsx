import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="max-w-3xl mx-auto py-12 space-y-6 opacity-0"
    >
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-primary text-primary font-mono text-xs">
          {t.about.badge}
        </Badge>
      </div>

      <h2 className="text-3xl font-bold tracking-tight font-mono">
        {t.about.title}
      </h2>

      <p
        className="text-lg text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t.about.p1 }}
      />

      <p
        className="text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t.about.p2 }}
      />
    </section>
  );
}
