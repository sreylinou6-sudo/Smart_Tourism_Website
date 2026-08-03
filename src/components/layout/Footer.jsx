import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../../styles/Footer.css';

function Footer({ language }) {
  const isKhmer = language === 'kh';

  const content = {
    brand: isKhmer ? 'ទេសចរណ៍ឆ្លាតវៃ' : 'Smart Tourism',
    intro: isKhmer
      ? 'ច្រកចេញរបស់អ្នកដើម្បីស្វែងយល់ពីកន្លែងធ្វើដំណើរដែលបានជ្រើសរើសក៏ដូចជាឱកាសជីវិតក្នុងស្រុក។'
      : 'Your gateway to discovering curated destinations, local tips, and seamless exploration tools around the globe.',
    navTitle: isKhmer ? 'ការរុករក' : 'Navigation',
    categoryTitle: isKhmer ? 'ប្រភេទ' : 'Categories',
    newsletterTitle: isKhmer ? 'ទទួលបានព័ត៌មានថ្មី' : 'Stay Updated',
    newsletterText: isKhmer
      ? 'ចុះឈ្មោះទទួលបានការណែនាំទេសចរណ៍ និងការផ្តល់ជូនពិសេស។'
      : 'Subscribe for travel guides, local insights, and exclusive offers.',
    placeholder: isKhmer ? 'បញ្ចូលអ៊ីមែលរបស់អ្នក' : 'Enter your email',
    privacy: isKhmer ? 'គោលការណ៍ឯកជន' : 'Privacy Policy',
    terms: isKhmer ? 'លក្ខខណ្ឌប្រើប្រាស់' : 'Terms of Service',
    copyright: isKhmer ? 'រក្សាសិទ្ធិគ្រប់យ៉ាង' : 'All rights reserved'
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FontAwesomeIcon icon={faCompass} className="logo-icon" />
              <span>{content.brand}</span>
            </Link>
            <p className="footer-text">{content.intro}</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{content.navTitle}</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/info">Travel Info</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{content.categoryTitle}</h4>
            <ul className="footer-links">
              <li><Link to="/explore?cat=beaches">Beaches</Link></li>
              <li><Link to="/explore?cat=mountains">Mountains</Link></li>
              <li><Link to="/explore?cat=culture">Culture & History</Link></li>
              <li><Link to="/explore?cat=food">Local Cuisine</Link></li>
            </ul>
          </div>

          <div className="footer-section newsletter-section">
            <h4 className="footer-heading">{content.newsletterTitle}</h4>
            <p className="newsletter-text">{content.newsletterText}</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-group">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  type="email"
                  placeholder={content.placeholder}
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

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {content.brand}. {content.copyright}.
          </p>
          <div className="legal-links">
            <Link to="/privacy">{content.privacy}</Link>
            <Link to="/terms">{content.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;