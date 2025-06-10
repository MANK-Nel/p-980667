
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
    <div 
      className={cn(
        "glassmorphism overflow-hidden group card-hover transition-all duration-500",
        className
      )}
      style={style}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="service-image w-full h-full object-cover"
          onError={(e) => {
            console.error(`Failed to load image: ${imageSrc}`);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm p-2 rounded-lg">
          <div className="text-boostly-blue">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-3 leading-tight">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-boostly-blue hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
        >
          En savoir plus
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
