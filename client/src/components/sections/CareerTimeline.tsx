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

interface CareerEntry {
  id: string;
  company: string;
  title: string;
  period: string;
  isCurrent: boolean;
  icon: React.ReactNode;
  summary: string;
  strategies: string[];
  techStack: string[];
  metrics?: string[];
}

const careerData: CareerEntry[] = [
  {
    id: "a55-payments",
    company: "a55 Payments",
    title: "CTO",
    period: "2024 - Present",
    isCurrent: true,
    icon: <Zap className="size-4" />,
    summary:
      "Leading the strategic pivot from credit to payment orchestration. Hands-on leadership leveraging AI agent swarms to maintain high-velocity development with a lean team.",
    strategies: [
      "Smart Routing",
      "Acquirer Aggregation",
      "Split Payment Orchestration",
      "Reconciliation Engine",
      "Chargeback Management",
    ],
    techStack: [
      "Rust",
      "Python",
      "TypeScript",
      "Kubernetes",
      "AWS",
      "Terraform",
      "AI Agents",
      "PCI-DSS",
    ],
    metrics: [
      "70% faster time-to-market",
      "Agent Engineering pioneer",
      "PCI-DSS Level 1",
    ],
  },
  {
    id: "a55-credit",
    company: "a55 Credit",
    title: "Co-Founder & CTO",
    period: "2019 - 2023",
    isCurrent: false,
    icon: <Globe className="size-4" />,
    summary:
      "Built fintech from zero to unicorn trajectory. Scaled team from 3 to 110+ engineers across Brazil and Mexico. Launched LatAm's first DeFi-integrated debt operation.",
    strategies: [
      "DeFi Tokenization (ERC-20/721)",
      "Credit Scoring Models",
      "FIDC Structuring",
      "Receivables Factoring",
      "Structured Credit Products",
    ],
    techStack: [
      "Python",
      "TypeScript",
      "Node.js",
      "React",
      "AWS",
      "Solidity",
      "Centrifuge Protocol",
      "PostgreSQL",
      "MongoDB",
      "Kubernetes",
    ],
    metrics: [
      "R$500M+ processed",
      "$44M raised (Series A+B)",
      "20,000+ companies served",
      "110+ engineers",
    ],
  },
  {
    id: "captalys",
    company: "Captalys",
    title: "CTO",
    period: "2016 - 2018",
    isCurrent: false,
    icon: <Database className="size-4" />,
    summary:
      "Pioneered Embedded Finance in Brazil. Architected credit portfolio management systems for FIDC structures with direct Central Bank integration.",
    strategies: [
      "FIDC Structuring",
      "Receivables Factoring",
      "Credit Scoring Models",
      "Anti-fraud Detection",
    ],
    techStack: [
      "Python",
      "Node.js",
      "Angular",
      "PostgreSQL",
      "BACEN API",
      "CVM Compliance",
    ],
    metrics: ["Pioneer in Embedded Finance", "Central Bank API integration"],
  },
  {
    id: "infinity-asset",
    company: "Infinity Asset",
    title: "Partner & Consultant",
    period: "2015 - 2016",
    isCurrent: false,
    icon: <Activity className="size-4" />,
    summary:
      "Developed specialized execution systems for DI Futures spreads with DV01 sensitivity analysis and real-time NAV calculation engines.",
    strategies: [
      "DV01 Sensitivity",
      "Calendar Spread",
      "DI Spread Trading",
      "Basis Trading",
    ],
    techStack: ["C++", "Python", "Bloomberg Terminal", "B3 DMA"],
  },
  {
    id: "infestus-capital",
    company: "Infestus Capital",
    title: "Proprietary Trader",
    period: "2013 - 2015",
    isCurrent: false,
    icon: <Zap className="size-4" />,
    summary:
      "High-frequency proprietary trading from colocated servers inside B3's data center. Every line of code had direct P&L consequences.",
    strategies: [
      "Market Making",
      "Odd Lot Arbitrage",
      "Penny Jumping",
      "Latency Arbitrage",
      "Box Spread",
      "ADR Arbitrage",
      "Delta Hedging",
      "Gamma Scalping",
      "Volatility Arbitrage",
    ],
    techStack: [
      "C++",
      "Prolog",
      "Colocation (B3 Equinix SP4)",
      "FPGA Feed Handlers",
      "Kernel Bypass",
      "Lock-free Data Structures",
      "UDP Multicast",
    ],
    metrics: [
      "Microsecond execution",
      "Risk-neutral strategies",
      "Direct P&L ownership",
    ],
  },
  {
    id: "dlm-invista",
    company: "DLM Invista",
    title: "Quant Developer",
    period: "2011 - 2013",
    isCurrent: false,
    icon: <Code className="size-4" />,
    summary:
      "Built execution algorithms for Box Spread strategies (risk-neutral options arbitrage) and internal OMS systems on the buy-side.",
    strategies: [
      "Box Spread",
      "Statistical Arbitrage",
      "Pairs Trading",
      "Forward Rate Arbitrage (FRC/FRO)",
      "Momentum Ignition",
      "Dark Pool Execution",
    ],
    techStack: [
      "C++",
      "Prolog",
      "FIX Protocol",
      "OMS Development",
      "B3 Gateway",
    ],
  },
  {
    id: "banco-fator",
    company: "Banco Fator",
    title: "Quant Developer",
    period: "2009 - 2011",
    isCurrent: false,
    icon: <Network className="size-4" />,
    summary:
      "Modernized electronic trading desk, elevating futures volume ranking from 12th to 4th place. Coordinated first development team.",
    strategies: [
      "Cash & Carry",
      "Mean Reversion",
      "VWAP",
      "TWAP",
      "Pairs Trading",
      "Calendar Spread",
      "Butterfly Spread",
      "Casado (DI x USD)",
      "Index Arbitrage",
      "Statistical Arbitrage",
      "Order Book Imbalance",
    ],
    techStack: [
      "Java",
      "Oracle",
      "C++",
      "Bloomberg API/EMSX",
      "Reuters Elektron",
      "SunGard BRASS/GMI",
      "CEP Engine",
    ],
    metrics: [
      "12th → 4th in futures volume",
      "First team leadership",
      "Fator Securities (NY office)",
    ],
  },
  {
    id: "link-investimentos",
    company: "Link Investimentos (acquired by UBS)",
    title: "Electronic Trading Specialist",
    period: "2008 - 2009",
    isCurrent: false,
    icon: <Lock className="size-4" />,
    summary:
      "FIX Protocol specialist building DMA infrastructure for institutional access to B3 liquidity.",
    strategies: ["DMA Connectivity", "Order Routing", "Drop Copy"],
    techStack: [
      "FIX Protocol 4.2/4.4",
      "DMA Gateway",
      "Market Data Feed Handlers",
      "Disaster Recovery",
    ],
  },
];

