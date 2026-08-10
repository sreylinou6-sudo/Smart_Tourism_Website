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

// Import placesData
import placesData from '../data/placesData';

function Explore() {
  const { t, language } = useLanguage();
  const isKhmer = language === 'kh';

  // ទាញយក Text Labels ចេញពី explore.json
  const content = t('explore');

  const [searchParams, setSearchParams] = useSearchParams();
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const currentPlaceId = searchParams.get('placeId');

  const selectedPlace = placesData.find(
    (p) => String(p.id) === String(currentPlaceId)
  );

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeDetail();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openDetail = (id) => {
    setSearchParams({ placeId: id });
  };

  const closeDetail = () => {
    setSearchParams({});
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites((prev) => prev.filter((favId) => favId !== id));
    } else {
      setFavorites((prev) => [...prev, id]);
    }
  };

  if (!content) return null;

  // Helper សម្រាប់ទាញយក Text តាមភាសា
  const getLocalizedText = (value) => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    return value[language] || value['en'] || '';
  };

  // Filter Data ឱ្យត្រូវគ្នាតាម Category និង Search
  const filteredPlaces = placesData.filter((place) => {
    // 1. Check Category
    let matchesCategory = false;
    if (selectedCategory === 'All' || selectedCategory === 'ទាំងអស់') {
      matchesCategory = true;
    } else if (typeof place.category === 'object') {
      // ប្រសិនបើ place.category ជា object { en: '...', kh: '...' }
      matchesCategory =
        place.category.en === selectedCategory ||
        place.category.kh === selectedCategory ||
        place.category[language] === selectedCategory;
    } else {
      // ប្រសិនបើ place.category ជា string ផ្ទាល់
      matchesCategory =
        place.category === selectedCategory ||
        getLocalizedText(place.category) === selectedCategory;
    }

    // 2. Check Search
    const titleText = getLocalizedText(place.title);
    const locationText = getLocalizedText(place.location);
    const matchesSearch =
      titleText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      locationText.toLowerCase().includes(searchTerm.toLowerCase());

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
            filteredPlaces.map((place) => {
              const currentTitle = getLocalizedText(place.title);
              const currentLocation = getLocalizedText(place.location);
              const currentCategory = getLocalizedText(place.category);

              return (
                <div key={place.id} className="place-card">
                  <div className="place-image-container">
                    <img src={place.image} alt={currentTitle} className="place-image" />

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
                      <span className="place-category">{currentCategory}</span>
                      <div className="place-rating">
                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                        <span>{place.rating}</span>
                        <small>({place.reviews})</small>
                      </div>
                    </div>

                    <h3 className="place-title">{currentTitle}</h3>
                    <div className="place-location">
                      <FontAwesomeIcon icon={faLocationDot} /> {currentLocation}, {content.country || (isKhmer ? 'កម្ពុជា' : 'Cambodia')}
                    </div>

                    <div className="place-card-footer">
                      <button className="details-btn" onClick={() => openDetail(place.id)}>
                        {content.details} <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
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
              <img src={selectedPlace.image} alt={getLocalizedText(selectedPlace.title)} className="detail-hero-image" />
              <div className="detail-hero-content">
                <div className="detail-badges">
                  <span className="detail-category-pill">{getLocalizedText(selectedPlace.category)}</span>
                  {selectedPlace.isPopular && <span className="detail-popular-pill">{content.badge}</span>}
                </div>

                <h2 className="detail-title">{getLocalizedText(selectedPlace.title)}</h2>
                <p className="detail-description">
                  {getLocalizedText(selectedPlace.details?.summary) || content.fallbackSummary}
                </p>

                <div className="detail-hero-stats">
                  <div className="detail-stat-pill">
                    <FontAwesomeIcon icon={faLocationDot} /> {getLocalizedText(selectedPlace.location)}
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
                <p>{getLocalizedText(selectedPlace.details?.summary) || content.fallbackSummary}</p>
              </div>

              <div className="detail-grid">
                <div className="detail-card">
                  <h4>{content.highlights}</h4>
                  <ul className="detail-list">
                    {(getLocalizedText(selectedPlace.details?.highlights) || content.fallbackHighlights || []).map((item, index) => (
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
                      <p>{content.bestTimeText}</p>
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