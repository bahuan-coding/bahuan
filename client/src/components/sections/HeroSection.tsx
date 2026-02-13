import { useState } from "react";
import { Terminal, Mail, ArrowDown, Download, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense, lazy } from "react";
import { useCountUp } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ParticleField = lazy(() => import("@/components/canvas/ParticleField"));

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang } = useLanguage();
  const creditRef = useCountUp(500, "M+");
  const raisedRef = useCountUp(44, "M");
  const teamRef = useCountUp(110, "+");
  const yearsRef = useCountUp(17, "Y");

  const NAV_ITEMS = [
    { href: "#full-story", label: t.nav.story },
    { href: "#career", label: t.nav.career },
    { href: "#strategies", label: t.nav.expertise },
    { href: "#tech-arsenal", label: t.nav.tech },
    { href: "#recent-projects", label: t.nav.projects },
    { href: "#about-me", label: t.nav.about },
    { href: "#how-i-work", label: t.nav.howIWork },
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-background text-foreground">
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Sticky Header */}
      <header className="relative border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter shrink-0">
            <Terminal className="h-5 w-5 text-primary" />
            <span>
              ANDRE_SILVA
              <span className="text-primary animate-pulse">_</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm font-medium text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}

            {/* Resume dropdown with EN/PT options */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="font-mono text-xs h-8 border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Download className="mr-1.5 h-3 w-3" />
                  {t.nav.resume}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="font-mono text-xs">
                <DropdownMenuItem asChild>
                  <a href="/Andre_Silva_Resume_2026_Final.pdf" download className="flex items-center gap-2">
                    <svg viewBox="0 0 512 512" className="h-4 w-4 rounded-full shrink-0">
                      <rect width="512" height="512" fill="#002868" />
                      <g fill="#bf0a30"><rect y="40" width="512" height="39" /><rect y="118" width="512" height="39" /><rect y="197" width="512" height="39" /><rect y="276" width="512" height="39" /><rect y="355" width="512" height="39" /><rect y="434" width="512" height="39" /></g>
                      <g fill="#fff"><rect y="79" width="512" height="39" /><rect y="158" width="512" height="39" /><rect y="237" width="512" height="39" /><rect y="316" width="512" height="39" /><rect y="394" width="512" height="39" /><rect y="473" width="512" height="39" /></g>
                      <rect width="224" height="276" fill="#002868" />
                    </svg>
                    English CV
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/Andre_Silva_Curriculo_2026_Final.pdf" download className="flex items-center gap-2">
                    <svg viewBox="0 0 512 512" className="h-4 w-4 rounded-full shrink-0">
                      <rect width="512" height="512" fill="#009c3b" />
                      <polygon points="256,68 488,256 256,444 24,256" fill="#ffdf00" />
                      <circle cx="256" cy="256" r="96" fill="#002776" />
                      <path d="M160,256 Q208,220 256,248 Q304,276 352,240" fill="none" stroke="#fff" strokeWidth="12" />
                    </svg>
                    Currículo PT
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <LanguageSwitcher />
          </nav>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-border/40 bg-background/98 backdrop-blur px-4 py-4 space-y-1">
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
              English CV
            </a>
            <a
              href="/Andre_Silva_Curriculo_2026_Final.pdf"
              download
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-primary"
            >
              <Download className="inline mr-1.5 h-3.5 w-3.5" />
              Currículo PT
            </a>
          </nav>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left — Text (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <a
              href="https://www.upwork.com/freelancers/~01af47aeae5059545d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-primary hover:bg-primary/10 hover:border-primary/40 transition-colors"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              {t.hero.badge}
            </a>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
              {t.hero.title1} <br />
              <span className="text-muted-foreground">{t.hero.title2}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              {t.hero.subtitle}{" "}
              <span className="text-foreground font-medium">{t.hero.subtitleHighlight1}</span>{" "}
              {t.hero.subtitleAnd}{" "}
              <span className="text-foreground font-medium">{t.hero.subtitleHighlight2}</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="font-mono text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none"
                asChild
              >
                <a href="mailto:alsilva86@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.hero.cta}
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
                  {t.hero.viewProjects}
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
                <div className="text-xs text-muted-foreground font-mono uppercase">{t.hero.metricProcessed}</div>
              </div>
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-mono font-bold text-foreground">$</span>
                  <div ref={raisedRef} className="text-2xl font-mono font-bold text-foreground">0</div>
                </div>
                <div className="text-xs text-muted-foreground font-mono uppercase">{t.hero.metricRaised}</div>
              </div>
              <div>
                <div ref={teamRef} className="text-2xl font-mono font-bold text-foreground">0</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">{t.hero.metricTeam}</div>
              </div>
              <div>
                <div ref={yearsRef} className="text-2xl font-mono font-bold text-foreground">0</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">{t.hero.metricExperience}</div>
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
                {t.hero.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
