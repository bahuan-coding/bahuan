import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const companies = [
  "a55 Payments",
  "a55 Credit",
  "Captalys",
  "Infinity Asset",
  "Infestus Capital",
  "DLM Invista",
  "Banco Fator",
  "Link / UBS",
];

export default function FooterSection() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 pt-12 pb-8 space-y-8">
      {/* Company Logo Bar */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {companies.map((name) => (
          <span
            key={name}
            className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider"
          >
            {name}
          </span>
        ))}
      </div>

      {/* Main row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-mono font-bold text-lg">
          <Terminal className="h-5 w-5 text-primary" />
          <span>ANDRE_SILVA</span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="text-sm text-muted-foreground font-mono text-center md:text-right">
            <p>{t.footer.location} &bull; {t.footer.remote}</p>
            <p>
              <a href="mailto:alsilva86@gmail.com" className="hover:text-primary transition-colors">
                alsilva86@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bahuan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/andreluizsilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:alsilva86@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground font-mono">
        SYSTEM_VERSION: 3.1.0 // DEPLOYED_VIA_NETLIFY
      </div>
    </footer>
  );
}
