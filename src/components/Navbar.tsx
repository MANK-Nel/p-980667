
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Fermer le menu mobile lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Réservation", path: "/booking" }
  ];

  const isActive = (path: string) => location.pathname === path;

  const LogoComponent = () => (
    <div className="flex items-center space-x-3">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-boostly-blue to-blue-600 flex items-center justify-center shadow-lg border border-boostly-blue/30">
        <span className="text-white font-bold text-lg">B</span>
      </div>
      <span className="text-2xl font-bold text-white text-glow-soft">Boostly</span>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2 z-60">
              <LogoComponent />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium transition-all duration-300 relative py-2 px-4 rounded-lg ${
                    isActive(item.path) 
                      ? "text-boostly-blue bg-boostly-blue/10 border border-boostly-blue/30" 
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute inset-0 bg-boostly-blue/5 rounded-lg -z-10"></div>
                  )}
                </Link>
              ))}
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow text-white font-medium py-3 px-6 rounded-lg text-base whitespace-nowrap"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden glassmorphism text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-boostly-blue rounded-lg p-3 z-60 border border-boostly-blue/20"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-20 left-0 right-0 h-screen glassmorphism-card border-t border-boostly-blue/20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="flex flex-col h-full p-8">
            <div className="flex-1 space-y-8 mt-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-xl font-medium transition-all duration-300 transform px-6 py-4 rounded-xl ${
                    isActive(item.path) 
                      ? "text-boostly-blue bg-boostly-blue/10 border border-boostly-blue/30" 
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-boostly-blue/20 pt-8">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-glow text-white font-medium py-5 px-8 rounded-xl text-center text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
