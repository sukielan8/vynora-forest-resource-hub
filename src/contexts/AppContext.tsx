import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'es' | 'fr';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('vynorra-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('vynorra-language', language);
  }, [language]);

  return (
    <AppContext.Provider value={{
      language,
      setLanguage
    }}>
      {children}
    </AppContext.Provider>
  );
};