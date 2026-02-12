import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = "BACKEND" | "FRONTEND" | "AI_ML" | "DATA" | "BLOCKCHAIN" | "DEVOPS";

interface Project {
  name: string;
  category: Category;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  { name: "Full-Stack Payment Gateway", category: "BACKEND", description: "Multi-provider payment API with automatic fallback, double-entry ledger, webhook dedup, idempotency, 75 DB migrations across 28 DDD domains.", tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "PIX", "Circuit Breaker"] },
  { name: "Public Data ETL Pipeline", category: "DATA", description: "24 data connectors for Brazilian public sources (SELIC, IPCA, employment, judicial). Scheduled orchestration with TTL caching.", tags: ["Python", "BCB SGS", "IBGE", "CVM", "Yahoo Finance", "Cron"] },
  { name: "Credit Risk Enrichment Engine", category: "AI_ML", description: "ML-powered revenue prediction with multi-source enrichment (cadastral, sectoral, macro, market, judicial) and SHAP explainability.", tags: ["Python", "XGBoost", "LightGBM", "Prophet", "SHAP"] },
  { name: "WhatsApp Account Opening Platform", category: "BACKEND", description: "FSM-based account opening with encrypted flow processing, background workers, core banking integration, OTP/KYC/biometric verification.", tags: ["Python", "FastAPI", "WhatsApp Flows 3.0", "Redis", "asyncpg"] },
  { name: "Conversational AI Agent", category: "AI_ML", description: "Multi-persona AI platform with real-time compliance detection (KYC/AML), audit logging, 82 tests at 95% coverage.", tags: ["Python", "FastAPI", "OpenAI GPT-4", "Pydantic"] },
  { name: "Multi-Tenant ERP + Fiscal Engine", category: "BACKEND", description: "NFS-e/NF-e emission, SERPRO mTLS integration, Gov.br OAuth2, fiscal document state machine, draft autosave with E2E tests.", tags: ["React", "tRPC", "Drizzle ORM", "PostgreSQL", "SOAP", "XMLDSig"] },
  { name: "Admin Console (BFF)", category: "FRONTEND", description: "Transaction management, settlement tracking, PDF receipt generation, refund processing with glassmorphism UI.", tags: ["Nuxt 4", "Vue 3", "TypeScript", "Chart.js", "AWS Cognito"] },
  { name: "Merchant Financial Portal", category: "FRONTEND", description: "Contract management, receivables anticipation, reconciliation, escrow, installment tracking with Recharts dashboards.", tags: ["Next.js 16", "React 19", "Prisma", "Neon DB", "NextAuth"] },
  { name: "USDC Remittance Service", category: "BLOCKCHAIN", description: "Blockchain wallet creation, USDC transfers, entity secret encryption (RSA-OAEP), webhook-driven status tracking on testnet.", tags: ["Next.js", "Circle API", "Supabase", "RSA-OAEP", "ETH-SEPOLIA"] },
  { name: "Real-Time Raffle Platform", category: "FRONTEND", description: "WebSocket broadcasting with SSE, gamification badges, real-time number grid, PIX checkout, Zustand state management.", tags: ["Next.js 16", "React 19", "Zustand", "SSE", "GSAP", "Framer Motion"] },
  { name: "PCI DSS Auditing Toolkit", category: "DEVOPS", description: "Cross-platform device info collector (Linux/Win/macOS) in Go with compliance evidence dashboard.", tags: ["Go", "Next.js 16", "Netlify Blobs"] },
  { name: "AI Newsletter Generator", category: "AI_ML", description: "Multi-department AI content expansion with email + Slack distribution and anti-redundancy keyword tracking.", tags: ["Nuxt 4", "OpenAI GPT-4", "Resend", "Slack API", "Cognito"] },
  { name: "Digital Signature Infrastructure", category: "BACKEND", description: "OTP-verified document signing, certificate management (A1/A3), sandbox/production environment switching.", tags: ["Python", "FastAPI", "Express.js", "Uanataca OneShot", "e-CNPJ"] },
  { name: "Identity Verification API", category: "BACKEND", description: "KYC via biometric, civil registry queries, multi-provider OTP SMS, credit-based rate limiting with Alembic migrations.", tags: ["Python", "FastAPI", "SQLAlchemy", "Alembic"] },
  { name: "Shared Payment Landing", category: "FRONTEND", description: "QR code scanning demo, waitlist with email service, bilingual (PT/EN), OKLCH color system with scroll-triggered animations.", tags: ["React 19", "Vite", "Tailwind CSS 4", "i18next", "Framer Motion"] },
  { name: "WhatsApp-First Banking UI", category: "FRONTEND", description: "Parallax animations, magnetic buttons, custom cursor, chat simulation with ScrollTrigger effects and i18n.", tags: ["React 18", "GSAP", "Framer Motion", "i18next"] },
];

