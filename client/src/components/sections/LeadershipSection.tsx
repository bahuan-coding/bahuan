import { Users, Handshake, Trophy, Code, Cpu, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HowIWorkSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="how-i-work" ref={sectionRef} className="scroll-mt-24 space-y-10 opacity-0">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Users className="h-7 w-7 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-mono">
            How I Work
          </h2>
        </div>

        <Tabs defaultValue="leadership" className="w-full">
          <TabsList className="font-mono mb-8">
            <TabsTrigger value="leadership" className="font-mono text-xs">
              Leadership
            </TabsTrigger>
            <TabsTrigger value="ai-engineering" className="font-mono text-xs">
              AI Engineering
            </TabsTrigger>
          </TabsList>

          {/* Leadership Tab */}
          <TabsContent value="leadership" className="space-y-8">
            <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 italic">
              "I don't believe in leading from a distance. The best systems I
              ever built happened when I was right there in the trenches with my
              team."
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-border/60 bg-card/50 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Handshake className="h-4 w-4 text-primary" />
                  Roots & Loyalty
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nordestino from Bahia. My core team has been with me for 10+
                  years across three consecutive ventures — Captalys, a55 Credit,
                  a55 Payments. Not retention strategy; family.
                </p>
              </div>
              <div className="border border-border/60 bg-card/50 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  Hands-On Leader
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I review PRs, pair-program on hard problems, debug production
                  at 3 a.m. I never delegate what I'm not willing to do myself.
                  Leadership is presence earned through effort.
                </p>
              </div>
              <div className="border border-border/60 bg-card/50 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  Lead by Example
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I never confront someone's work — I present my own at the
                  highest standard. Quality becomes contagious when the leader
                  demonstrates the extra mile first.
                </p>
              </div>
              <div className="border border-border/60 bg-card/50 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Scale with Trust
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scaled from small squads to 110+ professionals across Brazil
                  and Mexico. Raised $44M USD. Every milestone belongs to the
                  team, never to one person.
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/50">
              <div className="p-4 bg-card border border-border text-center space-y-1">
                <Handshake className="h-5 w-5 text-primary mx-auto" />
                <div className="text-2xl font-mono font-bold text-foreground">10Y</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Same Core Team</div>
              </div>
              <div className="p-4 bg-card border border-border text-center space-y-1">
                <Trophy className="h-5 w-5 text-primary mx-auto" />
                <div className="text-2xl font-mono font-bold text-foreground">3</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Ventures Together</div>
              </div>
              <div className="p-4 bg-card border border-border text-center space-y-1">
                <Users className="h-5 w-5 text-primary mx-auto" />
                <div className="text-2xl font-mono font-bold text-foreground">110+</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Professionals Led</div>
              </div>
              <div className="p-4 bg-card border border-border text-center space-y-1">
                <Code className="h-5 w-5 text-primary mx-auto" />
                <div className="text-2xl font-mono font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Hands-On</div>
              </div>
            </div>
          </TabsContent>

          {/* AI Engineering Tab */}
          <TabsContent value="ai-engineering" className="space-y-8">
            <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 italic">
              "I don't just write code; I orchestrate intelligence."
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-primary/20 bg-primary/5 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  Agent Orchestration
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Orchestrating swarms of AI agents for code generation,
                  automated testing, security auditing, and deployment — all
                  coordinated by a human architect.
                </p>
              </div>
              <div className="border border-primary/20 bg-primary/5 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  70% Faster Delivery
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pioneering AI-assisted methodology that accelerates delivery
                  while maintaining enterprise-grade quality. Velocity of a
                  50-person team with a fraction of the headcount.
                </p>
              </div>
              <div className="border border-primary/20 bg-primary/5 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  Rust for Safety
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leveraging Rust for systems-level performance and memory
                  safety. Combined with AI agents for velocity — the best of
                  both worlds.
                </p>
              </div>
              <div className="border border-primary/20 bg-primary/5 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  Full Pipeline
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From prompt engineering to production deployment. Claude/GPT
                  orchestration, Cursor IDE, automated code review, CI/CD
                  integration.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
