import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Category =
  | "HFT"
  | "ARBITRAGE"
  | "EXECUTION"
  | "MICROSTRUCTURE"
  | "CREDIT"
  | "PAYMENTS";

interface Strategy {
  name: string;
  category: Category;
  description: string;
  tags: string[];
}

// ---------------------------------------------------------------------------
// Data — every strategy André has worked with
// ---------------------------------------------------------------------------

const strategies: Strategy[] = [
  // ── HFT ──────────────────────────────────────────────────────────────────
  {
    name: "Market Making",
    category: "HFT",
    description:
      "Continuous bid/ask quoting, profiting from spread.",
    tags: ["C++", "Colocation", "FIX"],
  },
  {
    name: "Odd Lot Arbitrage",
    category: "HFT",
    description:
      "Exploiting fracionário vs standard market price gaps.",
    tags: ["C++", "B3", "Low-latency"],
  },
  {
    name: "Penny Jumping",
    category: "HFT",
    description:
      "Front-running large institutional orders via spread capture.",
    tags: ["C++", "Order Book", "HFT"],
  },
  {
    name: "Latency Arbitrage",
    category: "HFT",
    description:
      "Exploiting feed delay between venues.",
    tags: ["Colocation", "FPGA", "Kernel Bypass"],
  },
  {
    name: "Momentum Ignition",
    category: "HFT",
    description:
      "Triggering short-term directional price moves.",
    tags: ["CEP", "Real-time", "Algo"],
  },
  {
    name: "Quote Stuffing Detection",
    category: "HFT",
    description:
      "Identifying and filtering predatory order noise.",
    tags: ["UDP Multicast", "Feed Handler"],
  },

  // ── ARBITRAGE ────────────────────────────────────────────────────────────
  {
    name: "Cash & Carry",
    category: "ARBITRAGE",
    description: "Spot vs futures basis arbitrage.",
    tags: ["Java", "B3", "Futures"],
  },
  {
    name: "Box Spread",
    category: "ARBITRAGE",
    description: "4-point risk-neutral options arbitrage.",
    tags: ["C++", "Options", "Prolog"],
  },
  {
    name: "ADR Arbitrage",
    category: "ARBITRAGE",
    description:
      "BR equity vs NY depositary receipt pricing.",
    tags: ["FIX", "NYSE", "B3"],
  },
  {
    name: "Statistical Arbitrage",
    category: "ARBITRAGE",
    description:
      "Probabilistic mean-reversion on correlated pairs.",
    tags: ["Python", "ML", "TimeSeries"],
  },
  {
    name: "Pairs Trading",
    category: "ARBITRAGE",
    description:
      "Correlated asset divergence/convergence.",
    tags: ["Cointegration", "Kalman Filter"],
  },
  {
    name: "Index Arbitrage",
    category: "ARBITRAGE",
    description:
      "ETF/futures vs underlying basket pricing.",
    tags: ["CEP", "Real-time"],
  },
  {
    name: "Triangular FX Arbitrage",
    category: "ARBITRAGE",
    description: "Cross-currency rate discrepancy.",
    tags: ["FIX", "Multi-venue"],
  },
  {
    name: "Forward Rate Arbitrage (FRC/FRO)",
    category: "ARBITRAGE",
    description: "DI x USD cupom cambial spread.",
    tags: ["B3", "Derivatives"],
  },
  {
    name: "DI Spread Trading (DDI)",
    category: "ARBITRAGE",
    description: "Interest rate differential strategies.",
    tags: ["DI Futures", "B3"],
  },
  {
    name: "Volatility Arbitrage",
    category: "ARBITRAGE",
    description:
      "Options implied vs realized vol trading.",
    tags: ["Greeks", "Black-Scholes"],
  },
  {
    name: "Calendar Spread",
    category: "ARBITRAGE",
    description: "Same asset, different expiry.",
    tags: ["DI Futures", "Term Structure"],
  },
  {
    name: "Butterfly Spread",
    category: "ARBITRAGE",
    description: "3-maturity yield curve curvature.",
    tags: ["Fixed Income", "B3"],
  },
  {
    name: "Basis Trading",
    category: "ARBITRAGE",
    description: "Spot-futures basis convergence.",
    tags: ["Futures", "Carry"],
  },

  // ── EXECUTION ────────────────────────────────────────────────────────────
  {
    name: "VWAP",
    category: "EXECUTION",
    description:
      "Volume-weighted average price execution.",
    tags: ["Algo", "Smart Routing"],
  },
  {
    name: "TWAP",
    category: "EXECUTION",
    description:
      "Time-weighted average price execution.",
    tags: ["Algo", "Scheduling"],
  },
  {
    name: "Dark Pool Execution",
    category: "EXECUTION",
    description:
      "Private venue large-block execution.",
    tags: ["FIX", "Anonymity"],
  },
  {
    name: "Smart Routing",
    category: "EXECUTION",
    description:
      "Multi-acquirer transaction optimization.",
    tags: ["Payments", "ML"],
  },
  {
    name: "Order Book Imbalance",
    category: "EXECUTION",
    description:
      "Predicting short-term direction from book pressure.",
    tags: ["Microstructure", "Real-time"],
  },

  // ── MICROSTRUCTURE ───────────────────────────────────────────────────────
  {
    name: "Casado (DI x USD)",
    category: "MICROSTRUCTURE",
    description:
      "Brazilian structured interest/FX trade.",
    tags: ["B3", "Derivatives"],
  },
  {
    name: "Delta Hedging",
    category: "MICROSTRUCTURE",
    description:
      "Continuous options delta neutralization.",
    tags: ["Greeks", "Real-time"],
  },
  {
    name: "Gamma Scalping",
    category: "MICROSTRUCTURE",
    description:
      "Profiting from gamma in delta-hedged positions.",
    tags: ["Options", "Volatility"],
  },
  {
    name: "DV01 Sensitivity",
    category: "MICROSTRUCTURE",
    description:
      "DI futures interest rate risk management.",
    tags: ["Fixed Income", "Risk"],
  },

  // ── CREDIT ───────────────────────────────────────────────────────────────
  {
    name: "FIDC Structuring",
    category: "CREDIT",
    description:
      "Receivables securitization fund management.",
    tags: ["Python", "Node.js", "CVM"],
  },
  {
    name: "Receivables Factoring",
    category: "CREDIT",
    description:
      "Automated receivables anticipation.",
    tags: ["ML", "Anti-fraud", "BACEN"],
  },
  {
    name: "Credit Scoring Models",
    category: "CREDIT",
    description:
      "ML-based creditworthiness assessment.",
    tags: ["Python", "XGBoost", "Data"],
  },
  {
    name: "DeFi Tokenization",
    category: "CREDIT",
    description:
      "ERC-20/721 credit asset tokenization.",
    tags: ["Solidity", "Centrifuge", "Web3"],
  },

  // ── PAYMENTS ─────────────────────────────────────────────────────────────
  {
    name: "Split Payment Orchestration",
    category: "PAYMENTS",
    description:
      "Multi-party transaction splitting for marketplaces.",
    tags: ["Rust", "API"],
  },
  {
    name: "Acquirer Aggregation",
    category: "PAYMENTS",
    description: "Multi-provider payment routing.",
    tags: ["PCI-DSS", "Gateway"],
  },
  {
    name: "Reconciliation Engine",
    category: "PAYMENTS",
    description:
      "Automated payment matching and settlement.",
    tags: ["Rust", "Event-driven"],
  },
  {
    name: "Chargeback Management",
    category: "PAYMENTS",
    description: "Dispute resolution automation.",
    tags: ["ML", "Rules Engine"],
  },
];

