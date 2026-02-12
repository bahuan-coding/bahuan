import { Terminal, Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="border-t border-border/50 pt-12 pb-8">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="flex items-center gap-2 font-mono font-bold text-lg">
          <Terminal className="h-5 w-5 text-primary" />
          <span>ANDRE_SILVA</span>
        </div>

        {/* Contact & Social Links */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="text-sm text-muted-foreground font-mono text-center md:text-right">
            <p>São Paulo, Brazil &bull; Remote Available</p>
            <p>alsilva86@gmail.com</p>
          </div>

          {/* Social Icons */}
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

      {/* Bottom — System Version */}
      <div className="mt-8 text-center text-xs text-muted-foreground font-mono">
        SYSTEM_VERSION: 3.0.26 // DEPLOYED_VIA_NETLIFY
      </div>
    </footer>
  );
}
