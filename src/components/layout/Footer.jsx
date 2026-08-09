import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import logoImg from '../../assets/logoApp.png';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/Footer.css';

function Footer() {
  // ទាញយក t function ពី Custom Hook useLanguage
  const { t } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="Smart Tourism logo" className="footer-logo-icon" />
              <span>{t('footer.brand')}</span>
            </Link>
            <p className="footer-desc">{t('footer.intro')}</p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4>{t('footer.navTitle')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/explore">{t('nav.explore')}</Link></li>
              <li><Link to="/info">{t('nav.info')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
            </ul>
          </div>

          {/* Category Links */}
          <div className="footer-col">
            <h4>{t('footer.categoryTitle')}</h4>
            <ul className="footer-links">
              <li><Link to="/explore?cat=beaches">{t('footer.categories.beaches')}</Link></li>
              <li><Link to="/explore?cat=mountains">{t('footer.categories.mountains')}</Link></li>
              <li><Link to="/explore?cat=culture">{t('footer.categories.culture')}</Link></li>
              <li><Link to="/explore?cat=food">{t('footer.categories.food')}</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-col">
            <h4>{t('footer.newsletterTitle')}</h4>
            <p className="newsletter-text">{t('footer.newsletterText')}</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-group">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  type="email"
                  placeholder={t('footer.placeholder')}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Footer Bottom / Copyright Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {t('footer.brand')}. {t('footer.copyright')}.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">{t('footer.privacy')}</Link>
            <Link to="/terms">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;