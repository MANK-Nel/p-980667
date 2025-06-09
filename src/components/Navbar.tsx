
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('fr');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = language === 'fr' ? [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/booking' },
  ] : [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/booking' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-6 md:px-12',
        scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <div className="h-12 w-12 md:h-14 md:w-14 relative rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
            <img 
              src="/lovable-uploads/5679b231-7f98-4ca6-a35b-6d287535c4f4.png" 
              alt="Boostly Agence Logo" 
              className="h-full w-full object-contain p-1" 
            />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-boostly-blue transition-colors duration-300 link-hover text-sm font-medium tracking-wide',
                  isActive && 'text-boostly-blue after:w-full'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center text-white hover:text-boostly-blue transition-colors duration-300 text-sm"
          >
            <Globe size={16} className="mr-1" />
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white hover:text-boostly-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu - Style inspiré de la capture */}
      <div
        className={cn(
          'fixed inset-0 z-40 mobile-menu-overlay transition-all duration-300 ease-in-out transform md:hidden',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <div className="flex flex-col pt-20 px-0">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'mobile-menu-item flex items-center px-6 py-4 text-white text-lg font-medium transition-all duration-300',
                  isActive && 'text-boostly-blue bg-blue-600/10 border-l-4 border-l-blue-600'
                )
              }
            >
              <span className="flex-1">{link.name}</span>
              <span className="text-gray-400">›</span>
            </NavLink>
          ))}
          
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="mobile-menu-item flex items-center px-6 py-4 text-white text-lg font-medium transition-all duration-300"
          >
            <Globe size={20} className="mr-3" />
            <span className="flex-1">{language === 'fr' ? 'English' : 'Français'}</span>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
