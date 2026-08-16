import { useEffect } from 'react';
import Explore from '../components/Explore';
import SearchBar from '../components/common/SearchBar';

function ExplorePage({ language = 'en' }) {
  useEffect(() => {
    document.title = language === 'kh' ? 'ទេសចរណ៍ឆ្លាត | ស្វែងរក' : 'Smart Tourism | Explore';
  }, [language]);

  return (
    <div>
      <SearchBar language = {language} />
      <Explore language={language} />
    </div>
  );
}

export default ExplorePage;
