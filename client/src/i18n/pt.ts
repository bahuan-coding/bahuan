import type { Translations } from "./en";

export const pt: Translations = {
  // ── Nav ──────────────────────────────────────────────────────────────
  nav: {
    story: "Trajetória",
    career: "Carreira",
    expertise: "Estratégias",
    tech: "Tech",
    projects: "Projetos",
    about: "Sobre",
    howIWork: "Como Trabalho",
    resume: "Currículo",
    downloadResume: "Baixar Currículo",
  },

  // ── Hero ─────────────────────────────────────────────────────────────
  hero: {
    badge: "DISPONÍVEL PARA NOVAS OPORTUNIDADES",
    title1: "PILOTO",
    title2: "DE IA",
    subtitle:
      "CTO hands-on que orquestra agentes de IA e swarms autônomos com 17 anos entre",
    subtitleHighlight1: "mesas de trading de alta frequência",
    subtitleAnd: "e",
    subtitleHighlight2: "fintechs de alto crescimento",
    cta: "Fale Comigo",
    viewProjects: "Ver Projetos",
    metricProcessed: "Processados",
    metricRaised: "Captados",
    metricTeam: "Tamanho do Time",
    metricExperience: "Experiência",
    location: "São Paulo, Brasil",
  },

  // ── Full Story ──────────────────────────────────────────────────────
  fullStory: {
    title: "Minha Trajetória",
    readFull: "Ler Trajetória Completa",
    readComplete: "Ler a trajetória completa →",
    dialogTitle: "A Trajetória Completa",
    dialogDesc: "Do pregão eletrônico à liderança de fintechs na América Latina.",
    quote:
      '"Comecei contando microssegundos dentro de um datacenter da B3. Hoje conto com times, tecnologia e IA para escalar produtos financeiros que impactam milhares de empresas."',
    milestones: [
      {
        period: "2008 - 2012",
        title: "A Base no Pregão Eletrônico",
        summary:
          "FIX Protocol, DMA e trading eletrônico na Link Investimentos (adquirida pelo UBS) e Banco Fator. Levou a mesa de futuros do 12º para o 4º lugar em volume na B3.",
        metric: "12º → 4º na B3 em futuros",
      },
      {
        period: "2012 - 2016",
        title: "A Era do Trader Quantitativo",
        summary:
          "Desenvolvimento quant na DLM Invista (hoje Inter Asset / Banco Inter) e trading proprietário na Infestus Capital em parceria de divisão de P&L com a Infinity Asset Management. Sistemas blackbox em C++ colocados na B3, além de 15+ pares de forex automatizados via MQL5/MetaTrader na plataforma SaxoBank.",
        metric: "Execução em microssegundos",
      },
      {
        period: "2016 - 2019",
        title: "Embedded Finance antes do hype",
        summary:
          "CTO na Captalys — construiu a primeira operação de Lending-as-a-Service do Brasil. Estruturação de FIDC, credit scoring com ML, integração direta com o Banco Central.",
        metric: "Pioneiro em Embedded Finance no BR",
      },
      {
        period: "2019 - 2023",
        title: "Do zero ao unicórnio: a55 Credit",
        summary:
          "Cofundou a a55 e construiu toda a tecnologia do zero. Primeira operação de dívida integrada com DeFi da América Latina. Escalou para 110+ engenheiros no Brasil e México.",
        metric: "R$500M+ processados, $44M captados",
      },
      {
        period: "2024 - Presente",
        title: "O Pivot: a55 Payments",
        summary:
          "Liderou a transformação em Plataforma de Orquestração de Pagamentos. Pioneiro em Agent Engineering — IA acelerando entregas em 70% com time enxuto.",
        metric: "70% mais rápido no time-to-market",
      },
      {
        period: "2025 - Presente",
        title: "Quant Backtester: O Ciclo se Fecha",
        summary:
          "Construiu um backtester institucional em Rust — 17 crates, 28K LOC. Descoberta evolutiva de estratégias (NSGA-II), métricas SIMD (AVX-512), speedup de 93x. A disciplina de HFT agora aplicada à pesquisa sistemática de estratégias.",
        metric: "93x speedup, 17 crates Rust",
      },
    ],
    chapter1Title: "A Base no Pregão Eletrônico",
    chapter1P1:
      'Minha carreira começou no epicentro da modernização financeira do Brasil. Na <strong>Link Investimentos</strong> (depois adquirida pelo UBS), mergulhei no universo do <strong>FIX Protocol</strong> e do Acesso Direto ao Mercado (<strong>DMA</strong>). Não era só plugar sistema — era entender o pulso do mercado. Construí infraestrutura que aguentava a pancada dos dias de alta volatilidade, garantindo acesso de baixa latência e confiabilidade para clientes institucionais. Cada milissegundo importava, cada mensagem perdida era inaceitável.',
    chapter1P2:
      'Essa obsessão por performance me levou ao <strong>Banco Fator</strong>, com um desafio grande: modernizar a mesa de trading eletrônico do banco. Implementamos engines de <strong>Complex Event Processing (CEP)</strong> e estratégias algorítmicas — <em>Cash & Carry</em>, <em>Mean Reversion</em>, <em>VWAP</em>, <em>TWAP</em>, <em>Pairs Trading</em>, <em>Calendar Spread</em>, <em>Butterfly Spread</em>, o <em>Casado</em>, <em>Statistical Arbitrage</em> e detecção de <em>Order Book Imbalance</em>. Resultado: levamos o banco do <strong>12º para o 4º lugar</strong> no ranking de volume de futuros na B3.',
    chapter1P3:
      'Foi aqui que coordenei meu primeiro time de desenvolvimento, mantendo sistemas críticos de OMS como <strong>Bloomberg Tradebook</strong>, <strong>SunGard</strong> e <strong>Reuters</strong>. Construímos dashboards em <strong>Java</strong> e <strong>Oracle</strong>, tropicalizando sistemas internacionais para o mercado brasileiro. Também trabalhei com a <strong>Fator Securities</strong> em Nova York, construindo sistemas de <strong>ADR Arbitrage</strong> e modelos estatísticos em <strong>C++</strong> que permitiam investidores estrangeiros operarem mean reversion em ativos brasileiros listados na NYSE.',
    chapter2Title: "A Era do Trader Quantitativo",
    chapter2P1:
      'Querendo ficar mais perto do P&L, migrei para o buy-side na <strong>DLM Invista</strong> (hoje <strong>Inter Asset</strong>, parte do ecossistema do Banco Inter) e depois como Trader Proprietário na <strong>Infestus Capital</strong>. Na Infestus, operei via <strong>parceria de divisão de P&L com a Infinity Asset Management</strong> — modelo clássico de prop trading onde o trader desenvolve e opera estratégias algorítmicas usando a infraestrutura, licenças de mercado e capital do parceiro, dividindo lucros por performance. Era a época do trading "Blackbox". Escrevi código em <strong>C++</strong> e <strong>Prolog</strong> rodando em servidores colocados dentro do datacenter da B3, executando estratégias de <em>Odd Lot Arbitrage</em> e <em>Penny Jumping</em> em microssegundos. Também fui profundamente atraído pelo aprendizado de <strong>arbitragem algorítmica de DI Futuro</strong> — usando algoritmos para capturar diferenciais de taxa de juros livres de risco ao longo da curva de juros na B3, uma disciplina altamente técnica que exige análise de sensibilidade DV01 em tempo real e execução precisa de spreads.',
    chapter2P2:
      'O arsenal de estratégias cresceu rápido: <em>Market Making</em> com cotação contínua bid/ask, <em>Latency Arbitrage</em> explorando delays de feed entre venues, <em>Box Spread</em> (arbitragem de opções risk-neutral de 4 pontas), <em>ADR Arbitrage</em> entre Nova York e São Paulo, <em>Delta Hedging</em> para neutralização contínua de opções, <em>Gamma Scalping</em> lucrando com gamma em posições delta-hedged, <em>Volatility Arbitrage</em> operando vol implícita vs realizada, <em>Statistical Arbitrage</em> em pares correlacionados, <em>Momentum Ignition</em> disparando movimentos direcionais de curto prazo, <em>Dark Pool Execution</em> para anonimato em blocos grandes, <em>Forward Rate Arbitrage (FRC/FRO)</em> em spreads de cupom cambial DI x USD, <em>DI Spread Trading (DDI)</em> em diferenciais de taxa de juros, e <em>Triangular FX Arbitrage</em> em discrepâncias de taxas cruzadas.',
    chapter2P3:
      'Na infraestrutura, cada nanossegundo importava. Usamos <strong>FPGA feed handlers</strong> para processamento acelerado por hardware, <strong>kernel bypass</strong> (DPDK/Solarflare) para eliminar overhead do SO, <strong>lock-free data structures</strong> para multithreading sem contenção e <strong>UDP multicast</strong> para distribuição eficiente de dados de mercado. Em paralelo, automatizei <strong>15+ pares de forex</strong> usando <strong>Expert Advisors em MQL5</strong> no <strong>MetaTrader</strong>, conectado ao <strong>SaxoBank</strong> (Dinamarca) — plataforma multi-ativos líder com liquidez FX de nível institucional. Cada linha de código tinha consequência financeira direta. Esse período me deu uma disciplina de gestão de risco e estabilidade de sistemas que poucos CTOs têm.',
    chapter3Title: "Embedded Finance antes do hype",
    chapter3P1:
      'Vendo a virada para fintech, entrei na <strong>Captalys</strong> como CTO. O desafio mudou de velocidade para complexidade. Arquitetei os sistemas que sustentaram uma das primeiras operações de <strong>Embedded Finance</strong> do Brasil. Construímos um motor de crédito que gerenciava estruturas complexas de <strong>FIDC</strong> (Fundo de Investimento em Direitos Creditórios), automatizando todo o ciclo de <strong>antecipação de recebíveis</strong>. Não era só emprestar dinheiro — era integrar crédito direto nos ERPs e marketplaces onde as empresas já operavam.',
    chapter3P2:
      'A stack foi construída sob medida para complexidade financeira: <strong>credit scoring com Machine Learning</strong> para avaliação de risco, <strong>engines anti-fraude</strong> que detectavam recebíveis duplicados ou fictícios em tempo real, integração direta com a <strong>API do Banco Central (BACEN)</strong> para validação de registro de recebíveis, e módulos completos de <strong>compliance CVM</strong> para reporte regulatório dos fundos de securitização.',
    chapter3P3:
      'Com <strong>Python</strong>, <strong>Node.js</strong> e <strong>Angular</strong>, construímos um sistema que se comunicava diretamente com o Banco Central para prevenir fraudes em recebíveis. Foi meu primeiro mergulho profundo na "Economia Real", saindo de fundos líquidos para direitos creditórios. Aqui percebi que precisava montar times maiores para alcançar minha visão — começou minha jornada como líder de líderes.',
    chapter4Title: "Do zero ao unicórnio: a55 Credit",
    chapter4P1:
      'Em fevereiro de 2019, cofundei a <strong>a55</strong> com a visão de transformar crédito para a economia digital. Como CTO, construí toda a tecnologia do zero e escalei para suportar mais de <strong>20.000 empresas</strong> e <strong>R$500 milhões</strong> em financiamento. Fomos pioneiros ao lançar a primeira <strong>operação de dívida integrada com DeFi</strong> da América Latina, tokenizando ativos de crédito para acessar pools de liquidez globais.',
    chapter4P2:
      'A integração DeFi foi pioneira na região. Implementamos tokens <strong>ERC-20</strong> e <strong>ERC-721</strong> para representação de ativos de crédito, usamos o <strong>Centrifuge Protocol</strong> como camada de tokenização e escrevemos smart contracts em <strong>Solidity</strong> para gerenciar o ciclo de vida on-chain dos instrumentos de dívida. Isso abriu o mercado de crédito brasileiro para investidores globais com transparência e eficiência de liquidação sem precedentes.',
    chapter4P3:
      'Escalei o time de engenharia de um pequeno squad para um departamento de <strong>110+ profissionais</strong> no Brasil e México. Captamos <strong>$44M USD</strong> em rodadas Series A e B, provando que a tecnologia escalava para demandas institucionais. A expansão para o <strong>México</strong> exigiu reconstruir módulos de compliance, adaptar modelos de crédito para regulação local e contratar e mentorar liderança de engenharia em um novo mercado. Mas o verdadeiro teste de liderança veio quando o mercado virou.',
    chapter5Title: "O Pivot: a55 Payments",
    chapter5P1:
      'Quando a crise de crédito global apertou, não recuamos — executamos um pivot. Liderei a transformação da infraestrutura core em <strong>a55 Payments</strong>, uma <strong>Plataforma de Orquestração de Pagamentos</strong> robusta. Não era só um produto novo; era uma reinvenção completa do nosso DNA tecnológico.',
    chapter5P2:
      'Mas o pivot de pagamentos foi só metade da história. Em paralelo, mergulhei fundo em <strong>Agent Engineering</strong> — não só usando IA pra gerar código, mas arquitetando um <strong>sistema multi-agente de produção</strong> como projeto pessoal. Construí 30 Product Managers de IA especializados por profissão (advogado, médico, barbeiro, desenvolvedor e mais 26), cada um mapeando dores reais em produtos financeiros através de um <strong>PM Suite Coordinator</strong>. Junto deles, um <strong>StudyOrchestrator</strong> executa 8 agentes paralelos de análise de crédito — CreditScore, CompanyProfile, EmploymentDynamics, JudicialHealth, SectorBenchmark, RegionalEconomy, BNDESHistory e Compliance — todos rodando via <strong>asyncio.gather()</strong> com contexto compartilhado pra evitar buscas redundantes. Um <strong>InterpretationEngine</strong> traduz métricas técnicas em linguagem simples que qualquer pessoa entende.',
    chapter5P3:
      'Isso é o que eu chamo de Agent Engineering como filosofia completa — não é só vibe coding. É arquitetar sistemas onde agentes autônomos geram produtos, analisam crédito e tomam decisões. O sistema inteiro é <strong>WhatsApp-first</strong> com reconhecimento de voz, usa <strong>Gemini pra pricing dinâmico</strong> e <strong>GPT-4 pra fluxos conversacionais</strong>, e roda em orquestração customizada com asyncio puro — <strong>sem framework, sem LangChain, sem CrewAI</strong>. Cada um dos 8 study runners estende um <strong>BaseStudyRunner</strong> com sua própria lógica de coleta e interpretação, enquanto os PM agents fazem mapeamento de dor-pra-produto por profissão. Combinado com <strong>Rust</strong> nos caminhos críticos de performance, essa abordagem entrega a velocidade de um time de 50 com uma fração do headcount — <strong>70% de redução no time-to-market</strong> com confiabilidade enterprise-grade.',
    chapter6Title: "O Ciclo se Fecha: Quant Backtester",
    chapter6P1:
      'Em 2025, tudo se conectou. Canalizei 17 anos de experiência em trading quantitativo para construir um <strong>backtester de nível institucional</strong> em Rust — um workspace de 17 crates com 28 mil linhas de código. O sistema tem um <strong>UnifiedEngine</strong> com aritmética de ponto fixo (i64 com 6 casas decimais), barras dual-price para validação anti-double-count, e um hot path zero-alocação que atinge <strong>speedup de 93x</strong> sobre implementações padrão via layout Structure-of-Arrays (SoA) e vetorização SIMD.',
    chapter6P2:
      'A peça central é o <strong>Strategy Combiner (SCG)</strong> — um Sistema Combinador Generativo que usa <strong>algoritmos genéticos</strong> para descobrir estratégias de trading de forma autônoma. Utiliza <strong>NSGA-II Pareto ranking</strong> para otimização multi-objetivo (CAGR, Sharpe, Max Drawdown), pipeline de validação em dois estágios (Stage A screening rápido com avaliação SIMD em batch, Stage B validação completa com Walk-Forward Analysis, PBO e DSR como gates anti-overfitting), e um Hall of Fame para promoção de estratégias elite. O fitness da população é computado com instruções <strong>AVX-512</strong> (f64x8 via crate <code>wide</code>) para throughput máximo.',
    chapter6P3:
      'O sistema inclui um <strong>dashboard desktop Tauri</strong> com 17 páginas — monitor de evolução, visualização 3D da Fronteira de Pareto, drilldown de backtest, analytics de risco (VaR/CVaR), simulação Monte Carlo, e painel de controle do OMP (Orquestrador de Mineração Perpétua) que roda 24/7. O armazenamento é feito pelo <strong>OBFS</strong> — formato binário customizado usando Parquet columnar com compressão Zstd e metadata LMDB, atingindo 7,1x de compressão com apenas 8 KB por estratégia. Este projeto é a síntese de toda minha carreira: engenharia de performance de nível HFT aplicada à pesquisa sistemática de estratégias, construída com o mesmo rigor institucional que aprendi no pregão.',
  },

  // ── Career Timeline ──────────────────────────────────────────────────
  career: {
    title: "TRAJETÓRIA",
    subtitle: "Registro cronológico de posições, estratégias e evolução técnica.",
    strategies: "Estratégias",
    techStack: "Stack",
    keyMetrics: "Resultados",
    present: "Atual",
    entries: [
      {
        id: "quant-backtester",
        summary:
          "Construiu backtester institucional em Rust (17 crates, 28K LOC). Descoberta evolutiva de estratégias com NSGA-II Pareto, métricas SIMD via AVX-512, speedup de 93x. Dashboard desktop Tauri com 17 páginas.",
        metrics: ["Speedup de 93x (SoA + SIMD)", "17 crates Rust, 28K LOC", "Algoritmo Genético (NSGA-II)", "Vetorização AVX-512"],
      },
      {
        id: "a55-payments",
        summary:
          "Liderando o pivot de crédito para orquestração de pagamentos. Gestão hands-on aplicando metodologia Agent Engineering para acelerar entregas enterprise-grade com time enxuto.",
        metrics: ["70% mais rápido no time-to-market", "Pioneiro em Agent Engineering", "PCI-DSS Level 1"],
      },
      {
        id: "a55-credit",
        summary:
          "Construiu fintech do zero até trajetória de unicórnio. Escalou de 3 para 110+ engenheiros no Brasil e México. Lançou a primeira operação de dívida com DeFi da América Latina.",
        metrics: ["R$500M+ processados", "$44M captados (Series A+B)", "20.000+ empresas atendidas", "110+ engenheiros"],
      },
      {
        id: "captalys",
        summary:
          "Pioneiro em Embedded Finance no Brasil. Arquitetou sistemas de gestão de crédito para estruturas FIDC com integração direta ao Banco Central.",
        metrics: ["Pioneiro em Embedded Finance", "Integração API Banco Central"],
      },
      {
        id: "infestus-infinity",
        summary:
          "Trader proprietário operando a partir de servidores colocados no datacenter da B3 (Equinix SP4) em parceria de divisão de P&L com a Infinity Asset Management — modelo clássico de prop trading onde o trader desenvolve e opera estratégias algorítmicas usando a infraestrutura, licenças e capital do parceiro, dividindo lucros por performance. Desenvolveu sistemas HFT em C++ e Prolog para execução em microssegundos, além de sistemas de arbitragem algorítmica de DI Futuro para captura de taxas livres de risco. Automatizou 15+ pares de forex via Expert Advisors em MQL5 no MetaTrader usando a plataforma multi-ativos SaxoBank (Dinamarca).",
        metrics: ["Execução em microssegundos", "Parceria de divisão de P&L", "15+ pares forex automatizados", "Arbitragem algorítmica de DI Futuro"],
      },
      {
        id: "dlm-invista",
        summary:
          "Construiu algoritmos de execução para estratégias de Box Spread (arbitragem de opções risk-neutral) e sistemas OMS internos no buy-side. A DLM Invista foi adquirida pelo Banco Inter em 2020 e renomeada Inter Asset, tornando-se parte do ecossistema do maior banco digital do Brasil.",
      },
      {
        id: "banco-fator",
        summary:
          "Modernizou a mesa de trading eletrônico — levou o ranking de volume de futuros do 12º para o 4º lugar. Coordenou primeiro time de desenvolvimento.",
        metrics: ["12º → 4º em volume de futuros", "Primeira liderança de time", "Fator Securities (escritório NY)"],
      },
      {
        id: "link-investimentos",
        summary:
          "Especialista em FIX Protocol construindo infraestrutura DMA para acesso institucional à liquidez da B3.",
      },
    ],
  },

  // ── Strategies Showcase ──────────────────────────────────────────────
  strategies: {
    title: "Domínio em Estratégias",
    signatureDesc: "Estratégias-chave ao longo de 17 anos em trading e fintech.",
    filteredDesc: "Todas as estratégias filtradas por categoria.",
    viewAll: "Ver todas as {count} estratégias →",
    showSignature: "Mostrar apenas as principais",
  },

  // ── Tech Arsenal ────────────────────────────────────────────────────
  tech: {
    title: "STACK_TÉCNICA",
    subtitle: "De low-level systems até orquestração de IA — domínio full-spectrum.",
  },

  // ── Recent Projects ─────────────────────────────────────────────────
  recentProjects: {
    title: "Projetos Recentes",
    subtitle:
      "Visão técnica dos sistemas que projetei e construí — de gateways de pagamento a agentes de IA.",
    viewAll: "Ver todos os {count} projetos →",
    showFeatured: "Mostrar apenas destaques",
  },

  // ── About ───────────────────────────────────────────────────────────
  about: {
    badge: "Por Trás do Código",
    title: "O Lado Humano",
    p1: 'Nascido em <strong>Maceió</strong> e criado em <strong>Salvador</strong>, carrego o espírito de dois estados nordestinos — Alagoas me deu o começo, a Bahia moldou quem eu sou. Me considero com orgulho <strong>Alagoano</strong> e <strong>Baiano</strong>, com o calor e a personalidade forte que é marca registrada de um <strong>Nordestino</strong>. Amo meu time, <strong>Esporte Clube Bahia</strong>, e trago essa mesma paixão e lealdade inabalável pro meu trabalho e pras pessoas com quem construo junto.',
    p2: 'Quando não estou arquitetando sistemas financeiros, me encontra nas lanes do <strong>Dota 2</strong>. Gaming mantém meu raciocínio estratégico afiado e meus reflexos mais rápidos que um algoritmo de HFT. Os paralelos entre coordenar uma team fight de cinco e orquestrar um deploy de sistemas distribuídos são mais reais do que a maioria das pessoas imagina.',
  },

  // ── How I Work (Leadership) ─────────────────────────────────────────
  howIWork: {
    title: "Como Trabalho",
    tabLeadership: "Liderança",
    tabAI: "Engenharia de IA",
    leaderQuote:
      '"Não acredito em liderar de longe. Os melhores sistemas que já construí nasceram quando eu estava ali, na trincheira, junto com o time."',
    rootsTitle: "Raízes & Lealdade",
    rootsDesc:
      "Nordestino — nascido em Maceió, criado em Salvador. Meu time core está comigo há 10+ anos em três empresas seguidas — Captalys, a55 Credit, a55 Payments. Não é estratégia de retenção; é família.",
    handsOnTitle: "Líder Hands-On",
    handsOnDesc:
      "Reviso PRs, faço pair-programming em problemas difíceis, debugo produção às 3 da manhã. Nunca delego o que não estou disposto a fazer eu mesmo. Liderança é presença conquistada pelo esforço.",
    leadByTitle: "Liderar pelo Exemplo",
    leadByDesc:
      "Nunca confronto o trabalho de alguém — mostro o meu no mais alto padrão. Qualidade vira cultura quando o líder é o primeiro a dar a milha extra.",
    scaleTitle: "Escalar com Confiança",
    scaleDesc:
      "Escalei de squads pequenos a 110+ profissionais no Brasil e México. Captei $44M USD. Cada conquista é do time, nunca de uma pessoa só.",
    metricTeam: "Mesmo Time Core",
    metricVentures: "Empresas Juntos",
    metricLed: "Profissionais Liderados",
    metricHandsOn: "Hands-On",
    aiQuote: '"Não só escrevo código — eu orquestro inteligência."',
    agentTitle: "Orquestração de Agentes",
    agentDesc:
      "Swarms de agentes de IA — de 30 Product Managers por profissão que mapeiam dores em produtos, a 8 agentes paralelos de análise de crédito com contexto compartilhado. Geração de código, testes automatizados, auditoria de segurança e deploy — tudo coordenado por um arquiteto humano.",
    fasterTitle: "70% Mais Rápido",
    fasterDesc:
      "Não é teoria — testado em produção com 30 PM agents por profissão mapeando dores reais em produtos, e 8 agentes paralelos de crédito (CreditScore, CompanyProfile, EmploymentDynamics, JudicialHealth, SectorBenchmark, RegionalEconomy, BNDESHistory, Compliance) rodando via asyncio.gather() com contexto compartilhado. Velocidade de um time de 50 com uma fração do headcount.",
    rustTitle: "Rust para Segurança",
    rustDesc:
      "Rust para performance e memory safety a nível de sistemas. Combinado com agentes de IA para velocidade — o melhor dos dois mundos.",
    pipelineTitle: "Pipeline Completo",
    pipelineDesc:
      "Orquestração customizada sem frameworks — asyncio.gather() puro com shared context pattern, sem LangChain nem CrewAI. WhatsApp-first com reconhecimento de voz, Gemini pra pricing, GPT-4 pra conversação, mapeamento dor-pra-produto por profissão e InterpretationEngine traduzindo métricas técnicas pra linguagem simples.",
  },

  // ── Footer ──────────────────────────────────────────────────────────
  footer: {
    location: "São Paulo, Brasil",
    remote: "Disponível Remoto",
    hireMe: "Me Contrate na Upwork",
  },
};
