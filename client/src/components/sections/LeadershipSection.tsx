import { Users, Handshake, Trophy, Code, Cpu, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowIWorkSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="how-i-work" ref={sectionRef} className="scroll-mt-24 space-y-10 opacity-0">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Users className="h-7 w-7 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-mono">
            {t.howIWork.title}
          </h2>
        </div>

        <Tabs defaultValue="leadership" className="w-full">
          <TabsList className="font-mono mb-8">
            <TabsTrigger value="leadership" className="font-mono text-xs">
              {t.howIWork.tabLeadership}
            </TabsTrigger>
            <TabsTrigger value="ai-engineering" className="font-mono text-xs">
              {t.howIWork.tabAI}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leadership" className="space-y-8">
            <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 italic">
              {t.howIWork.leaderQuote}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-border/60 bg-card/50 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Handshake className="h-4 w-4 text-primary" />
                  {t.howIWork.rootsTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.howIWork.rootsDesc}</p>
              </div>
              <div className="border border-border/60 bg-card/50 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  {t.howIWork.handsOnTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.howIWork.handsOnDesc}</p>
              </div>
              <div className="border border-border/60 bg-card/50 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  {t.howIWork.leadByTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.howIWork.leadByDesc}</p>
              </div>
              <div className="border border-border/60 bg-card/50 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  {t.howIWork.scaleTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.howIWork.scaleDesc}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/50">
              <div className="p-4 bg-card border border-border text-center space-y-1">
                <Handshake className="h-5 w-5 text-primary mx-auto" />
                <div className="text-2xl font-mono font-bold text-foreground">10Y</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">{t.howIWork.metricTeam}</div>
              </div>
              <div className="p-4 bg-card border border-border text-center space-y-1">
                <Trophy className="h-5 w-5 text-primary mx-auto" />
                <div className="text-2xl font-mono font-bold text-foreground">3</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">{t.howIWork.metricVentures}</div>
              </div>
              <div className="p-4 bg-card border border-border text-center space-y-1">
                <Users className="h-5 w-5 text-primary mx-auto" />
                <div className="text-2xl font-mono font-bold text-foreground">110+</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">{t.howIWork.metricLed}</div>
              </div>
              <div className="p-4 bg-card border border-border text-center space-y-1">
                <Code className="h-5 w-5 text-primary mx-auto" />
                <div className="text-2xl font-mono font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">{t.howIWork.metricHandsOn}</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-engineering" className="space-y-8">
            <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 italic">
              {t.howIWork.aiQuote}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-primary/20 bg-primary/5 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  {t.howIWork.agentTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.howIWork.agentDesc}</p>
              </div>
              <div className="border border-primary/20 bg-primary/5 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  {t.howIWork.fasterTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.howIWork.fasterDesc}</p>
              </div>
              <div className="border border-primary/20 bg-primary/5 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  {t.howIWork.rustTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.howIWork.rustDesc}</p>
              </div>
              <div className="border border-primary/20 bg-primary/5 p-5 space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  {t.howIWork.pipelineTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.howIWork.pipelineDesc}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">Claude / GPT Orchestration</Badge>
              <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">Cursor IDE + Agent Swarms</Badge>
              <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">Rust + Python Pipeline</Badge>
              <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">Automated Code Review</Badge>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
