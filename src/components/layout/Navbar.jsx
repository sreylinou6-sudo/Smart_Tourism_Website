import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faBars,
  faXmark,
  faGlobe,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/Navbar.css';

function Navbar({ theme, setTheme, language, setLanguage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isKhmer = language === 'kh';

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
          <FontAwesomeIcon icon={faCompass} className="navbar-logo-icon" />
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
          <div className="toggle-group" aria-label="Language toggle">
            <button
              type="button"
              className={`pill-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`pill-btn ${language === 'kh' ? 'active' : ''}`}
              onClick={() => setLanguage('kh')}
            >
              KH
            </button>
          </div>

          <button
            type="button"
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>

          <button type="button" className="icon-btn" aria-label="Language selector">
            <FontAwesomeIcon icon={faGlobe} />
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