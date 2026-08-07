import React, { useEffect, useState } from 'react';
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
import '../styles/Explore.css';
import placesData from '../data/placesData'; 

function Explore({ language = 'en' }) {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const isKhmer = language === 'kh';

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedPlace(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites((prev) => prev.filter((favId) => favId !== id));
    } else {
      setFavorites((prev) => [...prev, id]);
    }
  };

  const categories = isKhmer
    ? ['ទាំងអស់', 'ប្រវត្តិសាស្ត្រ', 'ឆ្នេរខ្សាច់', 'ធម្មជាតិ', 'វប្បធម៌', 'ការជំរុញ']
    : ['All', 'Historical', 'Beaches', 'Nature', 'Culture', 'Adventure'];

  const filteredPlaces = placesData.filter((place) => {
    const categoryValue = place.category[isKhmer ? 'kh' : 'en'];
    const titleValue = place.title[isKhmer ? 'kh' : 'en'];
    const locationValue = place.location[isKhmer ? 'kh' : 'en'];
    const matchesCategory = selectedCategory === 'All' || selectedCategory === 'ទាំងអស់' || categoryValue === selectedCategory;
    const matchesSearch = titleValue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      locationValue.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLocalizedText = (value, fallback) => {
    if (!value) return fallback;
    return value[isKhmer ? 'kh' : 'en'] || fallback;
  };

  const getDetailSummary = (place) => {
    const fallback = isKhmer
      ? `${getLocalizedText(place.title, 'កន្លែងទេសចរណ៍')} គឺជាកន្លែងដ៏ពិសេសដែលផ្តល់នូវទស្សនៈធម្មជាតិនិងបទពិសោធន៍យ៉ាងទូលំទូលាយសម្រាប់អ្នកទស្សនា។`
      : `${getLocalizedText(place.title, 'This destination')} is a remarkable place that offers scenic beauty, cultural charm, and memorable experiences for every traveler.`;

    return place.details?.summary?.[isKhmer ? 'kh' : 'en'] || fallback;
  };

  const getHighlights = (place) => {
    const fallback = isKhmer
      ? ['ទិដ្ឋភាពធម្មជាតិស្រស់ស្អាត', 'កន្លែងសម្រាប់ថតរូប', 'ឱកាសដើម្បីស្វែងរកបរិយកាស']
      : ['Scenic natural views', 'Great photo spots', 'Perfect for discovery and relaxation'];

    return place.details?.highlights?.[isKhmer ? 'kh' : 'en'] || fallback;
  };

  const labels = {
    title: isKhmer ? 'ស្វែងរកកន្លែងទេសចរណ៍' : 'Explore Destinations',
    subtitle: isKhmer
      ? 'ស្វែងរកកន្លែងដែលទទួលបានការវាយតម្លៃខ្ពស់ និងកន្លែងបាំងមិនចេញនៅទូទាំងតំបន់។'
      : 'Find top-rated spots and hidden treasures across the region.',
    search: isKhmer ? 'ស្វែងរកកន្លែង ឬ ខេត្ត...' : 'Search destination or province...',
    badge: isKhmer ? 'វាយតម្លៃខ្ពស់' : 'Top Rated',
    entry: isKhmer ? 'ចូល' : 'Entry',
    details: isKhmer ? 'មើលព័ត៌មានលម្អិត' : 'View Details',
    save: isKhmer ? 'រក្សាភាសា' : 'Save place',
    overview: isKhmer ? 'ទិដ្ឋភាពទូទៅ' : 'Overview',
    highlights: isKhmer ? 'ចំណុចសំខាន់' : 'Highlights',
    plan: isKhmer ? 'រៀបចំដំណើរទស្សនា' : 'Plan your visit',
    bestTime: isKhmer ? 'ពេលវេលាល្អបំផុត' : 'Best time',
    entryFee: isKhmer ? 'ថ្លៃចូល' : 'Entry fee',
    close: isKhmer ? 'បិទ' : 'Close',
    ready: isKhmer ? 'ត្រៀមរួចរាល់ដើម្បីចាប់ផ្តើមដំណើរស្វែងរក' : 'Ready to explore'
  };

  return (
    <div className="explore-page">
      <div className="explore-container">
        <div className="explore-header">
          <div>
            <h1 className="explore-title">{labels.title}</h1>
            <p className="explore-subtitle">{labels.subtitle}</p>
          </div>

          <div className="explore-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              placeholder={labels.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="categories-bar">
          <div className="category-pills">
            {categories.map((cat, index) => (
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
          {filteredPlaces.map((place) => {
            const currentTitle = place.title[isKhmer ? 'kh' : 'en'];
            const currentLocation = place.location[isKhmer ? 'kh' : 'en'];
            const currentCategory = place.category[isKhmer ? 'kh' : 'en'];
            return (
              <div key={place.id} className="place-card">
                <div className="place-image-container">
                  <img src={place.image} alt={currentTitle} className="place-image" />

                  {place.isPopular && <span className="popular-badge">{labels.badge}</span>}

                  <button
                    className={`favorite-btn ${favorites.includes(place.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(place.id)}
                    aria-label={labels.save}
                  >
                    <FontAwesomeIcon
                      icon={favorites.includes(place.id) ? faHeart : faHeartRegular}
                      className={favorites.includes(place.id) ? 'active' : ''}
                    />
                  </button>

                  <div className="price-tag">
                    <span>{labels.entry}:</span> <strong>{place.price}</strong>
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
                    <FontAwesomeIcon icon={faLocationDot} /> {currentLocation}, {isKhmer ? 'កម្ពុជា' : 'Cambodia'}
                  </div>

                  <div className="place-card-footer">
                    <button className="details-btn" onClick={() => setSelectedPlace(place)}>
                      {labels.details} <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedPlace && (
        <div className="detail-overlay" onClick={() => setSelectedPlace(null)}>
          <div className="detail-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close-btn" onClick={() => setSelectedPlace(null)} aria-label={labels.close}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <div className="detail-hero">
              <img src={selectedPlace.image} alt={getLocalizedText(selectedPlace.title, 'Destination')} className="detail-hero-image" />
              <div className="detail-hero-content">
                <div className="detail-badges">
                  <span className="detail-category-pill">{getLocalizedText(selectedPlace.category, 'Destination')}</span>
                  {selectedPlace.isPopular && <span className="detail-popular-pill">{labels.badge}</span>}
                </div>

                <h2 className="detail-title">{getLocalizedText(selectedPlace.title, 'Destination')}</h2>
                <p className="detail-description">{getDetailSummary(selectedPlace)}</p>

                <div className="detail-hero-stats">
                  <div className="detail-stat-pill">
                    <FontAwesomeIcon icon={faLocationDot} /> {getLocalizedText(selectedPlace.location, 'Location')}
                  </div>
                  <div className="detail-stat-pill">
                    <FontAwesomeIcon icon={faStar} /> {selectedPlace.rating} ({selectedPlace.reviews})
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-content">
              <div className="detail-block">
                <h3>{labels.overview}</h3>
                <p>{getDetailSummary(selectedPlace)}</p>
              </div>

              <div className="detail-grid">
                <div className="detail-card">
                  <h4>{labels.highlights}</h4>
                  <ul className="detail-list">
                    {getHighlights(selectedPlace).map((item, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={faCircleCheck} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-card">
                  <h4>{labels.plan}</h4>
                  <div className="detail-plan-item">
                    <FontAwesomeIcon icon={faClock} />
                    <div>
                      <strong>{labels.bestTime}</strong>
                      <p>{isKhmer ? 'ពេលព្រឹកឬល្ងាចដើម្បីទទួលបានទិដ្ឋភាពល្អបំផុត' : 'Morning or late afternoon for the best atmosphere'}</p>
                    </div>
                  </div>
                  <div className="detail-plan-item">
                    <FontAwesomeIcon icon={faCompass} />
                    <div>
                      <strong>{labels.entryFee}</strong>
                      <p>{selectedPlace.price}</p>
                    </div>
                  </div>
                  <button className="detail-cta-btn">
                    {labels.ready} <FontAwesomeIcon icon={faArrowRight} />
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