import React, { createContext, useContext, useState } from 'react';
import translations from '../locales';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('kh');

  const t = (key) => {
    if (!key) return '';
    const currentTrans = translations[lang] || translations.en || {};

    // ១. សាកល្បងរក Direct Key (ឧ. "nav.home")
    if (currentTrans[key]) {
      return currentTrans[key];
    }
    const keys = key.split('.');
    let result = currentTrans;
    for (const k of keys) {
      result = result?.[k];
    }

    if (result && typeof result === 'string') {
      return result;
    }

    // បើនៅតែរកមិនឃើញ ឲ្យចេញ Text ដើម
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};