
import React, { useEffect } from "react";
import { Mail, Phone, MessageCircle, Facebook, MapPin, Clock } from "lucide-react";

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in animation-delay-100">
              Prêt à booster votre présence digitale ? Contactez notre équipe d'experts pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-4">
                  {/* Email */}
                  <div className="glassmorphism p-4 md:p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full flex-shrink-0">
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-boostly-blue" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white font-medium mb-1 text-sm md:text-base">Email</h3>
                        <a 
                          href="mailto:aboostly@gmail.com"
                          className="text-boostly-blue hover:text-blue-400 transition-colors text-sm md:text-base break-all"
                        >
                          aboostly@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Numbers */}
                  <div className="glassmorphism p-4 md:p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full flex-shrink-0">
                        <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-boostly-blue" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white font-medium mb-2 text-sm md:text-base">WhatsApp</h3>
                        <div className="space-y-1">
                          <a 
                            href="https://wa.me/24165735052" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block text-boostly-blue hover:text-blue-400 transition-colors text-sm md:text-base"
                          >
                            +241 65 73 50 52
                          </a>
                          <a 
                            href="https://wa.me/24177101378" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block text-boostly-blue hover:text-blue-400 transition-colors text-sm md:text-base"
                          >
                            +241 77 10 13 78
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Facebook Page */}
                  <div className="glassmorphism p-4 md:p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full flex-shrink-0">
                        <Facebook className="h-5 w-5 md:h-6 md:w-6 text-boostly-blue" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white font-medium mb-1 text-sm md:text-base">Facebook</h3>
                        <a 
                          href="https://www.facebook.com/boostlyagence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-boostly-blue hover:text-blue-400 transition-colors font-medium text-sm md:text-base"
                        >
                          Page Facebook Boostly Agence
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="glassmorphism p-4 md:p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full flex-shrink-0">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-boostly-blue" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white font-medium mb-1 text-sm md:text-base">Localisation</h3>
                        <p className="text-gray-300 text-sm md:text-base">Port-Gentil, Gabon</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="glassmorphism p-4 md:p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full flex-shrink-0">
                        <Clock className="h-5 w-5 md:h-6 md:w-6 text-boostly-blue" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white font-medium mb-1 text-sm md:text-base">Horaires</h3>
                        <div className="text-gray-300 text-sm md:text-base">
                          <p>Lun - Ven : 8h00 - 18h00</p>
                          <p>Sam : 9h00 - 15h00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="glassmorphism p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Démarrons votre projet ensemble
                </h2>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  Nous sommes là pour vous accompagner dans votre transformation digitale. 
                  Contactez-nous dès maintenant pour discuter de vos besoins et objectifs.
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://wa.me/24165735052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow text-sm md:text-base"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Discuter sur WhatsApp
                  </a>
                  
                  <a
                    href="mailto:aboostly@gmail.com"
                    className="w-full bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                  >
                    <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Envoyer un email
                  </a>
                  
                  <a
                    href="https://www.facebook.com/boostlyagence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                  >
                    <Facebook className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Suivre sur Facebook
                  </a>
                </div>
              </div>

              <div className="glassmorphism p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">
                  Pourquoi choisir Boostly ?
                </h3>
                <ul className="space-y-2 text-gray-300 text-xs md:text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-boostly-blue rounded-full mr-3 flex-shrink-0"></div>
                    <span>Expertise locale et internationale</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-boostly-blue rounded-full mr-3 flex-shrink-0"></div>
                    <span>Stratégies personnalisées</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-boostly-blue rounded-full mr-3 flex-shrink-0"></div>
                    <span>Résultats mesurables</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-boostly-blue rounded-full mr-3 flex-shrink-0"></div>
                    <span>Accompagnement complet</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
