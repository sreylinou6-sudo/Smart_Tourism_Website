import { useEffect } from 'react';
import Explore from '../components/Explore';

function ExplorePage({ language = 'en' }) {
  useEffect(() => {
    document.title = language === 'kh' ? 'ទេសចរណ៍ឆ្លាត | ស្វែងរក' : 'Smart Tourism | Explore';
  }, [language]);

  return (
    <div>
      <Explore language={language} />
    </div>
  );
}

export default ExplorePage;
