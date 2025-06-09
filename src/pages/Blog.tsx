
import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: "meta-nouvelles-fonctionnalites-2024",
      title: "Meta lance de nouvelles fonctionnalités pour les créateurs de contenu",
      excerpt: "Découvrez les dernières mises à jour d'Instagram et Facebook qui révolutionnent la création de contenu et l'engagement des audiences en 2024.",
      date: "12 Juin 2024",
      readTime: "5 min de lecture",
      author: "Équipe Boostly",
      category: "Actualités",
      imageSrc: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80",
      featured: true,
      source: "Meta Business - Actualités officielles"
    },
    {
      id: "strategie-tiktok-entreprises-2024",
      title: "TikTok pour les entreprises : Stratégies gagnantes en 2024",
      excerpt: "Comment exploiter le potentiel de TikTok pour développer votre marque et atteindre de nouveaux clients avec du contenu viral et authentique.",
      date: "8 Juin 2024",
      readTime: "7 min de lecture",
      author: "Équipe Boostly",
      category: "Stratégie",
      imageSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80",
      source: "TikTok Business - Guide officiel"
    },
    {
      id: "whatsapp-business-api-gabon",
      title: "WhatsApp Business API : Révolutionner la relation client au Gabon",
      excerpt: "Les avantages de WhatsApp Business API pour automatiser vos communications et améliorer l'expérience client dans le contexte gabonais.",
      date: "5 Juin 2024",
      readTime: "6 min de lecture",
      author: "Équipe Boostly",
      category: "Technologie",
      imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      source: "WhatsApp Business - Documentation officielle"
    },
    {
      id: "tendances-marketing-digital-afrique-2024",
      title: "Tendances du Marketing Digital en Afrique : Ce qui change en 2024",
      excerpt: "Analyse des évolutions du marché digital africain et des opportunités pour les entreprises locales et internationales.",
      date: "2 Juin 2024",
      readTime: "9 min de lecture",
      author: "Équipe Boostly",
      category: "Marché",
      imageSrc: "https://images.unsplash.com/photo-1554177255-61502b352de3?auto=format&fit=crop&q=80",
      source: "Digital Marketing Institute Africa"
    },
    {
      id: "intelligence-artificielle-creation-contenu",
      title: "IA et Création de Contenu : Outils et Bonnes Pratiques",
      excerpt: "Comment intégrer l'intelligence artificielle dans votre stratégie de contenu tout en préservant l'authenticité de votre marque.",
      date: "30 Mai 2024",
      readTime: "8 min de lecture",
      author: "Équipe Boostly",
      category: "Innovation",
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      source: "Content Marketing Institute"
    },
    {
      id: "reels-instagram-algorithme-2024",
      title: "Maîtriser l'algorithme des Reels Instagram en 2024",
      excerpt: "Techniques éprouvées pour optimiser vos Reels Instagram et maximiser votre portée organique avec les dernières mises à jour.",
      date: "28 Mai 2024",
      readTime: "6 min de lecture",
      author: "Équipe Boostly",
      category: "Social Media",
      imageSrc: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80",
      source: "Instagram Creators - Guide officiel"
    },
    {
      id: "community-management-gabon-2024",
      title: "Community Management au Gabon : Adapter sa Stratégie à la Culture Locale",
      excerpt: "Meilleures pratiques pour créer et animer une communauté engagée en tenant compte des spécificités culturelles gabonaises.",
      date: "25 Mai 2024",
      readTime: "7 min de lecture",
      author: "Équipe Boostly",
      category: "Community",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      source: "Social Media Today"
    },
    {
      id: "brand-storytelling-digital-2024",
      title: "Brand Storytelling : Raconter l'Histoire de votre Marque à l'Ère Digitale",
      excerpt: "Comment créer un storytelling puissant qui résonne avec votre audience et renforce l'identité de votre marque sur tous les canaux digitaux.",
      date: "22 Mai 2024",
      readTime: "10 min de lecture",
      author: "Équipe Boostly",
      category: "Branding",
      imageSrc: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80",
      source: "Harvard Business Review"
    }
  ];
  
  const categories = [
    "Tous",
    "Actualités",
    "Stratégie",
    "Social Media",
    "Technologie",
    "Innovation",
    "Community",
    "Branding",
    "Marché"
  ];
  
  const [activeCategory, setActiveCategory] = useState("Tous");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "Tous" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Blog & Actualités</h1>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in animation-delay-100">
              Restez informé des dernières tendances du marketing digital, des actualités des réseaux sociaux et de nos conseils d'experts pour développer votre présence en ligne.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 items-stretch animate-fade-in animation-delay-200">
            <div className="relative w-full lg:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Rechercher des articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black border-boostly-blue/50 w-full h-12"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-2 rounded-full whitespace-nowrap transition-colors text-sm flex-shrink-0 h-12 flex items-center ${
                      activeCategory === category
                        ? "bg-boostly-blue text-white"
                        : "bg-black text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`glassmorphism overflow-hidden group card-hover transition-all duration-500 animate-fade-in ${
                    post.featured ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img 
                      src={post.imageSrc} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-boostly-blue px-2 py-1 text-xs font-medium text-white rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-2 leading-snug group-hover:text-boostly-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500 truncate">
                        Source: {post.source}
                      </div>
                      <button className="text-boostly-blue hover:text-blue-400 transition-colors text-sm font-medium flex-shrink-0">
                        Lire plus →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">Aucun article trouvé</h3>
              <p className="text-gray-400">Essayez de modifier votre recherche ou votre filtre de catégorie</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-6 md:p-12 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Restez Informé des Dernières Tendances</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm md:text-base">
              Suivez-nous sur nos réseaux sociaux pour ne rien manquer des actualités du marketing digital et des conseils de nos experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/boostlyagence"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-boostly-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm md:text-base"
              >
                Suivre sur Facebook
              </a>
              <a
                href="https://wa.me/24165735052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-boostly-blue text-boostly-blue hover:bg-boostly-blue/10 font-medium py-3 px-6 rounded-lg transition-colors text-sm md:text-base"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
