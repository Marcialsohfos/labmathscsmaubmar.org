// Utilisation de chemins relatifs pour éviter les erreurs d'alias TypeScript sur Vercel
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection"; 
import ApplicationsSection from "../components/ApplicationsSection";
import ExpertiseSection from "../components/ExpertiseSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    // "bg-[#020C1B]" assure la cohérence avec votre thème Navy sombre
    <div className="min-h-screen bg-[#020C1B]">
      <Navbar />
      <HeroSection />
      
      {/* Note: Si ExpertiseSection et AboutSection sont identiques, 
          vous pouvez en supprimer un pour éviter les doublons */}
      <AboutSection /> 
      
      <ExpertiseSection />
      <ApplicationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
