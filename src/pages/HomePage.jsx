import { useEffect } from 'react';
import SlideShow from '../components/SlideShow';
import FeaturedDestinations from '../components/FeaturedDestinations';
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesOverview from "../components/ServicesOverview";

function HomePage({ language = 'en' }) {
  useEffect(() => {
    document.title = language === 'kh' ? 'ទេសចរណ៍ឆ្លាត | ទំព័រដើម' : 'Smart Tourism | Home';
  }, [language]);
  return (
    <div>
      <SlideShow language={language} />
      <FeaturedDestinations language={language}/>
      <WhyChooseUs language={language} />
      <ServicesOverview language={language} />
    </div>
  );
}
export default HomePage;