import { useState } from "react";
import { Terminal, Mail, ArrowDown, Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense, lazy } from "react";
import { useCountUp } from "@/hooks/useScrollReveal";

const ParticleField = lazy(() => import("@/components/canvas/ParticleField"));

const NAV_ITEMS = [
  { href: "#full-story", label: "Story" },
  { href: "#career", label: "Career" },
  { href: "#strategies", label: "Expertise" },
  { href: "#tech-arsenal", label: "Tech" },
  { href: "#recent-projects", label: "Projects" },
  { href: "#about-me", label: "About" },
  { href: "#how-i-work", label: "How I Work" },
];

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const creditRef = useCountUp(500, "M+");
  const raisedRef = useCountUp(44, "M");
  const teamRef = useCountUp(110, "+");
  const yearsRef = useCountUp(17, "Y");

  return (
    <section id="hero" className="relative min-h-screen bg-background text-foreground">
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Sticky Header */}
      <header className="relative border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter">
            <Terminal className="h-5 w-5 text-primary" />
            <span>
              ANDRE_SILVA
              <span className="text-primary animate-pulse">_</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="font-mono text-xs h-8 border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href="/Andre_Silva_Resume_2026_Final.pdf" download>
                <Download className="mr-1.5 h-3 w-3" />
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border/40 bg-background/98 backdrop-blur px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Andre_Silva_Resume_2026_Final.pdf"
              download
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-primary"
            >
              <Download className="inline mr-1.5 h-3.5 w-3.5" />
              Download Resume
            </a>
          </nav>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left — Text (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              OPEN TO WORK
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
              QUANTITATIVE <br />
              <span className="text-muted-foreground">ARCHITECT</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              C-Level Executive &amp; Hands-on CTO bridging the gap between{" "}
              <span className="text-foreground font-medium">high-frequency trading systems</span>{" "}
              and <span className="text-foreground font-medium">modern fintech scale</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="font-mono text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none"
                asChild
              >
                <a href="mailto:alsilva86@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-base h-12 px-8 rounded-none border-border hover:bg-accent"
                asChild
              >
                <a href="#recent-projects">
                  <ArrowDown className="mr-2 h-4 w-4" />
                  View Projects
                </a>
              </Button>
            </div>

            {/* Metrics */}
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

          {/* Right — Photo (2 cols) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-sm" />
              <img
                src="/andre-silva.jpg"
                alt="André Silva"
                className="relative w-full max-w-xs md:max-w-sm aspect-[3/4] object-cover border-2 border-primary/60 shadow-lg shadow-primary/20"
              />
              <p className="mt-3 font-mono text-xs text-muted-foreground text-center">
                São Paulo, Brazil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
