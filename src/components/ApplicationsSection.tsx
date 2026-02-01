import { BarChart3, PieChart, Map, Calculator, LineChart, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="applications" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="absolute inset-0 math-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-primary font-medium">Nos Applications</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Des outils puissants pour
            <span className="gradient-text"> vos analyses</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Découvrez notre suite d'applications conçues pour faciliter le travail 
            des data analysts, chercheurs et professionnels.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group cursor-pointer hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${app.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <app.icon className={`w-6 h-6 ${app.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${app.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                  {app.category}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {app.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Voir toutes les applications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
