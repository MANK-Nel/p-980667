
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Users, TrendingUp, Target, Megaphone, MoveRight, Globe, Smartphone, Edit, Palette } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      title: "Stratégie de Communication Digitale",
      description: "Attirez, engagez et transformez votre audience. Boostly construit pour vous une stratégie digitale sur mesure.",
      icon: <TrendingUp size={24} />,
      imageSrc: "/lovable-uploads/7c452a1b-7322-4016-8e90-be0bbd96a1aa.png",
      link: "/services#strategie"
    },
    {
      title: "Gestion des Réseaux Sociaux",
      description: "Du contenu qui attire, une communauté qui s'engage. Avec Boostly, vos réseaux deviennent un véritable moteur de croissance.",
      icon: <Users size={24} />,
      imageSrc: "/lovable-uploads/6198a975-f7c8-4db0-94f9-549e36fb37b9.png",
      link: "/services#community"
    },
    {
      title: "Création de Contenu Impactant",
      description: "Faites parler votre marque. Boostly crée des contenus qui font toute la différence.",
      icon: <Edit size={24} />,
      imageSrc: "/lovable-uploads/0b5cfb3d-b840-4f3e-ac4c-600caa79ab0b.png",
      link: "/services#contenu"
    },
    {
      title: "Branding",
      description: "Votre marque, votre histoire, notre expertise. Avec Boostly, construisez une identité qui inspire confiance.",
      icon: <Target size={24} />,
      imageSrc: "/lovable-uploads/ce3008af-7a70-4d8d-9cec-0e01487092f4.png",
      link: "/services#branding"
    },
    {
      title: "Design Graphique",
      description: "Un design réfléchi, un message renforcé. Boostly transforme vos idées en créations qui impactent. Misez sur l'excellence visuelle.",
      icon: <Palette size={24} />,
      imageSrc: "/lovable-uploads/d23f8e53-4302-406f-8189-91c3fa3a52c8.png",
      link: "/services#design"
    },
    {
      title: "Création de Site Web",
      description: "Votre site web, votre meilleur ambassadeur. Avec Boostly, offrez à votre marque une vitrine sur mesure qui convertit vos visiteurs en clients.",
      icon: <Globe size={24} />,
      imageSrc: "/lovable-uploads/36c7f9d3-3c1b-413d-92d2-54be77689c07.png",
      link: "/services#website"
    },
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism-card p-8 md:p-12 mb-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-glow-soft">Nos Services</h2>
                <p className="text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed">
                  Des solutions adaptées à votre entreprise pour développer votre présence digitale
                </p>
              </div>
              <Link 
                to="/services"
                className="mt-6 sm:mt-0 glassmorphism border border-boostly-blue/40 text-boostly-blue hover:bg-boostly-blue hover:text-white transition-all duration-300 px-6 py-3 rounded-lg flex items-center text-base font-medium"
              >
                Voir tous nos services
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Types Section */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism-card p-8 md:p-12 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-glow-soft">Solutions Adaptées</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Nous accompagnons tous types d'entreprises dans leur transformation digitale
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Startups", icon: <TrendingUp size={32} /> },
              { name: "PME", icon: <Target size={32} /> },
              { name: "E-commerce", icon: <Globe size={32} /> },
              { name: "Freelances", icon: <Smartphone size={32} /> }
            ].map((type, index) => (
              <div 
                key={index}
                className="glassmorphism-card flex flex-col items-center justify-center py-8 px-6 text-center card-hover animate-fade-in border border-boostly-blue/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-boostly-blue mb-4 p-4 glassmorphism rounded-xl border border-boostly-blue/30">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white text-glow-soft">{type.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="btn-glow text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 text-lg inline-flex items-center"
            >
              Découvrir nos Solutions
              <MoveRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-boostly-blue/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 floating-element"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism-card p-12 md:p-16 text-center border border-boostly-blue/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-soft">Prêt à Booster Votre Présence Digitale ?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
              Laissez-nous vous accompagner dans votre transformation digitale. Contactez-nous dès aujourd'hui pour discuter de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center text-lg"
              >
                Contacter sur WhatsApp
                <MoveRight className="ml-3 h-5 w-5" />
              </a>
              <Link
                to="/services"
                className="glassmorphism border-2 border-boostly-blue text-boostly-blue hover:bg-boostly-blue hover:text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center text-lg"
              >
                Voir nos Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
