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

const milestones = [
  {
    icon: Zap,
    number: "01",
    period: "2008 - 2011",
    title: "The High-Frequency Foundation",
    summary:
      "FIX Protocol, DMA, and electronic trading at Link Investimentos (acquired by UBS) and Banco Fator. Elevated futures volume ranking from 12th to 4th on B3.",
    metric: "12th → 4th in B3 futures",
  },
  {
    icon: TrendingUp,
    number: "02",
    period: "2011 - 2016",
    title: "The Quant Trader Era",
    summary:
      "Proprietary trading with C++ blackbox systems running on colocated servers inside B3. FPGA feed handlers, kernel bypass, lock-free data structures.",
    metric: "Microsecond execution",
  },
  {
    icon: CreditCard,
    number: "03",
    period: "2016 - 2018",
    title: "Pioneering Embedded Finance",
    summary:
      "CTO at Captalys — architected Brazil's first Embedded Finance operations. FIDC structuring, ML credit scoring, Central Bank API integration.",
    metric: "Pioneer in Embedded Finance",
  },
  {
    icon: Globe,
    number: "04",
    period: "2019 - 2023",
    title: "Scaling a Unicorn: a55 Credit",
    summary:
      "Co-founded a55, built tech from scratch. Latin America's first DeFi-integrated debt operation. Scaled to 110+ engineers across Brazil and Mexico.",
    metric: "R$500M+ processed, $44M raised",
  },
  {
    icon: ArrowRight,
    number: "05",
    period: "2024 - Present",
    title: "The Strategic Pivot: a55 Payments",
    summary:
      "Led transformation into a Payment Orchestration Platform. Pioneered Agent Engineering — AI swarms achieving 70% faster delivery with a lean team.",
    metric: "70% faster time-to-market",
  },
];

