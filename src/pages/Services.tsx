import React, { useEffect } from "react";
import { Target, Users, TrendingUp, Globe, Edit, Palette, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "strategie",
      icon: <TrendingUp size={28} />,
      title: "Stratégie de Communication Digitale",
      description: "Attirez, engagez et transformez votre audience. Boostly construit pour vous une stratégie digitale sur mesure qui maximise votre impact en ligne.",
      image: "/lovable-uploads/Stratégie de communication digitale.jpg",
      features: [
        "Audit digital complet",
        "Définition des personas",
        "Stratégie de contenu personnalisée",
        "Plan d'actions détaillé",
        "KPIs et objectifs mesurables",
        "Accompagnement sur mesure"
      ]
    },
    {
      id: "community",
      icon: <Users size={28} />,
      title: "Gestion des Réseaux Sociaux",
      description: "Du contenu qui attire, une communauté qui s'engage. Avec Boostly, vos réseaux deviennent un véritable moteur de croissance pour votre entreprise.",
      image: "/lovable-uploads/Gestion de réseaux sociaux.jpg",
      features: [
        "Gestion quotidienne des réseaux",
        "Création de contenu engageant",
        "Animation de communauté",
        "Analyses et reporting détaillé",
        "Stratégie d'engagement ciblée",
        "Veille concurrentielle"
      ]
    },
    {
      id: "contenu",
      icon: <Edit size={28} />,
      title: "Création de Contenu Impactant",
      description: "Faites parler votre marque. Boostly crée des contenus qui font toute la différence et captivent votre audience cible.",
      image: "/lovable-uploads/Création de contenu.jpg",
      features: [
        "Contenus visuels créatifs",
        "Rédaction web optimisée",
        "Vidéos courtes impactantes",
        "Infographies attractives",
        "Posts optimisés SEO",
        "Calendrier éditorial structuré"
      ]
    },
    {
      id: "branding",
      icon: <Target size={28} />,
      title: "Branding",
      description: "Votre marque, votre histoire, notre expertise. Avec Boostly, construisez une identité qui inspire confiance et marque les esprits.",
      image: "/lovable-uploads/Branding.jpg",
      features: [
        "Création d'identité visuelle",
        "Développement de charte graphique",
        "Positionnement de marque",
        "Storytelling authentique",
        "Guidelines de communication",
        "Cohérence multi-supports"
      ]
    },
    {
      id: "design",
      icon: <Palette size={28} />,
      title: "Design Graphique",
      description: "Un design réfléchi, un message renforcé. Boostly transforme vos idées en créations qui impactent. Misez sur l'excellence visuelle.",
      image: "/lovable-uploads/Design graphique.jpg",
      features: [
        "Design pour réseaux sociaux",
        "Supports print et digital",
        "Création de visuels publicitaires",
        "Illustrations personnalisées",
        "Maquettes professionnelles",
        "Adaptations multi-formats"
      ]
    },
    {
      id: "website",
      icon: <Globe size={28} />,
      title: "Création de Site Web",
      description: "Votre site web, votre meilleur ambassadeur. Avec Boostly, offrez à votre marque une vitrine sur mesure qui convertit vos visiteurs en clients.",
      image: "/lovable-uploads/Création de site de web.jpg",
      features: [
        "Sites vitrine professionnels",
        "Landing pages optimisées",
        "Design responsive moderne",
        "Optimisation SEO avancée",
        "Intégration CMS intuitive",
        "Maintenance et support"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-boostly-blue/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Nos Services</h1>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in animation-delay-100 leading-relaxed">
              Des solutions digitales complètes pour développer votre présence en ligne et faire grandir votre entreprise. Nous adaptons nos services à vos besoins spécifiques.
            </p>
            <a
              href="https://wa.me/24165735052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200 text-sm md:text-base"
            >
              Demander un Devis
              <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ce Que Nous Proposons</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Des solutions digitales complètes pour propulser votre entreprise
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-8 mb-12 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-64 lg:h-80 overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-image"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-boostly-blue mb-3">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">{service.description}</p>
                
                <div className="bg-gray-900 rounded-xl p-4 md:p-6 mb-4">
                  <h4 className="text-base md:text-lg font-medium text-white mb-3">Inclus dans cette offre :</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-boostly-blue mt-1 mr-2 flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 px-6 md:px-12 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-boostly-blue/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-6 md:p-12 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Prêt à Développer Votre Présence Digitale ?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
              Notre équipe d'experts est prête à vous accompagner dans votre transformation digitale. Contactez-nous pour discuter de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow text-sm md:text-base"
              >
                WhatsApp (+241 65 73 50 52)
                <MoveRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://wa.me/24177101378"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-sm md:text-base"
              >
                WhatsApp (+241 77 10 13 78)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
