import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import InfoPage from '../pages/InfoPage';
import GalleryPage from '../pages/GalleryPage';
import ExplorePage from '../pages/ExplorePage';
import MainLayout from '../layouts/MainLayout';

function AppRoutes({ theme, setTheme, language, setLanguage }) {
  return (
    <Routes>
      <Route element={<MainLayout theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />}>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/about" element={<AboutPage language={language} />} />
        <Route path="/info" element={<InfoPage language={language} />} />
        <Route path="/gallery" element={<GalleryPage language={language} />} />
        <Route path="/explore" element={<ExplorePage language={language} />} />

      </Route>
    </Routes>
  );
}
export default AppRoutes;
