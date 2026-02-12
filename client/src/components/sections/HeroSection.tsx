import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense, lazy } from "react";
import TerminalEmulator from "@/components/terminal/TerminalEmulator";
import { useCountUp } from "@/hooks/useScrollReveal";

const ParticleField = lazy(() => import("@/components/canvas/ParticleField"));

export default function HeroSection() {
  const creditRef = useCountUp(500, "M+");
  const raisedRef = useCountUp(44, "M");
  const teamRef = useCountUp(110, "+");
  const yearsRef = useCountUp(17, "Y");

  return (
    <section id="hero" className="relative min-h-screen bg-background text-foreground">
      {/* Particle Background */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Sticky Header Nav */}
      <header className="relative border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter">
            <Terminal className="h-5 w-5 text-primary" />
            <span>
              ANDRE_SILVA
              <span className="text-primary animate-pulse">_</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a
              href="#full-story"
              className="hover:text-primary transition-colors"
            >
              FULL_STORY
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              CAREER_LOG
            </a>
            <a
              href="#strategies"
              className="hover:text-primary transition-colors"
            >
              STRATEGY_COMPENDIUM
            </a>
            <a
              href="#tech-arsenal"
              className="hover:text-primary transition-colors"
            >
              TECH_ARSENAL
            </a>
            <a
              href="#recent-projects"
              className="hover:text-primary transition-colors"
            >
              RECENT_BUILDS
            </a>
            <a
              href="#about-me"
              className="hover:text-primary transition-colors"
            >
              ABOUT_ME
            </a>
            <a
              href="#leadership"
              className="hover:text-primary transition-colors"
            >
              LEADERSHIP
            </a>
            <Button
              variant="outline"
              className="font-mono text-xs h-8 border-primary/50 text-primary hover:bg-primary/10"
            >
              DOWNLOAD_RESUME.pdf
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Hero Grid */}
      <main className="relative container py-12 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              SYSTEMS_ONLINE // OPEN_TO_WORK
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
              QUANTITATIVE <br />
              <span className="text-muted-foreground">ARCHITECT</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              C-Level Executive &amp; Hands-on CTO bridging the gap between{" "}
              <span className="text-foreground font-medium">
                high-frequency trading systems
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                modern fintech scale
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="font-mono text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none"
              >
                <Terminal className="mr-2 h-4 w-4" />
                INITIATE_CONTACT
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-base h-12 px-8 rounded-none border-border hover:bg-accent"
                asChild
              >
                <a href="#recent-projects">VIEW_PROJECTS</a>
              </Button>
            </div>

            {/* Key Metrics Ticker — GSAP animated count-up */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/50">
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-mono font-bold text-foreground">R$</span>
                  <div ref={creditRef} className="text-2xl font-mono font-bold text-foreground">0</div>
                </div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Processed</div>
              </div>
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-mono font-bold text-foreground">$</span>
                  <div ref={raisedRef} className="text-2xl font-mono font-bold text-foreground">0</div>
                </div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Raised</div>
              </div>
              <div>
                <div ref={teamRef} className="text-2xl font-mono font-bold text-foreground">0</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Team Size</div>
              </div>
              <div>
                <div ref={yearsRef} className="text-2xl font-mono font-bold text-foreground">0</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column — Terminal Emulator */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-card border border-border p-6 overflow-hidden group">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative h-full">
              <TerminalEmulator />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
