import { useEffect } from 'react';
import Detail from '../components/Detail';

function DetailPage({ language = 'en' }) {
  useEffect(() => {
    document.title = language === 'kh' ? 'ទេសចរណ៍ឆ្លាត | ព័ត៌មានលម្អិត' : 'Smart Tourism | Detail Page';
  }, [language]);

  return (
    <div>
      <Detail language={language} />
    </div>
  );
}
export default DetailPage;