import { useEffect } from 'react';
import About from '../components/About';

function AboutPage({ language = 'en' }) {
  useEffect(() => {
    document.title = language === 'kh' ? 'ទេសចរណ៍ឆ្លាត | អំពីពួកយើង' : 'Smart Tourism | About';
  }, [language]);

  return <About language={language} />;
}

export default AboutPage