// ---------------------------------------------------------------------------
// Filter categories
// ---------------------------------------------------------------------------

const FILTER_OPTIONS = [
  "ALL",
  "HFT",
  "ARBITRAGE",
  "EXECUTION",
  "MICROSTRUCTURE",
  "CREDIT",
  "PAYMENTS",
] as const;

type FilterOption = (typeof FILTER_OPTIONS)[number];

// ---------------------------------------------------------------------------
// Category colour map — neon accents on dark surfaces
// ---------------------------------------------------------------------------

const categoryColor: Record<Category, string> = {
  HFT: "bg-[#00E676]/15 text-[#00E676] border-[#00E676]/30",
  ARBITRAGE: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  EXECUTION: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  MICROSTRUCTURE: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  CREDIT: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  PAYMENTS: "bg-sky-500/15 text-sky-400 border-sky-500/30",
};

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: -12 },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function StrategiesShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("ALL");

  const filtered =
    activeFilter === "ALL"
      ? strategies
      : strategies.filter((s) => s.category === activeFilter);

  return (
    <section
      id="strategies"
      className="relative w-full bg-neutral-950 py-24 md:py-32"
    >
      {/* Subtle top-border glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E676]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className="mb-12 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-[#00E676]" />
          <h2 className="font-mono text-2xl font-bold tracking-tight text-white md:text-3xl">
            STRATEGY_COMPENDIUM
          </h2>
          <span className="ml-auto font-mono text-sm text-neutral-500">
            {filtered.length}/{strategies.length}
          </span>
        </div>

        {/* ── Filters ──────────────────────────────────────────────────── */}
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((option) => {
            const isActive = activeFilter === option;
            return (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`
                  cursor-pointer rounded-md border px-3 py-1.5 font-mono text-xs font-medium tracking-wide
                  transition-all duration-200
                  ${
                    isActive
                      ? "border-[#00E676]/60 bg-[#00E676]/15 text-[#00E676] shadow-[0_0_12px_rgba(0,230,118,0.15)]"
                      : "border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200"
                  }
                `}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* ── Grid ─────────────────────────────────────────────────────── */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((strategy) => (
              <motion.div
                key={strategy.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                transition={{ type: "spring", stiffness: 340, damping: 28 }}
              >
                <Card className="group h-full border-neutral-800 bg-neutral-900/80 backdrop-blur-sm transition-colors duration-200 hover:border-neutral-700">
                  <CardContent className="flex h-full flex-col gap-3">
                    {/* Category badge */}
                    <Badge
                      variant="outline"
                      className={`w-fit font-mono text-[10px] uppercase tracking-widest ${categoryColor[strategy.category]}`}
                    >
                      {strategy.category}
                    </Badge>

                    {/* Strategy name */}
                    <h3 className="font-mono text-sm font-semibold leading-snug text-white">
                      {strategy.name}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs leading-relaxed text-neutral-400">
                      {strategy.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {strategy.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border border-neutral-700/60 bg-neutral-800 px-1.5 py-0 font-mono text-[10px] text-neutral-400"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
