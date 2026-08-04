import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faXmark,
  faExpand,
  faFilter,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Gallery.css';
import galleryData from '../data/placesGallery';

function Gallery({ language = 'en' }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const isKhmer = language === 'kh';

  const filters = isKhmer
    ? [
        { key: 'all', label: 'ទាំងអស់' },
        { key: 'cultural', label: 'វប្បធម៌ និងបុរេប្រវត្តិ' },
        { key: 'nature', label: 'ធម្មជាតិ និងព្រៃ' },
        { key: 'coastal', label: 'ឆ្នេរ និងកោះ' }
      ]
    : [
        { key: 'all', label: 'All' },
        { key: 'cultural', label: 'Cultural & Heritage' },
        { key: 'nature', label: 'Nature & Forests' },
        { key: 'coastal', label: 'Beaches & Islands' },
        { key: 'food', label: 'Cuisine' }
      ];

  const labels = {
    badge: isKhmer ? 'ការជម្រកមើលឃើញ' : 'Visual Explorer',
    title: isKhmer ? 'កម្ពុជា តាមមើលរូបភាព' : 'Cambodia Through the Lens',
    subtitle: isKhmer
      ? 'ស្រាវជ្រាវរូបភាពដែលត្រូវបានប្រមូល និងជ្រើសរើសពីកន្លែងទេសចរណ៍ដ៏អស្ចារ្យនៅទូទាំងប្រទេស។'
      : 'Browse through curated photos from amazing destinations across the country.',
    filter: isKhmer ? 'ចម្រាញ់:' : 'Filter:',
    expand: isKhmer ? 'ពង្រីករូបភាព' : 'Expand image',
    close: isKhmer ? 'បិទ' : 'Close modal',
    likes: isKhmer ? 'ចូលចិត្ត' : 'Likes'
  };

  const filteredItems = activeFilter === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeFilter);

  return (
    <div className="gallery-page">
      <section className="gallery-header">
        <div className="gallery-header-container">
          <span className="gallery-badge">{labels.badge}</span>
          <h1 className="gallery-title">{labels.title}</h1>
          <p className="gallery-subtitle">{labels.subtitle}</p>

          <div className="filter-bar">
            <span className="filter-label">
              <FontAwesomeIcon icon={faFilter} /> {labels.filter}
            </span>
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
      </section>

      <section className="gallery-grid-container">
        <div className="gallery-grid">
          {filteredItems.map((item) => {
            const title = item.title[isKhmer ? 'kh' : 'en'];
            const location = item.location[isKhmer ? 'kh' : 'en'];
            return (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image} alt={title} className="gallery-img" />
                <div className="gallery-card-overlay">
                  <button className="expand-btn" aria-label={labels.expand}>
                    <FontAwesomeIcon icon={faExpand} />
                  </button>
                  <div className="gallery-card-info">
                    <span className="gallery-location">
                      <FontAwesomeIcon icon={faLocationDot} /> {location}
                    </span>
                    <h3 className="gallery-card-title">{title}</h3>
                    <span className="gallery-likes">
                      <FontAwesomeIcon icon={faHeart} /> {item.likes}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label={labels.close}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title[isKhmer ? 'kh' : 'en']} className="lightbox-img" />
            <div className="lightbox-details">
              <div>
                <h2>{selectedImage.title[isKhmer ? 'kh' : 'en']}</h2>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} /> {selectedImage.location[isKhmer ? 'kh' : 'en']}
                </p>
              </div>
              <div className="lightbox-likes">
                <FontAwesomeIcon icon={faHeart} className="heart-icon" /> {selectedImage.likes} {labels.likes}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;