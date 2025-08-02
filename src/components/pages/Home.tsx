import React, { useEffect, useState } from 'react';
import { useTheme } from './../../context/ThemeContext';
import type { Theme } from '../../types/theme';
import theme1 from '../theme/theme1';
import theme2 from '../theme/theme2';
import theme3 from '../theme/theme3';

const themeMap: Record<string, Theme> = {
  theme1,
  theme2,
  theme3,
};

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const currentTheme = themeMap[theme];

  const handleButtonClick = () => {
    alert('Button clicked! This is a sample interaction.');
  };

  // Theme-specific layouts
  const renderMinimalistLayout = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4 fade-in">
        <h1 className="text-4xl font-bold" style={{ color: currentTheme.textColor }}>
          Welcome to IPSTER
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: currentTheme.textColor }}>
          Experience our minimalist design with clean lines and simple elegance. 
          This theme focuses on content clarity and user experience.
        </p>
        <button
          onClick={handleButtonClick}
          className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          style={{ 
            backgroundColor: currentTheme.buttonBackground, 
            color: currentTheme.buttonText 
          }}
        >
          Get Started
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="p-4 rounded-lg border transition-all duration-200 hover:shadow-lg slide-in"
            style={{ 
              backgroundColor: currentTheme.cardBackground,
              borderColor: currentTheme.border,
              boxShadow: currentTheme.cardShadow,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <img src={product.image} alt={product.title} className="w-full h-32 object-contain mb-3" />
            <h3 className="font-semibold text-sm mb-2 line-clamp-2" style={{ color: currentTheme.textColor }}>
              {product.title}
            </h3>
            <p className="font-bold" style={{ color: currentTheme.accent }}>
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSidebarLayout = () => (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div 
        className="w-64 p-6 hidden lg:block"
        style={{ backgroundColor: currentTheme.sidebarBackground }}
      >
        <div className="space-y-6">
          <h2 className="text-xl font-bold" style={{ color: currentTheme.sidebarText }}>
            Navigation
          </h2>
          <nav className="space-y-3">
            <a href="#" className="block py-2 px-3 rounded transition-colors duration-200" 
               style={{ color: currentTheme.sidebarText }}>
              Dashboard
            </a>
            <a href="#" className="block py-2 px-3 rounded transition-colors duration-200" 
               style={{ color: currentTheme.sidebarText }}>
              Products
            </a>
            <a href="#" className="block py-2 px-3 rounded transition-colors duration-200" 
               style={{ color: currentTheme.sidebarText }}>
              Settings
            </a>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4 fade-in">
            <h1 className="text-4xl font-bold" style={{ color: currentTheme.textColor }}>
              Dark Sidebar Layout
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: currentTheme.textColor }}>
              Experience our dark theme with a professional sidebar layout. 
              Perfect for applications that require navigation and content organization.
            </p>
            <button
              onClick={handleButtonClick}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              style={{ 
                backgroundColor: currentTheme.buttonBackground, 
                color: currentTheme.buttonText 
              }}
            >
              Explore Features
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="p-6 rounded-lg transition-all duration-200 hover:shadow-xl slide-in"
                style={{ 
                  backgroundColor: currentTheme.cardBackground,
                  boxShadow: currentTheme.cardShadow,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
                <h3 className="font-semibold text-lg mb-2" style={{ color: currentTheme.textColor }}>
                  {product.title}
                </h3>
                <p className="text-sm mb-3 opacity-75" style={{ color: currentTheme.textColor }}>
                  {product.description?.substring(0, 100)}...
                </p>
                <p className="font-bold text-lg" style={{ color: currentTheme.accent }}>
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderGridLayout = () => (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-6 fade-in">
        <h1 className="text-5xl font-bold" style={{ color: currentTheme.textColor }}>
          Colorful Grid Experience
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: currentTheme.textColor }}>
          Welcome to our vibrant and playful theme! This colorful grid layout 
          brings joy and creativity to your browsing experience.
        </p>
        <button
          onClick={handleButtonClick}
          className="px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl"
          style={{ 
            backgroundColor: currentTheme.buttonBackground, 
            color: currentTheme.buttonText,
            boxShadow: '0 10px 25px rgba(0, 184, 148, 0.3)'
          }}
        >
          Start Exploring! 🎉
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:rotate-1 slide-in"
            style={{ 
              backgroundColor: currentTheme.cardBackground,
              boxShadow: currentTheme.cardShadow,
              borderRadius: currentTheme.cardBorderRadius,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="relative mb-4">
              <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
              <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold" 
                   style={{ color: currentTheme.accent }}>
                ${product.price}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2" style={{ color: currentTheme.textColor }}>
              {product.title}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-sm opacity-75" style={{ color: currentTheme.textColor }}>
                {product.category}
              </span>
              <button 
                className="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200"
                style={{ 
                  backgroundColor: currentTheme.accent, 
                  color: currentTheme.buttonText 
                }}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" 
             style={{ borderColor: currentTheme.accent }}></div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen transition-all duration-500 ease-in-out"
      style={{ backgroundColor: currentTheme.background }}
    >
      {theme === 'theme1' && renderMinimalistLayout()}
      {theme === 'theme2' && renderSidebarLayout()}
      {theme === 'theme3' && renderGridLayout()}
    </div>
  );
};

export default Home;
