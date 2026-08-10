import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLocationDot,
  faHeart,
  faArrowRight,
  faMagnifyingGlass,
  faArrowLeft,
  faClock,
  faCircleCheck,
  faCompass
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Explore.css';

function Explore() {
  const { t, language } = useLanguage();
  const isKhmer = language === 'kh';

  // ទាញយក Content និង Places ទាំងអស់ចេញពី explore.json
  const content = t('explore');

  const [searchParams, setSearchParams] = useSearchParams();
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Reset category ពេលប្តូរភាសា
  useEffect(() => {
    setSelectedCategory(isKhmer ? 'ទាំងអស់' : 'All');
  }, [language, isKhmer]);

  const currentPlaceId = searchParams.get('placeId');
  const placesData = content?.places || [];

  const selectedPlace = placesData.find(
    (p) => String(p.id) === String(currentPlaceId)
  );

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeDetail();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openDetail = (id) => setSearchParams({ placeId: id });
  const closeDetail = () => setSearchParams({});

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  if (!content) return null;

  // Filter Data យ៉ាងសាមញ្ញ
  const filteredPlaces = placesData.filter((place) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      selectedCategory === 'ទាំងអស់' ||
      place.category === selectedCategory;

    const matchesSearch =
      place.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="explore-page">
      <div className="explore-container">
        <div className="explore-header">
          <div>
            <h1 className="explore-title">{content.title}</h1>
            <p className="explore-subtitle">{content.subtitle}</p>
          </div>

          <div className="explore-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              placeholder={content.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="categories-bar">
          <div className="category-pills">
            {(content.categories || []).map((cat, index) => (
              <button
                key={index}
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="places-grid">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <div key={place.id} className="place-card">
                <div className="place-image-container">
                  <img src={place.image} alt={place.title} className="place-image" />
                  {place.isPopular && <span className="popular-badge">{content.badge}</span>}

                  <button
                    className={`favorite-btn ${favorites.includes(place.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(place.id)}
                    aria-label={content.save}
                  >
                    <FontAwesomeIcon
                      icon={favorites.includes(place.id) ? faHeart : faHeartRegular}
                      className={favorites.includes(place.id) ? 'active' : ''}
                    />
                  </button>

                  <div className="price-tag">
                    <span>{content.entry}:</span> <strong>{place.price}</strong>
                  </div>
                </div>

                <div className="place-card-body">
                  <div className="place-meta">
                    <span className="place-category">{place.category}</span>
                    <div className="place-rating">
                      <FontAwesomeIcon icon={faStar} className="star-icon" />
                      <span>{place.rating}</span>
                      <small>({place.reviews})</small>
                    </div>
                  </div>

                  <h3 className="place-title">{place.title}</h3>
                  <div className="place-location">
                    <FontAwesomeIcon icon={faLocationDot} /> {place.location}, {isKhmer ? 'កម្ពុជា' : 'Cambodia'}
                  </div>

                  <div className="place-card-footer">
                    <button className="details-btn" onClick={() => openDetail(place.id)}>
                      {content.details} <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '40px 0' }}>
              <p>{isKhmer ? 'មិនមានទិន្នន័យសម្រាប់បង្ហាញទេ' : 'No places found'}</p>
            </div>
          )}
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedPlace && (
        <div className="detail-overlay" onClick={closeDetail}>
          <div className="detail-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close-btn" onClick={closeDetail} aria-label={content.close}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <div className="detail-hero">
              <img src={selectedPlace.image} alt={selectedPlace.title} className="detail-hero-image" />
              <div className="detail-hero-content">
                <div className="detail-badges">
                  <span className="detail-category-pill">{selectedPlace.category}</span>
                  {selectedPlace.isPopular && <span className="detail-popular-pill">{content.badge}</span>}
                </div>

                <h2 className="detail-title">{selectedPlace.title}</h2>
                <p className="detail-description">{selectedPlace.details?.summary}</p>

                <div className="detail-hero-stats">
                  <div className="detail-stat-pill">
                    <FontAwesomeIcon icon={faLocationDot} /> {selectedPlace.location}
                  </div>
                  <div className="detail-stat-pill">
                    <FontAwesomeIcon icon={faStar} /> {selectedPlace.rating} ({selectedPlace.reviews})
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-content">
              <div className="detail-block">
                <h3>{content.overview}</h3>
                <p>{selectedPlace.details?.summary}</p>
              </div>

              <div className="detail-grid">
                <div className="detail-card">
                  <h4>{content.highlights}</h4>
                  <ul className="detail-list">
                    {(selectedPlace.details?.highlights || []).map((item, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={faCircleCheck} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-card">
                  <h4>{content.plan}</h4>
                  <div className="detail-plan-item">
                    <FontAwesomeIcon icon={faClock} />
                    <div>
                      <strong>{content.bestTime}</strong>
                      <p>{isKhmer ? 'ពេលព្រឹកឬល្ងាចដើម្បីទទួលបានទិដ្ឋភាពល្អបំផុត' : 'Morning or late afternoon for the best atmosphere'}</p>
                    </div>
                  </div>
                  <div className="detail-plan-item">
                    <FontAwesomeIcon icon={faCompass} />
                    <div>
                      <strong>{content.entryFee}</strong>
                      <p>{selectedPlace.price}</p>
                    </div>
                  </div>
                  <button className="detail-cta-btn">
                    {content.ready} <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Explore;