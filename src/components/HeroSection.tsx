
import React, { useEffect, useRef } from 'react';
import { MoveRight, Sparkles, TrendingUp, Target } from 'lucide-react';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-boostly-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-20 hidden lg:block">
        <TrendingUp className="h-12 w-12 text-boostly-blue/30" />
      </div>
      <div className="absolute bottom-1/4 right-20 hidden lg:block">
        <Target className="h-16 w-16 text-boostly-blue/30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-5xl">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-boostly-blue/20 text-boostly-blue rounded-full px-6 py-3 text-sm font-medium inline-flex items-center backdrop-blur-sm border border-boostly-blue/20">
                <Sparkles className="h-4 w-4 mr-2" />
                Faites la différence !
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 text-white">
              Développez Votre{" "}
              <span className="bg-gradient-to-r from-boostly-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Présence Digitale
              </span>
              {" "}avec{" "}
              <span className="text-boostly-blue">Boostly</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Nous créons et gérons votre présence en ligne pour faire rayonner votre marque. 
              De la stratégie digitale à la gestion de communauté, 
              <span className="text-white font-medium"> boostez votre visibilité</span> avec nos experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-boostly-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center btn-glow text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Démarrer mon Projet
                <MoveRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:aboostly@gmail.com"
                className="bg-transparent border-2 border-boostly-blue text-boostly-blue hover:bg-boostly-blue hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center text-base backdrop-blur-sm"
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