export default function FullStorySection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [open, setOpen] = useState(false);

  return (
    <section id="full-story" ref={sectionRef} className="scroll-mt-24 space-y-10 opacity-0">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <BookOpen className="h-7 w-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-mono">
              My Journey
            </h2>
          </div>
          <Button
            variant="outline"
            className="font-mono text-xs border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => setOpen(true)}
          >
            <BookOpen className="mr-1.5 h-3.5 w-3.5" />
            Read Full Story
          </Button>
        </div>

        {/* Quote */}
        <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 italic max-w-3xl">
          "My journey is defined by a relentless pursuit of efficiency — first
          in microseconds on the trading floor, and now in scale and velocity
          within the fintech ecosystem."
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
            Read the complete story →
          </Button>
        </div>
      </div>

      {/* Full Story Dialog — 100% original content preserved */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] p-0 gap-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-mono text-xl flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              The Full Story
            </DialogTitle>
            <DialogDescription>
              The complete journey from electronic trading to fintech leadership.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="h-[70vh] px-6 pb-6">
            <div className="prose prose-invert prose-lg max-w-none font-sans leading-relaxed text-muted-foreground pt-6">
              <p className="text-xl text-foreground font-medium border-l-4 border-primary pl-6 italic">
                "My journey is defined by a relentless pursuit of efficiency—first
                in microseconds on the trading floor, and now in scale and velocity
                within the fintech ecosystem."
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">01.</span> The
                High-Frequency Foundation
              </h3>
              <p>
                My career began at the epicenter of Brazil's financial
                modernization. At <strong>Link Investimentos</strong> (later acquired
                by UBS), I was immersed in the world of{" "}
                <strong>FIX Protocol</strong> and Direct Market Access (
                <strong>DMA</strong>). This wasn't just about connecting cables; it
                was about understanding the heartbeat of the market. I built systems
                that could withstand the immense pressure of high-volatility days,
                ensuring institutional clients had reliable, low-latency access to
                liquidity. Every millisecond counted, and every dropped message was
                unacceptable.
              </p>
              <p>
                This obsession with performance led me to{" "}
                <strong>Banco Fator</strong>, where I was tasked with a monumental
                challenge: modernize the electronic trading desk. We didn't just
                update software; we revolutionized the bank's execution
                capabilities. By implementing{" "}
                <strong>Complex Event Processing (CEP)</strong> engines and
                algorithmic strategies like <em>Cash &amp; Carry</em>,{" "}
                <em>Mean Reversion</em>, <em>VWAP</em>, <em>TWAP</em>,{" "}
                <em>Pairs Trading</em>, <em>Calendar Spread</em>,{" "}
                <em>Butterfly Spread</em>, the Brazilian <em>Casado</em> trade,{" "}
                <em>Statistical Arbitrage</em>, and{" "}
                <em>Order Book Imbalance</em> detection, we propelled the bank from
                12th to <strong>4th place</strong> in futures volume rankings on the
                B3 exchange.
              </p>
              <p>
                I coordinated my first development team here, sustaining critical
                Order Management Systems (OMS) like{" "}
                <strong>Bloomberg Tradebook</strong>, <strong>SunGard</strong>, and{" "}
                <strong>Reuters</strong>. We built dashboards in{" "}
                <strong>Java</strong> and <strong>Oracle</strong>, tropicalizing
                international systems for the Brazilian market. I also worked closely
                with the <strong>Fator Securities</strong> branch in New York,
                building systems for <strong>ADR Arbitrage</strong> and statistical
                models—leveraging <strong>C++</strong> for performance-critical
                components—that allowed foreign investors to apply mean reversion
                strategies to Brazilian assets listed on the NYSE.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">02.</span> The Quant Trader
                Era
              </h3>
              <p>
                Driven by a desire to be closer to the P&amp;L, I transitioned to
                the buy-side at <strong>DLM Invista</strong> and later as a
                Proprietary Trader at <strong>Infestus Capital</strong>. This was the
                era of "Blackbox" trading. I wrote <strong>C++</strong> and{" "}
                <strong>Prolog</strong> code that ran on colocated servers inside B3's
                data center, executing <em>Odd Lot Arbitrage</em> and{" "}
                <em>Penny Jumping</em> strategies in microseconds.
              </p>
              <p>
                The strategy arsenal expanded dramatically:{" "}
                <em>Market Making</em> with continuous bid/ask quoting,{" "}
                <em>Latency Arbitrage</em> exploiting feed delays between venues,{" "}
                <em>Box Spread</em> (4-point risk-neutral options arbitrage),{" "}
                <em>ADR Arbitrage</em> between New York and São Paulo,{" "}
                <em>Delta Hedging</em> for continuous options neutralization,{" "}
                <em>Gamma Scalping</em> to profit from gamma in delta-hedged
                positions, <em>Volatility Arbitrage</em> trading implied vs realized
                vol, <em>Statistical Arbitrage</em> on correlated pairs,{" "}
                <em>Momentum Ignition</em> triggering short-term directional moves,{" "}
                <em>Dark Pool Execution</em> for large-block anonymity,{" "}
                <em>Forward Rate Arbitrage (FRC/FRO)</em> on DI x USD cupom cambial
                spreads, <em>DI Spread Trading (DDI)</em> on interest rate
                differentials, and <em>Triangular FX Arbitrage</em> across
                cross-currency rate discrepancies.
              </p>
              <p>
                At the infrastructure level, every nanosecond mattered. We deployed{" "}
                <strong>FPGA feed handlers</strong> for hardware-accelerated market
                data processing, implemented{" "}
                <strong>kernel bypass</strong> networking (DPDK/Solarflare) to
                eliminate OS overhead, built{" "}
                <strong>lock-free data structures</strong> for contention-free
                multithreading, and used <strong>UDP multicast</strong> for efficient
                market data distribution. Every line of code had a direct financial
                consequence. This period instilled in me a rigorous discipline for
                risk management and system stability that few CTOs possess.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">03.</span> Pioneering
                Embedded Finance
              </h3>
              <p>
                Recognizing the shift towards fintech, I joined{" "}
                <strong>Captalys</strong> as CTO. Here, the challenge shifted from
                speed to complexity. I architected the systems that powered one of
                Brazil's first <strong>Embedded Finance</strong> operations. We built
                a credit engine capable of managing complex{" "}
                <strong>FIDC</strong> (Fundo de Investimento em Direitos
                Creditórios) structures, automating the entire lifecycle of{" "}
                <strong>receivables factoring</strong> and anticipation. We didn't
                just lend money; we integrated credit directly into the ERPs and
                marketplaces where businesses operated.
              </p>
              <p>
                The technology stack was purpose-built for financial complexity:{" "}
                <strong>credit scoring with Machine Learning</strong> models for
                risk assessment, <strong>anti-fraud engines</strong> that could
                detect duplicated or fictitious receivables in real time,
                direct integration with the{" "}
                <strong>Central Bank (BACEN) API</strong> for receivables registry
                validation, and full <strong>CVM compliance</strong> modules for
                regulatory reporting of the securitization funds.
              </p>
              <p>
                Using <strong>Python</strong>, <strong>Node.js</strong>, and{" "}
                <strong>Angular</strong>, we built a system that communicated
                directly with the Central Bank of Brazil to prevent fraud in
                receivables. This was my first deep dive into the "Real Economy,"
                moving away from liquid funds to credit rights. It was here that I
                realized I needed to build larger teams to achieve my vision, marking
                the start of my journey as a leader of leaders.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">04.</span> Scaling a
                Unicorn: The a55 Credit Journey
              </h3>
              <p>
                In 2019, I co-founded <strong>a55</strong> with a vision to
                revolutionize lending for the digital economy. As CTO, I built the
                technology from scratch and scaled it to support over{" "}
                <strong>20,000 companies</strong> and{" "}
                <strong>R$500 million</strong> in financing. We were pioneers,
                launching Latin America's first{" "}
                <strong>DeFi-integrated debt operation</strong>, tokenizing credit
                assets to tap into global liquidity pools.
              </p>
              <p>
                The DeFi integration was groundbreaking. We implemented{" "}
                <strong>ERC-20</strong> and <strong>ERC-721</strong> token standards
                for credit asset representation, leveraged the{" "}
                <strong>Centrifuge Protocol</strong> as our tokenization layer, and
                wrote <strong>Solidity</strong> smart contracts to manage the
                on-chain lifecycle of debt instruments. This allowed global investors
                to participate in Brazilian credit markets with unprecedented
                transparency and settlement efficiency.
              </p>
              <p>
                I led the engineering team from a small squad to a department of{" "}
                <strong>110+ professionals</strong> across Brazil and Mexico. We
                raised <strong>$44M USD</strong> in Series A and B rounds, proving
                that our technology could scale to meet the demands of institutional
                investors. The expansion to <strong>Mexico</strong> required
                rebuilding compliance modules, adapting credit models to local
                regulations, and hiring and mentoring engineering leadership in a new
                market. But the true test of leadership came when the market shifted.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">05.</span> The Strategic
                Pivot: a55 Payments
              </h3>
              <p>
                When the global credit crunch hit, we didn't fold; we executed a
                masterful pivot. I led the transformation of our core infrastructure
                into <strong>a55 Payments</strong>, a robust{" "}
                <strong>Payment Orchestration Platform</strong>. This wasn't just a
                new product; it was a complete reinvention of our technological DNA.
              </p>
              <p>
                As CTO of a55 Payments, I took on a hands-on role to build a system
                capable of <strong>Smart Routing</strong> transactions across
                multiple providers, <strong>Acquirer Aggregation</strong> for
                optimal fee optimization, complex{" "}
                <strong>Split Payments</strong> for marketplace disbursement, and
                full <strong>PCI-DSS</strong> compliance for secure card data
                handling. We turned our internal payment processing capabilities into
                a standalone, revenue-generating powerhouse.
              </p>
              <p>
                To achieve this with a leaner team, I pioneered a new methodology:{" "}
                <strong>Agent Engineering</strong>. I now orchestrate swarms of AI
                agents to handle everything from code generation to automated
                auditing. This <strong>"Vibe Coding"</strong> approach, combined with{" "}
                <strong>Rust</strong> for systems-level performance and safety,
                allows us to maintain the velocity of a 50-person team with a
                fraction of the headcount, achieving a{" "}
                <strong>70% reduction in time-to-market</strong> while maintaining
                enterprise-grade reliability. The future isn't about hiring more
                engineers—it's about augmenting the ones you have with intelligence.
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}
