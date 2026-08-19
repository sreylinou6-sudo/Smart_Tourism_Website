import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  faStar,
  faLocationDot,
  faHeart,
  faBus,
  faUtensils,
  faCamera,
  faShip,
  faBed,
  faTree,
  faMountain,
  faCompass
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext'; 
import '../styles/FeaturedDestinations.css';

const iconMap = {
  faCamera,
  faBus,
  faUtensils,
  faShip,
  faBed,
  faTree,
  faMountain,
  faCompass
};

function FeaturedDestinations({ onExplore, theme = 'light' }) {
  const [savedTrips, setSavedTrips] = useState([]);
  const navigate = useNavigate();
  const { lang, t, translations } = useLanguage(); 
  const currentLocale = translations?.[lang] || translations?.en || {};
  const destinations = currentLocale.destinations || [];

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  const toggleSave = (id) => {
    setSavedTrips((prev) =>
      prev.includes(id) ? prev.filter((tripId) => tripId !== id) : [...prev, id]
    );
  };

  const handleExplore = (destination) => {
    onExplore?.(destination);
    navigate(`/detail/${destination.id}`);
  };

  return (
    <section className="featured-destinations-section">
      <div className="featured-destinations-container">
        <div className="featured-destinations-header">
          <div className="featured-destinations-heading">
            <span className="featured-destinations-label">
              <FontAwesomeIcon icon={faCompass} /> {t('ui.label')}
            </span>
            <h2>{t('ui.title')}</h2>
            <p>{t('ui.subtitle')}</p>
          </div>
        </div>

        <div className="featured-destinations-grid">
          {Array.isArray(destinations) && destinations.length > 0 ? (
            destinations.map((destination) => {
              const isSaved = savedTrips.includes(destination.id);
              return (
                <article key={destination.id} className="destination-card">
                  <div className="destination-image-wrap">
                    <img src={destination.image} alt={destination.title} className="destination-image" />
                    <span className="destination-badge">{destination.badge}</span>
                    <button
                      type="button"
                      className={`save-btn ${isSaved ? 'active' : ''}`}
                      onClick={() => toggleSave(destination.id)}
                      aria-label={t('ui.saveAria')}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>

                  <div className="destination-body">
                    <div className="destination-top-row">
                      <div>
                        <h3>{destination.title}</h3>
                        <p className="destination-location">
                          <FontAwesomeIcon icon={faLocationDot} /> {destination.location}
                        </p>
                      </div>
                      <div className="destination-price">
                        {destination.price}
                        <span className="price-unit"> / {destination.unit}</span>
                      </div>
                    </div>

                    <div className="destination-meta">
                      <div className="rating-pill">
                        <FontAwesomeIcon icon={faStar} /> {destination.rating}
                      </div>
                      <span className="review-count">
                        {destination.reviews} {t('ui.reviewsLabel')}
                      </span>
                    </div>

                    <div className="destination-highlights">
                      {destination.highlights?.map((item, index) => (
                        <div key={index} className="highlight-chip">
                          <FontAwesomeIcon icon={iconMap[item.icon] || faCompass} />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      type="button" 
                      className="destination-cta" 
                      onClick={() => handleExplore(destination)}
                    >
                      {t('ui.ctaBtn')}
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <p style={{ textAlign: 'center', width: '100%' }}>No destinations found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
export default FeaturedDestinations;