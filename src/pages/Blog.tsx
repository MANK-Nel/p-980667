
import React, { useState, useEffect } from "react";
import BlogPost from "@/components/BlogPost";
import BlogFilter from "@/components/BlogFilter";
import { useBlogData } from "@/hooks/useBlogData";
import { Search } from "lucide-react";

const Blog = () => {
  const { blogPosts, loading } = useBlogData();
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtrer les articles
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Obtenir toutes les catégories uniques
  const categories = ["Tous", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Compter les articles par catégorie
  const postCounts = categories.reduce((acc, category) => {
    if (category === "Tous") {
      acc[category] = blogPosts.length;
    } else {
      acc[category] = blogPosts.filter(post => post.category === category).length;
    }
    return acc;
  }, {} as Record<string, number>);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-boostly-blue mx-auto mb-4"></div>
            <p className="text-gray-400">Chargement des articles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog <span className="text-boostly-blue">Boostly</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les dernières tendances et actualités du marketing digital
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-boostly-blue focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <BlogFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          postCounts={postCounts}
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogPost
                key={post.id}
                id={post.id.toString()}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                imageSrc={post.image}
                source={post.source}
                sourceUrl={post.sourceUrl}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-400 text-lg">
                {searchTerm 
                  ? `Aucun article trouvé pour "${searchTerm}"`
                  : "Aucun article dans cette catégorie"
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
