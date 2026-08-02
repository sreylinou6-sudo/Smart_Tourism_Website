import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ theme, setTheme, language, setLanguage }) => {
  return (
    <div className="app-shell">
      <Navbar theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default MainLayout;