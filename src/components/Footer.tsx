
import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const LogoComponent = () => (
    <div className="flex items-center space-x-3">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-boostly-blue to-blue-600 flex items-center justify-center shadow-lg border border-boostly-blue/30">
        <span className="text-white font-bold text-lg">B</span>
      </div>
      <span className="text-2xl font-bold text-glow-soft">Boostly</span>
    </div>
  );

  return (
    <footer className="glassmorphism-card border-t border-boostly-blue/20 text-white py-16 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <LogoComponent />
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md text-lg">
              Votre partenaire digital pour booster votre présence en ligne. 
              Nous créons des stratégies sur mesure pour développer votre business.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glassmorphism text-gray-400 hover:text-boostly-blue transition-colors duration-300 p-4 rounded-xl border border-boostly-blue/20 hover:border-boostly-blue/40 card-hover"
                aria-label="Facebook"
              >
                <ExternalLink size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glassmorphism text-gray-400 hover:text-boostly-blue transition-colors duration-300 p-4 rounded-xl border border-boostly-blue/20 hover:border-boostly-blue/40 card-hover"
                aria-label="Instagram"
              >
                <ExternalLink size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glassmorphism text-gray-400 hover:text-boostly-blue transition-colors duration-300 p-4 rounded-xl border border-boostly-blue/20 hover:border-boostly-blue/40 card-hover"
                aria-label="LinkedIn"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glassmorphism p-8 rounded-xl border border-boostly-blue/20">
            <h3 className="text-xl font-semibold mb-6 text-white text-glow-soft">Liens Rapides</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-boostly-blue transition-colors duration-300 text-base">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-boostly-blue transition-colors duration-300 text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-boostly-blue transition-colors duration-300 text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-boostly-blue transition-colors duration-300 text-base">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="glassmorphism p-8 rounded-xl border border-boostly-blue/20">
            <h3 className="text-xl font-semibold mb-6 text-white text-glow-soft">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-boostly-blue flex-shrink-0" />
                <span className="text-gray-300 text-base">Libreville, Gabon</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-boostly-blue flex-shrink-0" />
                <a 
                  href="https://wa.me/24165735052" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors duration-300 text-base"
                >
                  +241 65 73 50 52
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-boostly-blue flex-shrink-0" />
                <a 
                  href="mailto:contact@boostly.ga" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors duration-300 text-base"
                >
                  contact@boostly.ga
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="glassmorphism border border-boostly-blue/20 mt-12 pt-8 px-8 pb-8 rounded-xl flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-base mb-4 md:mb-0">
            © 2024 Boostly. Tous droits réservés.
          </p>
          <div className="flex space-x-8">
            <Link to="#" className="text-gray-400 hover:text-boostly-blue text-base transition-colors duration-300">
              Politique de confidentialité
            </Link>
            <Link to="#" className="text-gray-400 hover:text-boostly-blue text-base transition-colors duration-300">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
