import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="grid md:grid-cols-2 gap-12 items-start py-12 opacity-0"
    >
      {/* Left Column — Text Content */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-primary text-primary">
            HUMAN_PROTOCOL
          </Badge>
        </div>

        <h2 className="text-3xl font-bold tracking-tight font-mono">
          BEHIND_THE_CODE
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

      </div>

      {/* Right Column — André's Photo */}
      <div className="flex flex-col items-center md:items-start pt-4 md:pt-0 md:pl-4 mt-8">
        <div className="relative -rotate-1">
          <img
            src="/andre-silva.jpg"
            alt="André Silva"
            loading="lazy"
            className="w-full max-w-md aspect-[3/4] object-cover border-2 border-primary shadow-lg shadow-primary/20 rounded-sm"
          />
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground text-center w-full max-w-md">
          São Paulo, Brazil
        </p>
      </div>
    </section>
  );
}
