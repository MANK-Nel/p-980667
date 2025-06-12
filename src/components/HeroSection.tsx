
import React from 'react';
import { MoveRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-6xl">
            {/* Premium Badge */}
            <div className="flex items-center justify-center mb-8 md:mb-10">
              <div className="bg-blue-600/10 border border-blue-500/30 text-blue-400 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium inline-flex items-center rounded-full">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                <span>Faites la différence !</span>
              </div>
            </div>
            
            {/* Main Title */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 mb-8 md:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 md:mb-8 text-white">
                Développez Votre{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Présence Digitale
                </span>
                {" "}avec{" "}
                <span className="text-blue-400">
                  Boostly
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-10 max-w-5xl mx-auto leading-relaxed">
                Nous créons et gérons votre présence en ligne pour faire rayonner votre marque. 
                De la stratégie digitale à la gestion de communauté, 
                <span className="text-white font-semibold"> boostez votre visibilité</span> avec nos experts.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center px-4">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-semibold py-4 md:py-5 px-8 md:px-10 rounded-xl flex items-center justify-center text-base md:text-lg"
              >
                Démarrer mon Projet
                <MoveRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="mailto:aboostly@gmail.com"
                className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-4 md:py-5 px-8 md:px-10 rounded-xl transition-all duration-300 flex items-center justify-center text-base md:text-lg"
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
