/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import {  Menu, X, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Play, Globe, ChevronUp, Linkedin, Instagram, Twitter, Facebook, Youtube, Heart, Share2} from 'lucide-react';

import financeImage from './assets/images/finance-background.jpeg';
import assert from './assets/images/Cover_Progress_report20202023_1760x644_Desktop_0b360cce76.jpeg';
import talent from './assets/images/1760x564_desktop_home_background_job_offer_64ecb00973.jpeg';
import logo from './assets/images/WHITE-LOGO-KERING.png'; 

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sharePrice, setSharePrice] = useState(216.50);
  const [priceChange, setPriceChange] = useState(2.30);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeHeroItem, setActiveHeroItem] = useState(null);
  const [activeBrandSlide, setActiveBrandSlide] = useState(0);
  const [showBrandSlider, setShowBrandSlider] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeGridModal, setActiveGridModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [shareItem, setShareItem] = useState(null);
  const [galleryView, setGalleryView] = useState('grid');

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'IT', name: 'Italiano', flag: '🇮🇹' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'JP', name: '日本語', flag: '🇯🇵' },
    { code: 'CN', name: '中文', flag: '🇨🇳' }
  ];
 
  const heroSlides = [
    {
      title: "Balenciaga",
      subtitle: "SUMMER 25 CAMPAIGN",
      description: "Discover the new collection",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop",
      cta: "DISCOVER",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Gucci",
      subtitle: "ARIA COLLECTION",
      description: "Experience Italian craftsmanship",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop",
      cta: "EXPLORE"
    },
    {
      title: "Saint Laurent",
      subtitle: "WINTER 2025",
      description: "Timeless elegance redefined",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&h=900&fit=crop",
      cta: "DISCOVER"
    },
    {
      title: "Bottega Veneta",
      subtitle: "FALL COLLECTION",
      description: "Crafted with precision",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&h=900&fit=crop",
      cta: "EXPLORE"
    },
    {
      title: "Alexander McQueen",
      subtitle: "SPRING 2025",
      description: "Bold and innovative designs",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1600&h=900&fit=crop",
      cta: "DISCOVER"
    },
    {
      title: "Brioni",
      subtitle: "TAILORED EXCELLENCE",
      description: "Italian menswear couture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop",
      cta: "EXPLORE"
    },
    {
      title: "Boucheron",
      subtitle: "HIGH JEWELRY",
      description: "French luxury jewels",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&h=900&fit=crop",
      cta: "DISCOVER"
    },
    {
      title: "Pomellato",
      subtitle: "UNCONVENTIONAL LUXURY",
      description: "Italian colorful gems",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1600&h=900&fit=crop",
      cta: "EXPLORE"
    },
    {
      title: "DoDo",
      subtitle: "CHARMING JEWELRY",
      description: "Playful Italian designs",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&h=900&fit=crop",
      cta: "DISCOVER"
    }
  ];

  const gridSections = [
    {
      id: 'houses-gucci',
      title: 'Gucci Heritage Collection',
      category: 'HOUSES',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      size: 'large',
      details: 'Iconic Italian luxury house known for its bold designs and heritage craftsmanship.'
    },
    {
      id: 'finance',
      title: 'Kering announces the appointment of Luca de Meo as Chief Executive Officer',
      category: 'FINANCE',
      subtitle: 'GROUP',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      size: 'large',
      details: 'A strategic move to drive future growth and innovation across all luxury brands.'
    },
    {
      id: 'talent-jobs',
      title: 'Our Job Offers',
      category: 'TALENT',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      size: 'small',
      details: 'Explore exciting career opportunities across our global luxury brands.'
    },
    {
      id: 'sustainability',
      title: 'Sustainability Progress Report 2020-2023',
      category: 'SUSTAINABILITY',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      size: 'small',
      details: 'Our commitment to environmental and social responsibility in luxury fashion.'
    },
    {
      id: 'houses-dodo',
      title: 'DoDo Jewelry Collection',
      category: 'HOUSES',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
      size: 'small',
      details: 'Playful Italian jewelry with a modern twist and timeless appeal.'
    },
    {
      id: 'group-foundation',
      title: 'Kering Foundation',
      category: 'GROUP',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      size: 'small',
      details: 'Supporting equality and combating violence through global initiatives.'
    },
    {
      id: 'talent-motion',
      title: 'Creative Excellence: 10 years of innovation',
      category: 'TALENT',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop',
      size: 'wide',
      details: 'Celebrating creative talent across fashion, jewelry, and design industries.'
    },
    {
      id: 'finance-q2',
      title: 'Q2 2025 Financial Results',
      category: 'FINANCE',
      subtitle: 'GROUP',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      size: 'small',
      details: 'Strong performance across all luxury segments and geographic regions.'
    },
    {
      id: 'talent-internships',
      title: 'Summer Internship Program 2025',
      category: 'TALENT',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      size: 'large',
      details: 'Hands-on experience in luxury fashion with mentorship opportunities.'
    },
    {
      id: 'sustainability-climate',
      title: 'Climate Action Initiatives',
      category: 'SUSTAINABILITY',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop',
      size: 'wide',
      details: 'Reducing our carbon footprint through innovative sustainable solutions.'
    },
    {
      id: 'houses-balenciaga',
      title: 'Balenciaga Avant-Garde',
      category: 'HOUSES',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      size: 'large',
      details: 'Avant-garde fashion redefining modern luxury with bold architectural designs.'
    },
    {
      id: 'group-innovation',
      title: 'Innovation Lab',
      category: 'GROUP',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
      size: 'small',
      details: 'Pioneering new technologies and materials in luxury craftsmanship.'
    },
    {
      id: 'finance-annual',
      title: 'Annual Report 2024',
      category: 'FINANCE',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      size: 'small',
      details: 'Comprehensive overview of our financial performance and strategic vision.'
    }
  ];

  const filteredGridSections = selectedCategory === 'all' 
    ? gridSections 
    : gridSections.filter(section => section.category === selectedCategory);

  const categories = ['all', ...new Set(gridSections.map(s => s.category))];

  const brands = [
    { 
      name: 'Gucci', 
      logo: 'GUCCI',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      description: 'Italian luxury fashion house known for its eclectic, contemporary, romantic products.',
      founded: '1921'
    },
    { 
      name: 'Saint Laurent', 
      logo: 'SAINT LAURENT',
      image: 'https://images.unsplash.com/photo-1525200070077-18b8c756e098?w=1200&h=800&fit=crop',
      description: 'French luxury fashion house founded by Yves Saint Laurent and his partner Pierre Bergé.',
      founded: '1961'
    },
    { 
      name: 'Bottega Veneta', 
      logo: 'BOTTEGA VENETA',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&h=800&fit=crop',
      description: 'Italian luxury goods company best known for its leather goods.',
      founded: '1966'
    },
    { 
      name: 'Balenciaga', 
      logo: 'BALENCIAGA',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
      description: 'Spanish luxury fashion house founded by Cristóbal Balenciaga.',
      founded: '1919'
    },
    { 
      name: 'Alexander McQueen', 
      logo: 'ALEXANDER MCQUEEN',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&h=800&fit=crop',
      description: 'British luxury fashion house founded by designer Alexander McQueen.',
      founded: '1992'
    },
    { 
      name: 'Brioni', 
      logo: 'BRIONI',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      description: 'Italian menswear couture house known for its handmade suits.',
      founded: '1945'
    },
    { 
      name: 'Boucheron', 
      logo: 'BOUCHERON',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop',
      description: 'French luxury jewelry house, part of Kering Group.',
      founded: '1858'
    },
    { 
      name: 'Pomellato', 
      logo: 'POMELLATO',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&h=800&fit=crop',
      description: 'Italian luxury jewelry brand known for unconventional luxury.',
      founded: '1967'
    },
    { 
      name: 'DoDo', 
      logo: 'DODO',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop',
      description: 'Italian jewelry brand known for its charming and playful designs.',
      founded: '1995'
    }
  ];

  const navItems = [
    { 
      name: 'GROUP', 
      subItems: [
        { name: 'Overview', image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=150&fit=crop', desc: 'Discover Kering' },
        { name: 'Strategy', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=150&fit=crop', desc: 'Our Vision' },
        { name: 'Leadership', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=150&fit=crop', desc: 'Executive Team' },
        { name: 'History', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=150&fit=crop', desc: 'Our Heritage' },
        { name: 'Innovation', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=150&fit=crop', desc: 'Future Forward' },
        { name: 'Values', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=150&fit=crop', desc: 'What We Stand For' }
      ]
    },
    { 
      name: 'HOUSES', 
      subItems: brands.map(brand => ({
        name: brand.name,
        image: brand.image,
        desc: brand.description,
        founded: brand.founded
      }))
    },
    { 
      name: 'TALENT', 
      subItems: [
        { name: 'Careers', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=150&fit=crop', desc: 'Join Our Team' },
        { name: 'Culture', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=150&fit=crop', desc: 'Our Values' },
        { name: 'Leadership', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=150&fit=crop', desc: 'Development Programs' },
        { name: 'Learning', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&h=150&fit=crop', desc: 'Education Programs' },
        { name: 'Diversity', image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=200&h=150&fit=crop', desc: 'Inclusion Matters' },
        { name: 'Wellbeing', image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=200&h=150&fit=crop', desc: 'Employee Support' }
      ]
    },
    { 
      name: 'SUSTAINABILITY', 
      subItems: [
        { name: 'Progress Report', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=150&fit=crop', desc: '2020-2023 Report' },
        { name: 'Climate Action', image: 'https://images.unsplash.com/photo-1569163139394-de44cb3c5ba0?w=200&h=150&fit=crop', desc: 'Environmental Goals' },
        { name: 'Biodiversity', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop', desc: 'Nature Protection' },
        { name: 'Circular Economy', image: 'https://images.unsplash.com/photo-1532996122724-e3c8c76ca7d13?w=200&h=150&fit=crop', desc: 'Sustainable Practices' },
        { name: 'Supply Chain', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=150&fit=crop', desc: 'Responsible Sourcing' },
        { name: 'Materials', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=200&h=150&fit=crop', desc: 'Innovative Solutions' }
      ]
    },
    { 
      name: 'FINANCE', 
      subItems: [
        { name: 'Share Price', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=150&fit=crop', desc: 'Stock Information' },
        { name: 'Financial Reports', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=150&fit=crop', desc: 'Annual Reports' },
        { name: 'Investor Relations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop', desc: 'For Investors' },
        { name: 'Calendar', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop', desc: 'Financial Events' },
        { name: 'Governance', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=150&fit=crop', desc: 'Corporate Governance' },
        { name: 'Analysts', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=150&fit=crop', desc: 'Analyst Coverage' }
      ]
    },
    { 
      name: 'PRESS', 
      subItems: [
        { name: 'Latest News', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=150&fit=crop', desc: 'Recent Updates' },
        { name: 'Media Kit', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=150&fit=crop', desc: 'Press Resources' },
        { name: 'Contact Press', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=150&fit=crop', desc: 'Media Contacts' },
        { name: 'Awards', image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&h=150&fit=crop', desc: 'Recognition' },
        { name: 'Campaigns', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=150&fit=crop', desc: 'Brand Campaigns' },
        { name: 'Events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=150&fit=crop', desc: 'Company Events' }
      ]
    }
  ];

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const priceTimer = setInterval(() => {
      const change = (Math.random() - 0.5) * 0.8;
      setSharePrice(prev => Math.max(200, Math.min(250, prev + change)));
      setPriceChange(change);
    }, 4000);

    const heroTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);

    const brandTimer = setInterval(() => {
      if (showBrandSlider) {
        setActiveBrandSlide(prev => (prev + 1) % brands.length);
      }
    }, 4000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(priceTimer);
      clearInterval(heroTimer);
      clearInterval(brandTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showBrandSlider]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      const isAlreadyFavorite = prev.some(fav => fav.id === item.id);
      if (isAlreadyFavorite) {
        return prev.filter(fav => fav.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isFavorite = (item) => {
    return favorites.some(fav => fav.id === item.id);
  };

  const shareOnSocial = (platform, item) => {
    const url = window.location.href;
    const title = item?.title || 'Kering - Luxury Group';
    const description = item?.details || 'Discover luxury fashion with Kering';
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'instagram':
        // Instagram doesn't have direct share URL, so we copy to clipboard
        navigator.clipboard.writeText(`${title} - ${url}`);
        alert('Link copied to clipboard for Instagram sharing!');
        return;
      default:
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  if (isLoading) {
    return (
      <div className="min-vh-100 bg-white d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-dark mb-4" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h1 className="h2 fw-light text-black" style={{ letterSpacing: '6px' }}>KERING</h1>
          <div className="text-muted mt-2">◊</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-white position-relative">
      <style>
        {`
          .dropdown-mega {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255,255,255,0.98);
            backdrop-filter: blur(20px);
            border: none;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            border-radius: 0;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1000;
            padding: 40px 20px;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%) translateY(-20px);
          }
          
          .nav-item:hover .dropdown-mega {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }
          
          .dropdown-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .brand-slider-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.95);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
          }
          
          .brand-slider-overlay.active {
            opacity: 1;
            visibility: visible;
          }
          
          .brand-slider-container {
            position: relative;
            max-width: 1200px;
            width: 90%;
            height: 80vh;
            max-height: 600px;
            overflow: hidden;
            border-radius: 12px;
          }
          
          .brand-slide {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .brand-slide.active {
            opacity: 1;
            transform: translateX(0);
          }
          
          .brand-slide.prev {
            opacity: 0;
            transform: translateX(-100px);
          }
          
          .dropdown-item-custom {
            text-decoration: none;
            color: inherit;
            display: block;
            padding: 0;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            height: 200px;
          }
          
          .dropdown-item-custom:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
            color: inherit;
          }
          
          .dropdown-item-image {
            width: 100%;
            height: 110px;
            background-size: cover;
            background-position: center;
          }
          
          .dropdown-item-content {
            padding: 15px;
          }
          
          .nav-item {
            position: relative;
          }
          
          .nav-link-custom {
            display: block;
            padding: 15px 0;
            text-decoration: none;
            color: #000;
            font-weight: 300;
            font-size: 13px;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            border-bottom: 2px solid transparent;
          }
          
          .nav-link-custom:hover {
            color: #000;
            border-bottom-color: #000;
          }
          
          .language-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border: none;
            border-radius: 8px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            min-width: 200px;
            padding: 15px 0;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1001;
          }
          
          .language-dropdown.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          
          .language-item {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            text-decoration: none;
            color: #333;
            transition: all 0.2s ease;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
          }
          
          .language-item:hover {
            background-color: #f8f9fa;
            color: #000;
          }
          
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .masonry-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-auto-rows: 300px;
            gap: 25px;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .grid-item {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          }
          
          .grid-item:hover {
            transform: scale(1.02);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          
          .grid-item:hover .grid-overlay {
            opacity: 1;
          }
          
          .grid-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 20px;
          }
          
          .grid-overlay h3 {
            font-size: 20px;
            margin-bottom: 10px;
            line-height: 1.3;
          }
          
          .grid-overlay p {
            font-size: 14px;
            opacity: 0.9;
            line-height: 1.4;
          }
          
          .grid-item.large {
            grid-column: span 2;
            grid-row: span 2;
          }
          
          .grid-item.wide {
            grid-column: span 2;
            grid-row: span 1;
          }
          
          .grid-item.small {
            grid-column: span 1;
            grid-row: span 1;
          }
          
          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.3);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .hero-item:hover .hero-overlay {
            opacity: 1;
          }
          
          .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fa;
            color: #333;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          
          .social-icon:hover {
            background: #000;
            color: white;
            transform: translateY(-3px);
          }
          
          .category-button {
            padding: 10px 20px;
            border: 1px solid #ddd;
            border-radius: 50px;
            background: white;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 1px;
            text-transform: uppercase;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            margin: 5px;
          }
          
          .category-button:hover {
            background: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          
          .category-button.active {
            background: white;
            color: #000;
            border-color: #000;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          }
          
          .grid-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.95);
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
          }
          
          .grid-modal.active {
            opacity: 1;
            visibility: visible;
          }
          
          .grid-modal-content {
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            overflow-y: auto;
          }
          
          .grid-modal-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
          
          .grid-modal-body {
            padding: 30px;
          }
          
          .favorites-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.95);
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
          }
          
          .favorites-modal.active {
            opacity: 1;
            visibility: visible;
          }
          
          .favorites-content {
            max-width: 1000px;
            width: 90%;
            max-height: 90vh;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            overflow-y: auto;
          }
          
          .favorites-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
          }
          
          .favorite-item {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }
          
          .favorite-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          
          .share-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border: none;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            padding: 15px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1001;
            min-width: 200px;
          }
          
          .share-menu.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          
          .share-item {
            display: flex;
            align-items: center;
            padding: 10px;
            text-decoration: none;
            color: #333;
            transition: all 0.2s ease;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            border-radius: 8px;
          }
          
          .share-item:hover {
            background-color: #f8f9fa;
            color: #000;
          }
          
          .heart-btn {
            position: absolute;
            top: 10px;
            right: 50px;
            background: rgba(255,255,255,0.9);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 10;
          }
          
          .heart-btn:hover {
            background: white;
            transform: scale(1.1);
          }
          
          .heart-btn.active {
            background: #ff4757;
            color: white;
          }
          
          .share-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255,255,255,0.9);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 10;
          }
          
          .share-btn:hover {
            background: white;
            transform: scale(1.1);
          }
          
          .header-action-btn {
            background: none;
            border: none;
            color: #333;
            padding: 10px;
            border-radius: 50%;
            transition: all 0.3s ease;
            position: relative;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .header-action-btn:hover {
            background: #f8f9fa;
            transform: scale(1.1);
          }
          
          .favorites-count {
            position: absolute;
            top: -2px;
            right: -2px;
            background: #ff4757;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: bold;
          }
          
          .section-title {
            font-size: 28px;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 30px;
            text-align: center;
          }
          
          .brand-circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            cursor: pointer;
            transition: transform 0.3s ease;
            border: 2px solid #fff;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
          }
          
          .brand-circle:hover {
            transform: scale(1.1);
          }
          
          .talent-search-input {
            width: 100%;
            max-width: 300px;
            padding: 10px 15px;
            border: 2px solid #ccc;
            border-radius: 25px;
            font-size: 14px;
            outline: none;
            transition: border-color 0.3s ease;
          }
          
          .talent-search-input:focus {
            border-color: #000;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
          }
          
          .header-search-input {
            width: 200px;
            padding: 8px 15px;
            border: 2px solid #ccc;
            border-radius: 25px;
            font-size: 14px;
            outline: none;
            transition: border-color 0.3s ease;
          }
          
          .header-search-input:focus {
            border-color: #000;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
          }
          
          .talent-search-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .talent-search-button {
            padding: 10px 25px;
            border: none;
            border-radius: 25px;
            background-color: #000;
            color: #fff;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          
          .talent-search-button:hover {
            background-color: #333;
          }
          
          .header-search-container {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .gallery-view-toggle {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .view-toggle-btn {
            padding: 8px 16px;
            border: 1px solid #ddd;
            border-radius: 25px;
            background: white;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 12px;
          }
          
          .view-toggle-btn.active {
            background: #000;
            color: white;
            border-color: #000;
          }
          
          .list-view {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .list-item {
            display: flex;
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }
          
          .list-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          
          .list-item-image {
            width: 200px;
            height: 150px;
            object-fit: cover;
          }
          
          .list-item-content {
            padding: 20px;
            flex: 1;
            position: relative;
          }
          
          /* Mobile Responsive Styles */
          @media (max-width: 1200px) {
            .dropdown-grid {
              grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
              gap: 15px;
            }
            .header-search-input {
              width: 180px;
            }
            .section-title {
              font-size: 24px;
            }
            .header-action-btn {
              width: 40px;
              height: 40px;
              padding: 8px;
            }
          }
          
          @media (max-width: 992px) {
            .dropdown-mega {
              padding: 30px 15px;
            }
            .dropdown-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }
            .masonry-grid {
              grid-template-columns: repeat(2, 1fr);
              grid-auto-rows: 250px;
            }
            .grid-item.large, .grid-item.wide {
              grid-column: span 2;
            }
            .brand-circle {
              width: 45px;
              height: 45px;
            }
            .nav-link-custom {
              font-size: 12px;
            }
            .header-search-input {
              width: 150px;
            }
            .list-item {
              flex-direction: column;
            }
            .list-item-image {
              width: 100%;
              height: 200px;
            }
            .section-title {
              font-size: 22px;
            }
            .header-action-btn {
              width: 38px;
              height: 38px;
              padding: 6px;
            }
            /* Sustainability section mobile */
            .display-3 {
              font-size: 2.5rem !important;
            }
          }
          
          @media (max-width: 768px) {
            .dropdown-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .masonry-grid {
              grid-template-columns: 1fr;
              grid-auto-rows: 300px;
            }
            .grid-item.large, .grid-item.wide, .grid-item.small {
              grid-column: span 1;
              grid-row: span 1;
            }
            .brand-slider-container {
              height: 70vh;
            }
            .header-search-input {
              width: 120px;
            }
            .talent-search-input {
              width: 100%;
            }
            .nav-link-custom {
              font-size: 11px;
            }
            .section-title {
              font-size: 20px;
              letter-spacing: 1px;
            }
            .category-button {
              font-size: 11px;
              padding: 8px 15px;
            }
            .favorites-grid {
              grid-template-columns: 1fr;
            }
            .talent-search-container {
              padding: 0 20px;
            }
            .header-action-btn {
              width: 36px;
              height: 36px;
              padding: 6px;
            }
            /* Sustainability responsive */
            .display-3 {
              font-size: 2rem !important;
              letter-spacing: 2px !important;
            }
            .fs-4 {
              font-size: 1.1rem !important;
            }
            .fs-5 {
              font-size: 1rem !important;
            }
          }
          
          @media (max-width: 576px) {
            .dropdown-grid {
              grid-template-columns: 1fr;
            }
            .brand-circle {
              width: 35px;
              height: 35px;
            }
            .header-search-container {
              display: none;
            }
            .nav-link-custom {
              font-size: 10px;
              padding: 12px 0;
            }
            .section-title {
              font-size: 18px;
            }
            .grid-modal-content, .favorites-content {
              width: 95%;
              max-height: 95vh;
            }
            .grid-modal-body {
              padding: 20px;
            }
            .heart-btn, .share-btn {
              width: 35px;
              height: 35px;
            }
            .heart-btn {
              right: 45px;
            }
            .header-action-btn {
              width: 34px;
              height: 34px;
              padding: 5px;
            }
            /* Mobile sustainability adjustments */
            .display-3 {
              font-size: 1.8rem !important;
              letter-spacing: 1px !important;
            }
            .lead {
              font-size: 1rem !important;
            }
            .btn-success {
              padding: 12px 25px !important;
              font-size: 0.9rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .brand-slider-container {
              height: 60vh;
            }
            .hero-overlay h2 {
              font-size: 2rem;
            }
            .category-button {
              font-size: 10px;
              padding: 6px 12px;
            }
            .header-action-btn {
              width: 32px;
              height: 32px;
              padding: 4px;
            }
            /* Extra small mobile for sustainability */
            .display-3 {
              font-size: 1.5rem !important;
            }
            .btn-success {
              padding: 10px 20px !important;
              font-size: 0.8rem !important;
            }
          }
        `}
      </style>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="position-fixed w-100 h-100 bg-white d-flex flex-column justify-content-center align-items-center d-lg-none" style={{ zIndex: 9999 }}>
          <button 
            className="position-absolute top-0 end-0 m-4 btn btn-link text-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="w-100 overflow-y-auto" style={{ maxHeight: '80vh' }}>
            {navItems.map((item) => (
              <div key={item.name} className="text-center mb-4 px-3">
                <h3 className="h5 mb-3" style={{ letterSpacing: '2px' }}>{item.name}</h3>
                <div className="row">
                  {item.subItems.map((subItem) => (
                    <div key={subItem.name} className="col-6 col-sm-4 mb-3">
                      <a href="#" className="text-decoration-none">
                        <div 
                          className="rounded"
                          style={{ 
                            backgroundImage: `url(${subItem.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100px'
                          }}
                        />
                        <div className="mt-2">
                          <h6 className="fw-light mb-1 small">{subItem.name}</h6>
                          <p className="small text-muted mb-0" style={{ fontSize: '11px' }}>{subItem.desc}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`position-fixed w-100 top-0 ${isScrolled ? 'bg-white shadow-sm' : 'bg-white bg-opacity-95'}`} style={{ zIndex: 1000, backdropFilter: 'blur(10px)' }}>
        <div className="container-fluid px-4">
          <div className="row align-items-center py-3">
            <div className="col-6 col-lg-3">
              <div className="d-flex align-items-center">
                <button 
                  className="btn btn-link d-lg-none p-0 me-3 text-dark"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu size={20} />
                </button>
                <div className="d-none d-sm-block">
                  <div className="small text-muted fw-light" style={{ letterSpacing: '1px', fontSize: '11px' }}>SHARE PRICE</div>
                  <div className="fw-normal d-flex align-items-center">
                    <span style={{ fontSize: '16px' }}>{sharePrice.toFixed(2)} €</span>
                    <span className={`small ms-2 ${priceChange >= 0 ? 'text-success' : 'text-danger'}`} style={{ fontSize: '12px' }}>
                      {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-6 col-lg-6 text-center">
              <img src={logo} alt="Kering Logo" style={{ height: '50px' }} />
            </div>
            
            <div className="col-lg-3 text-end d-none d-lg-block">
              <div className="d-flex align-items-center justify-content-end gap-3">
                <div className="header-search-container">
                  <input
                    type="text"
                    className="header-search-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Favorites Button */}
                <button 
                  className="header-action-btn"
                  onClick={() => setShowFavorites(true)}
                >
                  <Heart size={20} fill={favorites.length > 0 ? '#ff4757' : 'none'} />
                  {favorites.length > 0 && (
                    <span className="favorites-count">{favorites.length}</span>
                  )}
                </button>

                {/* Share Button */}
                <div className="position-relative">
                  <button 
                    className="header-action-btn"
                    onClick={() => {
                      setShareItem({ title: 'Kering - Luxury Group', details: 'Discover luxury fashion with Kering' });
                      setShowShareMenu(!showShareMenu);
                    }}
                  >
                    <Share2 size={20} />
                  </button>
                  <div className={`share-menu ${showShareMenu ? 'show' : ''}`}>
                    <button 
                      className="share-item"
                      onClick={() => shareOnSocial('twitter', shareItem)}
                    >
                      <Twitter size={16} className="me-2" />
                      Twitter
                    </button>
                    <button 
                      className="share-item"
                      onClick={() => shareOnSocial('facebook', shareItem)}
                    >
                      <Facebook size={16} className="me-2" />
                      Facebook
                    </button>
                    <button 
                      className="share-item"
                      onClick={() => shareOnSocial('linkedin', shareItem)}
                    >
                      <Linkedin size={16} className="me-2" />
                      LinkedIn
                    </button>
                    <button 
                      className="share-item"
                      onClick={() => shareOnSocial('instagram', shareItem)}
                    >
                      <Instagram size={16} className="me-2" />
                      Instagram
                    </button>
                  </div>
                </div>
                
                {/* Language Dropdown */}
                <div className="position-relative">
                  <button 
                    className="btn btn-link p-0 text-dark border-0 d-flex align-items-center"
                    style={{ textDecoration: 'none', fontSize: '13px' }}
                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  >
                    <Globe size={16} className="me-2" />
                    <span className="me-1 fw-light">{selectedLanguage}</span>
                    <ChevronDown size={12} />
                  </button>
                  <div className={`language-dropdown ${showLanguageMenu ? 'show' : ''}`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="language-item"
                        onClick={() => {
                          setSelectedLanguage(lang.code);
                          setShowLanguageMenu(false);
                        }}
                      >
                        <span className="me-2">{lang.flag}</span>
                        <span className="me-auto">{lang.name}</span>
                        <small className="text-muted">{lang.code}</small>
                      </button>
                    ))}
                  </div>
                </div>
                
                <button className="btn btn-outline-dark px-4 py-2 fw-light" style={{ fontSize: '12px', letterSpacing: '1px', borderRadius: '25px', minWidth: '120px' }}>
                  JOIN US
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="border-top d-none d-lg-block" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
          <div className="container-fluid px-4">
            <div className="row">
              {navItems.map((item) => (
                <div key={item.name} className="col text-center nav-item">
                  <a 
                    href="#" 
                    className="nav-link-custom"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.name}
                  </a>
                  <div className="dropdown-mega">
                    <div className="dropdown-grid">
                      {item.subItems.map((subItem) => (
                        <a key={subItem.name} href="#" className="dropdown-item-custom">
                          <div 
                            className="dropdown-item-image"
                            style={{ backgroundImage: `url(${subItem.image})` }}
                          />
                          <div className="dropdown-item-content">
                            <h6 className="fw-light mb-1" style={{ fontSize: '13px' }}>{subItem.name}</h6>
                            <p className="small text-muted mb-0" style={{ fontSize: '11px' }}>{subItem.desc}</p>
                            {subItem.founded && (
                              <p className="small text-muted mb-0" style={{ fontSize: '10px' }}>Since {subItem.founded}</p>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Favorites Modal */}
      <div className={`favorites-modal ${showFavorites ? 'active' : ''}`} onClick={() => setShowFavorites(false)}>
        <div className="favorites-content" onClick={(e) => e.stopPropagation()}>
          <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
            <h3 className="mb-0">My Favorites ({favorites.length})</h3>
            <button 
              className="btn btn-link text-dark"
              onClick={() => setShowFavorites(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          {favorites.length === 0 ? (
            <div className="text-center py-5">
              <Heart size={48} className="text-muted mb-3" />
              <h4 className="text-muted">No favorites yet</h4>
              <p className="text-muted">Start exploring and add items to your favorites!</p>
            </div>
          ) : (
            <div className="favorites-grid">
              {favorites.map((item) => (
                <div key={item.id} className="favorite-item">
                  <div className="position-relative">
                    <img src={item.image} alt={item.title} className="w-100" style={{ height: '150px', objectFit: 'cover' }} />
                    <button 
                      className="heart-btn active"
                      onClick={() => toggleFavorite(item)}
                    >
                      <Heart size={16} fill="#ff4757" />
                    </button>
                  </div>
                  <div className="p-3">
                    <h6 className="fw-light mb-1">{item.title}</h6>
                    <p className="small text-muted mb-2">{item.category}</p>
                    <p className="small">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{ marginTop: '120px', height: 'calc(100vh - 120px)', marginBottom: '50px' }}>
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroSlides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.5s ease-in-out'
          }}
        />
        
        <div className="position-relative h-100 d-flex align-items-center text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-5">
                  <h2 className="display-1 fw-light mb-2" style={{ letterSpacing: '8px', fontSize: 'clamp(40px, 8vw, 120px)' }}>
                    {heroSlides[currentSlide].title}
                  </h2>
                  <h3 className="h4 fw-light mb-3" style={{ letterSpacing: '4px' }}>
                    {heroSlides[currentSlide].subtitle}
                  </h3>
                  <p className="lead mb-4 opacity-90">{heroSlides[currentSlide].description}</p>
                  <button 
                    className="btn btn-outline-light px-5 py-3 fw-light" 
                    style={{ letterSpacing: '2px', fontSize: '16px', borderRadius: '30px' }}
                    onClick={() => setActiveHeroItem(heroSlides[currentSlide])}
                  >
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ms-2" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Modal */}
        {activeHeroItem && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 2000 }}
            onClick={() => setActiveHeroItem(null)}
          >
            <div className="position-relative" onClick={(e) => e.stopPropagation()}>
              <button 
                className="position-absolute top-0 end-0 btn btn-link text-white"
                style={{ transform: 'translate(50%, -50%)' }}
                onClick={() => setActiveHeroItem(null)}
              >
                <X size={30} />
              </button>
              <img 
                src={activeHeroItem.image}
                alt={activeHeroItem.title}
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: '80vw', maxHeight: '80vh' }}
              />
              <div className="position-absolute bottom-0 start-0 p-4 bg-dark bg-opacity-75 w-100">
                <h4 className="text-white mb-0">{activeHeroItem.title}</h4>
                <p className="text-light small">{activeHeroItem.description}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Slider Navigation */}
        <button 
          className="position-absolute start-0 top-50 translate-middle-y btn btn-link text-white ms-4 p-2"
          onClick={prevSlide}
          style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="position-absolute end-0 top-50 translate-middle-y btn btn-link text-white me-4 p-2"
          onClick={nextSlide}
          style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Slide Indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
          <div className="d-flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`btn p-0 border-0 ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                style={{ width: '8px', height: '8px', borderRadius: '50%' }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Brand Circles */}
        <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-center flex-wrap gap-3 pb-4 d-none d-md-flex">
          {brands.slice(0, 6).map((brand, index) => (
            <div
              key={brand.name}
              className="brand-circle cursor-pointer"
              style={{ backgroundImage: `url(${brand.image})` }}
              onClick={() => setCurrentSlide(index % heroSlides.length)}
            />
          ))}
        </div>
      </section>

      {/* Brands Strip */}
      <section className="py-4" style={{ backgroundColor: '#f8f9fa', marginBottom: '50px' }}>
        <div className="container-fluid">
          <div className="overflow-hidden">
            <div className="d-flex animate-scroll" style={{ width: '200%' }}>
              {[...brands, ...brands].map((brand, index) => (
                <div 
                  key={`${brand.name}-${index}`} 
                  className="flex-shrink-0 px-5 small text-muted"
                  style={{ letterSpacing: '1px', whiteSpace: 'nowrap', fontSize: '11px', fontWeight: '300', cursor: 'pointer' }}
                  onClick={() => {
                    setActiveBrandSlide(brands.findIndex(b => b.name === brand.name));
                    setShowBrandSlider(true);
                  }}
                >
                  {brand.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Slider Overlay */}
      <div className={`brand-slider-overlay ${showBrandSlider ? 'active' : ''}`}>
        <div className="brand-slider-container">
          <button 
            className="position-absolute top-0 end-0 btn btn-link text-white m-4"
            style={{ zIndex: 2001 }}
            onClick={() => setShowBrandSlider(false)}
          >
            <X size={30} />
          </button>
          
          <button 
            className="position-absolute start-0 top-50 translate-middle-y btn btn-link text-white ms-4"
            style={{ zIndex: 2001 }}
            onClick={() => setActiveBrandSlide(prev => (prev - 1 + brands.length) % brands.length)}
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            className="position-absolute end-0 top-50 translate-middle-y btn btn-link text-white me-4"
            style={{ zIndex: 2001 }}
            onClick={() => setActiveBrandSlide(prev => (prev + 1) % brands.length)}
          >
            <ChevronRight size={40} />
          </button>

          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className={`brand-slide ${index === activeBrandSlide ? 'active' : index === (activeBrandSlide - 1 + brands.length) % brands.length ? 'prev' : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${brand.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="position-absolute bottom-0 start-0 p-5 text-white">
                <div className="small mb-2 opacity-75" style={{ letterSpacing: '2px' }}>FOUNDED {brand.founded}</div>
                <h2 className="display-4 fw-light mb-3" style={{ letterSpacing: '4px', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{brand.name}</h2>
                <p className="lead opacity-90 mb-4">{brand.description}</p>
                <button className="btn btn-outline-light px-4 py-2">
                  Discover Collection
                  <ArrowRight className="ms-2" size={16} />
                </button>
              </div>
              
              <div className="position-absolute bottom-0 end-0 p-5 text-white">
                <div className="d-flex gap-2">
                  {brands.map((_, i) => (
                    <button
                      key={i}
                      className={`btn p-0 border-0 ${i === activeBrandSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                      style={{ width: '8px', height: '8px', borderRadius: '50%' }}
                      onClick={() => setActiveBrandSlide(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <section className="container-fluid px-4 py-5" style={{ marginBottom: '50px' }}>
        <div className="text-center mb-5">
          <h2 className="section-title">EXPLORE OUR WORLD</h2>
          
          {/* Gallery View Toggle */}
          <div className="gallery-view-toggle mb-4">
            <button
              className={`view-toggle-btn ${galleryView === 'grid' ? 'active' : ''}`}
              onClick={() => setGalleryView('grid')}
            >
              Grid View
            </button>
            <button
              className={`view-toggle-btn ${galleryView === 'list' ? 'active' : ''}`}
              onClick={() => setGalleryView('list')}
            >
              List View
            </button>
          </div>
          
          {/* Category Filter */}
          <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.replace('_', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {galleryView === 'grid' ? (
          <div className="masonry-grid">
            {filteredGridSections.map((section) => (
              <div 
                key={section.id} 
                className={`grid-item ${section.size} position-relative`}
                onClick={() => setActiveGridModal(section)}
              >
                <img src={section.image} alt={section.title} className="w-100 h-100 object-fit-cover" />
                
                {/* Heart Button */}
                <button 
                  className={`heart-btn ${isFavorite(section) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(section);
                  }}
                >
                  <Heart size={16} fill={isFavorite(section) ? '#ff4757' : 'none'} />
                </button>
                
                {/* Share Button */}
                <div className="position-relative">
                  <button 
                    className="share-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShareItem(section);
                      setShowShareMenu(true);
                    }}
                  >
                    <Share2 size={16} />
                  </button>
                </div>
                
                <div className="grid-overlay">
                  <h3 className="fw-light">{section.title}</h3>
                  <p className="small">{section.details}</p>
                  <span className="badge bg-light text-dark mt-2">{section.category}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="list-view">
            {filteredGridSections.map((section) => (
              <div 
                key={section.id} 
                className="list-item position-relative"
                onClick={() => setActiveGridModal(section)}
              >
                <img src={section.image} alt={section.title} className="list-item-image" />
                <div className="list-item-content">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-secondary">{section.category}</span>
                    <div className="d-flex gap-2">
                      <button 
                        className={`btn btn-sm ${isFavorite(section) ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(section);
                        }}
                      >
                        <Heart size={14} fill={isFavorite(section) ? 'white' : 'none'} />
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShareItem(section);
                          setShowShareMenu(true);
                        }}
                      >
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                  <h4 className="fw-light mb-2">{section.title}</h4>
                  <p className="text-muted small">{section.details}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Grid Item Modal */}
      {activeGridModal && (
        <div className="grid-modal active" onClick={() => setActiveGridModal(null)}>
          <div className="grid-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="position-absolute top-0 end-0 btn btn-link text-dark m-3"
              style={{ zIndex: 10 }}
              onClick={() => setActiveGridModal(null)}
            >
              <X size={24} />
            </button>
            <img 
              src={activeGridModal.image} 
              alt={activeGridModal.title}
              className="grid-modal-image"
            />
            <div className="grid-modal-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className="badge bg-secondary">{activeGridModal.category}</span>
                <div className="d-flex gap-2">
                  <button 
                    className={`btn btn-sm ${isFavorite(activeGridModal) ? 'btn-danger' : 'btn-outline-secondary'}`}
                    onClick={() => toggleFavorite(activeGridModal)}
                  >
                    <Heart size={16} fill={isFavorite(activeGridModal) ? 'white' : 'none'} />
                  </button>
                  <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => {
                      setShareItem(activeGridModal);
                      setShowShareMenu(true);
                    }}
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
              <h3 className="mb-3 fw-light">{activeGridModal.title}</h3>
              <p className="text-muted mb-4">{activeGridModal.details}</p>
              {activeGridModal.subtitle && <p className="small text-secondary">{activeGridModal.subtitle}</p>}
              <button className="btn btn-dark mt-3">
                Learn More
                <ArrowRight className="ms-2" size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Finance Section */}
      <section 
        className="position-relative py-5 text-center"
        style={{ minHeight: '500px', backgroundImage: `url(${financeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '50px' }}
      >
        <div className="position-absolute w-100 h-100" style={{ background: 'rgba(0,0,0,0.5)' }} />
        <div className="container position-relative">
          <h2 className="section-title text-warning mb-5">FINANCIAL INSIGHTS</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px' }}>
                <div className="mb-3 fw-bold" style={{ letterSpacing: '2px', fontSize: '14px' }}>KEY FIGURES</div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-3 pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <span className="small">Revenue 2023</span>
                    <strong>€20.4B</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-3 pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <span className="small">Operating Margin</span>
                    <strong>21.2%</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="small">Free Cash Flow</span>
                    <strong>€3.1B</strong>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <div className="position-relative d-inline-block">
                <svg width="250" height="250" viewBox="0 0 250 250" className="d-block mx-auto">
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="125"
                    cy="125"
                    r="100"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="125"
                    cy="125"
                    r="100"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="6"
                    strokeDasharray="628"
                    strokeDashoffset="125"
                    transform="rotate(-90 125 125)"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' }}
                  />
                </svg>
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                  <div className="display-4 mb-0 fw-light" style={{ fontSize: '36px' }}>{sharePrice.toFixed(2)}€</div>
                  <div className="small fw-light mt-2" style={{ letterSpacing: '2px', fontSize: '11px' }}>SHARE PRICE</div>
                  <div className={`small mt-2 ${priceChange >= 0 ? 'text-success' : 'text-danger'}`} style={{ fontSize: '14px' }}>
                    {priceChange >= 0 ? '↗' : '↘'} {Math.abs(priceChange).toFixed(2)}€
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px' }}>
                <div className="mb-3 fw-bold" style={{ letterSpacing: '2px', fontSize: '14px' }}>KERING SHARE</div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-3 pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <span className="small">Market Cap</span>
                    <strong>€28.4B</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-3 pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <span className="small">P/E Ratio</span>
                    <strong>24.6</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="small">Dividend Yield</span>
                    <strong>3.2%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Video Section */}
      <section 
        className="py-5 position-relative text-center" 
        style={{ backgroundImage: `url(${assert})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '600px', marginBottom: '50px' }}
      >
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,50,0,0.75)' }} />
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-3 fw-light mb-4 text-white" style={{ letterSpacing: '4px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                SUSTAINABILITY
              </h2>
              <div className="mb-4">
                <span className="badge bg-success px-4 py-2 fs-6 mb-3" style={{ letterSpacing: '2px' }}>
                  PROGRESS REPORT 2020-2023
                </span>
              </div>
              <p className="lead text-light mb-5 fs-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Our unwavering commitment to building a sustainable future through innovative practices, 
                responsible sourcing, and environmental stewardship across all our luxury brands.
              </p>
              
              {/* Key Stats */}
              <div className="row mb-5">
                <div className="col-md-4 mb-3">
                  <div className="text-center p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                    <h3 className="text-success fw-bold mb-2">-70%</h3>
                    <p className="text-light small mb-0">CO₂ Emissions Reduction</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="text-center p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                    <h3 className="text-success fw-bold mb-2">100%</h3>
                    <p className="text-light small mb-0">Renewable Energy</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="text-center p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                    <h3 className="text-success fw-bold mb-2">85%</h3>
                    <p className="text-light small mb-0">Sustainable Materials</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="btn btn-success px-5 py-3 fs-5 fw-light" 
                style={{ borderRadius: '30px', letterSpacing: '2px', boxShadow: '0 8px 25px rgba(40,167,69,0.4)' }}
                onClick={() => setVideoPlaying(true)}
              >
                <Play size={24} className="me-3" />
                WATCH FULL REPORT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoPlaying && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 3000 }} onClick={() => setVideoPlaying(false)}>
          <div className="position-relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="position-absolute top-0 end-0 btn btn-link text-white" 
              style={{ transform: 'translate(50%, -50%)', zIndex: 1 }} 
              onClick={() => setVideoPlaying(false)}
            >
              <X size={30} />
            </button>
            <video width="90%" height="auto" style={{ maxWidth: '800px' }} controls autoPlay>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Talent Section */}
      <section className="position-relative py-5" style={{ backgroundImage: `url(${talent})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '500px', marginBottom: '50px' }}>
        <div className="position-absolute w-100 h-100" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="container position-relative text-center py-5">
          <h2 className="section-title text-primary mb-4">TALENT OPPORTUNITIES</h2>
          <p className="lead text-white mb-5">Join our team and shape the future of luxury.</p>
          <div className="talent-search-container">
            <input
              type="text"
              className="talent-search-input mb-3"
              placeholder="Enter job title, keywords, or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className="talent-search-button"
              onClick={() => console.log('Search:', searchQuery)}
            >
              Search Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-5" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="h2 fw-light mb-4" style={{ letterSpacing: '6px', fontSize: '32px' }}>KERING</h3>
            
            {/* Social Media Icons */}
            <div className="d-flex justify-content-center gap-3 mb-4">
              <a href="#" className="social-icon"><Facebook size={24} /></a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={20} />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mx-auto" style={{ maxWidth: '500px' }}>
              <h5 className="fw-light mb-3" style={{ letterSpacing: '2px', fontSize: '16px' }}>
                STAY CONNECTED
              </h5>
              <form className="d-flex gap-2 justify-content-center">
                <input
                  type="email"
                  className="form-control rounded-pill px-4"
                  placeholder="Enter your email"
                  style={{ maxWidth: '300px', border: '1px solid #ddd' }}
                />
                <button 
                  className="btn btn-dark rounded-pill px-4"
                  style={{ letterSpacing: '1px', fontSize: '14px' }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="row text-center">
            {navItems.map((item) => (
              <div key={item.name} className="col-6 col-md-4 col-lg-2 mb-4">
                <h6 className="fw-light mb-3" style={{ letterSpacing: '2px', fontSize: '13px' }}>
                  {item.name}
                </h6>
                <ul className="list-unstyled">
                  {item.subItems.slice(0, 4).map((subItem) => (
                    <li key={subItem.name} className="mb-2">
                      <a
                        href="#"
                        className="text-muted text-decoration-none small"
                        style={{ fontSize: '12px', transition: 'color 0.3s ease' }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#000')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#6c757d')}
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="border-top pt-4 mt-4" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
            <div className="row align-items-center">
              <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                <img src={logo} alt="Kering Logo" style={{ height: '40px' }} />
              </div>
              <div className="col-md-4 text-center mb-3 mb-md-0">
                <p className="small text-muted mb-0" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                  &copy; {new Date().getFullYear()} Kering. All rights reserved.
                </p>
              </div>
              <div className="col-md-4 text-center text-md-end">
                <div className="d-flex justify-content-center justify-content-md-end gap-3">
                  <a href="#" className="text-muted small text-decoration-none" style={{ fontSize: '11px' }}>
                    Privacy Policy
                  </a>
                  <a href="#" className="text-muted small text-decoration-none" style={{ fontSize: '11px' }}>
                    Terms of Use
                  </a>
                  <a href="#" className="text-muted small text-decoration-none" style={{ fontSize: '11px' }}>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;