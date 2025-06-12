
import React, { useEffect, useRef } from 'react';
import { MoveRight, Sparkles, TrendingUp, Target, Star } from 'lucide-react';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-80 md:h-80 bg-boostly-blue/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-400/8 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-boostly-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-4 md:left-20 hidden lg:block floating-element">
        <div className="glassmorphism p-4 rounded-xl">
          <TrendingUp className="h-8 w-8 md:h-12 md:w-12 text-boostly-blue" />
        </div>
      </div>
      <div className="absolute bottom-1/4 right-4 md:right-20 hidden lg:block floating-element">
        <div className="glassmorphism p-4 rounded-xl">
          <Target className="h-10 w-10 md:h-16 md:w-16 text-boostly-blue" />
        </div>
      </div>
      
      {/* Additional floating stars */}
      <div className="absolute top-20 left-1/3 hidden md:block floating-element">
        <Star className="h-6 w-6 text-boostly-blue/60" />
      </div>
      <div className="absolute bottom-32 left-1/5 hidden md:block floating-element">
        <Star className="h-4 w-4 text-boostly-blue/40" />
      </div>
      <div className="absolute top-1/3 right-1/3 hidden md:block floating-element">
        <Star className="h-5 w-5 text-boostly-blue/50" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-6xl">
            {/* Premium Badge */}
            <div className="flex items-center justify-center mb-8 md:mb-10">
              <div className="glassmorphism text-boostly-blue px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium inline-flex items-center border border-boostly-blue/30">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 mr-2 animate-pulse" />
                <span className="text-glow-soft">Faites la différence !</span>
              </div>
            </div>
            
            {/* Main Title with Premium Styling */}
            <div className="glassmorphism-card p-8 md:p-12 mb-8 md:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 md:mb-8 text-white relative">
                Développez Votre{" "}
                <span className="bg-gradient-to-r from-boostly-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x glow-text">
                  Présence Digitale
                </span>
                {" "}avec{" "}
                <span className="text-boostly-blue glow-text relative">
                  Boostly
                  <div className="absolute -inset-2 bg-boostly-blue/20 blur-xl rounded-full -z-10"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 md:mb-10 max-w-5xl mx-auto leading-relaxed">
                Nous créons et gérons votre présence en ligne pour faire rayonner votre marque. 
                De la stratégie digitale à la gestion de communauté, 
                <span className="text-white font-semibold text-glow-soft"> boostez votre visibilité</span> avec nos experts.
              </p>
            </div>
            
            {/* Action Buttons with Premium Glass Effect */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center px-4">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow text-white font-semibold py-4 md:py-5 px-8 md:px-10 rounded-xl flex items-center justify-center text-base md:text-lg shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                Démarrer mon Projet
                <MoveRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="mailto:aboostly@gmail.com"
                className="glassmorphism border-2 border-boostly-blue text-boostly-blue hover:bg-boostly-blue hover:text-white font-semibold py-4 md:py-5 px-8 md:px-10 rounded-xl transition-all duration-300 flex items-center justify-center text-base md:text-lg card-hover"
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