export default function CareerTimeline() {
  return (
    <section id="career" className="py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="size-5 text-primary" />
            <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase">
              CAREER_LOG
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base font-mono">
            A chronological record of roles, strategies, and technical
            evolution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />

          <Accordion type="single" collapsible className="space-y-0">
            {careerData.map((entry) => (
              <div key={entry.id} className="relative pl-8">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-[22px] z-10 size-[15px] border-2 ${
                    entry.isCurrent
                      ? "border-primary bg-primary shadow-[0_0_8px_rgba(0,230,118,0.5)]"
                      : "border-muted-foreground/40 bg-background"
                  }`}
                />

                <AccordionItem
                  value={entry.id}
                  className="border-b border-border/50"
                >
                  <AccordionTrigger className="py-5 hover:no-underline group">
                    <div className="flex flex-1 items-start justify-between gap-4 pr-2">
                      {/* Left: company + title */}
                      <div className="flex flex-col items-start gap-1 text-left">
                        <span className="font-mono text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {entry.company}
                        </span>
                        <span className="text-xs md:text-sm text-muted-foreground flex items-center gap-1.5">
                          {entry.icon}
                          {entry.title}
                        </span>
                      </div>

                      {/* Right: period badge */}
                      <Badge
                        variant={entry.isCurrent ? "default" : "outline"}
                        className={`shrink-0 font-mono text-[10px] md:text-xs ${
                          entry.isCurrent
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground border-border"
                        }`}
                      >
                        {entry.period}
                      </Badge>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6">
                    <div className="space-y-5">
                      {/* Summary */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {entry.summary}
                      </p>

                      {/* Strategies */}
                      <div>
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Strategies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {entry.strategies.map((strategy) => (
                            <Badge
                              key={strategy}
                              variant="secondary"
                              className="font-mono text-[10px] md:text-xs bg-secondary text-secondary-foreground border border-border"
                            >
                              {strategy}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {entry.techStack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="font-mono text-[10px] text-muted-foreground border-border/60"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Metrics */}
                      {entry.metrics && entry.metrics.length > 0 && (
                        <div>
                          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                            Key Metrics
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {entry.metrics.map((metric) => (
                              <span
                                key={metric}
                                className="inline-flex items-center gap-1.5 font-mono text-[10px] md:text-xs text-primary"
                              >
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
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
