import { Target, Lightbulb, Rocket, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Modélisation mathématique avancée",
    "Analyse démographique et statistique",
    "Développement d'outils sur mesure",
    "Formation et accompagnement",
  ];

  return (
    <section id="apropos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 math-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="text-sm text-primary font-medium">À propos</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Innover par les
              <span className="gradient-text"> Mathématiques</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              <span className="text-foreground font-medium">Lab_Math</span> est un laboratoire 
              de recherche appliquée dédié à la modélisation des phénomènes démographiques 
              et au développement d'applications innovantes. Adossé au{" "}
              <a 
                href="https://www.scsmaubmar.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                SCSM Group
              </a>
              , nous œuvrons pour faciliter le travail des data analysts, 
              professionnels, étudiants et acteurs sociaux.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Cards */}
          <div className="grid gap-6">
            <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Notre Mission</h3>
              <p className="text-muted-foreground">
                Développer des solutions mathématiques innovantes pour résoudre 
                les problèmes complexes liés à la population et aux données.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Création d'outils à la pointe de la technologie en IA et Data Science.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Impact</h3>
                <p className="text-muted-foreground text-sm">
                  Des solutions concrètes pour un impact réel sur le terrain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
