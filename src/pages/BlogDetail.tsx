
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const getBlogPostById = (id: string) => {
  const blogPosts = {
    "1": {
      title: "Les nouvelles fonctionnalités Meta Business pour 2024",
      date: "12 juin 2025",
      readTime: "5 min de lecture",
      author: "Équipe Boostly",
      category: "Meta Business",
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "Meta Business Platform continue d'évoluer en 2024 avec des fonctionnalités révolutionnaires qui transforment la façon dont les entreprises gèrent leurs campagnes publicitaires et interagissent avec leur audience."
        },
        {
          type: "heading",
          text: "Nouvelles fonctionnalités d'automatisation"
        },
        {
          type: "paragraph",
          text: "Les nouvelles options d'automatisation permettent aux entreprises d'optimiser leurs campagnes en temps réel, avec des algorithmes d'apprentissage automatique plus sophistiqués."
        },
        {
          type: "list",
          items: [
            "Optimisation automatique des enchères basée sur l'IA",
            "Ciblage prédictif des audiences",
            "Création automatique de variantes publicitaires",
            "Analyse en temps réel des performances"
          ]
        },
        {
          type: "heading",
          text: "Interface utilisateur repensée"
        },
        {
          type: "paragraph",
          text: "Meta a complètement repensé l'interface de Business Manager pour offrir une expérience plus intuitive et efficace aux annonceurs de tous niveaux."
        }
      ],
      relatedPosts: ["2", "3", "4"]
    },
    "2": {
      title: "Instagram Stories : nouvelles options créatives",
      date: "11 juin 2025",
      readTime: "6 min de lecture",
      author: "Équipe Boostly",
      category: "Instagram Business",
      imageSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=400&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "Instagram continue d'innover avec de nouvelles options créatives pour les Stories business, offrant aux marques plus de possibilités d'engagement."
        }
      ],
      relatedPosts: ["1", "3", "5"]
    },
    "3": {
      title: "WhatsApp Business API : guide complet",
      date: "10 juin 2025",
      readTime: "8 min de lecture",
      author: "Équipe Boostly",
      category: "WhatsApp Business",
      imageSrc: "https://images.unsplash.com/photo-1556244573-c3686c0f0e78?w=800&h=400&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "L'API WhatsApp Business offre de nouvelles possibilités d'automatisation et de personnalisation pour les communications client."
        }
      ],
      relatedPosts: ["1", "2", "4"]
    },
    "4": {
      title: "TikTok for Business : stratégies de contenu",
      date: "9 juin 2025",
      readTime: "7 min de lecture",
      author: "Équipe Boostly",
      category: "TikTok Business",
      imageSrc: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=400&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "Découvrez comment créer du contenu TikTok authentique qui génère de l'engagement et des conversions pour votre entreprise."
        }
      ],
      relatedPosts: ["1", "2", "5"]
    },
    "5": {
      title: "Google Ads : optimisations avancées pour 2024",
      date: "8 juin 2025",
      readTime: "9 min de lecture",
      author: "Équipe Boostly",
      category: "Google Ads",
      imageSrc: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "Les nouvelles stratégies d'enchères automatisées et d'optimisation des campagnes Google Ads pour maximiser votre ROI."
        }
      ],
      relatedPosts: ["1", "4", "6"]
    },
    "6": {
      title: "LinkedIn Business : tendances du marketing B2B",
      date: "7 juin 2025",
      readTime: "6 min de lecture",
      author: "Équipe Boostly",
      category: "LinkedIn Business",
      imageSrc: "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=800&h=400&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "Les dernières tendances du marketing B2B sur LinkedIn et comment optimiser votre présence professionnelle."
        }
      ],
      relatedPosts: ["1", "3", "5"]
    }
  };
  
  return blogPosts[id as keyof typeof blogPosts];
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!post) {
    return (
      <div className="pt-32 pb-16 px-6 md:px-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Article non trouvé</h1>
        <Link to="/blog" className="text-boostly-blue hover:text-blue-400">
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-boostly-blue hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux articles
        </Link>
      </div>
      
      {/* Article header */}
      <article className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-boostly-blue px-3 py-1 text-xs font-medium text-white rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4 md:gap-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>
        </header>
        
        {/* Featured image */}
        <div className="mb-10 rounded-lg overflow-hidden">
          <img 
            src={post.imageSrc} 
            alt={post.title} 
            className="w-full h-auto"
          />
        </div>
        
        {/* Article content */}
        <div className="prose prose-invert max-w-none">
          {post.content.map((section, index) => {
            if (section.type === "paragraph") {
              return <p key={index} className="text-gray-300 mb-6 leading-relaxed">{section.text}</p>;
            } else if (section.type === "heading") {
              return <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">{section.text}</h2>;
            } else if (section.type === "list") {
              return (
                <ul key={index} className="list-disc pl-6 mb-6 text-gray-300">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">{item}</li>
                  ))}
                </ul>
              );
            } else if (section.type === "quote") {
              return (
                <blockquote key={index} className="border-l-4 border-boostly-blue pl-4 italic my-6">
                  <p className="text-gray-300 mb-2">"{section.text}"</p>
                  {section.author && (
                    <footer className="text-sm text-gray-400">— {section.author}</footer>
                  )}
                </blockquote>
              );
            }
            return null;
          })}
        </div>
        
        {/* Share buttons */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex items-center">
            <span className="text-gray-400 mr-4">Partager cet article :</span>
            <div className="flex space-x-3">
              <button className="text-gray-400 hover:text-boostly-blue transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white mb-6">Articles Connexes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedId) => {
                const relatedPost = getBlogPostById(relatedId);
                if (!relatedPost) return null;
                
                return (
                  <div key={relatedId} className="glassmorphism overflow-hidden card-hover">
                    <Link to={`/blog/${relatedId}`} className="block">
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-white mb-2 hover:text-boostly-blue transition-colors">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogDetail;
