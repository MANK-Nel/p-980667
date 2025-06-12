
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  link: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({
  title,
  description,
  icon,
  imageSrc,
  link,
  className,
  style
}: ServiceCardProps) => {
  return (
    <article 
      className={cn(
        "glassmorphism-card card-hover transition-all duration-500 h-full flex flex-col relative group",
        className
      )}
      style={style}
    >
      {/* Image Container with Glass Frame */}
      <div className="relative h-52 md:h-60 overflow-hidden flex-shrink-0 image-glass-frame">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20"></div>
        <img 
          src={imageSrc} 
          alt={`Service ${title}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 relative z-10"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMWYyOTM3Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwVjIwME0xNTAgMTUwSDI1MCIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjIiLz4KPHN2Zz4K';
          }}
        />
        
        {/* Icon Badge with Glass Effect */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30">
          <div className="glassmorphism p-3 md:p-4 rounded-xl border border-boostly-blue/30 group-hover:border-boostly-blue/50 transition-all duration-300">
            <div className="text-boostly-blue group-hover:text-blue-300 transition-colors duration-300">
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 leading-tight group-hover:text-boostly-blue transition-colors duration-300 text-glow-soft">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>
        
        {/* Premium CTA Button */}
        <Link 
          to={link}
          className="inline-flex items-center glassmorphism border border-boostly-blue/40 text-boostly-blue hover:bg-boostly-blue hover:text-white hover:border-boostly-blue transition-all duration-300 text-sm md:text-base font-medium mt-auto py-3 px-6 rounded-lg group/link"
        >
          <span className="relative z-10">En savoir plus</span>
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover/link:translate-x-1 relative z-10" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-boostly-blue/10 rounded-lg scale-0 group-hover/link:scale-100 transition-transform duration-300 -z-10"></div>
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
