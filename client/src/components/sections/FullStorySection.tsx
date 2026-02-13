import { useState } from "react";
import { BookOpen, Zap, TrendingUp, Globe, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Zap, TrendingUp, CreditCard, Globe, ArrowRight, Zap];
const numbers = ["01", "02", "03", "04", "05", "06"];

export default function FullStorySection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const milestones = t.fullStory.milestones.map((m, i) => ({
    ...m,
    icon: icons[i],
    number: numbers[i],
  }));

  return (
    <section id="full-story" ref={sectionRef} className="scroll-mt-24 space-y-10 opacity-0">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <BookOpen className="h-7 w-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-mono">
              {t.fullStory.title}
            </h2>
          </div>
          <Button
            variant="outline"
            className="font-mono text-xs border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => setOpen(true)}
          >
            <BookOpen className="mr-1.5 h-3.5 w-3.5" />
            {t.fullStory.readFull}
          </Button>
        </div>

        {/* Quote */}
        <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 italic max-w-3xl">
          {t.fullStory.quote}
        </p>

        {/* Milestone Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.number}
                className="group border border-border/60 bg-card/50 p-5 space-y-3 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-mono font-bold text-sm">{m.number}</span>
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{m.period}</span>
                </div>
                <h3 className="font-mono text-sm font-semibold text-foreground leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.summary}</p>
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="h-1 w-1 bg-primary shrink-0" />
                  <span className="text-xs font-mono text-primary">{m.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="text-center md:hidden">
          <Button
            variant="ghost"
            className="font-mono text-xs text-primary"
            onClick={() => setOpen(true)}
          >
            {t.fullStory.readComplete}
          </Button>
        </div>
      </div>

      {/* Full Story Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] p-0 gap-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-mono text-xl flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              {t.fullStory.dialogTitle}
            </DialogTitle>
            <DialogDescription>
              {t.fullStory.dialogDesc}
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="h-[70vh] px-6 pb-6">
            <div className="prose prose-invert prose-lg max-w-none font-sans leading-relaxed text-muted-foreground pt-6">
              <p className="text-xl text-foreground font-medium border-l-4 border-primary pl-6 italic">
                {t.fullStory.quote}
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">01.</span> {t.fullStory.chapter1Title}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter1P1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter1P2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter1P3 }} />

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">02.</span> {t.fullStory.chapter2Title}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter2P1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter2P2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter2P3 }} />

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">03.</span> {t.fullStory.chapter3Title}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter3P1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter3P2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter3P3 }} />

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">04.</span> {t.fullStory.chapter4Title}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter4P1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter4P2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter4P3 }} />

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">05.</span> {t.fullStory.chapter5Title}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter5P1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter5P2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.fullStory.chapter5P3 }} />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}
