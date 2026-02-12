import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Terminal, 
  TrendingUp, 
  Code, 
  Globe, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Database,
  ArrowUpRight,
  Briefcase,
  Layers,
  Zap,
  Activity,
  Lock,
  Network,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* --- HERO SECTION --- */}
      <header className="relative border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter">
            <Terminal className="h-5 w-5 text-primary" />
            <span>ANDRE_SILVA<span className="text-primary animate-pulse">_</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#full-story" className="hover:text-primary transition-colors">FULL_STORY</a>
            <a href="#experience" className="hover:text-primary transition-colors">CAREER_LOG</a>
            <a href="#stack" className="hover:text-primary transition-colors">TECH_ARSENAL</a>
            <a href="#about-me" className="hover:text-primary transition-colors">ABOUT_ME</a>
            <Button variant="outline" className="font-mono text-xs h-8 border-primary/50 text-primary hover:bg-primary/10">
              DOWNLOAD_RESUME.pdf
            </Button>
          </nav>
        </div>
      </header>

      <main className="container py-12 md:py-24 lg:py-32 space-y-24">
        
        {/* --- HERO --- */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              SYSTEMS_ONLINE // OPEN_TO_WORK
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
              QUANTITATIVE <br />
              <span className="text-muted-foreground">ARCHITECT</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              C-Level Executive & Hands-on CTO bridging the gap between <span className="text-foreground font-medium">high-frequency trading systems</span> and <span className="text-foreground font-medium">modern fintech scale</span>.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="font-mono text-base h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
                <Terminal className="mr-2 h-4 w-4" />
                INITIATE_CONTACT
              </Button>
              <Button size="lg" variant="outline" className="font-mono text-base h-12 px-8 rounded-none border-border hover:bg-accent">
                VIEW_PROJECTS
              </Button>
            </div>
            
            {/* Key Metrics Ticker */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-mono font-bold text-foreground">R$500M+</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Processed</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-foreground">$44M</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Raised</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-foreground">110+</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Team Size</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-foreground">15Y</div>
                <div className="text-xs text-muted-foreground font-mono uppercase">Experience</div>
              </div>
            </div>
          </div>
          
          {/* Abstract Visualization */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-card border border-border p-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative h-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>SYS.STATUS: <span className="text-primary">OPTIMAL</span></span>
                <span>LATENCY: <span className="text-primary">12ms</span></span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary w-[75%] animate-[shimmer_2s_infinite]"></div>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span>VIBE_CODING_MODULE</span>
                  <span>75%</span>
                </div>
                <div className="h-1 w-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary w-[92%]"></div>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span>PAYMENT_ORCHESTRATION</span>
                  <span>92%</span>
                </div>
                <div className="h-1 w-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary w-[45%]"></div>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span>AGENT_DEPLOYMENT</span>
                  <span>45%</span>
                </div>
              </div>
              <div className="p-4 border border-primary/20 bg-primary/5 mt-auto">
                <p className="text-primary">&gt; initializing agent swarm...</p>
                <p>&gt; connecting to liquidity pools...</p>
                <p>&gt; optimizing rust compiler...</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* --- FULL STORY (DISSERTATIVE) --- */}
        <section id="full-story" className="space-y-12 scroll-mt-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-mono">THE_FULL_STORY</h2>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none font-sans leading-relaxed text-muted-foreground">
              <p className="text-xl text-foreground font-medium border-l-4 border-primary pl-6 italic">
                "My journey is defined by a relentless pursuit of efficiency—first in microseconds on the trading floor, and now in scale and velocity within the fintech ecosystem."
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">01.</span> The High-Frequency Foundation
              </h3>
              <p>
                My career began at the epicenter of Brazil's financial modernization. At <strong>Link Investimentos</strong> (later acquired by UBS), I was immersed in the world of <strong>FIX Protocol</strong> and Direct Market Access (DMA). This wasn't just about connecting cables; it was about understanding the heartbeat of the market. I built systems that could withstand the immense pressure of high-volatility days, ensuring institutional clients had reliable, low-latency access to liquidity.
              </p>
              <p>
                This obsession with performance led me to <strong>Banco Fator</strong>, where I was tasked with a monumental challenge: modernize the electronic trading desk. We didn't just update software; we revolutionized the bank's execution capabilities. By implementing <strong>Complex Event Processing (CEP)</strong> engines and algorithmic strategies like <em>Cash & Carry</em> and <em>Mean Reversion</em>, we propelled the bank from 12th to <strong>4th place</strong> in futures volume rankings.
              </p>
              <p>
                I coordinated my first development team here, sustaining critical Order Management Systems (OMS) like Bloomberg Tradebook, SunGard, and Reuters. We built dashboards in Java and Oracle, tropicalizing international systems for the Brazilian market. I also worked with the <strong>Fator Securities</strong> branch in New York, building systems for <strong>ADR Arbitrage</strong> and statistical models that allowed foreign investors to apply mean reversion strategies to Brazilian assets.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">02.</span> The Quant Trader Era
              </h3>
              <p>
                Driven by a desire to be closer to the P&L, I transitioned to the buy-side at <strong>DLM Invista</strong> and later as a Proprietary Trader at <strong>Infestus Capital</strong>. This was the era of "Blackbox" trading. I wrote C++ and Prolog code that ran on colocated servers, executing <em>Odd Lot Arbitrage</em> and <em>Penny Jumping</em> strategies in microseconds.
              </p>
              <p>
                I built systems to capture risk-free profits through <strong>Box Spreads</strong> (4-point arbitrage) and <strong>ADR Arbitrage</strong> between New York and São Paulo. Every line of code had a direct financial consequence. This period instilled in me a rigorous discipline for risk management and system stability that few CTOs possess.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">03.</span> Pioneering Embedded Finance
              </h3>
              <p>
                Recognizing the shift towards fintech, I joined <strong>Captalys</strong> as CTO. Here, the challenge shifted from speed to complexity. I architected the systems that powered one of Brazil's first <strong>Embedded Finance</strong> operations. We built a credit engine capable of managing complex FIDC structures, automating the entire lifecycle of receivables anticipation. We didn't just lend money; we integrated credit directly into the ERPs and marketplaces where businesses operated.
              </p>
              <p>
                Using Python, Node.js, and Angular, we built a system that communicated directly with the Central Bank of Brazil to prevent fraud in receivables. This was my first deep dive into the "Real Economy," moving away from liquid funds to credit rights. It was here that I realized I needed to build larger teams to achieve my vision, marking the start of my journey as a leader of leaders.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">04.</span> Scaling a Unicorn: The a55 Credit Journey
              </h3>
              <p>
                In 2019, I co-founded <strong>a55</strong> with a vision to revolutionize lending for the digital economy. As CTO, I built the technology from scratch and scaled it to support over <strong>20,000 companies</strong> and <strong>R$500 million</strong> in financing. We were pioneers, launching Latin America's first <strong>DeFi-integrated debt operation</strong>, tokenizing credit assets to tap into global liquidity pools.
              </p>
              <p>
                I led the engineering team from a small squad to a department of <strong>110+ professionals</strong> across Brazil and Mexico. We raised <strong>$44M USD</strong> in Series A and B rounds, proving that our technology could scale to meet the demands of institutional investors. But the true test of leadership came when the market shifted.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
                <span className="text-primary font-mono">05.</span> The Strategic Pivot: a55 Payments
              </h3>
              <p>
                When the global credit crunch hit, we didn't fold; we executed a masterful pivot. I led the transformation of our core infrastructure into <strong>a55 Payments</strong>, a robust <strong>Payment Orchestration Platform</strong>. This wasn't just a new product; it was a complete reinvention of our technological DNA.
              </p>
              <p>
                As CTO of a55 Payments, I took on a hands-on role to build a system capable of aggregating multiple acquirers, optimizing transaction fees, and handling complex split-payments for marketplaces. We turned our internal payment processing capabilities into a standalone, revenue-generating powerhouse.
              </p>
              <p>
                To achieve this with a leaner team, I pioneered a new methodology: <strong>Agent Engineering</strong>. I now orchestrate swarms of AI agents to handle everything from code generation to automated auditing. This "Vibe Coding" approach allows us to maintain the velocity of a 50-person team with a fraction of the headcount, achieving a <strong>70% reduction in time-to-market</strong> while maintaining enterprise-grade reliability.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* --- EXPERIENCE TIMELINE (SUMMARY) --- */}
        <section id="experience" className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">CAREER_LOG</h2>
              <p className="text-muted-foreground max-w-2xl">
                A chronological overview of roles and key achievements.
              </p>
            </div>
          </div>

          <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
            
            {/* a55 Payments */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="text-xl font-bold">CTO @ a55 Payments</h3>
                  <Badge variant="outline" className="w-fit font-mono text-xs border-primary/50 text-primary bg-primary/5">2024 - PRESENT</Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  Leading the strategic pivot to payment orchestration. Hands-on leadership leveraging AI agents to maintain high-velocity development with a lean team.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground font-mono">
                  <li className="flex items-center"><Zap className="h-3 w-3 mr-2 text-primary" /> Payment Orchestration Platform</li>
                  <li className="flex items-center"><Zap className="h-3 w-3 mr-2 text-primary" /> AI-Accelerated Development</li>
                  <li className="flex items-center"><Zap className="h-3 w-3 mr-2 text-primary" /> Automated Audit Systems</li>
                  <li className="flex items-center"><Zap className="h-3 w-3 mr-2 text-primary" /> Web3 Integration</li>
                </ul>
              </div>
            </div>

            {/* a55 Credit */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground"></div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="text-xl font-bold">CTO @ a55 Credit</h3>
                  <Badge variant="outline" className="w-fit font-mono text-xs">2019 - 2023</Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  Scaled from 3 to 110+ employees. Raised $44M USD. Built Latin America's first crypto-backed debt financing operation.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground font-mono">
                  <li className="flex items-center"><Briefcase className="h-3 w-3 mr-2" /> Series A & B Fundraising</li>
                  <li className="flex items-center"><Globe className="h-3 w-3 mr-2" /> Brazil & Mexico Expansion</li>
                  <li className="flex items-center"><Database className="h-3 w-3 mr-2" /> R$500M+ Processed</li>
                </ul>
              </div>
            </div>

            {/* Captalys */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground"></div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="text-xl font-bold">CTO @ Captalys</h3>
                  <Badge variant="outline" className="w-fit font-mono text-xs">2016 - 2018</Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  Pioneered embedded finance in Brazil. Architected complete credit portfolio management systems for FIDC structures.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground font-mono">
                  <li className="flex items-center"><Activity className="h-3 w-3 mr-2" /> FIDC Management System</li>
                  <li className="flex items-center"><Lock className="h-3 w-3 mr-2" /> Receivables Anticipation Engine</li>
                </ul>
              </div>
            </div>

            {/* Infinity Asset */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground"></div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="text-xl font-bold">Partner & Consultant @ Infinity Asset</h3>
                  <Badge variant="outline" className="w-fit font-mono text-xs">2015 - 2016</Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  Developed specialized execution systems for DI Futures spreads (DV01 sensitivity) and real-time NAV calculation engines.
                </p>
              </div>
            </div>

            {/* Infestus */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground"></div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="text-xl font-bold">Proprietary Trader @ Infestus</h3>
                  <Badge variant="outline" className="w-fit font-mono text-xs">2013 - 2015</Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  High-frequency trading, arbitrage strategies, and low-latency infrastructure development (C++, Prolog).
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground font-mono">
                  <li className="flex items-center"><Network className="h-3 w-3 mr-2" /> HFT & Colocation</li>
                  <li className="flex items-center"><Network className="h-3 w-3 mr-2" /> Odd Lot Arbitrage</li>
                  <li className="flex items-center"><Network className="h-3 w-3 mr-2" /> Penny Jumping Strategies</li>
                </ul>
              </div>
            </div>

            {/* DLM Invista */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground"></div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="text-xl font-bold">Systems Developer @ DLM Invista</h3>
                  <Badge variant="outline" className="w-fit font-mono text-xs">2011 - 2013</Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  Built execution algorithms for Box Spread strategies (risk-neutral options arbitrage) and internal OMS systems.
                </p>
              </div>
            </div>

            {/* Banco Fator */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground"></div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="text-xl font-bold">Quant Developer @ Banco Fator</h3>
                  <Badge variant="outline" className="w-fit font-mono text-xs">2009 - 2011</Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  Elevated futures volume ranking from 12th to 4th place. Pioneered CEP engines for Cash & Carry and Mean Reversion strategies.
                </p>
              </div>
            </div>

             {/* Link Investimentos */}
             <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-2 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground/50"></div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-muted-foreground">Electronic Trading Specialist @ Link Investimentos</h3>
                <p className="text-sm text-muted-foreground font-mono">2008 - 2009 • FIX Protocol Specialist, DMA Infrastructure</p>
              </div>
            </div>

          </div>
        </section>

        <Separator />

        {/* --- TECH STACK --- */}
        <section id="stack" className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">TECHNICAL_ARSENAL</h2>
            <p className="text-muted-foreground">
              Full-spectrum expertise from low-level systems to high-level AI orchestration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-mono text-lg">
                  <Code className="h-5 w-5 text-primary" /> LANGUAGES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span>Rust</span>
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary w-[95%]"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Python</span>
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary w-[90%]"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span>TypeScript</span>
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary w-[85%]"></div></div>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>C++ / Go</span>
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden"><div className="h-full bg-muted-foreground w-[70%]"></div></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-mono text-lg">
                  <Server className="h-5 w-5 text-primary" /> INFRASTRUCTURE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span>AWS / Azure</span>
                  <Badge variant="secondary" className="text-[10px]">CLOUD_NATIVE</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Kubernetes</span>
                  <Badge variant="secondary" className="text-[10px]">ORCHESTRATION</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Terraform</span>
                  <Badge variant="secondary" className="text-[10px]">IaC</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>FIX Protocol</span>
                  <Badge variant="secondary" className="text-[10px]">LOW_LATENCY</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-mono text-lg">
                  <Cpu className="h-5 w-5 text-primary" /> AI & INNOVATION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span>Agentic Coding</span>
                  <Badge variant="outline" className="text-[10px] border-primary text-primary">ADVANCED</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>LLM Integration</span>
                  <Badge variant="outline" className="text-[10px] border-primary text-primary">PROD_READY</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Vibe Coding</span>
                  <Badge variant="outline" className="text-[10px] border-primary text-primary">PIONEER</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Blockchain/DeFi</span>
                  <Badge variant="outline" className="text-[10px] border-primary text-primary">NATIVE</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- ABOUT ME --- */}
        <section id="about-me" className="grid md:grid-cols-2 gap-12 items-center py-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary text-primary">HUMAN_PROTOCOL</Badge>
            </div>
            <h2 className="text-3xl font-bold tracking-tight font-mono">
              BEHIND_THE_CODE
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a proud <strong>Baiano</strong> from Salvador, carrying the warmth and resilience of my roots into every project. I love my team, <strong>Esporte Clube Bahia</strong>, and I bring that same passion to my work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not architecting financial systems, you can find me in the lanes of <strong>Dota 2</strong>. Gaming keeps my strategic thinking sharp and my reflexes quicker than a high-frequency trading algorithm.
            </p>
            <div className="p-6 bg-card border border-border rounded-lg space-y-4">
              <h3 className="font-bold flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                Leadership Philosophy: "In the Trenches"
              </h3>
              <p className="text-sm text-muted-foreground">
                I used to be a distant manager, but I've evolved. Today, I am a <strong>"Leader in the Trenches."</strong> I love people, and I believe the best way to lead them is to be right there beside them—coding, debugging, and solving problems together. I don't just direct; I empower through presence and shared effort.
              </p>
            </div>
          </div>
          <div className="relative aspect-square bg-muted/20 rounded-full overflow-hidden border-2 border-dashed border-primary/20 flex items-center justify-center">
            <div className="text-center space-y-2 p-8">
              <div className="text-6xl">🌴 🎮 💻</div>
              <p className="font-mono text-sm text-muted-foreground">
                BAHIA • GAMER • CODER
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* --- VIBE CODING --- */}
        <section id="vibe-coding" className="relative overflow-hidden rounded-lg border border-primary/20 bg-primary/5 p-8 md:p-12">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Layers className="h-32 w-32 text-primary" />
          </div>
          <div className="relative z-10 max-w-2xl space-y-6">
            <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">CURRENT_FOCUS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
              VIBE_CODING & <br />AGENT ENGINEERING
            </h2>
            <p className="text-lg text-muted-foreground">
              "I don't just write code; I orchestrate intelligence."
            </p>
            <p className="text-muted-foreground">
              Pioneering a systematic, AI-assisted development methodology that accelerates delivery by 70% while maintaining enterprise-grade quality. Leveraging Rust for safety and AI agents for velocity.
            </p>
            <Button className="font-mono bg-primary text-primary-foreground hover:bg-primary/90">
              EXPLORE_METHODOLOGY
            </Button>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="border-t border-border/50 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-mono font-bold text-lg">
              <Terminal className="h-5 w-5 text-primary" />
              <span>ANDRE_SILVA</span>
            </div>
            <div className="text-sm text-muted-foreground font-mono text-center md:text-right">
              <p>São Paulo, Brazil • Remote Available</p>
              <p>alsilva86@gmail.com</p>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground font-mono">
            SYSTEM_VERSION: 2.0.24 // DEPLOYED_VIA_MANUS
          </div>
        </footer>

      </main>
    </div>
  );
}
