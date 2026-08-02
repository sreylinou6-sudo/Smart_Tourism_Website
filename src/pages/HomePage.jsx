import { useEffect } from 'react';
import SlideShow from '../components/SlideShow';

function HomePage({ language = 'en' }) {
  useEffect(() => {
    document.title = language === 'kh' ? 'ទេសចរណ៍ឆ្លាត | ទំព័រដើម' : 'Smart Tourism | Home';
  }, [language]);

  return (
    <div>
      <SlideShow language={language} />
    </div>
  );
}

export default HomePage;
