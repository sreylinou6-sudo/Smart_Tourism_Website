import React, { createContext, useContext } from 'react';

// import Englsih
import enNav from '../locales/en/nav.json';
import enExplore from '../locales/en/explore.json';

// Import Khmer
import khNav from '../locales/kh/nav.json';
import khExplore from '../locales/kh/explore.json';


// បញ្ចូល File តាមផ្នែកឱ្យទៅជា Object ធំមួយតាមភាសា
const translations = {
  en: {
    nav: enNav,
    explore: enExplore
    
  },
  kh: {
    nav: khNav,
    explore: khExplore
    
  }
};

const LanguageContext = createContext();
export const LanguageProvider = ({ children, language, setLanguage }) => {
  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let result = translations[language] || translations['en'];

    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return keyPath;
      }
    }
    return result;
  };
  return (
    <LanguageContext.Provider value={{ lang: language, setLang: setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);