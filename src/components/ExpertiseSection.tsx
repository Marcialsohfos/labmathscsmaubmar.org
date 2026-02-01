import { Brain, Database, Code, BarChart, Globe, Users } from "lucide-react";

const ExpertiseSection = () => {
  const expertises = [
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Machine Learning, Deep Learning et modèles prédictifs pour l'analyse de données complexes.",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Exploration, nettoyage et analyse de grands volumes de données statistiques.",
    },
    {
      icon: Code,
      title: "Génie Logiciel",
      description: "Développement d'applications robustes et performantes sur mesure.",
    },
    {
      icon: BarChart,
      title: "Statistiques Avancées",
      description: "Analyses statistiques poussées et modélisation économétrique.",
    },
    {
      icon: Globe,
      title: "Données Géospatiales",
      description: "Cartographie, SIG et analyse spatiale des données territoriales.",
    },
    {
      icon: Users,
      title: "Démographie",
      description: "Études de population, projections et analyses des dynamiques démographiques.",
    },
  ];

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 math-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right Content - Grid of Expertise */}
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-4">
              {expertises.map((expertise, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-5 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <expertise.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                    {expertise.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {expertise.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Left Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="text-sm text-primary font-medium">Nos Expertises</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Une expertise
              <span className="gradient-text-accent"> multidisciplinaire</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Notre équipe combine des compétences variées en mathématiques appliquées, 
              informatique et sciences sociales pour apporter des solutions complètes 
              et innovantes à vos problématiques.
            </p>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-primary-foreground">Lm</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg">Lab_Math</h4>
                  <p className="text-muted-foreground text-sm">Laboratoire du SCSM Group</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Membre du réseau <span className="text-accent font-medium">CIE</span> (Création, 
                Innovation et Entrepreneuriat) au sein du SCSM Group.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
