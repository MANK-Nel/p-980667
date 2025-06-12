
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
        "glassmorphism overflow-hidden group card-hover transition-all duration-500 bg-gray-900/50 h-full flex flex-col",
        className
      )}
      style={style}
    >
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-800 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <img 
          src={imageSrc} 
          alt={`Service ${title}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMWYyOTM3Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwVjIwME0xNTAgMTUwSDI1MCIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjIiLz4KPHN2Zz4K';
          }}
        />
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 bg-black/60 backdrop-blur-sm p-2 md:p-3 rounded-xl border border-white/10">
          <div className="text-boostly-blue">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-4 md:p-6 flex-grow flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 leading-tight group-hover:text-boostly-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed flex-grow">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center text-boostly-blue hover:text-blue-400 transition-all duration-300 text-xs md:text-sm font-medium group/link mt-auto"
        >
          En savoir plus
          <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
