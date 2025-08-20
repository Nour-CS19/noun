/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Play, Globe, ChevronUp, Linkedin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

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

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'IT', name: 'Italiano', flag: '🇮🇹' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'JP', name: '日本語', flag: '🇯🇵' },
    { code: 'CN', name: '中文', flag: '🇨🇳' }
  ];

  const heroItems = [
    {
      id: 'saint-laurent',
      title: 'Saint Laurent',
      subtitle: 'DISCOVER',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop'
    }
  ];

  const heroSlides = [
    {
      title: "Balenciaga",
      subtitle: "SUMMER 25 CAMPAIGN",
      description: "Discover the new collection",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop",
      cta: "DISCOVER",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Gucci", 
      subtitle: "ARIA COLLECTION",
      description: "Experience Italian craftsmanship",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=900&fit=crop",
      cta: "EXPLORE"
    },
    {
      title: "Saint Laurent",
      subtitle: "WINTER 2025",
      description: "Timeless elegance redefined",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop", 
      cta: "DISCOVER"
    }
  ];

  const gridSections = [
    {
      id: 'houses-gucci',
      title: 'Gucci',
      category: 'HOUSES',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
      size: 'large'
    },
    {
      id: 'finance',
      title: 'Kering announces the appointment of Luca de Meo as Chief Executive Officer',
      category: 'FINANCE',
      subtitle: 'GROUP',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      size: 'large'
    },
    {
      id: 'talent-jobs',
      title: 'Our Job Offers',
      category: 'TALENT',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
      size: 'small'
    },
    {
      id: 'sustainability',
      title: 'Sustainability Progress Report 2020-2023',
      category: 'SUSTAINABILITY',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      size: 'small'
    },
    {
      id: 'houses-dodo',
      title: 'DoDo',
      category: 'HOUSES',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
      size: 'small'
    },
    {
      id: 'group-foundation',
      title: 'Kering Foundation',
      category: 'GROUP',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      size: 'small'
    },
    {
      id: 'talent-motion',
      title: 'Women In Motion: 10 years of celebrating women in cinema',
      category: 'TALENT',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop',
      size: 'wide'
    }
  ];

  const brands = [
    { 
      name: 'Gucci', 
      logo: 'GUCCI',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop',
      description: 'Italian luxury fashion house known for its eclectic, contemporary, romantic products.',
      founded: '1921'
    },
    { 
      name: 'Saint Laurent', 
      logo: 'SAINT LAURENT',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop',
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
        { name: 'Women in Motion', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=150&fit=crop', desc: 'Empowering Women' },
        { name: 'Learning', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&h=150&fit=crop', desc: 'Development Programs' },
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
        { name: 'Circular Economy', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=200&h=150&fit=crop', desc: 'Sustainable Practices' },
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
        { name: 'Contact Press', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=150&fit=crop', desc: 'Media Contacts' },
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
            padding: 60px;
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
            grid-template-columns: repeat(6, 1fr);
            gap: 40px;
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
            width: 100%;
            height: 600px;
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
            height: 220px;
          }
          
          .dropdown-item-custom:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
            color: inherit;
          }
          
          .dropdown-item-image {
            width: 100%;
            height: 120px;
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
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 200px;
            gap: 20px;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .grid-item {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.4s ease;
          }
          
          .grid-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.2);
          }
          
          .grid-item.large {
            grid-column: span 2;
            grid-row: span 2;
          }
          
          .grid-item.wide {
            grid-column: span 3;
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
          
          @media (max-width: 1024px) {
            .dropdown-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .masonry-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .grid-item.large,
            .grid-item.wide {
              grid-column: span 2;
            }
          }
          
          @media (max-width: 768px) {
            .dropdown-grid {
              grid-template-columns: 1fr;
            }
            .masonry-grid {
              grid-template-columns: 1fr;
            }
            .grid-item.large,
            .grid-item.wide,
            .grid-item.small {
              grid-column: span 1;
              grid-row: span 1;
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
          {navItems.map((item) => (
            <div key={item.name} className="text-center mb-4">
              <h3 className="h4 mb-3" style={{ letterSpacing: '2px' }}>{item.name}</h3>
            </div>
          ))}
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
              <h1 className="h3 mb-0 fw-light text-dark" style={{ letterSpacing: '6px', fontSize: '24px' }}>KERING</h1>
              <div className="small text-muted mt-1" style={{ fontSize: '10px' }}>◊</div>
            </div>
            
            <div className="col-lg-3 text-end d-none d-lg-block">
              <div className="d-flex align-items-center justify-content-end gap-4">
                <Search className="cursor-pointer text-dark" size={18} style={{ opacity: 0.8 }} />
                
                {/* Language Dropdown */}
                <div className="position-relative">
                  <button 
                    className="btn btn-link p-0 text-dark border-0 d-flex align-items-center"
                    style={{ textDecoration: 'none', fontSize: '13px' }}
                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  >
                    <Globe size={14} className="me-2" />
                    <span className="me-1 fw-light">{selectedLanguage}</span>
                    <ChevronDown size={10} />
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
                
                <button className="btn btn-outline-dark btn-sm px-3 py-1 fw-light" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
                  JOIN US
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Modal */}
        {activeHeroItem && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 2000 }}
            onClick={() => setActiveHeroItem(null)}
          >
            <div className="position-relative">
              <button 
                className="position-absolute top-0 end-0 btn btn-link text-white"
                style={{ transform: 'translate(50%, -50%)' }}
                onClick={() => setActiveHeroItem(null)}
              >
                <X size={30} />
              </button>
              <img 
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: '80vw', maxHeight: '80vh' }}
              />
            </div>
          </div>
        )}

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
                            <h6 className="fw-light mb-1" style={{ fontSize: '14px' }}>{subItem.name}</h6>
                            <p className="small text-muted mb-0" style={{ fontSize: '12px' }}>{subItem.desc}</p>
                            {subItem.founded && (
                              <p className="small text-muted mb-0" style={{ fontSize: '11px' }}>Since {subItem.founded}</p>
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

      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{ marginTop: '120px', height: '90vh' }}>
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Static Hero Content */}
        <div className="position-relative h-100 d-flex align-items-center text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="mb-5">
                  <h2 className="display-1 fw-light mb-4" style={{ letterSpacing: '8px', fontSize: 'clamp(60px, 10vw, 140px)' }}>
                    Saint Laurent
                  </h2>
                  <div className="d-flex align-items-center">
                    <button 
                      className="btn btn-link text-white p-0 fw-light d-flex align-items-center" 
                      style={{ letterSpacing: '2px', fontSize: '16px', textDecoration: 'underline' }}
                      onClick={() => setActiveHeroItem(activeHeroItem ? null : 'saint-laurent')}
                    >
                      DISCOVER
                      <ArrowRight className="ms-2" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Image Modal */}
        {activeHeroItem && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 2000 }}
            onClick={() => setActiveHeroItem(null)}
          >
            <div className="position-relative">
              <button 
                className="position-absolute top-0 end-0 btn btn-link text-white"
                style={{ transform: 'translate(50%, -50%)' }}
                onClick={() => setActiveHeroItem(null)}
              >
                <X size={30} />
              </button>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                alt="Saint Laurent"
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: '80vw', maxHeight: '80vh' }}
              />
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
      </section>

      {/* Brands Strip */}
      <section className="py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container-fluid">
          <div className="overflow-hidden">
            <div className="d-flex animate-scroll" style={{ width: '200%' }}>
              {[...brands, ...brands].map((brand, index) => (
                <div 
                  key={`${brand.name}-${index}`} 
                  className="flex-shrink-0 px-5 small text-muted brand-logo-hover"
                  style={{ 
                    letterSpacing: '1px', 
                    whiteSpace: 'nowrap',
                    fontSize: '11px',
                    fontWeight: '300',
                    cursor: 'pointer'
                  }}
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
              className={`brand-slide ${index === activeBrandSlide ? 'active' : index < activeBrandSlide ? 'prev' : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${brand.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="position-absolute bottom-0 start-0 p-5 text-white">
                <div className="small mb-2 opacity-75" style={{ letterSpacing: '2px' }}>FOUNDED {brand.founded}</div>
                <h2 className="display-4 fw-light mb-3" style={{ letterSpacing: '4px' }}>{brand.name}</h2>
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

      {/* Main Masonry Grid Section */}
      <section className="container-fluid px-4 py-5">
        <div className="masonry-grid">
          {gridSections.map((section, index) => (
            <div 
              key={section.id} 
              className={`grid-item ${section.size}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${section.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="position-absolute top-0 start-0 p-4 text-white">
                {section.subtitle && (
                  <div className="small mb-1 opacity-75 fw-light" style={{ letterSpacing: '1px', fontSize: '10px' }}>
                    {section.subtitle}
                  </div>
                )}
                <div className="small mb-2 opacity-75 fw-light" style={{ letterSpacing: '1px', fontSize: '10px' }}>
                  {section.category}
                </div>
              </div>
              <div className="position-absolute bottom-0 start-0 p-4 text-white">
                <h3 className="fw-light lh-sm" style={{ 
                  fontSize: section.size === 'large' ? '28px' : '18px',
                  letterSpacing: '0.5px'
                }}>
                  {section.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Finance Section - Recreated from Image 1 */}
      <section 
        className="position-relative py-5 text-white"
        style={{
          minHeight: '500px',
          background: 'linear-gradient(135deg, #8B8680 0%, #6B635C 100%)'
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <div className="small fw-light mb-4" style={{ letterSpacing: '6px', fontSize: '14px' }}>FINANCE</div>
          </div>
          
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="p-4" style={{ backgroundColor: 'rgba(244, 240, 236, 0.95)', color: '#333' }}>
                <div className="mb-3" style={{ letterSpacing: '3px', fontSize: '14px', fontWeight: '400' }}>KEY FIGURES</div>
                <p className="small mb-4" style={{ color: '#666', lineHeight: '1.5' }}>Group's key financial data.</p>
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
                <svg width="280" height="280" viewBox="0 0 280 280">
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="140"
                    cy="140"
                    r="120"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="140"
                    cy="140"
                    r="120"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="6"
                    strokeDasharray="754"
                    strokeDashoffset="151"
                    transform="rotate(-90 140 140)"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' }}
                  />
                </svg>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <div className="display-4 mb-0 fw-light" style={{ fontSize: '48px' }}>{sharePrice.toFixed(2)}€</div>
                  <div className="small fw-light mt-2" style={{ letterSpacing: '4px', fontSize: '12px' }}>SHARE PRICE</div>
                  <div className={`small mt-2 ${priceChange >= 0 ? 'text-success' : 'text-danger'}`} style={{ fontSize: '14px' }}>
                    {priceChange >= 0 ? '↗' : '↘'} {Math.abs(priceChange).toFixed(2)}€
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="p-4" style={{ backgroundColor: 'rgba(244, 240, 236, 0.95)', color: '#333' }}>
                <div className="mb-3" style={{ letterSpacing: '3px', fontSize: '14px', fontWeight: '400' }}>KERING SHARE</div>
                <p className="small mb-4" style={{ color: '#666', lineHeight: '1.5' }}>
                  All information about the Kering share, 
                  financial data and shareholding structure.
                </p>
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

      {/* Sustainability Section - Recreated from Image 2 */}
      <section 
        className="py-5 position-relative text-center"
        style={{ 
          backgroundColor: '#F4F0EC',
          minHeight: '600px'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Video/Play Button Area */}
              <div className="position-relative mb-5">
                <div 
                  className="position-relative mx-auto rounded-3 overflow-hidden"
                  style={{
                    width: '100%',
                    height: '400px',
                    maxWidth: '800px',
                    background: 'linear-gradient(135deg, rgba(200, 230, 200, 0.3), rgba(150, 200, 150, 0.3))',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000" fill-opacity="0.05"%3E%3Cpath d="M20 20h10v10H20zM40 40h10v10H40zM60 20h10v10H60zM80 40h10v10H80zM10 60h10v10H10zM30 80h10v10H30zM50 60h10v10H50zM70 80h10v10H70z"/%3E%3C/g%3E%3C/svg%3E")'
                  }}
                >
                  {/* Decorative Elements */}
                  <div className="position-absolute" style={{ top: '20%', left: '15%', opacity: 0.6 }}>
                    <div 
                      style={{ 
                        width: '60px', 
                        height: '60px',
                        backgroundColor: 'rgba(150, 200, 150, 0.4)',
                        borderRadius: '50% 40% 50% 40%',
                        transform: 'rotate(-15deg)'
                      }}
                    />
                  </div>
                  
                  <div className="position-absolute" style={{ top: '30%', right: '20%', opacity: 0.5 }}>
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px',
                        backgroundColor: 'rgba(120, 180, 120, 0.5)',
                        borderRadius: '60% 40% 60% 40%',
                        transform: 'rotate(25deg)'
                      }}
                    />
                  </div>
                  
                  <div className="position-absolute" style={{ bottom: '20%', left: '25%', opacity: 0.4 }}>
                    <div 
                      style={{ 
                        width: '80px', 
                        height: '30px',
                        backgroundColor: 'rgba(100, 160, 100, 0.3)',
                        borderRadius: '50px',
                        transform: 'rotate(-30deg)'
                      }}
                    />
                  </div>

                  {/* Abstract Shapes */}
                  <div className="position-absolute" style={{ top: '15%', right: '15%' }}>
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                      <path d="M20 60C30 20, 70 20, 80 40C90 60, 50 70, 40 50C30 30, 60 30, 70 50" 
                            stroke="rgba(100, 160, 100, 0.4)" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>

                  {/* Play Button */}
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <button className="btn btn-link text-success p-0" style={{ fontSize: '80px' }}>
                      <div 
                        className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-lg"
                        style={{ width: '120px', height: '120px' }}
                      >
                        <Play size={40} className="ms-2" fill="currentColor" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="mb-5 text-success" style={{ 
                fontSize: 'clamp(24px, 4vw, 36px)', 
                fontWeight: '300',
                fontStyle: 'italic',
                letterSpacing: '1px'
              }}>
                Sustainability Progress Report 2020-2023
              </h2>
            </div>
          </div>
        </div>

        {/* Footer with Kering Logo and Social Icons */}
        <div 
          className="position-absolute bottom-0 start-0 w-100 py-4"
          style={{ backgroundColor: 'rgba(244, 240, 236, 0.8)' }}
        >
          <div className="container">
            <div className="text-center">
              <h3 className="h4 fw-light mb-4 text-dark" style={{ letterSpacing: '6px' }}>KERING</h3>
              
              {/* Decorative Symbol */}
              <div className="mb-4">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M15 5L20 15H10L15 5Z" fill="#666" opacity="0.6"/>
                  <path d="M15 25L10 15H20L15 25Z" fill="#666" opacity="0.6"/>
                </svg>
              </div>
              
              {/* Social Media Icons */}
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-dark" style={{ fontSize: '18px' }}>
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-dark" style={{ fontSize: '18px' }}>
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-dark" style={{ fontSize: '18px' }}>
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-dark" style={{ fontSize: '18px' }}>
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-dark" style={{ fontSize: '18px' }}>
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-dark" style={{ fontSize: '18px' }}>
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Section */}
      <section className="position-relative py-5 text-white" style={{ minHeight: '600px' }}>
        <video
          className="position-absolute w-100 h-100"
          style={{ objectFit: 'cover', zIndex: -1 }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div 
          className="position-absolute w-100 h-100"
          style={{ background: 'rgba(0,0,0,0.5)', zIndex: 0 }}
        />
        <div className="position-relative h-100 d-flex align-items-center" style={{ zIndex: 1 }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <div className="small mb-4 opacity-75 fw-light" style={{ letterSpacing: '2px', fontSize: '11px' }}>TALENT</div>
                <blockquote className="blockquote">
                  <p className="h4 fw-light mb-5 lh-base opacity-90" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
                    "Joining us is a life adventure; one where you'll discover who you are and what values drive you"
                  </p>
                </blockquote>
                <button className="btn btn-outline-light px-5 py-3 fw-light" style={{ letterSpacing: '1px', fontSize: '14px', borderRadius: '30px' }}>
                  Discover Opportunities
                  <ArrowRight className="ms-2" size={16} />
                </button>
              </div>
            </div>
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
              <a href="#" className="social-icon">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div className="pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-3">
              {['SITEMAP', 'CONTACT US', 'LEGAL', 'CREDITS', 'PRIVACY POLICY', 'COOKIES SETTINGS'].map((link) => (
                <a key={link} href="#" className="text-muted text-decoration-none fw-light" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
                  {link}
                </a>
              ))}
            </div>
            <p className="text-center text-muted mb-0 fw-light" style={{ fontSize: '11px' }}>
              © KERING 2024. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className="position-fixed bottom-0 end-0 m-4 btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: '50px', height: '50px', zIndex: 1000 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={20} />
      </button>
      
      {/* Click outside to close language dropdown */}
      {showLanguageMenu && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 999 }}
          onClick={() => setShowLanguageMenu(false)}
        />
      )}

      {/* Click outside to close brand slider */}
      {showBrandSlider && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 1999 }}
          onClick={() => setShowBrandSlider(false)}
        />
      )}
    </div>
  );
};

export default App;