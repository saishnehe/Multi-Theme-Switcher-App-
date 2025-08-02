import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import type { Theme } from '../../types/theme';
import theme1 from '../theme/theme1';
import theme2 from '../theme/theme2';
import theme3 from '../theme/theme3';

const themeMap: Record<string, Theme> = {
  theme1,
  theme2,
  theme3,
};

const About: React.FC = () => {
  const { theme } = useTheme();
  const currentTheme = themeMap[theme];

  const handleLearnMore = () => {
    alert('Learn more about our amazing features!');
  };

  return (
    <div 
      className="min-h-screen transition-all duration-500 ease-in-out p-8"
      style={{ backgroundColor: currentTheme.background }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: currentTheme.textColor }}>
            About IPSTER
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: currentTheme.textColor }}>
            We are passionate about creating beautiful, functional, and accessible web experiences. 
            Our multi-theme application demonstrates the power of modern web technologies and 
            showcases different design approaches for various use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div 
            className="p-6 rounded-lg transition-all duration-200 hover:shadow-lg slide-in"
            style={{ 
              backgroundColor: currentTheme.cardBackground,
              boxShadow: currentTheme.cardShadow,
              borderColor: currentTheme.border
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: currentTheme.textColor }}>
              Our Mission
            </h3>
            <p className="leading-relaxed" style={{ color: currentTheme.textColor }}>
              To provide developers and designers with tools that make creating 
              beautiful, responsive web applications simple and enjoyable. We believe 
              that great design should be accessible to everyone.
            </p>
          </div>

          <div 
            className="p-6 rounded-lg transition-all duration-200 hover:shadow-lg slide-in"
            style={{ 
              backgroundColor: currentTheme.cardBackground,
              boxShadow: currentTheme.cardShadow,
              borderColor: currentTheme.border
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: currentTheme.textColor }}>
              Our Vision
            </h3>
            <p className="leading-relaxed" style={{ color: currentTheme.textColor }}>
              To revolutionize how people think about web design by providing 
              multiple theme options that cater to different preferences and use cases. 
              From minimalist to colorful, we have something for everyone.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleLearnMore}
            className="px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: currentTheme.buttonBackground, 
              color: currentTheme.buttonText 
            }}
          >
            Learn More About Us
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: currentTheme.accent }}>
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="font-bold mb-2" style={{ color: currentTheme.textColor }}>
              Beautiful Design
            </h4>
            <p className="text-sm" style={{ color: currentTheme.textColor }}>
              Carefully crafted themes with attention to detail
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: currentTheme.accent }}>
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-bold mb-2" style={{ color: currentTheme.textColor }}>
              Fast Performance
            </h4>
            <p className="text-sm" style={{ color: currentTheme.textColor }}>
              Optimized for speed and smooth user experience
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: currentTheme.accent }}>
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="font-bold mb-2" style={{ color: currentTheme.textColor }}>
              Responsive
            </h4>
            <p className="text-sm" style={{ color: currentTheme.textColor }}>
              Works perfectly on all devices and screen sizes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
