import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-boostly-blue/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 relative rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <img 
                  src="/lovable-uploads/logo.jpg" 
                  alt="Boostly Agence Logo" 
                  className="h-full w-full object-contain p-1" 
                />
              </div>
              <h3 className="text-white font-semibold text-lg">Boostly Agence</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Agence de marketing digital spécialisée dans la création de contenu, le community management et les stratégies digitales pour développer votre présence en ligne.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors text-sm"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors text-sm"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors text-sm"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/booking" 
                  className="text-gray-300 hover:text-boostly-blue transition-colors text-sm"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">
              Nous contacter
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail size={14} className="text-boostly-blue" />
                <a 
                  href="mailto:aboostly@gmail.com"
                  className="hover:text-boostly-blue transition-colors"
                >
                  aboostly@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <MessageCircle size={14} className="text-boostly-blue" />
                <a 
                  href="https://wa.me/24165735052" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-boostly-blue transition-colors"
                >
                  +241 65 73 50 52
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <MessageCircle size={14} className="text-boostly-blue" />
                <a 
                  href="https://wa.me/24177101378" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-boostly-blue transition-colors"
                >
                  +241 77 10 13 78
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook size={14} className="text-boostly-blue" />
                <a 
                  href="https://www.facebook.com/boostlyagence" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-boostly-blue hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Page Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-boostly-blue/10 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Boostly Agence. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
