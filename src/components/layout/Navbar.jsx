import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from '../../assets/logoApp.png';
import {
  faCompass,
  faBars,
  faXmark,
  faGlobe,
  faMoon,
  faSun,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/Navbar.css';

function Navbar({ theme, setTheme, language, setLanguage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const isKhmer = language === 'kh';

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen((prev) => !prev);
  const closeLanguageMenu = () => setIsLanguageMenuOpen(false);

  const navLabels = {
    brand: isKhmer ? 'ទេសចរណ៍ឆ្លាត' : 'Smart Tourism',
    home: isKhmer ? 'ទំព័រដើម' : 'Home',
    explore: isKhmer ? 'ស្វែងរក' : 'Explore',
    info: isKhmer ? 'ព័ត៌មានធ្វើដំណើរ' : 'Travel Info',
    gallery: isKhmer ? 'វិចិត្រសារមន្ទីរ' : 'Gallery',
    about: isKhmer ? 'អំពីពួកយើង' : 'About Us',
    cta: isKhmer ? 'ទាញយកកម្មវិធី' : 'Download App'
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logoImg} alt="Logo" className="navbar-logo-icon" />
          <span>{navLabels.brand}</span>
        </Link>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMobileMenu}
            >
              {navLabels.home}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/explore"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMobileMenu}
            >
              {navLabels.explore}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/info"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMobileMenu}
            >
              {navLabels.info}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMobileMenu}
            >
              {navLabels.gallery}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMobileMenu}
            >
              {navLabels.about}
            </NavLink>
          </li>
        </ul>

        <div className="navbar-actions">
          <div className="language-dropdown">
            <button
              type="button"
              className="language-dropdown-toggle"
              aria-label="Choose language"
              aria-expanded={isLanguageMenuOpen}
              onClick={toggleLanguageMenu}
            >
              <FontAwesomeIcon icon={faGlobe} />
              <span>{isKhmer ? 'KH' : 'EN'}</span>
              <FontAwesomeIcon icon={faChevronDown} className="language-dropdown-arrow" />
            </button>

            {isLanguageMenuOpen && (
              <div className="language-dropdown-menu" role="menu">
                <button
                  type="button"
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => {
                    setLanguage('en');
                    closeLanguageMenu();
                  }}
                >
                  English
                </button>
                <button
                  type="button"
                  className={`language-option ${language === 'kh' ? 'active' : ''}`}
                  onClick={() => {
                    setLanguage('kh');
                    closeLanguageMenu();
                  }}
                >
                  ភាសាខ្មែរ
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>

          <Link to="#" className="btn-primary" onClick={closeMobileMenu}>
            {navLabels.cta}
          </Link>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;