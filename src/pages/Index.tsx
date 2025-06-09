
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Users, TrendingUp, Target, Megaphone, MoveRight, Globe, Smartphone } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      title: "Création de Contenu",
      description: "Des visuels, textes et vidéos qui feront rayonner votre marque pour propulser votre entreprise.",
      icon: <Target size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      link: "/services#contenu",
      price: "50.000 FCFA"
    },
    {
      title: "Community Management",
      description: "Animez et développez une communauté fidèle autour de votre marque.",
      icon: <Users size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      link: "/services#community",
      price: "70.000 FCFA"
    },
    {
      title: "Stratégie Digitale",
      description: "Une vision claire et des actions concrètes pour propulser votre présence en ligne.",
      icon: <TrendingUp size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "/services#strategie",
      price: "100.000 FCFA"
    },
    {
      title: "Publicité en Ligne",
      description: "Touchez la bonne audience au bon moment avec des campagnes optimisées.",
      icon: <Megaphone size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80",
      link: "/services#publicite",
      price: "60.000 FCFA"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Nos Services</h2>
              <p className="text-gray-400 max-w-2xl">
                Des solutions adaptées à votre entreprise pour développer votre présence digitale
              </p>
            </div>
            <Link 
              to="/services"
              className="mt-4 sm:mt-0 flex items-center text-boostly-blue hover:text-blue-400 transition-colors"
            >
              Voir tous nos services
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredServices.slice(0, 4).map((service, index) => (
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
      <section className="py-20 px-6 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Solutions Adaptées</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nous accompagnons tous types d'entreprises dans leur transformation digitale
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Startups", icon: <TrendingUp size={32} /> },
              { name: "PME", icon: <Target size={32} /> },
              { name: "E-commerce", icon: <Globe size={32} /> },
              { name: "Freelances", icon: <Smartphone size={32} /> }
            ].map((type, index) => (
              <div 
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-boostly-blue mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{type.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Découvrir nos Solutions
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Formules Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Nos Formules</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des visuels sur mesure pour tous résoudre tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphism p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Essentiel Visuel</h3>
              <p className="text-gray-300 mb-6">
                Idéal pour les marques qui ont déjà structuré leur identité et souhaitent seulement être accompagnées
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-boostly-blue font-medium">À l'unité: 7.500 - 10.000 FCFA</p>
                <p className="text-boostly-blue font-medium">Pack 5: 30.000 FCFA</p>
                <p className="text-boostly-blue font-medium">12 visuels / mois: 72.000 FCFA</p>
              </div>
            </div>
            
            <div className="glassmorphism p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Clé en Main Créatif</h3>
              <p className="text-gray-300 mb-6">
                Parfait pour les pros qui veulent du contenu complet sans se soucier du processus créatif
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-boostly-blue font-medium">8 visuels / mois: 85.000 FCFA</p>
                <p className="text-boostly-blue font-medium">12 visuels / mois: 120.000 FCFA</p>
                <p className="text-white font-bold">Sur mesure: Sur devis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-boostly-blue/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à Booster Votre Présence Digitale ?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Laissez-nous vous accompagner dans votre transformation digitale. Contactez-nous dès aujourd'hui pour discuter de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Contacter sur WhatsApp
                <MoveRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/services"
                className="bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
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
