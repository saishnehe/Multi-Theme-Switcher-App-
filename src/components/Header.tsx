import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 shadow-md z-50 transition-all duration-500 ease-in-out">
      <div className="flex items-center space-x-6">
        {/* Logo/App Name */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IP</span>
          </div>
          <span className="font-bold text-xl">IPSTER</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline transition-colors duration-200">Home</Link>
          <Link to="/about" className="hover:underline transition-colors duration-200">About</Link>
          <Link to="/contact" className="hover:underline transition-colors duration-200">Contact</Link>
        </nav>
      </div>
      
      {/* Theme Dropdown */}
      <div className="flex items-center space-x-2">
        <label htmlFor="theme-select" className="text-sm font-medium">Theme:</label>
        <select 
          id="theme-select"
          value={theme} 
          onChange={(e) => setTheme(e.target.value as any)} 
          className="px-3 py-1 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="theme1">Theme 1 - Minimalist</option>
          <option value="theme2">Theme 2 - Dark Sidebar</option>
          <option value="theme3">Theme 3 - Colorful Grid</option>
        </select>
      </div>
    </header>
  );
};

export default Header;

