export const en = {
  // ── Nav ──────────────────────────────────────────────────────────────
  nav: {
    story: "Story",
    career: "Career",
    expertise: "Expertise",
    tech: "Tech",
    projects: "Projects",
    about: "About",
    howIWork: "How I Work",
    resume: "Resume",
    downloadResume: "Download Resume",
  },

  // ── Hero ─────────────────────────────────────────────────────────────
  hero: {
    badge: "OPEN TO WORK",
    title1: "QUANTITATIVE",
    title2: "ARCHITECT",
    subtitle:
      "C-Level Executive & Hands-on CTO bridging the gap between",
    subtitleHighlight1: "high-frequency trading systems",
    subtitleAnd: "and",
    subtitleHighlight2: "modern fintech scale",
    cta: "Get in Touch",
    viewProjects: "View Projects",
    metricProcessed: "Processed",
    metricRaised: "Raised",
    metricTeam: "Team Size",
    metricExperience: "Experience",
    location: "São Paulo, Brazil",
  },

  // ── Full Story ──────────────────────────────────────────────────────
  fullStory: {
    title: "My Journey",
    readFull: "Read Full Story",
    readComplete: "Read the complete story →",
    dialogTitle: "The Full Story",
    dialogDesc: "The complete journey from electronic trading to fintech leadership.",
    quote:
      '"My journey is defined by a relentless pursuit of efficiency — first in microseconds on the trading floor, and now in scale and velocity within the fintech ecosystem."',
    milestones: [
      {
        period: "2008 - 2012",
        title: "The High-Frequency Foundation",
        summary:
          "FIX Protocol, DMA, and electronic trading at Link Investimentos (acquired by UBS) and Banco Fator. Elevated futures volume ranking from 12th to 4th on B3.",
        metric: "12th → 4th in B3 futures",
      },
      {
        period: "2012 - 2016",
        title: "The Quant Trader Era",
        summary:
          "Quant development at DLM Invista (now Inter Asset / Banco Inter) followed by proprietary trading at Infestus Capital in PnL-sharing partnership with Infinity Asset Management. C++ blackbox systems on colocated servers at B3, plus 15+ forex pairs automated via MQL5/MetaTrader on the SaxoBank platform.",
        metric: "Microsecond execution",
      },
      {
        period: "2016 - 2019",
        title: "Pioneering Embedded Finance",
        summary:
          "CTO at Captalys — architected Brazil's first Embedded Finance operations. FIDC structuring, ML credit scoring, Central Bank API integration.",
        metric: "Pioneer in Embedded Finance",
      },
      {
        period: "2019 - 2023",
        title: "Scaling a Unicorn: a55 Credit",
        summary:
          "Co-founded a55, built tech from scratch. Latin America's first DeFi-integrated debt operation. Scaled to 110+ engineers across Brazil and Mexico.",
        metric: "R$500M+ processed, $44M raised",
      },
      {
        period: "2024 - Present",
        title: "The Strategic Pivot: a55 Payments",
        summary:
          "Led transformation into a Payment Orchestration Platform. Pioneered Agent Engineering — AI swarms achieving 70% faster delivery with a lean team.",
        metric: "70% faster time-to-market",
      },
      {
        period: "2025 - Present",
        title: "Quant Backtester: Full Circle",
        summary:
          "Built an institutional-grade backtesting engine in Rust — 17 crates, 28K LOC. Genetic algorithm strategy discovery (NSGA-II), SIMD-accelerated metrics (AVX-512), 93x speedup. The HFT discipline, now applied to systematic strategy research.",
        metric: "93x speedup, 17 Rust crates",
      },
    ],
    // Dialog full story content (HTML-like) — kept as strings for JSX
    chapter1Title: "The High-Frequency Foundation",
    chapter1P1:
      'My career began at the epicenter of Brazil\'s financial modernization. At <strong>Link Investimentos</strong> (later acquired by UBS), I was immersed in the world of <strong>FIX Protocol</strong> and Direct Market Access (<strong>DMA</strong>). This wasn\'t just about connecting cables; it was about understanding the heartbeat of the market. I built systems that could withstand the immense pressure of high-volatility days, ensuring institutional clients had reliable, low-latency access to liquidity. Every millisecond counted, and every dropped message was unacceptable.',
    chapter1P2:
      'This obsession with performance led me to <strong>Banco Fator</strong>, where I was tasked with a monumental challenge: modernize the electronic trading desk. We didn\'t just update software; we revolutionized the bank\'s execution capabilities. By implementing <strong>Complex Event Processing (CEP)</strong> engines and algorithmic strategies like <em>Cash & Carry</em>, <em>Mean Reversion</em>, <em>VWAP</em>, <em>TWAP</em>, <em>Pairs Trading</em>, <em>Calendar Spread</em>, <em>Butterfly Spread</em>, the Brazilian <em>Casado</em> trade, <em>Statistical Arbitrage</em>, and <em>Order Book Imbalance</em> detection, we propelled the bank from 12th to <strong>4th place</strong> in futures volume rankings on the B3 exchange.',
    chapter1P3:
      'I coordinated my first development team here, sustaining critical Order Management Systems (OMS) like <strong>Bloomberg Tradebook</strong>, <strong>SunGard</strong>, and <strong>Reuters</strong>. We built dashboards in <strong>Java</strong> and <strong>Oracle</strong>, tropicalizing international systems for the Brazilian market. I also worked closely with the <strong>Fator Securities</strong> branch in New York, building systems for <strong>ADR Arbitrage</strong> and statistical models—leveraging <strong>C++</strong> for performance-critical components—that allowed foreign investors to apply mean reversion strategies to Brazilian assets listed on the NYSE.',
    chapter2Title: "The Quant Trader Era",
    chapter2P1:
      'Driven by a desire to be closer to the P&L, I transitioned to the buy-side at <strong>DLM Invista</strong> (now <strong>Inter Asset</strong>, part of Banco Inter\'s digital banking ecosystem) and later as a Proprietary Trader at <strong>Infestus Capital</strong>. At Infestus, I operated through a <strong>PnL-sharing partnership with Infinity Asset Management</strong> — a common arrangement in prop trading where the trader builds and runs algorithmic strategies using the partner firm\'s infrastructure, exchange licenses, and capital, splitting profits based on performance. This was the era of "Blackbox" trading. I wrote <strong>C++</strong> and <strong>Prolog</strong> code that ran on colocated servers inside B3\'s data center, executing <em>Odd Lot Arbitrage</em> and <em>Penny Jumping</em> strategies in microseconds. I was also deeply drawn to learning algorithmic <strong>DI Futures arbitrage</strong> — using algorithms to capture risk-free interest rate differentials across the yield curve on B3, a highly technical discipline requiring real-time DV01 sensitivity analysis and precise spread execution.',
    chapter2P2:
      'The strategy arsenal expanded dramatically: <em>Market Making</em> with continuous bid/ask quoting, <em>Latency Arbitrage</em> exploiting feed delays between venues, <em>Box Spread</em> (4-point risk-neutral options arbitrage), <em>ADR Arbitrage</em> between New York and São Paulo, <em>Delta Hedging</em> for continuous options neutralization, <em>Gamma Scalping</em> to profit from gamma in delta-hedged positions, <em>Volatility Arbitrage</em> trading implied vs realized vol, <em>Statistical Arbitrage</em> on correlated pairs, <em>Momentum Ignition</em> triggering short-term directional moves, <em>Dark Pool Execution</em> for large-block anonymity, <em>Forward Rate Arbitrage (FRC/FRO)</em> on DI x USD cupom cambial spreads, <em>DI Spread Trading (DDI)</em> on interest rate differentials, and <em>Triangular FX Arbitrage</em> across cross-currency rate discrepancies.',
    chapter2P3:
      'At the infrastructure level, every nanosecond mattered. We deployed <strong>FPGA feed handlers</strong> for hardware-accelerated market data processing, implemented <strong>kernel bypass</strong> networking (DPDK/Solarflare) to eliminate OS overhead, built <strong>lock-free data structures</strong> for contention-free multithreading, and used <strong>UDP multicast</strong> for efficient market data distribution. In parallel, I automated <strong>15+ forex currency pairs</strong> using <strong>MQL5 Expert Advisors</strong> on <strong>MetaTrader</strong>, connected to <strong>SaxoBank</strong> (Denmark) — a leading multi-asset trading platform providing institutional-grade FX liquidity. Every line of code had a direct financial consequence. This period instilled in me a rigorous discipline for risk management and system stability that few CTOs possess.',
    chapter3Title: "Pioneering Embedded Finance",
    chapter3P1:
      'Recognizing the shift towards fintech, I joined <strong>Captalys</strong> as CTO. Here, the challenge shifted from speed to complexity. I architected the systems that powered one of Brazil\'s first <strong>Embedded Finance</strong> operations. We built a credit engine capable of managing complex <strong>FIDC</strong> (Fundo de Investimento em Direitos Creditórios) structures, automating the entire lifecycle of <strong>receivables factoring</strong> and anticipation. We didn\'t just lend money; we integrated credit directly into the ERPs and marketplaces where businesses operated.',
    chapter3P2:
      'The technology stack was purpose-built for financial complexity: <strong>credit scoring with Machine Learning</strong> models for risk assessment, <strong>anti-fraud engines</strong> that could detect duplicated or fictitious receivables in real time, direct integration with the <strong>Central Bank (BACEN) API</strong> for receivables registry validation, and full <strong>CVM compliance</strong> modules for regulatory reporting of the securitization funds.',
    chapter3P3:
      'Using <strong>Python</strong>, <strong>Node.js</strong>, and <strong>Angular</strong>, we built a system that communicated directly with the Central Bank of Brazil to prevent fraud in receivables. This was my first deep dive into the "Real Economy," moving away from liquid funds to credit rights. It was here that I realized I needed to build larger teams to achieve my vision, marking the start of my journey as a leader of leaders.',
    chapter4Title: "Scaling a Unicorn: The a55 Credit Journey",
    chapter4P1:
      'In February 2019, I co-founded <strong>a55</strong> with a vision to revolutionize lending for the digital economy. As CTO, I built the technology from scratch and scaled it to support over <strong>20,000 companies</strong> and <strong>R$500 million</strong> in financing. We were pioneers, launching Latin America\'s first <strong>DeFi-integrated debt operation</strong>, tokenizing credit assets to tap into global liquidity pools.',
    chapter4P2:
      'The DeFi integration was groundbreaking. We implemented <strong>ERC-20</strong> and <strong>ERC-721</strong> token standards for credit asset representation, leveraged the <strong>Centrifuge Protocol</strong> as our tokenization layer, and wrote <strong>Solidity</strong> smart contracts to manage the on-chain lifecycle of debt instruments. This allowed global investors to participate in Brazilian credit markets with unprecedented transparency and settlement efficiency.',
    chapter4P3:
      'I led the engineering team from a small squad to a department of <strong>110+ professionals</strong> across Brazil and Mexico. We raised <strong>$44M USD</strong> in Series A and B rounds, proving that our technology could scale to meet the demands of institutional investors. The expansion to <strong>Mexico</strong> required rebuilding compliance modules, adapting credit models to local regulations, and hiring and mentoring engineering leadership in a new market. But the true test of leadership came when the market shifted.',
    chapter5Title: "The Strategic Pivot: a55 Payments",
    chapter5P1:
      'When the global credit crunch hit, we didn\'t fold; we executed a masterful pivot. I led the transformation of our core infrastructure into <strong>a55 Payments</strong>, a robust <strong>Payment Orchestration Platform</strong>. This wasn\'t just a new product; it was a complete reinvention of our technological DNA.',
    chapter5P2:
      'But the payments pivot was only half the story. In parallel, I went deep into <strong>Agent Engineering</strong> — not just using AI for code generation, but architecting a full production-grade <strong>multi-agent system</strong> as a personal project. I built 30 profession-specific AI Product Managers (lawyer, doctor, barber, developer, and 26 others), each one mapping real pain points to financial products through a <strong>PM Suite Coordinator</strong>. Alongside them, a <strong>StudyOrchestrator</strong> runs 8 parallel credit analysis agents — CreditScore, CompanyProfile, EmploymentDynamics, JudicialHealth, SectorBenchmark, RegionalEconomy, BNDESHistory, and Compliance — all executing via <strong>asyncio.gather()</strong> with shared context to avoid redundant data fetches. An <strong>InterpretationEngine</strong> then translates raw metrics into plain-language insights that anyone can understand.',
    chapter5P3:
      'This is what I mean by Agent Engineering as a complete philosophy — it\'s not just vibe coding. It\'s about architecting systems where autonomous agents generate products, analyze credit, and make decisions. The entire system is <strong>WhatsApp-first</strong> with voice recognition, uses <strong>Gemini for dynamic pricing</strong> and <strong>GPT-4 for conversational flows</strong>, and runs on custom orchestration built with pure Python asyncio — <strong>no frameworks, no LangChain, no CrewAI</strong>. Each of the 8 study runners extends a <strong>BaseStudyRunner</strong> with its own data collection and interpretation logic, while the PM agents handle pain-point-to-product mapping per profession. Combined with <strong>Rust</strong> for performance-critical paths, this approach delivers the velocity of a 50-person team with a fraction of the headcount — a <strong>70% reduction in time-to-market</strong> with enterprise-grade reliability.',
    chapter6Title: "Full Circle: The Quant Backtester",
    chapter6P1:
      'In 2025, everything came full circle. I channeled 17 years of quantitative trading experience into building an <strong>institutional-grade backtesting engine</strong> in Rust — a 17-crate workspace spanning 28,000 lines of code. The system features a <strong>UnifiedEngine</strong> with fixed-point arithmetic (i64 with 6 decimal places), dual-price bars for anti-double-count validation, and a zero-allocation hot path that achieves a <strong>93x speedup</strong> over standard implementations via Structure-of-Arrays (SoA) layout and SIMD vectorization.',
    chapter6P2:
      'The crown jewel is the <strong>Strategy Combiner (SCG)</strong> — a Generative Combiner System that uses <strong>genetic algorithms</strong> to autonomously discover trading strategies. It employs <strong>NSGA-II Pareto ranking</strong> for multi-objective optimization (CAGR, Sharpe, Max Drawdown), a two-stage validation pipeline (Stage A fast screening with SIMD batch evaluation, Stage B full validation with Walk-Forward Analysis, PBO, and DSR anti-overfitting gates), and a Hall of Fame for elite strategy promotion. Population fitness is computed using <strong>AVX-512</strong> instructions (f64x8 via the <code>wide</code> crate) for maximum throughput.',
    chapter6P3:
      'The system includes a <strong>Tauri desktop dashboard</strong> with 17 pages — evolution monitor, Pareto Frontier 3D visualization, backtest drilldown, risk analytics (VaR/CVaR), Monte Carlo simulation, and a Miner Control panel for the OMP (Perpetual Mining Orchestrator) that runs 24/7. Storage is handled by <strong>OBFS</strong> — a custom binary format using Parquet columnar storage with Zstd compression and LMDB metadata, achieving 7.1x compression at just 8 KB per strategy. This project represents the synthesis of my entire career: HFT-grade performance engineering applied to systematic strategy research, built with the same institutional rigor I learned on the trading floor.',
  },

  // ── Career Timeline ──────────────────────────────────────────────────
  career: {
    title: "CAREER_LOG",
    subtitle: "A chronological record of roles, strategies, and technical evolution.",
    strategies: "Strategies",
    techStack: "Tech Stack",
    keyMetrics: "Key Metrics",
    present: "Present",
    entries: [
      {
        id: "quant-backtester",
        summary:
          "Built an institutional-grade backtesting engine in Rust (17 crates, 28K LOC). Genetic algorithm strategy discovery with NSGA-II Pareto ranking, SIMD-accelerated metrics via AVX-512, 93x speedup. Tauri desktop dashboard with 17 pages.",
        metrics: ["93x speedup (SoA + SIMD)", "17 Rust crates, 28K LOC", "Genetic Algorithm (NSGA-II)", "AVX-512 vectorization"],
      },
      {
        id: "a55-payments",
        summary:
          "Leading the strategic pivot from credit to payment orchestration. Hands-on leadership applying Agent Engineering methodology to accelerate enterprise-grade delivery with a lean team.",
        metrics: ["70% faster time-to-market", "Agent Engineering pioneer", "PCI-DSS Level 1"],
      },
      {
        id: "a55-credit",
        summary:
          "Built fintech from zero to unicorn trajectory. Scaled team from 3 to 110+ engineers across Brazil and Mexico. Launched LatAm's first DeFi-integrated debt operation.",
        metrics: ["R$500M+ processed", "$44M raised (Series A+B)", "20,000+ companies served", "110+ engineers"],
      },
      {
        id: "captalys",
        summary:
          "Pioneered Embedded Finance in Brazil. Architected credit portfolio management systems for FIDC structures with direct Central Bank integration.",
        metrics: ["Pioneer in Embedded Finance", "Central Bank API integration"],
      },
      {
        id: "infestus-infinity",
        summary:
          "Proprietary trader operating from colocated servers inside B3's data center (Equinix SP4) through a PnL-sharing partnership with Infinity Asset Management — a common prop trading arrangement where the trader builds and runs algorithmic strategies using the partner firm's infrastructure, licenses, and capital, splitting profits based on performance. Developed HFT systems in C++ and Prolog for microsecond execution, while also building DI Futures algorithmic arbitrage systems for risk-free interest rate capture. Additionally automated 15+ forex pairs via MQL5 Expert Advisors on MetaTrader using the SaxoBank (Denmark) multi-asset platform.",
        metrics: ["Microsecond execution", "PnL-sharing partnership", "15+ forex pairs automated", "DI Futures algorithmic arbitrage"],
      },
      {
        id: "dlm-invista",
        summary:
          "Built execution algorithms for Box Spread strategies (risk-neutral options arbitrage) and internal OMS systems on the buy-side. DLM Invista was later acquired by Banco Inter in 2020 and renamed Inter Asset, becoming part of Brazil's largest digital bank ecosystem.",
      },
      {
        id: "banco-fator",
        summary:
          "Modernized electronic trading desk, elevating futures volume ranking from 12th to 4th place. Coordinated first development team.",
        metrics: ["12th → 4th in futures volume", "First team leadership", "Fator Securities (NY office)"],
      },
      {
        id: "link-investimentos",
        summary:
          "FIX Protocol specialist building DMA infrastructure for institutional access to B3 liquidity.",
      },
    ],
  },

  // ── Strategies Showcase ──────────────────────────────────────────────
  strategies: {
    title: "Strategy Expertise",
    signatureDesc: "Signature strategies across 17 years of trading and fintech.",
    filteredDesc: "All strategies filtered by category.",
    viewAll: "View all {count} strategies →",
    showSignature: "Show signature strategies only",
  },

  // ── Tech Arsenal ────────────────────────────────────────────────────
  tech: {
    title: "TECHNICAL_ARSENAL",
    subtitle: "Full-spectrum expertise from low-level systems to high-level AI orchestration.",
  },

  // ── Recent Projects ─────────────────────────────────────────────────
  recentProjects: {
    title: "Recent Projects",
    subtitle:
      "Engineering-first overview of recent systems I designed and built — from payment gateways to AI agents.",
    viewAll: "View all {count} projects →",
    showFeatured: "Show featured projects only",
  },

  // ── About ───────────────────────────────────────────────────────────
  about: {
    badge: "Behind the Code",
    title: "The Human Side",
    p1: 'Born in <strong>Maceió</strong> and raised in <strong>Salvador</strong>, I carry the spirit of two Northeastern states — Alagoas gave me my start, Bahia shaped who I am. I\'m proudly both <strong>Alagoano</strong> and <strong>Baiano</strong>, with the warmth and strong personality that comes with being a <strong>Nordestino</strong>. I love my team, <strong>Esporte Clube Bahia</strong>, and I bring that same passion and unwavering loyalty to my work and the people I build alongside.',
    p2: 'When I\'m not architecting financial systems, you can find me in the lanes of <strong>Dota 2</strong>. Gaming keeps my strategic thinking sharp and my reflexes quicker than a high-frequency trading algorithm. The parallels between coordinating a five-person team fight and orchestrating a distributed systems deployment are more real than most people think.',
  },

  // ── How I Work (Leadership) ─────────────────────────────────────────
  howIWork: {
    title: "How I Work",
    tabLeadership: "Leadership",
    tabAI: "AI Engineering",
    leaderQuote:
      '"I don\'t believe in leading from a distance. The best systems I ever built happened when I was right there in the trenches with my team."',
    rootsTitle: "Roots & Loyalty",
    rootsDesc:
      "Nordestino — born in Maceió, raised in Salvador. My core team has been with me for 10+ years across three consecutive ventures — Captalys, a55 Credit, a55 Payments. Not retention strategy; family.",
    handsOnTitle: "Hands-On Leader",
    handsOnDesc:
      "I review PRs, pair-program on hard problems, debug production at 3 a.m. I never delegate what I'm not willing to do myself. Leadership is presence earned through effort.",
    leadByTitle: "Lead by Example",
    leadByDesc:
      "I never confront someone's work — I present my own at the highest standard. Quality becomes contagious when the leader demonstrates the extra mile first.",
    scaleTitle: "Scale with Trust",
    scaleDesc:
      "Scaled from small squads to 110+ professionals across Brazil and Mexico. Raised $44M USD. Every milestone belongs to the team, never to one person.",
    metricTeam: "Same Core Team",
    metricVentures: "Ventures Together",
    metricLed: "Professionals Led",
    metricHandsOn: "Hands-On",
    aiQuote: '"I don\'t just write code; I orchestrate intelligence."',
    agentTitle: "Agent Orchestration",
    agentDesc:
      "Orchestrating swarms of AI agents — from 30 profession-specific Product Managers that map pain points to products, to 8 parallel credit analysis agents with shared context. Code generation, automated testing, security auditing, and deployment — all coordinated by a human architect.",
    fasterTitle: "70% Faster Delivery",
    fasterDesc:
      "Not theoretical — battle-tested with 30 profession-specific PM agents mapping real pain points to products, and 8 parallel credit study agents (CreditScore, CompanyProfile, EmploymentDynamics, JudicialHealth, SectorBenchmark, RegionalEconomy, BNDESHistory, Compliance) running via asyncio.gather() with shared context. Velocity of a 50-person team with a fraction of the headcount.",
    rustTitle: "Rust for Safety",
    rustDesc:
      "Leveraging Rust for systems-level performance and memory safety. Combined with AI agents for velocity — the best of both worlds.",
    pipelineTitle: "Full Pipeline",
    pipelineDesc:
      "Custom orchestration without frameworks — pure asyncio.gather() with shared context pattern, no LangChain or CrewAI. WhatsApp-first with voice recognition, Gemini for pricing, GPT-4 for conversation, pain-point-to-product mapping per profession, and InterpretationEngine translating technical metrics to plain language.",
  },

  // ── Footer ──────────────────────────────────────────────────────────
  footer: {
    location: "São Paulo, Brazil",
    remote: "Remote Available",
  },
};

export type Translations = typeof en;
