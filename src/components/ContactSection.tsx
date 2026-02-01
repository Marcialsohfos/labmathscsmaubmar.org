import React, { useState } from "react";
import { Mail, MapPin, ExternalLink, Send } from "lucide-react";
// Correction de l'import : Utilisation du chemin relatif direct
import { Button } from "./button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission
    console.log("Form submitted:", formData);
    alert("Message reçu ! Nous vous contacterons bientôt.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020C1B]">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/patterns/math-grid.svg')] bg-repeat" />
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#64FFDA]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#64FFDA]/20 bg-[#64FFDA]/5 mb-6">
            <span className="text-sm text-[#64FFDA] font-medium">Contact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Travaillons
            <span className="text-[#64FFDA]"> ensemble</span>
          </h2>
          
          <p className="text-slate-400 text-lg">
            Vous avez un projet ou une question ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0A192F]/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#64FFDA]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#64FFDA]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Email</h4>
                    <a href="mailto:contact@scsmaubmar.org" className="text-slate-400 hover:text-[#64FFDA] transition-colors">
                      contact@scsmaubmar.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Adresse</h4>
                    <p className="text-slate-400">
                      SCSM Group<br />
                      Pôle Lab_Math
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#64FFDA]/10 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-[#64FFDA]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Site parent</h4>
                    <a 
                      href="https://www.scsmaubmar.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#64FFDA] transition-colors"
                    >
                      www.scsmaubmar.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SCSM Group Card */}
            <div className="bg-[#0A192F]/50 border border-slate-800 border-l-4 border-l-[#D4AF37] rounded-2xl p-6">
              <h4 className="font-semibold mb-2 text-white">Membre du SCSM Group</h4>
              <p className="text-slate-400 text-sm mb-4">
                Lab_Math fait partie du SCSM Group, une structure dédiée à l'appui technique, 
                la gestion des données et l'innovation.
              </p>
              <a 
                href="https://www.scsmaubmar.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors text-sm font-medium"
              >
                Visiter le site SCSM Group
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0A192F]/50 border border-slate-800 rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-6 text-white">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#020C1B] border border-slate-700 text-white focus:border-[#64FFDA] focus:outline-none transition-all placeholder:text-slate-600"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#020C1B] border border-slate-700 text-white focus:border-[#64FFDA] focus:outline-none transition-all placeholder:text-slate-600"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-300">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#020C1B] border border-slate-700 text-white focus:border-[#64FFDA] focus:outline-none transition-all"
                  required
                >
                  <option value="" className="bg-[#0A192F]">Sélectionnez un sujet</option>
                  <option value="collaboration" className="bg-[#0A192F]">Collaboration</option>
                  <option value="application" className="bg-[#0A192F]">Question sur une application</option>
                  <option value="formation" className="bg-[#0A192F]">Formation</option>
                  <option value="autre" className="bg-[#0A192F]">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#020C1B] border border-slate-700 text-white focus:border-[#64FFDA] focus:outline-none transition-all resize-none placeholder:text-slate-600"
                  placeholder="Votre message..."
                  required
                />
              </div>

              {/* Utilisation de variant="default" défini dans button.tsx */}
              <Button type="submit" variant="default" size="lg" className="w-full gap-3">
                Envoyer le message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;