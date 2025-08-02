import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'theme1',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>('theme1');

  useEffect(() => {
    const saved = localStorage.getItem('app-theme') as ThemeType;
    if (saved) setThemeState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
};
