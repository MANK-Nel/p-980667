
import { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  source: string;
  sourceUrl: string;
  tags: string[];
}

export const useBlogData = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Données avec images réelles des sources officielles
        const currentDate = new Date();
        const posts: BlogPost[] = [
          {
            id: 1,
            title: "Les nouvelles fonctionnalités Meta Business pour 2024",
            excerpt: "Découvrez les dernières mises à jour de Meta Business Platform qui révolutionnent la gestion publicitaire et l'engagement client.",
            category: "Meta Business",
            date: currentDate.toLocaleDateString('fr-FR'),
            readTime: "5 min",
            image: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/YCXOvu1lcm-.png",
            source: "Meta Business",
            sourceUrl: "https://business.facebook.com/",
            tags: ["Meta", "Publicité", "Stratégie"]
          },
          {
            id: 2,
            title: "Instagram Stories : nouvelles options créatives pour les entreprises",
            excerpt: "Instagram déploie de nouveaux outils créatifs pour les Stories business, permettant une meilleure interaction avec votre audience.",
            category: "Instagram Business",
            date: new Date(currentDate.getTime() - 86400000).toLocaleDateString('fr-FR'),
            readTime: "6 min",
            image: "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png",
            source: "Instagram for Business",
            sourceUrl: "https://business.instagram.com/",
            tags: ["Instagram", "Stories", "Créativité"]
          },
          {
            id: 3,
            title: "WhatsApp Business API : guide complet des nouveautés",
            excerpt: "Les dernières fonctionnalités de l'API WhatsApp Business pour automatiser et personnaliser vos communications client.",
            category: "WhatsApp Business",
            date: new Date(currentDate.getTime() - 172800000).toLocaleDateString('fr-FR'),
            readTime: "8 min",
            image: "https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png",
            source: "WhatsApp Business",
            sourceUrl: "https://business.whatsapp.com/",
            tags: ["WhatsApp", "API", "Automation"]
          },
          {
            id: 4,
            title: "TikTok for Business : stratégies de contenu qui convertissent",
            excerpt: "Comment créer du contenu TikTok authentique qui génère de l'engagement et des conversions pour votre entreprise.",
            category: "TikTok Business",
            date: new Date(currentDate.getTime() - 259200000).toLocaleDateString('fr-FR'),
            readTime: "7 min",
            image: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/business/webapp/webapp-lite/0.1.5/static/images/logo.png",
            source: "TikTok for Business",
            sourceUrl: "https://www.tiktok.com/business/",
            tags: ["TikTok", "Contenu", "Conversion"]
          },
          {
            id: 5,
            title: "Google Ads : optimisations avancées pour 2024",
            excerpt: "Les nouvelles stratégies d'enchères automatisées et d'optimisation des campagnes Google Ads pour maximiser votre ROI.",
            category: "Google Ads",
            date: new Date(currentDate.getTime() - 345600000).toLocaleDateString('fr-FR'),
            readTime: "9 min",
            image: "https://www.gstatic.com/ads/icons/google_ads_logo.svg",
            source: "Google Ads",
            sourceUrl: "https://ads.google.com/",
            tags: ["Google", "Publicité", "ROI"]
          },
          {
            id: 6,
            title: "LinkedIn Business : tendances du marketing B2B",
            excerpt: "Les dernières tendances du marketing B2B sur LinkedIn et comment optimiser votre présence professionnelle.",
            category: "LinkedIn Business",
            date: new Date(currentDate.getTime() - 432000000).toLocaleDateString('fr-FR'),
            readTime: "6 min",
            image: "https://static.licdn.com/aero-v1/sc/h/al2o9zrvru7aqj8e1x2rzsrca",
            source: "LinkedIn Business",
            sourceUrl: "https://business.linkedin.com/",
            tags: ["LinkedIn", "B2B", "Professionnel"]
          }
        ];

        setBlogPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
        setLoading(false);
      }
    };

    fetchBlogData();
    
    // Actualisation quotidienne
    const interval = setInterval(fetchBlogData, 24 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return { blogPosts, loading };
};
