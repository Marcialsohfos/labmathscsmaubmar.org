import { ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(199_89%_48%)] flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">Lm</span>
              </div>
              <span className="font-display font-bold text-xl">
                Lab<span className="gradient-text">_Math</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Laboratoire de Mathématiques Appliquées
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-8">
            <a href="#apropos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              À propos
            </a>
            <a href="#applications" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Applications
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* SCSM Group Link */}
          <div className="flex md:justify-end">
            <a 
              href="https://www.scsmaubmar.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              SCSM Group
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Lab_Math. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-sm">
            Un laboratoire du{" "}
            <a 
              href="https://www.scsmaubmar.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              SCSM Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
