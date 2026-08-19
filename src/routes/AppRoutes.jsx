import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import InfoPage from '../pages/InfoPage';
import DetailPage from '../pages/DetailPage';
import GalleryPage from '../pages/GalleryPage';
import ExplorePage from '../pages/ExplorePage';
import MainLayout from '../layouts/MainLayout';
import PrivacyPolicy from '../components/legal/PrivacyPolicy';
import TermsAndConditions from '../components/legal/TermsAndConditions';

function AppRoutes({ theme, setTheme, language, setLanguage }) {
  return (
    <Routes>
      <Route element={<MainLayout theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />}>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/about" element={<AboutPage language={language} />} />
        <Route path="/info" element={<InfoPage language={language} />} />
        <Route path="/gallery" element={<GalleryPage language={language} />} />
        <Route path="/explore" element={<ExplorePage language={language} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy language={language} />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions language={language} />} />
        <Route path="/detail/:id" element={<DetailPage language={language} />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
