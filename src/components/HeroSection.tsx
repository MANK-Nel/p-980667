
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
        <div className="flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-boostly-blue/20 text-boostly-blue rounded-full px-4 py-2 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Faites la différence !
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-glow mb-6">
              Développez Votre <span className="text-boostly-blue">Présence Digitale</span> avec Boostly
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nous créons et gérons votre présence en ligne pour faire rayonner votre marque. 
              De la stratégie digitale à la gestion de communauté, boostez votre visibilité avec nos experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow text-sm"
              >
                Démarrer mon Projet
                <MoveRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="mailto:aboostly@gmail.com"
                className="bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
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
