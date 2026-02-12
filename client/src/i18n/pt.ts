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
    badge: "DISPONÍVEL PARA TRABALHO",
    title1: "ARQUITETO",
    title2: "QUANTITATIVO",
    subtitle:
      "Executivo C-Level & CTO hands-on conectando",
    subtitleHighlight1: "sistemas de trading de alta frequência",
    subtitleAnd: "e",
    subtitleHighlight2: "fintech em escala moderna",
    cta: "Entre em Contato",
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
    readFull: "Ler História Completa",
    readComplete: "Ler a história completa →",
    dialogTitle: "A História Completa",
    dialogDesc: "A jornada completa do trading eletrônico à liderança em fintech.",
    quote:
      '"Minha trajetória é definida por uma busca incansável pela eficiência — primeiro em microssegundos no pregão, e agora em escala e velocidade dentro do ecossistema fintech."',
    milestones: [
      {
        period: "2008 - 2011",
        title: "A Fundação em Alta Frequência",
        summary:
          "Protocolo FIX, DMA e trading eletrônico na Link Investimentos (adquirida pela UBS) e Banco Fator. Elevou o ranking de volume em futuros de 12º para 4º na B3.",
        metric: "12º → 4º em futuros na B3",
      },
      {
        period: "2011 - 2016",
        title: "A Era do Trader Quantitativo",
        summary:
          "Trading proprietário com sistemas blackbox em C++ rodando em servidores colocados dentro da B3. Feed handlers FPGA, kernel bypass, estruturas de dados lock-free.",
        metric: "Execução em microssegundos",
      },
      {
        period: "2016 - 2018",
        title: "Pioneirismo em Embedded Finance",
        summary:
          "CTO na Captalys — arquitetou as primeiras operações de Embedded Finance do Brasil. Estruturação de FIDC, scoring de crédito com ML, integração com API do Banco Central.",
        metric: "Pioneiro em Embedded Finance",
      },
      {
        period: "2019 - 2023",
        title: "Escalando um Unicórnio: a55 Credit",
        summary:
          "Co-fundou a a55, construiu a tecnologia do zero. Primeira operação de dívida integrada com DeFi da América Latina. Escalou para 110+ engenheiros no Brasil e México.",
        metric: "R$500M+ processados, $44M captados",
      },
      {
        period: "2024 - Presente",
        title: "O Pivot Estratégico: a55 Payments",
        summary:
          "Liderou a transformação em uma Plataforma de Orquestração de Pagamentos. Pioneiro em Agent Engineering — swarms de IA alcançando 70% mais velocidade com time enxuto.",
        metric: "70% mais rápido no time-to-market",
      },
    ],
    chapter1Title: "A Fundação em Alta Frequência",
    chapter1P1:
      'Minha carreira começou no epicentro da modernização financeira do Brasil. Na <strong>Link Investimentos</strong> (depois adquirida pela UBS), eu estava imerso no mundo do <strong>Protocolo FIX</strong> e Acesso Direto ao Mercado (<strong>DMA</strong>). Não era apenas conectar cabos; era entender o pulso do mercado. Construí sistemas que suportavam a imensa pressão dos dias de alta volatilidade, garantindo que clientes institucionais tivessem acesso confiável e de baixa latência à liquidez. Cada milissegundo contava, e cada mensagem perdida era inaceitável.',
    chapter1P2:
      'Essa obsessão por performance me levou ao <strong>Banco Fator</strong>, onde fui encarregado de um desafio monumental: modernizar a mesa de trading eletrônico. Não apenas atualizamos software; revolucionamos as capacidades de execução do banco. Implementando engines de <strong>Complex Event Processing (CEP)</strong> e estratégias algorítmicas como <em>Cash & Carry</em>, <em>Mean Reversion</em>, <em>VWAP</em>, <em>TWAP</em>, <em>Pairs Trading</em>, <em>Calendar Spread</em>, <em>Butterfly Spread</em>, o <em>Casado</em> brasileiro, <em>Statistical Arbitrage</em> e detecção de <em>Order Book Imbalance</em>, impulsionamos o banco de 12º para <strong>4º lugar</strong> no ranking de volume de futuros na B3.',
    chapter1P3:
      'Coordenei meu primeiro time de desenvolvimento aqui, mantendo sistemas críticos de Order Management (OMS) como <strong>Bloomberg Tradebook</strong>, <strong>SunGard</strong> e <strong>Reuters</strong>. Construímos dashboards em <strong>Java</strong> e <strong>Oracle</strong>, tropicalizando sistemas internacionais para o mercado brasileiro. Também trabalhei de perto com a filial da <strong>Fator Securities</strong> em Nova York, construindo sistemas para <strong>ADR Arbitrage</strong> e modelos estatísticos — usando <strong>C++</strong> para componentes críticos de performance — que permitiam investidores estrangeiros aplicar estratégias de mean reversion em ativos brasileiros listados na NYSE.',
    chapter2Title: "A Era do Trader Quantitativo",
    chapter2P1:
      'Impulsionado pelo desejo de estar mais próximo do P&L, migrei para o buy-side na <strong>DLM Invista</strong> e depois como Trader Proprietário na <strong>Infestus Capital</strong>. Esta foi a era do trading "Blackbox". Escrevi código em <strong>C++</strong> e <strong>Prolog</strong> que rodava em servidores colocados dentro do data center da B3, executando estratégias de <em>Odd Lot Arbitrage</em> e <em>Penny Jumping</em> em microssegundos.',
    chapter2P2:
      'O arsenal de estratégias expandiu dramaticamente: <em>Market Making</em> com cotação contínua bid/ask, <em>Latency Arbitrage</em> explorando atrasos de feed entre venues, <em>Box Spread</em> (arbitragem de opções risk-neutral de 4 pontos), <em>ADR Arbitrage</em> entre Nova York e São Paulo, <em>Delta Hedging</em> para neutralização contínua de opções, <em>Gamma Scalping</em> para lucrar com gamma em posições delta-hedged, <em>Volatility Arbitrage</em> negociando vol implícita vs realizada, <em>Statistical Arbitrage</em> em pares correlacionados, <em>Momentum Ignition</em> disparando movimentos direcionais de curto prazo, <em>Dark Pool Execution</em> para anonimato em blocos grandes, <em>Forward Rate Arbitrage (FRC/FRO)</em> em spreads de cupom cambial DI x USD, <em>DI Spread Trading (DDI)</em> em diferenciais de taxa de juros, e <em>Triangular FX Arbitrage</em> em discrepâncias de taxas cruzadas.',
    chapter2P3:
      'No nível de infraestrutura, cada nanossegundo importava. Implantamos <strong>feed handlers FPGA</strong> para processamento acelerado por hardware de dados de mercado, implementamos rede com <strong>kernel bypass</strong> (DPDK/Solarflare) para eliminar overhead do SO, construímos <strong>estruturas de dados lock-free</strong> para multithreading sem contenção, e usamos <strong>UDP multicast</strong> para distribuição eficiente de dados de mercado. Cada linha de código tinha uma consequência financeira direta. Esse período me incutiu uma disciplina rigorosa de gestão de risco e estabilidade de sistemas que poucos CTOs possuem.',
    chapter3Title: "Pioneirismo em Embedded Finance",
    chapter3P1:
      'Reconhecendo a mudança em direção à fintech, entrei na <strong>Captalys</strong> como CTO. Aqui, o desafio mudou de velocidade para complexidade. Arquitetei os sistemas que alimentaram uma das primeiras operações de <strong>Embedded Finance</strong> do Brasil. Construímos um motor de crédito capaz de gerenciar estruturas complexas de <strong>FIDC</strong> (Fundo de Investimento em Direitos Creditórios), automatizando todo o ciclo de vida de <strong>antecipação de recebíveis</strong>. Não apenas emprestávamos dinheiro; integrávamos crédito diretamente nos ERPs e marketplaces onde as empresas operavam.',
    chapter3P2:
      'A stack tecnológica foi construída sob medida para complexidade financeira: <strong>credit scoring com Machine Learning</strong> para avaliação de risco, <strong>engines anti-fraude</strong> que detectavam recebíveis duplicados ou fictícios em tempo real, integração direta com a <strong>API do Banco Central (BACEN)</strong> para validação de registro de recebíveis, e módulos completos de <strong>compliance CVM</strong> para reporte regulatório dos fundos de securitização.',
    chapter3P3:
      'Usando <strong>Python</strong>, <strong>Node.js</strong> e <strong>Angular</strong>, construímos um sistema que se comunicava diretamente com o Banco Central do Brasil para prevenir fraudes em recebíveis. Este foi meu primeiro mergulho profundo na "Economia Real", saindo de fundos líquidos para direitos creditórios. Foi aqui que percebi que precisava construir times maiores para alcançar minha visão, marcando o início da minha jornada como líder de líderes.',
    chapter4Title: "Escalando um Unicórnio: A Jornada a55 Credit",
    chapter4P1:
      'Em 2019, co-fundei a <strong>a55</strong> com a visão de revolucionar o crédito para a economia digital. Como CTO, construí a tecnologia do zero e a escalei para suportar mais de <strong>20.000 empresas</strong> e <strong>R$500 milhões</strong> em financiamento. Fomos pioneiros, lançando a primeira <strong>operação de dívida integrada com DeFi</strong> da América Latina, tokenizando ativos de crédito para acessar pools de liquidez global.',
    chapter4P2:
      'A integração DeFi foi revolucionária. Implementamos os padrões de token <strong>ERC-20</strong> e <strong>ERC-721</strong> para representação de ativos de crédito, utilizamos o <strong>Protocolo Centrifuge</strong> como nossa camada de tokenização, e escrevemos smart contracts em <strong>Solidity</strong> para gerenciar o ciclo de vida on-chain dos instrumentos de dívida. Isso permitiu que investidores globais participassem do mercado de crédito brasileiro com transparência e eficiência de liquidação sem precedentes.',
    chapter4P3:
      'Liderei o time de engenharia de um pequeno squad a um departamento de <strong>110+ profissionais</strong> no Brasil e México. Captamos <strong>$44M USD</strong> em rodadas Series A e B, provando que nossa tecnologia poderia escalar para atender as demandas de investidores institucionais. A expansão para o <strong>México</strong> exigiu reconstruir módulos de compliance, adaptar modelos de crédito para regulamentações locais, e contratar e mentorar liderança de engenharia em um novo mercado. Mas o verdadeiro teste de liderança veio quando o mercado mudou.',
    chapter5Title: "O Pivot Estratégico: a55 Payments",
    chapter5P1:
      'Quando a crise de crédito global chegou, não desistimos; executamos um pivot magistral. Liderei a transformação de nossa infraestrutura core em <strong>a55 Payments</strong>, uma robusta <strong>Plataforma de Orquestração de Pagamentos</strong>. Não era apenas um novo produto; era uma reinvenção completa do nosso DNA tecnológico.',
    chapter5P2:
      'Como CTO da a55 Payments, assumi um papel hands-on para construir um sistema capaz de <strong>Smart Routing</strong> de transações entre múltiplos provedores, <strong>Agregação de Adquirentes</strong> para otimização de taxas, <strong>Split Payments</strong> complexos para disbursement de marketplace, e compliance total com <strong>PCI-DSS</strong> para tratamento seguro de dados de cartão. Transformamos nossas capacidades internas de processamento de pagamentos em um powerhouse standalone gerador de receita.',
    chapter5P3:
      'Para alcançar isso com um time mais enxuto, pioneirei uma nova metodologia: <strong>Agent Engineering</strong>. Agora orquestro swarms de agentes de IA para lidar com tudo, desde geração de código até auditoria automatizada. Essa abordagem de <strong>"Vibe Coding"</strong>, combinada com <strong>Rust</strong> para performance e segurança a nível de sistemas, nos permite manter a velocidade de um time de 50 pessoas com uma fração do headcount, alcançando uma <strong>redução de 70% no time-to-market</strong> mantendo confiabilidade enterprise-grade. O futuro não é sobre contratar mais engenheiros — é sobre aumentar os que você tem com inteligência.',
  },

  // ── Career Timeline ──────────────────────────────────────────────────
  career: {
    title: "CAREER_LOG",
    subtitle: "Registro cronológico de posições, estratégias e evolução técnica.",
    strategies: "Estratégias",
    techStack: "Stack Técnica",
    keyMetrics: "Métricas-Chave",
    present: "Presente",
    entries: [
      {
        id: "a55-payments",
        summary:
          "Liderando o pivot estratégico de crédito para orquestração de pagamentos. Liderança hands-on utilizando swarms de agentes de IA para manter desenvolvimento de alta velocidade com time enxuto.",
        metrics: ["70% mais rápido no time-to-market", "Pioneiro em Agent Engineering", "PCI-DSS Level 1"],
      },
      {
        id: "a55-credit",
        summary:
          "Construiu fintech do zero até trajetória de unicórnio. Escalou time de 3 para 110+ engenheiros no Brasil e México. Lançou a primeira operação de dívida integrada com DeFi da América Latina.",
        metrics: ["R$500M+ processados", "$44M captados (Series A+B)", "20.000+ empresas atendidas", "110+ engenheiros"],
      },
      {
        id: "captalys",
        summary:
          "Pioneiro em Embedded Finance no Brasil. Arquitetou sistemas de gestão de portfólio de crédito para estruturas FIDC com integração direta ao Banco Central.",
        metrics: ["Pioneiro em Embedded Finance", "Integração API Banco Central"],
      },
      {
        id: "infinity-asset",
        summary:
          "Desenvolveu sistemas especializados de execução para spreads de Futuros DI com análise de sensibilidade DV01 e engines de cálculo de NAV em tempo real.",
      },
      {
        id: "infestus-capital",
        summary:
          "Trading proprietário de alta frequência a partir de servidores colocados dentro do data center da B3. Cada linha de código tinha consequências diretas no P&L.",
        metrics: ["Execução em microssegundos", "Estratégias risk-neutral", "P&L direto"],
      },
      {
        id: "dlm-invista",
        summary:
          "Construiu algoritmos de execução para estratégias de Box Spread (arbitragem de opções risk-neutral) e sistemas OMS internos no buy-side.",
      },
      {
        id: "banco-fator",
        summary:
          "Modernizou a mesa de trading eletrônico, elevando o ranking de volume de futuros de 12º para 4º lugar. Coordenou primeiro time de desenvolvimento.",
        metrics: ["12º → 4º em volume de futuros", "Primeira liderança de time", "Fator Securities (escritório NY)"],
      },
      {
        id: "link-investimentos",
        summary:
          "Especialista em Protocolo FIX construindo infraestrutura DMA para acesso institucional à liquidez da B3.",
      },
    ],
  },

  // ── Strategies Showcase ──────────────────────────────────────────────
  strategies: {
    title: "Expertise em Estratégias",
    signatureDesc: "Estratégias de destaque ao longo de 17 anos em trading e fintech.",
    filteredDesc: "Todas as estratégias filtradas por categoria.",
    viewAll: "Ver todas as {count} estratégias →",
    showSignature: "Mostrar apenas estratégias de destaque",
  },

  // ── Tech Arsenal ────────────────────────────────────────────────────
  tech: {
    title: "ARSENAL_TÉCNICO",
    subtitle: "Expertise full-spectrum de sistemas de baixo nível a orquestração de IA de alto nível.",
  },

  // ── Recent Projects ─────────────────────────────────────────────────
  recentProjects: {
    title: "Projetos Recentes",
    subtitle:
      "Visão engineering-first dos sistemas recentes que projetei e construí — de gateways de pagamento a agentes de IA.",
    viewAll: "Ver todos os {count} projetos →",
    showFeatured: "Mostrar apenas projetos em destaque",
  },

  // ── About ───────────────────────────────────────────────────────────
  about: {
    badge: "Por Trás do Código",
    title: "O Lado Humano",
    p1: 'Nascido em <strong>Maceió</strong> e criado em <strong>Salvador</strong>, carrego o espírito de dois estados nordestinos — Alagoas me deu o começo, a Bahia moldou quem eu sou. Me considero com orgulho <strong>Alagoano</strong> e <strong>Baiano</strong>, com o calor e a personalidade forte que é marca registrada de um <strong>Nordestino</strong>. Amo meu time, <strong>Esporte Clube Bahia</strong>, e trago essa mesma paixão e lealdade inabalável pro meu trabalho e pras pessoas com quem construo junto.',
    p2: 'Quando não estou arquitetando sistemas financeiros, você me encontra nas lanes do <strong>Dota 2</strong>. Gaming mantém meu pensamento estratégico afiado e meus reflexos mais rápidos que um algoritmo de trading de alta frequência. Os paralelos entre coordenar uma team fight de cinco pessoas e orquestrar um deploy de sistemas distribuídos são mais reais do que a maioria das pessoas imagina.',
  },

  // ── How I Work (Leadership) ─────────────────────────────────────────
  howIWork: {
    title: "Como Trabalho",
    tabLeadership: "Liderança",
    tabAI: "Engenharia de IA",
    leaderQuote:
      '"Não acredito em liderar à distância. Os melhores sistemas que já construí aconteceram quando eu estava lá nas trincheiras com meu time."',
    rootsTitle: "Raízes & Lealdade",
    rootsDesc:
      "Nordestino — nascido em Maceió, criado em Salvador. Meu time core está comigo há mais de 10 anos em três ventures consecutivas — Captalys, a55 Credit, a55 Payments. Não é estratégia de retenção; é família.",
    handsOnTitle: "Líder Hands-On",
    handsOnDesc:
      "Reviso PRs, faço pair-programming em problemas difíceis, debugo produção às 3 da manhã. Nunca delego o que não estou disposto a fazer eu mesmo. Liderança é presença conquistada pelo esforço.",
    leadByTitle: "Liderar pelo Exemplo",
    leadByDesc:
      "Nunca confronto o trabalho de alguém — apresento o meu no mais alto padrão. Qualidade se torna contagiosa quando o líder demonstra a milha extra primeiro.",
    scaleTitle: "Escalar com Confiança",
    scaleDesc:
      "Escalei de pequenos squads a 110+ profissionais no Brasil e México. Captei $44M USD. Cada marco pertence ao time, nunca a uma pessoa.",
    metricTeam: "Mesmo Time Core",
    metricVentures: "Ventures Juntos",
    metricLed: "Profissionais Liderados",
    metricHandsOn: "Hands-On",
    aiQuote: '"Eu não apenas escrevo código; eu orquestro inteligência."',
    agentTitle: "Orquestração de Agentes",
    agentDesc:
      "Orquestrando swarms de agentes de IA para geração de código, testes automatizados, auditoria de segurança e deploy — tudo coordenado por um arquiteto humano.",
    fasterTitle: "70% Mais Rápido",
    fasterDesc:
      "Pioneiro em metodologia assistida por IA que acelera entregas mantendo qualidade enterprise-grade. Velocidade de um time de 50 pessoas com uma fração do headcount.",
    rustTitle: "Rust para Segurança",
    rustDesc:
      "Utilizando Rust para performance e segurança de memória a nível de sistemas. Combinado com agentes de IA para velocidade — o melhor dos dois mundos.",
    pipelineTitle: "Pipeline Completo",
    pipelineDesc:
      "De prompt engineering a deploy em produção. Orquestração Claude/GPT, Cursor IDE, code review automatizado, integração CI/CD.",
  },

  // ── Footer ──────────────────────────────────────────────────────────
  footer: {
    location: "São Paulo, Brasil",
    remote: "Disponível Remoto",
  },
};
