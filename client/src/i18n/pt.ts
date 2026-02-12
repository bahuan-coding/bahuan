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
        period: "2008 - 2011",
        title: "A Base no Pregão Eletrônico",
        summary:
          "FIX Protocol, DMA e trading eletrônico na Link Investimentos (adquirida pelo UBS) e Banco Fator. Levou a mesa de futuros do 12º para o 4º lugar em volume na B3.",
        metric: "12º → 4º na B3 em futuros",
      },
      {
        period: "2011 - 2016",
        title: "A Era do Trader Quantitativo",
        summary:
          "Trading proprietário com sistemas blackbox em C++ rodando em servidores colocados na B3. FPGA feed handlers, kernel bypass, lock-free data structures.",
        metric: "Execução em microssegundos",
      },
      {
        period: "2016 - 2018",
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
      'Querendo ficar mais perto do P&L, migrei para o buy-side na <strong>DLM Invista</strong> e depois como Trader Proprietário na <strong>Infestus Capital</strong>. Era a época do trading "Blackbox". Escrevi código em <strong>C++</strong> e <strong>Prolog</strong> rodando em servidores colocados dentro do datacenter da B3, executando estratégias de <em>Odd Lot Arbitrage</em> e <em>Penny Jumping</em> em microssegundos.',
    chapter2P2:
      'O arsenal de estratégias cresceu rápido: <em>Market Making</em> com cotação contínua bid/ask, <em>Latency Arbitrage</em> explorando delays de feed entre venues, <em>Box Spread</em> (arbitragem de opções risk-neutral de 4 pontas), <em>ADR Arbitrage</em> entre Nova York e São Paulo, <em>Delta Hedging</em> para neutralização contínua de opções, <em>Gamma Scalping</em> lucrando com gamma em posições delta-hedged, <em>Volatility Arbitrage</em> operando vol implícita vs realizada, <em>Statistical Arbitrage</em> em pares correlacionados, <em>Momentum Ignition</em> disparando movimentos direcionais de curto prazo, <em>Dark Pool Execution</em> para anonimato em blocos grandes, <em>Forward Rate Arbitrage (FRC/FRO)</em> em spreads de cupom cambial DI x USD, <em>DI Spread Trading (DDI)</em> em diferenciais de taxa de juros, e <em>Triangular FX Arbitrage</em> em discrepâncias de taxas cruzadas.',
    chapter2P3:
      'Na infraestrutura, cada nanossegundo importava. Usamos <strong>FPGA feed handlers</strong> para processamento acelerado por hardware, <strong>kernel bypass</strong> (DPDK/Solarflare) para eliminar overhead do SO, <strong>lock-free data structures</strong> para multithreading sem contenção e <strong>UDP multicast</strong> para distribuição eficiente de dados de mercado. Cada linha de código tinha consequência financeira direta. Esse período me deu uma disciplina de gestão de risco e estabilidade de sistemas que poucos CTOs têm.',
    chapter3Title: "Embedded Finance antes do hype",
    chapter3P1:
      'Vendo a virada para fintech, entrei na <strong>Captalys</strong> como CTO. O desafio mudou de velocidade para complexidade. Arquitetei os sistemas que sustentaram uma das primeiras operações de <strong>Embedded Finance</strong> do Brasil. Construímos um motor de crédito que gerenciava estruturas complexas de <strong>FIDC</strong> (Fundo de Investimento em Direitos Creditórios), automatizando todo o ciclo de <strong>antecipação de recebíveis</strong>. Não era só emprestar dinheiro — era integrar crédito direto nos ERPs e marketplaces onde as empresas já operavam.',
    chapter3P2:
      'A stack foi construída sob medida para complexidade financeira: <strong>credit scoring com Machine Learning</strong> para avaliação de risco, <strong>engines anti-fraude</strong> que detectavam recebíveis duplicados ou fictícios em tempo real, integração direta com a <strong>API do Banco Central (BACEN)</strong> para validação de registro de recebíveis, e módulos completos de <strong>compliance CVM</strong> para reporte regulatório dos fundos de securitização.',
    chapter3P3:
      'Com <strong>Python</strong>, <strong>Node.js</strong> e <strong>Angular</strong>, construímos um sistema que se comunicava diretamente com o Banco Central para prevenir fraudes em recebíveis. Foi meu primeiro mergulho profundo na "Economia Real", saindo de fundos líquidos para direitos creditórios. Aqui percebi que precisava montar times maiores para alcançar minha visão — começou minha jornada como líder de líderes.',
    chapter4Title: "Do zero ao unicórnio: a55 Credit",
    chapter4P1:
      'Em 2019, cofundei a <strong>a55</strong> com a visão de transformar crédito para a economia digital. Como CTO, construí toda a tecnologia do zero e escalei para suportar mais de <strong>20.000 empresas</strong> e <strong>R$500 milhões</strong> em financiamento. Fomos pioneiros ao lançar a primeira <strong>operação de dívida integrada com DeFi</strong> da América Latina, tokenizando ativos de crédito para acessar pools de liquidez globais.',
    chapter4P2:
      'A integração DeFi foi pioneira na região. Implementamos tokens <strong>ERC-20</strong> e <strong>ERC-721</strong> para representação de ativos de crédito, usamos o <strong>Centrifuge Protocol</strong> como camada de tokenização e escrevemos smart contracts em <strong>Solidity</strong> para gerenciar o ciclo de vida on-chain dos instrumentos de dívida. Isso abriu o mercado de crédito brasileiro para investidores globais com transparência e eficiência de liquidação sem precedentes.',
    chapter4P3:
      'Escalei o time de engenharia de um pequeno squad para um departamento de <strong>110+ profissionais</strong> no Brasil e México. Captamos <strong>$44M USD</strong> em rodadas Series A e B, provando que a tecnologia escalava para demandas institucionais. A expansão para o <strong>México</strong> exigiu reconstruir módulos de compliance, adaptar modelos de crédito para regulação local e contratar e mentorar liderança de engenharia em um novo mercado. Mas o verdadeiro teste de liderança veio quando o mercado virou.',
    chapter5Title: "O Pivot: a55 Payments",
    chapter5P1:
      'Quando a crise de crédito global apertou, não recuamos — executamos um pivot. Liderei a transformação da infraestrutura core em <strong>a55 Payments</strong>, uma <strong>Plataforma de Orquestração de Pagamentos</strong> robusta. Não era só um produto novo; era uma reinvenção completa do nosso DNA tecnológico.',
    chapter5P2:
      'Como CTO da a55 Payments, coloquei a mão na massa para construir um sistema com <strong>Smart Routing</strong> entre múltiplos provedores, <strong>Agregação de Adquirentes</strong> para otimização de taxas, <strong>Split Payments</strong> complexos para disbursement de marketplace e compliance total com <strong>PCI-DSS</strong> para tratamento seguro de dados de cartão. Transformamos nossas capacidades internas em um produto standalone gerador de receita.',
    chapter5P3:
      'Para entregar isso com um time mais enxuto, criei uma nova metodologia: <strong>Agent Engineering</strong>. Hoje orquestro swarms de agentes de IA para lidar com tudo — de geração de código a auditoria automatizada. Essa abordagem de <strong>"Vibe Coding"</strong>, combinada com <strong>Rust</strong> para performance e segurança a nível de sistemas, nos permite manter a velocidade de um time de 50 pessoas com uma fração do headcount, alcançando <strong>70% de redução no time-to-market</strong> com confiabilidade enterprise-grade. O futuro não é sobre contratar mais engenheiros — é sobre multiplicar os que você tem com inteligência.',
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
        id: "a55-payments",
        summary:
          "Liderando o pivot de crédito para orquestração de pagamentos. Gestão hands-on com swarms de agentes de IA para manter velocidade de entrega com time enxuto.",
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
        id: "infinity-asset",
        summary:
          "Construiu sistemas de execução para spreads de DI Futuro com análise de sensibilidade DV01 e engines de cálculo de NAV em tempo real.",
      },
      {
        id: "infestus-capital",
        summary:
          "Trading proprietário de alta frequência a partir de servidores colocados no datacenter da B3. Cada linha de código impactava direto no P&L.",
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
      "Swarms de agentes de IA para geração de código, testes automatizados, auditoria de segurança e deploy — tudo coordenado por um arquiteto humano.",
    fasterTitle: "70% Mais Rápido",
    fasterDesc:
      "Metodologia assistida por IA que acelera entregas mantendo qualidade enterprise-grade. Velocidade de um time de 50 com uma fração do headcount.",
    rustTitle: "Rust para Segurança",
    rustDesc:
      "Rust para performance e memory safety a nível de sistemas. Combinado com agentes de IA para velocidade — o melhor dos dois mundos.",
    pipelineTitle: "Pipeline Completo",
    pipelineDesc:
      "De prompt engineering a deploy em produção. Orquestração Claude/GPT, Cursor IDE, code review automatizado, CI/CD integrado.",
  },

  // ── Footer ──────────────────────────────────────────────────────────
  footer: {
    location: "São Paulo, Brasil",
    remote: "Disponível Remoto",
  },
};
