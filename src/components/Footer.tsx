
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Facebook, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-boostly-blue/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-12 w-auto relative">
                <img 
                  src="/lovable-uploads/5679b231-7f98-4ca6-a35b-6d287535c4f4.png" 
                  alt="Boostly Agence Logo" 
                  className="h-full w-auto object-contain" 
                />
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Agence de marketing digital spécialisée dans la création de contenu, le community management et les stratégies digitales pour développer votre présence en ligne.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.facebook.com/boostlyagence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://wa.me/24165735052" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="mailto:aboostly@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-boostly-blue transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-boostly-blue/10">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/references" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors"
                >
                  Références
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/booking" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-boostly-blue/10">
              Nous Contacter
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-boostly-blue" />
                <a 
                  href="mailto:aboostly@gmail.com"
                  className="hover:text-boostly-blue transition-colors"
                >
                  aboostly@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MessageCircle size={16} className="text-boostly-blue" />
                <a 
                  href="https://wa.me/24165735052" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-boostly-blue transition-colors"
                >
                  +241 65 73 50 52
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MessageCircle size={16} className="text-boostly-blue" />
                <a 
                  href="https://wa.me/24177101378" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-boostly-blue transition-colors"
                >
                  +241 77 10 13 78
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Facebook size={16} className="text-boostly-blue" />
                <a 
                  href="https://www.facebook.com/boostlyagence" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-boostly-blue transition-colors"
                >
                  facebook.com/boostlyagence
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-boostly-blue/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Boostly Agence. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-boostly-blue text-sm transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-boostly-blue text-sm transition-colors">
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
