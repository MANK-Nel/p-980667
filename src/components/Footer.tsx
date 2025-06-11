
import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const LogoComponent = () => {
    try {
      return (
        <img 
          src="/lovable-uploads/7cdcbaf8-243d-4687-b880-8f6f174d1b34.png" 
          alt="Boostly Logo" 
          className="h-8 w-8 rounded-full object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      );
    } catch {
      return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <LogoComponent />
              <span className="text-xl font-bold">Boostly</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Votre partenaire digital pour booster votre présence en ligne. 
              Nous créons des stratégies sur mesure pour développer votre business.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors"
              >
                <ExternalLink size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors"
              >
                <ExternalLink size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-boostly-blue" />
                <span className="text-gray-300 text-sm">Libreville, Gabon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-boostly-blue" />
                <a 
                  href="https://wa.me/24165735052" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +241 65 73 50 52
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-boostly-blue" />
                <a 
                  href="mailto:contact@boostly.ga" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@boostly.ga
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Boostly. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
