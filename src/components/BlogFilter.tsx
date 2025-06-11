
import React from 'react';
import { cn } from '@/lib/utils';

interface BlogFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  postCounts: Record<string, number>;
}

const BlogFilter = ({ categories, selectedCategory, onCategoryChange, postCounts }: BlogFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onCategoryChange('Tous')}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2",
          selectedCategory === 'Tous'
            ? "bg-boostly-blue text-white shadow-lg"
            : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50"
        )}
      >
        Tous
        <span className={cn(
          "px-2 py-0.5 rounded-full text-xs",
          selectedCategory === 'Tous'
            ? "bg-white/20 text-white"
            : "bg-gray-600 text-gray-300"
        )}>
          {postCounts['Tous'] || 0}
        </span>
      </button>
      
      {categories.filter(cat => cat !== 'Tous').map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2",
            selectedCategory === category
              ? "bg-boostly-blue text-white shadow-lg"
              : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50"
          )}
        >
          <span className="truncate max-w-32">{category}</span>
          <span className={cn(
            "px-2 py-0.5 rounded-full text-xs flex-shrink-0",
            selectedCategory === category
              ? "bg-white/20 text-white"
              : "bg-gray-600 text-gray-300"
          )}>
            {postCounts[category] || 0}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BlogFilter;
