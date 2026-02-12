import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Cpu, Database, Shield, GitBranch } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface LanguageItem {
  name: string;
  level: number;
  label: string;
}

interface TechItem {
  name: string;
  badge: string;
}

interface CategoryCard {
  title: string;
  icon: React.ElementType;
  type: "languages" | "tech";
  items: LanguageItem[] | TechItem[];
  /** If true, badges use green outline style instead of secondary */
  greenBadges?: boolean;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const categories: CategoryCard[] = [
  {
    title: "LANGUAGES & RUNTIMES",
    icon: Code,
    type: "languages",
    items: [
      { name: "Rust", level: 95, label: "SYSTEMS" },
      { name: "Python", level: 92, label: "QUANT/ML" },
      { name: "TypeScript", level: 88, label: "FULLSTACK" },
      { name: "C++", level: 80, label: "HFT_LEGACY" },
      { name: "Go", level: 70, label: "SERVICES" },
      { name: "Java", level: 65, label: "LEGACY" },
      { name: "Prolog", level: 60, label: "INFERENCE" },
      { name: "Solidity", level: 55, label: "WEB3" },
    ] as LanguageItem[],
  },
  {
    title: "INFRASTRUCTURE & CLOUD",
    icon: Server,
    type: "tech",
    items: [
      { name: "AWS (ECS/Lambda/S3)", badge: "CLOUD_NATIVE" },
      { name: "Azure", badge: "MULTI_CLOUD" },
      { name: "Kubernetes", badge: "ORCHESTRATION" },
      { name: "Terraform / IaC", badge: "AUTOMATION" },
      { name: "Docker", badge: "CONTAINERIZATION" },
    ] as TechItem[],
  },
  {
    title: "AI & AGENT ENGINEERING",
    icon: Cpu,
    type: "tech",
    greenBadges: true,
    items: [
      { name: "Agentic Coding", badge: "ADVANCED" },
      { name: "LLM Orchestration (Claude/GPT)", badge: "PROD_READY" },
      { name: "Vibe Coding Methodology", badge: "PIONEER" },
      { name: "AI Agent Swarms", badge: "ARCHITECTURE" },
      { name: "Prompt Engineering", badge: "SYSTEMATIC" },
    ] as TechItem[],
  },
  {
    title: "FINANCIAL PROTOCOLS",
    icon: Shield,
    type: "tech",
    items: [
      { name: "FIX Protocol 4.2/4.4", badge: "LOW_LATENCY" },
      { name: "Bloomberg API/EMSX", badge: "MARKET_DATA" },
      { name: "B3 DMA Gateway", badge: "EXCHANGE" },
      { name: "OMS (Tradebook/SunGard)", badge: "EXECUTION" },
      { name: "CEP Engine", badge: "REAL_TIME" },
      { name: "BACEN/CVM APIs", badge: "REGULATORY" },
    ] as TechItem[],
  },
  {
    title: "DATABASES & DATA",
    icon: Database,
    type: "tech",
    items: [
      { name: "PostgreSQL", badge: "PRIMARY" },
      { name: "MongoDB", badge: "DOCUMENT" },
      { name: "Redis", badge: "CACHE" },
      { name: "Oracle", badge: "LEGACY" },
      { name: "TimescaleDB", badge: "TIMESERIES" },
      { name: "Apache Kafka", badge: "STREAMING" },
    ] as TechItem[],
  },
  {
    title: "DEVOPS & OBSERVABILITY",
    icon: GitBranch,
    type: "tech",
    items: [
      { name: "CI/CD (GitHub Actions)", badge: "PIPELINE" },
      { name: "Datadog / Grafana", badge: "MONITORING" },
      { name: "PCI-DSS Compliance", badge: "SECURITY" },
      { name: "Disaster Recovery", badge: "RESILIENCE" },
      { name: "Load Testing (k6)", badge: "PERFORMANCE" },
    ] as TechItem[],
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function LanguageRow({ item }: { item: LanguageItem }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-neutral-300">{item.name}</span>
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="border border-neutral-700/60 bg-neutral-800 px-1.5 py-0 font-mono text-[10px] text-neutral-400"
          >
            {item.label}
          </Badge>
          <span className="font-mono text-[10px] text-neutral-500">
            {item.level}%
          </span>
        </div>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${item.level}%` }}
        />
      </div>
    </div>
  );
}

function TechRow({
  item,
  green,
}: {
  item: TechItem;
  green?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="font-mono text-xs text-neutral-300">{item.name}</span>
      {green ? (
        <Badge
          variant="outline"
          className="border-[#00E676]/40 bg-[#00E676]/10 px-1.5 py-0 font-mono text-[10px] text-[#00E676]"
        >
          {item.badge}
        </Badge>
      ) : (
        <Badge
          variant="secondary"
          className="border border-neutral-700/60 bg-neutral-800 px-1.5 py-0 font-mono text-[10px] text-neutral-400"
        >
          {item.badge}
        </Badge>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function TechArsenal() {
  return (
    <section
      id="tech-arsenal"
      className="relative w-full bg-neutral-950 py-24 md:py-32"
    >
      {/* Subtle top-border glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E676]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className="mb-4">
          <h2 className="font-mono text-2xl font-bold tracking-tight text-white md:text-3xl">
            TECHNICAL_ARSENAL
          </h2>
        </div>
        <p className="mb-12 max-w-2xl font-sans text-sm leading-relaxed text-neutral-400">
          Full-spectrum expertise from low-level systems to high-level AI
          orchestration.
        </p>

        {/* ── Grid ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <Card
                key={cat.title}
                className="border-border bg-card/50 backdrop-blur-sm transition-colors duration-200 hover:border-neutral-700"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2.5 font-mono text-sm tracking-wide">
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    {cat.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-1">
                  {cat.type === "languages"
                    ? (cat.items as LanguageItem[]).map((item) => (
                        <LanguageRow key={item.name} item={item} />
                      ))
                    : (cat.items as TechItem[]).map((item) => (
                        <TechRow
                          key={item.name}
                          item={item}
                          green={cat.greenBadges}
                        />
                      ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
