
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
        "glassmorphism overflow-hidden group card-hover transition-all duration-500 bg-gray-900/50",
        className
      )}
      style={style}
    >
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <img 
          src={imageSrc} 
          alt={`Service ${title}`}
          className="service-image w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMWYyOTM3Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwVjIwME0xNTAgMTUwSDI1MCIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjIiLz4KPHN2Zz4K';
          }}
        />
        <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm p-3 rounded-xl border border-white/10">
          <div className="text-boostly-blue">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-boostly-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center text-boostly-blue hover:text-blue-400 transition-all duration-300 text-sm font-medium group/link"
        >
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
