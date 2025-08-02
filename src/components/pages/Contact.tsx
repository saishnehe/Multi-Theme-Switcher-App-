import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { validateFormData, sanitizeInput } from '../../utils/security';
import type { Theme } from '../../types/theme';
import theme1 from '../theme/theme1';
import theme2 from '../theme/theme2';
import theme3 from '../theme/theme3';

const themeMap: Record<string, Theme> = {
  theme1,
  theme2,
  theme3,
};

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const currentTheme = themeMap[theme];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: sanitizeInput(value)
    });
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    const validation = validateFormData(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors([]);
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen transition-all duration-500 ease-in-out p-8"
      style={{ backgroundColor: currentTheme.background }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: currentTheme.textColor }}>
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: currentTheme.textColor }}>
            Have questions about our themes or want to collaborate? 
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className="p-8 rounded-lg transition-all duration-200 hover:shadow-lg slide-in"
            style={{ 
              backgroundColor: currentTheme.cardBackground,
              boxShadow: currentTheme.cardShadow,
              borderColor: currentTheme.border
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: currentTheme.textColor }}>
              Send us a Message
            </h3>
            
            {errors.length > 0 && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                <ul className="list-disc list-inside text-red-600 text-sm">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: currentTheme.textColor }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: currentTheme.secondary,
                    borderColor: currentTheme.border,
                    color: currentTheme.textColor,
                    '--tw-ring-color': currentTheme.accent
                  } as React.CSSProperties}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: currentTheme.textColor }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: currentTheme.secondary,
                    borderColor: currentTheme.border,
                    color: currentTheme.textColor,
                    '--tw-ring-color': currentTheme.accent
                  } as React.CSSProperties}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: currentTheme.textColor }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 resize-none"
                  style={{ 
                    backgroundColor: currentTheme.secondary,
                    borderColor: currentTheme.border,
                    color: currentTheme.textColor,
                    '--tw-ring-color': currentTheme.accent
                  } as React.CSSProperties}
                  placeholder="Tell us about your project or question... (minimum 10 characters)"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: currentTheme.buttonBackground, 
                  color: currentTheme.buttonText 
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div 
              className="p-6 rounded-lg transition-all duration-200 hover:shadow-lg slide-in"
              style={{ 
                backgroundColor: currentTheme.cardBackground,
                boxShadow: currentTheme.cardShadow,
                borderColor: currentTheme.border
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: currentTheme.textColor }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: currentTheme.accent }}>
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: currentTheme.textColor }}>Email</p>
                    <p className="text-sm" style={{ color: currentTheme.textColor }}>hello@ipster.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: currentTheme.accent }}>
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: currentTheme.textColor }}>Phone</p>
                    <p className="text-sm" style={{ color: currentTheme.textColor }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: currentTheme.accent }}>
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: currentTheme.textColor }}>Address</p>
                    <p className="text-sm" style={{ color: currentTheme.textColor }}>123 Design Street<br />Creative City, CC 12345</p>
                  </div>
                </div>
              </div>
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
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span style={{ color: currentTheme.textColor }}>Monday - Friday</span>
                  <span style={{ color: currentTheme.textColor }}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: currentTheme.textColor }}>Saturday</span>
                  <span style={{ color: currentTheme.textColor }}>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: currentTheme.textColor }}>Sunday</span>
                  <span style={{ color: currentTheme.textColor }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
