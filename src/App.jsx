import React, { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tourism-theme') || 'light';
    }
    return 'light';
  });

  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tourism-language') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', language === 'kh' ? 'km' : 'en');
    localStorage.setItem('tourism-theme', theme);
    localStorage.setItem('tourism-language', language);
  }, [theme, language]);
 
  return (
    <LanguageProvider language={language} setLanguage={setLanguage}>
      <AppRoutes theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
    </LanguageProvider>
  );
}

export default App;