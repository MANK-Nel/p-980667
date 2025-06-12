
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
        "bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl card-hover transition-all duration-300 h-full flex flex-col relative group",
        className
      )}
      style={style}
    >
      {/* Image Container */}
      <div className="relative h-52 md:h-60 overflow-hidden rounded-t-xl">
        <img 
          src={imageSrc} 
          alt={`Service ${title}`}
          className="service-image transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMWYyOTM3Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwVjIwME0xNTAgMTUwSDI1MCIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjIiLz4KPHN2Zz4K';
          }}
        />
        
        {/* Icon Badge */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <div className="bg-blue-600/90 p-3 md:p-4 rounded-xl border border-blue-500/30">
            <div className="text-white">
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 leading-tight group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>
        
        {/* CTA Button */}
        <Link 
          to={link}
          className="inline-flex items-center bg-transparent border border-blue-500/40 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 text-sm md:text-base font-medium mt-auto py-3 px-6 rounded-lg"
        >
          <span>En savoir plus</span>
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
