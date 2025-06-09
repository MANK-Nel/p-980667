
import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: "strategie-contenu-2024",
      title: "Stratégie de Contenu en 2024 : Les Tendances à Suivre",
      excerpt: "Découvrez les dernières tendances en matière de création de contenu digital et comment les intégrer à votre stratégie marketing pour maximiser votre engagement.",
      date: "15 Mars 2024",
      readTime: "8 min de lecture",
      author: "Équipe Boostly",
      category: "Stratégie",
      imageSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      id: "community-management-efficace",
      title: "Community Management : Comment Engager sa Communauté",
      excerpt: "Les meilleures pratiques pour créer et animer une communauté engagée sur les réseaux sociaux.",
      date: "10 Mars 2024",
      readTime: "6 min de lecture",
      author: "Équipe Boostly",
      category: "Community",
      imageSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80"
    },
    {
      id: "publicite-facebook-roi",
      title: "Optimiser le ROI de vos Campagnes Facebook Ads",
      excerpt: "Techniques avancées pour maximiser le retour sur investissement de vos campagnes publicitaires sur Facebook et Instagram.",
      date: "5 Mars 2024",
      readTime: "7 min de lecture",
      author: "Équipe Boostly",
      category: "Publicité",
      imageSrc: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80"
    },
    {
      id: "tendances-marketing-digital-gabon",
      title: "Le Marketing Digital au Gabon : État des Lieux et Opportunités",
      excerpt: "Analyse du marché digital gabonais et des opportunités pour les entreprises locales.",
      date: "28 Février 2024",
      readTime: "9 min de lecture",
      author: "Équipe Boostly",
      category: "Marché",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      id: "creation-visuels-reseaux-sociaux",
      title: "Créer des Visuels Impactants pour les Réseaux Sociaux",
      excerpt: "Guide complet pour concevoir des visuels qui captent l'attention et génèrent de l'engagement.",
      date: "20 Février 2024",
      readTime: "5 min de lecture",
      author: "Équipe Boostly",
      category: "Design",
      imageSrc: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80"
    },
    {
      id: "seo-local-entreprises-gabon",
      title: "SEO Local : Comment Être Visible dans les Recherches au Gabon",
      excerpt: "Stratégies de référencement local adaptées au marché gabonais pour augmenter votre visibilité en ligne.",
      date: "15 Février 2024",
      readTime: "10 min de lecture",
      author: "Équipe Boostly",
      category: "SEO",
      imageSrc: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80"
    }
  ];
  
  const categories = [
    "Tous",
    "Stratégie",
    "Community",
    "Publicité",
    "Design",
    "SEO",
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
      <section className="bg-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Blog & Conseils</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Découvrez nos conseils d'experts, les dernières tendances du marketing digital et nos retours d'expérience pour développer votre présence en ligne.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in animation-delay-200">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Rechercher des articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black border-boostly-blue/50 w-full"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex gap-2 overflow-x-auto pb-2 no-scrollbar flex-nowrap md:justify-end">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
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
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPost
                  key={post.id}
                  {...post}
                  className={`animate-fade-in ${post.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
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
      <section className="py-16 px-6 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Restez Informé des Dernières Tendances</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles, conseils et actualités du marketing digital directement dans votre boîte mail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-black border-boostly-blue/50 flex-grow"
              />
              <button className="bg-boostly-blue hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                S'abonner
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              Nous respectons votre vie privée. Désabonnement possible à tout moment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
