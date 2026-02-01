import React from "react";
import { 
  BarChart3, 
  PieChart, 
  Map, 
  Calculator, 
  LineChart, 
  Database 
} from "lucide-react";
// Correction de l'import : On utilise un chemin relatif pour éviter les erreurs d'alias TypeScript
import { Button } from "./button"; 

const ApplicationsSection = () => {
  const applications = [
    {
      icon: BarChart3,
      title: "StatDemo Pro",
      description: "Analyse statistique avancée pour les données démographiques et les enquêtes de population.",
      category: "Statistiques",
      color: "primary",
    },
    {
      icon: Map,
      title: "GeoData Mapper",
      description: "Visualisation géospatiale interactive des données territoriales et démographiques.",
      category: "Géospatial",
      color: "accent",
    },
    {
      icon: PieChart,
      title: "PopModel",
      description: "Modélisation prédictive des dynamiques de population et projections démographiques.",
      category: "Modélisation",
      color: "primary",
    },
    {
      icon: Calculator,
      title: "MathLab Tools",
      description: "Suite d'outils mathématiques pour les chercheurs et étudiants en sciences appliquées.",
      category: "Outils",
      color: "accent",
    },
    {
      icon: LineChart,
      title: "TrendAnalyzer",
      description: "Détection et analyse des tendances dans les séries temporelles démographiques.",
      category: "Analyse",
      color: "primary",
    },
    {
      icon: Database,
      title: "DataHub Connect",
      description: "Plateforme centralisée de gestion et partage des données statistiques.",
      category: "Données",
      color: "accent",
    },
  ];

  return (
    <section id="applications" className="py-24 relative overflow-hidden bg-[#020C1B]">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/patterns/math-grid.svg')] bg-repeat" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5 mb-6">
            <span className="text-sm text-[#64FFDA] font-medium font-mono">Nos Applications</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Des outils puissants pour
            <span className="text-[#64FFDA]"> vos analyses</span>
          </h2>
          
          <p className="text-slate-400 text-lg">
            Découvrez notre suite d'applications conçues pour faciliter le travail 
            des data analysts, chercheurs et professionnels.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-[#0A192F]/50 border border-slate-800 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group cursor-pointer hover:border-cyan/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  app.color === 'primary' ? 'bg-[#64FFDA]/10' : 'bg-[#D4AF37]/10'
                }`}>
                  <app.icon className={`w-6 h-6 ${
                    app.color === 'primary' ? 'text-[#64FFDA]' : 'text-[#D4AF37]'
                  }`} />
                </div>
                <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border ${
                  app.color === 'primary' ? 'border-[#64FFDA]/20 text-[#64FFDA]' : 'border-[#D4AF37]/20 text-[#D4AF37]'
                }`}>
                  {app.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#64FFDA] transition-colors">
                {app.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          {/* Note: variant="default" correspond au style Navy/Cyan défini dans notre fichier button.tsx */}
          <Button variant="default" size="lg">
            Voir toutes les applications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;