
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author?: string;
  category: string;
  imageSrc: string;
  source: string;
  sourceUrl: string;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const BlogPost = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  imageSrc,
  source,
  sourceUrl,
  featured = false,
  className,
  style
}: BlogPostProps) => {
  return (
    <article 
      className={cn(
        "glassmorphism overflow-hidden card-hover",
        featured ? "md:col-span-2" : "",
        className
      )}
      style={style}
    >
      <Link to={`/blog/${id}`}>
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent z-10"></div>
          {imageSrc && (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-contain bg-white p-4 transition-transform duration-700 hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          )}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-psyco-green-DEFAULT px-3 py-1 text-xs font-medium text-white rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold text-white mb-2 hover:text-psyco-green-light transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-300 mb-4 text-sm line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center text-xs text-gray-400 space-x-4 mb-4">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{readTime}</span>
          </div>
          {author && (
            <div className="flex items-center">
              <User className="h-3.5 w-3.5 mr-1" />
              <span>{author}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link 
            to={`/blog/${id}`}
            className="inline-flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors duration-300 text-sm font-medium"
          >
            Lire l'article
          </Link>
          
          <a 
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-xs"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            {source}
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
