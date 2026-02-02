import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
// Correction de l'import : Utilisation du chemin relatif direct
import { Button } from "./button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Applications", href: "#applications" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 bg-[#020C1B]/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[#64FFDA] flex items-center justify-center">
              <span className="font-display font-bold text-white text-lg">Lm</span>
            </div>
            <span className="font-display font-bold text-xl text-white">
              Lab<span className="text-[#64FFDA]">_Math</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-[#64FFDA] transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.scsmaubmar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#64FFDA] transition-colors"
            >
              SCSM Group
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {/* Utilisation du variant hero que vous avez défini dans button.tsx */}
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-[#0A192F]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-[#64FFDA] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.scsmaubmar.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-[#64FFDA] transition-colors py-2"
              >
                SCSM Group
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Button variant="hero" className="mt-2 w-full" asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Nous contacter
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;