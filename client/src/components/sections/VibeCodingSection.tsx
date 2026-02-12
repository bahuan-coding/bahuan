import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function VibeCodingSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="vibe-coding"
      ref={sectionRef}
      className="relative overflow-hidden border border-primary/20 bg-primary/5 p-8 md:p-12 opacity-0"
    >
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <Layers className="h-32 w-32 text-primary" />
      </div>
      <div className="relative z-10 max-w-2xl space-y-6">
        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
          CURRENT_FOCUS
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
          VIBE_CODING &amp; <br />
          AGENT ENGINEERING
        </h2>
        <p className="text-lg text-muted-foreground">
          "I don't just write code; I orchestrate intelligence."
        </p>
        <p className="text-muted-foreground">
          Pioneering a systematic, AI-assisted development methodology that
          accelerates delivery by 70% while maintaining enterprise-grade quality.
          Leveraging Rust for safety and AI agents for velocity. Orchestrating
          swarms of specialized agents for code generation, automated testing,
          security auditing, and deployment pipelines — all coordinated by a
          human architect who understands both the financial domain and the
          engineering craft.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">
            Claude / GPT Orchestration
          </Badge>
          <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">
            Cursor IDE + Agent Swarms
          </Badge>
          <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">
            Rust + Python Pipeline
          </Badge>
          <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">
            Automated Code Review
          </Badge>
        </div>
        <Button className="font-mono bg-primary text-primary-foreground hover:bg-primary/90">
          EXPLORE_METHODOLOGY
        </Button>
      </div>
    </section>
  );
}
