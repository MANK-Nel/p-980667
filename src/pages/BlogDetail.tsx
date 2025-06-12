
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, ExternalLink } from "lucide-react";

const getBlogPostById = (id: string) => {
  const currentDate = new Date();
  const blogPosts = {
    "1": {
      title: "Meta lance ses nouvelles fonctionnalités IA pour les entreprises en 2024",
      date: currentDate.toLocaleDateString('fr-FR'),
      readTime: "5 min de lecture",
      author: "Équipe Boostly",
      category: "Meta Business",
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
      sourceUrl: "https://business.facebook.com/",
      content: [
        {
          type: "paragraph",
          text: "Meta a récemment dévoilé une suite d'outils d'intelligence artificielle révolutionnaires destinés aux entreprises, marquant une nouvelle ère dans la gestion publicitaire et l'engagement client."
        },
        {
          type: "heading",
          text: "Intelligence artificielle générative pour la création publicitaire"
        },
        {
          type: "paragraph",
          text: "Les nouvelles fonctionnalités IA de Meta permettent aux entreprises de créer automatiquement des variations publicitaires, d'optimiser les campagnes en temps réel et de personnaliser l'expérience utilisateur à grande échelle."
        },
        {
          type: "list",
          items: [
            "Génération automatique de variantes publicitaires basée sur l'IA",
            "Optimisation prédictive des enchères et du ciblage",
            "Analyse sentiment en temps réel des interactions",
            "Recommandations personnalisées pour l'optimisation des campagnes"
          ]
        },
        {
          type: "heading",
          text: "Impact sur le marketing digital"
        },
        {
          type: "paragraph",
          text: "Ces innovations transforment radicalement la façon dont les entreprises abordent le marketing digital, offrant des possibilités inédites d'automatisation et de personnalisation."
        }
      ],
      relatedPosts: ["2", "3", "4"]
    },
    "2": {
      title: "Instagram présente ses nouveaux outils créatifs pour les Stories business",
      date: new Date(currentDate.getTime() - 86400000).toLocaleDateString('fr-FR'),
      readTime: "6 min de lecture",
      author: "Équipe Boostly",
      category: "Instagram Business",
      imageSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=400&fit=crop",
      sourceUrl: "https://business.instagram.com/",
      content: [
        {
          type: "paragraph",
          text: "Instagram enrichit son arsenal créatif avec de nouveaux filtres, stickers et options d'interaction spécialement conçus pour les comptes professionnels, offrant aux marques de nouvelles façons d'engager leur audience."
        }
      ],
      relatedPosts: ["1", "3", "5"]
    },
    "3": {
      title: "WhatsApp Business API 2024 : nouvelles fonctionnalités d'automatisation",
      date: new Date(currentDate.getTime() - 172800000).toLocaleDateString('fr-FR'),
      readTime: "8 min de lecture",
      author: "Équipe Boostly",
      category: "WhatsApp Business",
      imageSrc: "https://images.unsplash.com/photo-1556244573-c3686c0f0e78?w=800&h=400&fit=crop",
      sourceUrl: "https://business.whatsapp.com/",
      content: [
        {
          type: "paragraph",
          text: "WhatsApp déploie de puissantes fonctionnalités d'automatisation pour son API Business, révolutionnant la communication client avec des capacités de personnalisation et d'efficacité sans précédent."
        }
      ],
      relatedPosts: ["1", "2", "4"]
    },
    "4": {
      title: "TikTok for Business révolutionne le marketing avec de nouveaux formats publicitaires",
      date: new Date(currentDate.getTime() - 259200000).toLocaleDateString('fr-FR'),
      readTime: "7 min de lecture",
      author: "Équipe Boostly",
      category: "TikTok Business",
      imageSrc: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=400&fit=crop",
      sourceUrl: "https://www.tiktok.com/business/",
      content: [
        {
          type: "paragraph",
          text: "TikTok lance des formats publicitaires innovants et des outils d'analyse avancés, redéfinissant les standards du marketing vidéo sur les réseaux sociaux."
        }
      ],
      relatedPosts: ["1", "2", "5"]
    },
    "5": {
      title: "Google Ads dévoile ses stratégies d'enchères intelligentes pour 2024",
      date: new Date(currentDate.getTime() - 345600000).toLocaleDateString('fr-FR'),
      readTime: "9 min de lecture",
      author: "Équipe Boostly",
      category: "Google Ads",
      imageSrc: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
      sourceUrl: "https://ads.google.com/",
      content: [
        {
          type: "paragraph",
          text: "Google Ads présente ses nouvelles stratégies d'enchères basées sur l'intelligence artificielle, promettant une optimisation automatique et un retour sur investissement optimisé."
        }
      ],
      relatedPosts: ["1", "4", "6"]
    },
    "6": {
      title: "LinkedIn Business lance ses nouvelles solutions de marketing B2B",
      date: new Date(currentDate.getTime() - 432000000).toLocaleDateString('fr-FR'),
      readTime: "6 min de lecture",
      author: "Équipe Boostly",
      category: "LinkedIn Business",
      imageSrc: "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=800&h=400&fit=crop",
      sourceUrl: "https://business.linkedin.com/",
      content: [
        {
          type: "paragraph",
          text: "LinkedIn enrichit sa plateforme avec des outils de ciblage avancés et des formats de contenu inédits, optimisant les stratégies marketing B2B pour une nouvelle génération d'entreprises."
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
            }
            return null;
          })}
        </div>
        
        {/* Source link */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Source de l'article :</span>
            <a 
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-boostly-blue hover:text-blue-400 transition-colors text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {post.category}
            </a>
          </div>
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
                  <Link key={relatedId} to={`/blog/${relatedId}`} className="block">
                    <div className="glassmorphism overflow-hidden card-hover p-6">
                      <h4 className="text-lg font-medium text-white mb-2 hover:text-boostly-blue transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{relatedPost.category}</p>
                    </div>
                  </Link>
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
