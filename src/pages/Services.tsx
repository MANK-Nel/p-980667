
import React, { useEffect } from "react";
import { Target, Users, TrendingUp, Megaphone, Globe, Smartphone, Video, Edit, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "contenu",
      icon: <Edit size={32} />,
      title: "Création de Contenu",
      description: "Des visuels, textes et vidéos qui feront rayonner votre marque pour propulser votre entreprise. Nous créons du contenu qui engage et convertit.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      features: [
        "Graphismes pour réseaux sociaux",
        "Visuels publicitaires",
        "Contenus vidéo courts",
        "Infographies attractives",
        "Posts optimisés SEO",
        "Calendrier éditorial"
      ],
      price: "50.000 FCFA"
    },
    {
      id: "community",
      icon: <Users size={32} />,
      title: "Community Management",
      description: "Animez et développez une communauté fidèle autour de votre marque. Créez des liens durables avec votre audience et boostez votre engagement.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      features: [
        "Gestion quotidienne des réseaux",
        "Création de contenu engageant",
        "Interaction avec la communauté",
        "Analyses et reporting",
        "Stratégie d'engagement",
        "Veille concurrentielle"
      ],
      price: "70.000 FCFA"
    },
    {
      id: "strategie",
      icon: <TrendingUp size={32} />,
      title: "Stratégie Digitale",
      description: "Une vision claire et des actions concrètes pour propulser votre présence en ligne. Nous définissons ensemble la roadmap de votre succès digital.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      features: [
        "Audit digital complet",
        "Définition des personas",
        "Stratégie de contenu",
        "Plan d'actions détaillé",
        "KPIs et objectifs mesurables",
        "Accompagnement personnalisé"
      ],
      price: "100.000 FCFA"
    },
    {
      id: "publicite",
      icon: <Megaphone size={32} />,
      title: "Publicité en Ligne",
      description: "Touchez la bonne audience au bon moment avec des campagnes publicitaires optimisées pour maximiser votre ROI.",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80",
      features: [
        "Campagnes Facebook & Instagram Ads",
        "Google Ads & SEA",
        "Ciblage précis de l'audience",
        "Optimisation des conversions",
        "A/B testing",
        "Reporting détaillé"
      ],
      price: "60.000 FCFA"
    },
    {
      id: "website",
      icon: <Globe size={32} />,
      title: "Création de Sites Web",
      description: "Sites web modernes et responsifs qui convertissent vos visiteurs en clients. Landing pages optimisées pour la conversion.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
      features: [
        "Sites vitrine professionnels",
        "Landing pages optimisées",
        "Design responsive",
        "Optimisation SEO",
        "Intégration CMS",
        "Maintenance incluse"
      ],
      price: "150.000 FCFA"
    },
    {
      id: "formation",
      icon: <Video size={32} />,
      title: "Accompagnement & Formation",
      description: "Devenez autonome ou profitez de notre accompagnement sur mesure. Formations pratiques pour maîtriser les outils digitaux.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      features: [
        "Formation réseaux sociaux",
        "Coaching individuel",
        "Ateliers pratiques",
        "Support personnalisé",
        "Certification",
        "Suivi post-formation"
      ],
      price: "200.000 FCFA"
    }
  ];

  const additionalServices = [
    {
      icon: <Target size={24} />,
      title: "Audit Digital",
      description: "Analyse complète de votre présence en ligne."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Applications Mobiles",
      description: "Développement d'apps sur mesure."
    },
    {
      icon: <Video size={24} />,
      title: "Production Vidéo",
      description: "Contenus vidéo professionnels."
    },
    {
      icon: <Edit size={24} />,
      title: "Identité Visuelle",
      description: "Création de logos et chartes graphiques."
    },
    {
      icon: <Users size={24} />,
      title: "Influence Marketing",
      description: "Collaboration avec des influenceurs."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Analytics & SEO",
      description: "Optimisation et mesure de performance."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-boostly-blue/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Nos Services</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Des solutions digitales complètes pour développer votre présence en ligne et faire grandir votre entreprise. Nous adaptons nos services à vos besoins spécifiques.
            </p>
            <a
              href="https://wa.me/24165735052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
            >
              Demander un Devis
              <MoveRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Ce Que Nous Proposons</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des solutions digitales complètes pour propulser votre entreprise
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-boostly-blue mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="bg-gray-900 rounded-xl p-6 mb-4">
                  <h4 className="text-lg font-medium text-white mb-4">Inclus dans cette offre :</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-boostly-blue mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-2xl font-bold text-boostly-blue mb-4">
                  À partir de {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Services Complémentaires</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              D'autres solutions pour compléter votre stratégie digitale
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-boostly-blue mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-boostly-blue/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à Développer Votre Présence Digitale ?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Notre équipe d'experts est prête à vous accompagner dans votre transformation digitale. Contactez-nous pour discuter de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                WhatsApp (+241 65 73 50 52)
                <MoveRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/24177101378"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
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
