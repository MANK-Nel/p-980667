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
      imageSrc: "/lovable-uploads/strategie-communication-digitale.jpg",
      link: "/services#strategie"
    },
    {
      title: "Gestion des Réseaux Sociaux",
      description: "Du contenu qui attire, une communauté qui s'engage. Avec Boostly, vos réseaux deviennent un véritable moteur de croissance.",
      icon: <Users size={24} />,
      imageSrc: "/lovable-uploads/gestion-reseaux-sociaux.jpg",
      link: "/services#community"
    },
    {
      title: "Création de Contenu Impactant",
      description: "Faites parler votre marque. Boostly crée des contenus qui font toute la différence.",
      icon: <Edit size={24} />,
      imageSrc: "/lovable-uploads/creation-contenu.jpg",
      link: "/services#contenu"
    },
    {
      title: "Branding",
      description: "Votre marque, votre histoire, notre expertise. Avec Boostly, construisez une identité qui inspire confiance.",
      icon: <Target size={24} />,
      imageSrc: "/lovable-uploads/branding.jpg",
      link: "/services#branding"
    },
    {
      title: "Design Graphique",
      description: "Un design réfléchi, un message renforcé. Boostly transforme vos idées en créations qui impactent. Misez sur l'excellence visuelle.",
      icon: <Palette size={24} />,
      imageSrc: "/lovable-uploads/design-graphique.jpg",
      link: "/services#design"
    },
    {
      title: "Création de Site Web",
      description: "Votre site web, votre meilleur ambassadeur. Avec Boostly, offrez à votre marque une vitrine sur mesure qui convertit vos visiteurs en clients.",
      icon: <Globe size={24} />,
      imageSrc: "/lovable-uploads/creation-site-web.jpg",
      link: "/services#website"
    },
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Nos Services</h2>
              <p className="text-gray-400 max-w-2xl text-sm md:text-base">
                Des solutions adaptées à votre entreprise pour développer votre présence digitale
              </p>
            </div>
            <Link 
              to="/services"
              className="mt-4 sm:mt-0 flex items-center text-boostly-blue hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Voir tous nos services
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-16 px-6 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Solutions Adaptées</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Nous accompagnons tous types d'entreprises dans leur transformation digitale
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Startups", icon: <TrendingUp size={28} /> },
              { name: "PME", icon: <Target size={28} /> },
              { name: "E-commerce", icon: <Globe size={28} /> },
              { name: "Freelances", icon: <Smartphone size={28} /> }
            ].map((type, index) => (
              <div 
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-6 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-boostly-blue mb-3">
                  {type.icon}
                </div>
                <h3 className="text-base font-medium text-white">{type.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 btn-glow text-sm"
            >
              Découvrir nos Solutions
              <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-boostly-blue/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Prêt à Booster Votre Présence Digitale ?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
              Laissez-nous vous accompagner dans votre transformation digitale. Contactez-nous dès aujourd'hui pour discuter de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow text-sm"
              >
                Contacter sur WhatsApp
                <MoveRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                to="/services"
                className="bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
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
