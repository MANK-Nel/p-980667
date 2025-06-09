
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
    { name: 'Références', path: '/references' },
    { name: 'Contact', path: '/booking' },
  ] : [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'References', path: '/references' },
    { name: 'Contact', path: '/booking' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <div className="h-16 w-auto md:h-20 md:w-auto relative">
            <img 
              src="/lovable-uploads/5679b231-7f98-4ca6-a35b-6d287535c4f4.png" 
              alt="Boostly Agence Logo" 
              className="h-full w-auto object-contain" 
            />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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
            className="flex items-center text-white hover:text-boostly-blue transition-colors duration-300"
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

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 glassmorphism pt-24 px-8 transition-all duration-300 ease-in-out transform md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-boostly-blue py-2 text-xl transition-colors duration-300',
                  isActive && 'text-boostly-blue'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center text-white hover:text-boostly-blue transition-colors duration-300 py-2 text-xl"
          >
            <Globe size={20} className="mr-2" />
            {language === 'fr' ? 'English' : 'Français'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
