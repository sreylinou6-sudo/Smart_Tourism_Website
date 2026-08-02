import React, { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
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

  return <AppRoutes theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />;
}

export default App;