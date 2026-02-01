import { ArrowRight, TrendingUp, Users, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 math-grid opacity-30" />
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Floating Math Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] text-6xl text-primary/10 floating font-display">∑</div>
        <div className="absolute top-1/3 right-[15%] text-5xl text-primary/10 floating-delayed font-display">∫</div>
        <div className="absolute bottom-1/3 left-[20%] text-4xl text-primary/10 floating font-display">π</div>
        <div className="absolute bottom-1/4 right-[10%] text-5xl text-primary/10 floating-delayed font-display">∞</div>
        <div className="absolute top-1/2 left-[5%] text-3xl text-accent/10 floating font-display">Δ</div>
        <div className="absolute top-[60%] right-[25%] text-4xl text-accent/10 floating-delayed font-display">λ</div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Membre du <span className="text-primary font-medium">SCSM Group</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Laboratoire de
            <br />
            <span className="gradient-text">Mathématiques Appliquées</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Modélisation des phénomènes démographiques, développement d'applications 
            innovantes pour les data analysts, professionnels et étudiants.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl">
              Découvrir nos applications
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              En savoir plus
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-display font-bold">15+</div>
                  <div className="text-xs text-muted-foreground">Applications</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-display font-bold">500+</div>
                  <div className="text-xs text-muted-foreground">Utilisateurs</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-display font-bold">10+</div>
                  <div className="text-xs text-muted-foreground">Chercheurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
