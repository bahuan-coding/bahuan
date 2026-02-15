import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Globe,
  Database,
  Network,
  Zap,
  Activity,
  Lock,
  Code,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CareerEntry {
  id: string;
  company: string;
  title: string;
  period: string;
  isCurrent: boolean;
  icon: React.ReactNode;
  strategies: string[];
  techStack: string[];
}

const careerData: CareerEntry[] = [
  {
    id: "a55-payments",
    company: "a55 Payments",
    title: "CTO",
    period: "2024",
    isCurrent: true,
    icon: <Zap className="size-4" />,
    strategies: ["Payment Orchestration", "Smart Routing", "Direct Card Network Connectivity", "Split Payments", "3DS & AF Controls", "Tokenization", "Recurring Billing", "Reconciliation Engine", "Chargeback Management"],
    techStack: ["Rust", "Python", "TypeScript", "Kubernetes", "AWS", "Terraform", "AI Agent Orchestration", "PCI-DSS L1", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    id: "a55-credit",
    company: "a55 Credit",
    title: "Co-Founder & CTO",
    period: "2019 - 2023",
    isCurrent: false,
    icon: <Globe className="size-4" />,
    strategies: ["DeFi Tokenization (ERC-20/721)", "Credit Scoring Models", "FIDC Structuring", "Receivables Factoring", "Structured Credit Products"],
    techStack: ["Python", "TypeScript", "Node.js", "React", "AWS", "Solidity", "Centrifuge Protocol", "PostgreSQL", "MongoDB", "Kubernetes"],
  },
  {
    id: "captalys",
    company: "Captalys",
    title: "CTO",
    period: "Feb 2016 - Jan 2019",
    isCurrent: false,
    icon: <Database className="size-4" />,
    strategies: ["FIDC Structuring", "Receivables Factoring", "Credit Scoring Models", "Anti-fraud Detection"],
    techStack: ["Python", "Node.js", "Angular", "PostgreSQL", "BACEN API", "CVM Compliance"],
  },
  {
    id: "infestus-infinity",
    company: "Infestus Capital / Infinity Asset Management",
    title: "Proprietary Trader & Systems Partner",
    period: "Dec 2013 - Jan 2016",
    isCurrent: false,
    icon: <Zap className="size-4" />,
    strategies: ["Market Making", "Odd Lot Arbitrage", "Penny Jumping", "Latency Arbitrage", "Box Spread", "ADR Arbitrage", "Delta Hedging", "Gamma Scalping", "Volatility Arbitrage", "DV01 Sensitivity", "DI Spread Trading", "Calendar Spread", "Basis Trading", "Forex Algorithmic Trading"],
    techStack: ["C++", "Prolog", "MQL5 (MetaTrader)", "SaxoBank Platform", "Colocation (B3 Equinix SP4)", "FPGA Feed Handlers", "Kernel Bypass", "Lock-free Data Structures", "UDP Multicast", "Bloomberg Terminal", "B3 DMA"],
  },
  {
    id: "dlm-invista",
    company: "DLM Invista (now Inter Asset / Banco Inter)",
    title: "Quant Developer",
    period: "Feb 2012 - Nov 2013",
    isCurrent: false,
    icon: <Code className="size-4" />,
    strategies: ["Box Spread", "Statistical Arbitrage", "Pairs Trading", "Forward Rate Arbitrage (FRC/FRO)", "Momentum Ignition", "Dark Pool Execution"],
    techStack: ["C++", "Prolog", "FIX Protocol", "OMS Development", "B3 Gateway"],
  },
  {
    id: "banco-fator",
    company: "Banco Fator",
    title: "Quant Developer & Electronic Trading Specialist",
    period: "Jan 2009 - Jan 2012",
    isCurrent: false,
    icon: <Network className="size-4" />,
    strategies: ["Cash & Carry", "Mean Reversion", "VWAP", "TWAP", "Pairs Trading", "Calendar Spread", "Butterfly Spread", "Casado (DI x USD)", "Index Arbitrage", "Statistical Arbitrage", "Order Book Imbalance"],
    techStack: ["Java", "Oracle", "C++", "Bloomberg API/EMSX", "Reuters Elektron", "SunGard BRASS/GMI", "CEP Engine"],
  },
  {
    id: "link-investimentos",
    company: "Link Investimentos (acquired by UBS)",
    title: "Electronic Trading Specialist",
    period: "Jan 2008 - Dec 2008",
    isCurrent: false,
    icon: <Lock className="size-4" />,
    strategies: ["DMA Connectivity", "Order Routing", "Drop Copy"],
    techStack: ["FIX Protocol 4.2/4.4", "DMA Gateway", "Market Data Feed Handlers", "Disaster Recovery"],
  },
];

export default function CareerTimeline() {
  const { t } = useLanguage();

  // Build a map from entry id -> translated summary/metrics
  const entryMap = new Map<string, (typeof t.career.entries)[number]>(
    t.career.entries.map((e) => [e.id, e])
  );

  return (
    <section id="career" className="py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="size-5 text-primary" />
            <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase">
              {t.career.title}
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base font-mono">
            {t.career.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />

          <Accordion type="single" collapsible className="space-y-0">
            {careerData.map((entry) => {
              const translated = entryMap.get(entry.id);
              const summary = translated?.summary ?? "";
              const metrics = translated && "metrics" in translated ? translated.metrics : undefined;
              const period = entry.isCurrent ? `2024 - ${t.career.present}` : entry.period;

              return (
                <div key={entry.id} className="relative pl-8">
                  <div
                    className={`absolute left-0 top-[22px] z-10 size-[15px] border-2 ${
                      entry.isCurrent
                        ? "border-primary bg-primary shadow-[0_0_8px_rgba(0,230,118,0.5)]"
                        : "border-muted-foreground/40 bg-background"
                    }`}
                  />

                  <AccordionItem value={entry.id} className="border-b border-border/50">
                    <AccordionTrigger className="py-5 hover:no-underline group">
                      <div className="flex flex-1 items-start justify-between gap-4 pr-2">
                        <div className="flex flex-col items-start gap-1 text-left">
                          <span className="font-mono text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                            {entry.company}
                          </span>
                          <span className="text-xs md:text-sm text-muted-foreground flex items-center gap-1.5">
                            {entry.icon}
                            {entry.title}
                          </span>
                        </div>
                        <Badge
                          variant={entry.isCurrent ? "default" : "outline"}
                          className={`shrink-0 font-mono text-[10px] md:text-xs ${
                            entry.isCurrent
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground border-border"
                          }`}
                        >
                          {period}
                        </Badge>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6">
                      <div className="space-y-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>

                        <div>
                          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                            {t.career.strategies}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {entry.strategies.map((strategy) => (
                              <Badge key={strategy} variant="secondary" className="font-mono text-[10px] md:text-xs bg-secondary text-secondary-foreground border border-border">
                                {strategy}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                            {t.career.techStack}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {entry.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="font-mono text-[10px] text-muted-foreground border-border/60">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {metrics && metrics.length > 0 && (
                          <div>
                            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                              {t.career.keyMetrics}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {metrics.map((metric) => (
                                <span key={metric} className="inline-flex items-center gap-1.5 font-mono text-[10px] md:text-xs text-primary">
                                  <span className="size-1 bg-primary shrink-0" />
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
