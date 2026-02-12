import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="max-w-3xl mx-auto py-12 space-y-6 opacity-0"
    >
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-primary text-primary font-mono text-xs">
          Behind the Code
        </Badge>
      </div>

      <h2 className="text-3xl font-bold tracking-tight font-mono">
        The Human Side
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed">
        I am a proud <strong>Baiano</strong> from Salvador, carrying the warmth
        and resilience of my roots into every project. I love my team,{" "}
        <strong>Esporte Clube Bahia</strong>, and I bring that same passion and
        unwavering loyalty to my work and the people I build alongside.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        When I'm not architecting financial systems, you can find me in the
        lanes of <strong>Dota 2</strong>. Gaming keeps my strategic thinking
        sharp and my reflexes quicker than a high-frequency trading algorithm.
        The parallels between coordinating a five-person team fight and
        orchestrating a distributed systems deployment are more real than most
        people think.
      </p>
    </section>
  );
}
