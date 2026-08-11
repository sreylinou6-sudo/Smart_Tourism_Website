import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faXmark,
  faExpand,
  faFilter,
  faHeart as faHeartSolid,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Gallery.css';

function Gallery({ theme = 'light' }) {
  const { t } = useLanguage();
  const labels = t('gallery');
  const filters = labels?.filters || [];
  const galleryData = t('galleryData');
  const hasGalleryData = Array.isArray(galleryData) && galleryData.length > 0;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [likesMap, setLikesMap] = useState(() => {
    const initial = {};
    if (hasGalleryData) {
      galleryData.forEach((item) => {
        initial[item.id] = { count: item.likes || 0, liked: false };
      });
    }
    return initial;
  });

  const toggleLike = (e, itemId) => {
    e.stopPropagation();
    setLikesMap((prev) => {
      const current = prev[itemId] || { count: 0, liked: false };
      const isLiked = current.liked;
      return {
        ...prev,
        [itemId]: {
          count: isLiked ? current.count - 1 : current.count + 1,
          liked: !isLiked
        }
      };
    });
  };

  const filteredItems = !hasGalleryData
    ? []
    : activeFilter === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const currentSelectedImage =
    selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;
  if (!labels || typeof labels !== 'object' || !hasGalleryData) {
    return null;
  }

  return (
    <div className="gallery-page">
      {/* Hero Header */}
      <section className="gallery-header">
        <div className="gallery-header-container">
          <span className="gallery-badge">{labels.badge}</span>
          <h1 className="gallery-title">{labels.title}</h1>
          <p className="gallery-subtitle">{labels.subtitle}</p>

          <div className="filter-bar-wrapper">
            <span className="filter-label">
              <FontAwesomeIcon icon={faFilter} /> {labels.filter}
            </span>
            <div className="filter-bar">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Masonry Grid */}
      <section className="gallery-grid-container">
        <div className="gallery-grid">
          {filteredItems.map((item, index) => {
            const title = item.title;
            const location = item.location;
            const itemLikeInfo = likesMap[item.id] || { count: item.likes, liked: false };

            return (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={item.image} alt={title} className="gallery-img" loading="lazy" />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-top">
                    <button
                      type="button"
                      className={`like-icon-btn ${itemLikeInfo.liked ? 'liked' : ''}`}
                      onClick={(e) => toggleLike(e, item.id)}
                      aria-label="Like photo"
                    >
                      <FontAwesomeIcon icon={itemLikeInfo.liked ? faHeartSolid : faHeartRegular} />
                    </button>
                    <button type="button" className="expand-icon-btn" aria-label={labels.expand}>
                      <FontAwesomeIcon icon={faExpand} />
                    </button>
                  </div>

                  <div className="gallery-card-info">
                    <span className="gallery-card-location">
                      <FontAwesomeIcon icon={faLocationDot} /> {location}
                    </span>
                    <h3 className="gallery-card-title">{title}</h3>
                    <div className="gallery-card-meta">
                      <span className="gallery-likes">
                        <FontAwesomeIcon icon={faHeartSolid} /> {itemLikeInfo.count}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentSelectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImageIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImageIndex(null)}
              aria-label={labels.close}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="lightbox-nav prev-btn"
              onClick={handlePrevImage}
              aria-label={labels.prev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="lightbox-nav next-btn"
              onClick={handleNextImage}
              aria-label={labels.next}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className="lightbox-image-wrap">
              <img
                src={currentSelectedImage.image}
                alt={currentSelectedImage.title}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-details">
              <div className="lightbox-text">
                <h2>{currentSelectedImage.title}</h2>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} /> {currentSelectedImage.location}
                </p>
              </div>
              <button
                type="button"
                className={`lightbox-like-btn ${likesMap[currentSelectedImage.id]?.liked ? 'liked' : ''}`}
                onClick={(e) => toggleLike(e, currentSelectedImage.id)}
              >
                <FontAwesomeIcon
                  icon={likesMap[currentSelectedImage.id]?.liked ? faHeartSolid : faHeartRegular}
                />
                <span>
                  {likesMap[currentSelectedImage.id]?.count || 0} {labels.likes}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;