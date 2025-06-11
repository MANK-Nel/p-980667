
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/logo.jpg" 
              alt="Boostly Logo" 
              className="h-8 w-8 rounded-full object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                console.log('Logo failed to load');
              }}
            />
            <span className="text-xl font-bold text-white">Boostly</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 link-hover ${
                  isActive(item.path) 
                    ? "text-boostly-blue" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/24165735052"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-boostly-blue hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 btn-glow text-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu-overlay fixed inset-0 top-16 z-40">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`mobile-menu-item px-6 py-4 text-base font-medium transition-colors duration-300 ${
                    isActive(item.path) 
                      ? "text-boostly-blue bg-boostly-blue/10" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="p-6">
                <a
                  href="https://wa.me/24165735052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 btn-glow text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
