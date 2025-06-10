
import React, { useEffect, useState } from "react";
import { Search, Calendar, ExternalLink, TrendingUp, Users, Target, Megaphone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogData } from "@/hooks/useBlogData";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { blogPosts, loading } = useBlogData();
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: "Tous", icon: <Target size={16} />, count: blogPosts.length },
    { name: "Meta Business", icon: <TrendingUp size={16} />, count: blogPosts.filter(p => p.category.includes("Meta")).length },
    { name: "Réseaux sociaux", icon: <Users size={16} />, count: blogPosts.filter(p => p.category.includes("Instagram") || p.category.includes("TikTok")).length },
    { name: "Communication", icon: <Megaphone size={16} />, count: blogPosts.filter(p => p.category.includes("WhatsApp") || p.category.includes("LinkedIn")).length }
  ];

  const searchKeywords = [
    "Meta Business", "Instagram Stories", "WhatsApp API", "TikTok Business", 
    "Google Ads", "LinkedIn B2B", "Stratégie digitale", "Content marketing"
  ];

  useEffect(() => {
    const filtered = blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPosts(filtered);
  }, [searchTerm, blogPosts]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-white text-lg">Chargement des articles...</div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-boostly-blue/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Blog Boostly</h1>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in animation-delay-100 leading-relaxed">
              Actualités et tendances du marketing digital directement depuis les sources officielles. Informations mises à jour quotidiennement.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher des articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-boostly-blue focus:ring-1 focus:ring-boostly-blue transition-colors"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {searchKeywords.map((keyword, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(keyword)}
                  className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full transition-colors"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-boostly-blue text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm"
              >
                {category.icon}
                {category.name}
                <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(searchTerm ? filteredPosts : blogPosts).map((post, index) => (
              <article 
                key={post.id}
                className="glassmorphism overflow-hidden group card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-boostly-blue text-white text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-boostly-blue hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                    >
                      Lire l'article
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    
                    <a 
                      href={post.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-xs"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {post.source}
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {(searchTerm ? filteredPosts : blogPosts).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Aucun article trouvé pour votre recherche.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
