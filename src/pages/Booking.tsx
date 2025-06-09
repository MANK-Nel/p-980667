
import React, { useEffect } from "react";
import { Mail, Phone, MessageCircle, Facebook, MapPin, Clock } from "lucide-react";

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Prêt à booster votre présence digitale ? Contactez notre équipe d'experts pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="glassmorphism p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-boostly-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Email</h3>
                        <a 
                          href="mailto:aboostly@gmail.com"
                          className="text-boostly-blue hover:text-blue-400 transition-colors"
                        >
                          aboostly@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Numbers */}
                  <div className="glassmorphism p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full">
                        <MessageCircle className="h-6 w-6 text-boostly-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-2">WhatsApp</h3>
                        <div className="space-y-1">
                          <a 
                            href="https://wa.me/24165735052" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block text-boostly-blue hover:text-blue-400 transition-colors"
                          >
                            +241 65 73 50 52
                          </a>
                          <a 
                            href="https://wa.me/24177101378" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block text-boostly-blue hover:text-blue-400 transition-colors"
                          >
                            +241 77 10 13 78
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Facebook Page */}
                  <div className="glassmorphism p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full">
                        <Facebook className="h-6 w-6 text-boostly-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Facebook</h3>
                        <a 
                          href="https://www.facebook.com/boostlyagence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-boostly-blue hover:text-blue-400 transition-colors font-medium"
                        >
                          Page Facebook Boostly Agence
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="glassmorphism p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-boostly-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Localisation</h3>
                        <p className="text-gray-300">Libreville, Gabon</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="glassmorphism p-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <div className="bg-boostly-blue/20 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-boostly-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Horaires</h3>
                        <p className="text-gray-300">Lun - Ven : 8h00 - 18h00</p>
                        <p className="text-gray-300">Sam : 9h00 - 15h00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-8">
              <div className="glassmorphism p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Démarrons votre projet ensemble
                </h2>
                <p className="text-gray-300 mb-6">
                  Nous sommes là pour vous accompagner dans votre transformation digitale. 
                  Contactez-nous dès maintenant pour discuter de vos besoins et objectifs.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/24165735052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Discuter sur WhatsApp
                  </a>
                  
                  <a
                    href="mailto:aboostly@gmail.com"
                    className="w-full bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Envoyer un email
                  </a>
                  
                  <a
                    href="https://www.facebook.com/boostlyagence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Facebook className="mr-2 h-5 w-5" />
                    Suivre sur Facebook
                  </a>
                </div>
              </div>

              <div className="glassmorphism p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Pourquoi choisir Boostly ?
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-boostly-blue rounded-full mr-3"></div>
                    Expertise locale et internationale
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-boostly-blue rounded-full mr-3"></div>
                    Stratégies personnalisées
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-boostly-blue rounded-full mr-3"></div>
                    Résultats mesurables
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-boostly-blue rounded-full mr-3"></div>
                    Accompagnement complet
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
