
import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const LogoComponent = () => (
    <div className="flex items-center space-x-2">
      <div className="h-8 w-8 rounded-full bg-boostly-blue flex items-center justify-center">
        <span className="text-white font-bold text-sm">B</span>
      </div>
      <span className="text-xl font-bold">Boostly</span>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <LogoComponent />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Votre partenaire digital pour booster votre présence en ligne. 
              Nous créons des stratégies sur mesure pour développer votre business.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                aria-label="Facebook"
              >
                <ExternalLink size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                aria-label="Instagram"
              >
                <ExternalLink size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-boostly-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">Libreville, Gabon</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-boostly-blue flex-shrink-0" />
                <a 
                  href="https://wa.me/24165735052" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  +241 65 73 50 52
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-boostly-blue flex-shrink-0" />
                <a 
                  href="mailto:contact@boostly.ga" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  contact@boostly.ga
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Boostly. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Politique de confidentialité
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
