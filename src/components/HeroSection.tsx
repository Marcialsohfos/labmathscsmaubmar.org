import React from "react";
import { ArrowRight, TrendingUp, Users, Brain } from "lucide-react";
// Correction de l'import : chemin relatif
import { Button } from "./button";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020C1B]">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/patterns/math-grid.svg')] bg-repeat" />
      
      {/* Floating Math Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] text-6xl text-[#64FFDA]/10 font-serif animate-bounce" style={{ animationDuration: '3s' }}>∑</div>
        <div className="absolute top-1/3 right-[15%] text-5xl text-[#64FFDA]/10 font-serif animate-bounce" style={{ animationDuration: '4s' }}>∫</div>
        <div className="absolute bottom-1/3 left-[20%] text-4xl text-[#D4AF37]/10 font-serif animate-bounce" style={{ animationDuration: '5s' }}>π</div>
        <div className="absolute bottom-1/4 right-[10%] text-5xl text-[#D4AF37]/10 font-serif animate-bounce" style={{ animationDuration: '3.5s' }}>∞</div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#64FFDA]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#64FFDA]/20 bg-[#64FFDA]/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#64FFDA] animate-pulse" />
            <span className="text-sm text-slate-300">
              Membre du <span className="text-[#64FFDA] font-medium">SCSM Group</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            Laboratoire de
            <br />
            <span className="text-[#64FFDA]">Mathématiques Appliquées</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Modélisation des phénomènes démographiques, développement d'applications 
            innovantes pour les data analysts, professionnels et étudiants.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Utilisation de variant="default" (Cyan/Navy) */}
            <Button variant="default" size="lg" className="gap-2 px-8 h-14 text-base">
              Découvrir nos applications
              <ArrowRight className="w-5 h-5" />
            </Button>
            {/* Utilisation de variant="outline" (Gold) */}
            <Button variant="outline" size="lg" className="px-8 h-14 text-base">
              En savoir plus
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-[#0A192F]/60 border border-slate-800 rounded-xl p-4 hover:border-[#64FFDA]/50 transition-all">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#64FFDA]/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#64FFDA]" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Applications</div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0A192F]/60 border border-slate-800 rounded-xl p-4 hover:border-[#D4AF37]/50 transition-all">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Utilisateurs</div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0A192F]/60 border border-slate-800 rounded-xl p-4 hover:border-[#64FFDA]/50 transition-all">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#64FFDA]/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#64FFDA]" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Chercheurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020C1B] to-transparent" />
    </section>
  );
};

export default HeroSection;