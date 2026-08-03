import { useEffect } from 'react';
import Info from '../components/Info';

function InfoPage({ language = 'en' }) {
  useEffect(() => {
    document.title = language === 'kh' ? 'ទេសចរណ៍ឆ្លាត | ព័ត៌មាន' : 'Smart Tourism | Info';
  }, [language]);

  return <Info language={language} />;
}

export default InfoPage
