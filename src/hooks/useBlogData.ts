
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
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

const getLatestTechNews = () => {
  const currentDate = new Date();
  const yesterday = new Date(currentDate.getTime() - 86400000);
  const twoDaysAgo = new Date(currentDate.getTime() - 172800000);
  const threeDaysAgo = new Date(currentDate.getTime() - 259200000);
  const fourDaysAgo = new Date(currentDate.getTime() - 345600000);
  const fiveDaysAgo = new Date(currentDate.getTime() - 432000000);

  return [
    {
      id: "1",
      title: "Meta lance ses nouvelles fonctionnalités IA pour les entreprises en 2024",
      excerpt: "Meta dévoile une suite d'outils d'intelligence artificielle révolutionnaires pour transformer la gestion publicitaire et l'engagement client des entreprises.",
      category: "Meta Business",
      date: currentDate.toLocaleDateString('fr-FR'),
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      source: "Meta Business",
      sourceUrl: "https://business.facebook.com/",
      tags: ["Meta", "IA", "Publicité"]
    },
    {
      id: "2",
      title: "Instagram présente ses nouveaux outils créatifs pour les Stories business",
      excerpt: "Instagram enrichit son arsenal créatif avec de nouveaux filtres, stickers et options d'interaction spécialement conçus pour les comptes professionnels.",
      category: "Instagram Business",
      date: yesterday.toLocaleDateString('fr-FR'),
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop",
      source: "Instagram for Business",
      sourceUrl: "https://business.instagram.com/",
      tags: ["Instagram", "Stories", "Créativité"]
    },
    {
      id: "3",
      title: "WhatsApp Business API 2024 : nouvelles fonctionnalités d'automatisation",
      excerpt: "WhatsApp déploie de puissantes fonctionnalités d'automatisation pour son API Business, permettant une communication client plus efficace et personnalisée.",
      category: "WhatsApp Business",
      date: twoDaysAgo.toLocaleDateString('fr-FR'),
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1556244573-c3686c0f0e78?w=400&h=300&fit=crop",
      source: "WhatsApp Business",
      sourceUrl: "https://business.whatsapp.com/",
      tags: ["WhatsApp", "API", "Automatisation"]
    },
    {
      id: "4",
      title: "TikTok for Business révolutionne le marketing avec de nouveaux formats publicitaires",
      excerpt: "TikTok lance des formats publicitaires innovants et des outils d'analyse avancés pour maximiser l'impact des campagnes marketing sur sa plateforme.",
      category: "TikTok Business",
      date: threeDaysAgo.toLocaleDateString('fr-FR'),
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
      source: "TikTok for Business",
      sourceUrl: "https://www.tiktok.com/business/",
      tags: ["TikTok", "Publicité", "Innovation"]
    },
    {
      id: "5",
      title: "Google Ads dévoile ses stratégies d'enchères intelligentes pour 2024",
      excerpt: "Google Ads présente ses nouvelles stratégies d'enchères basées sur l'IA, promettant une optimisation automatique et un meilleur retour sur investissement.",
      category: "Google Ads",
      date: fourDaysAgo.toLocaleDateString('fr-FR'),
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
      source: "Google Ads",
      sourceUrl: "https://ads.google.com/",
      tags: ["Google", "Enchères", "IA"]
    },
    {
      id: "6",
      title: "LinkedIn Business lance ses nouvelles solutions de marketing B2B",
      excerpt: "LinkedIn enrichit sa plateforme avec des outils de ciblage avancés et des formats de contenu inédits pour optimiser les stratégies marketing B2B.",
      category: "LinkedIn Business",
      date: fiveDaysAgo.toLocaleDateString('fr-FR'),
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=400&h=300&fit=crop",
      source: "LinkedIn Business",
      sourceUrl: "https://business.linkedin.com/",
      tags: ["LinkedIn", "B2B", "Marketing"]
    }
  ];
};

export const useBlogData = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Simuler un fetch de données avec du contenu mis à jour quotidiennement
        const posts = getLatestTechNews();
        setBlogPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
        setLoading(false);
      }
    };

    fetchBlogData();
    
    // Mise à jour automatique quotidienne à minuit
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const timeoutId = setTimeout(() => {
      fetchBlogData();
      // Puis mise à jour toutes les 24h
      const interval = setInterval(fetchBlogData, 24 * 60 * 60 * 1000);
      return () => clearInterval(interval);
    }, msUntilMidnight);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return { blogPosts, loading };
};