const FILTER_OPTIONS = ["ALL", "BACKEND", "FRONTEND", "AI_ML", "DATA", "BLOCKCHAIN", "DEVOPS"] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

const categoryColor: Record<Category, string> = {
  BACKEND: "bg-[#00E676]/15 text-[#00E676] border-[#00E676]/30",
  FRONTEND: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  AI_ML: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  DATA: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  BLOCKCHAIN: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  DEVOPS: "bg-sky-500/15 text-sky-400 border-sky-500/30",
};

const filterLabel: Record<FilterOption, string> = {
  ALL: "ALL", BACKEND: "BACKEND", FRONTEND: "FRONTEND", AI_ML: "AI / ML", DATA: "DATA", BLOCKCHAIN: "BLOCKCHAIN", DEVOPS: "DEVOPS",
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: -12 },
};

const FEATURED_COUNT = 6;

export default function RecentProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("ALL");
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const filtered = activeFilter === "ALL" ? projects : projects.filter((p) => p.category === activeFilter);
  const visible = showAll || activeFilter !== "ALL" ? filtered : filtered.slice(0, FEATURED_COUNT);

  return (
    <section id="recent-projects" className="relative w-full bg-neutral-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E676]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <Layers className="h-6 w-6 text-[#00E676]" />
          <h2 className="font-mono text-2xl font-bold tracking-tight text-white md:text-3xl">{t.recentProjects.title}</h2>
          <span className="ml-auto font-mono text-sm text-neutral-500">{visible.length}/{projects.length}</span>
        </div>
        <p className="mb-12 max-w-2xl font-sans text-sm leading-relaxed text-neutral-400">{t.recentProjects.subtitle}</p>

        <div className="mb-10 flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((option) => {
            const isActive = activeFilter === option;
            return (
              <button
                key={option}
                onClick={() => { setActiveFilter(option); if (option !== "ALL") setShowAll(true); }}
                className={`cursor-pointer rounded-md border px-3 py-1.5 font-mono text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "border-[#00E676]/60 bg-[#00E676]/15 text-[#00E676] shadow-[0_0_12px_rgba(0,230,118,0.15)]"
                    : "border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200"
                }`}
              >
                {filterLabel[option]}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div key={project.name} variants={cardVariants} initial="hidden" animate="visible" exit="exit" layout transition={{ type: "spring", stiffness: 340, damping: 28 }}>
                <Card className="group h-full border-neutral-800 bg-neutral-900/80 backdrop-blur-sm transition-colors duration-200 hover:border-neutral-700">
                  <CardContent className="flex h-full flex-col gap-3">
                    <Badge variant="outline" className={`w-fit font-mono text-[10px] uppercase tracking-widest ${categoryColor[project.category]}`}>{filterLabel[project.category]}</Badge>
                    <h3 className="font-mono text-sm font-semibold leading-snug text-white">{project.name}</h3>
                    <p className="font-sans text-xs leading-relaxed text-neutral-400">{project.description}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="border border-neutral-700/60 bg-neutral-800 px-1.5 py-0 font-mono text-[10px] text-neutral-400">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {activeFilter === "ALL" && !showAll && filtered.length > FEATURED_COUNT && (
          <div className="mt-8 text-center">
            <button onClick={() => setShowAll(true)} className="font-mono text-sm text-[#00E676] hover:text-[#00E676]/80 transition-colors cursor-pointer">
              {t.recentProjects.viewAll.replace("{count}", String(projects.length))}
            </button>
          </div>
        )}
        {activeFilter === "ALL" && showAll && (
          <div className="mt-8 text-center">
            <button onClick={() => setShowAll(false)} className="font-mono text-sm text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer">
              {t.recentProjects.showFeatured}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
